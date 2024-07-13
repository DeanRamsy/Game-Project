/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

// declare variables
var cloudPos_x;
var cloudScale;

function setup()
{
	createCanvas(1024, 576);
    
    //initialize variables
    cloudPos_x = 200;
    cloudScale = 0.7;
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
    
    fill(255,255,255);
    ellipse(cloudPos_x,
            150,
            100 * cloudScale,
            80 * cloudScale);
    ellipse(cloudPos_x - 30 * cloudScale,
            150,
            100 * cloudScale,
            60 * cloudScale);
    ellipse(cloudPos_x + 30 * cloudScale,
            150,
            100 * cloudScale,
            60 * cloudScale);
    

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
    
    fill(190,190,190);
    triangle(500,260,450,430,550,430);
    triangle(550,300,500,430,600,430);
    
    //2.1 ice caps
    
    fill(255,255,255);
    triangle(500,260,495,280,505,280);
    triangle(550,300,543,320,557,320);

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
    
    fill(165,42,42);
    rect(860,283,30,150);
    fill(0,205,0)
    triangle(750,300,875,150,1000,300);
    triangle(755,210,875,80,1005,210);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    
    fill(0,0,0);
    rect(150, 432, 100,142);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    
    fill(255,215,0);
    ellipse(450,400,50,50);

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
