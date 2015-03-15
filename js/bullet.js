function Bullet(game){
	this.gameWindow =  game.gameWindow;
	this.bullet;
	this.bulletHeight = 200;
	this.bulletWidth = 5;
	this.bulletPosX = 0;
	this.bulletPosY = 0;
	this.fired = false;

	this.bulletUpdateInterval;

	var that = this;

	this.fireBullet = function(){
		if(that.fired == false){
			that.bullet = document.createElement('div');
			that.bullet.style.width = that.bulletWidth + 'px'
			that.bullet.style.height = that.bulletHeight + 'px';
			that.bullet.style.left = game.player.posX + game.player.width + 'px'
			that.bullet.style.bottom = '0px';
			that.bullet.style.background = '#000';
			that.bullet.style.position = 'absolute'
			that.gameWindow.appendChild(that.bullet);
		}

	}
	this.destroyBullet = function(){
		//clearing bullet resources
		that.fired = false;
		that.bulletPosY = that.bulletHeight;
		clearInterval(that.bulletUpdateInterval);
		that.gameWindow.removeChild(that.bullet);
	}
}