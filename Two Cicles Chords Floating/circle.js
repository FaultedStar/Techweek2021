class Circle {

  constructor(px, py, pr, pCol, pxs, pys) {

    this.x = px;
    this.y = py;
    this.oY= py
    this.oX= px;
    this.r = pr;
    this.w = this.r *2;
    this.pC = pCol;
    this.r2 = this.r * this.r;
    this.xSpeed = pxs;
    this.ySpeed = pys;
    this.theta = 0;
  }

show(){
   fill(this.pC);
   noStroke();
    // this.pC.setAlpha(50);
      this.pC.setAlpha(90 + 128 * sin(millis() / 2000)); // https://p5js.org/reference/#/p5.Color/setAlpha
     ellipse(this.x, this.y, this.w);
}

move(){
    //  angle for the x value will move in a wave
      this.theta +=this.xSpeed;
      this.y -= this.ySpeed;
      this.x = this.x + cos(this.theta);

  // if off stage, reset
    if (this.y < -this.w / 2) {
      this.y = this.oY;
      this.x = this.oX;
    }


}
}
