export interface Proficiency {
  base: listOfBaseAttributes;
  profient: boolean;
  expertise: boolean;
  modifer: number;
}

export type listOfBaseAttributes =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

export type listOfskillAttributes =
  | "acrobatics"
  | "animalHandling"
  | "arcana"
  | "athletics"
  | "deception"
  | "history"
  | "insight"
  | "intimidation"
  | "investigation"
  | "medicine"
  | "nature"
  | "perception"
  | "performance"
  | "persuasion"
  | "religion"
  | "sleightOfHand"
  | "stealth"
  | "survival";

export type listOfClasses =
  | "Barbarian"
  | "Bard"
  | "Cleric"
  | "Druid"
  | "Fighter"
  | "Monk"
  | "Paladin"
  | "Ranger"
  | "Rogue"
  | "Sorcerer"
  | "Warlock"
  | "Wizard";

export const arrayOfClasses: listOfClasses[] = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];
export const playerClasses = {
  Barbarian: {
    hitDice: 12,
    importantAbbs: ["strength", "constitution"],
    saveingThrows: ["strength", "constitution"],
    advSkills: {
      amount: 2,
      skills: [
        "animalHandling",
        "athletics",
        "intimidation",
        "nature",
        "perception",
        "survival",
      ],
    },
  },
  Bard: {
    hitDice: 8,
    importantAbbs: ["charisma", "dexterity"],
    saveingThrows: ["charisma", "dexterity"],
    advSkills: {
      amount: 3,
      skills: [
        "acrobatics",
        "animalHandling",
        "arcana",
        "athletics",
        "deception",
        "history",
        "insight",
        "intimidation",
        "investigation",
        "medicine",
        "nature",
        "perception",
        "performance",
        "persuasion",
        "religion",
        "sleightOfHand",
        "stealth",
        "survival",
      ],
    },
  },
  Cleric: {
    hitDice: 8,
    importantAbbs: ["wisdom", "charisma"],
    saveingThrows: ["wisdom", "charisma"],
    advSkills: {
      amount: 2,
      skills: ["history", "insight", "medicine", "persuasion", "religion"],
    },
  },
  Druid: {
    hitDice: 8,
    importantAbbs: ["wisdom", "intelligence"],
    saveingThrows: ["wisdom", "intelligence"],
    advSkills: {
      amount: 2,
      skills: [
        "arcana",
        "animalHandling",
        "insight",
        "medicine",
        "nature",
        "perception",
        "religion",
        "survival",
      ],
    },
  },
  Fighter: {
    hitDice: 10,
    importantAbbs: ["strength", "constitution"],
    saveingThrows: ["strength", "constitution"],
    advSkills: {
      amount: 2,
      skills: [
        "acrobatics",
        "animalHandling",
        "athletics",
        "history",
        "insight",
        "intimidation",
        "perception",
        "survival",
      ],
    },
  },
  Monk: {
    hitDice: 8,
    importantAbbs: ["strength", "dexterity"],
    saveingThrows: ["strength", "dexterity"],
    advSkills: {
      amount: 2,
      skills: [
        "acrobatics",
        "athletics",
        "history",
        "insight",
        "religion",
        "stealth",
      ],
    },
  },
  Paladin: {
    hitDice: 10,
    importantAbbs: ["wisdom", "charisma"],
    saveingThrows: ["wisdom", "charisma"],
    advSkills: {
      amount: 2,
      skills: [
        "athletics",
        "insight",
        "intimidation",
        "medicine",
        "persuasion",
        "religion",
      ],
    },
  },
  Ranger: {
    hitDice: 10,
    importantAbbs: ["strength", "dexterity"],
    saveingThrows: ["strength", "dexterity"],
    advSkills: {
      amount: 3,
      skills: [
        "animalHandling",
        "athletics",
        "insight",
        "investigation",
        "nature",
        "perception",
        "stealth",
        "survival",
      ],
    },
  },
  Rogue: {
    hitDice: 8,
    importantAbbs: ["intelligence", "dexterity"],
    saveingThrows: ["intelligence", "dexterity"],
    advSkills: {
      amount: 3,
      skills: [
        "acrobatics",
        "athletics",
        "deception",
        "insight",
        "intimidation",
        "investigation",
        "perception",
        "performance",
        "persuasion",
        "sleightOfHand",
        "stealth",
      ],
    },
  },
  Sorcerer: {
    hitDice: 6,
    importantAbbs: ["charisma", "constitution"],
    saveingThrows: ["charisma", "constitution"],
    advSkills: {
      amount: 2,
      skills: [
        "arcana",
        "deception",
        "insight",
        "intimidation",
        "persuasion",
        "religion",
      ],
    },
  },
  Warlock: {
    hitDice: 8,
    importantAbbs: ["charisma", "wisdom"],
    saveingThrows: ["charisma", "wisdom"],
    advSkills: {
      amount: 2,
      skills: [
        "arcana",
        "deception",
        "history",
        "intimidation",
        "investigation",
        "nature",
        "religion",
      ],
    },
  },
  Wizard: {
    hitDice: 6,
    importantAbbs: ["intelligence", "wisdom"],
    saveingThrows: ["intelligence", "wisdom"],
    advSkills: {
      amount: 2,
      skills: [
        "arcana",
        "history",
        "insight",
        "investigation",
        "medicine",
        "religion",
      ],
    },
  },
};

export type listOfRaces = "Human";

export type listOfBackgrounds =
  | "Acolyte"
  | "Anthropologist"
  | "Archaeologist"
  | "Charlatan"
  | "City Watch"
  | "Clan Crafter"
  | "Cloistered Scholar"
  | "Courtier"
  | "Criminal"
  | "Entertainer"
  | "Faceless"
  | "Faction Agent"
  | "Far Traveler"
  | "Folk Hero"
  | "Gladiator"
  | "Guild Artisan"
  | "Hermit"
  | "Inheritor"
  | "Noble"
  | "Knight Of The Order"
  | "Mercenary Veteran"
  | "Outlander"
  | "Sailor"
  | "Sage"
  | "Soldier"
  | "Urban Bounty Hunter"
  | "Urchin";

export const arrayOfBackgrounds: listOfBackgrounds[] = [
  "Acolyte",
  "Anthropologist",
  "Archaeologist",
  "Charlatan",
  "City Watch",
  "Clan Crafter",
  "Cloistered Scholar",
  "Courtier",
  "Criminal",
  "Entertainer",
  "Faceless",
  "Faction Agent",
  "Far Traveler",
  "Folk Hero",
  "Gladiator",
  "Guild Artisan",
  "Hermit",
  "Inheritor",
  "Noble",
  "Knight Of The Order",
  "Mercenary Veteran",
  "Outlander",
  "Sailor",
  "Sage",
  "Soldier",
  "Urban Bounty Hunter",
  "Urchin",
];

export type advancedSkillsType = {
  acrobatics: Proficiency;
  animalHandling: Proficiency;
  arcana: Proficiency;
  athletics: Proficiency;
  deception: Proficiency;
  history: Proficiency;
  insight: Proficiency;
  intimidation: Proficiency;
  investigation: Proficiency;
  medicine: Proficiency;
  nature: Proficiency;
  perception: Proficiency;
  performance: Proficiency;
  persuasion: Proficiency;
  religion: Proficiency;
  sleightOfHand: Proficiency;
  stealth: Proficiency;
  survival: Proficiency;
};
