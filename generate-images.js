/**
 * Magic Flashcard - 画像バッチ生成スクリプト
 *
 * 使い方:
 *   node generate-images.js --key YOUR_OPENAI_API_KEY
 *   node generate-images.js --key YOUR_OPENAI_API_KEY --start 50 --end 60
 *
 * オプション:
 *   --key    OpenAI APIキー（必須）
 *   --start  開始ID（デフォルト: 1）
 *   --end    終了ID（デフォルト: 100）
 *   --model  画像生成モデル（デフォルト: dall-e-3）
 *   --size   画像サイズ（デフォルト: 1024x1024）
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// ---------- 共通プロンプト（完全固定） ----------
const COMMON_PROMPT =
  "A charming children's picture book illustration in a warm, hand-drawn watercolor and colored pencil style on textured paper, featuring soft outlines. Simple and light background suitable for a flashcard. ";

// ---------- 引数パース ----------
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { start: 1, end: 100, model: "dall-e-3", size: "1024x1024" };
  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i].replace(/^--/, "");
    const val = args[i + 1];
    if (flag === "key") opts.key = val;
    else if (flag === "start") opts.start = parseInt(val, 10);
    else if (flag === "end") opts.end = parseInt(val, 10);
    else if (flag === "model") opts.model = val;
    else if (flag === "size") opts.size = val;
  }
  if (!opts.key) {
    console.error("エラー: --key YOUR_OPENAI_API_KEY を指定してください");
    process.exit(1);
  }
  return opts;
}

// ---------- 単語データ読み込み ----------
function loadWordData() {
  const code = fs.readFileSync(path.join(__dirname, "words.js"), "utf-8");
  // WORD_DATA をグローバル変数として評価
  const fn = new Function(code + "; return WORD_DATA;");
  return fn();
}

// ---------- DALL-E API 呼び出し ----------
function callDallE(apiKey, prompt, model, size) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: model,
      prompt: prompt,
      n: 1,
      size: size,
      response_format: "url",
    });

    const options = {
      hostname: "api.openai.com",
      path: "/v1/images/generations",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (json.error) {
            reject(new Error(json.error.message));
          } else {
            resolve(json.data[0].url);
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// ---------- 画像ダウンロード ----------
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (res) => {
      // リダイレクト対応
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(filepath);
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

// ---------- スリープ ----------
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------- メイン ----------
async function main() {
  const opts = parseArgs();
  const words = loadWordData();
  const imagesDir = path.join(__dirname, "images");

  // images ディレクトリ作成
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
  }

  const targets = words.filter((w) => w.id >= opts.start && w.id <= opts.end);
  console.log(`\n🪄 Magic Flashcard 画像生成`);
  console.log(`   モデル: ${opts.model}`);
  console.log(`   サイズ: ${opts.size}`);
  console.log(`   対象: ID ${opts.start} ～ ${opts.end}（${targets.length}語）\n`);

  let success = 0;
  let failed = 0;

  for (const word of targets) {
    const filepath = path.join(imagesDir, `${word.id}.png`);

    // 既に存在する場合はスキップ
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  ID ${word.id} (${word.word}) - スキップ（既存）`);
      success++;
      continue;
    }

    const fullPrompt = COMMON_PROMPT + word.image_prompt;

    try {
      console.log(`🎨 ID ${word.id} (${word.word}) - 生成中...`);
      const imageUrl = await callDallE(opts.key, fullPrompt, opts.model, opts.size);
      await downloadImage(imageUrl, filepath);
      console.log(`✅ ID ${word.id} (${word.word}) - 保存完了`);
      success++;
    } catch (err) {
      console.error(`❌ ID ${word.id} (${word.word}) - エラー: ${err.message}`);
      failed++;
    }

    // レートリミット対策: 1リクエストごとに待機
    await sleep(2000);
  }

  console.log(`\n📊 結果: 成功 ${success} / 失敗 ${failed} / 合計 ${targets.length}`);
  console.log(`📁 保存先: ${imagesDir}\n`);
}

main().catch((err) => {
  console.error("致命的エラー:", err);
  process.exit(1);
});
