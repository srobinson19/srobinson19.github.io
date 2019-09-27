noFill();
var drawHead = function (height,ShedmojiX,ShedmojiY){
 
 //var ShedmojiX =100;
 //var ShedmojiY =100;
 
    fill(102, 47, 47);
    ellipse(ShedmojiX+103,ShedmojiY+81,87,165); //head
    noFill();
    beginShape();//nose
    vertex(ShedmojiX+98, ShedmojiY+72);
    bezierVertex(ShedmojiX+79, ShedmojiY+100, ShedmojiX+90, ShedmojiY+105, ShedmojiX+109, ShedmojiY+91);
    endShape();
    fill(255,255,255);
    ellipse(ShedmojiX+115,ShedmojiY+57,24,10);//eye whites
    ellipse(ShedmojiX+78,ShedmojiY+59,24,10);//eye whites
    fill(5, 4, 4);
    ellipse(ShedmojiX+78,ShedmojiY+58,9,10);// left eye
    ellipse(ShedmojiX+118,ShedmojiY+58,9,10);// right eye
    fill(237, 242, 237);
    stroke(100, 80, 102);
    arc(ShedmojiX+108,ShedmojiY+112, 65, 29, 37, 187);//mouth
    fill(191, 187, 191);
    rect(ShedmojiX+59, ShedmojiY+30, 106, 10);// hat brim
    bezier(ShedmojiX+139, ShedmojiY+30, ShedmojiX+159, ShedmojiY-18, ShedmojiX+23, ShedmojiY-30, ShedmojiX+61, ShedmojiY+44);//hat
};
var drawBody = function (height,ShedmojiX,ShedmojiY){
    // Shirt
    fill(21, 42, 77);
    quad(ShedmojiX+35, ShedmojiY+276, ShedmojiX+166, ShedmojiY+278, ShedmojiX+128, ShedmojiY+152, ShedmojiX+78, ShedmojiY+154);
    fill(255, 255, 255);
    rect(ShedmojiX+58,ShedmojiY+209, 87, 6);
    rect(ShedmojiX+48, ShedmojiY+234, 105, 6);
    // initials
    fill(240, 235, 235);
    text("S R", ShedmojiX+99, ShedmojiY+180);
 
};
var drawShedmoji = function (height,ShedmojiX,ShedmojiY){
	drawHead(height,ShedmojiX,ShedmojiY);
	drawBody(height,ShedmojiX,ShedmojiY);
};

//mousePressed function 

var mousePressed = function()
{
 
  drawShedmoji(100,mouseX,mouseY);
  
    
};

drawShedmoji(90,random(0,241),random(0,209));
drawShedmoji(80,random(0,175),random(0,194));
drawShedmoji(70,random(0,120),random(0,169));
drawShedmoji(60,random(0,90),random(0,140));

