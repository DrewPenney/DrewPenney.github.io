/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  var WALKER = {
    XCOORDINATE: 5, YCOORDINATE: 5, XSPEED: 5, YSPEED: 5,
  };

  // Game Item Objects
var KEY = {
  LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40,
};

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event){
    if (event.which === KEY.LEFT){
      WALKER.XSPEED = -5;
    } else if (event.which === KEY.RIGHT){
      WALKER.XSPEED = 5;
    } else if (event.which === KEY.UP){
      WALKER.YSPEED = 5;
    } else if (event.which === KEY.DOWN){
      WALKER.YSPEED = -5;
    }
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
  WALKER.XCOORDINATE += WALKER.XSPEED
  WALKER.YCOORDINATE += WALKER.YSPEED
  }
  function redrawGameItem(){
    $(WALKER).css("LEFT", WALKER.XCOORDINATE)
    $(WALKER).css("RIGHT", WALKER.XCOORDINATE)
    $(WALKER).css("UP", WALKER.YCOORDINATE)
    $(WALKER).css("DOWN", WALKER.YCOORDINATE)
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
