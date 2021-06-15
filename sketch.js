const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg=("sunrise1.png");

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {

    // add condition to check if any background image is there to add
    if (backgroundImg)

        background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    fill("purple");
    textSize(30);

    if (hour >= 12) {
        text("Time:" + hour % 12 + "PM", 50, 100);
    } else if (hour == 0) {
        text("time:12 AM", 100, 100);
    } else {
        text("Time:" + hour % 12 + "AM", 50, 100);
    }

}

async function getBackgroundImg() {

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");


    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    hour = datetime.slice(11, 13);

    // add conditions to change the background images from sunrise to sunset
    if (hour = 04 && hour <= 06) {
        bg = "sunrise1.png"
    } else if (hour = 06 && hour <= 08) {
        bg = "sunrise2.png"
    } else if (hour = 8 && hour <= 11) {
        bg = "sunrise3.png"
    } else if (hour = 11 && hour <= 13) {
        bg = "sunrise4.png"
    } else if (hour = 13 && hour <= 15) {
        bg = "sunrise5.png"
    } else if (hour = 15 && hour <= 18) {
        bg = "sunrise6.png"
    } else if (hour = 18 && hour <=20 ) {
        bg = "sunrise7.png"
    }
    else if (hour = 20 && hour <= 22) {
        bg = "sunrise8.png"
    }
    else if (hour = 22 && hour <= 23) {
        bg = "sunrise9.png"
    }
    else if (hour = 23 && hour <= 0) {
        bg = "sunrise10.png"
    }
    else if (hour = 0 && hour <= 03) {
        bg = "sunrise11.png"
    }
    else if (hour = 03 && hour <= 04) {
        bg = "sunrise12.png"
    }
  


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
