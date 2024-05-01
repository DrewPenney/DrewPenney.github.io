var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, 100);
    
    sawBladeHitZone.x = 400;
    sawBladeHitZone.y = 380;
    game.addGameItem(sawBladeHitZone);
    
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage); 
    obstacleImage.x = obstacleImage.y = -25

    function createSawBlade(x = 400, y = 380){

    }
//Saw Blades are above and redSquares are below//
    var enemy = game.createGameItem("enemy", 20);
    var redSquare = draw.rect(34, 34, "White");
    redSquare.x = -20;
    redSquare.y = -20;
    enemy.addChild(redSquare);
    enemy.velocityX = -1;
    enemy.rotationalVelocity = 5000000000000000000000
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-100)
    };
    
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
