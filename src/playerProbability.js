export const playerProbability = () => {
  let player = "";
  let prob = Math.random() * (1 - 0) + 0;
  if (prob > 0.5) {
    player = "X";
  } else {
    player = "O";
  }
};
