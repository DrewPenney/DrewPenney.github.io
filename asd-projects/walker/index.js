/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
 
  $("#board").height(600)
  $("#board").width(600)

  var WALKER = {
    XCOORDINATE: 5, YCOORDINATE: 5, XSPEED: 5, YSPEED: 5,
  };

  var WALKER2 = {
    XCOORDINATE: 5, YCOORDINATE: 5, XSPEED: 5, YSPEED: 5,
  }

  // Game Item Objects
var KEY = {
  left: 37, right: 39, top: 40, bottom: 38, A: 65, D: 68, W: 87, S: 83, 
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
    repositionGameItem()
    wallCollision()
    redrawGameItem()
    handleKeyUp()
  }
  /* 
  Called in response to events.
  */
  function handleKeyDown(event){
    if (event.which === KEY.left){
      WALKER.XSPEED = -5;
    }  if (event.which === KEY.right){
      WALKER.XSPEED = 5;
    }  if (event.which === KEY.top){
      WALKER.YSPEED = 5;
    }  if (event.which === KEY.bottom){
      WALKER.YSPEED = -5;
}
  }

console.log();

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
  WALKER.XCOORDINATE += WALKER.XSPEED
  WALKER.YCOORDINATE += WALKER.YSPEED
  }
  function redrawGameItem(){
    $("#walker").css("left", WALKER.XCOORDINATE)
    $("#walker").css("right", WALKER.XCOORDINATE)
    $("#walker").css("top", WALKER.YCOORDINATE)
    $("#walker").css("bottom", WALKER.YCOORDINATE)
  }
function handleKeyUp(){
  WALKER.XSPEED = 0
  WALKER.YSPEED = 0
}
function wallCollision(){
if (WALKER.XCOORDINATE < 0){
  WALKER.XCOORDINATE = 0
} 
if (WALKER.XCOORDINATE > 550){
  WALKER.XCOORDINATE = 550
} 
if (WALKER.YCOORDINATE < 0){
  WALKER.YCOORDINATE = 0
}
if (WALKER.YCOORDINATE > 550){
  WALKER.YCOORDINATE = 550
}
}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
