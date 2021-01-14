const playerProbability = (options) => {
  let prob = Math.random() * (1 - 0) + 0;
  if (prob > 0.5) {
    options.player = options.X;
  } else {
    options.player = options.O;
  }
  options.currentPlayer.textContent = options.player.toUpperCase();
};

export default playerProbability;
