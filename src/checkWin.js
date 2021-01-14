const checkWin = (data) => {
  const winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (const i in winIndex) {
    let win = true;
    for (const j in winIndex[i]) {
      let id = winIndex[i][j];
      let ind = data.includes(id);
      if (!ind) {
        win = false;
      }
    }
    if (win) return true;
  }
  return false;
};

export default checkWin;
