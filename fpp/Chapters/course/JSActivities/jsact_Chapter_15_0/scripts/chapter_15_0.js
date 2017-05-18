//
//	Game Logic
//
(function() {
	game.amplitude = 0.40, game.amp = 0.40, game.amplitude_init = 0.40, game.amplitudeMax = 0.80, game.amplitudeMin = 0.00, game.amplitudeStep = 0.01;
	game.period = 1.5, game.tPeriod = 1.5, game.period_init = 1.5, game.periodMax = 3.0, game.periodMin = 1.0, game.periodStep = 0.1;	
	game.startTimeStamp = null,	game.angularFrequency = null, game.currentTimeStamp = null; 
	game.elapsedTimeInSec = null; 
	game.phi = -(Math.PI/2), game.phi_init = -(Math.PI/2);
	
	game.phiTemp=0;
	game.angularFrequencyTemp=0;
	
	game.gridColor = '#BBBBBB', game.currentTimeStamp_c = null, game.elapsedTimeInSec_verticalScale = null;
	game.startTimeStamp_verticalScale = null;
	game.verticalScaleImgInit_x = null, game.verticalScaleImgCurr_x = null, game.whiteBg_x = null;
	//game.currentPaintableActorLeft = 658;
	game.currentPaintableActorLeft = 655;
	game.gameStatus = null;
	game.changedParams = true;
	game.graphWhiteBG = null;
	
	var c_1_startTime = null, c_1_startX = null, c_2_startTime = null, c_2_startX = null;
	var patternContainers = [];
	var whichActorHasPattern  = null;
	var timer = null;
	var displacement = null;
	var oneMtInPx = 250;
	var xAxis = 251;
	var bobVerticalPosition = null;
	var lastPatternNum = 0;
	var springHolderContainer = null;
	var springLeftPos = 643;
	//var springLeftPos = 660;
	var currentPaintableActor = null, previousPaintedActor = null;
	var eachGraphArea = null;
	var ctrr = 0;
	var springWidth = 30, springTop = 0, neckLength = 30, springFolds = 12; 
	var gridNumbers_actor = [];
	var c_1_startX = null, c_2_startX = null; 
	var firstTime = true;
	game.updateFlg = false, game.lastDisplacement = null;

	
	game.createPattern = function(director, cont, color, left, top) {
		eachGraphArea = 750;
		//let's add one white BG inorder to hide some default BG
		game.graphWhiteBG = new CAAT.Foundation.ActorContainer()
						.setSize(director.width, director.height - game.panelHeight)
						.enableEvents(false)
						.setFillStyle('#FFFFFF')
						.setLocation(left, 0)
						.setId('whiteBg');
		cont.addChild(game.graphWhiteBG);
		
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
			//this actor contains the horizontal lines of the graph					
			var thisActor_grid = new CAAT.Foundation.Actor()
					.setSize(eachGraphArea, director.height - game.panelHeight)
					.enableEvents(false)
					.setLocation(0, 0);
			var thisActorGridNum = new CAAT.Foundation.ActorContainer()
					.setSize(eachGraphArea, 20)
					.enableEvents(false)
					//.setFillStyle('#CCC')
					.setLocation(0, (director.height - game.panelHeight)-20)
					.setId('pattern_'+actorNum);
					
			//this actor contains the bg color of the graph
			var thisActor_bg = new CAAT.Foundation.Actor()
					.setSize(eachGraphArea, director.height - game.panelHeight)
					.setFillStyle('#FFFFFF')
					.enableEvents(false)
					.setLocation(0, 0)
					.setId('pattern_bg_'+actorNum);		
			
			if(actorNum == 1){
				//thisActor_bg.setFillStyle('#CCC');
			} else {
				//thisActor_bg.setFillStyle('#AFFFFF');
			}
			
			thisActor.addChild(thisActor_bg);
			thisActor.addChild(thisActor_grid);
			thisActor.addChild(thisActor_curve);
			thisActor.addChild(thisActorGridNum);
			
			for(var nn=0; nn<15; nn++) {
				if(gridLblTxtNum == 0) {
					txt = '';	
				} else if(gridLblTxtNum == 1) {
					txt = gridLblTxtNum + ' s';
				} else {
					txt = gridLblTxtNum;
				}
				var thisActor_txt = game.__addText( '#0000f6', txt, 'bold 14px Arial', 'left', director );
				thisActor_txt
					.setLocation(6 + (nn*50), 0)
					.setId('patternNum_'+gridLblTxtNum);
				thisActorGridNum.addChild(thisActor_txt);	
				gridLblTxtNum++;
			}
			
			thisActor_grid.paint = function( director, time) {
				var i,j,ctx;
                ctx= director.ctx;
                ctx.beginPath();
				ctx.strokeStyle = '#888';
				ctx.lineWidth = 0.5;
				//vertical lines
				//for( j=1; j<(director.width-50); j+=50 ) {
				for( j=1; j<director.width; j+=50 ) {
					ctx.moveTo( j, 0 );
					ctx.lineTo( j, director.height );						
				}
				//horizontal lines
				for( i=1; i<director.height; i+=50 ) {
					ctx.moveTo( 0, i );
					ctx.lineTo(eachGraphArea, i );					
				}				
				ctx.stroke();
				ctx.beginPath();
				ctx.moveTo( 0, 251 );
				ctx.lineTo(eachGraphArea, 251 );
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = '#00ff00';
				ctx.stroke();
            };				
			cont.addChild(thisActor);			
			patternContainers.push(thisActor);
			actorNum++;
			k = k + eachGraphArea;
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
	};
	//
	//
	//
	var createTimerUpdate = function( _scene ) {
		if(firstTime) {
			//if game was not started from paused state
			c_1_startX = game.currentPaintableActorLeft;
			c_2_startX = game.currentPaintableActorLeft + patternContainers[0].width;
		}
		var timeCounter1 = 0, timeCounter2 = 0, timerFlag = true;
		timer = _scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				if(timerFlag) {
					var newXVal = game.verticalScaleImgInit_x-(game.elapsedTimeInSec_verticalScale * 50);
					var newWBG_XVal = game.whiteBg_x -(game.elapsedTimeInSec_verticalScale * 50);
					if(newXVal >= 0) {
						game.mainContainerActors[1].x = newXVal;
						game.verticalScaleImgCurr_x = game.mainContainerActors[1].x;
						game.graphWhiteBG.x = newWBG_XVal;
					}
					//Moving both 
					game.currentTimeStamp_c = new Date().getTime();
					game.c_1_elapsedTimeInSec = ( game.currentTimeStamp_c - game.c_1_startTime ) / 1000;
					game.c_2_elapsedTimeInSec = ( game.currentTimeStamp_c - game.c_2_startTime ) / 1000;
					
					patternContainers[0].x = c_1_startX - (game.c_1_elapsedTimeInSec * 50);
					patternContainers[1].x = c_2_startX - (game.c_2_elapsedTimeInSec * 50);
					
					//Reset parameters of c1
					if(patternContainers[0].x + patternContainers[0].width < 0){
						game.c_1_startTime = new Date().getTime();
						c_1_startX = patternContainers[1].x + patternContainers[1].width;
						patternContainers[0].x = c_1_startX;
						var numOfLbl = patternContainers[0].getChildAt(3).getNumChildren();
						for(var i=0; i<numOfLbl; i++) {
							patternContainers[0].getChildAt(3).getChildAt(i).setText(lastPatternNum);
							lastPatternNum++;
						}
						var thisCanvas = patternContainers[0].getChildAt(2).backgroundImage.image;
						var __ctx = thisCanvas.getContext('2d');
						__ctx.clearRect(0, 0, thisCanvas.width, thisCanvas.height);
					}
					//Reset parameters of c2
					if(patternContainers[1].x + patternContainers[1].width < 0){
						game.c_2_startTime = new Date().getTime();
						c_2_startX = patternContainers[0].x + patternContainers[0].width;
						patternContainers[1].x = c_2_startX;
						var numOfLbl = patternContainers[1].getChildAt(3).getNumChildren();
						for(var i=0; i<numOfLbl; i++) {
							patternContainers[1].getChildAt(3).getChildAt(i).setText(lastPatternNum);
							lastPatternNum++;
						}
						var thisCanvas = patternContainers[1].getChildAt(2).backgroundImage.image;
						var __ctx = thisCanvas.getContext('2d');
						__ctx.clearRect(0, 0, thisCanvas.width, thisCanvas.height);
					}
					//if((parseInt(patternContainers[0].x)) == 655) {
					if((patternContainers[1].x) <= -94) {
						//when ever some actor reaches the bob then it is the paintable area
						//ctrr = 0;
						currentPaintableActor = patternContainers[0];
					}
					//if((parseInt(patternContainers[1].x)) == 655) {
					if((patternContainers[0].x) <= -94) {
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
				bobVerticalPosition = xAxis - ( game.amplitude * oneMtInPx );
				game.mainContainerActors[2].y = bobVerticalPosition - 28;
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
			ctx.stroke();
			ctx.closePath();
		}		
		if(flag) {
			paintCurve();
		}
	};
	//=======================================================
	//Start painting the curve on the graph
	//=======================================================
	var paintCurve = function() {
		var currCanvas = null;		
		var currentCurveCont = currentPaintableActor.getChildAt(2);
		var _director = game.getDirector();
		currCanvas = currentCurveCont.backgroundImage.image;
		currentCurveCont.__ctx = currCanvas.getContext('2d');
		var xVal = game.mainContainerActors[2].x - currentPaintableActor.x + (game.mainContainerActors[2].width/2);
		//var yVal = game.mainContainerActors[2].y + (game.mainContainerActors[2].height/2);
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
		currentCurveCont.__ctx.strokeStyle = '#0099ff';
		currentCurveCont.__ctx.lineWidth = 0.25;
		currentCurveCont.__ctx.stroke();
	}
	//=======================================================
	//This is first function that executes on timer start
	//=======================================================
	var drawSHM = function(){

		game.currentTimeStamp = new Date().getTime();
		game.elapsedTimeInSec = (game.currentTimeStamp - game.startTimeStamp)/1000;
		game.elapsedTimeInSec_verticalScale = (game.currentTimeStamp - game.startTimeStamp_verticalScale)/1000;
		//calculate whether the bob position should be
		displacement = game.amp * Math.sin ( (game.angularFrequency * game.elapsedTimeInSec) + game.phi );	
		
		if(game.updateFlg && Math.abs(displacement)<0.25*game.amp) {
			game.angularFrequency = 2 * Math.PI / game.period;
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
		if(Math.abs(displacement*oneMtInPx)<=(50*game.amp) && game.changedParams==true){
			game.amp = parseFloat(game.amplitude);
			game.tPeriod = game.period;
			displacement = game.amp * Math.sin ( (game.angularFrequency * game.elapsedTimeInSec) + game.phi );
			game.changedParams=false;
		}
		*/
		bobVerticalPosition = xAxis + ( displacement * oneMtInPx );
		//game.mainContainerActors[2].y = bobVerticalPosition - (game.mainContainerActors[2].height/2);
		game.mainContainerActors[2].y = bobVerticalPosition - 28;
		game.lastDisplacement = displacement;
		//draw graph
		drawSpring(1);
	};
	//=======================================================
	//This is first function that executes on timer start
	//=======================================================
	var updateValues = function(){
		//game.phiTemp = ( game.angularFrequency * game.elapsedTimeInSec ) + game.phi;
		//game.angularFrequencyTemp = 2 * Math.PI / game.tPeriod;
		game.updateFlg = true;
		//game.startTimeStamp = new Date().getTime();
	}
	//=======================================================
	//Go Button
	//=======================================================
	game.goBtnMDownHandler = function () {
		//do nothing on clicking the go button if the game already started
		if(game.gameStatus == 'started') return false;
		//if first time clicking the go button the do some positioning of the actors
		if(game.gameStatus == null || game.gameStatus == 'reset') {
			game.verticalScaleImgInit_x = game.currentPaintableActorLeft + 1;
			game.whiteBg_x = game.currentPaintableActorLeft;
			game.gameStatus = 'started';
		}
		game.phi = ( game.angularFrequency * game.elapsedTimeInSec ) + game.phi;
		game.angularFrequency = 2 * Math.PI / game.period;
		game.tPeriod = game.period;
		game.amp = parseFloat(game.amplitude);
		var d = new Date().getTime();
		game.startTimeStamp_verticalScale = d;
		game.startTimeStamp = d;		
		game.c_2_startTime = game.c_1_startTime = game.startTimeStamp;
		game.elapsedTimeInSec_verticalScale = 0;
		game.gameStatus = 'started';
		//run the timer to draw the graph
		createTimerUpdate( game.getScene() );
	}
	//=======================================================
	//Pause Button
	//=======================================================
	game.pauseBtnMDownHandler = function() {
		firstTime = false;
		game.gameStatus = 'paused';
		if(timer) {
			timer.cancel();
			game.verticalScaleImgInit_x = game.mainContainerActors[1].x;
			game.whiteBg_x = game.graphWhiteBG.x;
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
		patternContainers[0].getChildAt(2).setBackgroundImage( canvas1 );		
		var canvas2 = document.createElement('canvas');
		canvas2.width = _director.width;
		canvas2.height = _director.height - game.panelHeight;
		patternContainers[1].getChildAt(2).setBackgroundImage( canvas2 );
		game.phi = game.phi_init;
		//reset the time display labels of the graph
		serializeTimeLbl();		
		if(timer) {
			timer.cancel();
			firstTime = true;
			//first graph container
			patternContainers[0].setLocation(game.currentPaintableActorLeft, 0);
			//second graph container
			patternContainers[1].setLocation(game.currentPaintableActorLeft + (eachGraphArea), 0);
			//reset vertical scale image position
			game.mainContainerActors[1].x = game.currentPaintableActorLeft + 1;
			//reset weight bg position
			game.graphWhiteBG.x = game.currentPaintableActorLeft;
		}		
		var d = new Date().getTime();
		game.startTimeStamp = d;
		game.currentTimeStamp = d;
		game.elapsedTimeInSec = 0;
		//reset bob position
		//game.mainContainerActors[2].y = game.mainEleImg[3][2];
		bobVerticalPosition = xAxis - ( parseFloat(game.amplitude)  * oneMtInPx );
		game.mainContainerActors[2].y = bobVerticalPosition - 28; 
		//draw bob spring on reset
		drawSpring(0);		
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
		game.changedParams=true;
		//displacement = game.amplitude * Math.sin ( (game.angularFrequency * 0) + game.phi );
		bobVerticalPosition = xAxis - ( parseFloat(game.amplitude)  * oneMtInPx );
		game.mainContainerActors[2].y = bobVerticalPosition - 28;
		//game.mainContainerActors[2].y = bobVerticalPosition - (game.mainContainerActors[2].height/2);
		//game.amp = game.amplitude;
		//draw graph
		//drawSpring(0);
		updateValues();
	}
	//=======================================================
	//serialize time display labels at the bottom of the graph
	//=======================================================
	function serializeTimeLbl() {
		var gridLblTxtNum_ = 0, txt = null;
		for(var ii = 0; ii < 2; ii++) {
			for(var nn=0; nn<15; nn++) {
				if(gridLblTxtNum_ == 0) {
					txt = '';	
				} else if(gridLblTxtNum_ == 1) {
					txt = gridLblTxtNum_ + ' s';
				} else {
					txt = gridLblTxtNum_;
				}
				patternContainers[ii].getChildAt(3).getChildAt(nn).text = txt;
				gridLblTxtNum_++;
			}
		}
	}
})();