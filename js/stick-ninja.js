'use strict';
// code of Ninja Game starts 

function NinjaGame(){
	this.screenWidth = 800;
	this.screenHeight = 400;
	this.gameWindow = document.getElementById('game-window');
	this.innerScreen = document.getElementById('background'); 
	this.gameWindow.style.width = this.screenWidth + 'px';
	this.gameWindow.style.height = this.screenHeight + 'px';

	this.player;
	this.stick;
	this.bgPosition = 0;

	var self = this;

	this.start = function(){
		self.player = new Player(self);
		self.player.createPlayer();

		self.stick = new Stick(self);
		self.stick.initialise();
		
		document.addEventListener('keydown', self.onkeydown, false);
		document.addEventListener('keyup', self.onkeyup, false);
	}

	this.moveBg =function() {
		self.bgPosition -= self.stick.stickLength/10;
		self.innerScreen.style.marginLeft = self.bgPosition + "px";
	}
	//event handler
	this.onkeydown=function(event){
		// keyboard keys handler
		if(event.keyCode == 32){//for space key
			game.stick.show();
			if (game.stick.fired == false){
				game.stick.updateStickLength();
			}
		}
		if(event.keyCode == 37 ){//for left Arrow
			self.moveBg();
			// self.player.moveLeft();
		}
		if(event.keyCode == 39){//for Right Arrow
			// self.player.moveRight();
		}
	}

	this.onkeyup = function(){
		if(event.keyCode == 32){//for space key
			self.stick.tilt();
		}
	}

}
var game = new NinjaGame;
game.start()