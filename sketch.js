class Enemy {
constructor(x, y) {
this.x = x
this.y = y
}
show() {
rect(this.x, this.y, 1, 1)
}
}
class Bullet {
constructor(x, y) {
this.x = x
this.y = y
}

show() {
rect(this.x, this.y, 1, 1)
}
move() {
  this.x = this.x + 1
}
}
class Player{
  constructor() {
    this.x = 200;
    this.y = 200;

  }
 
}
var x = Math.floor(Math.random() * (360 - 20 + 1)) + 20;
var y = Math.floor(Math.random() * (360 - 40 + 1)) + 40;
var enemy = new Enemy(x, y )
var player =  new Player()
var bullets = []

var d;
var score;
function setup() {
  createCanvas(400, 400);


}

  
function draw() {
text(score, 100, 50)
background(220)

enemy.show()
  ellipse(player.x, player.y, 20);
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show()
    bullets[i].move()
 d = abs(bullets[i].y - enemy.y)
if  (d < 2 && bullets[i].x == enemy.x) {
console.log("ship down")
x = Math.floor(Math.random() * (360 - 20 + 1)) + 20;
y = Math.floor(Math.random() * (360 - 40 + 1)) + 40;
enemy.x = x
enemy.y = y
score +=1

}
  }
console.log(score)
}
function keyPressed() {
  if (key == 'a') {
    var bullet = new Bullet(player.x, player.y)
    bullets.push(bullet)
    }
if (keyCode == RIGHT_ARROW) {
player.x +=3;




} else if(keyCode == LEFT_ARROW) {
player.x += -3;





} else if (keyCode == UP_ARROW) {
  player.y+=-3
} else if (keyCode == DOWN_ARROW) {
  player.y+=3
}
}
