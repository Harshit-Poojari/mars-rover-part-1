canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_mars_images = ["marsnasa1.jpg","mars2.jpg","mars3.jpg","mars5.jpg"];
var random_number = Math.floor(Math.random()*4)
var rover_width = 100;
var rover_height = 90;
var rover_x  = 10;
var rover_y = 10;
var background_image = nasa_mars_images[random_number];
console.log("backgroundimage" + background_image);
var rover_image = "rover.png";
function add() {
    bg_img_tag = new Image();
    bg_img_tag.onload = uploadbackground;
    bg_img_tag.src = background_image;


    rover_img_tag = new Image();
    rover_img_tag.onload = uploadrover;
    rover_img_tag.src = rover_image;
}
function uploadbackground() {
    ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height);

}
function uploadrover() {
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}
  
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == 37) {
        left();
        console.log("left");
    }
    if(keyPressed == 38) {
        up();
        console.log("up");
    }
    if(keyPressed == 39) {
        right();
        console.log("right");
    }
    if(keyPressed == 40) {
        down();
        console.log("down");
    }
}
function up() {
    if(rover_y >=0) {
        rover_y = rover_y-10;
        console.log("when up is pressed,x ="+ rover_x + "y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down() {
    if(rover_y <=500) {
        rover_y = rover_y+10;
        console.log("when down is pressed,x ="+ rover_x + "y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right() {
    if(rover_x <=700) {
        rover_x = rover_x+10;
        console.log("when right is pressed,x ="+ rover_x + "y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left() {
    if(rover_x >=0) {
        rover_x = rover_x-10;
        console.log("when left is pressed,x ="+ rover_x + "y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
    