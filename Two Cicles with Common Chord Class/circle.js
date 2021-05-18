class Circle {

  constructor(px, py, pr, pw, pCol, pxs, pys, pxy, pid) {

    this.x = px;
    this.y = py;
    this.oY= py
    this.oX= px;
    this.r = pr;
    this.w = pw;
    this.pC = pCol;
    this.r2 = this.r * this.r;
    this.xSpeed = pxs;
    this.ySpeed = pys;
    this.proxy = pxy; // another circle used to have a seemless transition off/on stage
    this.id = pid;
    this.theta = 0;
  }

show(){
if(this.id == "A") {
   fill(this.pC);
     this.pC.setAlpha(50);
  // x, y, width
 ellipse(this.x, this.y, this.w);
}

  if(this.id == "B"){

    //  angle for the x value will move in a wave
      this.theta +=this.xSpeed;

  // if B is partially off stage, draw 2 circles
    if (this.y - this.w /2 < 0) {
      fill(this.pC);
      this.proxy.pC.setAlpha(50);
      ellipse(this.proxy.x, this.proxy.y, this.proxy.w);
      this.proxy.y -= this.proxy.ySpeed;
      this.proxy.x = this.proxy.x + cos(this.theta);

      fill(this.pC);
      this.pC.setAlpha(50);
      ellipse(this.x, this.y, this.w);
      this.y -= this.ySpeed;
      this.x = this.x + cos(this.theta);


    } else {
      fill(this.pC);
      this.pC.setAlpha(50);
      ellipse(this.x, this.y, this.w);
      this.y -= this.ySpeed;
      this.x = this.x + cos(this.theta);
    }
    //B has moved fully off stage, transfer y value and reset
    if (this.y < -this.w / 2) {
      this.y = this.proxy.y;
      this.x = this.proxy.x;
      this.proxy.y = this.proxy.oY;
      this.proxy.x = this.proxy.oX;

    }

  }





}


}
