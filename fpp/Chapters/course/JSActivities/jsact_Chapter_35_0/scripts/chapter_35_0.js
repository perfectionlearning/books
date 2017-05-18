//
//	Game Logic
//
(function(){
	game.onObjMove = function( actor, flag) {	
		var leftPenguinLeft = null, leftPenguinTop = null, leftPenguinWidth = null, leftPenguinHeight = null, leftPenguinOriHeight = 104, leftPenguinOriWidth = 60,
			arcRad = 380,
			arcStrokeWidth = 4,
			centerOfCurveX = 120,
			centerOfCurveY = 250,
			focalPtX = 310,
			focalPtY = 250;
		
		var penguinEyeToHeightRatio = 104 / 98;
		var penguinEyeToWidthRatio = 22 / 60; 
		
		var dHeight = game._director.height;
		var dWidth = game._director.width;	
			
		//leftPenguinLeft = Math.round(actor.x);
		leftPenguinLeft = Math.round(actor.x);
		leftPenguinTop = actor.y;
		leftPenguinWidth = actor.width;
		leftPenguinHeight = actor.height;
				
		var penquinEyeX = leftPenguinLeft + (leftPenguinWidth/2);
		var penquinEyeY = 201;
		
		var m = (centerOfCurveY - penquinEyeY)/(centerOfCurveX - penquinEyeX);
		var c = penquinEyeY - (penquinEyeX * m);
		
		/////////////////////////////////////////////////////
		//////////////Violet line static line////////////////
		var violetLineX1 = 25;
		var violetLineY1 = 326;
		var violetLineX2 = dWidth;
		//var violetLineY2 = 130;	
		var violetLineY2 = 128;	
		var intersecFocalCircle1 = intersectionCircele(violetLineX1, violetLineY1, violetLineX2, violetLineY2, centerOfCurveX, centerOfCurveY);		
		var violetLineX3 = intersecFocalCircle1[0];
		var violetLineY3 = intersecFocalCircle1[1];
		//violet - two parts
		if(penquinEyeX > focalPtX){
			drawPaths( game.raysArr[0], {x:violetLineX1, y:violetLineY1}, {x:violetLineX3, y:violetLineY3}, {x:violetLineX2, y:violetLineY2}, true, '#9966ff', 1, 'leftArrowHead', false);		
		}else{
			drawPaths( game.raysArr[0], {x:violetLineX1, y:violetLineY1}, {x:0, y:0}, {x:violetLineX3, y:violetLineY3}, true, '#9966ff', 1, 'leftArrowHead', false);
		}
		/////////////////////////////////////////////////////
		/////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////
		//////////////Green line ///////////////////////////
		var greenLineX1 = 25;
		var greenLineY1 = ( m * greenLineX1 ) + c;
		var greenLineX2 = dWidth;
		var greenLineY2 = ( m * greenLineX2 ) + c;	
		var intersectCurvatureCircle = intersectionCircele(penquinEyeX, penquinEyeY, greenLineX1, greenLineY1, centerOfCurveX, centerOfCurveY);
		var greenLineX3 = Math.sqrt(Math.pow(arcRad, 2) - Math.pow((intersectCurvatureCircle[1] - centerOfCurveY), 2)) + centerOfCurveX;	
		var greenLineY3 = ( m * greenLineX3 ) + c;
		
		//green - two parts
		if(penquinEyeX > focalPtX){			
			drawPaths( game.raysArr[1], {x:greenLineX1, y:greenLineY1}, {x:greenLineX3, y:greenLineY3}, {x:greenLineX2, y:greenLineY2}, true, '#00cc00', 1, 'leftArrowHead', true);	
		}else{			
			drawPaths( game.raysArr[1], {x:greenLineX1, y:greenLineY1}, {x:greenLineX3, y:greenLineY3}, {x:greenLineX3, y:greenLineY3}, true, '#00cc00', 1, 'leftArrowHead', true);	
		}
		/////////////////////////////////////////////////////
		/////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////
		//////////////orange line///////////////////////////
		var inersectFocalCircle = intersectionCircele(penquinEyeX, penquinEyeY, focalPtX, focalPtY, centerOfCurveX, centerOfCurveY);
		var orangeOnePartX1 = focalPtX;
		var orangeOnePartY1 = focalPtY;
		var orangeOnePartX2 = inersectFocalCircle[0];
		var orangeOnePartY2 = inersectFocalCircle[1];
		var orangeOnePartX3 = 0;
		var orangeOnePartY3 = 0;
		//orange one part
		if(penquinEyeX > focalPtX){
			drawPaths( game.raysArr[2], {x:orangeOnePartX1, y:orangeOnePartY1}, {x:orangeOnePartX3, y:orangeOnePartY3}, {x:orangeOnePartX2, y:orangeOnePartY2}, false, '#ff6600', 1, 'rightArrowHead', false);
		}else{
			drawPaths( game.raysArr[2], {x:penquinEyeX, y:penquinEyeY}, {x:orangeOnePartX3, y:orangeOnePartY3}, {x:orangeOnePartX2, y:orangeOnePartY2}, false, '#ff6600', 1, 'rightArrowHead', false);
		}
		/////////////////////////////////////////////////////
		/////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////
		//////////////orange line///////////////////////////
		var orangeLineX1 = 25;
		var orangeLineY1 = inersectFocalCircle[1];
		var orangeLineX2 = dWidth;
		var orangeLineY2 = inersectFocalCircle[1];		
		var orangeLineX3 = inersectFocalCircle[0];
		var orangeLineY3 = inersectFocalCircle[1];	
		//orange - two parts
		if(penquinEyeX > focalPtX){
			drawPaths( game.raysArr[3], {x:orangeLineX1, y:orangeLineY1}, {x:orangeLineX3, y:orangeLineY3}, {x:orangeLineX2, y:orangeLineY2}, true, '#ff6600', 1, 'leftArrowHead', false);	
		}else{
			drawPaths( game.raysArr[3], {x:orangeLineX1, y:orangeLineY1}, {x:orangeLineX3, y:orangeLineY3}, {x:orangeLineX3, y:orangeLineY3}, true, '#ff6600', 1, 'leftArrowHead', false);	
		}
		/////////////////////////////////////////////////////
		/////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////
		//////////////violet straight line///////////////////
		var violetOnePartX1 = penquinEyeX;
		var violetOnePartY1 = penquinEyeY;
		var violetOnePartX2 = violetLineX3;
		var violetOnePartY2 = violetLineY3;
		//violet single
		drawPaths( game.raysArr[4], {x:violetOnePartX1, y:violetOnePartY1}, {x:0, y:0}, {x:violetOnePartX2, y:violetOnePartY2}, false, '#9966ff', 1, 'rightArrowHead', false);
		/////////////////////////////////////////////////////
		/////////////////////////////////////////////////////
		
		//reflecting penguin scale
		//var intersectionPoints = intersection(violetLineX1, violetLineY1, violetLineX2, violetLineY2, greenLineX1, greenLineY1, greenLineX2, greenLineY2);
		var intersectionPoints = intersection(orangeLineX1, orangeLineY1, orangeLineX2, orangeLineY2, greenLineX1, greenLineY1, greenLineX2, greenLineY2);	
		
		var penguinHeightAllowed = centerOfCurveY - intersectionPoints[1];
		penguinHeightAllowed = penguinEyeToHeightRatio * penguinHeightAllowed; 
		
		var scaleFactorWidth = penguinHeightAllowed / leftPenguinOriHeight;
		var scaleFactorHeight = scaleFactorWidth;	
		var penguinWidthAllowed1 = (leftPenguinOriWidth/leftPenguinOriHeight) * penguinHeightAllowed;
		var penguinWidthAllowed =  penguinEyeToWidthRatio * penguinWidthAllowed1; 
		
		game.oActorImg_1
			.setScaleAnchor(0,0)
			.setScale(scaleFactorWidth, scaleFactorHeight);
			
		if(penquinEyeX > focalPtX){
			game.oActorImg_1		
				//.setLocation((intersectionPoints[0] - penguinWidthAllowed), focalPtY - penguinHeightAllowed )
				.setLocation((intersectionPoints[0]), focalPtY - penguinHeightAllowed )
				.setImageTransformation(CAAT.Foundation.SpriteImage.TR_FIXED_TO_SIZE);			
		}else{
			game.oActorImg_1	
			//Px fix:2	
				.setLocation((intersectionPoints[0] - (penguinWidthAllowed1 - penguinWidthAllowed)+2), focalPtY - (1 * penguinHeightAllowed)-1)
				.setImageTransformation(CAAT.Foundation.SpriteImage.TR_FLIP_HORIZONTAL);				
		}
	}
	
	function intersectionCircele(x1, y1, x2, y2, h, k){		
		///////////////////////////////////////////////////////////////
		/////////// Intersection of line and curve ////////////////////	
		var mNew = (y2 - y1) / (x2 - x1);
		var cNew = y2 - (mNew * x2);
		var h = h;
		var k = k;
		//Old 380
		var r = 380;
		var d = cNew - k;
		
		var A = 1 + Math.pow(mNew,2);
		var B = 2 * ( (mNew * d) - h );
		var C = Math.pow(h,2) + Math.pow(d,2) - Math.pow(r,2);
		
		var InterX = (-B   +   Math.sqrt(Math.pow(B,2) - (4 * A * C))  ) / (2 * A); 
		var InterY = (mNew * InterX) + cNew;
		
		return [InterX, InterY];
		///////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////
	}
	
	function drawPaths( id, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
		var headlen = 15;	// length of head in pixels
		id.paint= function(_director, time) {	
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
				//canvas.beginPath();
				canvas.moveTo( (midPoint.x), midPoint.y);
				canvas.lineTo( (midPoint.x) - headlen * Math.cos(angle-Math.PI/10), midPoint.y - headlen*Math.sin(angle-Math.PI/10));
				canvas.lineTo( (midPoint.x) - headlen * Math.cos(angle+Math.PI/10), midPoint.y - headlen*Math.sin(angle+Math.PI/10));
				//canvas.closePath();
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
	
	var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
	if (CP && CP.lineTo){
	  CP.dashedLine = function(x,y,x1,y1,x2,y2,dashArray){
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
		  if(x >= x1 && y <= y1) {
			draw = !draw;
		  }
		}
	  }
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
	
	game.raysVisibilityBtnHandler = function( flag ) {
		if(!flag){
			game.__bannerDisplay(0, 0, 50, 0, true);
		}
		for(var i=0; i<=4; i++) {
			if(!flag) {
				game.raysArr[i].visible = false;
			} else {
				game.raysArr[i].visible = true;
			}
		}
	}	
	
	game.mouseMoveHandler = function(mouseEvent) {
		if(mouseEvent.sourceEvent.type == "mouseup") {
			game.oActorContainer_0.x = game.oActorImg_0.x;
			game.oActorContainer_0.y = game.oActorImg_0.y;
		} else {
			game.oActorContainer_0.x = game.oActorImg_0.x;
			game.oActorContainer_0.y = game.oActorImg_0.y;
			game.oActorContainer_0.__d_ax = -1;
			game.oActorContainer_0.__d_ay = -1;
			//CAAT.setCursor('move');
			CAAT.setCursor('pointer');
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
					//CAAT.setCursor('move');
					CAAT.setCursor('pointer');
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
					
					var checkLimit = game.oActorContainer_0.x;
					if( checkLimit > 0 && checkLimit < 450 ){
						game.oActorImg_0.x = game.oActorContainer_0.x;	
						game.onObjMove(game.oActorImg_0, false);
					}
					
				};

				return this;
			},
		},
		null,
		"CAAT.exemplarr"
	);
	
})();