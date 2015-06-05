function Screen(game){
	this.gameWindow = document.getElementById('game-window');
	this.innerScreen = document.getElementById('background');
	// this.gameWindow = document.getElementById('main-screen');
	// this.innerScreen = document.getElementById('inner-screen')
	this.height = 400;
	this.width = 800;
	this.gameWindow.style.width = this.width + 'px';
	this.gameWindow.style.height = this.height + 'px';
	this.bgPosition = 0;

	var self = this;
	this.moveBg =function() {
		self.bgPosition -= game.stick.length/30;
		self.innerScreen.style.marginLeft = self.bgPosition + "px";
	}

}