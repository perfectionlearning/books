/////////////////////////////////////////
////////////// Game Logic ///////////////
/////////////////////////////////////////
(function() {
	var chargeColor = '#9900cc';
	var testChargePoint = null, chargeTxt = null, chargeTxt_pow = null, chargeTxt_lhs = null, chargeTxt_unit = null;
	var isDrag = false;	
	var posChargeCenterX = null, posChargeCenterY = null, negChargeCenterX = null, negChargeCenterY = null;
	
	var posChargeQ = 90 * Math.pow( 10, -9 );	//2q charge <=> +90nC
	var negChargeQ = -45 * Math.pow( 10, -9 );	//-1q charge <=> -45nC
	var testChargeQ = 1 * Math.pow( 10, -9 );
	var K = 8.99 * Math.pow( 10, 9 );
	//190px = 10 cm //1 meter = 100 cm = 1900px
	var onePxInMeters = (1/1900);
	//var oneNInPx = 500000;
	var oneNInPx = 520000;
	//=======================================================
	//on clicking reset button
	//=======================================================
	game.resetBtn_click = function() {
		game.__bannerDisplay(0, 0, 10, 70, false);
		//hide the electric field display
		game.eValueContainer.visible = false;
		//clear the vector drawn
		drawPaths(game.mainActorContainerTouchLayer, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}, false, chargeColor, 1, 'rightArrowHead', false);
		//reset the test charge position
		game.testCharge.setLocation(game.testChgX, game.testChgY);
		game.testCharge1.setLocation(game.testChgX, game.testChgY); 
	}
	//=======================================================
	//What should be done on mousedrag
	//=======================================================
	game.onMouseDrag = function( obj ) {
		positionTestChargePoint( obj );
	}
	//=======================================================
	//What should be done on mouseup
	//=======================================================
	game.onMouseUp = function( obj ) {
		//when the test charge is dropped out the window the reset the test charge
		if(obj.x < 0 || ( obj.x > game.getDirector().width ) || obj.y < 0 || obj.y > 440) {
			game.eValueContainer.visible = false;
			//clear the vector drawn
			drawPaths(game.mainActorContainerTouchLayer, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}, false, chargeColor, 1, 'rightArrowHead', false);
			//reset the test charge position
			game.testCharge.setLocation(game.testChgX, game.testChgY);
			game.testCharge1.setLocation(game.testChgX, game.testChgY); 
		}
	}
	//=======================================================
	//Let's position the electric field vector 
	//=======================================================
	function positionTestChargePoint( obj ) {
		game.testCharge1.x = game.testCharge.x;
		game.testCharge1.y = game.testCharge.y;
		if((obj.y) > 440) {
			game.eValueContainer.visible = false;
			drawPaths(game.mainActorContainerTouchLayer, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}, false, chargeColor, 1, 'rightArrowHead', false);
			return false;
		}
		game.eValueContainer.visible = true;
		testChargePoint.x = obj.x + (obj.width/2) - (testChargePoint.width/2);
		testChargePoint.y = game.testCharge.y + (game.testCharge.height/2) - (testChargePoint.height/2);
		var testChargePointCenterX = obj.x + (obj.width/2);
		var testChargePointCenterY = obj.y + (obj.height/2);
		//find values with respect to positive charge
		var dy_pos = testChargePointCenterY - posChargeCenterY;
		var dx_pos = testChargePointCenterX - posChargeCenterX;
		var angle_rad_pos = Math.atan2( dy_pos, dx_pos );
		var angle_deg_pos = angle_rad_pos * ( 180 / Math.PI );		
		var dPos = dist(posChargeCenterX, posChargeCenterY, testChargePointCenterX, testChargePointCenterY)[0];
		var qPos = posChargeQ;
		var fValuePos = calculationElectricField( dPos, qPos ); //returns [mantissa, exponent, magnitudeOfForce, e, f];
		//find values with respect to negative charge
		var dy_neg = testChargePointCenterY - negChargeCenterY;
		var dx_neg = testChargePointCenterX - negChargeCenterX;
		var angle_rad_neg = Math.atan2( dy_neg, dx_neg );
		var angle_deg_neg = angle_rad_neg * ( 180 / Math.PI );		
		var dNeg = dist(negChargeCenterX, negChargeCenterY, testChargePointCenterX, testChargePointCenterY)[0];
		var qNeg = negChargeQ;
		var fValueNeg = calculationElectricField( dNeg , qNeg ); //returns [mantissa, exponent, magnitudeOfForce, e, f];
		//calculate the vertical and horizontal components of the force vector - positive charge
		var vForcePosCharge = fValuePos[4] * Math.sin(angle_rad_pos);
		var hForcePosCharge = fValuePos[4] * Math.cos(angle_rad_pos);
		//calculate the vertical and horizontal components of the force vector - negative charge
		var vForceNegCharge = fValueNeg[4] * Math.sin(angle_rad_neg);
		var hForceNegCharge = fValueNeg[4] * Math.cos(angle_rad_neg);
		//calculate the net vertical force
		var netVForce = vForcePosCharge + vForceNegCharge;
		//calculate the net horizontal force
        var netHForce = hForcePosCharge + hForceNegCharge;
		//calculate the net force
		var netForce = Math.sqrt(Math.pow(netVForce, 2) + Math.pow(netHForce, 2));
		//net force as exponential form
		var netFInExp = netForce.toExponential();
		var netMantissa = netFInExp.split('e')[0];
		var netExponent = netFInExp.split('e')[1];
		//force magnitude to draw the vector
		var netMag = netForce * oneNInPx;	
		//at which angle the vector be drawn
		var angle_deg = 180 / Math.PI * Math.atan2( netVForce, netHForce );	
		//magnitude of the force vector
		var vectMagnitude = Math.min(netMag, 1000);
		var fieldStrength = makeTangent(testChargePointCenterX, testChargePointCenterY, vectMagnitude, angle_deg);
		if(netMantissa === 'Infinity' || isNaN(netMantissa) || netExponent >= 0) {
			drawPaths(game.mainActorContainerTouchLayer, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}, false, chargeColor, 1, 'rightArrowHead', false);
		} else {
			drawPaths(game.mainActorContainerTouchLayer, {x:testChargePointCenterX, y:testChargePointCenterY}, {x:0, y:0}, {x:fieldStrength[0], y:fieldStrength[1]}, false, chargeColor, 1, 'rightArrowHead', false);				
		}
		//align and update the electric field value for display
		if(( game.testCharge.x + game.testCharge.width ) > game.getDirector().width - 110) {
			game.eValueContainer.x = game.testCharge.x - game.eValueContainer.width - 10;
		} else {
			game.eValueContainer.x = ( game.testCharge.x + game.testCharge.width ) + 10;
		}
		if(( game.testCharge.y + game.testCharge.height ) > 400) {
			game.eValueContainer.y = game.testCharge.y - game.eValueContainer.height - 10;
		} else {
			game.eValueContainer.y = ( game.testCharge.y + game.testCharge.height ) + 10;	
		}
		chargeTxt.setLocation(parseFloat(chargeTxt_lhs.x + chargeTxt_lhs.width) + 5, 5);
		//at center of the charge the electric field become infinite
		if(netMantissa === 'Infinity' || isNaN(netMantissa) || netExponent >= 0) {
			chargeTxt.setText(' = '+String.fromCharCode(8734));	
		} else {
			chargeTxt.setText(' = ' + parseFloat(Math.abs(netMantissa)).toFixed(2) + ' ' + String.fromCharCode(215) + ' 10' );	
		}		
		chargeTxt_pow.setLocation(parseFloat(chargeTxt.x + chargeTxt.width)-3, 3);
		var formatExpInDisplay = (netExponent > 0) ? (netExponent).split('+')[1] : netExponent;
		if(netExponent === undefined || netExponent >= 0) {
			//when the exponent becomes undefined at the center of the charge
			chargeTxt_pow.setText( '' );		
		} else {
			//show the exponent
			chargeTxt_pow.setText( ' '+formatExpInDisplay );		
		}
		chargeTxt_unit.setLocation(parseFloat(chargeTxt_pow.x + chargeTxt_pow.width) + 2, 5);
		game.eValueContainer.setSize(chargeTxt_lhs.width + chargeTxt.width + chargeTxt_pow.width + chargeTxt_unit.width + 14, chargeTxt.height + 8);
	}	
	//=======================================================
	// Lets build the electric field value display text
	//=======================================================
	game.buildElectricField = function( parent ) {
		game.mainActors[2].setAnimationImageIndex([1]);
		game.mainActors[3].setAnimationImageIndex([0]);		
		game.eValueContainer = new CAAT.Foundation.ActorContainer()
									.setFillStyle('white')
									.setClip(true);		
		game.eValueContainer.visible = false;
		//This displays the F character
		chargeTxt_lhs = game.__addTextOnImage( chargeColor, 'F', 'italic bold 14px Arial', 'left', game.getDirector() );	
		//This displays the mantissa part of the value
		chargeTxt = game.__addTextOnImage( chargeColor, 'x', 'bold 14px Arial', 'left', game.getDirector() );
		chargeTxt.setFillStyle('white');
		//This displays the exponent part of the value
		chargeTxt_pow = game.__addTextOnImage( chargeColor, '3', '11px Arial', 'left', game.getDirector() );
		chargeTxt_unit = game.__addTextOnImage( chargeColor, ' N', 'bold 14px Arial', 'left', game.getDirector() );
		chargeTxt_lhs.setLocation(5, 5);
		chargeTxt.x = chargeTxt_lhs.x + chargeTxt_lhs.width + 5;
		chargeTxt_pow.x = chargeTxt.x + chargeTxt.width + 5;
		chargeTxt_unit.x = chargeTxt_pow.x + chargeTxt_pow.width + 5;
		game.eValueContainer.addChild(chargeTxt_lhs);
		game.eValueContainer.addChild(chargeTxt);
		game.eValueContainer.addChild(chargeTxt_pow);
		game.eValueContainer.addChild(chargeTxt_unit);
		testChargePoint =  new CAAT.Foundation.UI.ShapeActor()
					.setLocation(500, 100)
					.setFillStyle( chargeColor )
					.setAlpha(1.0)
					.setSize(1, 1);
		parent.addChild( testChargePoint );
		parent.addChild( game.eValueContainer );
		//position of the positive and negative charges
		posChargeCenterX = game.mainEleImg[2][1] + 15;
		posChargeCenterY = game.mainEleImg[2][2] + 15;
		negChargeCenterX = game.mainEleImg[3][1] + 15;
		negChargeCenterY = game.mainEleImg[3][2] + 15;
		
		//game.midPoint.setLocation(negChargeCenterX, negChargeCenterY);
	}	
	//=======================================================
	// Make tangent path for electric field
	//=======================================================
	function makeTangent(cx,cy,r,a){
		ang=(Math.PI/180)*a;
		var x1 = cx + (r * Math.cos(ang));
		var y1 = cy + (r * Math.sin(ang));	
		return [x1,y1];
	}
	//=======================================================
	// Calculate electric field
	//=======================================================
	function calculationElectricField( d, q ) {
		var d_inMeters = d * onePxInMeters;
		var e = ( K * q ) / Math.pow(d_inMeters, 2);
		var f = e * testChargeQ;
		var magnitudeOfForce = (f * oneNInPx);		
		var fInExp = f.toExponential();
		var mantissa = fInExp.split('e')[0];
		var exponent = fInExp.split('e')[1];
		return [mantissa, exponent, magnitudeOfForce, e, f];
	}
	//Function that finds the distance between two points represented as a line segment. 
	//Distance between P and Q should be sent as px1, py1, px2, py2. P and Q should have its own .x and .y properties
	function dist(x1, y1, x2, y2){
		var magnitude = Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2));
		var direction = Math.atan2(y2 - y1, x2 - x1);
        return [magnitude, direction];
	}
	//=======================================================
	// Lets draw the rays with arrow heads
	//=======================================================
	function drawPaths( obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
		//console.log([obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq]);
		var headlen = 18;	// length of head in pixels
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
		
			canvas.lineJoin = 'round';
			canvas.lineCap = 'round';
			canvas.closePath();	
			canvas.stroke();	
		};	
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
})();