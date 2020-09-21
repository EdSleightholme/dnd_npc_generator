import React from "react";
import { Dungeons } from "./Dungeons";

export const DunegonGenerator = () => {
  const dun = new Dungeons(20, 20);

  return (
    <div>
      {dun.dungeonTiles.map((row) => {
        return (
          <div style={{ display: "table-row" }}>
            {row.map((cell) => {
              return (
                <div style={{ width: 30, height: 30, display: "table-cell" }}>
                  {cell.type[0]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
