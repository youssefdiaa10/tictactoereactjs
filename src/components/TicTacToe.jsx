import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import Reset from "./Reset";
import {
  PLAYER_O,
  PLAYER_X,
  winningCombinations,
  GameState,
  checkWinner,
} from "../utils/constants";

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState, winningCombinations);
  }, [tiles]);

  return (
    <>
      <h1>Tic Tac Toe</h1>

      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />

      <GameOver gameState={gameState} />

      <Reset gameState={gameState} onReset={handleReset} />
    </>
  );
};

export default TicTacToe;
