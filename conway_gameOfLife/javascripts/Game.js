class Game {
  constructor(width, height) {  // Feel free to delete me... OR keep me!
    this.width = width;
    this.height = height;
    this.coordHelper = new CoordinateHelper(this.width, this.height);

    // This doesn't look right... --> THIS IS ALREADY ANSWERED!
      // how can this be dynamic to the width and height passed in
    //this.gameState = [0, 1, 0, 0];
    this.gameState = Array(width * height).fill(null).map(() => Math.round(Math.random()));
  }
  takeStep() {
    // Might we need to duplicate the gamestate here?
    const newGameState = this.gameState.slice(0);
      // If we modify the game state as we fly through...
      //  will we be applying the rules correctly?
    let cellNeighbors;
    newGameState.forEach((cell, stateIdx) => {
      cellNeighbors = this.coordHelper.findNeighborIndices(stateIdx);
      let sum=0;
      for (let neighbor of cellNeighbors) {
        sum+=this.gameState[neighbor];
        //for weird pattern : sum+=newGameState[neighbor]
      }
      if (sum<2 || sum>3) {
      newGameState[stateIdx]= 0;
    } else {
      newGameState[stateIdx]= 1;
    }
  });
  this.gameState = newGameState;
  }
};

