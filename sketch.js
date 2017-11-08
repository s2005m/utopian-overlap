var p;
function setup() {
	createCanvas(600, 400);
	p=createElement('p','your score will be here');
}
var bx=400;
var by=200;
var c1;
var c2;

function draw() {
    bx = abs(sin(frameCount / 400)) * width;

	background(255,255,0);
	fill(255,0,0);
	ellipse(bx,by,300,300);
	fill(0,255,0);
	c1 = mouseX+30*0.8509035;
	c2 = mouseY-30*0.8509035;
	ellipse(c1,c2,60,60);

}

var best_score = 1000;
function mouseClicked(){
 var score = floor(dist(bx,by,c1,c2)*100);
 if (score<best_score){best_score=score}
 p.html("Your score is " + score +" and Your BEST score is " + best_score);


}
