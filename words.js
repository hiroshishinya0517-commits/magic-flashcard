// Magic Flashcard - 英検3級 小1向け 150語マスターデータ
const WORD_DATA = [
  {
    id: 1, word: "grow", meaning: "そだつ、おおきくなる",
    sentence_en: "The tree grows tall.", sentence_ja: "木が たかく そだつよ。",
    emoji: "🐻🌱🌳",
    image_prompt: "A cute brown bear looking up at a small sprout that is growing into a big tall tree, with sparkles."
  },
  {
    id: 2, word: "build", meaning: "たてる、つくる",
    sentence_en: "Let's build a house!", sentence_ja: "おうちを たてよう！",
    emoji: "🐰🧱🏠",
    image_prompt: "A cute rabbit stacking bricks to build a small house, with a hammer and happy expression."
  },
  {
    id: 3, word: "catch", meaning: "つかまえる",
    sentence_en: "I catch a big fish!", sentence_ja: "おおきな おさかなを つかまえた！",
    emoji: "🐱🎣🐟",
    image_prompt: "A cute cat pulling a big fish out of a river with a fishing rod, looking excited and surprised."
  },
  {
    id: 4, word: "bring", meaning: "もってくる",
    sentence_en: "Bring the apple here.", sentence_ja: "りんごを ここに もってきて。",
    emoji: "🐕🍎💨",
    image_prompt: "A cute dog running happily with a red apple in its mouth, bringing it to someone."
  },
  {
    id: 5, word: "choose", meaning: "えらぶ",
    sentence_en: "Choose your favorite hat.", sentence_ja: "すきな ぼうしを えらんでね。",
    emoji: "🦊🎩🤔",
    image_prompt: "A cute fox looking back and forth between a red hat and a blue hat, trying to decide which to pick."
  },
  {
    id: 6, word: "decide", meaning: "きめる",
    sentence_en: "I decide to go.", sentence_ja: "ぼくは いくことに きめた。",
    emoji: "🐧🎒✨",
    image_prompt: "A cute penguin wearing a backpack, stepping forward confidently and energetically setting off on a journey."
  },
  {
    id: 7, word: "invite", meaning: "しょうたいする",
    sentence_en: "I invite my friends.", sentence_ja: "おともだちを しょうたいするよ。",
    emoji: "🐻💌📮",
    image_prompt: "A cute brown bear putting an invitation letter into a red mailbox, looking excited about the party."
  },
  {
    id: 8, word: "join", meaning: "なかまにはいる",
    sentence_en: "Join us!", sentence_ja: "ぼくたちの なかまに はいって！",
    emoji: "🐻🐰🤝",
    image_prompt: "Cute animals holding hands in a circle, waving and beckoning someone to come join them."
  },
  {
    id: 9, word: "prepare", meaning: "じゅんびする",
    sentence_en: "Prepare for the party.", sentence_ja: "パーティーの じゅんびを しよう。",
    emoji: "🐿️🎂🎈",
    image_prompt: "A cute squirrel arranging a cake and flowers on a table, decorating for a party with balloons."
  },
  {
    id: 10, word: "promise", meaning: "やくそくする",
    sentence_en: "I promise.", sentence_ja: "ぼくは やくそくするよ。",
    emoji: "🐻🤙😊",
    image_prompt: "Two cute animals doing a pinky promise with smiling faces, linking their little fingers together."
  },
  {
    id: 11, word: "receive", meaning: "うけとる",
    sentence_en: "I receive a letter.", sentence_ja: "おてがみを うけとったよ。",
    emoji: "🐻💌🐦",
    image_prompt: "A cute brown bear happily receiving a letter from a postman bird, looking delighted."
  },
  {
    id: 12, word: "share", meaning: "わけあう",
    sentence_en: "Let's share the cake.", sentence_ja: "ケーキを わけあおう。",
    emoji: "🐻🎂🐰",
    image_prompt: "A cute brown bear and rabbit splitting a big cake in half to share, both looking happy."
  },
  {
    id: 13, word: "spend", meaning: "（じかんを）すごす",
    sentence_en: "I spend time with you.", sentence_ja: "きみと じかんを すごすよ。",
    emoji: "🐻🐰😴",
    image_prompt: "Cute animals napping together peacefully on a grassy meadow, spending a lazy relaxing afternoon."
  },
  {
    id: 14, word: "surprise", meaning: "おどろかせる",
    sentence_en: "Surprise!", sentence_ja: "びっくり！",
    emoji: "🎁😲✨",
    image_prompt: "A cute animal popping out of a box to surprise a friend, with confetti and a shocked happy expression."
  },
  {
    id: 15, word: "touch", meaning: "さわる",
    sentence_en: "Don't touch the fire!", sentence_ja: "火に さわらないで！",
    emoji: "🐻🔥🖐️",
    image_prompt: "A cute brown bear reaching toward a campfire and pulling its paw back because it is hot."
  },
  {
    id: 16, word: "turn", meaning: "まわる、まがる",
    sentence_en: "Turn right.", sentence_ja: "右に まがって。",
    emoji: "🐻➡️📍",
    image_prompt: "A cute animal at a road corner with an arrow sign pointing right, about to turn the corner."
  },
  {
    id: 17, word: "wear", meaning: "きる、かぶる",
    sentence_en: "I wear a red shirt.", sentence_ja: "あかい シャツを きているよ。",
    emoji: "🐻👕🪞",
    image_prompt: "A cute brown bear wearing a favorite red shirt and posing in front of a mirror, looking proud."
  },
  {
    id: 18, word: "win", meaning: "かつ",
    sentence_en: "I win the game!", sentence_ja: "ゲームに かったよ！",
    emoji: "🐻🏅🎉",
    image_prompt: "A cute brown bear winning first place in a race, receiving a gold medal and cheering happily."
  },
  {
    id: 19, word: "worry", meaning: "しんぱいする",
    sentence_en: "Don't worry.", sentence_ja: "しんぱい しないで。",
    emoji: "🐻🐰💕",
    image_prompt: "A cute brown bear gently patting a crying rabbit on the head to comfort it."
  },
  {
    id: 20, word: "hide", meaning: "かくす、かくれる",
    sentence_en: "Hide behind the tree.", sentence_ja: "木の うしろに かくれて。",
    emoji: "🐰🌳👀",
    image_prompt: "A cute rabbit hiding behind a tree with just its ears and tail peeking out from behind."
  },
  {
    id: 21, word: "agree", meaning: "さんせいする",
    sentence_en: "I agree with you.", sentence_ja: "ぼくも そうおもうよ。",
    emoji: "🐻🐰😊",
    image_prompt: "Cute animals nodding happily at each other with smiling faces, agreeing together."
  },
  {
    id: 22, word: "arrive", meaning: "とうちゃくする",
    sentence_en: "The train arrives.", sentence_ja: "でんしゃが ついたよ。",
    emoji: "🚂🏝️🐻",
    image_prompt: "A small steam train arriving at an island station with animals getting off excitedly."
  },
  {
    id: 23, word: "borrow", meaning: "かりる",
    sentence_en: "I borrow a book.", sentence_ja: "ほんを かりるよ。",
    emoji: "🐻📖🦉",
    image_prompt: "A cute brown bear receiving a picture book from a wise owl at a library counter."
  },
  {
    id: 24, word: "care", meaning: "おせわをする",
    sentence_en: "I care for my dog.", sentence_ja: "いぬの おせわをするよ。",
    emoji: "🐻🐶🥛",
    image_prompt: "A cute brown bear feeding milk to a small puppy and gently patting it on the head."
  },
  {
    id: 25, word: "collect", meaning: "あつめる",
    sentence_en: "I collect shiny stones.", sentence_ja: "キラキラの いしを あつめるよ。",
    emoji: "🐻💎✨",
    image_prompt: "A cute brown bear arranging colorful shiny stones neatly inside a small treasure chest."
  },
  {
    id: 26, word: "cover", meaning: "おおう、かぶせる",
    sentence_en: "Cover the box.", sentence_ja: "はこに ふたを かぶせて。",
    emoji: "🐻🎁🧣",
    image_prompt: "A cute brown bear gently placing a pretty cloth over a present box, covering it softly."
  },
  {
    id: 27, word: "cry", meaning: "なく",
    sentence_en: "Don't cry.", sentence_ja: "なかないで。",
    emoji: "🐻😢🩹",
    image_prompt: "A cute baby bear that fell down and is crying, while a bigger bear puts a bandage on its knee."
  },
  {
    id: 28, word: "draw", meaning: "えをかく",
    sentence_en: "Let's draw a picture.", sentence_ja: "えを かこう。",
    emoji: "🐻🖍️🗺️",
    image_prompt: "A cute brown bear drawing a colorful island map on a big sheet of paper with crayons."
  },
  {
    id: 29, word: "drop", meaning: "おとす",
    sentence_en: "I drop my toy.", sentence_ja: "おもちゃを おとしちゃった。",
    emoji: "🐻⚽😯",
    image_prompt: "A cute brown bear looking surprised as a ball slips from its hands and rolls away on the ground."
  },
  {
    id: 30, word: "excuse", meaning: "ゆるす",
    sentence_en: "Excuse me.", sentence_ja: "ごめんなさい（しつれいします）。",
    emoji: "🐻🖐️😅",
    image_prompt: "A cute brown bear raising its hand apologetically while passing between a group of animal friends."
  },
  {
    id: 31, word: "fall", meaning: "おちる、ころぶ",
    sentence_en: "The leaves fall.", sentence_ja: "はっぱが おちるよ。",
    emoji: "🍂🍁🌳",
    image_prompt: "Colorful yellow and red autumn leaves gently fluttering down from a tree in a beautiful scene."
  },
  {
    id: 32, word: "fill", meaning: "いっぱいにする",
    sentence_en: "Fill the cup with water.", sentence_ja: "コップを お水で いっぱいにして。",
    emoji: "🫖🥤💧",
    image_prompt: "A cute brown bear pouring water from a kettle into an empty glass, filling it to the brim."
  },
  {
    id: 33, word: "follow", meaning: "ついていく",
    sentence_en: "Follow me!", sentence_ja: "ぼくに ついてきて！",
    emoji: "🐕🚩🐻",
    image_prompt: "A dog leader carrying a flag with cute animals walking in a line behind it, following along."
  },
  {
    id: 34, word: "happen", meaning: "おこる",
    sentence_en: "What happened?", sentence_ja: "なにが あったの？",
    emoji: "🐻❓🍽️",
    image_prompt: "A cute brown bear scratching its head with a question mark above, looking at a broken plate on the floor."
  },
  {
    id: 35, word: "hit", meaning: "うつ、ぶつかる",
    sentence_en: "Hit the ball!", sentence_ja: "ボールを うって！",
    emoji: "🐻🏏⚾",
    image_prompt: "A cute brown bear swinging a wooden bat and hitting a ball with full power, with a big impact effect."
  },
  {
    id: 36, word: "hold", meaning: "もつ、だく",
    sentence_en: "Hold my hand.", sentence_ja: "てを つないで。",
    emoji: "🐻🤝🐻",
    image_prompt: "A parent bear and a baby bear holding hands tightly and walking together, both smiling happily."
  },
  {
    id: 37, word: "hurry", meaning: "いそぐ",
    sentence_en: "Hurry up!", sentence_ja: "いそいで！",
    emoji: "🐰⏰💨",
    image_prompt: "A cute rabbit looking at a clock and dashing in a hurry, with speed lines behind it."
  },
  {
    id: 38, word: "imagine", meaning: "そうぞうする",
    sentence_en: "Imagine a big dragon.", sentence_ja: "おおきな ドラゴンを そうぞうして。",
    emoji: "🐻💭🐉",
    image_prompt: "A cute brown bear with closed eyes, a thought cloud above its head showing a big friendly dragon."
  },
  {
    id: 39, word: "keep", meaning: "たもつ、しまっておく",
    sentence_en: "Keep it clean.", sentence_ja: "きれいに しておいてね。",
    emoji: "🐻🧹✨",
    image_prompt: "A cute brown bear sweeping with a broom, keeping a room sparkling clean and tidy."
  },
  {
    id: 40, word: "kick", meaning: "ける",
    sentence_en: "Kick the ball!", sentence_ja: "ボールを けって！",
    emoji: "🐻⚽💨",
    image_prompt: "A cute brown bear kicking a soccer ball energetically on a grassy field, the ball flying forward."
  },
  {
    id: 41, word: "laugh", meaning: "わらう",
    sentence_en: "Everyone laughs.", sentence_ja: "みんな わらっているよ。",
    emoji: "🐵😂🐻",
    image_prompt: "A monkey making a funny face while all the animal friends around it are laughing and holding their bellies."
  },
  {
    id: 42, word: "leave", meaning: "おいていく、はなれる",
    sentence_en: "Leave it here.", sentence_ja: "ここに おいておいて。",
    emoji: "🐻📝🚪",
    image_prompt: "A cute brown bear placing a letter on a table and walking out of the room, leaving it behind."
  },
  {
    id: 43, word: "lose", meaning: "なくす、まける",
    sentence_en: "I lose my key.", sentence_ja: "かぎを なくしちゃった。",
    emoji: "🐻🔑😰",
    image_prompt: "A cute brown bear turning its pockets inside out in a panic, looking for a lost key."
  },
  {
    id: 44, word: "mean", meaning: "いみする",
    sentence_en: "What does it mean?", sentence_ja: "どういう いみ？",
    emoji: "🐻❓📋",
    image_prompt: "A cute brown bear tilting its head in front of a sign it cannot read, with question marks."
  },
  {
    id: 45, word: "move", meaning: "うごく、ひっこす",
    sentence_en: "Move the box.", sentence_ja: "はこを うごかして。",
    emoji: "🐻📦💪",
    image_prompt: "A cute brown bear pushing a heavy cardboard box sideways with effort, saying heave-ho."
  },
  {
    id: 46, word: "pass", meaning: "てわたす、とおる",
    sentence_en: "Pass the salt.", sentence_ja: "おしおを とって。",
    emoji: "🐻🧂🐰",
    image_prompt: "A cute brown bear passing a salt shaker to a rabbit friend across the dinner table."
  },
  {
    id: 47, word: "pay", meaning: "はらう",
    sentence_en: "I pay for the apple.", sentence_ja: "りんごの おかねを はらうよ。",
    emoji: "🐻🪙🐷",
    image_prompt: "A cute brown bear handing coins to a pig shopkeeper to buy a red apple at a small store."
  },
  {
    id: 48, word: "pick", meaning: "えらぶ、つむ",
    sentence_en: "Pick a flower.", sentence_ja: "お花を つもう。",
    emoji: "🐻🌸✨",
    image_prompt: "A cute brown bear gently picking one pretty flower from a field of wildflowers."
  },
  {
    id: 49, word: "pull", meaning: "ひっぱる",
    sentence_en: "Pull the rope!", sentence_ja: "ロープを ひっぱって！",
    emoji: "🐻🪢💪",
    image_prompt: "Cute animals pulling a tug-of-war rope together with all their might, leaning backward."
  },
  {
    id: 50, word: "push", meaning: "おす",
    sentence_en: "Push the button!", sentence_ja: "ボタンを おして！",
    emoji: "🐻🔴👆",
    image_prompt: "A cute brown bear pressing a big red button on a wall with its finger, looking excited."
  },
  {
    id: 51, word: "animal", meaning: "どうぶつ",
    sentence_en: "I like this animal.", sentence_ja: "この どうぶつが すきだよ。",
    emoji: "🐻🐰😊",
    image_prompt: "A cute brown bear and rabbit smiling happily together on an island, looking at each other with joy."
  },
  {
    id: 52, word: "bear", meaning: "くま",
    sentence_en: "The bear is sleeping.", sentence_ja: "くまが ねむっているよ。",
    emoji: "🐻😴🌳",
    image_prompt: "A big round cute brown bear sleeping peacefully under the shade of a tree, with Zzz floating above."
  },
  {
    id: 53, word: "bird", meaning: "とり",
    sentence_en: "A small bird flies.", sentence_ja: "ちいさな とりが とぶよ。",
    emoji: "🐤☁️💨",
    image_prompt: "A cute small yellow bird flapping its wings and flying in a bright blue sky with fluffy clouds."
  },
  {
    id: 54, word: "cloud", meaning: "くも",
    sentence_en: "Look at the white cloud.", sentence_ja: "しろい くもを 見て。",
    emoji: "👆☁️✨",
    image_prompt: "A cute brown bear pointing up at a big fluffy white cloud shaped like cotton candy in the sky."
  },
  {
    id: 55, word: "earth", meaning: "ちきゅう、つち",
    sentence_en: "We live on the earth.", sentence_ja: "ぼくたちは ちきゅうに すんでいるよ。",
    emoji: "🌍✨🐻",
    image_prompt: "A beautiful round blue and green Earth floating in space, looking bright and pretty from the outside."
  },
  {
    id: 56, word: "fire", meaning: "ひ",
    sentence_en: "The fire is warm.", sentence_ja: "火が あたたかいね。",
    emoji: "🔥🐻🐰",
    image_prompt: "Cute animal friends sitting around a warm campfire, looking cozy and warm with orange glow on their faces."
  },
  {
    id: 57, word: "flower", meaning: "はな",
    sentence_en: "A pretty red flower.", sentence_ja: "きれいな あかい お花。",
    emoji: "🌷🔴✨",
    image_prompt: "A bright red tulip-like flower blooming beautifully at the feet of a cute brown bear admiring it."
  },
  {
    id: 58, word: "forest", meaning: "もり",
    sentence_en: "Let's go to the forest.", sentence_ja: "もりへ いこう。",
    emoji: "🌲🌳🐻",
    image_prompt: "The entrance to a lush green forest with many tall trees, a cute brown bear about to walk in excitedly."
  },
  {
    id: 59, word: "grass", meaning: "くさ、しばふ",
    sentence_en: "Sit on the green grass.", sentence_ja: "みどりの しばふに すわろう。",
    emoji: "🟢🧺🐻",
    image_prompt: "A cute brown bear spreading a picnic blanket on soft fluffy green grass in a sunny meadow."
  },
  {
    id: 60, word: "hole", meaning: "あな",
    sentence_en: "A deep hole in the ground.", sentence_ja: "じめんの ふかい あな。",
    emoji: "🕳️🐻👀",
    image_prompt: "A cute brown bear carefully peeking down into a deep hole in the ground dug by a mole."
  },
  {
    id: 61, word: "island", meaning: "しま",
    sentence_en: "This is our island.", sentence_ja: "ここが ぼくたちの しまだよ。",
    emoji: "🏝️🐻🐰",
    image_prompt: "A cute little island floating in the middle of the ocean, with a small house, trees, and animal friends on it."
  },
  {
    id: 62, word: "lake", meaning: "みずうみ",
    sentence_en: "Swim in the lake.", sentence_ja: "みずうみで およぐよ。",
    emoji: "🦆💧🏞️",
    image_prompt: "A calm quiet lake with no waves, a cute duck swimming peacefully on the smooth water surface."
  },
  {
    id: 63, word: "leaf", meaning: "はっぱ",
    sentence_en: "A green leaf falls.", sentence_ja: "みどりの はっぱが おちる。",
    emoji: "🍃🌿⬇️",
    image_prompt: "A single green leaf gently fluttering down from a tree branch, spinning softly as it falls."
  },
  {
    id: 64, word: "moon", meaning: "つき",
    sentence_en: "The moon is bright.", sentence_ja: "おつきさまが あかるいね。",
    emoji: "🌕✨🌙",
    image_prompt: "A big bright full moon shining in the dark night sky, with a cute brown bear gazing up at it."
  },
  {
    id: 65, word: "mountain", meaning: "やま",
    sentence_en: "Climb the high mountain.", sentence_ja: "たかい やまに のぼろう。",
    emoji: "⛰️🐻🧗",
    image_prompt: "A cute brown bear hiking up a tall mountain with a little snow on top, carrying a small flag."
  },
  {
    id: 66, word: "ocean", meaning: "うみ",
    sentence_en: "The big blue ocean.", sentence_ja: "おおきくて あおい うみ。",
    emoji: "🌊🏝️💙",
    image_prompt: "A vast beautiful blue ocean with gentle waves surrounding a small island, seen from the shore."
  },
  {
    id: 67, word: "plant", meaning: "しょくぶつ、くさき",
    sentence_en: "Water the plant.", sentence_ja: "しょくぶつに お水を あげよう。",
    emoji: "🐻🚿🌱",
    image_prompt: "A cute brown bear carefully watering a small plant in a pot with a green watering can, water drops sparkling."
  },
  {
    id: 68, word: "river", meaning: "かわ",
    sentence_en: "Cross the long river.", sentence_ja: "ながい かわを わたろう。",
    emoji: "🐻🪨💧",
    image_prompt: "A cute brown bear hopping across stepping stones in a flowing river, balancing carefully."
  },
  {
    id: 69, word: "rock", meaning: "いわ",
    sentence_en: "A heavy rock.", sentence_ja: "おもい いわ。",
    emoji: "🐻🪨💦",
    image_prompt: "A cute brown bear pushing hard against a big heavy rock, straining with effort and sweat drops."
  },
  {
    id: 70, word: "sky", meaning: "そら",
    sentence_en: "The sky is blue.", sentence_ja: "おそらが あおいね。",
    emoji: "🐻☁️💙",
    image_prompt: "A cute brown bear lying on its back on the grass, looking up at a clear bright blue sky."
  },
  {
    id: 71, word: "space", meaning: "うちゅう、ばしょ",
    sentence_en: "Stars in space.", sentence_ja: "うちゅうの ほしたち。",
    emoji: "🚀⭐🌌",
    image_prompt: "A cute brown bear in a small rocket ship flying through dark space, surrounded by sparkling stars."
  },
  {
    id: 72, word: "star", meaning: "ほし",
    sentence_en: "A shining star.", sentence_ja: "きらきら光る おほしさま。",
    emoji: "⭐✨🌙",
    image_prompt: "A bright yellow star shining the brightest in the night sky, with sparkle effects all around it."
  },
  {
    id: 73, word: "stone", meaning: "いし",
    sentence_en: "Throw a small stone.", sentence_ja: "ちいさな いしを なげるよ。",
    emoji: "🐻🪨💨",
    image_prompt: "A cute brown bear throwing a small round stone through the air with a happy expression."
  },
  {
    id: 74, word: "sun", meaning: "たいよう",
    sentence_en: "The sun is hot.", sentence_ja: "たいようが あついね。",
    emoji: "☀️🥵🐻",
    image_prompt: "A big warm sun shining brightly in the center of the sky, with a bear squinting from the warmth."
  },
  {
    id: 75, word: "tree", meaning: "き",
    sentence_en: "A tall tree.", sentence_ja: "背のたかい 木。",
    emoji: "🌳⬆️🐻",
    image_prompt: "A very tall magnificent tree with many green leaves, so tall that a cute brown bear has to look way up."
  },
  {
    id: 76, word: "water", meaning: "みず",
    sentence_en: "Drink cold water.", sentence_ja: "つめたい お水を のむよ。",
    emoji: "🐻💧🥤",
    image_prompt: "A cute brown bear happily drinking a glass of cold sparkling water, water droplets on the glass."
  },
  {
    id: 77, word: "wind", meaning: "かぜ",
    sentence_en: "The wind blows.", sentence_ja: "かぜが ふくよ。",
    emoji: "💨🌳🧢",
    image_prompt: "A strong wind blowing through trees, bending them, and blowing a bear's hat off its head."
  },
  {
    id: 78, word: "wood", meaning: "き（もくざい）",
    sentence_en: "A desk made of wood.", sentence_ja: "木で できた つくえ。",
    emoji: "🐻🔨🪵",
    image_prompt: "A cute brown bear using a small hammer to build a wooden desk from planks of wood."
  },
  {
    id: 79, word: "bridge", meaning: "はし",
    sentence_en: "Cross the bridge.", sentence_ja: "はしを わたるよ。",
    emoji: "🐻🌉🚶",
    image_prompt: "A cute brown bear walking across a small wooden bridge over a stream, looking down at the water."
  },
  {
    id: 80, word: "building", meaning: "たてもの",
    sentence_en: "A tall building.", sentence_ja: "たかい たてもの。",
    emoji: "🏢⬆️🐻",
    image_prompt: "A tall building with many windows, a cute brown bear at the bottom looking up at it in amazement."
  },
  {
    id: 81, word: "castle", meaning: "しろ",
    sentence_en: "A big castle.", sentence_ja: "おおきな おしろ。",
    emoji: "🏰👑🚩",
    image_prompt: "A grand castle with towers and flags on top, looking like a king lives there, with a bear admiring it."
  },
  {
    id: 82, word: "farm", meaning: "のうじょう、はたけ",
    sentence_en: "Animals on the farm.", sentence_ja: "のうじょうの どうぶつたち。",
    emoji: "🐄🐷🐔",
    image_prompt: "A cute farm with a red barn, cows and pigs inside a fence, and a chicken walking around freely."
  },
  {
    id: 83, word: "hospital", meaning: "びょういん",
    sentence_en: "Go to the hospital.", sentence_ja: "びょういんへ いくよ。",
    emoji: "🏥➕🐻",
    image_prompt: "A white hospital building with a red cross mark on the roof, a cute brown bear walking toward it."
  },
  {
    id: 84, word: "library", meaning: "としょかん",
    sentence_en: "Read in the library.", sentence_ja: "としょかんで 本をよむよ。",
    emoji: "📚🐻🤫",
    image_prompt: "A cute brown bear sitting quietly reading a book in a library with tall shelves full of colorful books."
  },
  {
    id: 85, word: "museum", meaning: "はくぶつかん",
    sentence_en: "Dinosaurs in the museum.", sentence_ja: "はくぶつかんの きょうりゅう。",
    emoji: "🦕🐻🏛️",
    image_prompt: "A cute brown bear looking up in awe at a huge dinosaur skeleton displayed in a spacious museum hall."
  },
  {
    id: 86, word: "park", meaning: "こうえん",
    sentence_en: "Play in the park.", sentence_ja: "こうえんで あそぼう。",
    emoji: "🛝🐻🐰",
    image_prompt: "A cute brown bear and rabbit playing together in a park with swings and a slide, having fun."
  },
  {
    id: 87, word: "pool", meaning: "プール",
    sentence_en: "Swim in the pool.", sentence_ja: "プールで およぐよ。",
    emoji: "🏊🐻🛟",
    image_prompt: "A cute brown bear splashing happily in a light blue rectangular pool wearing a swim ring."
  },
  {
    id: 88, word: "station", meaning: "えき",
    sentence_en: "The train station.", sentence_ja: "でんしゃの えき。",
    emoji: "🚉🚃🐻",
    image_prompt: "A train platform with a train stopped, a clock on the wall, and a cute bear conductor standing by."
  },
  {
    id: 89, word: "store", meaning: "おみせ",
    sentence_en: "Buy an apple at the store.", sentence_ja: "おみせで りんごを かうよ。",
    emoji: "🐻🍎🏪",
    image_prompt: "A cute little town shop with fruits and bread on display outside, a bear buying a red apple."
  },
  {
    id: 90, word: "town", meaning: "まち",
    sentence_en: "Our little town.", sentence_ja: "ぼくたちの ちいさな まち。",
    emoji: "🏘️🐻🛤️",
    image_prompt: "A small cute town with several houses and shops connected by a winding road, seen from above."
  },
  {
    id: 91, word: "village", meaning: "むら",
    sentence_en: "A quiet village.", sentence_ja: "しずかな むら。",
    emoji: "🏡⛰️🌿",
    image_prompt: "A peaceful quiet village with just a few small houses at the foot of a mountain, surrounded by nature."
  },
  {
    id: 92, word: "zoo", meaning: "どうぶつえん",
    sentence_en: "Pandas in the zoo.", sentence_ja: "どうぶつえんの パンダ。",
    emoji: "🐼🏛️🎫",
    image_prompt: "A zoo gate with ZOO written on top, a cute panda visible behind the fence eating bamboo."
  },
  {
    id: 93, word: "corner", meaning: "かど",
    sentence_en: "At the corner.", sentence_ja: "みちの かどで。",
    emoji: "🐻↩️🛤️",
    image_prompt: "A cute brown bear waiting at the corner of a crossroad, peeking around to see who is coming."
  },
  {
    id: 94, word: "front", meaning: "まえ",
    sentence_en: "In front of the house.", sentence_ja: "おうちの まえで。",
    emoji: "🐻🏠👆",
    image_prompt: "A cute brown bear standing straight right in front of a house door, looking proud and ready."
  },
  {
    id: 95, word: "back", meaning: "うしろ",
    sentence_en: "In the back.", sentence_ja: "うしろの ほうに。",
    emoji: "🐻🏠🤫",
    image_prompt: "A cute brown bear sneaking around to the back of a house, hiding playfully behind it."
  },
  {
    id: 96, word: "center", meaning: "まんなか",
    sentence_en: "In the center.", sentence_ja: "まんなかに いるよ。",
    emoji: "🐻⭕👫",
    image_prompt: "A cute brown bear standing right in the center of a circle formed by animal friends, looking happy."
  },
  {
    id: 97, word: "side", meaning: "よこ、がわ",
    sentence_en: "On the right side.", sentence_ja: "みぎがわ に。",
    emoji: "🐻➡️🛤️",
    image_prompt: "A cute brown bear walking along the right edge of a road, staying on one side carefully."
  },
  {
    id: 98, word: "top", meaning: "てっぺん、うえ",
    sentence_en: "The top of the mountain.", sentence_ja: "やまの てっぺん。",
    emoji: "⛰️🐻🎌",
    image_prompt: "A cute brown bear standing at the very top of a mountain, shouting hooray with arms raised high."
  },
  {
    id: 99, word: "bottom", meaning: "そこ、いちばんした",
    sentence_en: "The bottom of the ocean.", sentence_ja: "うみの そこ。",
    emoji: "🐻🌊🧳",
    image_prompt: "A cute brown bear in a diving suit at the very bottom of the deep ocean, finding a treasure chest."
  },
  {
    id: 100, word: "shape", meaning: "かたち",
    sentence_en: "A round shape.", sentence_ja: "まるい かたち。",
    emoji: "⭕🔺🟦",
    image_prompt: "Colorful wooden building blocks of circle, triangle, and square shapes neatly lined up on a table."
  },
  {
    id: 101, word: "happy", meaning: "うれしい",
    sentence_en: "I am happy.", sentence_ja: "ぼくは うれしいよ。",
    emoji: "🐻😄⭐",
    image_prompt: "A cute brown bear smiling broadly and jumping happily with small stars around it."
  },
  {
    id: 102, word: "sad", meaning: "かなしい",
    sentence_en: "The bear is sad.", sentence_ja: "クマさんは かなしい。",
    emoji: "🐻😢💧",
    image_prompt: "A sad little bear sitting on the grass with a single tear on its cheek."
  },
  {
    id: 103, word: "angry", meaning: "おこっている",
    sentence_en: "I am angry.", sentence_ja: "ぼくは おこっている。",
    emoji: "🐻😠💢",
    image_prompt: "A brown bear looking angry with furrowed brows and hands on its hips."
  },
  {
    id: 104, word: "hungry", meaning: "おなかがすいた",
    sentence_en: "I am hungry.", sentence_ja: "おなかが すいたよ。",
    emoji: "🐻🍎💭",
    image_prompt: "A cute bear holding its empty tummy, thinking about a delicious apple."
  },
  {
    id: 105, word: "thirsty", meaning: "のどがかわいた",
    sentence_en: "I am thirsty.", sentence_ja: "のどが かわいた。",
    emoji: "🐻💧😫",
    image_prompt: "A tired bear panting slightly, reaching for a glass of water."
  },
  {
    id: 106, word: "hot", meaning: "あつい",
    sentence_en: "It is hot today.", sentence_ja: "きょうは あついね。",
    emoji: "☀️🐻🥵",
    image_prompt: "A bear sweating under a big bright sun, fanning itself with a leaf."
  },
  {
    id: 107, word: "cold", meaning: "さむい、つめたい",
    sentence_en: "It is very cold.", sentence_ja: "とっても さむい。",
    emoji: "❄️🐻🥶",
    image_prompt: "A bear shivering in the snow, wearing a red scarf."
  },
  {
    id: 108, word: "tired", meaning: "つかれた",
    sentence_en: "I am tired.", sentence_ja: "ぼくは つかれたよ。",
    emoji: "🐻😮‍💨💦",
    image_prompt: "A brown bear sitting heavily on the ground, wiping sweat from its forehead."
  },
  {
    id: 109, word: "sleepy", meaning: "ねむい",
    sentence_en: "I am sleepy.", sentence_ja: "ぼくは ねむいな。",
    emoji: "🐻🥱😴",
    image_prompt: "A cute bear in pajamas rubbing its eyes and yawning widely."
  },
  {
    id: 110, word: "big", meaning: "おおきい",
    sentence_en: "A big apple.", sentence_ja: "おおきな りんご。",
    emoji: "🐻🍎✨",
    image_prompt: "A small bear holding a giant, shiny red apple that is almost as big as the bear."
  },
  {
    id: 111, word: "small", meaning: "ちいさな",
    sentence_en: "A small mouse.", sentence_ja: "ちいさな ネズミ。",
    emoji: "🐻🐭🤲",
    image_prompt: "A brown bear gently holding a tiny, cute mouse in the palm of its hand."
  },
  {
    id: 112, word: "tall", meaning: "せがたかい",
    sentence_en: "A tall tree.", sentence_ja: "せがたかい 木。",
    emoji: "🐻🌳⬆️",
    image_prompt: "A cute bear looking up in awe at a very tall, leafy tree."
  },
  {
    id: 113, word: "short", meaning: "せがひくい、みじかい",
    sentence_en: "A short pencil.", sentence_ja: "みじかい えんぴつ。",
    emoji: "🐻✏️😅",
    image_prompt: "A bear trying to draw with a very short, stubby pencil."
  },
  {
    id: 114, word: "long", meaning: "ながい",
    sentence_en: "A long rope.", sentence_ja: "ながい ロープ。",
    emoji: "🐰🪢🐻",
    image_prompt: "A rabbit and a bear holding opposite ends of a very long jumping rope."
  },
  {
    id: 115, word: "heavy", meaning: "おもい",
    sentence_en: "This rock is heavy.", sentence_ja: "この岩は おもい。",
    emoji: "🐻🪨💦",
    image_prompt: "A cute brown bear struggling to lift a very large, heavy grey boulder."
  },
  {
    id: 116, word: "light", meaning: "かるい",
    sentence_en: "A light feather.", sentence_ja: "かるい はね。",
    emoji: "🐻🪶💨",
    image_prompt: "A bear blowing softly on a white feather floating lightly in the air."
  },
  {
    id: 117, word: "fast", meaning: "はやい",
    sentence_en: "Run fast!", sentence_ja: "はやく はしって！",
    emoji: "🐰💨🏃",
    image_prompt: "A cute rabbit running very fast, leaving a small dust cloud behind."
  },
  {
    id: 118, word: "slow", meaning: "おそい",
    sentence_en: "A slow turtle.", sentence_ja: "おそい カメ。",
    emoji: "🐢🐻⏳",
    image_prompt: "A cute turtle walking very slowly while a bear waits patiently."
  },
  {
    id: 119, word: "high", meaning: "たかい",
    sentence_en: "Jump high!", sentence_ja: "たかく とんで！",
    emoji: "🐻⬆️😆",
    image_prompt: "A happy bear jumping very high into the air with a big smile."
  },
  {
    id: 120, word: "low", meaning: "ひくい",
    sentence_en: "A low table.", sentence_ja: "ひくい つくえ。",
    emoji: "🐻🖍️📏",
    image_prompt: "A bear sitting on the floor drawing pictures on a very low wooden table."
  },
  {
    id: 121, word: "new", meaning: "あたらしい",
    sentence_en: "My new shoes.", sentence_ja: "ぼくの あたらしい くつ。",
    emoji: "🐻👟✨",
    image_prompt: "A happy bear wearing brand new, shiny red shoes, pointing at them."
  },
  {
    id: 122, word: "old", meaning: "ふるい",
    sentence_en: "An old book.", sentence_ja: "ふるい ほん。",
    emoji: "🐻📖🕰️",
    image_prompt: "A bear reading a dusty, old-looking book with worn pages."
  },
  {
    id: 123, word: "good", meaning: "よい、じょうずな",
    sentence_en: "A good boy.", sentence_ja: "いい 子だね。",
    emoji: "🐻👩😊",
    image_prompt: "A mother bear patting a happy little bear on the head gently."
  },
  {
    id: 124, word: "bad", meaning: "わるい",
    sentence_en: "A bad dream.", sentence_ja: "わるい ゆめ。",
    emoji: "🐻😨💤",
    image_prompt: "A little bear waking up scared in bed after a bad dream."
  },
  {
    id: 125, word: "clean", meaning: "きれいな",
    sentence_en: "A clean room.", sentence_ja: "きれいな おへや。",
    emoji: "🐻🏠✨",
    image_prompt: "A happy bear standing in a very clean, tidy room with toys put away."
  },
  {
    id: 126, word: "dirty", meaning: "きたない",
    sentence_en: "Dirty hands.", sentence_ja: "きたない おてて。",
    emoji: "🐻🤲🟤",
    image_prompt: "A bear showing its hands completely covered in brown mud."
  },
  {
    id: 127, word: "safe", meaning: "あんぜんな",
    sentence_en: "We are safe here.", sentence_ja: "ここは あんぜんだよ。",
    emoji: "🐻🐰⛺",
    image_prompt: "A bear and a rabbit hiding safely inside a cozy wooden tent from the rain."
  },
  {
    id: 128, word: "brave", meaning: "ゆうかんな",
    sentence_en: "A brave lion.", sentence_ja: "ゆうかんな ライオン。",
    emoji: "🦁🦸✨",
    image_prompt: "A cute lion standing proudly like a brave superhero with a cape."
  },
  {
    id: 129, word: "hard", meaning: "かたい、むずかしい",
    sentence_en: "This cookie is hard.", sentence_ja: "このクッキーは かたい。",
    emoji: "🐻🍪😬",
    image_prompt: "A bear biting into a cookie and looking surprised because it's too hard."
  },
  {
    id: 130, word: "soft", meaning: "やわらかい",
    sentence_en: "A soft pillow.", sentence_ja: "やわらかい まくら。",
    emoji: "🐻🛏️😊",
    image_prompt: "A sleepy bear hugging a very soft, fluffy white pillow."
  },
  {
    id: 131, word: "easy", meaning: "かんたんな",
    sentence_en: "It is easy.", sentence_ja: "かんたん だよ。",
    emoji: "🐻🧩😄",
    image_prompt: "A bear easily solving a simple puzzle with a confident smile."
  },
  {
    id: 132, word: "early", meaning: "はやい（じかんが）",
    sentence_en: "Wake up early.", sentence_ja: "はやく おきるよ。",
    emoji: "🌅🐻🌄",
    image_prompt: "A bear stretching happily in bed as the sun just starts to rise."
  },
  {
    id: 133, word: "late", meaning: "おそい（じかんが）",
    sentence_en: "I am late!", sentence_ja: "おくれちゃう！",
    emoji: "🐻⏰💨",
    image_prompt: "A bear running with a clock in hand, looking panicked about being late."
  },
  {
    id: 134, word: "near", meaning: "ちかい",
    sentence_en: "The station is near.", sentence_ja: "えきは ちかいよ。",
    emoji: "🐻👉🚉",
    image_prompt: "A bear pointing to a train station that is just a few steps away."
  },
  {
    id: 135, word: "far", meaning: "とおい",
    sentence_en: "The mountain is far.", sentence_ja: "やまは とおいね。",
    emoji: "🐻🔭⛰️",
    image_prompt: "A bear looking through binoculars at a mountain very far away."
  },
  {
    id: 136, word: "right", meaning: "みぎ、ただしい",
    sentence_en: "That is right.", sentence_ja: "それで ただしいよ。",
    emoji: "🐻⭕😊",
    image_prompt: "A bear holding a paper with a big red circle (O) mark, looking proud."
  },
  {
    id: 137, word: "wrong", meaning: "まちがった",
    sentence_en: "That is wrong.", sentence_ja: "それは ちがうよ。",
    emoji: "🐻❌😕",
    image_prompt: "A bear looking confused at a paper with a blue cross (X) mark on it."
  },
  {
    id: 138, word: "bright", meaning: "あかるい",
    sentence_en: "A bright star.", sentence_ja: "あかるい ほし。",
    emoji: "🐻🕶️⭐",
    image_prompt: "A bear wearing sunglasses because a yellow star is shining too brightly."
  },
  {
    id: 139, word: "dark", meaning: "くらい",
    sentence_en: "It is dark outside.", sentence_ja: "そとは くらいね。",
    emoji: "🐻🔦🌲",
    image_prompt: "A bear holding a small lantern in a dark forest at night."
  },
  {
    id: 140, word: "strong", meaning: "つよい",
    sentence_en: "I am strong.", sentence_ja: "ぼくは つよいぞ。",
    emoji: "🐻💪✨",
    image_prompt: "A confident bear flexing its arm muscles playfully."
  },
  {
    id: 141, word: "weak", meaning: "よわい",
    sentence_en: "The wind is weak.", sentence_ja: "かぜが よわいね。",
    emoji: "🌿💨🍃",
    image_prompt: "A gentle, weak breeze barely moving the leaves of a tree."
  },
  {
    id: 142, word: "busy", meaning: "いそがしい",
    sentence_en: "I am very busy.", sentence_ja: "とっても いそがしいんだ。",
    emoji: "🐻📚🍎",
    image_prompt: "A bear rushing around carrying a stack of books and an apple, looking busy."
  },
  {
    id: 143, word: "careful", meaning: "ちゅういぶかい",
    sentence_en: "Be careful!", sentence_ja: "きをつけて！",
    emoji: "🐻⚠️🍌",
    image_prompt: "A mother bear warning a little bear who is about to step on a banana peel."
  },
  {
    id: 144, word: "kind", meaning: "しんせつな",
    sentence_en: "You are kind.", sentence_ja: "きみは やさしいね。",
    emoji: "🐰☂️🐻",
    image_prompt: "A rabbit kindly giving an umbrella to a bear in the rain."
  },
  {
    id: 145, word: "sick", meaning: "びょうきの",
    sentence_en: "I feel sick.", sentence_ja: "ぐあいがいわるいんだ。",
    emoji: "🐻🤒🛏️",
    image_prompt: "A bear in bed with a thermometer in its mouth and an ice pack on its head."
  },
  {
    id: 146, word: "well", meaning: "げんきな、じょうずに",
    sentence_en: "I am well now.", sentence_ja: "もう げんきだよ。",
    emoji: "🐻💪😄",
    image_prompt: "A bear jumping out of bed, looking completely healthy and energetic."
  },
  {
    id: 147, word: "beautiful", meaning: "うつくしい",
    sentence_en: "A beautiful flower.", sentence_ja: "きれいな お花。",
    emoji: "🐻🌹✨",
    image_prompt: "A bear admiring a beautiful, colorful flower with sparkling lights around it."
  },
  {
    id: 148, word: "cute", meaning: "かわいい",
    sentence_en: "A cute baby.", sentence_ja: "かわいい あかちゃん。",
    emoji: "🐻🐥💕",
    image_prompt: "A bear looking fondly at a very cute, tiny baby bird in a nest."
  },
  {
    id: 149, word: "cool", meaning: "すずしい、かっこいい",
    sentence_en: "It is cool here.", sentence_ja: "ここは すずしいね。",
    emoji: "🐻🌿😌",
    image_prompt: "A bear relaxing under the shade of a tree enjoying a cool breeze."
  },
  {
    id: 150, word: "warm", meaning: "あたたかい",
    sentence_en: "A warm soup.", sentence_ja: "あたたかい スープ。",
    emoji: "🐻🍲😊",
    image_prompt: "A bear happily holding a steaming bowl of warm, delicious soup."
  }
];
