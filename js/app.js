
//initial level of the game
var level = 1;

// Enemies our player must avoid
var Enemy = function(y) {
    // defines intial positions and speeds of the enemies
    this.x = -110;
    this.y = y;
    this.speed = randomSpeed();
    // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //once the enmy reach the end of screen return it returns to the start
    if (this.x > 505){
    	this.x = -2;
        this.speed = randomSpeed();
    }
};

Enemy.prototype.checkCollision = function(player) {
  return (this.x <= player.x + 60 && this.x >= player.x - 60 && this.y 
      <= player.y + 20 && this.y >= player.y - 20 );
}


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 200
    this.y = 400
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {
  };




//create the random speed range according to the level
function randomSpeed () {
   speed = Math.random() * ((70 - 20) + 20) * level;
   return speed;
}

//function to move the player inside the limits
Player.prototype.handleInput = function(key) {
    if (key == 'left' && this.x > 5) {
        this.x -= 100;
    }
    if (key == 'right' && this.x < 400) {
        this.x += 100;
    }
    if (key == 'up' && this.y > 30) {
        this.y -=  90;
    }
    if (key == 'down' && this.y < 400) {
        this.y += 90;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var enemy1 = new Enemy (60);
var enemy2 = new Enemy (140);
var enemy3 = new Enemy (220);
var allEnemies = [enemy1, enemy2, enemy3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

