var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth (value) {
  var can = document.getElementById("canvas1");  
 if(isNumeric (value)){
   can.width = value;
   var size = document.getElementById("width");
   size.innerHTML=value;
}
}
function setHeight (value) {
  var can = document.getElementById("canvas1");
 
 if(isNumeric (value)){
   can.height = value;  
   var size = document.getElementById("height");
   size.innerHTML=value;
}
}
function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}

//painting Start
function startPaint(){
  isPainting = true ;
}
//if curser is up stop paint
function endPaint(){
  isPainting = false ;
}
//if curser is on drag keep paint
function doPaint(x,y){
  if(isPainting===true){
    paintCircle(x,y);
  }
}
// cahnge the color with new one
function changeColor(newColor){
  color =newColor;  
}

function resizeBrush(newSize){
  radius =newSize;  
  var size = document.getElementById("sizeOutput");
  size.innerHTML = newSize;
}
function Erase(){  
  if(color != "#FFFF"){
 color ="#FFFF";
  }
  else{
  color = document.getElementById("color").value;
  }
}