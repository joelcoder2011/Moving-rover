canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;
nasa_image_array = ["nasa_img_1.jfif","nasa_img_2.jfif","nasa_img_3.jpg","nasa_img_4.jpg"];
random_number = Math.floor(Math.random()*4);
background_image = nasa_image_array[random_number];
rover_image = "rover.png";
function add(){
    bg_imagetag = new Image();
    bg_imagetag.onload = uploadbg;
    bg_imagetag.src = background_image;
    rover_imagetag = new Image();
    rover_imagetag.onload = uploadrover;
    rover_imagetag.src = rover_image;
}

function uploadbg(){
    ctx.drawImage(bg_imagetag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keypresed = e.keyCode;
    console.log(keypresed);
    if(keypresed == "38"){
        up();
        console.log("up");
    }
    if(keypresed == "40"){
        down();
        console.log("down");
    }
    if(keypresed == "37"){
        left();
        console.log("left");
    }   
    if(keypresed == "39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        console.log ("when up arrow is pressed,x =" + rover_x + "y = " + rover_y);
        uploadbg();
            uploadrover();
        
    }
}

function down(){
    if(rover_y<=500){
        rover_y= rover_y+10;
        console.log ("when up arrow is pressed,x =" + rover_x + "y = " + rover_y);
        uploadbg();
            uploadrover();
     
    }
}


function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        console.log ("when up arrow is pressed,x =" + rover_x + "y = " + rover_y);
        uploadbg();
            uploadrover();
        
    }
}
function right(){
    if(rover_x<=700){
        rover_x= rover_x + 10;
        console.log ("when up arrow is pressed,x =" + rover_x + "y = " + rover_y);
        uploadbg();
            uploadrover();
        
    }
}
