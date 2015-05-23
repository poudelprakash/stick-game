'use strict';
// code of Ninja Game starts 

function NinjaGame(){
	this.screenWidth = 800;
	this.screenHeight = 400;
	this.gameWindow = document.getElementById('game-window');
	this.gameWindow.style.width = this.screenWidth + 'px';
	this.gameWindow.style.height = this.screenHeight + 'px';

	this.player;
	this.stick;

	var self = this;

	this.start = function(){
		self.player = new Player(self);
		self.player.createPlayer();

		self.stick = new Stick(self);
		self.stick.initialise();
		
		document.addEventListener('keydown', self.onkeydown, false);
		document.addEventListener('keyup', self.onkeyup, false);
	}

	//event hendler
	this.onkeydown=function(event){
		// keyboard keys handler
		if(event.keyCode == 32){//for space key
			// self.stick.fireStick();
			self.stick.updateStickLength();
		}
		if(event.keyCode == 37 ){//for left Arrow
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