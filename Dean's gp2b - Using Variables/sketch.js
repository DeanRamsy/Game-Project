/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var tree;

var canyon;

var collectable;

var mountain;
var cloud;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

    //initialise variables
    tree = {pos_x: 470, pos_y: 250}
    
    canyon = {x_pos: 170, width: 100}
    
    collectable = {x_pos: 170, y_pos: 350, size: 30}
    
    mountain = {x_pos: 350, y_pos: 430, size: 50}
    
    cloud = {x_pos: 100, y_pos: 150, size: 50}
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    // draw clouds
    fill(255,255,255);
    ellipse(cloud.x_pos - 20,
            cloud.y_pos,
            cloud.size - 15);
    ellipse(cloud.x_pos,
            cloud.y_pos,
            cloud.size);
    ellipse(cloud.x_pos + 20,
            cloud.y_pos,
            cloud.size - 15);
    
    // draw mountain
    fill(190,190,190);
    triangle(mountain.x_pos,mountain.y_pos - 170,
             mountain.x_pos - 50,mountain.y_pos,
             mountain.x_pos + 50,mountain.y_pos);
    triangle(mountain.x_pos + 50,mountain.y_pos - 130,
             mountain.x_pos,mountain.y_pos,
             mountain.x_pos + 100,mountain.y_pos);
    
    //2.1 ice caps
    
    fill(255,255,255);
    triangle(mountain.x_pos,mountain.y_pos - 170,mountain.x_pos - 5,mountain.y_pos - 150,mountain.x_pos + 5,mountain.y_pos - 150);
    triangle(mountain.x_pos + 50,mountain.y_pos - 130,mountain.x_pos + 43,mountain.y_pos - 110,mountain.x_pos + 57,mountain.y_pos - 110);
    
    
    // draw tree
    fill(165,42,42);
    rect(tree.pos_x + 15, floorPos_y - 142,30,145);
    fill(0,205,0)
    //triangle(750,300,875,150,1000,300);
    triangle(tree.pos_x - 50, tree.pos_y + 50,
    tree.pos_x + 30, tree.pos_y - 50, tree.pos_x + 110,
    tree.pos_y + 50)
    //triangle(755,210,875,80,1005,210);
    triangle(tree.pos_x - 50, tree.pos_y,
    tree.pos_x + 30, tree.pos_y - 100, tree.pos_x + 110,
    tree.pos_y)
    
    
    // draw game character
    //head
    fill(205, 133, 63);
    ellipse(gameChar_x, gameChar_y - 60, 30);
    //eyes
    fill(0);
    ellipse(gameChar_x - 7, gameChar_y - 63, 3, 3);
    ellipse(gameChar_x + 7, gameChar_y - 63, 3, 3);
    
    //body
    fill(255, 0, 0);
    rect(gameChar_x - 10, gameChar_y - 47, 18, 25);
    
    //left leg
    fill(0, 0, 255);
    rect(gameChar_x - 11, gameChar_y - 22, 7, 20);
    
    //right leg
    fill(0, 0, 255);
    rect(gameChar_x + 3, gameChar_y - 22, 7, 20);
    
    
    // draw canyon
//    fill(0,0,0);
//    rect(canyon.Pos_x, 432, canyon.Width,142);
    fill(0,0,0);
    rect(canyon.x_pos, 432, canyon.width,142);

    
    //draw collectable token
    fill(666);
    ellipse(canyon.x_pos,collectable.y_pos,
            collectable.size,collectable.size);
    
    
    // draw game character
    //head
    fill(205, 133, 63);
    ellipse(gameChar_x, gameChar_y - 60, 30);
    //eyes
    fill(0);
    ellipse(gameChar_x - 7, gameChar_y - 63, 3, 3);
    ellipse(gameChar_x + 7, gameChar_y - 63, 3, 3);
    
    //body
    fill(255, 0, 0);
    rect(gameChar_x - 10, gameChar_y - 47, 18, 25);
    
    //left leg
    fill(0, 0, 255);
    rect(gameChar_x - 11, gameChar_y - 22, 7, 20);
    
    //right leg
    fill(0, 0, 255);
    rect(gameChar_x + 3, gameChar_y - 22, 7, 20);
    
}
function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;
 }