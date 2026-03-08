// ========== Magic Flashcard - メインアプリ ==========
(function () {
  "use strict";

  // ---------- 定数 ----------
  const SET_SIZE = 10;
  const STORAGE_KEY = "magic_flashcard_progress";

  // 忘却曲線に基づく間隔（日数）
  const INTERVALS = [1, 2, 4, 7, 14, 30, 60];

  // ---------- DOM要素 ----------
  const $ = (id) => document.getElementById(id);

  const screens = {
    start: $("screen-start"),
    learn: $("screen-learn"),
    clear: $("screen-clear"),
    done: $("screen-done"),
  };

  const els = {
    startStats: $("start-stats"),
    btnStart: $("btn-start"),
    btnReset: $("btn-reset"),
    btnBack: $("btn-back"),
    progressFill: $("progress-fill"),
    progressText: $("progress-text"),
    cardArea: $("card-area"),
    cardWrapper: $("card-wrapper"),
    card: $("card"),
    cardFront: $("card-front"),
    cardBack: $("card-back"),
    cardEmoji: $("card-emoji"),
    cardImage: $("card-image"),
    cardWord: $("card-word"),
    cardMeaning: $("card-meaning"),
    cardSentence: $("card-sentence"),
    cardSentenceJa: $("card-sentence-ja"),
    btnReplay: $("btn-replay"),
    indicatorLeft: $("indicator-left"),
    indicatorRight: $("indicator-right"),
    clearStats: $("clear-stats"),
    clearConfetti: $("clear-confetti"),
    btnNextSet: $("btn-next-set"),
    btnBackHome: $("btn-back-home"),
    btnDoneHome: $("btn-done-home"),
  };

  // ---------- 状態管理 ----------
  let progress = loadProgress();
  let currentSet = []; // 今回の10枚
  let currentIndex = 0;
  let isFlipped = false;
  let isSwiping = false;
  let setCorrect = 0;
  let setWrong = 0;

  // タッチ/マウス操作
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let isDragging = false;

  // ---------- localStorage管理 ----------
  function loadProgress() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (data && typeof data === "object") return data;
    } catch (e) {}
    return {};
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function getWordProgress(id) {
    if (!progress[id]) {
      progress[id] = {
        correctCount: 0,
        wrongCount: 0,
        intervalIndex: 0,
        nextDate: todayStr(),
      };
    }
    return progress[id];
  }

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function addDays(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  // ---------- 学習セット生成 ----------
  function getDueWords() {
    const today = todayStr();
    return WORD_DATA.filter((w) => {
      const p = getWordProgress(w.id);
      return p.nextDate <= today;
    });
  }

  function buildSet() {
    const due = getDueWords();
    if (due.length === 0) return [];

    // 間違い回数が多い順 → 新しい順にソート
    due.sort((a, b) => {
      const pa = getWordProgress(a.id);
      const pb = getWordProgress(b.id);
      const diffWrong = pb.wrongCount - pa.wrongCount;
      if (diffWrong !== 0) return diffWrong;
      return a.id - b.id;
    });

    return due.slice(0, SET_SIZE);
  }

  // ---------- 画面切り替え ----------
  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  // ---------- スタート画面 ----------
  function updateStartStats() {
    const due = getDueWords();
    const learned = WORD_DATA.filter((w) => {
      const p = getWordProgress(w.id);
      return p.correctCount > 0;
    }).length;

    els.startStats.innerHTML =
      `<span>📚 ${learned} / ${WORD_DATA.length} <ruby>語<rt>ご</rt></ruby></span>` +
      `<span>📝 きょう ${due.length} <ruby>枚<rt>まい</rt></ruby></span>`;
  }

  // ---------- 学習開始 ----------
  function startLearning() {
    currentSet = buildSet();
    if (currentSet.length === 0) {
      showScreen("done");
      return;
    }
    currentIndex = 0;
    setCorrect = 0;
    setWrong = 0;
    showScreen("learn");
    showCard();
  }

  // ---------- カード表示 ----------
  function showCard() {
    if (currentIndex >= currentSet.length) {
      showClearScreen();
      return;
    }

    const word = currentSet[currentIndex];
    isFlipped = false;
    isSwiping = false;

    // リセット
    els.card.classList.remove("flipped");
    els.cardWrapper.className = "card-wrapper card-enter";
    els.cardWrapper.style.transform = "";
    els.cardWrapper.style.opacity = "";
    els.indicatorLeft.style.opacity = 0;
    els.indicatorRight.style.opacity = 0;

    // カード内容 - 画像表示（絵文字は非表示）
    els.cardImage.classList.remove("loaded");
    els.cardImage.src = "";
    els.cardEmoji.textContent = "⏳";
    els.cardEmoji.style.display = "";

    const imgPath = `images/${word.id}.png`;
    const img = new Image();
    img.onload = () => {
      els.cardImage.src = imgPath;
      els.cardImage.classList.add("loaded");
      els.cardEmoji.style.display = "none";
    };
    img.onerror = () => {
      els.cardEmoji.textContent = word.emoji;
    };
    img.src = imgPath;

    els.cardWord.textContent = word.word;
    els.cardMeaning.textContent = word.meaning;
    els.cardSentence.textContent = word.sentence_en;
    els.cardSentenceJa.textContent = word.sentence_ja;

    // プログレス
    updateProgress();

    // 音声自動再生
    setTimeout(() => speakSentence(word.sentence_en), 500);
  }

  function updateProgress() {
    const pct = (currentIndex / currentSet.length) * 100;
    els.progressFill.style.width = pct + "%";
    els.progressText.textContent = `${currentIndex + 1} / ${currentSet.length}`;
  }

  // ---------- カードフリップ ----------
  function flipCard() {
    if (isSwiping) return;
    isFlipped = !isFlipped;
    els.card.classList.toggle("flipped", isFlipped);

    if (isFlipped) {
      const word = currentSet[currentIndex];
      speakWord(word.word);
    }
  }

  // ---------- スワイプ操作 ----------
  function onPointerDown(e) {
    if (isSwiping) return;
    isDragging = true;
    const point = e.touches ? e.touches[0] : e;
    startX = point.clientX;
    startY = point.clientY;
    currentX = 0;
    els.cardWrapper.classList.add("swiping");
    els.cardWrapper.classList.remove("card-enter", "animating");
  }

  function onPointerMove(e) {
    if (!isDragging || isSwiping) return;
    const point = e.touches ? e.touches[0] : e;
    currentX = point.clientX - startX;
    const currentY = point.clientY - startY;

    // 縦方向が大きい場合はスワイプ無効
    if (Math.abs(currentY) > Math.abs(currentX) && Math.abs(currentX) < 20) {
      return;
    }

    e.preventDefault();

    const rotation = currentX * 0.08;
    els.cardWrapper.style.transform = `translateX(${currentX}px) rotate(${rotation}deg)`;

    // インジケーター表示
    const threshold = 60;
    if (currentX > threshold) {
      els.indicatorRight.style.opacity = Math.min((currentX - threshold) / 80, 1);
      els.indicatorLeft.style.opacity = 0;
    } else if (currentX < -threshold) {
      els.indicatorLeft.style.opacity = Math.min((-currentX - threshold) / 80, 1);
      els.indicatorRight.style.opacity = 0;
    } else {
      els.indicatorLeft.style.opacity = 0;
      els.indicatorRight.style.opacity = 0;
    }
  }

  function onPointerUp(e) {
    if (!isDragging || isSwiping) return;
    isDragging = false;
    els.cardWrapper.classList.remove("swiping");

    const swipeThreshold = 100;

    if (currentX > swipeThreshold) {
      swipeCard("right");
    } else if (currentX < -swipeThreshold) {
      swipeCard("left");
    } else {
      // 戻す
      els.cardWrapper.classList.add("animating");
      els.cardWrapper.style.transform = "";
      els.indicatorLeft.style.opacity = 0;
      els.indicatorRight.style.opacity = 0;

      // タップ判定（移動距離が小さい場合）
      if (Math.abs(currentX) < 10) {
        flipCard();
      }
    }
  }

  function swipeCard(direction) {
    isSwiping = true;
    const word = currentSet[currentIndex];
    const wp = getWordProgress(word.id);

    if (direction === "right") {
      // わかった
      wp.correctCount++;
      wp.intervalIndex = Math.min(wp.intervalIndex + 1, INTERVALS.length - 1);
      wp.nextDate = addDays(todayStr(), INTERVALS[wp.intervalIndex]);
      setCorrect++;
      playCorrectSound();
    } else {
      // わからない
      wp.wrongCount++;
      wp.intervalIndex = 0;
      wp.nextDate = addDays(todayStr(), 1);
      setWrong++;
    }

    saveProgress();

    // アニメーション
    els.cardWrapper.classList.add(
      direction === "right" ? "swipe-right" : "swipe-left"
    );

    setTimeout(() => {
      currentIndex++;
      showCard();
    }, 400);
  }

  // ---------- クリア画面 ----------
  function showClearScreen() {
    showScreen("clear");
    showConfetti();
    playFanfare();

    els.clearStats.innerHTML =
      `<div class="stat-correct">⭕ わかった: ${setCorrect} <ruby>枚<rt>まい</rt></ruby></div>` +
      `<div class="stat-wrong">❌ わからない: ${setWrong} <ruby>枚<rt>まい</rt></ruby></div>`;
  }

  // ---------- 紙吹雪エフェクト ----------
  function showConfetti() {
    els.clearConfetti.innerHTML = "";
    const colors = [
      "#FF6B9D",
      "#6C5CE7",
      "#FFD700",
      "#00B894",
      "#FF8A5C",
      "#A78BFA",
      "#67E8F9",
    ];

    for (let i = 0; i < 50; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "%";
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 0.8 + "s";
      piece.style.animationDuration = 2 + Math.random() * 2 + "s";
      const size = 8 + Math.random() * 10;
      piece.style.width = size + "px";
      piece.style.height = size + "px";
      piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "3px";
      els.clearConfetti.appendChild(piece);
    }
  }

  // ---------- 音声 (TTS) ----------
  // 子供向けの明るい声を選択
  function pickChildFriendlyVoice() {
    const voices = window.speechSynthesis.getVoices();
    const enVoices = voices.filter((v) => v.lang.startsWith("en"));
    // 優先: Samantha (iOS/Mac), Zira (Windows), Female系
    const preferred = ["Samantha", "Karen", "Zira", "Hazel", "Female"];
    for (const name of preferred) {
      const found = enVoices.find((v) => v.name.includes(name));
      if (found) return found;
    }
    return enVoices[0] || null;
  }

  function speakSentence(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.75;
    utter.pitch = 1.4;
    utter.volume = 1.0;

    const voice = pickChildFriendlyVoice();
    if (voice) utter.voice = voice;

    window.speechSynthesis.speak(utter);
  }

  function speakWord(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.65;
    utter.pitch = 1.5;
    utter.volume = 1.0;

    const voice = pickChildFriendlyVoice();
    if (voice) utter.voice = voice;

    window.speechSynthesis.speak(utter);
  }

  // 音声リストが非同期で読み込まれるブラウザ対応
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  // ---------- 効果音 (Web Audio API) ----------
  let audioCtx = null;

  function getAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  function playCorrectSound() {
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  }

  function playFanfare() {
    try {
      const ctx = getAudioCtx();
      const notes = [523, 659, 784, 1047];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
        gain.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(
          0.01,
          ctx.currentTime + i * 0.15 + 0.4
        );
        osc.start(ctx.currentTime + i * 0.15);
        osc.stop(ctx.currentTime + i * 0.15 + 0.4);
      });
    } catch (e) {}
  }

  // ---------- イベント登録 ----------
  // スタート画面
  els.btnStart.addEventListener("click", () => {
    // AudioContextを起動（ユーザー操作必須）
    getAudioCtx();
    startLearning();
  });

  els.btnReset.addEventListener("click", () => {
    if (confirm("がくしゅうデータを ぜんぶ けしますか？")) {
      progress = {};
      saveProgress();
      updateStartStats();
    }
  });

  // 学習画面
  els.btnBack.addEventListener("click", () => {
    window.speechSynthesis.cancel();
    showScreen("start");
    updateStartStats();
  });

  els.btnReplay.addEventListener("click", (e) => {
    e.stopPropagation();
    const word = currentSet[currentIndex];
    speakSentence(word.sentence_en);
  });

  // スワイプ - タッチ
  els.cardArea.addEventListener("touchstart", onPointerDown, {
    passive: true,
  });
  els.cardArea.addEventListener("touchmove", onPointerMove, { passive: false });
  els.cardArea.addEventListener("touchend", onPointerUp);

  // スワイプ - マウス
  els.cardArea.addEventListener("mousedown", onPointerDown);
  els.cardArea.addEventListener("mousemove", onPointerMove);
  els.cardArea.addEventListener("mouseup", onPointerUp);
  els.cardArea.addEventListener("mouseleave", onPointerUp);

  // クリア画面
  els.btnNextSet.addEventListener("click", startLearning);
  els.btnBackHome.addEventListener("click", () => {
    showScreen("start");
    updateStartStats();
  });

  // 全完了画面
  els.btnDoneHome.addEventListener("click", () => {
    showScreen("start");
    updateStartStats();
  });

  // キーボード操作（PC用）
  document.addEventListener("keydown", (e) => {
    if (!screens.learn.classList.contains("active")) return;

    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flipCard();
    } else if (e.key === "ArrowRight") {
      if (isFlipped && !isSwiping) swipeCard("right");
    } else if (e.key === "ArrowLeft") {
      if (isFlipped && !isSwiping) swipeCard("left");
    }
  });

  // ---------- 初期化 ----------
  updateStartStats();
})();
