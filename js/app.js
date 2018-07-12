
  //Addded by me
  //SuccessCounter is 0 on game start and gets incemented by 1 when player reaches the goal
  var successCounter =0;
  document.getElementById('playerSuccess').innerHTML = successCounter;

  //Width and height  of each Tile block
  var BLOCK_WIDTH = 101;
  var BLOCK_HEIGHT = 83;

  // Enemies our player must avoid
  var Enemy = function(y) {
      // Variables applied to each of our instances go here

      //Added by me
      //Initial position for enemy's x and y
      //Start position of x is negtive so that the enemy's start postion is outside the canvas
      this.x = -BLOCK_WIDTH;
      this.y = y;

      //enemy's speed is also random
      this.speed = 100 + Math.floor(Math.random() * 512);

      // The image/sprite for our enemies, this uses
      // a helper we've provided to easily load images
      this.sprite = 'images/enemy-bug.png';
  };

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  Enemy.prototype.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.

        //Added By me
        //If enemy has not passed boundary, Move Forward, Increment x by speed*dt
        if(this.x <BLOCK_WIDTH *5) {

            this.x += this.speed * dt;
        }
        // Resets the enemy's start postion to outside the canvas
        else {
          this.x = -BLOCK_WIDTH;
        }

        //Handles collision with the Player
        if (player.x < this.x + 60 && player.x + 37 > this.x &&
          player.y < this.y + 25 && 30 + player.y > this.y) {

            //If collision occurs with the enemy, resets the player's co-ordinates to start position
            player.x = player.startX;
            player.y = player.startY;

            //Resets success counter after collison with the enemy
            successCounter= 0;
            document.getElementById('playerSuccess').innerHTML = successCounter;

            // toggle background after collision between player and enemies
            document.querySelector('body').style.backgroundColor = 'red';
            setTimeout(function () {
                document.querySelector('body').style.backgroundColor = 'white';
            }, 200);
       }

  };

  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  // Added By me
  // This class requires an update(), render() and
  // a handleInput() method.
  var Player = function() {

      //Sets player's co-ordinates to start position
      this.startX = BLOCK_WIDTH * 2;
      this.startY = (BLOCK_HEIGHT * 5) - 20;

      //Player's Initial x and y co-ordiantes
      this.x = this.startX;
      this.y = this.startY;

      //The image for our player, this uses a helper to easily load images
      this.sprite = 'images/char-horn-girl.png';
  };

  //Update Position
  Player.prototype.update = function() {

      // Check for player reaching top of canvas and winning the game and,
      // then resets player's position back to start
      if (this.y < 0) {
            this.x = this.startX;
            this.y = this.startY;
            //upadtes the success counter by one if player win by reaching the goal
            successCounter ++;
            console.log('successCounter:'+successCounter);
            document.getElementById('playerSuccess').innerHTML = successCounter;
        }

  }
  //Draw Player Sprite on current x and y co-ordinate position
  Player.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  /**
   *Update player's x and y property according to keyboard input,
   *Also Handles the functionality so that the player cant move off the screen
   *
   *@param {string} input - Direction to travel
   */
   Player.prototype.handleInput = function(input){
        switch(input) {
          case 'left':
                if(this.x >0) {
                this.x -= BLOCK_WIDTH;
                }
                break;
          case 'up':
                if(this.y >0) {
                this.y -= BLOCK_HEIGHT;
                }
                break;
          case 'right':
                if(this.x < BLOCK_WIDTH * 4) {
                  this.x += BLOCK_WIDTH;
                }
                break;
          case 'down':
                if(this.y < BLOCK_HEIGHT * 4) {
                this.y += BLOCK_HEIGHT;
                }
                break;
        }
   }


  // Now instantiate your objects.
  // Place all enemy objects in an array called allEnemies

  //Added By me
  //Init allEnemies Array
  var allEnemies = [];

  // Position "y" where the enemies will are created
  var enemyPosition = [59, 139, 220, 63];
  //var player = new Player(200, 380, 50);
  var enemy;

  //For each enemy create and pucsh new enemy object into above array
  enemyPosition.forEach(function(posY) {
      enemy = new Enemy(posY);
      allEnemies.push(enemy);
  });

// Place the player object in a variable called player
const player = new Player();

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
