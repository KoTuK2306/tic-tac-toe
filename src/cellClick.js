import checkWin from "./checkWin";
import restart from "./restart";
import { options } from './config';
import {fillCells} from "./createArea";


const initialState = {
  draw: false,
  win: false,
  currentPlayer: null,
  filledCells: [],
  players: {
    playerXPositions: [],
    playerOPositions: [],
  },
};

let state = cellClickReducer(initialState, undefined);

export const cellClick = (target, cells) => {
   /* cells.forEach((cell)=>{
    fillCells(cell);
    console.log(fillCells())
  })  */
  console.log(target, cells);
     if (!target.textContent) {
      target.textContent = options.player;

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
  options.player = options.player === options.X ? options.O : options.X;
  options.currentPlayer.textContent = options.player.toUpperCase();
};
