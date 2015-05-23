function Stick(game){
	this.gameWindow =  game.gameWindow;
	this.$stick; // html element of stick
	this.stickWidth = 5;
	this.stickLength=0;
	this.stickPosX = 0;
	this.stickPosY = 120;
	this.stickInclinationAngle = 0;
	this.fired; //fired status boolean

	this.animationInterval;

	var self = this;

	this.initialise = function(){
		self.$stick = document.createElement('div');
		self.$stick.style.width = self.stickWidth + 'px';
		self.$stick.style.left = game.player.posX + game.player.width - self.stickWidth + 'px'
		self.$stick.style.bottom = self.stickPosY + 'px';
		self.$stick.style.background = '#000';
		self.$stick.style.position = 'absolute';
		self.$stick.style.transformOrigin = '100% 100%';
		self.resetStick();
		self.gameWindow.appendChild(self.$stick);
	}

	this.resetStick = function(){
		self.fired = false;
		self.hide();
		resetLength();
		resetInclinationAngle();
	}

	this.updateStickLength = function(){
		if(self.stickLength < game.screenHeight){
			self.stickLength += 5;
			self.$stick.style.height = self.stickLength + 'px';	
		}
	}

	this.tilt = function(){
		if (self.fired == false){
		self.animationInterval = setInterval(animate, 40);
		}
	}

	this.destroyStick = function(){
		//clearing stick resources
		self.gameWindow.removeChild(self.stick);
	}

	this.hide = function(){
		self.$stick.style.display = 'none';	
	}

	this.show = function(){	
		self.$stick.style.display = 'block';
	}

	// private functions
	var resetLength = function(){
		self.stickLength = game.player.height;
		self.$stick.style.height = self.stickLength + 'px';
	}

	var resetInclinationAngle = function(){
		self.stickInclinationAngle = 0;
		self.$stick.style.transform = 'rotate('+self.stickInclinationAngle+'deg)';
	}

	var animate = function(){
		self.fired = true;
		if(self.stickInclinationAngle <= 88){
			self.stickInclinationAngle += 2;
			self.$stick.style.transform = 'rotate('+self.stickInclinationAngle+'deg)';
		}else{
			clearInterval(self.animationInterval);
			game.player.nextEnd = game.player.posX + game.player.width + self.stickLength;
			game.player.intervalId = setInterval(game.player.movePlayer, 25);
		}
	}
}