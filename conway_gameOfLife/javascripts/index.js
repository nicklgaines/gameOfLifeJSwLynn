const gameBoardNode = document.querySelector('div.board');
const app = new App(25, 25, gameBoardNode);
app.tick();

setInterval(function(){
  app.tick();
}, 1000);  // <- Once working, try this at some different rates
