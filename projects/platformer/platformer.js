$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
     createPlatform(150,270,100,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(300,650,200,30); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(600,525,100,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(300,400,100,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(30,180,80,30); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(650,350,200,29); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(450,270,100,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(1000,230,100,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(750,100,100,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(100,520,100,30); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(1200,470,100,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(900,600,250,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     createPlatform(1300,350,100,34); // short but wide platform located 400 pixels from the left of the screen and 200 pixels from the top of the screen
     // TODO 2
     createCollectable("database", 700, 310); 
     createCollectable("database", 130, 480);
     createCollectable("database", 1300, 310);
     createCollectable("database", 800, 60);
     createCollectable("database", 940, 560);
     createCollectable("database", 200, 230);
     createCollectable("database", 330, 360);
     createCollectable("database", 400, 610);
     createCollectable("database", 490, 230);
     createCollectable("database", 640, 485);
     createCollectable("database", 1030, 190);
     createCollectable("database", 1230, 430);
    // TODO 3
    createCannon("left", 555, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 305, 1000); // cannon on left wall, 400px down, shooting once per 2 seconds
    createCannon("right", 775, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("top", 335, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("bottom", 845, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("right", 95, 1000); // cannon on left wall, 600px down, shooting once per second
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
