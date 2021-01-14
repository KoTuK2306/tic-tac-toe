const restart = (text, cells, currentPlayer) => {
  alert(text);
  cells.forEach((cell) => {
    cell.textContent = "";
  });

  currentPlayer.textContent = "";
};

export default restart;
