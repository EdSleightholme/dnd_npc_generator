import React from "react";
import { NpcSheet } from "./NpcSheet";
import {
  arrayOfBackgrounds,
  arrayOfClasses,
} from "./npc_sheet_interfaces_types";

const randomBackGround = () => {
  return arrayOfBackgrounds[
    Math.floor(Math.random() * arrayOfBackgrounds.length)
  ];
};
const randomClass = () => {
  return arrayOfClasses[
    Math.floor(Math.random() * Object.entries(arrayOfClasses).length)
  ];
};

export const NpcSheetDisplay = () => {
  const npc = new NpcSheet(
    3,
    "Test",
    "Human",
    randomBackGround(),
    randomClass()
  );
  console.log(npc);
  return (
    <div>
      <div>Background: {npc.background}</div>
      <div>Class: {npc.playerClass}</div>
      STR:{npc.baseStats.strength} | DEX:{npc.baseStats.dexterity} | CON:
      {npc.baseStats.constitution} | INT:{npc.baseStats.intelligence} | WIS:
      {npc.baseStats.wisdom} | CHR:{npc.baseStats.charisma}
      <div>HP:{npc.hp.maxAmount}</div>
      <div>Speed:{npc.speed}</div>
      <div>----------Skills----------------</div>
      <div>
        {Object.entries(npc.advancedSkills).map((array) => {
          const key = array[0];
          const val = array[1];
          if (val.profient === true) {
            return (
              <div key={key}>
                {key} : {val.profient.toString()}
              </div>
            );
          }
          return <div />;
        })}
        <div>----------Saving Throws----------------</div>
        {Object.entries(npc.saveThrowStats).map((array) => {
          const key = array[0];
          const val = array[1];
          if (val.profient === true) {
            return (
              <div key={key}>
                {key} : {val.profient.toString()}
              </div>
            );
          }
          return <div />;
        })}
      </div>
    </div>
  );
};
