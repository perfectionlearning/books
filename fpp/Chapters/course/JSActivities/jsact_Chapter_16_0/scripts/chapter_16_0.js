//=======================================================
//Game Logic
//=======================================================
(function () {

game.amplitude = 0.10, game.amp = 0.10, game.amplitude_init = 0.10, game.amplitudeMax = 0.30, game.amplitudeMin = 0.05, game.amplitudeStep = 0.05;
game.frequency = 1.6, game.frq = 1.6, game.frequency_init = 1.6, game.frequencyMax = 5.0, game.frequencyMin = 0.3, game.frequencyStep = 0.1;	
game.startTimeStamp = null,	game.angularFrequency = null, game.currentTimeStamp = null; 
game.elapsedTimeInSec = null; 
game.phi = (Math.PI), game.phi_init = (Math.PI);
game.gridColor = '#BBBBBB', game.currentTimeStamp_c = null;
game.startTimeStamp_verticalScale = null;
game.currentPaintableActorLeft = 56 - 750;
game.gameStatus = null;
game.changedParams = true;
var patternContainers = [];
var oneMtInPx = 500;
var oneSecInPx = 113;
var xAxis = 201;
var lastPatternNum = 0;
var springLeftPos = 42;
var ctrr = 0, timeCounter1 = 0;
var springWidth = 30, springTop = 0, neckLength = 12, springFolds = 12; 

var gridNumbers_actor = [];
var bobVerticalPosition = null, springHolderContainer = null;
var currentPaintableActor = null, previousPaintedActor = null;
var eachGraphArea = null, c_1_startX = null, c_2_startX = null; 
var whichActorHasPattern  = null, timer = null, displacement = null;
var c_1_startTime = null, c_1_startX = null, c_2_startTime = null, c_2_startX = null;
var firstTime = true, lineBGVisible = true, waveLength = 0, waveSpeed = 0;
game.updateFlg = false, game.lastDisplacement = null;
	
	//=======================================================
	//Lets create the pattern for the graph
	//=======================================================
	game.createPattern = function(director, cont, color, left, top) {
		eachGraphArea = 750;
		//let's add one white BG inorder to hide some default BG		
		game.graphBG = new CAAT.Foundation.ActorContainer()
						.setSize(director.width, director.height - game.panelHeight)
						.enableEvents(false)
						//.setFillStyle('#FFFFFF')
						.setLocation(0, 0)
						.setId('whiteBg');
		cont.addChild(game.graphBG);
		var k = 0, txt = null, actorNum = null, gridLblTxtNum = 0;
		var lblTxt = 0; 
		var actorNum = 0;		
		for(var m = 0; m < ( 2 * director.width ); m += director.width ) {
			var thisActor = new CAAT.Foundation.ActorContainer()
					.setSize(eachGraphArea, director.height - game.panelHeight)
					.enableEvents(false)
					.setLocation(left + (k), 0)
					.setId('pattern_'+actorNum);
			var canvas = document.createElement('canvas');
	    	canvas.width = director.width;
    		canvas.height = director.height - game.panelHeight;			
			//this actor is where a curve is drawn				
			var thisActor_curve = new CAAT.Foundation.Actor()
					.setSize(eachGraphArea, director.height - game.panelHeight)
					.setBackgroundImage( canvas )
					.enableEvents(false)
					.setLocation(0, 0)
					.setId('pattern_curve_'+actorNum);
			//this actor contains the bg color of the graph			
			var thisActor_bg = new CAAT.Foundation.Actor()
					.setSize(eachGraphArea, director.height - game.panelHeight)
					//.setFillStyle('#FFFFFF')
					.enableEvents(false)
					.setLocation(0, 0)
					.setId('pattern_bg_'+actorNum);			
			if(actorNum == 1){
				//thisActor_bg.setFillStyle('#CCC');
			} else {
				//thisActor_bg.setFillStyle('#AFFFFF');
			}			
			thisActor.addChild(thisActor_bg);
			thisActor.addChild(thisActor_curve);						
			cont.addChild(thisActor);			
			patternContainers.push(thisActor);
			actorNum++;
			k = k - eachGraphArea;
			lastPatternNum = gridLblTxtNum
			lblTxt++;
		}
		//this container holds the spring
		springHolderContainer = new CAAT.Foundation.ActorContainer()
					.setSize(director.width, director.height - game.panelHeight)
					.enableEvents(false)
					.setLocation(springLeftPos, top)
					.setFillStyle('#FF0000')
					.setId('springHolder_'+lblTxt);
		
		cont.addChild(springHolderContainer);
		//draw the bob spring
		drawSpring(0);		
		game.dashBoardTxtArr[4].setText(parseFloat(game.amp).toFixed(2));
		game.dashBoardTxtArr[7].setText(parseFloat(game.frq).toFixed(1));
	};
	//=======================================================
	// Timer to draw the oscillations
	//=======================================================
	var createTimerUpdate = function( _scene ) {
		if(firstTime) {
			//if game was not started from paused state
			c_1_startX = game.currentPaintableActorLeft;
			c_2_startX = game.currentPaintableActorLeft - patternContainers[0].width;
		}
		var timeCounter2 = 0, timerFlag = true;
		timer = _scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				if(timerFlag) {
					//Moving both 
					game.currentTimeStamp_c = new Date().getTime();
					game.c_1_elapsedTimeInSec = ( game.currentTimeStamp_c - game.c_1_startTime ) / 1000;
					game.c_2_elapsedTimeInSec = ( game.currentTimeStamp_c - game.c_2_startTime ) / 1000;
					patternContainers[0].x = c_1_startX + (game.c_1_elapsedTimeInSec * oneSecInPx);
					patternContainers[1].x = c_2_startX + (game.c_2_elapsedTimeInSec * oneSecInPx);
					if(lineBGVisible) {
						game.graphBG.x = patternContainers[0].x + patternContainers[0].width - 56;
						if(game.graphBG.x > 750) lineBGVisible = false;
					}
					//Reset parameters of c1
					if(patternContainers[0].x > 750){
						game.c_1_startTime = new Date().getTime();
						c_1_startX = patternContainers[1].x - patternContainers[1].width;
						patternContainers[0].x = c_1_startX;
						var thisCanvas = patternContainers[0].getChildAt(1).backgroundImage.image;
						var __ctx = thisCanvas.getContext('2d');
						__ctx.clearRect(0, 0, thisCanvas.width, thisCanvas.height);
					}
					//Reset parameters of c2
					if(patternContainers[1].x > 750){
						game.c_2_startTime = new Date().getTime();
						c_2_startX = patternContainers[0].x - patternContainers[0].width;
						patternContainers[1].x = c_2_startX;
						var thisCanvas = patternContainers[1].getChildAt(1).backgroundImage.image;
						var __ctx = thisCanvas.getContext('2d');
						__ctx.clearRect(0, 0, thisCanvas.width, thisCanvas.height);
					}
					if((patternContainers[1].x) >= 56) {
						//when ever some actor reaches the bob then it is the paintable area
						//ctrr = 0;
						currentPaintableActor = patternContainers[0];
					}
					if((patternContainers[0].x) >= 56) {
						//when ever some actor reaches the bob then it is the paintable area
						//ctrr = 0;
						currentPaintableActor = patternContainers[1];
					}
					if(currentPaintableActor == null) {
						if(patternContainers[0]) {
							currentPaintableActor = patternContainers[0];	
						}
					}
					
					if(previousPaintedActor != currentPaintableActor) {
						ctrr = 0;
					}
					drawSHM();
					previousPaintedActor = currentPaintableActor;
					timeCounter1++;
				}		
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
		)
	};
	//=======================================================
	//Draw the bouncing spring
	//=======================================================
	var drawSpring = function( flag ){	
		var tailEnd = null, verticalGap = null, yPos = null;
		//if(bobVerticalPosition == null) bobVerticalPosition = xAxis;
		springHolderContainer.paint = function(_director, time) {	
			var director = game.getDirector();
			var ctx = director.ctx;
			ctx.strokeStyle = "#666666";
			ctx.lineWidth = 4;
			ctx.lineCap = 'round';
			ctx.beginPath();
			ctx.moveTo(springWidth/2, bobVerticalPosition - springTop);
			ctx.lineTo(springWidth/2, bobVerticalPosition - neckLength - springTop);			
			if(!flag) {
				bobVerticalPosition = xAxis;
			}			
			tailEnd = bobVerticalPosition - neckLength - springTop;
			var headEnd = 0;
			verticalGap = (tailEnd - headEnd) / (springFolds * 2);			
			yPos=tailEnd + verticalGap;
			for(var i=1; i<=springFolds; i++){
				yPos-=verticalGap;
				ctx.lineTo(0, yPos);
				ctx.lineTo(0, yPos-1);
				yPos-=verticalGap;
				ctx.lineTo(springWidth, yPos);
				ctx.lineTo(springWidth, yPos-1);
			}
			yPos-=verticalGap;
			ctx.lineTo(springWidth/2, yPos);
			//Now find the y decrement of each fold dynamically
			//ctx.stroke();
			ctx.closePath();
		}		
		if(flag) {
			paintCurve();
		} else {
			//draw line at x-axis
			game.graphBG.paint = function(_director, time) {	
				var director = game.getDirector();
				var ctx = director.ctx;
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(springLeftPos+(springWidth/2) - 2, xAxis);	
				ctx.lineTo(patternContainers[0].width, xAxis);	
				ctx.stroke();
			}
		}
	};
	//=======================================================
	//Start painting the curve on the graph
	//=======================================================
	var paintCurve = function() {
		var currCanvas = null;		
		var currentCurveCont = currentPaintableActor.getChildAt(1);
		var _director = game.getDirector();
		currCanvas = currentCurveCont.backgroundImage.image;
		currentCurveCont.__ctx = currCanvas.getContext('2d');
		var xVal = game.mainContainerActors[1].x - currentPaintableActor.x + (game.mainContainerActors[1].width - 5);
		var yVal = bobVerticalPosition;
		if(ctrr == 0) {
			var canvas = document.createElement('canvas');
	    	canvas.width = _director.width;
    		canvas.height = _director.height - game.panelHeight;
			canvas.id = currentCurveCont.id+'_bg';
										
			currentCurveCont.setBackgroundImage( canvas );
			currCanvas = currentCurveCont.backgroundImage.image;
			currentCurveCont.__ctx = currCanvas.getContext('2d');
			currentCurveCont.__ctx.moveTo(xVal, yVal);
		}
		ctrr++;
		currentCurveCont.__ctx.lineTo(xVal, yVal);
		currentCurveCont.__ctx.strokeStyle = '#000000';
		currentCurveCont.__ctx.lineWidth = 1;
		currentCurveCont.__ctx.stroke();
	}
	//=======================================================
	//This is first function that executes on timer start
	//=======================================================
	var drawSHM = function(){
		game.currentTimeStamp = new Date().getTime();
		game.elapsedTimeInSec = (game.currentTimeStamp - game.startTimeStamp)/1000;
		//calculate whether the bob position should be
		displacement = game.amp * Math.sin ( (game.angularFrequency * game.elapsedTimeInSec) + game.phi );
		if(game.updateFlg && Math.abs(displacement)<0.10*game.amp) {
			game.angularFrequency = 2 * Math.PI / (1/game.frequency);
			//game.phi = ( game.angularFrequency * game.elapsedTimeInSec ) + game.phi;
			if(displacement - game.lastDisplacement > 0){
				//Travelling downwards
				game.phi = Math.asin(displacement / game.amp);
			}else{
				//Travelling upwards
				game.phi = Math.PI - Math.asin(displacement / game.amp);
			}
			if(parseFloat(game.amplitude) > 0) {
				game.amp = parseFloat(game.amplitude);
			} else {
				game.amp = 0.001;
			}
			game.startTimeStamp = new Date().getTime();
			game.updateFlg = false;
		}
		/*
		//If the displacement is very less - ie it passes just close to the xaxis and the parameters have changed
		if(Math.abs(displacement*oneMtInPx)<(150*game.amp) && game.changedParams==true){
			game.amp = game.amplitude;
			game.frq = game.frequency;
			displacement = game.amp * Math.sin ( (game.angularFrequency * game.elapsedTimeInSec) + game.phi );
			game.changedParams=false;
		}
		*/
		if(timeCounter1 == 0) {
			bobVerticalPosition = xAxis;
		} else {
			bobVerticalPosition = xAxis - ( displacement * oneMtInPx );
		}
		game.mainContainerActors[1].y = bobVerticalPosition - 2;
		game.lastDisplacement = displacement;
		//draw graph
		drawSpring(1);
	};
	//=======================================================
	//This is first function that executes on timer start
	//=======================================================
	var updateValues = function(){
		/*
		game.phi = ( game.angularFrequency * game.elapsedTimeInSec ) + game.phi;
		game.angularFrequency = 2 * Math.PI / (1/game.frq);
		game.startTimeStamp = new Date().getTime();
		*/
		game.updateFlg = true;
		game.dashBoardTxtArr[4].setText(parseFloat(game.amplitude).toFixed(2));
		game.dashBoardTxtArr[7].setText(parseFloat(game.frequency).toFixed(1));

	}
	//=======================================================
	//Go Button
	//=======================================================
	game.goBtnMDownHandler = function () {
		//do nothing on clicking the go button if the game already started
		if(game.gameStatus == 'started') return false;
		//if first time clicking the go button the do some positioning of the actors
		if(game.gameStatus == null || game.gameStatus == 'reset') {
			game.gameStatus = 'started';
		}
		game.phi = ( game.angularFrequency * game.elapsedTimeInSec ) + game.phi;
		game.angularFrequency = 2 * Math.PI / (1/game.frequency);
		game.frq = game.frequency;
		game.amp = game.amplitude;
		var d = new Date().getTime();
		game.startTimeStamp_verticalScale = d;
		game.startTimeStamp = d;		
		game.c_2_startTime = game.c_1_startTime = game.startTimeStamp;
		game.gameStatus = 'started';
		//run the timer to draw the graph
		createTimerUpdate( game.getScene() );
		calculateWaveLength();
	}
	//=======================================================
	//Calculate wavelength
	//=======================================================
	function calculateWaveLength() {
		if(game.gameStatus != 'started') return false;
		waveSpeed = (oneSecInPx / oneMtInPx);
		waveLength = waveSpeed / game.frequency;
		game.dashBoardTxtArr[1].setText(parseFloat(waveLength).toFixed(2));
	}
	//=======================================================
	//Pause Button
	//=======================================================
	game.pauseBtnMDownHandler = function() {
		//No need to pause the game if it is not yet started
		if(game.gameStatus != 'started') {
			return false;	
		}
		firstTime = false;
		game.gameStatus = 'paused';
		if(timer) {
			timer.cancel();
			c_1_startX = patternContainers[0].x;
			c_2_startX = patternContainers[1].x;
		}
	}
	//=======================================================
	//Reset Button
	//=======================================================
	game.resetBtnMDownHandler = function() {
		game.gameStatus = 'reset';
		currentPaintableActor = null;
		var _director = game.getDirector();
		//reset the graph canvas to clear any previous drawn
		var canvas1 = document.createElement('canvas');
		canvas1.width = _director.width;
		canvas1.height = _director.height - game.panelHeight;
		patternContainers[0].getChildAt(1).setBackgroundImage( canvas1 );		
		var canvas2 = document.createElement('canvas');
		canvas2.width = _director.width;
		canvas2.height = _director.height - game.panelHeight;
		patternContainers[1].getChildAt(1).setBackgroundImage( canvas2 );
		game.phi = game.phi_init;
		//reset the time display labels of the graph
		if(timer) {
			timer.cancel();
			firstTime = true;
			//first graph container
			patternContainers[0].setLocation(game.currentPaintableActorLeft, 0);
			//second graph container
			patternContainers[1].setLocation(game.currentPaintableActorLeft - (eachGraphArea), 0);
		}		
		var d = new Date().getTime();
		game.startTimeStamp = d;
		game.currentTimeStamp = d;
		game.elapsedTimeInSec = 0;
		//reset bob position
		bobVerticalPosition = xAxis;
		//game.mainContainerActors[1].y = bobVerticalPosition - 2; 
		game.mainContainerActors[1].setLocation(game.mainEleImg[1][1], game.mainEleImg[1][2])
		game.graphBG.x = 0;
		//draw bob spring on reset
		drawSpring(0);	
		lineBGVisible = true;
		timeCounter1 = 0;
		game.dashBoardTxtArr[1].setText('--');	
	}	
	//=======================================================
	//Text container
	//=======================================================
	game.__addText = function( txtColor, txt, fontStyle, align, director ){
		return new CAAT.Foundation.UI.TextActor().
                    setFont( fontStyle ).
                    setTextAlign( align ).
                    setText( txt ).					
                    calcTextSize( director ).
                    setTextFillStyle( txtColor ).
                    setOutline( false );                    
	}
	//=======================================================
	//Do something as the values have changed
	//=======================================================
	game.valuesChanged = function() {
		if(game.amp == game.amplitude && game.frq == game.frequency) return;
		game.changedParams=true;
		//draw graph
		drawSpring(0);
		updateValues();
		calculateWaveLength();
	}
})();