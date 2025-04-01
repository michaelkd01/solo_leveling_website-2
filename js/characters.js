// Character data for Solo Leveling ranking website
const characters = [
  {
    id: 1,
    name: "Sung Jinwoo",
    title: "Shadow Monarch",
    rank: 1,
    image: "images/sung_jinwoo.jpg",
    description: "The main protagonist of Solo Leveling who evolves from the weakest E-rank hunter to the most powerful S-rank hunter in the world. After a near-death experience in a double dungeon, he gains the unique ability to level up and becomes the Shadow Monarch.",
    abilities: [
      "Shadow Extraction",
      "Shadow Storage",
      "Monarch's Domain",
      "Ruler's Authority",
      "Enhanced Physical Abilities",
      "Necromancy"
    ],
    source: "Manhwa & Anime"
  },
  {
    id: 2,
    name: "Antares",
    title: "Monarch of Destruction",
    rank: 2,
    image: "images/antares.jpg",
    description: "The King of Dragons and the strongest of the eight Monarchs. He is the final antagonist of Solo Leveling and the most powerful being in the world aside from Sung Jinwoo after he fully awakens as the Shadow Monarch.",
    abilities: [
      "Dragon Transformation",
      "Breath of Destruction",
      "Spiritual Body Manifestation",
      "Immense Strength",
      "Immense Durability"
    ],
    source: "Manhwa"
  },
  {
    id: 3,
    name: "Ashborn",
    title: "Original Shadow Monarch",
    rank: 3,
    image: "images/ashborn.jpg",
    description: "The original Shadow Monarch and the most powerful of the Rulers. He chose Sung Jinwoo as his successor and granted him the power of the Shadow Monarch.",
    abilities: [
      "Shadow Extraction",
      "Shadow Storage",
      "Monarch's Domain",
      "Ruler's Authority"
    ],
    source: "Manhwa"
  },
  {
    id: 4,
    name: "Beru",
    title: "Shadow Marshal",
    rank: 4,
    image: "images/beru.jpg",
    description: "The shadow of the Ant King, an S-Rank Magic Beast and the hidden boss of the Jeju Island S-Rank Gate. He is one of Sung Jinwoo's most powerful shadow soldiers and is known for his loyalty and combat prowess.",
    abilities: [
      "Immense Strength",
      "Immense Speed",
      "Immense Durability",
      "Healing Magic",
      "Flight",
      "Size Manipulation",
      "Paralysis Poison"
    ],
    source: "Manhwa & Anime"
  },
  {
    id: 5,
    name: "Igris",
    title: "Shadow Knight",
    rank: 5,
    image: "images/igris.jpg",
    description: "A high-ranking shadow soldier in Sung Jinwoo's army. He was the first powerful shadow that Sung Jinwoo extracted and has been loyal to him ever since. Igris is known for his swordsmanship and knightly demeanor.",
    abilities: [
      "Master Swordsmanship",
      "Enhanced Speed",
      "Enhanced Strength",
      "Loyalty"
    ],
    source: "Manhwa & Anime"
  },
  {
    id: 6,
    name: "Thomas Andre",
    title: "Goliath",
    rank: 6,
    image: "images/thomas_andre.jpg",
    description: "The strongest hunter in the United States and one of the five National Level Hunters in the world. He possesses immense physical strength and durability, earning him the nickname 'Goliath'.",
    abilities: [
      "Immense Strength",
      "Immense Durability",
      "Transformation",
      "Enhanced Regeneration"
    ],
    source: "Manhwa"
  },
  {
    id: 7,
    name: "Liu-Zhigang",
    title: "Emperor",
    rank: 7,
    image: "images/liu_zhigang2.jpg", // Fixed image path
    description: "The strongest hunter in China and one of the five National Level Hunters in the world. He possesses powerful telekinetic abilities that allow him to control objects and people with his mind.",
    abilities: [
      "Telekinesis",
      "Force Field Generation",
      "Flight",
      "Enhanced Physical Abilities"
    ],
    source: "Manhwa"
  },
  {
    id: 8,
    name: "Christopher Reed",
    title: "Iron Body",
    rank: 8,
    image: "images/christopher_reed.jpg",
    description: "The strongest hunter in Canada and one of the five National Level Hunters in the world. He possesses the ability to harden his body to withstand tremendous damage.",
    abilities: [
      "Body Hardening",
      "Enhanced Strength",
      "Enhanced Durability"
    ],
    source: "Manhwa"
  },
  {
    id: 9,
    name: "Bellion",
    title: "Grand Marshal of Shadows",
    rank: 9,
    image: "images/bellion.jpg",
    description: "The strongest shadow soldier in Sung Jinwoo's army and the former commander of the Shadow Monarch's army. He is incredibly powerful and serves as Sung Jinwoo's right-hand man.",
    abilities: [
      "Immense Strength",
      "Immense Speed",
      "Immense Durability",
      "Shadow Manipulation",
      "Flight"
    ],
    source: "Manhwa"
  },
  {
    id: 10,
    name: "Cha Hae-In",
    title: "White Tiger Guild's Ace",
    rank: 10,
    image: "images/cha_hae_in.jpg",
    description: "An S-rank hunter and the ace of the White Tiger Guild. She is known for her exceptional swordsmanship and her unique ability to detect the smell of magical energy.",
    abilities: [
      "Master Swordsmanship",
      "Enhanced Smell",
      "Enhanced Speed",
      "Enhanced Strength"
    ],
    source: "Manhwa & Anime"
  },
  {
    id: 11,
    name: "Go Gunhee",
    title: "Korean Hunters Association Chairman",
    rank: 11,
    image: "images/go_gunhee.jpg",
    description: "The chairman of the Korean Hunters Association and an S-rank hunter. Despite his old age, he is still one of the most powerful hunters in Korea.",
    abilities: [
      "Fire Manipulation",
      "Enhanced Strength",
      "Enhanced Durability"
    ],
    source: "Manhwa & Anime"
  },
  {
    id: 12,
    name: "Baek Yoonho",
    title: "White Tiger Guild Master",
    rank: 12,
    image: "images/baek_yoonho.jpg",
    description: "The guild master of the White Tiger Guild and an S-rank hunter. He possesses the ability to transform into a white tiger, granting him enhanced physical abilities.",
    abilities: [
      "Beast Transformation",
      "Enhanced Strength",
      "Enhanced Speed",
      "Enhanced Senses"
    ],
    source: "Manhwa & Anime"
  },
  {
    id: 13,
    name: "Choi Jong-In",
    title: "Hunter's Guild Master",
    rank: 13,
    image: "images/choi_jong_in.jpg",
    description: "The guild master of the Hunter's Guild and an S-rank hunter. He is known for his powerful ice manipulation abilities.",
    abilities: [
      "Ice Manipulation",
      "Freezing",
      "Enhanced Durability"
    ],
    source: "Manhwa & Anime"
  },
  {
    id: 14,
    name: "Hwang Dongsoo",
    title: "Scavenger Guild Master",
    rank: 14,
    image: "images/hwang_dongsoo.jpg",
    description: "The guild master of the Scavenger Guild in the United States and an S-rank hunter. He is known for his ruthless personality and his powerful lightning manipulation abilities.",
    abilities: [
      "Lightning Manipulation",
      "Enhanced Speed",
      "Enhanced Strength"
    ],
    source: "Manhwa"
  },
  {
    id: 15,
    name: "Greed",
    title: "Shadow Elite Knight",
    rank: 15,
    image: "images/greed.jpg",
    description: "A high-ranking shadow soldier in Sung Jinwoo's army. He was extracted from the corpse of Greed, a powerful knight who served as a dungeon boss.",
    abilities: [
      "Master Swordsmanship",
      "Enhanced Strength",
      "Enhanced Durability"
    ],
    source: "Manhwa"
  },
  {
    id: 16,
    name: "Tusk",
    title: "Shadow Elite Knight",
    rank: 16,
    image: "images/tusk.jpg",
    description: "A high-ranking shadow soldier in Sung Jinwoo's army. He was extracted from the corpse of Tusk, a powerful knight who served as a dungeon boss.",
    abilities: [
      "Master Swordsmanship",
      "Enhanced Strength",
      "Enhanced Durability"
    ],
    source: "Manhwa"
  },
  {
    id: 17,
    name: "Iron",
    title: "Shadow Elite Knight",
    rank: 17,
    image: "images/iron.jpg",
    description: "A high-ranking shadow soldier in Sung Jinwoo's army. He was extracted from the corpse of Iron, a powerful knight who served as a dungeon boss.",
    abilities: [
      "Master Swordsmanship",
      "Enhanced Strength",
      "Enhanced Durability"
    ],
    source: "Manhwa"
  },
  {
    id: 18,
    name: "Kaisel",
    title: "Shadow Mount",
    rank: 18,
    image: "images/kaisel.jpg",
    description: "A high-ranking shadow soldier in Sung Jinwoo's army. He takes the form of a massive wyvern and serves as Sung Jinwoo's mount, allowing him to travel quickly through the air.",
    abilities: [
      "Flight",
      "Enhanced Strength",
      "Enhanced Durability"
    ],
    source: "Manhwa"
  },
  {
    id: 19,
    name: "Tank",
    title: "Shadow Beast",
    rank: 19,
    image: "images/tank.jpg",
    description: "A high-ranking shadow soldier in Sung Jinwoo's army. He takes the form of a massive bear and serves as a powerful frontline fighter.",
    abilities: [
      "Immense Strength",
      "Immense Durability",
      "Enhanced Senses"
    ],
    source: "Manhwa"
  },
  {
    id: 20,
    name: "Jima",
    title: "Shadow Beast",
    rank: 20,
    image: "images/jima.jpg",
    description: "A high-ranking shadow soldier in Sung Jinwoo's army. He takes the form of a massive wolf and serves as a swift scout and fighter.",
    abilities: [
      "Enhanced Speed",
      "Enhanced Strength",
      "Enhanced Senses"
    ],
    source: "Manhwa"
  },
  {
    id: 21,
    name: "Legia",
    title: "Monarch of Giants",
    rank: 21,
    image: "images/legia.jpg",
    description: "Legia is a cunning Monarch, the King of the S-Rank Gate Creation, with a bloodlust for humans. He is ultimately killed by Sung Jinwoo after being given a chance at freedom through an S-Rank Gate in Tokyo.",
    abilities: [
      "Wind Manipulation",
      "Storm Creation",
      "Spiritual Body Manifestation"
    ],
    source: "Manhwa"
  },
  {
    id: 22,
    name: "Sillad",
    title: "Monarch of Ice",
    rank: 22,
    image: "images/sillad.jpg",
    description: "As the King of Snow Folk and one of the nine Monarchs, Sillad was an immensely powerful individual. Immense Strength: Sillad possessed immense physical strength. He was able to fight evenly against Go Gunhee while still holding back and push Jinwoo to his limit with just brute force during their second battle.",
    abilities: [
      "Ice Breath",
      "Ice Magic",
      "Spiritual Body Manifestation"
    ],
    source: "Manhwa"
  },
  {
    id: 23,
    name: "Rakan",
    title: "Beast Monarch",
    rank: 23,
    image: "images/rakan.jpg",
    description: "Rakan was an aggressive and arrogant individual with an intense bloodlust towards those he regarded as his enemies. He also displayed a very scornful attitude towards humans and viciously devoured one who had the bad luck to bump into him.",
    abilities: [
      "Telekenesis",
      "Regeneration",
      "Spiritual Body Manifestation"
    ],
    source: "Manhwa"
  },
  {
    id: 24,
    name: "Yogumunt",
    title: "Monarch of Transifugration",
    rank: 24,
    image: "images/yogumunt.jpg",
    description: "Yogumunt was an elderly man with gray hair, light red eyes, and a blood-red blob-like symbol on his torso. He wore a tattered blackish-purple hooded cloak, a pale yellow bone-like mask over his mouth, and two metallic horn-like objects extending from his upper back.",
    abilities: [
      "Telekenesis",
      "levitation",
      "Spiritual Body Manifestation"
    ],
    source: "Manhwa"
  },
  {
    id: 25,
    name: "Querehsha",
    title: "Monarch of Plagues",
    rank: 25,
    image: "images/querehsha.jpg",
    description: "Querehsha was a tall and very attractive young woman with glowing red eyes, pale skin, long flowing black hair, dark purple lips, large breasts, a voluptuous figure, and insectile characteristics, particularly on her legs and arms. She also wore greenish-black armor that left her upper cleavage and shoulders exposed.",
    abilities: [
      "Telekenesis",
      "venom inducement",
      "Spiritual Body Manifestation"
    ],
    source: "Manhwa"
  },
  {
    id: 26,
    name: "Tarnak",
    title: "Monarch of The Iron Body",
    rank: 26,
    image: "images/tarnak.jpg",
    description: "As one of the nine Monarchs, Tarnak was an immensely powerful individual. Telepathy: Tarnak could communicate telepathically with his fellow Monarchs. Spiritual Body Manifestation: Tarnak could transform into a monstrous golem with flaming lime-green hair and dark gray armor.",
    abilities: [
      "Telekenesis",
      "The Iron Body Technique",
      "Spiritual Body Manifestation"
    ],
    source: "Manhwa"
  },
  {
    id: 27,
    name: "Baran",
    title: "Monarch of White Flames",
    rank: 27,
    image: "images/baran.jpg",
    description: "Baran is a powerful and formidable Monarch of White Flames, also known as the King of Demons, who is a fierce and deadly opponent for Sung Jin-woo, and was once an ally of Ashborn.",
    abilities: [
      "Regeneration",
      "fire manipulation",
      "spiritual body manifestation",
    ],
    source: "Manhwa"
  },
  {
    id: 28,
    name: "Esil",
    title: "Demon noble of the Radiru Clan",
    rank: 28,
    image: "images/esil.jpg",
    description: "As a demon noble, Esil is strong for her species and measures up to a S-Rank Hunter in strength. However, after losing a considerable amount of her blood, she has lost most of her power and is currently only about as strong as a C-Rank Hunter.",
    abilities: [
      "Ehanced Speed",
      "Spear Mastery",
      "Enhanced Strength",
    ],
    source: "Manhwa"
  },
  {
    id: 29,
    name: "Goto Ryuji",
    title: "Guildmaster of The Draw Sword Guild",
    rank: 29,
    image: "images/goto.jpg",
    description: "As a demon noble, Esil is strong for her species and measures up to a S-Rank Hunter in strength. However, after losing a considerable amount of her blood, she has lost most of her power and is currently only about as strong as a C-Rank Hunter.",
    abilities: [
      "Ehanced Speed",
      "Enhanced Agility",
      "Enhanced Strength",
    ],
    source: "Manhwa"
  },
  {
    id: 30,
    name: "Sung il-hwan",
    title: "Guildmaster of The Draw Sword Guild",
    rank: 30,
    image: "images/sung.jpg",
    description: "As the vessel of a Ruler, Il-Hwan was one of the strongest hunters in the world and quite possibly the second strongest hunter in existence after Jinwoo. However, unlike his son, his body was not adapted to the powers that the Rulers had granted him and as a result, he died shortly after he overexerted himself by using his powers.",


    abilities: [
      "Stealth",
      "telekenesis",
      "Enhanced Strength",
    ],
    source: "Manhwa"
  }
];
