function Building(game){
	this.gameWindow =  game.monitor.gameWindow;
	this.element; // html element of building
	this.posX = 40;
	this.posY = 0;
	this.width = 80;
	this.height = 120;

	var widths = [30,40,50,60,70,80];
	var positions = [80,90,100,110,120,130,140,150];

	var self = this;

	this.create = function(i){
		if(i>0){
			var lastBuilding = game.buildings[i-1]
			self.posX = lastBuilding.posX + lastBuilding.width + game.utility.getRandom(8,20)*10;
			self.width = widths[game.utility.getRandom(0,5)]
		}

		self.element = document.createElement('div');
		self.id = 'building'+i;
		self.element.style.width = self.width + 'px';
		self.element.style.height = self.height + 'px';
		self.element.style.left = self.posX + 'px';
		self.element.style.bottom = self.posY + 'px';
		self.element.style.background = '#000';
		self.element.style.position = 'absolute';
		self.gameWindow.appendChild(self.element);
	}

	this.moveLeft = function(){
		self.posX = game.initialLeft;
		self.element.style.left = self.posX + 'px';
	};

	this.destroy = function(){
		self.element.style.display = 'none';
	}

}