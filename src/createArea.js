import { cellClick } from "./cellClick";
const WIN_PLAYER = "WIN_PLAYER";
const DRAW = "DRAW";
const FILLED_CELLS = "FILLED_CELLS";
const PLAYER_X_POSITIONS = "PLAYER_X_POSITIONS";
const PLAYER_O_POSITIONS = "PLAYER_O_POSITIONS";


export const createArea = (content) => {

  const span = document.createElement("span");
  span.classList.add("player");
  span.textContent = "Сейчас ходит:";
  content.appendChild(span);
  const span2 = document.createElement("span");
  span2.id = "currPlayer";
  span.appendChild(span2);
  const area = document.createElement("div");
  area.id = "area";
  content.appendChild(area);
  const cells = [];
  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("pos", i);
    cells.push(+cell.getAttribute("pos"));
    cell.addEventListener("click", ({ target }) => cellClick(target, cells), false);
    area.appendChild(cell);
    
    if (i === 9) {
      return area.querySelectorAll(".cell");
    }
  }
};

