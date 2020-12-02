var dog,dogImg,dogImg1;
var database;
var food;
var foodStock
var button1,button2;
// var foodStock;

function preload(){
   dogImg=loadImage("Dog.png");
   dogImg1=loadImage("happydog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  food=new Food();
  food.getFoodStock();
  food.updateFoodStock();
  food.deductFood();

  button1=createButton("Feed Dog")
button1.position (200,200);
  // foodStock=database.ref('Food');
  // foodStock.on("value",readStock);
  // textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    food.deductFood(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  drawSprites();
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
// function readStock(data){
//   foodS=data.val();
// }

// //Function to write values in DB
// function writeStock(x){
//    if(x<=0){
//    x=0;
//    }else{
//    x=x-1;
//    } 
//   database.ref('/').update({
//     Food:x
//   })
// }