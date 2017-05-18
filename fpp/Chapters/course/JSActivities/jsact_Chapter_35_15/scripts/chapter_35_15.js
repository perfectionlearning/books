//=======================================================
//	Game Logic
//=======================================================
(function(){
	//=======================================================
	// On moving the object penguin
	//=======================================================
	game.onObjMove = function( actor, flag) {
		var leftPenguinLeft = null, leftPenguinTop = null, leftPenguinWidth = null, leftPenguinHeight = null, leftPenguinOriHeight = 104;
		var arcRad = 281;
		var arcStrokeWidth = 3;
		var centerOfCurveX = 683;
		var centerOfCurveY = 250;
		var dWidth = null, dHeight = null;
		var _director = game.getDirector();
		dHeight = _director.height;
		dWidth = _director.width;	
		leftPenguinLeft = actor.x;
		leftPenguinTop = actor.y;
		leftPenguinWidth = actor.width;
		leftPenguinHeight = actor.height;
			
		var penquinEyeX = leftPenguinLeft + (leftPenguinWidth/2);
		var penquinEyeY = 201;
			
		var m = (centerOfCurveY - penquinEyeY)/(centerOfCurveX - penquinEyeX);
		var c = penquinEyeY - (penquinEyeX * m);
		
		var violetLineX1 = 35;
		var violetLineY1 = 70;
		var violetLineX2 = dWidth;
		var violetLineY2 = 329;
		var violetLineX3 = (dWidth - (arcRad + arcStrokeWidth + (dWidth - centerOfCurveX)));
		var violetLineY3 = 202;
		
		var greenLineX1 = 35;
		var greenLineY1 = ( m * greenLineX1 ) + c;
		var greenLineX2 = dWidth;
		var greenLineY2 = ( m * greenLineX2 ) + c;
		var greenLineX3 = (dWidth - (arcRad + arcStrokeWidth + (dWidth - centerOfCurveX)));
		var greenLineY3 = ( m * greenLineX3 ) + c;
		
		var intersectionPoints = intersection(violetLineX1, violetLineY1, violetLineX2, violetLineY2, greenLineX1, greenLineY1, greenLineX2, greenLineY2);
		var orangeLineX1 = 35;
		var orangeLineY1 = intersectionPoints[1];
		var orangeLineX2 = dWidth;
		var orangeLineY2 = intersectionPoints[1];
		var orangeLineX3 = (dWidth - (arcRad + arcStrokeWidth + (dWidth - centerOfCurveX)));
		var orangeLineY3 = intersectionPoints[1];
		
		//call parameters order
		//id, moveTO, lineTo, isDashed, strokeColor, lineWidth, which side to draw arrow head, one more arrow head required in middle of the line?
			
		//violet - two parts
		drawPaths( game.Rays[0], {x:violetLineX1, y:violetLineY1}, {x:violetLineX3, y:violetLineY3}, {x:violetLineX2, y:violetLineY2}, true, '#9966ff', 1, 'leftArrowHead', false);
			
		//green - two parts
		drawPaths( game.Rays[1], {x:greenLineX1, y:greenLineY1}, {x:greenLineX3, y:greenLineY3}, {x:greenLineX2, y:greenLineY2}, true, '#00cc00', 1, 'leftArrowHead', true);
		
		//orange - two parts
		drawPaths( game.Rays[2], {x:orangeLineX1, y:orangeLineY1}, {x:orangeLineX3, y:orangeLineY3}, {x:orangeLineX2, y:orangeLineY2}, true, '#ff6600', 1, 'leftArrowHead', false);
			
		//orange single
		drawPaths( game.Rays[3], {x: (leftPenguinLeft + leftPenguinWidth - 10), y:202}, {x:0, y:0}, {x:orangeLineX3, y:orangeLineY3}, false, '#ff6600', 1, 'rightArrowHead', false);
		
		//violet single
		drawPaths( game.Rays[4], {x: (leftPenguinLeft + leftPenguinWidth - 10), y:202}, {x:0, y:0}, {x:violetLineX3, y:violetLineY3}, false, '#9966ff', 1, 'rightArrowHead', false);
		
		//reflecting penguin scale
		var penguinHeightAllowed = centerOfCurveY - intersectionPoints[1];
		var scaleFactorWidth = penguinHeightAllowed / leftPenguinOriHeight;
		var scaleFactorHeight = (penguinHeightAllowed+3) / leftPenguinOriHeight;
		var penguinWidthFromHeight = (60/leftPenguinOriHeight) * penguinHeightAllowed;
		var mirrorPenguinLeft = _director.width / 2;
		var mirrorPenguinTop = (( _director.height / 2 ) - ( game.actorContainer[1].height * scaleFactorHeight ));
		
		game.actorImg[1]
			.setScale( (scaleFactorWidth), (scaleFactorHeight))
			.setLocation( (intersectionPoints[0] - (penguinWidthFromHeight/2) - 5), Math.floor((intersectionPoints[1]))-3)
			.setBounds( 	
				intersectionPoints[0] - (penguinWidthFromHeight/2) - 5, 
				intersectionPoints[1] - Math.ceil((penguinWidthFromHeight/2)) - 3, 
				penguinWidthFromHeight, 
				penguinHeightAllowed
			);
	}
	//=======================================================
	// Lets draw the rays with arrow heads
	//=======================================================
	function drawPaths( obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
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
				canvas.moveTo( (lineTO.x - 5), lineTO.y);
				canvas.lineTo( (lineTO.x - 5) - headlen * Math.cos(angle-Math.PI/10), lineTO.y - headlen*Math.sin(angle-Math.PI/10));
				canvas.lineTo( (lineTO.x - 5) - headlen * Math.cos(angle+Math.PI/10), lineTO.y - headlen*Math.sin(angle+Math.PI/10));
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
	//=======================================================
	// Lets extend functionality to draw solid/dashed lines
	//=======================================================
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
		  if(x >= x1 && y >= y1) {
			draw = !draw;
		  }
		}
	  }
	}
	//=======================================================
	// Find the intersection between two lines
	//=======================================================
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
	//=======================================================
	// Show or Hide the rays
	//=======================================================
	game.raysVisibilityBtnHandler = function ( flag ) {
		for(var i=0; i<5; i++) {
			if(!flag) {
				game.Rays[i].visible = false;
				game.__bannerDisplay(0, 0, 70, 10, true, game.getDirector());
			} else {
				game.Rays[i].visible = true;
			}
		}
	}		
	//=======================================================
	// On mouseup from the penguin object
	//=======================================================
	game.mouseMoveHandler = function(mouseEvent) {
		if(mouseEvent.sourceEvent.type == "mouseup") {
			game.actorContainer[0].x = game.actorImg[0].x;
			game.actorContainer[0].y = game.actorImg[0].y;
			game.actorContainer[0].__d_ax = -1;
			game.actorContainer[0].__d_ay = -1;
		} else {
			game.actorContainer[0].x = game.actorImg[0].x;
			game.actorContainer[0].y = game.actorImg[0].y;
			game.actorContainer[0].__d_ax = -1;
			game.actorContainer[0].__d_ay = -1;
		}
	}
	//=======================================================
	// Avoid `console` errors in browsers that lack a console.
	// IE throws exception when the console.log is not found on load and is called by the script
	// IE only executes such scripts when the debug panel
	game.fixIEConsoleBug = function() {
		if (!(window.console && console.log)) {
		  (function() {
			var noop = function() {};
			var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
			var length = methods.length;
			var console = window.console = {};
			while (length--) {
				console[methods[length]] = noop;
			}
		  }());
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
					
					var checkLimit = game.actorContainer[0].x;
					if( checkLimit > 0 && checkLimit < 354 ){
						game.actorImg[0].x = game.actorContainer[0].x;	
						game.onObjMove(game.actorImg[0], false);
					}
					
				};
				return this;
			},
		},
		null,
		"CAAT.exemplarr"
	);	
})()