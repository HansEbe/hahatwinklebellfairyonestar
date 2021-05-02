var starImg,bgImg;
var star, starBody;
var fairyVoice;

//create variable for fairy sprite and fairyImg
var fairy, fairyFlutter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	
	//load animation for fairy here
	fairyVoice = loadSound("sound/JoyMusic.mp3");

	fairyFlutter = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.loop();

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(400, 375, 200, 400);
	fairy.addAnimation("images/fairyImg1", fairyFlutter);
	fairy.scale = 0.2;

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
		if (star.isTouching(fairy)){
			Matter.Body.setStatic(starBody,true); 
		}

  drawSprites();

  keyPressed();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 10;
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 10;
	}
}
