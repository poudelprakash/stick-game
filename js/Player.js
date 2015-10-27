function Player(game){

	this.gameWindow = game.monitor.gameWindow;
	this.element;
	this.initialPosition = 40;
	this.posX;
	this.bottom = 120; //120 is building height
	this.height = 80;
	this.width = 40;		

	this.nextEnd = 0;
	this.rightEnd = game.monitor.width - this.width;
	this.intervalId;

	var self =  this;

	this.createPlayer = function(){
		self.element = document.createElement('div');
		self.element.style.width = self.width + 'px';
		self.element.style.height =  self.height + 'px'
		self.element.style.bottom = self.bottom + 'px';
		self.element.id = 'player';
		self.resetPosition();
		self.gameWindow.appendChild(self.element);
	}

	this.movePlayer = function(){
		if(self.posX < self.nextEnd){
			self.climbStick();
			self.moveRight();
			game.monitor.moveBg();
		}else{
			self.climbDown();
			setTimeout(destinationAnimation, 300);
		}
	}

	var destinationAnimation = function(){
		clearInterval(self.intervalId);
		game.stick.reset();
		// game.building1.destroyBuilding();
		// game.building2.moveLeft();
		self.resetPosition();
	}

	this.resetPosition = function(){
		self.posX = self.initialPosition;
		self.element.style.left = self.posX + 'px';
	}

	this.climbStick = function(){
		self.element.style.bottom = self.bottom + game.stick.width + 'px';
	}

	this.climbDown = function(){
		self.element.style.bottom = self.bottom+'px';
	}

	this.moveRight = function(){
		// moves player right
		if(self.posX < self.rightEnd){
		self.posX += 5;
		self.element.style.left = self.posX + 'px';
		}
	}

	this.moveLeft = function(){
		// moves player left
		if(self.posX > 0){
			self.posX -= 10;
			self.element.style.left = self.posX + 'px';
		}
	}
}