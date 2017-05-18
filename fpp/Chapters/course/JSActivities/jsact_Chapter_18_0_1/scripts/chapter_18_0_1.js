//=======================================================
//Game Logic
//=======================================================
(function () {
game.amplitudeLeft = 1.00, game.amplitudeLeft_init = 1.00, game.amplitudeLeftMax = 2.00;
game.amplitudeLeftMin = 0.50, game.amplitudeLeftStep = 0.10;

game.amplitudeRight = 1.50, game.amplitudeRight_init = 1.50, game.amplitudeRightMax = 2.00;
game.amplitudeRightMin = 0.50, game.amplitudeRightStep = 0.10;

game.widthLeft = 2.50, game.widthLeft_init = 2.50, game.widthLeftMax = 3.00;
game.widthLeftMin = 1.00, game.widthLeftStep = 0.10;

game.widthRight = 2.00, game.widthRight_init = 2.00, game.widthRightMax = 3.00;
game.widthRightMin = 1.00, game.widthRightStep = 0.10;

game.frequencyLeft = null, game.frequencyRight = null;	
game.gameStatus = null, game.graphTimer = null;
game.ctrLeft = 0, game.ctrRight = 0;

game.phi_1 = 0;game.phi_2 = 0;
var eachGridInPx = 30;
var oneMtInPx = eachGridInPx * 2;
var xAxis = ( eachGridInPx * 8 ) + 22;
var _scene  = null, isAllowedToClickBack = false;
var displacement_1 = 0, displacement_2 = 0, firstStepReached = false, lastStepReached = false;
game.rPeakRadio = false;
game.rTroughRadio = true;
game.lPeakRadio = false;
game.lTroughRadio = true;
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
	
	game.dashBoardTxtArr[3].setText( parseFloat(game.amplitudeLeft).toFixed(2) );
	game.dashBoardTxtArr[9].setText( parseFloat(game.widthLeft).toFixed(2) );
	game.dashBoardTxtArr[6].setText( parseFloat(game.amplitudeRight).toFixed(2) );
	game.dashBoardTxtArr[12].setText( parseFloat(game.widthRight).toFixed(2) );
}
//=======================================================
// This function calculates and plots the curve
//=======================================================
function updateArray(graphContObj) {
	if(Math.abs(game.ctrRight) > 830 || Math.abs(game.ctrLeft) > 830) {
		gameOver();
		return;
	}
	game.wavelengthLeft = 2 * game.widthLeft;
	game.wavelengthRight = 2 * game.widthRight;
	var kLeft = (( 2 * Math.PI ) / ( game.wavelengthLeft * oneMtInPx ));
	var kRight = (( 2 * Math.PI ) / ( game.wavelengthRight * oneMtInPx ));						
	
	var director = game.getDirector();
	var canvas1 = document.createElement('canvas');
	canvas1.width = director.width;
	canvas1.height = director.height - game.panelHeight;
	graphContObj.setBackgroundImage( canvas1 );
	
	graphContObj.__ctx = canvas1.getContext('2d');
	graphContObj.__ctx.moveTo(-5, xAxis);
	
	var numOfCycles = 750 / (game.wavelengthRight * oneMtInPx);
	var newCycleStartX = Math.ceil(numOfCycles) * (game.wavelengthRight * oneMtInPx);
	var extraVal = (newCycleStartX + (game.wavelengthRight * oneMtInPx)/2) - 750;
	
	for(var p = 0; p <= 750; p += 5){	
		var cR = p + game.ctrRight;
		var cL = p + game.ctrLeft;
		if(cR > -(game.widthLeft*oneMtInPx) && cR < 0){
			//when we are within this range the draw the pulse
		} else {
			//for all other ranges skip drawing the pulses
			cR = 0;
		}
		if(cL > 750 && cL < 750+(game.widthRight*oneMtInPx)){
			//when we are within this range the draw the pulse		
			cL = cL + extraVal;	
		} else {
			//for all other ranges skip drawing the pulses
			cL = 0;
		}
		//this displacement is plotted for the curve which is travelling from left to right
		displacement_1 = (game.amplitudeLeft * oneMtInPx * Math.sin((kLeft * cR) + game.phi_1));
		//this displacement is plotted for the curve which is travelling from right to left
		displacement_2 = (game.amplitudeRight * oneMtInPx * Math.sin((kRight * cL) + game.phi_2));
		var displacement = displacement_1 + displacement_2;
		graphContObj.__ctx.lineTo(p-1, xAxis - displacement);
		graphContObj.__ctx.lineWidth = 2;
		graphContObj.__ctx.stroke();
	}
}
//=======================================================
// When the input values are updated
//=======================================================
game.valuesChanged = function() {
	if(game.gameStatus == 'gameOver') return;
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
			game.ctrLeft+=4;
			game.ctrRight-=4;
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
	game.__bannerDisplay(0, 0, 430, 500, false);
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
	//if(game.gameStatus == null) return;
	game.gameStatus = 'paused';
	if(game.graphTimer) game.graphTimer.cancel();
}
//=======================================================
// On clicking time step backward
//=======================================================
game.timeStepBackward = function() {
	if(game.gameStatus == 'gameOver') {
		game.resetBtnMDownHandler();
		return;
	}
	if(isAllowedToClickBack == false) {
		return;	
	}	
	game.pauseBtnMDownHandler();
	game.ctrLeft-=4;
	game.ctrRight+=4;
	if(game.ctrRight == 0 && game.ctrLeft == 0) {
		isAllowedToClickBack = false;
		firstStepReached = true;
		lastStepReached = true;
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
	if(game.gameStatus == 'gameOver') {
		game.resetBtnMDownHandler();
		return;
	}
	isAllowedToClickBack =  true;
	game.pauseBtnMDownHandler();
	game.ctrLeft+=4;
	game.ctrRight-=4;
	updateArray(game.graphCont);	
}
//=======================================================
// On clicking the radio buttons for peak and trough changes
//=======================================================
game.radioBtnHandler = function(obj, type) {
	if(game.gameStatus == 'paused') return false;
	var objId = obj.getId();
	if(objId == 'rightPeak') {
		game.rPeakRadio = true;
		game.b6.setBackgroundImage(game.radioBtnOnImg, true);
		game.rTroughRadio = false;
		game.b7.setBackgroundImage(game.radioBtnOffImg, true);
	} else if(objId == 'rightTrough') {
		game.rPeakRadio = false;
		game.b6.setBackgroundImage(game.radioBtnOffImg, true);
		game.rTroughRadio = true;
		game.b7.setBackgroundImage(game.radioBtnOnImg, true);
	} else if(objId == 'leftPeak') {
		game.lPeakRadio = true;
		game.b8.setBackgroundImage(game.radioBtnOnImg, true);
		game.lTroughRadio = false;
		game.b9.setBackgroundImage(game.radioBtnOffImg, true);
	} else if(objId == 'leftTrough') {
		game.lPeakRadio = false;
		game.b8.setBackgroundImage(game.radioBtnOffImg, true);
		game.lTroughRadio = true;
		game.b9.setBackgroundImage(game.radioBtnOnImg, true);
	}
	if(game.rTroughRadio) {
		game.phi_1 = 0;
	}
	if(game.rPeakRadio) {
		game.phi_1 = Math.PI;	
	}
	if(game.lTroughRadio) {
		game.phi_2 = 0;
	}
	if(game.lPeakRadio) {
		game.phi_2 = Math.PI;
	}
}
//=======================================================
// When the game is over
//=======================================================
function gameOver() {
	game.graphTimer.cancel();
	game.__bannerDisplay(1, 0, 430, 500, false);	
	game.gameStatus = 'gameOver';
}
})();