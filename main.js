import { options } from "./src/config";
import playerProbability from "./src/playerProbability";
import {createArea} from "./src/createArea";

const content = document.querySelector(".content");

//const cells = createCells();
createArea(content);
/* function createCells() {
  createArea(content);
  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("pos", i);
    cell.addEventListener("click", cellClick, false);
    area.appendChild(cell);

    if (i === 9) {
      return area.querySelectorAll(".cell");
    }
  }
} */






//window.addEventListener("load", () => playerProbability(options));
