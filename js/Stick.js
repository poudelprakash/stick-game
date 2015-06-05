function Stick(game){
	this.gameWindow =  game.monitor.gameWindow;
	this.maxLength = game.monitor.height - 120; //120 is building height
	this.element; // html element of stick
	this.width= 5;
	this.length=0;
	this.posX = 0;
	this.posY = 120;
	this.inclinationAngle = 0;
	this.fired; //fired status boolean

	this.animationInterval;

	var self = this;

	this.initialise = function(){
		self.element = document.createElement('div');
		self.element.style.width = self.width + 'px';
		self.element.style.left = game.player.posX + game.player.width - self.width + 'px'
		self.element.style.bottom = self.posY + 'px';
		self.element.style.background = '#000';
		self.element.style.position = 'absolute';
		self.element.style.transformOrigin = '100% 100%';
		self.reset();
		self.gameWindow.appendChild(self.element);
	}

	this.reset = function(){
		self.fired = false;
		self.hide();
		resetLength();
		resetInclinationAngle();
	}

	this.updateLength = function(){
		if(self.length < self.maxLength && self.fired == false){
			self.length += 5;
			self.element.style.height = self.length + 'px';	
		}
	}

	this.tilt = function(){
		if (self.fired == false){
		self.animationInterval = setInterval(animate, 40);
		}
	}

	this.destroy = function(){
		//clearing stick resources
		self.gameWindow.removeChild(self.element);
	}

	this.hide = function(){
		self.element.style.display = 'none';	
	}

	this.show = function(){	
		self.element.style.display = 'block';
	}

	// private functions
	var resetLength = function(){
		self.length = game.player.height;
		self.element.style.height = self.length + 'px';
	}

	var resetInclinationAngle = function(){
		self.inclinationAngle = 0;
		self.element.style.transform = 'rotate('+self.inclinationAngle+'deg)';
	}

	var animate = function(){
		self.fired = true;
		if(self.inclinationAngle <= 80){
			self.inclinationAngle += 10;
			self.element.style.transform = 'rotate('+self.inclinationAngle+'deg)';
		}else{
			clearInterval(self.animationInterval);
			game.player.nextEnd = game.player.posX + game.player.width + self.length;
			game.player.intervalId = setInterval(game.player.movePlayer, 25);
		}
	}
}