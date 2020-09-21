import {
  Proficiency,
  listOfBackgrounds,
  listOfRaces,
  listOfClasses,
  playerClasses,
  listOfskillAttributes,
  advancedSkillsType,
} from "./npc_sheet_interfaces_types";
import { getMod, setPlayerBaseStats } from "./npcSheetSetupMethods";
import { setupBackground } from "./setup-background/_setup-background";

export class NpcSheet {
  public speed: number = 0; //ft
  private inited: boolean = false;
  public readonly hp: { currentAmount: number; maxAmount: number } = {
    currentAmount: 0,
    maxAmount: 0,
  };
  public senses: { darkvison: number } = { darkvison: 0 };

  public readonly hitDice: {
    maxAmount: number;
    type: number;
    current: number;
  } = {
    maxAmount: 0,
    type: 6,
    current: 0,
  };

  public readonly baseStats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  } = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };

  public readonly saveThrowStats: {
    strength: Proficiency;
    dexterity: Proficiency;
    constitution: Proficiency;
    intelligence: Proficiency;
    wisdom: Proficiency;
    charisma: Proficiency;
  } = {
    strength: {
      base: "strength",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    dexterity: {
      base: "dexterity",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    constitution: {
      base: "constitution",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    intelligence: {
      base: "intelligence",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    wisdom: { base: "wisdom", profient: false, expertise: false, modifer: 0 },
    charisma: {
      base: "charisma",
      profient: false,
      expertise: false,
      modifer: 0,
    },
  };

  public readonly advancedSkills: advancedSkillsType = {
    acrobatics: {
      base: "dexterity",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    animalHandling: {
      base: "wisdom",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    arcana: {
      base: "intelligence",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    athletics: {
      base: "strength",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    deception: {
      base: "charisma",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    history: {
      base: "intelligence",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    insight: { base: "wisdom", profient: false, expertise: false, modifer: 0 },
    intimidation: {
      base: "charisma",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    investigation: {
      base: "intelligence",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    medicine: { base: "wisdom", profient: false, expertise: false, modifer: 0 },
    nature: {
      base: "intelligence",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    perception: {
      base: "wisdom",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    performance: {
      base: "charisma",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    persuasion: {
      base: "charisma",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    religion: {
      base: "intelligence",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    sleightOfHand: {
      base: "dexterity",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    stealth: {
      base: "dexterity",
      profient: false,
      expertise: false,
      modifer: 0,
    },
    survival: { base: "wisdom", profient: false, expertise: false, modifer: 0 },
  };

  public static roll1d6() {
    return Math.round(Math.random() * 5) + 1;
  }

  private readonly lv: number = 1;
  constructor(
    private readonly proficiencyBonus: number,
    private readonly name: string,
    private readonly race: listOfRaces, //look to update to have more races
    public readonly background: listOfBackgrounds,
    public readonly playerClass: listOfClasses
  ) {
    //init base stats dice
    const playerStats = setPlayerBaseStats(this.playerClass);
    this.baseStats.strength = playerStats[0];
    this.baseStats.dexterity = playerStats[1];
    this.baseStats.constitution = playerStats[2];
    this.baseStats.intelligence = playerStats[3];
    this.baseStats.wisdom = playerStats[4];
    this.baseStats.charisma = playerStats[5];

    //init hit dice
    this.hitDice.maxAmount = this.lv;
    this.hitDice.current = this.lv;

    // init Background
    this.advancedSkills = setupBackground(this.background, this.advancedSkills);
    //init race
    this.initRaceBonuses();
    //init class
    this.initClassBonuses();
    //init saveThrow
    //init avd skills
    //init HP
    this.hp.maxAmount =
      this.hitDice.type +
      getMod(this.baseStats.constitution) +
      this.levelUpHp(this.lv - 1);
    this.hp.currentAmount = this.hp.maxAmount;

    this.inited = true;
  }

  private initRaceBonuses() {
    if (this.inited) {
      return;
    }

    switch (this.race) {
      case "Human":
        this.baseStats.strength += 1;
        this.baseStats.dexterity += 1;
        this.baseStats.constitution += 1;
        this.baseStats.intelligence += 1;
        this.baseStats.wisdom += 1;
        this.baseStats.charisma += 1;
        this.speed = 30;
    }
  }

  private initClassBonuses() {
    this.hitDice.type = 12;
    const playerClassDefo = playerClasses[this.playerClass];
    this.hitDice.type = playerClassDefo.hitDice;

    playerClassDefo.saveingThrows.map((val) =>
      this.setSaveThrowProfientancy(val)
    );
    this.setClassAdvancedSkills(
      playerClassDefo.advSkills.amount,
      playerClassDefo.advSkills.skills
    );
  }

  private setClassAdvancedSkills(amount: number, choice: string[]) {
    let total: any = [];
    choice.map((value) => {
      if (!this.advancedSkills[value as listOfskillAttributes].profient) {
        total.push(value);
      }
      return value;
    }, [] as string[]);
    const shuffledSkills = total.sort(() => 0.5 - Math.random());
    let selectedSkills = shuffledSkills.slice(0, amount);
    selectedSkills.map((val: listOfskillAttributes) => {
      return (this.advancedSkills[val].profient = true);
    });
  }

  private setSaveThrowProfientancy(val: string) {
    console.log(val)
    switch (val) {
      case "strength":
        this.saveThrowStats.strength.profient = true;
        return;
      case "dexterity":
        this.saveThrowStats.dexterity.profient = true;
        return;
      case "constitution":
        this.saveThrowStats.constitution.profient = true;
        return;
      case "intelligence":
        this.saveThrowStats.intelligence.profient = true;
        return;
      case "wisdom":
        this.saveThrowStats.wisdom.profient = true;
        return;
      case "charisma":
        this.saveThrowStats.charisma.profient = true;
        return;
    }
  }

  private levelUpHp(levelUpAmount: number) {
    let total = 0;
    for (let index = 0; index < levelUpAmount; index++) {
      total =
        Math.round(Math.random() * this.hitDice.type) +
        1 +
        getMod(this.baseStats.constitution) +
        total;
    }
    return total;
  }
}
