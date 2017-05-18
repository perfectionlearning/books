/////////////////////////////////////////
////////////// Game Logic ///////////////
/////////////////////////////////////////
(function () {
	var yDiffVal = null, ctrr = 0, currCanvas = null;
	var pointOneVoltRatio = ( 90 / 180 );
	var pointFiveVoltRatio = ( 80 / 180 );
	var oneVoltRatio = ( 70 / 180 );
	var fiveVoltRatio = ( 60 / 180 );
	var tenVoltRatio = ( 50 / 180 );
	var fiftyVoltRatio = ( 15 / 180 );
	var hundredVoltRatio = ( 8 / 180 );
	var fieldStartX = 156, fieldStartY = 25, fieldsAreaWidth = 455, fieldsAreaHeight = 455, fieldChargeDimen = 10;
	var vectorAng = 0, vectorHalfLength = 47.5, vectorHalfLength_init = 47.5;
	var phi = 0, bNot = null, xNot = null, L = null, deltaPhi = null, lastPhi = null, newPhi = null, emf = 0, current = 0;
	var lastSliderHolderPosX = 0, direction = 0, isFirstTime = true, R = 0, oneMtInPx = 0;
	game.fluxTimer = null;
	game.currentScale = pointFiveVoltRatio;
	game.teslaInit = 0.700, game.tesla = game.teslaInit, game.teslaStep = 0.100, game.teslaMax = 1.000, game.teslaMin = -1.000;
	game.startTime = null, game.currentTime = null, game.elapsedTime = null, game.ratio_tilt = 0;
	//=======================================================
	//On clicking reset button
	//=======================================================
	game.resetBtn_click = function() {
		vectorAng = 0;
		game.mainActors[3].setLocation(game.mainEleImg[3][1], game.mainEleImg[3][2] );
		game.verticalRod.setLocation(game.mainEleImg[3][1], game.mainEleImg[3][2] );
		game.slider.setLocation(game.mainEleImg[5][1], game.mainEleImg[5][2] );
		game.mainActors[5].setLocation(game.mainEleImg[5][1], game.mainEleImg[5][2] );
		ctrr = 0;
		lastSliderHolderPosX = 0;
		game.fluxTimer.cancel();
		game.startTimer();
		game.buildFieldStrength();
		game.__bannerDisplay(0, 0, -70, 0, true);
		isFirstTime = true;
		game.mainActors[0].setAnimationImageIndex([29]);
		game.mainActors[1].setAnimationImageIndex([29]);
		game.mainActors[2].setAnimationImageIndex([29]);
		game.mainActors[6].setLocation(game.mainEleImg[6][1], game.mainEleImg[6][2]);
		game.circuitILbl.setLocation(game.circuitILblX, game.circuitILblY);
		game.circuitIVect.setLocation(game.mainEleImg[0][1] + 10, 0)
	}
	//=======================================================
	//What should be done on mousedrag of the middle vertical rod
	//=======================================================
	game.onMouseDragVR = function( obj ) {
		//when the slider holder is moved only within the slider range
		if(obj.x > (game.mainActors[0].x+(game.ratio_tilt*12)) && obj.x < (game.mainActors[1].x + game.mainActors[1].width - obj.width)) {
			game.mainActors[3].x = obj.x;
		} else if(obj.x > (game.mainActors[0].x+game.mainActors[1].width+(game.ratio_tilt*12))) {
			game.mainActors[3].x = ( game.mainActors[1].x + game.mainActors[1].width) - game.mainActors[3].width;		
		} else if(obj.x < (game.mainActors[0].x)){
			//game.mainActors[3].x = game.mainActors[0].x + 5 + (game.ratio_tilt*12);
			game.mainActors[3].x = game.mainActors[0].x + 5;
		}
		if(isFirstTime) game.__bannerDisplay(0, 0, -70, 0, false);
		isFirstTime = false;
	}
	//=======================================================
	//What should be done on mouseup from the middle vertical rod
	//=======================================================
	game.onMouseUpVR = function( obj ) {
		game.verticalRod.x = game.mainActors[3].x;
		game.verticalRod.y = game.mainActors[3].y;
	}
	//=======================================================
	//What should be done on mousedrag of the slider
	//=======================================================
	game.onMouseDrag = function( obj ) {
		if(obj.x > game.mainActors[4].x && obj.x < (game.mainActors[4].x + game.mainActors[4].width - obj.width)) {
			game.mainActors[5].x = obj.x;
		} else if(obj.x > (game.mainActors[4].x+game.mainActors[4].width)) {
			game.mainActors[5].x = ( game.mainActors[4].x + game.mainActors[4].width) - game.mainActors[5].width;		
		} else if(obj.x < (game.mainActors[4].x)){
			game.mainActors[5].x = game.mainActors[4].x;
		}
		var sliderLeft = game.mainEleImg[4][1];
		var sliderHolderLeft = game.mainEleImg[5][1];
		var oriDiff = sliderHolderLeft - sliderLeft;
		if(Math.floor(game.mainActors[5].x) < game.mainEleImg[5][1]) {
			//slider holder in left half of the slider
			var newDiff = game.mainActors[5].x - sliderLeft;
			var ratio = parseFloat(newDiff / oriDiff).toFixed(1);
			var newSpriteIndex = parseInt((ratio/1)*14) + 13;
			newSpriteIndex = Math.max(newSpriteIndex, 0);
			newSpriteIndex = Math.min(newSpriteIndex, 39);
			game.mainActors[0].setAnimationImageIndex([newSpriteIndex]);
			game.mainActors[1].setAnimationImageIndex([newSpriteIndex]);
			game.mainActors[2].setAnimationImageIndex([newSpriteIndex]);
			ratio = 1-ratio;
			game.ratio_tilt = ratio;
			game.mainActors[6].setLocation(game.mainEleImg[6][1]+(12*ratio), game.mainEleImg[6][2]+(2*ratio));
			game.circuitILbl.setLocation(game.circuitILblX +(12*ratio), game.circuitILblY+(2*ratio));
			game.circuitIVect.setLocation(game.mainEleImg[0][1] + 10 + ( 12 * ratio ), 0);
			vectorAng = 180-18;
			direction = -1;
		} else if(Math.floor(game.mainActors[5].x) > game.mainEleImg[5][1]) {
			//slider holder in right half of the slider
			var newDiff = game.mainActors[5].x - sliderLeft;
			var ratio = parseFloat(newDiff / oriDiff).toFixed(1);
			var newSpriteIndex = parseInt((ratio/1)*14) + 13;
			newSpriteIndex = Math.max(newSpriteIndex, 0);
			newSpriteIndex = Math.min(newSpriteIndex, 39);
			game.mainActors[0].setAnimationImageIndex([newSpriteIndex]);
			game.mainActors[1].setAnimationImageIndex([newSpriteIndex]);
			game.mainActors[2].setAnimationImageIndex([newSpriteIndex]);
			ratio = ratio-1;
			game.ratio_tilt = ratio;
			game.mainActors[6].setLocation(game.mainEleImg[6][1]+(12*ratio), game.mainEleImg[6][2]+(2*ratio));
			game.circuitILbl.setLocation(game.circuitILblX +(12*ratio), game.circuitILblY+(2*ratio));
			game.circuitIVect.setLocation(game.mainEleImg[0][1] + 10 + ( 12 * ratio ), 0);
			vectorAng = 18;
			direction = 1;
		} else {
			ratio = 0;
			game.ratio_tilt = ratio;
			vectorAng = 0;
			direction = 0;
			game.mainActors[0].setAnimationImageIndex([29]);
			game.mainActors[1].setAnimationImageIndex([29]);
			game.mainActors[2].setAnimationImageIndex([29]);
			game.mainActors[6].setLocation(game.mainEleImg[6][1], game.mainEleImg[6][2]);
			game.circuitILbl.setLocation(game.circuitILblX, game.circuitILblY);
			game.circuitIVect.setLocation(game.mainEleImg[0][1] + 10, 0);
			//when the sliderHolder is exactly in the middle of the slider
		}
		//game.onMouseDragVR(game.verticalRod);
		/*
		if(game.mainActors[0].x < 150) {
			game.mainActors[3].x = game.mainActors[0].x + (game.ratio_tilt*12);
			game.verticalRod = game.mainActors[3].x;
		}*/
		vectorHalfLength = vectorHalfLength_init * ratio;
		game.buildFieldStrength();
	}
	//=======================================================
	//What should be done on mouseup from the slider
	//=======================================================
	game.onMouseUp = function( obj ) {
		game.slider.x = game.mainActors[5].x;
		game.slider.y = game.mainActors[5].y;
		lastSliderHolderPosX = 0;
	}
	//=======================================================
	// Mouse drag on the osciallator knob
	//=======================================================
	game.onMouseDragTA = function( obj ) {
		var centerX = 46, centerY = 52;
		var dy = obj.y - centerY;
		var dx = obj.x - centerX;
		var knobAng = Math.atan2(dy, dx)*(180/(Math.PI)) + 180;
		if(knobAng < 0) {
			knobAng = 360 + knobAng;
		}
		knobAng = Math.ceil(knobAng);
		if(knobAng > 340 || knobAng < 36) {
			//0.1
			game.dashBoardEleArr[11].setRotation( 0 * (Math.PI/180) );
			game.currentScale = pointOneVoltRatio;
		} else if(knobAng > 280 && knobAng < 330) {
			//0.5
			game.dashBoardEleArr[11].setRotation( 305 * (Math.PI/180) );
			game.currentScale = pointFiveVoltRatio;
		} else if(knobAng > 230 && knobAng < 281) {
			//1
			game.dashBoardEleArr[11].setRotation( 255 * (Math.PI/180) );
			game.currentScale = oneVoltRatio;
		} else if(knobAng > 180 && knobAng < 231) {
			//5
			game.dashBoardEleArr[11].setRotation( 205 * (Math.PI/180) );
			game.currentScale = fiveVoltRatio;
		} else if(knobAng > 133 && knobAng < 181) {
			//10
			game.dashBoardEleArr[11].setRotation( 158 * (Math.PI/180) );
			game.currentScale = tenVoltRatio;
		} else if(knobAng > 82 && knobAng < 132) {
			//50
			game.dashBoardEleArr[11].setRotation( 107 * (Math.PI/180) );
			game.currentScale = fiftyVoltRatio;
		} else if(knobAng > 35 && knobAng < 83) {
			//100
			game.dashBoardEleArr[11].setRotation( 54 * (Math.PI/180) );
			game.currentScale = hundredVoltRatio;
		}
	}
	//=======================================================
	// Lets draw the rays with arrow heads
	//=======================================================
	function drawPaths( obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
		var headlen = 10;	// length of head in pixels
		obj.paint= function(_director, time) {	
			var dx = lineTO.x - moveTO.x;
			var dy = lineTO.y - moveTO.y;
			if(dx == 0 && dy == 0) return;
			var angle = Math.atan2(dy,dx);
			var canvas = _director.ctx;
			canvas.strokeStyle = strokeColor;
			canvas.fillStyle = strokeColor;
			canvas.lineWidth = lineWidth;
			canvas.beginPath();
			if(arrowDir == 'leftArrowHead') {
				canvas.moveTo( moveTO.x, moveTO.y);			
				canvas.lineTo( moveTO.x + headlen * Math.cos(angle-Math.PI/8), moveTO.y + headlen*Math.sin(angle-Math.PI/8));
				canvas.lineTo( moveTO.x + headlen * Math.cos(angle+Math.PI/8), moveTO.y + headlen*Math.sin(angle+Math.PI/8));
				canvas.fill();
			} else if(arrowDir == 'rightArrowHead'){
				canvas.moveTo( lineTO.x, lineTO.y);
				canvas.lineTo( lineTO.x - headlen * Math.cos(angle-Math.PI/8), lineTO.y - headlen*Math.sin(angle-Math.PI/8));
				canvas.lineTo( lineTO.x - headlen * Math.cos(angle+Math.PI/8), lineTO.y - headlen*Math.sin(angle+Math.PI/8));
				canvas.fill();
			}		
			if(middleArrowHeadReq) {
				var dx = midPoint.x - moveTO.x;
				var dy = midPoint.y - moveTO.y;
				var angle = Math.atan2(dy,dx);
				canvas.fillStyle = strokeColor;
				canvas.moveTo( (midPoint.x - 5), midPoint.y);
				canvas.lineTo( (midPoint.x - 5) - headlen * Math.cos(angle-Math.PI/10), midPoint.y - headlen*Math.sin(angle-Math.PI/10));
				canvas.lineTo( (midPoint.x - 5) - headlen * Math.cos(angle+Math.PI/10), midPoint.y - headlen*Math.sin(angle+Math.PI/10));
				canvas.fill();
			}			
			canvas.moveTo(moveTO.x, moveTO.y);
			canvas.lineTo(lineTO.x, lineTO.y);
			canvas.stroke();	
		};	
	}
	//=======================================================
	// Lets draw the oscillations and current vector
	//=======================================================
	game.startTimer = function() { 
		var counter = 0;
		ctrr = 0;
		var graphCounter = 0, graphCounter1 = 0;
		oneMtInPx = 3000;
		L /= oneMtInPx;
		//var R = 100 * Math.pow(10, 3); //100 Kilo ohms
		R = 1000; //1 Kilo ohms
		var lastxNot;
		var reduceFactor = 1;
		var scene = game.getScene();
		game.fluxTimer = scene.createTimer(
				0,
				Number.MAX_VALUE,
				function (scene_time, timer_time, timertask_instance) {}, // timeout
				function (scene_time, timer_time, timertask_instance) {   // tick
					graphCounter++;
					graphCounter1++;
					game.currentTime = new Date().getTime();
					game.elapsedTime = ( game.currentTime - game.startTime)/1000;		
					
					xNot = game.mainActors[3].x - game.mainEleImg[0][1];
					xNot /= oneMtInPx;
					bNot = game.tesla;

					//emf = bNot * L * ( xNot - lastxNot ) / (game.elapsedTime*6);
					emf = bNot * L * ( xNot - lastxNot ) / (game.elapsedTime*(Math.abs(bNot)*1));
					var currentFound = ( emf / R).toFixed(2);

					if(currentFound!=0 && !isNaN(currentFound)){
						current=currentFound;
						graphCounter=0;
					}else if(current>0){
						if(graphCounter > 3) {
							reduceFactor = Math.ceil(Math.abs(current) / 2);
							current=parseFloat(current)-reduceFactor;
							if(current<0){
								current=0;
							}
							graphCounter=0;
						}
					}else if(current<0){
						//reduceFactor = Math.ceil(Math.abs(current) / 1);
						if(reduceFactor <= 0){
							reduceFactor = 1;	
						}
						if(graphCounter > 3) {
							//current=parseFloat(current)+(0.05);
							current=parseFloat(current) + reduceFactor;
							if(current>0){
								current=0;
							}
							graphCounter=0;
						}
					}					
					current = parseFloat(current).toFixed(2);
					game.dashBoardTxtArr[5].setText(current);
					if(graphCounter1 > 3) {
						game.drawOscillation(current);
						graphCounter1 = 0;
					}					
					//lastPhi = phi;
					lastxNot = xNot;
					game.startTime = new Date().getTime();
				},	
				function (scene_time, timer_time, timertask_instance) {} // cancel
		);	
	}
	//=======================================================
	// Lets Oscillation
	//=======================================================
	game.drawOscillation = function(yDiffValue) {
			var yVal = ( game.currentScale ) * yDiffValue * 1500 * -1;
			yVal = Math.ceil(yVal);
			currCanvas = game.oscilloscope.backgroundImage.image;
			game.oscilloscope.__ctx = currCanvas.getContext('2d');
			if(ctrr >= 200) {
				//if the oscillation has crossed 200 distance then the graph is drawn from the beginning
				ctrr = 0;
			} else {
				//do nothing
			}
			
			var xVal = ctrr;
			var yVal = ( 51 - yVal);
			
			if(game.currentScale == pointOneVoltRatio) {
				if(yVal < 0) {
					yVal = 0;
				}
				if(yVal > 102) {
					yVal = 102;
				}
			} else if(game.currentScale == pointFiveVoltRatio) {
				if(yVal < 0) {
					yVal = 0;
				}
				if(yVal > 102) {
					yVal = 102;
				}
			} else if(game.currentScale == oneVoltRatio) {
				if(yVal < 0) {
					yVal = 0;
				}
				if(yVal > 102) {
					yVal = 102;
				}
			} else if(game.currentScale == fiveVoltRatio) {
				if(yVal < 13) {
					yVal = 13;
				}
				if(yVal > 89) {
					yVal = 89;
				}
			}  else if(game.currentScale == tenVoltRatio) {
				if(yVal < 27) {
					yVal = 27;
				}
				if(yVal > 75) {
					yVal = 75;
				}
			} else if(game.currentScale == fiftyVoltRatio) {
				if(yVal < 46) {
					yVal = 46;
				}
				if(yVal > 56) {
					yVal = 56;
				}
			} else if(game.currentScale == hundredVoltRatio) {
				if(yVal < 48) {
					yVal = 48;
				}
				if(yVal > 54) {
					yVal = 54;
				}
			}
			
			if(ctrr == 0) {
				var canvas = document.createElement('canvas');
				canvas.width = 207;
				canvas.height = 101;											
				game.oscilloscope.setBackgroundImage( canvas );
				currCanvas = game.oscilloscope.backgroundImage.image;
				game.oscilloscope.__ctx = currCanvas.getContext('2d');
				game.oscilloscope.__ctx.moveTo(xVal, yVal);
			}
			ctrr += 1;
			
			game.oscilloscope.__ctx.lineTo(xVal, yVal);
			game.oscilloscope.__ctx.strokeStyle = '#FFFFFF';
			game.oscilloscope.__ctx.lineWidth = 1;
			game.oscilloscope.__ctx.stroke();
			
			game.circuitILbl.setAlpha((yDiffValue == 0) ? 0 : 1);			
			var yVal_bottom = ( (game.getDirector().height - 100)/2) + yDiffValue * 1500 * -1;
			drawPaths( game.circuitIVect, {x:10, y:(game.getDirector().height - 100)/2}, {x:0, y:0}, {x:10, y:yVal_bottom}, false, '#ff0000', 2, 'rightArrowHead', false);
			
			//set bulb sprite index
			var bulbFrame = Math.abs(parseInt(yDiffValue * 100.0));
			bulbFrame = Math.min(bulbFrame, 11);
			bulbFrame = Math.max(bulbFrame, 0);
			game.mainActors[6].setAnimationImageIndex([bulbFrame]);
	}
	//=======================================================
	// Lets rotate the knob to scale the oscillations
	//=======================================================
	game.rotateKnob = function( obj ) {
		var angRad = obj.split('_')[2];
		game.dashBoardEleArr[11].setRotation( angRad * (Math.PI/180) );
		var index = obj.split('_')[1];
		if(index == 0) {
			game.currentScale = pointOneVoltRatio;			
		} else if(index == 1) {
			game.currentScale = pointFiveVoltRatio;
		} else if(index == 2) {
			game.currentScale = oneVoltRatio;
		} else if(index == 3) {
			game.currentScale = fiveVoltRatio;
		}  else if(index == 4) {
			game.currentScale = tenVoltRatio;
		} else if(index == 5) {
			game.currentScale = fiftyVoltRatio;
		} else if(index == 6) {
			game.currentScale = hundredVoltRatio;
		}
	}
	//=======================================================
	// Plot the field strength
	//=======================================================
	game.buildFieldStrength = function() {
		game.dashBoardTxtArr[6].setText(parseFloat(game.tesla).toFixed(3));
		//calculate the number of rays
		var val = ( 1 + ( 2 * Math.abs(game.tesla) * 10));
		var totalSymbolSpace = val * fieldChargeDimen;
		var remainingSpace = fieldsAreaWidth - totalSymbolSpace;
		var spaceBetweenEachSymbol = remainingSpace / (val - 1);
		var _director = game.getDirector();
		//if their some angle of rotation then show the rod length
		var vecLength = ( vectorAng ) ? vectorHalfLength : 0;
		//middle movable rod
		xNot = game.mainEleImg[3][1] - game.mainEleImg[0][1];
		//rod length
		L = game.mainEleImg[1][2] - game.mainEleImg[2][2];
		//Paint the BG actor
		game.bgVector.paint = function( _director, time) {
			var canvas = _director.ctx;
			canvas.strokeStyle = '#000';
			for(var i = 0; i < val; i++) {
				for(var j = 0; j < val; j++) {
					var xyPoints = makeTangent(fieldStartX+(spaceBetweenEachSymbol*j)+(10*j), fieldStartY + (spaceBetweenEachSymbol*i)+(10*i), vecLength, vectorAng + 180);
					//If tesla is positive
					if(game.tesla > 0) {
						//draw the small balls in the BG
						canvas.beginPath();
						canvas.arc(xyPoints[0], xyPoints[1], 3.5, 0, 2*Math.PI, true);
						canvas.fillStyle = '#aaabd5';
						canvas.fill();
						//if their is some angle of rotation
						if(vectorAng) {
							canvas.beginPath();
							canvas.moveTo(fieldStartX+(spaceBetweenEachSymbol*j)+(10*j), fieldStartY + (spaceBetweenEachSymbol*i)+(10*i));
							canvas.lineTo(xyPoints[0], xyPoints[1]);
							canvas.strokeStyle = '#c0517e';
							canvas.stroke();
						}
					} else {
						//draw the crosses in the BG
						canvas.strokeStyle = '#a5a1ce';
						canvas.lineWidth = 1.5;
						canvas.beginPath();
						canvas.moveTo(xyPoints[0] - 4 , xyPoints[1] - 4 );
						canvas.lineTo(xyPoints[0] + 4, xyPoints[1] + 4);
						canvas.stroke();						
						canvas.beginPath();
						canvas.moveTo(xyPoints[0] + 4, xyPoints[1] - 4);
						canvas.lineTo(xyPoints[0] - 4, xyPoints[1] + 4);
						canvas.stroke();	
						//if their some angle
						if(vectorAng) {
							canvas.beginPath();
							canvas.lineWidth = 1.0;
							canvas.moveTo(fieldStartX + ( spaceBetweenEachSymbol * j )+(10*j), fieldStartY + ( spaceBetweenEachSymbol * i )+(10*i));
							canvas.lineTo(xyPoints[0], xyPoints[1]);
							canvas.strokeStyle = '#c0517e';
							canvas.stroke();
						}
					}
				}
			}
		}
		//Paint the FG actor
		game.fgVector.paint = function( _director, time) {
			var canvas = _director.ctx;
			canvas.strokeStyle = '#000';
			for(var i = 0; i < val; i++) {
				for(var j = 0; j < val; j++) {
					var xyPoints = makeTangent(fieldStartX+(spaceBetweenEachSymbol*j)+(10*j), fieldStartY + (spaceBetweenEachSymbol*i)+(10*i), vecLength, vectorAng);
					if(game.tesla > 0) {
						if(vectorAng) {
							canvas.beginPath();
							canvas.lineWidth = 1.0;
							canvas.moveTo(fieldStartX + ( spaceBetweenEachSymbol * j )+(10*j), fieldStartY + ( spaceBetweenEachSymbol * i )+(10*i));
							canvas.lineTo(xyPoints[0], xyPoints[1]);
							canvas.strokeStyle = '#c0517e';
							canvas.stroke();
						}
						canvas.strokeStyle = '#c71648';
						canvas.lineWidth = 1.5;
						canvas.beginPath();
						canvas.moveTo(xyPoints[0] - 4 , xyPoints[1] - 4 );
						canvas.lineTo(xyPoints[0] + 4, xyPoints[1] + 4);
						canvas.stroke();
						
						canvas.beginPath();
						canvas.moveTo(xyPoints[0] + 4, xyPoints[1] - 4);
						canvas.lineTo(xyPoints[0] - 4, xyPoints[1] + 4);
						canvas.stroke();
					} else {
						if(vectorAng) {
							canvas.beginPath();
							canvas.moveTo(fieldStartX+(spaceBetweenEachSymbol*j)+(10*j), fieldStartY + (spaceBetweenEachSymbol*i)+(10*i));
							canvas.lineTo(xyPoints[0], xyPoints[1]);
							canvas.strokeStyle = '#c0517e';
							canvas.stroke();
						}	
						canvas.beginPath();
						canvas.arc(xyPoints[0], xyPoints[1], 3.5, 0, 2*Math.PI, true);
						canvas.fillStyle = '#b12e5b';
						canvas.fill();
					}
				}
			}
		}
	}
	//=======================================================
	// Lets find a tangent point
	//=======================================================
	function makeTangent(cx,cy,r,a){
		var ang= ( Math.PI/180)*a;
		var x1 = cx + (r * Math.cos(ang));
		var y1 = cy + (r * Math.sin(ang));	
		return [x1,y1];
	}
	//=======================================================
	// on increase the tesla value
	//=======================================================
	game.valuesChanged = function(thisBtnId) {
		game.buildFieldStrength();		
	
		//emf = bNot * L * ( xNot - lastxNot ) / (game.elapsedTime*6);
		xNot = game.mainActors[3].x - game.mainEleImg[0][1];
		xNot /= oneMtInPx;
		var newEmf = bNot * L * xNot / (1);
		var currentFound = ( newEmf*10 / R ).toFixed(2);
		if(thisBtnId == 'iniMagInc') {
			//for all increments the graph needs to be plotted above x-axis
			currentFound = Math.abs(currentFound) * -1;
		} else if(thisBtnId == 'iniMagDec') {
			//for all decrements the graph needs to be plotted below x-axis
			currentFound = Math.abs(currentFound);
		}
		game.drawOscillation(currentFound);
	}
	//=======================================================
	// on clicking the slide move the slider holder automatically
	//=======================================================
	game.sliderClick = function(e) {
		var pt1 = game.sliderContainer.modelToView(new CAAT.Math.Point(e.x, e.y));
		if(lastSliderHolderPosX == 0) lastSliderHolderPosX = game.slider.x;
		if(lastSliderHolderPosX > 0) {
			var diffVal = (pt1.x - lastSliderHolderPosX)/15;
			game.slider.x = game.slider.x + diffVal;
			game.mainActors[5].x = game.slider.x;
			game.onMouseDrag(game.slider);
		}
	}
	//=======================================================
	// Extend actor container's enable drag and use it as userDrag 
	// which draws the rays on every movement
	//=======================================================
	game.extendActorFunctionality = function() {
		CAAT.Foundation.Actor.extend(
			{
				paint : function(director,time) {
					CAAT.exemplarr.superclass.paint.call(this,director,time);
				},				
				userDrag: function (callback1, callback2) {
					this.ax = 0;
					this.ay = 0;
					this.asx = 1;
					this.asy = 1;
					this.ara = 0;
					this.screenx = 0;
					this.screeny = 0;
					var holder;
					
					this.mouseEnter = function (mouseEvent) {
						this.__d_ax = -1;
						this.__d_ay = -1;
						this.pointed = true;
						CAAT.setCursor('move');
					};
	
					this.mouseExit = function (mouseEvent) {
						this.__d_ax = -1;
						this.__d_ay = -1;
						this.pointed = false;
						CAAT.setCursor('default');
					};
	
					this.mouseMove = function (mouseEvent) {
					};
	
					this.mouseDown = function (mouseEvent) {
						if(this.getId() == 'verticalRod')
							game.startTime = new Date().getTime();
					};
					
					this.mouseUp = function (mouseEvent) {
						this.__d_ax = -1;
						this.__d_ay = -1;
					
						if(callback2){
							callback2(this);
						}
					};
	
					this.mouseDrag = function (mouseEvent) {
						var pt;
						pt = this.modelToView(new CAAT.Math.Point(mouseEvent.x, mouseEvent.y));
						this.parent.setZOrder(this, Number.MAX_VALUE);
						this.parent.viewToModel(pt);
						
						if (this.__d_ax === -1 || this.__d_ay === -1) {
							
							this.x = pt.x - this.width/2;
							this.y = pt.y - this.height/2;
							this.__d_ax = pt.x;
							this.__d_ay = pt.y;
							this.__d_asx = this.scaleX;
							this.__d_asy = this.scaleY;
							this.__d_ara = this.rotationAngle;
							this.__d_screenx = mouseEvent.screenPoint.x;
							this.__d_screeny = mouseEvent.screenPoint.y;
						}
						
						this.x += pt.x - this.__d_ax;
						this.y += pt.y - this.__d_ay;
												
						this.__d_ax = pt.x;
						this.__d_ay = pt.y;
						if(callback1){
							callback1(this);
						}
					};
	
					return this;
				},
			},
			null,
			"CAAT.exemplarr"
		);
	}
})();