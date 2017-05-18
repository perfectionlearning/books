/////////////////////////////////////////
// Game Logic
/////////////////////////////////////////
(function() {
	var chargeColor = '#6600ff';
	var chargePoint = null, chargeTxt = null, chargeTxt_pow = null, chargeTxt_lhs = null, chargeTxt_unit = null, clientX = null, clientY = null;
	var isDrag = false;
	game.chargeValue = 1, game.chargeValueStep = 1, game.chargeValueMax = 3, game.chargeValueMin = -3;
	var chargeCenterX = null;
	var chargeCenterY = null;
	var K = 8.99 * Math.pow( 10, 9 );
	//190px = 10 cm //1 meter = 100 cm = 1900px
	var onePxInMeters = (1/1900);
	var oneNInPx = 0.05;
	//=======================================================
	//on clicking reset button
	//=======================================================
	game.resetBtn_click = function() {
		isDrag = false;
		game.__bannerDisplay(0, 0, 10, 70, false);
		//hide the charge
		chargePoint.visible = false;
		//hide the electric field display
		game.eValueContainer.visible = false;
		//clear the ray drawn
		drawPaths(game.mainActorContainer, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}, false, chargeColor, 1, 'rightArrowHead', false);
	}
	//=======================================================
	//on increment/decrement button pressed
	//=======================================================
	game.valuesChanged = function() {
		game.mainActors[1].setAnimationImageIndex([(game.chargeValue > 0) ? 1 : 0]);
		positionChargePoint();
	}
	//=======================================================
	//on drag over the screen
	//=======================================================
	game.dragCharge = function( mouseEvent ) {
		isDrag = true;
		updateClientPointer( mouseEvent );
		positionChargePoint();
	}
	//=======================================================
	//on touching the screen
	//=======================================================	
	game.showCharge = function( mouseEvent ){
		isDrag = true;
		updateClientPointer( mouseEvent );
		positionChargePoint();
		chargePoint.visible = true;	
	}
	//=======================================================
	//Let's update the position's of mouse pointer clicked on the window
	//=======================================================
	function updateClientPointer( mouseEvent ) {
		clientX = (((mouseEvent.point.x*100)>>0)/100);
		clientY = (((mouseEvent.point.y*100)>>0)/100);
	}
	//=======================================================
	//Let's position the electric field vector 
	//=======================================================
	function positionChargePoint() {
		if(!isDrag) return false;
		if(clientY > 440) return false;
		game.eValueContainer.visible = true;
		chargePoint.x = clientX - (chargePoint.width/2);
		chargePoint.y = clientY - (chargePoint.height/2);	
		var dy = clientY - chargeCenterY;
		var dx = clientX - chargeCenterX;
		var angle_rad = Math.atan2( dy, dx );
		var angle_deg = angle_rad * ( 180 / Math.PI );		
		//calculate the electric field value
		var d = dist(chargeCenterX, chargeCenterY, clientX, clientY);
		var q = game.chargeValue * Math.pow(10, -9);
		var eValue = calculationElectricField( d , q ); //returns [mantissa, exponent, magnitudeOfForce];
		//magnitude of the force vector
		var vectMagnitude = eValue[2];		
		var fieldStrength = makeTangent(clientX, clientY, vectMagnitude, angle_deg);
		drawPaths(game.mainActorContainer, {x:clientX, y:clientY}, 0, {x:fieldStrength[0], y:fieldStrength[1]}, false, chargeColor, 1, 'rightArrowHead', false);				
		//align and update the electric field value for display
		if(clientX > game.getDirector().width - 110) {
			game.eValueContainer.x = clientX - game.eValueContainer.width - 10;
		} else {
			game.eValueContainer.x = clientX + 10;
		}
		if(clientY > 400) {
			game.eValueContainer.y = clientY - game.eValueContainer.height - 10;
		} else {
			game.eValueContainer.y = clientY + 10;	
		}
		chargeTxt.setLocation(parseFloat(chargeTxt_lhs.x + chargeTxt_lhs.width) + 5, 5);
		//at center of the charge the electric field become infinite
		if(eValue[0] === 'Infinity' || eValue[0] === '-Infinity') {
			chargeTxt.setText(' = '+String.fromCharCode(8734));	
		} else {
			chargeTxt.setText(' = ' + (parseFloat(Math.abs(eValue[0])).toFixed(2)) + ' ' + String.fromCharCode(215) + ' 10' );	
		}		
		chargeTxt_pow.setLocation(parseFloat(chargeTxt.x + chargeTxt.width)-3, 3);
		var formatExpInDisplay = (eValue[1] > 0) ? (eValue[1]).split('+')[1] : eValue[1];
		if(eValue[1] === undefined) {
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
		game.mainActors[1].setAnimationImageIndex([1]);
		game.eValueContainer = new CAAT.Foundation.ActorContainer()
									.setFillStyle('white')
									.setClip(true);		
		game.eValueContainer.visible = false;
		//This displays the E character
		chargeTxt_lhs = game.__addTextOnImage( chargeColor, 'E', 'italic bold 14px Arial', 'left', game.getDirector() );	
		//This displays the mantissa
		chargeTxt = game.__addTextOnImage( chargeColor, 'x', 'bold 14px Arial', 'left', game.getDirector() );
		chargeTxt.setFillStyle('white');
		//This displays the exponent part of the value
		chargeTxt_pow = game.__addTextOnImage( chargeColor, '3', '11px Arial', 'left', game.getDirector() );
		//chargeTxt_lhs.setFillStyle('red');
		chargeTxt_unit = game.__addTextOnImage( chargeColor, ' N/C', 'bold 14px Arial', 'left', game.getDirector() );
		chargeTxt_lhs.setLocation(5, 5);
		chargeTxt.x = chargeTxt_lhs.x + chargeTxt_lhs.width + 5;
		chargeTxt_pow.x = chargeTxt.x + chargeTxt.width + 5;
		chargeTxt_unit.x = chargeTxt_pow.x + chargeTxt_pow.width + 5;
		game.eValueContainer.addChild(chargeTxt_lhs);
		game.eValueContainer.addChild(chargeTxt);
		game.eValueContainer.addChild(chargeTxt_pow);
		game.eValueContainer.addChild(chargeTxt_unit);
		chargeCenterX = game.mainEleImg[1][1]+(game.mainActors[1].width/2);
		chargeCenterY = game.mainEleImg[1][2]+(game.mainActors[1].height/2);
		chargePoint =  new CAAT.Foundation.UI.ShapeActor()
					.setLocation(500, 100)
					.setFillStyle( chargeColor )
					.setAlpha(1.0)
					.setSize(10, 10);
		chargePoint.visible = false;
		parent.addChild( chargePoint );
		parent.addChild( game.eValueContainer );
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
		var magnitudeOfForce = (e * oneNInPx);		
		var eInExp = e.toExponential();
		var mantissa = eInExp.split('e')[0];
		var exponent = eInExp.split('e')[1];
		return [mantissa, exponent, magnitudeOfForce];
	}
	//Function that finds the distance between two points represented as a line segment. 
	//Distance between P and Q should be sent as px1, py1, px2, py2. P and Q should have its own .x and .y properties
	function dist(x1, y1, x2, y2){
		return Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2));
	}
	//=======================================================
	// Lets draw the rays with arrow heads
	//=======================================================
	function drawPaths( obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
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
	
			canvas.stroke();	
		};	
	}
})();