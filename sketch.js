let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
let ball_x, ball_y, ball_diameter, ball_dx, ball_dy;
function setup() {
  createCanvas(400, 400);
  background("black");
  paddle_width = 100;
  paddle_x = (width / 2) - (paddle_width / 2);
  paddle_y = height - 25;
  paddle_height = 15;
  
 
   ball_diameter = 20;
  ball_dx = 1;
  ball_dy = 3;
  paddle_dx = 3;
  ball_x = (width / 2) - (ball_diameter / 2);
  ball_y = (height / 2) - (ball_diameter / 2);
 
  
  brick_x = ( width/2 );
  brick_y = height/6;
  brick_width = 50;
  brick_x = (width / 2) - (brick_width / 2);
  brick_height = 10;
  
  
}
 
function draw () {
  background("blue");
  
  
  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  var br = rect(brick_x,brick_y,brick_width,brick_height);
 
  if(ball_x + (ball_diameter / 2) > width) {
    ball_dx = -ball_dx;
  }
 
  if(ball_x - (ball_diameter / 2) < 0) {
    ball_dx = -ball_dx;
  }
 
  if(ball_y + (ball_diameter / 2) > height) {
    ball_dy = 0;
    ball_dx = 0;
  }
   if(ball_y - (ball_diameter / 2) < 0) {
    ball_dy = -ball_dy;
  }
 
  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;
 
  if (keyIsDown(LEFT_ARROW)) {
    paddle_x = paddle_x - paddle_dx;
  }
    if (keyIsDown(RIGHT_ARROW)) {
    paddle_x = paddle_x + paddle_dx;
      
  }
  
  const destroy = () => {
    console.log("jb")
  }
  
  
 if((ball_x< paddle_x+paddle_width) && 
    (ball_x>paddle_x) && 
    // ((ball_y+(ball_diameter/2))<paddle_y) && (ball_y>paddle_y) ){
    (ball_y+ball_diameter/2>(paddle_y)))
    {
   ball_dy=-ball_dy;
 }
  
  // ( (ball_y < brick_y+brick_height) && (ball_y > )){
    
  
  
    
  if ((ball_x < brick_x+brick_width) && (ball_x + ball_diameter/2 > brick_x) && (ball_y- ball_diameter/2  < brick_y+brick_height) && (ball_y+ ball_diameter/2  > brick_y)){
    if(((ball_x + ball_diameter/2 - ball_dx <= brick_x))  || (((ball_x - ball_dx >= brick_x+ brick_width)))){
      ball_dx = -ball_dx;
      remove()
    }
    else {
      ball_dy = -ball_dy;
      remove();
    }
  }
  
  
  
  
  
 
 //   if((ball_x<paddle_x+paddle_width) && 
 //    (ball_x>paddle_x) && 
 //   ball_y + (ball_diameter/2) < (height-25)){
 //   ball_dy=-ball_dy;
 // }
  
}