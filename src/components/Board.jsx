/* eslint-disable react/prop-types */
import Strike from "./Strike";
import Tile from "./Tile";
import { tilesData } from "../utils/constants";

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
  return (
    <>
      <div className="board">
        {tilesData.map((tile) => (
          <Tile
            key={tile.name}
            playerTurn={playerTurn}
            onClick={() => onTileClick(tile.id)}
            value={tiles[tile.id]}
            className={tile.className}
          />
        ))}

        <Strike strikeClass={strikeClass} />
      </div>
    </>
  );
};

export default Board;
