var starImg,fairyImg;
var star, starBody;
var fairy;
//create variable for fairy sprite and fairyImg
var fairySprite;
var fairyVoice;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairy = loadImage("fairy.png")
    fairyVoice = loadSound("JoyMusic.mp3")
	//load animation for fairy here
    var fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png") 
     
}
function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    
	//create fairy sprite and add animation for fairy
    fairy = createSprite(100,100,200,200)
    fairy.addAnimation(fairyImg)
	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
 if(star.y > 470 && starBody.position.y > 470){
	 Matter.Body.setStatic(starBody,true);
	 loadSound(fairyVoice)

 }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
 if(keyDown === LEFT_ARROW){
    fairy.velocityX=2
 }	
 if(keyDown === RIGHT_ARROW){
    fairy.velocityX=-2
 }	
}
