/////////////////////////////////////////
////////////// Game Logic ///////////////
/////////////////////////////////////////
(function() {
	var sliderCurrPosX = null, sliderOldPosX = null;
	var isDrag = false, allowToDrawOsc = false;
	game.fluxTimer = null;
	var fieldScale = 1, yDiffVal = null, lastYVal = 0, ifFirstTime = true, ctrr = 0, currCanvas = null;
	var pointOneVoltRatio = (90/180);
	var pointFiveVoltRatio = (80/180);
	var oneVoltRatio = (70/180);
	var fiveVoltRatio = (60/180);
	var tenVoltRatio = (50/180);
	var fiftyVoltRatio = (15/180);
	var hundredVoltRatio = (8/180);
	var currentTimeOSC = null, startTimeOSC = null, elapsedTimeOSC = null;
	game.currentScale = tenVoltRatio;
	//=======================================================
	//What should be done on mousedrag
	//=======================================================
	game.onMouseDrag = function( obj ) {
		//when the slider holder is moved only within the slider range
		//if(obj.x > game.mainActors[1].x && obj.x < (game.mainActors[1].x + game.mainActors[1].width - obj.width)) {
			if(obj.x > game.mainActors[1].x && obj.x < (game.mainActors[1].x + game.mainActors[1].width - obj.width)) {
				game.mainActors[2].x = obj.x;
			} else if(obj.x > game.mainActors[1].x) {
				game.mainActors[2].x = (game.mainActors[1].x + game.mainActors[1].width) - game.mainActors[2].width;		
			} else if(obj.x < (game.mainActors[1].x + game.mainActors[1].width - obj.width)){
				game.mainActors[2].x = game.mainActors[1].x;
			}
			isDrag = true;
			
			var sliderLeft = game.mainEleImg[1][1];
			var sliderHolderLeft = game.mainEleImg[2][1];
			var oriDiff = sliderHolderLeft - sliderLeft;
			var moveTO = {x:game.mainEleImg[2][1] + game.mainActors[2].width/2 - game.topCircuitIVect.x, y:20};
			if(Math.floor(game.mainActors[2].x) < (game.mainEleImg[2][1]-1)) {
				//slider holder in left half of the slider
				game.topCircuitILbl.setAlpha(1);
				var newDiff = game.mainActors[2].x - sliderLeft;
				var ratioAlpha = parseFloat(newDiff / oriDiff);
				var ratio = parseFloat(newDiff / oriDiff).toFixed(1);
				controlVectorDisplay( game.down_vector_container, 0);
				controlVectorDisplay( game.up_vector_container, 1-ratioAlpha);
				var lineTO = {x:game.mainActors[2].x + game.mainActors[2].width - game.topCircuitIVect.x, y:20};
			} else if(Math.floor(game.mainActors[2].x) > (game.mainEleImg[2][1] + 1)) {
				//slider holder in left half of the slider
				game.topCircuitILbl.setAlpha(1);
				var newDiff = game.mainActors[2].x - sliderLeft;
				var ratioAlpha = parseFloat(newDiff / oriDiff);
				var ratio = parseFloat(newDiff / oriDiff).toFixed(1);
				controlVectorDisplay( game.up_vector_container, 0);
				controlVectorDisplay( game.down_vector_container, Math.abs(1-ratioAlpha));
				var lineTO = {x:game.mainActors[2].x - game.topCircuitIVect.x, y:20};
			} else {
				//when the sliderHolder is exactly in the middle of the slider
				game.topCircuitILbl.setAlpha(0);	
				var moveTO = {x:0, y:0};
				var lineTO = {x:0, y:0};
			}
			drawPaths( game.topCircuitIVect, moveTO, {x:0, y:0}, lineTO, false, '#ff6600', 2, 'rightArrowHead', false)
			
		//}
	}
	//=======================================================
	//What should be done on mouseup
	//=======================================================
	game.onMouseUp = function( obj ) {
		game.slider.x = game.mainActors[2].x;
		game.slider.y = game.mainActors[2].y;
		isDrag = false;
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
			game.dashBoardEleArr[2].setRotation( 0 * (Math.PI/180) );
			game.currentScale = pointOneVoltRatio;
		} else if(knobAng > 280 && knobAng < 330) {
			//0.5
			game.dashBoardEleArr[2].setRotation( 305 * (Math.PI/180) );
			game.currentScale = pointFiveVoltRatio;
		} else if(knobAng > 230 && knobAng < 281) {
			//1
			game.dashBoardEleArr[2].setRotation( 255 * (Math.PI/180) );
			game.currentScale = oneVoltRatio;
		} else if(knobAng > 180 && knobAng < 231) {
			//5
			game.dashBoardEleArr[2].setRotation( 205 * (Math.PI/180) );
			game.currentScale = fiveVoltRatio;
		} else if(knobAng > 133 && knobAng < 181) {
			//10
			game.dashBoardEleArr[2].setRotation( 158 * (Math.PI/180) );
			game.currentScale = tenVoltRatio;
		} else if(knobAng > 82 && knobAng < 132) {
			//50
			game.dashBoardEleArr[2].setRotation( 107 * (Math.PI/180) );
			game.currentScale = fiftyVoltRatio;
		} else if(knobAng > 35 && knobAng < 83) {
			//100
			game.dashBoardEleArr[2].setRotation( 54 * (Math.PI/180) );
			game.currentScale = hundredVoltRatio;
		}
	}
	//=======================================================
	//control vector display
	//=======================================================
	function controlVectorDisplay( parent, opacity) {
		for(var i = 0; i < parent.getNumChildren(); i++) {
			parent.getChildAt(i).setAlpha( opacity );
		}
		//game.magneticFieldLbl.setAlpha( opacity );
		game.magneticFieldLbl.setAlpha( opacity );
		//console.log(game.magneticFieldLbl);
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
						//this.parent.setZOrder(this, Number.MAX_VALUE);
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
		
			//canvas.lineJoin = 'round';
			//canvas.lineCap = 'round';
			//canvas.closePath();	
			canvas.stroke();	
		};	
	}
	
	game.startTimer = function() { 
		var counter = 0;
		var graphCounter = 0;
		var scene = game.getScene();
		sliderOldPosX = game.mainEleImg[2][1];
		//console.log('game.mainActors'+game.mainActors[4].x);
		game.fluxTimer = scene.createTimer(
				0,
				Number.MAX_VALUE,
				function (scene_time, timer_time, timertask_instance) {}, // timeout
				function (scene_time, timer_time, timertask_instance) {   // tick
					counter++;
					graphCounter++;
					if(counter >= 5) {
						sliderCurrPosX = game.mainActors[2].x;
						slidePosDiff = sliderCurrPosX - sliderOldPosX;
						//slidePosDiff = Math.sqrt(Math.abs(slidePosDiff));
						//slidePosDiff = Math.sqrt(Math.abs(slidePosDiff));
						
						if(slidePosDiff == 0) {
							startTimeOSC = new Date().getTime();	
						}
						currentTimeOSC = new Date().getTime();
						elapsedTimeOSC = currentTimeOSC - startTimeOSC;
						
						yDiffVal = slidePosDiff;
						//console.log('yDiffVal='+yDiffVal);
						ifFirstTime = false;
						//var imgIndex = ( slidePosDiff * 37 ) / 180;
						var a=0.000757;
						var b=0.074817;
						slidePosDiff = Math.abs(slidePosDiff);
						var imgIndex = Math.floor((a * Math.pow(slidePosDiff,2)) + (slidePosDiff * b));
						//console.log('imgIndex='+imgIndex+' slidePosDiff='+slidePosDiff);
						game.mainActors[4].setAnimationImageIndex([imgIndex]);
						sliderOldPosX = sliderCurrPosX;
						counter = 0;
						if(Math.abs(slidePosDiff) != 0) {
							allowToDrawOsc = true;
						}
					}
					if(graphCounter > 10) {
						//sliderOldPosX = sliderCurrPosX;
						//graphCounter = 0;
					}
					game.drawOscillation(yDiffVal);
						//graphCounter = 0;
						
					//}
				},	
				function (scene_time, timer_time, timertask_instance) {} // cancel
		);	
	}
	
	game.drawOscillation = function(yDiffValue) {
		//if(allowToDrawOsc) {
			var yVal = (game.currentScale) * yDiffValue * -1;
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
			var yVal = (51 - yVal);
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
				if(yVal < 0) {
					yVal = 0;
				}
				if(yVal > 102) {
					yVal = 102;
				}
			}  else if(game.currentScale == tenVoltRatio) {
				if(yVal < 0) {
					yVal = 0;
				}
				if(yVal > 102) {
					yVal = 102;
				}
			} else if(game.currentScale == fiftyVoltRatio) {
				if(yVal < 36) {
					yVal = 36;
				}
				if(yVal > 66) {
					yVal = 66;
				}
			} else if(game.currentScale == hundredVoltRatio) {
				if(yVal < 43) {
					yVal = 43;
				}
				if(yVal > 59) {
					yVal = 59;
				}
			}
			if(ctrr == 0) {
				//if first time then it should be move to
				var canvas = document.createElement('canvas');
				canvas.width = 201;
				canvas.height = 101;											
				game.oscilloscope.setBackgroundImage( canvas );
				currCanvas = game.oscilloscope.backgroundImage.image;
				game.oscilloscope.__ctx = currCanvas.getContext('2d');
				game.oscilloscope.__ctx.moveTo(xVal, yVal);
			}
			//ctrr += 0.75;
			//ctrr += 1;
			ctrr += 0.5;
			
			game.oscilloscope.__ctx.lineTo(xVal, yVal);
			game.oscilloscope.__ctx.strokeStyle = '#FFFFFF';
			//game.oscilloscope.__ctx.lineWidth = 0.1;
			game.oscilloscope.__ctx.lineWidth = 1;
			game.oscilloscope.__ctx.stroke();
			
			game.bottomCircuitILbl.setAlpha((yDiffValue == 0) ? 0 : 1);
			var xVal_bottom = (game.mainActors[1].width/2) - 5 + (35/180) * yDiffValue * -1;
			var yVal_bottom = game.bottomCircuitIVect.y + 5;
			var moveTO_1 = {x:game.mainActors[1].width/2 - 5, y:10};
			var lineTO_1 = {x: xVal_bottom, y:10};
			
			drawPaths( game.bottomCircuitIVect, moveTO_1, {x:0, y:0}, lineTO_1, false, '#ff6600', 2, 'rightArrowHead', false)
		//}
	}
	
	game.rotateKnob = function( obj ) {
		//console.log(obj);
		var angRad = obj.split('_')[2];
		game.dashBoardEleArr[2].setRotation( angRad * (Math.PI/180) );	
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
})();