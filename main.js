var last_position_of_x, last_position_of_y;
var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color
var width_of_the_line
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("col").value;
    width_of_the_line = document.getElementById("wotl").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_x , current_position_of_y)
        ctx.stroke();
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

    mouseEvent = "mousemove";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
        
    mouseEvent = "touchstart";
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log("my_touchstart");

    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_the_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = "+last_position_of_touch_x+" y = "+last_position_of_touch_y);
    ctx.moveTo(last_position_of_touch_x , last_position_of_touch_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x = "+current_position_of_touch_x+" y = "+current_position_of_touch_x);
    ctx.lineTo(current_position_of_touch_x , current_position_of_touch_y)
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}