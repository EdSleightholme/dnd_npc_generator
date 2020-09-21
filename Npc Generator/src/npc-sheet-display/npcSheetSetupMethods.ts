import { NpcSheet } from "./NpcSheet";
import { listOfClasses, playerClasses } from "./npc_sheet_interfaces_types";

export const generateStat = () => {
  let randomRolls = [0, 0, 0, 0];
  randomRolls = randomRolls.map(() => NpcSheet.roll1d6());
  let min = Math.min.apply(null, randomRolls);
  return randomRolls.reduce((total, currentValue) => {
    if (min === currentValue) {
      min = -1;
      return total;
    } else {
      return total + currentValue;
    }
  }, 0);
};

// needs to be imporved to a maths thing
export const getMod = (val: number) => {
  switch (val) {
    case 1:
      return -5;
    case 2 | 3:
      return -4;
    case 4 | 5:
      return -3;
    case 6 | 7:
      return -2;
    case 8 | 9:
      return -1;
    case 10 | 11:
      return 0;
    case 12 | 13:
      return 1;
    case 14 | 15:
      return 2;
    case 16 | 17:
      return 3;
    case 18 | 19:
      return 4;
    case 20 | 21:
      return 5;
    case 22 | 23:
      return 5;
    case 24 | 25:
      return 5;
    case 26 | 27:
      return 5;
    case 28 | 29:
      return 5;
    case 30:
      return 5;
  }
  return 0;
};

// out of 100
// 00-10 fully random
// 11-25 first then random
// 26-40 second then random
// rest random first or second then rest random
// is buggy
export const setPlayerBaseStats = (className: listOfClasses) => {
  const arrayOfWeightedAbbs = playerClasses[className].importantAbbs;

  let arrayOfNumbers = [0, 0, 0, 0, 0, 0];
  arrayOfNumbers = arrayOfNumbers.map((value) => generateStat());
  //shuffles array
  for (let i = arrayOfNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayOfNumbers[i], arrayOfNumbers[j]] = [
      arrayOfNumbers[j],
      arrayOfNumbers[i],
    ];
  }
  const percent = Math.round(Math.random() * 100);

  switch (true) {
    case percent < 10:
      return arrayOfNumbers;

    case percent < 40:
      const indexOfMaxValue = arrayOfNumbers.reduce(
        (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
        0
      );
      if (Math.random() * 2 > 1) {
        const position = getAbbPosition(arrayOfWeightedAbbs[0]);
        let temp = arrayOfNumbers[position];
        arrayOfNumbers[position] = arrayOfNumbers[indexOfMaxValue];
        arrayOfNumbers[indexOfMaxValue] = temp;
        return arrayOfNumbers;
      } else {
        const position = getAbbPosition(arrayOfWeightedAbbs[1]);
        let temp = arrayOfNumbers[position];
        arrayOfNumbers[position] = arrayOfNumbers[indexOfMaxValue];
        arrayOfNumbers[indexOfMaxValue] = temp;
        return arrayOfNumbers;
      }
    default:
      const maxOrderArray = arrayOfNumbers.slice();
      maxOrderArray.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
      const maxVal1 = maxOrderArray[maxOrderArray.length - 1];
      const maxVal2 = maxOrderArray[maxOrderArray.length - 2];
      const maxPos1 = arrayOfNumbers.indexOf(maxVal1);
      const maxPos2 =
        maxVal1 === maxVal2
          ? arrayOfNumbers.indexOf(maxVal2, maxPos1 + 1)
          : arrayOfNumbers.indexOf(maxVal2);
      if (Math.floor(Math.random() * 100) > 50) {
        let position = getAbbPosition(arrayOfWeightedAbbs[0]);
        let temp = arrayOfNumbers[position];
        arrayOfNumbers[position] = arrayOfNumbers[maxPos1];
        arrayOfNumbers[maxPos1] = temp;
        position = getAbbPosition(arrayOfWeightedAbbs[1]);
        temp = arrayOfNumbers[position];
        arrayOfNumbers[position] = arrayOfNumbers[maxPos2];
        arrayOfNumbers[maxPos2] = temp;
        return arrayOfNumbers;
      } else {
        let position = getAbbPosition(arrayOfWeightedAbbs[1]);
        let temp = arrayOfNumbers[position];
        arrayOfNumbers[position] = arrayOfNumbers[maxPos1];
        arrayOfNumbers[maxPos1] = temp;
        position = getAbbPosition(arrayOfWeightedAbbs[0]);
        temp = arrayOfNumbers[position];
        arrayOfNumbers[position] = arrayOfNumbers[maxPos2];
        arrayOfNumbers[maxPos2] = temp;
        return arrayOfNumbers;
      }
  }
};

const getAbbPosition = (name: string) => {
  switch (name) {
    case "strength":
      return 0;
    case "dexterity":
      return 1;
    case "constitution":
      return 2;
    case "intelligence":
      return 3;
    case "wisdom":
      return 4;
    case "charisma":
      return 5;
  }
  return 0;
};
