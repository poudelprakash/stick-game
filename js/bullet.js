function Bullet(game){
	this.gameWindow =  game.gameWindow;
	this.bullet;
	this.bulletHeight = 200;
	this.bulletWidth = 5;
	this.bulletPosX = 0;
	this.bulletPosY = 0;
	this.fired = false;

	this.bulletInclinationAngle = 20;

	this.animationInterval;
	this.playerUpdateInterval;

	var that = this;

	this.fireBullet = function(){
		if(that.fired == false){
			that.bullet = document.createElement('div');
			that.bullet.style.width = that.bulletWidth + 'px'
			that.bullet.style.height = that.bulletHeight + 'px';
			that.bullet.style.left = game.player.posX + game.player.width + 'px'
			that.bullet.style.bottom = '0px';
			that.bullet.style.background = '#000';
			that.bullet.style.position = 'absolute';
			that.bullet.style.transform = 'rotate('+that.bulletInclinationAngle+'deg)';
			that.bullet.style.transformOrigin = '100% 100%'
			that.gameWindow.appendChild(that.bullet);
			that.animationInterval = setInterval(animate, 50);
		}

	}

	this.updateBullet = function(){


	}

	this.destroyBullet = function(){
		//clearing bullet resources
		that.fired = false;
		that.bulletInclinationAngle = 0;
		clearInterval(that.animationInterval);
		
		// that.gameWindow.removeChild(that.bullet);
	}

	this.movePlayer = function(){
		if(game.player.posX <= game.player.nextEnd){
			game.player.moveRight();
		}else{
			clearInterval(that.playerUpdateInterval);
		}
	}

	// private function
	var animate = function(){
		if(that.bulletInclinationAngle <= 88){
			that.bulletInclinationAngle += 2;
			that.bullet.style.transform = 'rotate('+that.bulletInclinationAngle+'deg)';
		}else{
			// move player
			// destroy bullet
			that.destroyBullet();
			game.player.nextEnd = game.player.posX + game.player.width + that.bulletHeight;

			that.playerUpdateInterval = setInterval(that.movePlayer, 25);
		}
	}
}