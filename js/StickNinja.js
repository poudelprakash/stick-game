'use strict';
// code of Stick Ninja Game starts 

function StickNinja(){

	this.initialLeft = 40;

	var levels = [35, 45, 55, 60, 65, 70];
	var levelCount = 0;

	this.monitor;
	this.player;
	this.stick;
	this.buildings = [];
	this.utility;
	this.bgPosition = 0;

	var currentBuilding = 0;
	var nextBuilding = 1;

	var self = this;

	this.start = function(){

		this.monitor = new Screen(self);

		self.player = new Player(self);
		self.player.createPlayer();

		self.stick = new Stick(self);
		self.stick.initialise();

		self.utility =  new Utility(self);

		for(var i=0; i<levels[levelCount]; i++){
			var building = new Building(self);
			building.create(i);
			self.buildings.push(building);
		}

		document.addEventListener('keydown', self.onkeydown, false);
		document.addEventListener('keyup', self.onkeyup, false);
	}

	this.checkCollision = function(){
		// console.log(self.initialLeft, self.buildings[currentBuilding].width,self.stick.length,self.buildings[nextBuilding].posX);	
		var distance = self.initialLeft  + self.stick.width + self.player.posX+ self.stick.length
		console.log(distance,self.buildings[nextBuilding].posX );
		if(distance < self.buildings[nextBuilding].posX || distance > (self.buildings[nextBuilding].posX + self.buildings[nextBuilding].width) ){
			console.log('maryo');
		}else{
			console.log('bachyo');
self.buildings[currentBuilding].moveLeft();
			// self.buildings[currentBuilding].destroy();

			// currentBuilding = nextBuilding;
			// nextBuilding++;
		}
	}

	//event handler
	this.onkeydown=function(event){
		// keyboard keys handler
		if(event.keyCode == 32){//for space key
			self.stick.show();
			if (self.stick.fired == false){
				self.stick.updateLength();
			}
		}
	}

	this.onkeyup = function(){
		if(event.keyCode == 32){//for space key
			self.stick.tilt();
			self.checkCollision();
		}
	}

}
var game = new StickNinja;
game.start()