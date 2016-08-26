const gameBoardNode = document.querySelector('div.board');
const app = new App(25, 25, gameBoardNode);
app.tick();

setInterval(() => {
  app.tick();
}, 5000);  // <- Once working, try this at some different rates
