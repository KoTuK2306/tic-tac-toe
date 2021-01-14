export const cellClickReducer = (state = initialState, action) => {
  switch (action.type) {
    case WIN_PLAYER:
      return {
        ...state,
        currentPlayer: action.player,
        win: true,
      };
    case DRAW:
      return {
        ...state,
        draw: true,
      };
    case FILLED_CELLS:
      return {
        ...state,
        filledCells: [...state.filledCells, action.cell],
      };
    case PLAYER_X_POSITIONS:
      return {
        ...state,
        playerXPositions: [...state.playerXPositions, action.pos],
      };
    case PLAYER_O_POSITIONS:
      return {
        ...state,
        playerOPositions: [...state.playerOPositions, action.pos],
      };
    default:
      return state;
  }
};

export const winPlayer = (currentPlayer) => ({
  type: WIN_PLAYER,
  currentPlayer,
});
export const draw = () => ({ type: DRAW });
export const fillCells = (cell) => ({ type: FILLED_CELLS, cell });
export const playerXPositions = (pos) => ({ type: PLAYER_X_POSITIONS, pos });
export const playerOPositions = (pos) => ({ type: PLAYER_O_POSITIONS, pos });


