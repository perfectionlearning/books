//
//	Game Logic
//
;(function() {

var timerFlag = true;
var currentDragActor = '';

game.onObjMove = function( actor, flag) {
	var leftPenguinLeft = null, leftPenguinTop = null, leftPenguinWidth = null, leftPenguinHeight = null, leftPenguinOriHeight = 104;
	var arcStrokeWidth = 3;
	var dWidth = null, dHeight = null;
	//var f1_x = game.actorImg[3].x + 5;
	var f1_x = Math.round(game.actorImg[3].x) + 5;
	var f1_y = game.actorImg[3].y + 3;	
	//var f2_x = game.actorImg[4].x + 5;
	var f2_x = Math.round(game.actorImg[4].x) + 5;
	var f2_y = game.actorImg[4].y + 3;
	
	var penguinEyeToHeightRatio = 104 / 97;
	var penguinEyeToWidthRatio = 38 / 60;
	
	var _director = game.getDirector();
	
	dHeight = _director.height;
	dWidth = _director.width;	
	
	if(!flag) {
		//actor = eval(actor);
	}

	//leftPenguinLeft = actor.x;
	//console.log('leftPenguinLeft='+leftPenguinLeft+' f1_x = '+f1_x);
	leftPenguinLeft = Math.round(actor.x);
	//console.log('x='+leftPenguinLeft);
	leftPenguinTop = actor.y;
	leftPenguinWidth = actor.width;
	leftPenguinHeight = actor.height;
		
	var penquinEyeX = leftPenguinLeft + (leftPenguinWidth/2);
	var penquinEyeY = 201;
		
	var violetLine_1_X1 = penquinEyeX;
	var violetLine_1_Y1 = penquinEyeY;
	var violetLine_1_X2 = dWidth/2;
	var violetLine_1_Y2 = penquinEyeY;
	var violetLine_1_X3 = dWidth/2;
	var violetLine_1_Y3 = penquinEyeY;
	///////////////////////////////////////////////////
	///////////////////////////////////////////////////
	//violet line second part
	var m2 = (f2_y - penquinEyeY)/(f2_x - dWidth/2);
	var c2 = penquinEyeY - ((dWidth/2) * m2);	
	if(penquinEyeX > f1_x) {
		var violetLine_2_X1 = 0;
		var violetLine_2_Y1 = ( m2 * violetLine_2_X1 ) + c2;
		var violetLine_2_X3 = dWidth/2;
		var violetLine_2_Y3 = penquinEyeY;
	} else {
		var violetLine_2_X1 = violetLine_1_X2;
		var violetLine_2_Y1 = penquinEyeY;		
		var violetLine_2_X3 = violetLine_1_X2;
		var violetLine_2_Y3 = penquinEyeY;
	}
	var violetLine_2_X2 = (dWidth - 25);
	var violetLine_2_Y2 = ( m2 * violetLine_2_X2 ) + c2;
	///////////////////////////////////////////////////
	///////////////////////////////////////////////////
	//orange line
	var m3 = (f2_y - penquinEyeY)/((dWidth/2) - penquinEyeX);
	var c3 = penquinEyeY - (penquinEyeX * m3);
	if(penquinEyeX > f1_x) {
		var orangeLineX1 = 0;
		var orangeLineY1 = ( m3 * orangeLineX1 ) + c3;
		var orangeLineX2 = dWidth - 50;
		var orangeLineY2 = ( m3 * orangeLineX2 ) + c3;
		var orangeLineX3 = penquinEyeX;
		var orangeLineY3 = penquinEyeY;
	} else {
		var orangeLineX1 = penquinEyeX;
		var orangeLineY1 = penquinEyeY;
		var orangeLineX2 = dWidth - 50;
		var orangeLineY2 = ( m3 * orangeLineX2 ) + c3;
		var orangeLineX3 = penquinEyeX;
		var orangeLineY3 = penquinEyeY;
	}
	var intersectionPoints = intersection(violetLine_2_X1, violetLine_2_Y1, violetLine_2_X2, violetLine_2_Y2, orangeLineX1, orangeLineY1, orangeLineX2, orangeLineY2);
	//intersectionPoints[1] = (Math.abs(parseInt(intersectionPoints[1]) > 5000)) ? 5000 : intersectionPoints[1];
	///////////////////////////////////////////////////
	///////////////////////////////////////////////////
	//green line first part
	var greenLine_1_X1 = penquinEyeX;
	var greenLine_1_Y1 = penquinEyeY;
	var greenLine_1_X2 = dWidth/2;
	var greenLine_1_Y2 = intersectionPoints[1];
	var greenLine_1_X3 = penquinEyeX;
	var greenLine_1_Y3 = penquinEyeY;		
	if(greenLine_1_Y2 <= (game.actorImg[0].y + 7 + 250) && (greenLine_1_Y2 >= (game.actorImg[0].y + 3))) {
		//if the green rays passing out of the lens then make straight rays
		if(greenLine_1_Y1 >= greenLine_1_Y2) {
			var greenLine_1_X1 = f1_x;
			var greenLine_1_Y1 = f1_y;
			var greenLine_1_X2 = dWidth/2;
			var greenLine_1_Y2 = intersectionPoints[1];
			var greenLine_1_X3 = penquinEyeX;
			var greenLine_1_Y3 = f1_y;
		}	
	}
	
	var m4 = (greenLine_1_Y2 - greenLine_1_Y1)/(greenLine_1_X2 - greenLine_1_X1);
	var c4 = greenLine_1_Y1 - (greenLine_1_X1 * m4);
	
	if(greenLine_1_Y2 >= (game.actorImg[0].y + 7 + 250) || (greenLine_1_Y2 <= (game.actorImg[0].y + 3))) {
		//if the green rays passing out of the lens then make straight rays
		var greenLine_2_X1 = dWidth/2;
		var greenLine_2_Y1 = intersectionPoints[1];
		var greenLine_2_X2 = dWidth - 50;
		var greenLine_2_Y2 = ( m4 * greenLine_2_X2 ) + c4;
		var greenLine_2_X3 = dWidth/2;
		var greenLine_2_Y3 = intersectionPoints[1];
	} else {
		//if the green rays passing within the lens then make bent rays
		var greenLine_2_X1 = dWidth/2;
		var greenLine_2_Y1 = intersectionPoints[1];
		var greenLine_2_X2 = dWidth - 50;
		var greenLine_2_Y2 = intersectionPoints[1];
		var greenLine_2_X3 = dWidth/2;
		var greenLine_2_Y3 = intersectionPoints[1];
		
		if(greenLine_1_Y1 >= greenLine_1_Y2 && greenLine_1_Y2 >= game.actorImg[0].y + 3) {
			var violetLine_2_X1 = intersectionPoints[0];
			var violetLine_2_Y1 = intersectionPoints[1];		
			var orangeLineX1 = intersectionPoints[0];
			var orangeLineY1 = intersectionPoints[1];
			var greenLine_2_X1 = intersectionPoints[0];
			var greenLine_2_Y1 = intersectionPoints[1];
		}		
	}
	
	if(penquinEyeX > f1_x) {
		var violetLine_2_X1 = intersectionPoints[0];
		var violetLine_2_Y1 = intersectionPoints[1];		
		var orangeLineX1 = intersectionPoints[0];
		var orangeLineY1 = intersectionPoints[1];
	}
	
	//call parameters order
	//id, moveTO, lineTo, isDashed, strokeColor, lineWidth, which side to draw arrow head
		
	//violet - first parts
	drawPaths( game.Rays[0], {x:violetLine_1_X1, y:violetLine_1_Y1}, {x:violetLine_1_X3, y:violetLine_1_Y3}, {x:violetLine_1_X2, y:violetLine_1_Y2}, false, '#9966ff', 1, 'none', false);
	
	//violet - second parts
	drawPaths( game.Rays[1], {x:violetLine_2_X1, y:violetLine_2_Y1}, {x:violetLine_2_X3, y:violetLine_2_Y3}, {x:violetLine_2_X2, y:violetLine_2_Y2}, true, '#9966ff', 1, 'rightArrowHead', false);
	//console.log(greenLine_1_Y2);
	//green - first part
	drawPaths( game.Rays[2], {x:greenLine_1_X1, y:greenLine_1_Y1}, {x:greenLine_1_X3, y:greenLine_1_Y3}, {x:greenLine_1_X2, y:greenLine_1_Y2}, true, '#00cc00', 1, 'none', false);
	
	//green - second part
	drawPaths( game.Rays[3], {x:greenLine_2_X1, y:greenLine_2_Y1}, {x:greenLine_2_X3, y:greenLine_2_Y3}, {x:greenLine_2_X2, y:greenLine_2_Y2}, true, '#00cc00', 1, 'rightArrowHead', false);
	
	//orange - single line
	drawPaths( game.Rays[4], {x:orangeLineX1, y:orangeLineY1}, {x:orangeLineX3, y:orangeLineY3}, {x:orangeLineX2, y:orangeLineY2}, true, '#ff6600', 1, 'rightArrowHead', false);
		
	//reflecting penguin scale
	var penguinHeightAllowed = intersectionPoints[1] - f2_y;
	
	penguinHeightAllowed = penguinEyeToHeightRatio * penguinHeightAllowed;
	
	var scaleFactorWidth = (penguinHeightAllowed) / leftPenguinOriHeight;
	//var scaleFactorHeight = (penguinHeightAllowed + 5) / leftPenguinOriHeight;
	var scaleFactorHeight = (penguinHeightAllowed) / leftPenguinOriHeight;
	var penguinWidthFromHeight1 = (60/leftPenguinOriHeight) * penguinHeightAllowed;
	var penguinWidthFromHeight = penguinEyeToWidthRatio * penguinWidthFromHeight1;
	game.actorImg[1]
		.setScaleAnchor(0,0)
		.setScale( (scaleFactorWidth), (scaleFactorHeight));
		//.setLocation( intersectionPoints[0] - (penguinWidthFromHeight), f2_y);
		//.setLocation( intersectionPoints[0] - (penguinWidthFromHeight/2) - 10, f2_y);
		/*.setBounds( 	
			intersectionPoints[0] - (penguinWidthFromHeight/2) - 10, 
			f2_y,
			penguinWidthFromHeight, 
			0
		)*/
	if(penquinEyeX < f1_x){
		game.actorImg[1]
			.setImageTransformation(CAAT.Foundation.SpriteImage.TR_FIXED_TO_SIZE)
			.setLocation( intersectionPoints[0] - (penguinWidthFromHeight), f2_y);
    }else{
		game.actorImg[1]
			.setImageTransformation(CAAT.Foundation.SpriteImage.TR_FLIP_HORIZONTAL)			
			.setLocation( intersectionPoints[0] - (penguinWidthFromHeight1 - penguinWidthFromHeight), f2_y);
    } 
};

function drawPaths( obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
	//console.log([id, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq]);
	var headlen = 15;	// length of head in pixels
	obj.paint= function(_director, time) {	
		var dx = lineTO.x - moveTO.x;
		var dy = lineTO.y - moveTO.y;
		var angle = Math.atan2(dy,dx);
		
		var canvas = _director.ctx;
		canvas.strokeStyle = strokeColor;
		canvas.fillStyle = strokeColor;
		canvas.lineWidth = lineWidth;
		canvas.beginPath();
		if(arrowDir == 'leftArrowHead') {
			canvas.moveTo( moveTO.x, moveTO.y);			
			canvas.lineTo( moveTO.x + headlen * Math.cos(angle-Math.PI/10), moveTO.y + headlen*Math.sin(angle-Math.PI/10));
			canvas.lineTo( moveTO.x + headlen * Math.cos(angle+Math.PI/10), moveTO.y + headlen*Math.sin(angle+Math.PI/10));
			canvas.fill();
		} else if(arrowDir == 'rightArrowHead'){
			canvas.moveTo( (lineTO.x), lineTO.y);
			canvas.lineTo( (lineTO.x) - headlen * Math.cos(angle-Math.PI/10), lineTO.y - headlen*Math.sin(angle-Math.PI/10));
			canvas.lineTo( (lineTO.x) - headlen * Math.cos(angle+Math.PI/10), lineTO.y - headlen*Math.sin(angle+Math.PI/10));
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
		
		if(isDashed) {
			canvas.dashedLine(moveTO.x, moveTO.y, midPoint.x, midPoint.y, lineTO.x, lineTO.y, [10,10]);	
			//canvas.dashedLine1(moveTO.x, moveTO.y, midPoint.x, midPoint.y, lineTO.x, lineTO.y, [10,10]);	
		} else {			
			canvas.moveTo(moveTO.x, moveTO.y);
			canvas.lineTo(lineTO.x, lineTO.y);
		}
		canvas.lineJoin = 'round';
		canvas.lineCap = 'round';

		canvas.closePath();	
		canvas.stroke();	
	};	
}

game.CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
if (game.CP && game.CP.lineTo){
	game.CP.dashedLine = function(x,y,x1,y1,x2,y2,dashArray){
	if (!dashArray) dashArray=[10,5];
	if (dashLength==0) dashLength = 0.001; // Hack for Safari
	var dashCount = dashArray.length;
	this.moveTo(x, y);
	var dx = (x2-x), dy = (y2-y);
	var slope = dy/dx;
	var distRemaining = Math.sqrt( dx*dx + dy*dy );
	var dashIndex=0, draw=true;
	while (distRemaining>=0.1){		
	  var dashLength = dashArray[dashIndex++%dashCount];
	  if (dashLength > distRemaining) dashLength = distRemaining;
	  var xStep = Math.sqrt( dashLength*dashLength / (1 + slope*slope) );
	  if (dx<0) xStep = -xStep;
	  x += xStep
	  y += slope*xStep;
	  this[draw ? 'lineTo' : 'moveTo'](x,y);
	  distRemaining -= dashLength;
	  if(x <= x1 && y <= y1) {
		draw = !draw;
	  } else {
		//this['lineTo'](x2, y2);
		//distRemaining = 0.01;
		draw = true;
	  }
	}
	}
	game.CP.dashedLine1 = function(x0, y0, x1, y1, x2, y2, pattern) {
		var length = Math.sqrt(Math.pow(x2 - x0, 2) + Math.pow(y2 - y0, 2));
		var vector = {
			x: (x2 - x0) / length,
			y: (y2 - y0) / length
		};
		var dist = 0;
		var i = 0;		
		pattern = pattern && pattern.length ? pattern : [4, 4];
		while (dist < length) {
			var dashLength = Math.min(pattern[i++ % pattern.length], length - dist);
			dist += dashLength;			
			(i % 2) && this.moveTo(x0, y0);			
			x0 += dashLength * vector.x;
			y0 += dashLength * vector.y;			
			(i % 2) && this.lineTo(x0, y0);
		}
		//this.moveTo(x1, y2);
		//this.lineTo(x2, y2);
	};
}

  
function intersection(x1, y1, x2, y2, x3, y3, x4, y4){
	var x12 = x1-x2;
	var x34 = x3-x4;
	var y12 = y1-y2;
	var y34 = y3-y4;
	
	var c = (x12 * y34)-(y12 * x34);
	var a = (x1*y2) - (y1*x2);
	var b = (x3*y4) - (y3*x4); 
	
	var x = ((a * x34) - (b * x12))/c;
	var y = ((a * y34) - (b * y12))/c;
	
	return [x,y];
}

raysVisibilityBtnHandler = function( flag ) {
	for(var i=0; i<5; i++) {
		if(!flag) {
			game.Rays[i].visible = false;
			game.__bannerDisplay(0, 0, 70, 10, true, game.getDirector());
		} else {
			game.Rays[i].visible = true;
		}
	}
}
/*
game.createTimerUpdate = function( _scene ) {
	var _director = game.getDirector();
	var timeCounter = 0;
	_scene.createTimer(
		0,
		Number.MAX_VALUE,
		function (scene_time, timer_time, timertask_instance) {}, // timeout
		function (scene_time, timer_time, timertask_instance) {   // tick
			if(timerFlag) {
				var checkLimit_ac_2 = oActorContainer_2.x;
				if( checkLimit_ac_2 > 0 && checkLimit_ac_2 < 333 ){
					oActorImg_2.x = oActorContainer_2.x;	
					game.onObjMove(game.actorImg[2], false);
				}
				if(currentDragActor == 'f1_c') {
					var checkLimit_ac_3 = oActorContainer_3.x;
					var checkLimit_ac_3_lowerLimit = 0;
					var checkLimit_ac_3_upperLimit = (_director.width/2)-35-(oActorContainer_3.width);
					//var ac_3_Diff = checkLimit_ac_3_upperLimit - checkLimit_ac_3_lowerLimit;
					var ac_3_Diff = 336;
					var index = Math.floor(( 40 / ac_3_Diff ) * ( checkLimit_ac_3 ));
					if( checkLimit_ac_3 > checkLimit_ac_3_lowerLimit && checkLimit_ac_3 < checkLimit_ac_3_upperLimit){
						oActorImg_0.setAnimationImageIndex([40 - index]);
						game.actorImg[3].x = oActorContainer_3.x;
						var distOrigin = (_director.width/2) - (oActorContainer_3.x+9);
						oActorImg_4.x = (_director.width/2)+(distOrigin);
						game.onObjMove(game.actorImg[2], false);
					}				
				}
				if(currentDragActor == 'f2_c') {
					var checkLimit_ac_4 = oActorContainer_4.x;
					var checkLimit_ac_4_lowerLimit = (_director.width/2)+33+(oActorContainer_4.width/2);
					var checkLimit_ac_4_upperLimit = (_director.width -(oActorContainer_4.width));
					//var ac_4_Diff = checkLimit_ac_4_upperLimit - checkLimit_ac_4_lowerLimit;
					var ac_4_Diff = 336;
					var index = Math.floor(( 40 / ac_4_Diff ) * ( checkLimit_ac_4_lowerLimit - checkLimit_ac_4 ));
					if( checkLimit_ac_4 > checkLimit_ac_4_lowerLimit && checkLimit_ac_4 < checkLimit_ac_4_upperLimit ){
						index = Math.abs(index);
						oActorImg_0.setAnimationImageIndex([index]);
						oActorImg_4.x = oActorContainer_4.x;
						var distOrigin = oActorContainer_4.x - (_director.width/2);
						oActorImg_3.x = (_director.width/2)-(distOrigin+9);
						game.onObjMove(game.actorImg[2], false);
					}
				}
			}
		},
		function (scene_time, timer_time, timertask_instance) {} // cancel
	)
};
*/


game.mouseMoveHandler = function(mouseEvent) {	
	currentDragActor = mouseEvent.source.id;
	
	if(mouseEvent.sourceEvent.type == "mousedown") {
		var _scene = game.getScene();
		//timerFlag = true;
		//game.createTimerUpdate( _scene );			
	}
	if(mouseEvent.sourceEvent.type == "mouseup") {
		//timerFlag = false;
		game.actorContainer[2].x = game.actorImg[2].x;
		game.actorContainer[2].y = game.actorImg[2].y;
		
		game.actorContainer[3].x = game.actorImg[3].x;
		game.actorContainer[3].y = game.actorImg[3].y;
		
		game.actorContainer[4].x = game.actorImg[4].x;
		game.actorContainer[4].y = game.actorImg[4].y;
	} else {
		game.actorContainer[2].x = game.actorImg[2].x;
		game.actorContainer[2].y = game.actorImg[2].y;
		game.actorContainer[2].__d_ax = -1;
		game.actorContainer[2].__d_ay = -1;
		
		game.actorContainer[3].x = game.actorImg[3].x;
		game.actorContainer[3].y = game.actorImg[3].y;
		game.actorContainer[3].__d_ax = -1;
		game.actorContainer[3].__d_ay = -1;
		
		game.actorContainer[4].x = game.actorImg[4].x;
		game.actorContainer[4].y = game.actorImg[4].y;
		game.actorContainer[4].__d_ax = -1;
		game.actorContainer[4].__d_ay = -1;
	}
}

	//=======================================================
	// Extend actor container's enable drag and use it as userDrag 
	// which draws the rays on every movement
	//=======================================================
	CAAT.Foundation.ActorContainer.extend(
		{
			paint : function(director,time) {
				CAAT.exemplarr.superclass.paint.call(this,director,time);
			},
			
			defaultXPos:-1,
			defaultYPos:-1,
			reSetPosition: function(){
				this.setRotationAnchored(0, 0, 0 )								
				this.setLocation(this.defaultXPos, this.defaultYPos);
				return this;
			},
			setDefaultPos: function(x, y){
				this.setLocation(x, y);
				this.defaultXPos = x;
				this.defaultYPos = y;
				return this;
			},

			userDrag: function () {
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

					if(!this.snap){
						this.reSetPosition();
					}
					
					if(callback1){
						callback1(this, holder);
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
					
					var _director = game.getDirector();
					
					var checkLimit_ac_2 = game.actorContainer[2].x;
					if( checkLimit_ac_2 > 0 && checkLimit_ac_2 < 333 ){
						game.actorImg[2].x = game.actorContainer[2].x;	
						game.onObjMove(game.actorImg[2], false);
					}
					if(currentDragActor == 'f1_c') {
						var checkLimit_ac_3 = game.actorContainer[3].x;
						var checkLimit_ac_3_lowerLimit = 0;
						var checkLimit_ac_3_upperLimit = (_director.width/2)-35-(game.actorContainer[3].width);
						checkLimit_ac_3_upperLimit = checkLimit_ac_3_upperLimit + 2;
						//var ac_3_Diff = checkLimit_ac_3_upperLimit - checkLimit_ac_3_lowerLimit;
						var ac_3_Diff = 336;
						var index = Math.floor(( 40 / ac_3_Diff ) * ( checkLimit_ac_3 ));
						if( checkLimit_ac_3 > checkLimit_ac_3_lowerLimit && checkLimit_ac_3 < checkLimit_ac_3_upperLimit){
							game.actorImg[0].setAnimationImageIndex([40 - index]);
							game.actorImg[3].x = game.actorContainer[3].x;
							var distOrigin = (_director.width/2) - (game.actorContainer[3].x+9);
							game.actorImg[4].x = (_director.width/2)+(distOrigin);
							game.onObjMove(game.actorImg[2], false);
						}				
					}
					if(currentDragActor == 'f2_c') {
						var checkLimit_ac_4 = game.actorContainer[4].x;
						var checkLimit_ac_4_lowerLimit = (_director.width/2)+33+(game.actorContainer[4].width/2);
						var checkLimit_ac_4_upperLimit = (_director.width -(game.actorContainer[4].width));
						//var ac_4_Diff = checkLimit_ac_4_upperLimit - checkLimit_ac_4_lowerLimit;
						checkLimit_ac_4_lowerLimit = checkLimit_ac_4_lowerLimit - 2;
						var ac_4_Diff = 336;
						var index = Math.floor(( 40 / ac_4_Diff ) * ( checkLimit_ac_4_lowerLimit - checkLimit_ac_4 ));
						if( checkLimit_ac_4 > checkLimit_ac_4_lowerLimit && checkLimit_ac_4 < checkLimit_ac_4_upperLimit ){
							index = Math.abs(index);
							game.actorImg[0].setAnimationImageIndex([index]);
							game.actorImg[4].x = game.actorContainer[4].x;
							var distOrigin = game.actorContainer[4].x - (_director.width/2);
							game.actorImg[3].x = (_director.width/2)-(distOrigin+9);
							game.onObjMove(game.actorImg[2], false);
						}
					}
					
				};

				return this;
			},
		},
		null,
		"CAAT.exemplarr"
	);

})();