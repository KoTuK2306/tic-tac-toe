const WIN_PLAYER = "WIN_PLAYER";
const DRAW = "DRAW";
const FILLED_CELLS = "FILLED_CELLS";
const PLAYER_X_POSITIONS = "PLAYER_X_POSITIONS";
const PLAYER_O_POSITIONS = "PLAYER_O_POSITIONS";
const SET_PLAYER = "SET_PLAYER";

export const cellClickReducer = (state = initialState, action) => {
    switch (action.type){
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
      case SET_PLAYER: 
      return{
        ...state,
        player: state.player === "X" ? "O" : "X",

      }
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
export const setPlayer = () => ({type: SET_PLAYER});


