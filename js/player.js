function Player(game){

	this.gameWindow = game.gameWindow;
	this.player;
	this.posX = 200;
	this.bottom = 0;
	this.height = 80;
	this.width = 40;	
	this.rightEnd = game.screenWidth - this.width;

	var that =  this;

	this.createPlayer = function(){
		that.player = document.createElement('div');
		that.player.style.width = that.width + 'px';
		that.player.style.height =  that.height + 'px'
		that.player.style.left = that.posX + 'px';
		that.player.style.bottom = this.bottom + 'px';
		that.player.id = 'player';
		that.gameWindow.appendChild(that.player);
	}

	this.moveRight = function(){
		// moves player right
		if(that.posX < that.rightEnd){
		that.posX += 10;
		that.player.style.left = that.posX + 'px';
		}
	}

	this.moveLeft = function(){
		// moves player left
		if(that.posX > 0){
			that.posX -= 10;
			that.player.style.left = that.posX + 'px';
		}
	}
}