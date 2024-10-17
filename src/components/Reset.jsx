/* eslint-disable react/prop-types */
import { GameState } from "../utils/constants";

const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <>
      <button onClick={onReset} className="reset-button">
        Reset
      </button>
    </>
  );
};

export default Reset;
