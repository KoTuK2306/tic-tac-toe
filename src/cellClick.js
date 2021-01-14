import checkWin from "./checkWin";
import restart from "./restart";
import { options } from "./config";
import { fillCells } from "./createArea";
import { playerProbability } from "./playerProbability";
import { cellClickReducer, setPlayer } from "./store";

const initialState = {
  draw: false,
  win: false,
  currentPlayer: null,
  filledCells: [],
  player: playerProbability(),
  players: {
    playerXPositions: [],
    playerOPositions: [],
  },
};
//

export const cellClick = (target, cells) => {
  /* cells.forEach((cell)=>{
    fillCells(cell);
    console.log(fillCells())
  })  */
  let state = initialState;
  
  cellClickReducer(state, setPlayer());
  console.log(state);
  if (!target.textContent) {
    target.textContent = state.player;
  } else {
    alert("Ячейка занята");
    return;
  } 

  /* cells.forEach((cell) => {
    if (cell.textContent === options.player) {
      data.push(parseInt(cell.getAttribute("pos")));
    }
   }); */

  if (checkWin(cells)) {
    restart("Выиграл: " + options.player, cells, options.currentPlayer);
  } else {
    let draw = true;
    cells.forEach((cell) => {
      if (cell.textContent == "") {
        draw = false;
      }
    });
    if (draw) {
      restart("Ничья", cells, options.currentPlayer);
    }
  }

  //options.currentPlayer.textContent = options.player.toUpperCase();
};
