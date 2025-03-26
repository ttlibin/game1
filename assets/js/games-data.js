const gamesData = [

  // 游戏1.1
{
  id: "food-rush",
  title: "Food Rush",
  description: "Manage a chaotic kitchen in this fast-paced cooking game.",
  longDescription: "Food Rush challenges players to run a bustling restaurant under pressure. Master multiple cooking stations, serve impatient customers, and upgrade your kitchen to become the top chef in the city. Features dynamic recipes and kitchen disasters to keep every shift exciting.",
  category: "match3",
  tags: ["cooking", "time-management", "multiplayer"],
  iframeUrl: "https://play.famobi.com/food-rush/A-FAMOBI-COM",
  thumbnailUrl: "/assets/images/thumbnails/food-rush.jpg",
  bannerUrl: "/assets/images/banners/food-rush.webp",
  popularity: 76,
  featured: true
},

// 游戏1.2
{
  id: "tile-journey",
  title: "Tile Journey",
  description: "Solve magical puzzles in a shifting tile world.",
  longDescription: "Tile Journey combines match-3 mechanics with environmental storytelling. Rearrange mystical tiles to rebuild ancient landscapes, unlock hidden lore fragments, and restore balance to a fractured realm. With procedurally generated puzzle layouts for infinite replayability.",
  category: "match3",
  tags: ["match-3", "fantasy", "relaxing"],
  iframeUrl: "https://play.famobi.com/tile-journey/A1000-10B", 
  thumbnailUrl: "/assets/images/thumbnails/tile-journey.jpg",
  bannerUrl: "/assets/images/banners/tile-journey.webp",
  popularity: 82,
  featured: true
},

// 游戏1.3 
{
  id: "diamond-rush-2",
  title: "Diamond Rush 2",
  description: "Mine precious gems in this explosive sequel.",
  longDescription: "Diamond Rush 2 enhances the classic digging formula with destructible terrain physics. Blast through underground caverns using upgradable drills, avoid lava flows, and compete in global leaderboards. New gem fusion system allows creating rare hybrid crystals.",
  category: "match3",
  tags: ["mining", "physics", "leaderboards"],
  iframeUrl: "https://play.famobi.com/diamond-rush-2",
  thumbnailUrl: "/assets/images/thumbnails/diamond-rush-2.jpg",
  bannerUrl: "/assets/images/banners/diamond-rush-2.webp",
  popularity: 91,
  featured: true
},

// 游戏1.4
{
  id: "garden-bloom",
  title: "Garden Bloom",
  description: "Cultivate your dream garden with magical plants.",
  longDescription: "Garden Bloom combines botany simulation with creative design. Cross-pollinate exotic flora species, attract mythical creatures, and decorate seasonal gardens. Features real-time plant growth cycles and weather system affecting your botanical creations.",
  category: "match3",
  tags: ["gardening", "design", "relaxing"],
  iframeUrl: "https://play.famobi.com/garden-bloom",
  thumbnailUrl: "/assets/images/thumbnails/garden-bloom.jpg",
  bannerUrl: "/assets/images/banners/garden-bloom.webp",
  popularity: 68,
  featured: false
},

// 游戏1.5
{
  id: "garden-match-3d",
  title: "Garden Match 3D",
  description: "Three-dimensional floral matching puzzle adventure.",
  longDescription: "Garden Match 3D revolutionizes match-3 gameplay with rotational 3D puzzle boards. Solve spatial challenges by rotating garden sculptures, unlock decorative items for your zen garden, and discover hidden pathways in this meditative puzzle experience.",
  category: "match3",
  tags: ["3d", "match-3", "decorating"],
  iframeUrl: "https://play.famobi.com/garden-match-3d",
  thumbnailUrl: "/assets/images/thumbnails/garden-match-3d.jpg",
  bannerUrl: "/assets/images/banners/garden-match-3d.webp",
  popularity: 73,
  featured: false
},

// 游戏1.6
{
  id: "zoo-boom",
  title: "Zoo Boom",
  description: "Build and manage the ultimate animal sanctuary.",
  longDescription: "Zoo Boom combines zoo simulation with creative construction. Breed rare animals, design habitat ecosystems, and manage visitor satisfaction. Features genetic cross-breeding system and dynamic weather affecting animal behaviors.",
  category: "match3",
  tags: ["animals", "management", "building"],
  iframeUrl: "https://play.famobi.com/zoo-boom",
  thumbnailUrl: "/assets/images/thumbnails/zoo-boom.jpg",
  bannerUrl: "/assets/images/banners/zoo-boom.webp",
  popularity: 65,
  featured: false
},

// 游戏1.7
{
  id: "bubble-woods",
  title: "Bubble Woods",
  description: "Whimsical bubble shooting in enchanted forests.",
  longDescription: "Bubble Woods adds magical twists to bubble shooter mechanics. Use elemental bubbles to free trapped forest spirits, solve environmental puzzles, and restore color to cursed woodlands. Dynamic branch growth system creates evolving challenges.",
  category: "match3",
  tags: ["bubble-shooter", "fantasy", "puzzle"],
  iframeUrl: "https://play.famobi.com/bubble-woods",
  thumbnailUrl: "/assets/images/thumbnails/bubble-woods.jpg",
  bannerUrl: "/assets/images/banners/bubble-woods.webp",
  popularity: 79,
  featured: true
},

// 游戏1.8
{
  id: "totemia-cursed-marbles",
  title: "Totemia: Cursed Marbles",
  description: "Ancient marble dueling with mystical powers.",
  longDescription: "Totemia: Cursed Marbles combines marble physics with RPG elements. Collect enchanted marbles with unique abilities, challenge tribal guardians in ritual duels, and unravel the secrets of cursed temple ruins. Features real-time marble ability combos.",
  category: "match3",
  tags: ["marble", "physics", "rpg"],
  iframeUrl: "https://play.famobi.com/totemia-cursed-marbles",
  thumbnailUrl: "/assets/images/thumbnails/totemia-cursed-marbles.jpg",
  bannerUrl: "/assets/images/banners/totemia-cursed-marbles.webp",
  popularity: 84,
  featured: true
},
// 游戏2.1
{
  id: "om-nom-bubbles",
  title: "OM NOM BUBBLES",
  description: "Feed cute monsters by solving colorful bubble puzzles.",
  longDescription: "OM NOM BUBBLES combines bubble shooting with creature collection mechanics. Launch candy-coated bubbles to satisfy hungry monsters' cravings, unlock special power-ups, and progress through 200+ physics-based levels in this adorable puzzle adventure.",
  category: "bubble shooter",
  tags: ["bubble-shooter", "cute", "physics"],
  iframeUrl: "https://play.famobi.com/om-nom-bubbles",
  thumbnailUrl: "/assets/images/thumbnails/om-nom-bubbles.jpg",
  bannerUrl: "/assets/images/banners/om-nom-bubbles.webp",
  popularity: 83,
  featured: true
},

// 游戏2.2
{
  id: "fuzzies",
  title: "FUZZIES",
  description: "Match fluffy creatures in this tactile puzzle experience.",
  longDescription: "FUZZIES revolutionizes match-3 gameplay with deformable fuzzy balls. Squish and stretch adorable creatures to create explosive combos, customize your fuzzy squad, and solve woolly puzzles across 50+ handcrafted levels.",
  category: "bubble shooter",
  tags: ["match-3", "cute-animals", "tactile"],
  iframeUrl: "https://play.famobi.com/fuzzies",
  thumbnailUrl: "/assets/images/thumbnails/fuzzies.jpg",
  bannerUrl: "/assets/images/banners/fuzzies.webp",
  popularity: 77,
  featured: false
},

// 游戏2.3
{
  id: "smarty-bubbles-2",
  title: "SMARTY BUBBLES 2",
  description: "Physics-based bubble bursting with brain-teasing challenges.",
  longDescription: "SMARTY BUBBLES 2 introduces liquid physics simulation to bubble puzzles. Strategically pop bubbles to redirect flow paths, solve environmental puzzles, and unlock laboratory upgrades in this sequel featuring 30% more levels.",
  category: "bubble shooter",
  tags: ["bubble-shooter", "physics", "brain-teaser"],
  iframeUrl: "https://play.famobi.com/smarty-bubbles-2",
  thumbnailUrl: "/assets/images/thumbnails/smarty-bubbles-2.jpg",
  bannerUrl: "/assets/images/banners/smarty-bubbles-2.webp",
  popularity: 89,
  featured: true
},

// 游戏2.4（注意：BUBBLE WOODS在上一批已存在，此处为重复项需确认）
{
  id: "bubble-woods",
  title: "BUBBLE WOODS",
  description: "Whimsical bubble shooting in enchanted forests.",
  longDescription: "Bubble Woods adds magical twists to bubble shooter mechanics. Use elemental bubbles to free trapped forest spirits, solve environmental puzzles, and restore color to cursed woodlands. Dynamic branch growth system creates evolving challenges.",
  category: "bubble shooter",
  tags: ["bubble-shooter", "fantasy", "puzzle"],
  iframeUrl: "https://play.famobi.com/bubble-woods",
  thumbnailUrl: "/assets/images/thumbnails/bubble-woods.jpg",
  bannerUrl: "/assets/images/banners/bubble-woods.webp",
  popularity: 79,
  featured: true
},

// 游戏2.5
{
  id: "candy-bubble-pop",
  title: "Candy Bubble Pop",
  description: "Sweeten your day with sugary bubble matching fun.",
  longDescription: "Candy Bubble Pop layers bubble shooter mechanics with candy crush elements. Create cascading sugar explosions, collect rare candy ingredients, and design your dream dessert shop across 150+ calorie-packed levels.",
  category: "bubble shooter",
  tags: ["candy", "bubble-shooter", "match-3"],
  iframeUrl: "https://play.famobi.com/candy-bubble",
  thumbnailUrl: "/assets/images/thumbnails/candy-bubble-pop.jpg",
  bannerUrl: "/assets/images/banners/candy-bubble-pop.webp",
  popularity: 85,
  featured: false
},

// 游戏2.6
{
  id: "bubble-spirit",
  title: "BUBBLE SPIRIT",
  description: "Harness elemental spirits in magical bubble duels.",
  longDescription: "BUBBLE SPIRIT introduces RPG progression to bubble shooting. Capture and evolve elemental spirits that modify bubble behavior, compete in magical tournaments, and uncover ancient bubble alchemy secrets.",
  category: "bubble shooter",
  tags: ["bubble-shooter", "fantasy", "rpg"],
  iframeUrl: "https://play.famobi.com/bubble-spirit",
  thumbnailUrl: "/assets/images/thumbnails/bubble-spirit.jpg",
  bannerUrl: "/assets/images/banners/bubble-spirit.webp",
  popularity: 81,
  featured: true
},

// 游戏2.7
{
  id: "kitty-bubbles",
  title: "KITTY BUBBLES",
  description: "Adorable feline-themed bubble popping adventure.",
  longDescription: "KITTY BUBBLES combines bubble shooting with virtual pet care. Rescue trapped kittens by popping bubbles, customize your cat cafe, and unlock special cat-powered bubble abilities in this purr-fectly charming puzzle game.",
  category: "bubble shooter",
  tags: ["cute-animals", "bubble-shooter", "pet-care"],
  iframeUrl: "https://play.famobi.com/kitty-bubbles",
  thumbnailUrl: "/assets/images/thumbnails/kitty-bubbles.jpg",
  bannerUrl: "/assets/images/banners/kitty-bubbles.webp",
  popularity: 72,
  featured: false
},

// 游戏2.8
{
  id: "sea-bubble-shooter",
  title: "SEA BUBBLE SHOOTER",
  description: "Underwater bubble adventure with marine life.",
  longDescription: "SEA BUBBLE SHOOTER takes the classic formula underwater. Match colorful sea creature bubbles, clean up ocean pollution, and discover hidden treasure chests across coral reef environments with dynamic tidal effects.",
  category: "bubble shooter",
  tags: ["ocean", "bubble-shooter", "ecology"],
  iframeUrl: "https://play.famobi.com/sea-bubble-shooter",
  thumbnailUrl: "/assets/images/thumbnails/sea-bubble-shooter.jpg",
  bannerUrl: "/assets/images/banners/sea-bubble-shooter.webp",
  popularity: 68,
  featured: false
},
// 游戏3.1
{
  id: "go-escape",
  title: "GO ESCAPE",
  description: "Navigate intricate mazes under relentless time pressure.",
  longDescription: "GO ESCAPE challenges players to escape procedurally generated labyrinths with evolving traps. Master spatial memory and quick reflexes to outrun collapsing walls, avoid laser grids, and decode ancient escape mechanisms across 100+ levels.",
  category: "puzzle",
  tags: ["maze", "time-attack", "procedural-generation"],
  iframeUrl: "https://play.famobi.com/go-escape",
  thumbnailUrl: "/assets/images/thumbnails/go-escape.jpg",
  bannerUrl: "/assets/images/banners/go-escape.webp",
  popularity: 78,
  featured: false
},

// 游戏3.2
{
  id: "color-fill-3d",
  title: "COLOR FILL 3D",
  description: "Meditative 3D coloring with physics-based pigment flow.",
  longDescription: "COLOR FILL 3D revolutionizes art games through dynamic liquid simulation. Rotate complex 3D sculptures to guide vibrant paint flows, achieve perfect coverage targets, and unlock surreal color combination effects in this therapeutic experience.",
  category: "puzzle",
  tags: ["art", "relaxing", "physics-puzzle"],
  iframeUrl: "https://play.famobi.com/color-fill-3d",
  thumbnailUrl: "/assets/images/thumbnails/color-fill-3d.jpg",
  bannerUrl: "/assets/images/banners/color-fill-3d.webp",
  popularity: 85,
  featured: true
},

// 游戏3.3
{
  id: "spot-the-cat",
  title: "SPOT THE CAT",
  description: "Find hidden felines in chaotic urban landscapes.",
  longDescription: "SPOT THE CAT tests observational skills with living cityscapes where cats camouflage into crowds. Use zoom/scan tools to track movement patterns, complete daily camouflage challenges, and collect rare cat breeds in this quirky hide-and-seek adventure.",
  category: "puzzle",
  tags: ["hidden-object", "animals", "daily-challenges"],
  iframeUrl: "https://play.famobi.com/spot-the-cat",
  thumbnailUrl: "/assets/images/thumbnails/spot-the-cat.jpg",
  bannerUrl: "/assets/images/banners/spot-the-cat.webp",
  popularity: 69,
  featured: false
},

// 游戏3.4
{
  id: "color-roll-3d",
  title: "COLOR ROLL 3D",
  description: "Dynamic 3D ball rolling through chromatic obstacle courses.",
  longDescription: "COLOR ROLL 3D combines precision platforming with color physics. Control a morphing ball that absorbs environmental hues to activate matching mechanisms, solve chromatic puzzles, and traverse psychedelic landscapes with gravity-defying maneuvers.",
  category: "puzzle",
  tags: ["platformer", "color-puzzle", "physics"],
  iframeUrl: "https://play.famobi.com/color-roll-3d",
  thumbnailUrl: "/assets/images/thumbnails/color-roll-3d.jpg",
  bannerUrl: "/assets/images/banners/color-roll-3d.webp",
  popularity: 81,
  featured: true
},

// 游戏4.1
{
  id: "jungle-run",
  title: "JUNGLE RUN",
  description: "Endless runner through dynamic rainforest ecosystems.",
  longDescription: "JUNGLE RUN features adaptive terrain that evolves with player performance. Swing on vines across collapsing canyons, outrun flash floods, and collect ancient artifacts to unlock tribal powers in this environmentally-responsive running adventure.",
  category: "jump&run",
  tags: ["endless-runner", "jungle", "procedural-terrain"],
  iframeUrl: "https://play.famobi.com/jungle-run",
  thumbnailUrl: "/assets/images/thumbnails/jungle-run.jpg",
  bannerUrl: "/assets/images/banners/jungle-run.webp",
  popularity: 87,
  featured: true
},

// 游戏4.2
{
  id: "banana-run",
  title: "BANANA RUN",
  description: "Chaotic monkey parkour with slippery banana peels.",
  longDescription: "BANANA RUN adds comedic physics to platform racing. Play as mischievous monkeys creating banana peel traps mid-race, use tail-swing mechanics for aerial tricks, and collect golden bananas to unlock absurd costume customization options.",
  category: "jump&run",
  tags: ["party-game", "physics-comedy", "costume-custom"],
  iframeUrl: "https://play.famobi.com/banana-run",
  thumbnailUrl: "/assets/images/thumbnails/banana-run.jpg",
  bannerUrl: "/assets/images/banners/banana-run.webp",
  popularity: 73,
  featured: false
},

// 游戏4.3
{
  id: "outcome",
  title: "OUTCOME",
  description: "Narrative-driven strategy with branching consequences.",
  longDescription: "OUTCOME presents morally complex scenarios where every decision reshapes the world state. Manage limited resources across warring factions, experience 27 unique endings, and watch your choices permanently alter the game's geopolitical landscape.",
  category: "jump&run",
  tags: ["choices-matter", "political-sim", "branching-narrative"],
  iframeUrl: "https://play.famobi.com/outcome",
  thumbnailUrl: "/assets/images/thumbnails/outcome.jpg",
  bannerUrl: "/assets/images/banners/outcome.webp",
  popularity: 92,
  featured: true
},

// 游戏4.4
{
  id: "yeti-sensation",
  title: "YETI SENSATION",
  description: "Rhythm-based snowball battles in alpine arenas.",
  longDescription: "YETI SENSATION merges music rhythm mechanics with snowball fighting. Time throws to beat patterns, build massive snow forts during breakdowns, and unlock legendary yeti dance moves that create avalanche combos.",
  category: "jump&run",
  tags: ["rhythm-game", "snow", "dance-combos"],
  iframeUrl: "https://play.famobi.com/yeti-sensation",
  thumbnailUrl: "/assets/images/thumbnails/yeti-sensation.jpg",
  bannerUrl: "/assets/images/banners/yeti-sensation.webp",
  popularity: 66,
  featured: false
},

// 游戏5.1
{
  id: "defly-io",
  title: "DEFLY.IO",
  description: "Massive multiplayer aerial combat battle royale.",
  longDescription: "DEFLY.IO pits 100 players in real-time dogfights across shrinking battle zones. Customize warplanes with modular weapons, perform stunt maneuvers to evade missiles, and dominate leaderboards in this intense last-plane-flying competition.",
  category: "multiplayer",
  tags: ["battle-royale", "air-combat", "multiplayer"],
  iframeUrl: "https://play.famobi.com/defly",
  thumbnailUrl: "/assets/images/thumbnails/defly-io.jpg",
  bannerUrl: "/assets/images/banners/defly-io.webp",
  popularity: 95,
  featured: true
},
// 游戏6.1
{
  id: "sprunki",
  title: "Sprunki",
  description: "An exciting adventure game where you explore and create.",
  longDescription: "Sprunki is an immersive adventure game that takes you through fascinating worlds. Navigate through challenging environments, solve puzzles, and create your own experiences in this engaging game.",
  category: "adventure",
  tags: ["exploration", "puzzle", "creative"],
  iframeUrl: "https://sprunkiincredibox.org/game/sprunki-original/",
  thumbnailUrl: "/assets/images/thumbnails/sprunki.jpg",
  bannerUrl: "/assets/images/banners/sprunki.webp",
  popularity: 95,
  featured: true
},
// 游戏6.2
{
  id: "switchblade",
  title: "Switchblade",
  description: "A fast-paced action game with intense combat.",
  longDescription: "Switchblade is an action-packed adventure that challenges players with intense combat and strategic gameplay. Navigate through dangerous environments, defeat enemies, and master the art of the switchblade to survive.",
  category: "action",
  tags: ["combat", "strategy", "adventure"],
  iframeUrl: "https://html-classic.itch.zone/html/12670957/index.html",
  thumbnailUrl: "/assets/images/thumbnails/switchblade.jpg",
  bannerUrl: "/assets/images/banners/switchblade.jpg",
  popularity: 92,
  featured: true
},// 你可以继续添加更多游戏
];