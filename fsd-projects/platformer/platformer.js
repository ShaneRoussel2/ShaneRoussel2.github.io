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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 600, canvas.width, 300,);
    createPlatform(200, 500, 100, 100);
    createPlatform(400, 300, 200, 100);
    createPlatform(700, 500, 700, 100);
    createPlatform(800, 400, 600, 100);



    // TODO 3 - Create Collectables
    createCollectable("database", 525, 550, 0, 0);
    createCollectable("database", 425, 550, 0, 0);
    createCollectable("steve", 1025, 350, 0, 0);
    createCollectable("max", 1225, 350, 0, 0);
    createCollectable("max", 225, 450, 0, 0);
    createCollectable("max", 425, 250, 0, 0);
    createCollectable("max", 525, 250, 0, 0);


    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 2000);
    createCannon("top", 500, 1500);
    createCannon("top", 600, 1500);
    createCannon("right", 400, 1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
