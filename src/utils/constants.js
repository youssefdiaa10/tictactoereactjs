export const GameState = {
  playerXWins: 0,
  playerOWins: 1,
  draw: 2,
  inProgress: 3,
};

export const winningCombinations = [
  //!Row
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //!Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //!Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

export const tilesData = [
  { id: 0, name: "left-top", className: "right-border bottom-border" },
  { id: 1, name: "top", className: "right-border bottom-border" },
  { id: 2, name: "right-top", className: "bottom-border" },
  { id: 3, name: "left-mid", className: "right-border bottom-border" },
  { id: 4, name: "mid", className: "right-border bottom-border" },
  { id: 5, name: "right-mid", className: "bottom-border" },
  { id: 6, name: "left-bottom", className: "right-border" },
  { id: 7, name: "bottom", className: "right-border" },
  { id: 8, name: "right-bottom", className: "" },
];

export const checkWinner = (
  tiles,
  setStrikeClass,
  setGameState,
  winningCombinations
) => {
  for (const { combo, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }

      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tiles) => tiles !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
};

export const PLAYER_X = "X";
export const PLAYER_O = "O";
