function Player(game){

	this.gameWindow = game.gameWindow;
	this.player;
	this.initialPosition = 40;
	this.posX;
	this.bottom = 0;
	this.height = 80;
	this.width = 40;		

	this.nextEnd = 0;
	this.rightEnd = game.screenWidth - this.width;
	this.intervalId;

	var self =  this;

	this.createPlayer = function(){
		self.player = document.createElement('div');
		self.player.style.width = self.width + 'px';
		self.player.style.height =  self.height + 'px'
		self.player.style.bottom = self.bottom + 'px';
		self.player.id = 'player';
		self.resetPosition();
		self.gameWindow.appendChild(self.player);
	}

	this.movePlayer = function(){
		if(self.posX < self.nextEnd){
			self.climbStick();
			self.moveRight();
		}else{
			self.climbDown();
			setTimeout(destinationAnimation, 300);
		}
	}

	var destinationAnimation = function(){
		clearInterval(self.intervalId);
		game.stick.destroyStick();
		self.resetPosition();
	}

	this.resetPosition = function(){
		self.posX = self.initialPosition;
		self.player.style.left = self.posX + 'px';
	}

	this.climbStick = function(){
		self.player.style.bottom = game.stick.stick.style.width;
	}

	this.climbDown = function(){
		self.player.style.bottom = '0px';
	}

	this.moveRight = function(){
		// moves player right
		if(self.posX < self.rightEnd){
		self.posX += 5;
		self.player.style.left = self.posX + 'px';
		}
	}

	this.moveLeft = function(){
		// moves player left
		if(self.posX > 0){
			self.posX -= 10;
			self.player.style.left = self.posX + 'px';
		}
	}
}