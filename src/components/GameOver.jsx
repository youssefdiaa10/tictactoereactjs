/* eslint-disable react/prop-types */
import { GameState } from "../utils/constants";

const GameOver = ({ gameState }) => {
  const OWins = <div className="game-over">O wins</div>;
  const XWins = <div className="game-over">X wins</div>;
  const Draw = <div className="game-over">Draw</div>;

  switch (gameState) {
    case GameState.inProgress:
      return <></>;

    case GameState.playerOWins:
      return OWins;

    case GameState.playerXWins:
      return XWins;

    case GameState.draw:
      return Draw;

    default:
      return <></>;
  }
};

export default GameOver;
