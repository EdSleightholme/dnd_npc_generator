import { generateStat } from "../npc-sheet-display/npcSheetSetupMethods";
export type coordinates = {
  x: number;
  y: number;
  direction?: "n" | "s" | "e" | "w";
};

export type DungeonTiles = { type: "wall" | "door" | "floor" | "start" }[][];

/*
TODO
Simple Room generation from coordinates 
  Is a bug with the room generator
  Needs big rewrite of all. Docs then code
Add doors to walls on rooms 


----DONE 0.1 Was Terrible will replace----
Fill rooms with stuff???
More complex room shapes. Circles, T junctions. Longer corridors. ???

----- 0.2 Success-----

Start with a rectangle room (DONE)
Draw lines across at random points across the square (DONE)
Remove random walls (DONE)
  Move this to a method (DONE)

------ 0.3 -------
  Doors 
  Less bunching up of walls 
      no wall if wall either side of it

*/

export class Dungeons {
  public dungeonTiles: DungeonTiles = [];
  //outdated
  public generateRoomsFromCo(startCoordinates: coordinates) {
    const height = Math.floor(Math.random() * 5) + 1;
    const width = Math.floor(Math.random() * 5) + 1;
    const numberOfDoors = Math.floor(Math.random() * 3);
    console.log(startCoordinates);
    if (startCoordinates.direction === "n") {
      const entranceIsAt = Math.floor(Math.random() * height);
      const topLeft: coordinates = {
        x: startCoordinates.x - width,
        y: startCoordinates.y - entranceIsAt,
      };
      const bottomRight: coordinates = {
        x: startCoordinates.x,
        y: startCoordinates.y - entranceIsAt + height,
      };
      this.dungeonTiles = Dungeons.roomGenerator(
        topLeft,
        bottomRight,
        this.dungeonTiles
      );
    }
    if (startCoordinates.direction === "s") {
      const entranceIsAt = Math.floor(Math.random() * height);
      const topLeft: coordinates = {
        x: startCoordinates.x + 1,
        y: startCoordinates.y - entranceIsAt,
      };
      const bottomRight: coordinates = {
        x: startCoordinates.x + width,
        y: startCoordinates.y - entranceIsAt + height,
      };
      this.dungeonTiles = Dungeons.roomGenerator(
        topLeft,
        bottomRight,
        this.dungeonTiles
      );
    }
    if (startCoordinates.direction === "w") {
      const entranceIsAt = Math.floor(Math.random() * height);
      const topLeft: coordinates = {
        x: startCoordinates.x - entranceIsAt,
        y: startCoordinates.y + 1,
      };
      const bottomRight: coordinates = {
        x: startCoordinates.x + width - entranceIsAt,
        y: startCoordinates.y + height,
      };
      this.dungeonTiles = Dungeons.roomGenerator(
        topLeft,
        bottomRight,
        this.dungeonTiles
      );
    }
    if (startCoordinates.direction === "e") {
      const entranceIsAt = Math.floor(Math.random() * height);
      const topLeft: coordinates = {
        x: startCoordinates.x - entranceIsAt,
        y: startCoordinates.y - height,
      };
      const bottomRight: coordinates = {
        x: startCoordinates.x + width - entranceIsAt,
        y: startCoordinates.y,
      };
      this.dungeonTiles = Dungeons.roomGenerator(
        topLeft,
        bottomRight,
        this.dungeonTiles
      );
    }
  }
  //outdated
  public static roomGenerator(
    topLeft: coordinates,
    bottomRight: coordinates,
    dungeonTiles: DungeonTiles
  ) {
    const topLeftPostion = topLeft;
    const bottomRightPostion = bottomRight;
    if (topLeft.x < 0) {
      topLeftPostion.x = 0;
    }
    if (topLeft.y < 0) {
      topLeftPostion.y = 0;
    }
    if (bottomRight.y > dungeonTiles.length) {
      bottomRightPostion.y = dungeonTiles.length;
    }
    if (bottomRight.x > dungeonTiles[0].length) {
      bottomRightPostion.x = dungeonTiles[0].length;
    }
    for (let x = topLeftPostion.x; x < bottomRight.x; x++) {
      for (let y = topLeftPostion.y; y < bottomRight.y; y++) {
        dungeonTiles[x][y] =
          dungeonTiles[x][y].type === "wall" ||
          dungeonTiles[x][y].type === "door"
            ? { type: "floor" }
            : dungeonTiles[x][y];
      }
    }
    return dungeonTiles;
  }

  public static generateStartingDungeon(height: number, width: number) {
    // makes outer area
    let tiles = [...Array(height)].map((y, indexY) => {
      return [...Array(width)].map((x, indexX) => {
        // if (
        //   indexX === 0 ||
        //   indexY === 0 ||
        //   indexY === height - 1 ||
        //   indexX === width - 1
        // ) {
        //   return { type: "wall" };
        // }

        return { type: "floor" };
      });
    }) as DungeonTiles;
    // adds walls
    // find points that are connected

    const numberWalls = Math.floor(Math.random() * (height + width / 5))+5;
    [...Array(numberWalls)].map(() => {
      let pointsOfIntersection = 0;
      if (5 < Math.random() * 10) {
        const position = Math.floor(Math.random() * height);
        tiles[position] = tiles[position].map((val) => {
          if (val.type === "wall") {
            console.log(pointsOfIntersection);
            pointsOfIntersection = pointsOfIntersection + 1;
          }
          return { type: "wall" };
        });

        let removeWallSection = Math.floor(
          Math.random() * pointsOfIntersection
        );
        let foundIntersections = 0;
        let firstVal = false;
        tiles[position].map((val, index) => {
          if (position !== tiles[position].length - 1 && position !== 0) {
            if (
              tiles[position + 1][index].type === "wall" ||
              tiles[position - 1][index].type === "wall"
            ) {
              foundIntersections = foundIntersections + 1;
              firstVal = true;
            }
          }
          if (removeWallSection + 1 === foundIntersections) {
            if (firstVal) {
              firstVal = false;
            } else {
              val = { type: "floor" };
            }
          }
        });
      } else {
        const position = Math.floor(Math.random() * width);
        tiles = tiles.map((val) => {
          if (val[position].type === "wall") {
            pointsOfIntersection = pointsOfIntersection + 1;
          }
          val[position] = { type: "wall" };
          //remove wall

          return val;
        });

        let removeWallSection = Math.floor(
          Math.random() * pointsOfIntersection
        );
        let foundIntersections = 0;
        let firstVal = false;
        tiles.map((val) => {
          if (position !== tiles[position].length - 1 && position !== 0) {
            if (
              val[position + 1].type === "wall" ||
              val[position - 1].type === "wall"
            ) {
              foundIntersections = foundIntersections + 1;
              firstVal=true
            }
          }
          if (removeWallSection + 1 === foundIntersections) {

            if (firstVal) {
              firstVal = false;
            } else {
              val[position] = { type: "floor" };
            }
          }
        });
      }
    });
    // remove walls
    //find points that are connected
    //

    return tiles;
  }

  constructor(private readonly height: number, private readonly width: number) {
    this.dungeonTiles = Dungeons.generateStartingDungeon(height, width);
  }
}
