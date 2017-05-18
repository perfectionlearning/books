//=======================================================
//Game Logic
//=======================================================
(function () {
game.amplitudeLeft = 0.50, game.amplitudeLeft_init = 0.50, game.amplitudeLeftMax = 2.00;
game.amplitudeLeftMin = 0.50, game.amplitudeLeftStep = 0.10;

game.amplitudeRight = 1.00, game.amplitudeRight_init = 1.00, game.amplitudeRightMax = 2.00;
game.amplitudeRightMin = 0.50, game.amplitudeRightStep = 0.10;

game.wavelengthLeft = 6.00, game.wavelengthLeft_init = 6.00, game.wavelengthLeftMax = 10.00;
game.wavelengthLeftMin = 2.00, game.wavelengthLeftStep = 0.10;

game.wavelengthRight = 4.00, game.wavelengthRight_init = 4.00, game.wavelengthRightMax = 10.00;
game.wavelengthRightMin = 2.00, game.wavelengthRightStep = 0.10;

game.frequencyLeft = null, game.frequencyRight = null;	
game.gameStatus = null, game.graphTimer = null;
game.ctrLeft = 0, game.ctrRight = 0;

var eachGridInPx = 30;
var oneMtInPx = eachGridInPx * 2;
var xAxis = ( eachGridInPx * 8 ) + 22;
var _scene  = null, isAllowedToClickBack = false;
var displacement_1 = 0, displacement_2 = 0, firstStepReached = false, lastStepReached = false;
//=======================================================
// Let's build the elements on load
//=======================================================
game.createGraphContainer = function( director, scene, parent) {
	_scene = scene;
	var canvas1 = document.createElement('canvas');
		canvas1.width = director.width;
		canvas1.height = director.height - game.panelHeight;
	game.graphCont = new CAAT.Foundation.ActorContainer()
					.setBounds( 0, 0, director.width, director.height - game.panelHeight)
					.setFillStyle('red')
					.setBackgroundImage( canvas1 )
					.setClip(false);
	parent.addChild(game.graphCont);
	//just draw a single x-axis line on load
	game.graphCont.__ctx = canvas1.getContext('2d');		
	game.graphCont.__ctx.moveTo(0, xAxis);
	game.graphCont.__ctx.lineTo(750, xAxis);
	game.graphCont.__ctx.strokeStyle = '#000000';
	game.graphCont.__ctx.lineWidth = 1;
	game.graphCont.__ctx.stroke();	
}
//=======================================================
// This function calculates and plots the curve
//=======================================================
function updateArray(graphContObj) {
	var kLeft = (( 2 * Math.PI ) / ( game.wavelengthLeft * oneMtInPx ));
	var kRight = (( 2 * Math.PI ) / ( game.wavelengthRight * oneMtInPx ));						
	
	var director = game.getDirector();
	//canvas1 = graphContObj.backgroundImage.image;
	/*
	canvas1.width = canvas1.width; //clear the content of the canvas
	canvas1.height = canvas1.height;
	*/
	var canvas1 = document.createElement('canvas');
		canvas1.width = director.width;
		canvas1.height = director.height - game.panelHeight;
	graphContObj.setBackgroundImage( canvas1 );
	
	
	graphContObj.__ctx = canvas1.getContext('2d');
	graphContObj.__ctx.moveTo(-5, xAxis);
	
	var numOfCycles = 750 / (game.wavelengthRight * oneMtInPx);
	var newCycleStartX = Math.ceil(numOfCycles) * (game.wavelengthRight * oneMtInPx);
	var extraVal = newCycleStartX - 750;
	
	for(p = 0; p <= 750; p += 5){	
		cR = p + game.ctrRight;		
		cL = p + game.ctrLeft;		
		
		if(cR < 755 && cR > -5){
			cR = 0;
		}
		if(cL < 755 && cL > -5){		
			cL = 0;
		} else {
			cL = cL + extraVal;	
		}		
		displacement_1 = (game.amplitudeLeft * oneMtInPx * Math.sin(kLeft * cR));
		displacement_2 = (game.amplitudeRight * oneMtInPx * Math.sin(kRight * cL));			
		var displacement = displacement_1 + displacement_2;		
		graphContObj.__ctx.lineTo(p, xAxis - displacement);				
	}
	graphContObj.__ctx.lineWidth = 2;
	graphContObj.__ctx.stroke();
}
//=======================================================
// When the input values are updated
//=======================================================
game.valuesChanged = function() {
	updateArray(game.graphCont);
}
//=======================================================
// On clicking the go btn
//=======================================================
game.goBtnMDownHandler = function() {
	isAllowedToClickBack = true;
	//don't allow further go button clicks when the game is already running
	if(game.gameStatus == 'started') return;
	game.gameStatus = 'started';
	firstStepReached = false;
	lastStepReached = false;
	//If already time instance is running by any chance then cancel it out
	if(game.graphTimer) game.graphTimer.cancel();
	game.graphTimer = _scene.createTimer( 
		_scene.time, 
		Number.MAX_VALUE, 
		null, 
		function(scene_time, time_time, time_instance){ 
			updateArray(game.graphCont);
			game.ctrLeft+=3;
			game.ctrRight-=3;
		}, 
		null 
	); 
}
//=======================================================
// On clicking the reset button
//=======================================================
game.resetBtnMDownHandler =  function() {
	game.ctrLeft = 0;
	game.ctrRight = 0;
	game.gameStatus = null;
	isAllowedToClickBack = false;
	if(game.graphTimer) game.graphTimer.cancel();
	firstStepReached = false;
	lastStepReached = false;
	/*
	var canvas1 = game.graphCont.backgroundImage.image;
	canvas1.width = canvas1.width; //clear the content of the canvas
	canvas1.height = canvas1.height;
	*/
	var canvas1 = document.createElement('canvas');
		canvas1.width = game.getDirector().width;
		canvas1.height = game.getDirector().height - game.panelHeight;
	game.graphCont.setBackgroundImage( canvas1 );
	game.graphCont.__ctx = canvas1.getContext('2d');		
	game.graphCont.__ctx.moveTo(0, xAxis);
	game.graphCont.__ctx.lineTo(750, xAxis);
	game.graphCont.__ctx.stroke();
}
//=======================================================
// On clicking the pause button
//=======================================================
game.pauseBtnMDownHandler = function() {
	if(game.gameStatus == null) return;
	game.gameStatus = 'paused';
	game.graphTimer.cancel();
}
//=======================================================
// On clicking time step backward
//=======================================================
game.timeStepBackward = function() {
	//if(firstStepReached == true && game.gameStatus == null) return;
	if(isAllowedToClickBack == false) {
		return;	
	}	
	game.pauseBtnMDownHandler();
	game.ctrLeft-=3;
	game.ctrRight+=3;
	if(game.ctrRight == 0 && game.ctrLeft == 0) {
		isAllowedToClickBack = false;
		firstStepReached = true;
		lastStepReached = true;
		/*
		var canvas1 = game.graphCont.backgroundImage.image;
		canvas1.width = canvas1.width; //clear the content of the canvas
		canvas1.height = canvas1.height;
		*/
		var canvas1 = document.createElement('canvas');
		canvas1.width = game.getDirector().width;
		canvas1.height = game.getDirector().height - game.panelHeight;
		game.graphCont.setBackgroundImage( canvas1 );
		
		game.graphCont.__ctx = canvas1.getContext('2d');		
		game.graphCont.__ctx.moveTo(0, xAxis);
		game.graphCont.__ctx.lineTo(750, xAxis);
		game.graphCont.__ctx.stroke();
	} else {
		updateArray(game.graphCont);
	}
}
//=======================================================
// On clicking the time step forward
//=======================================================
game.timeStepForward = function() {
	isAllowedToClickBack =  true;
	//if(lastStepReached == true) return;
	game.pauseBtnMDownHandler();
	game.ctrLeft+=3;
	game.ctrRight-=3;
	updateArray(game.graphCont);	
}

})();