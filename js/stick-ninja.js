'use strict';
// code of Ninja Game starts 

function NinjaGame(){
	this.screenWidth = 800;
	this.screenHeight = 400;
	this.gameWindow = document.getElementById('game-window');
	this.gameWindow.style.width = this.screenWidth + 'px';
	this.gameWindow.style.height = this.screenHeight + 'px';

	this.player;
	this.bullet;

	var that = this;

	this.start = function(){
		that.player = new Player(that);
		that.player.createPlayer();

		that.bullet = new Bullet(that);
		
		document.addEventListener('keydown', that.onkeydown, false);
	}

	//event hendler
	this.onkeydown=function(event){
		// keyboard keys handler
		if(event.keyCode == 32){//for space key
			that.bullet.fireBullet();
		}
		if(event.keyCode == 37 ){//for left Arrow
			that.player.moveLeft();
		}
		if(event.keyCode == 39){//for Right Arrow
			that.player.moveRight();
		}
	}

}
var game = new NinjaGame;
game.start()