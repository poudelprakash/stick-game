function Building(game){
	this.gameWindow =  game.gameWindow;
	this.$building; // html element of stick
	this.buildingWidth = 20;
	this.buildingHeight = 120;

	var self = this;

	this.createBuilding = function(left,width){
		self.$building = document.createElement('div');
		self.$building.style.width = width + 'px';
		self.$building.style.height = self.buildingHeight + 'px';
		self.$building.style.left = left + 'px';
		self.$building.style.bottom = '0px';
		self.$building.style.background = '#000';
		self.$building.style.position = 'absolute';
		self.gameWindow.appendChild(self.$building);
	}

	this.updateBuilding = function(){

	}

	this.destroyBuilding = function(){

	}

}