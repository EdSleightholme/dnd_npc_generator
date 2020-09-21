import { listOfBackgrounds, advancedSkillsType } from "../npc_sheet_interfaces_types";
import { NpcSheet } from "../NpcSheet";

export const setupBackground =(background:listOfBackgrounds,advancedSkills:advancedSkillsType) => {
    switch (background) {
      case "Acolyte":
        advancedSkills.insight.profient = true;
        advancedSkills.religion.profient = true;
        return advancedSkills;
      case "Anthropologist":
        advancedSkills.insight.profient = true;
        advancedSkills.religion.profient = true;
        return advancedSkills;
      case "Archaeologist":
        advancedSkills.history.profient = true;
        advancedSkills.survival.profient = true;
        return advancedSkills;
      case "Charlatan":
        advancedSkills.deception.profient = true;
        advancedSkills.sleightOfHand.profient = true;
        return advancedSkills;
      case "City Watch":
        advancedSkills.athletics.profient = true;
        advancedSkills.insight.profient = true;
        return advancedSkills;
      case "Clan Crafter":
        advancedSkills.history.profient = true;
        advancedSkills.insight.profient = true;
        return advancedSkills;
      case "Cloistered Scholar":
        advancedSkills.history.profient = true;
        switch (NpcSheet.roll1d6() / 2) {
          case 1:
            advancedSkills.arcana.profient = true;
            return advancedSkills;
          case 2:
            advancedSkills.nature.profient = true;
            return advancedSkills;
          case 3:
            advancedSkills.religion.profient = true;
            return advancedSkills;
        }
        return advancedSkills;
      case "Courtier":
        advancedSkills.persuasion.profient = true;
        advancedSkills.insight.profient = true;
        return advancedSkills;
      case "Criminal":
        advancedSkills.deception.profient = true;
        advancedSkills.stealth.profient = true;
        return advancedSkills;
      case "Entertainer":
        advancedSkills.acrobatics.profient = true;
        advancedSkills.performance.profient = true;
        return advancedSkills;
      case "Faceless":
        advancedSkills.deception.profient = true;
        advancedSkills.intimidation.profient = true;
        return advancedSkills;
      case "Far Traveler":
        advancedSkills.insight.profient = true;
        advancedSkills.perception.profient = true;
        return advancedSkills;
      case "Folk Hero":
        advancedSkills.animalHandling.profient = true;
        advancedSkills.survival.profient = true;
        return advancedSkills;
      case "Guild Artisan":
        advancedSkills.insight.profient = true;
        advancedSkills.persuasion.profient = true;
        return advancedSkills;
      case "Hermit":
        advancedSkills.medicine.profient = true;
        advancedSkills.religion.profient = true;
        return advancedSkills;
      case "Inheritor":
        advancedSkills.survival.profient = true;
        switch (NpcSheet.roll1d6() / 2) {
          case 1:
            advancedSkills.arcana.profient = true;
            return advancedSkills;
          case 2:
            advancedSkills.history.profient = true;
            return advancedSkills;
          case 3:
            advancedSkills.religion.profient = true;
            return advancedSkills;
        }
        return advancedSkills;
      case "Noble":
        advancedSkills.history.profient = true;
        advancedSkills.persuasion.profient = true;
        return advancedSkills;
      case "Knight Of The Order":
        advancedSkills.persuasion.profient = true;
        switch (NpcSheet.roll1d6() / 2) {
          case 1:
            advancedSkills.arcana.profient = true;
            return advancedSkills;
          case 2:
            advancedSkills.history.profient = true;
            return advancedSkills;
          case 3:
            advancedSkills.religion.profient = true;
            return advancedSkills;
        }
        return advancedSkills;
      case "Mercenary Veteran":
        advancedSkills.athletics.profient = true;
        advancedSkills.persuasion.profient = true;
        return advancedSkills;
      case "Outlander":
        advancedSkills.athletics.profient = true;
        advancedSkills.survival.profient = true;
        return advancedSkills;
      case "Sailor":
        advancedSkills.athletics.profient = true;
        advancedSkills.perception.profient = true;
        return advancedSkills;
      case "Sage":
        advancedSkills.arcana.profient = true;
        advancedSkills.history.profient = true;
        return advancedSkills;
      case "Soldier":
        advancedSkills.athletics.profient = true;
        advancedSkills.intimidation.profient = true;
        return advancedSkills;
      case "Urchin":
        advancedSkills.sleightOfHand.profient = true;
        advancedSkills.stealth.profient = true;
        return advancedSkills;
    }
    return advancedSkills
  }