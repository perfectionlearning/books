(function(){
	
var tangentAsPath = null, tangentAsPath_arrow = null, startActivity = false, arrowIncVal = game.currentCarSpeed;
var tangentLength = 500, centripetalAcceleration = 0, data_dist_meters = 18, data_dist_pixels = 128;
var loadMsg_1 = true, loadMsg_2 = true, totalTime = 0, d = null, timeStampStart = 0, timeStampEnd = 0;
var _xx = 0, _yy = 0, _xx1 = 0, _yy1 = 0, lastcurrAngRad = 0, lastcurrAng = 0, isFirstTime = true, _currAng_Global = 0;
var linearPath = false, gameOverButPaused = false;
var _xx1_temp = 0, _yy1_temp = 0, tangentAsPath_tempPoint = null;
//=======================================================
// Create a image actor
//=======================================================
game.createActor = function(img) {
	return new CAAT.Actor().
		setBackgroundImage(
			new CAAT.SpriteImage().
					initialize(img, 1, 1),
			true).
		enableEvents(false);
}
//=======================================================
// Create a arrow
//=======================================================
game.createArrow = function() {
	return new game.FC.Ship().
		setSize( 30,30 ).
		enableEvents(false).
		setFillStyle('white');
}
//=======================================================
// Create a tangent line for testing the tangent path
//=======================================================
game.createTangentLine = function() {
	return new game.FC_tan.Ship().
		setSize( 30, 30 ).
		enableEvents(false).
		setFillStyle('white');
}
//=======================================================
// Create a dial hand to show acceleration
//=======================================================
game.createDialHand = function() {
	return new game.FC_dial.Ship().
		setSize( 30, 30 ).
		enableEvents(false).
		setFillStyle('red');
}
//=======================================================
// Make tangent path for the car at all points of rotation
//=======================================================
function makeTangent(cx,cy,r,a){
	ang=(Math.PI/180)*a;
	var x1 = cx + (r * Math.cos(ang));
	var y1 = cy + (r * Math.sin(ang));	
	rXY=rotate(cx,cy,cx + r,cy-tangentLength,a,false);
	return [x1,y1,rXY[0],rXY[1]];
}
//=======================================================
// Make tangent path for temp point at all points of rotation of car
//=======================================================
function makeTangent1(cx,cy,r,a){
	var ang1=(Math.PI/180)*a;
	var x1 = cx + (r * Math.cos(ang1));
	var y1 = cy + (r * Math.sin(ang1));	
	rXY=rotate(cx,cy,cx + r,cy-80,a,false);
	return [x1,y1,rXY[0],rXY[1]];
}
//=======================================================
// Get tangent points at all rotation points
//=======================================================
function rotate(ox,oy,px,py,theta,cw){
	if(cw){theta*=-1;}
	theta=(Math.PI/180)*theta;
	rx = ox + (Math.cos(theta) * (px-ox)) - (Math.sin(theta) * (py-oy));
	ry = oy + (Math.sin(theta) * (px-ox)) + (Math.cos(theta) * (py-oy));
	return [rx,ry];
}
//=======================================================
// Keep updating the tangent path for later use to add to car
//=======================================================
function drawTangent(pos, newAngle, refPoint, img, flag) {
	var tangent_coor = makeTangent(refPoint.x, refPoint.y, pos, newAngle + 0);
	var tangent_coor1 = makeTangent1(refPoint.x, refPoint.y, pos, newAngle + 0);
	_xx  = tangent_coor[0] - 30;
	_yy  = tangent_coor[1] - pos;
	_xx1 = tangent_coor[2] - 30;
	_yy1 = tangent_coor[3] - pos;
	
	_xx1_temp = tangent_coor1[2] - 30;
	_yy1_temp = tangent_coor1[3] - pos;
			
	var x_diff = _xx1 - _xx;
	var y_diff = _yy1 - _yy;
	
	var x_diff_tempPoint = _xx1_temp - _xx;
	var y_diff_tempPoint = _yy1_temp - _yy;
	
	var tangentPathArrowTime, tangentPathArrowTime_tempPoint;
	
	var X1, Y1, X2, Y2, X2_tempPoint, Y2_tempPoint;
	var X1_arr, Y1_arr, X2_arr, Y2_arr;
	
	X2=game.canvasOriginX + x_diff -(game.imgW_onLoad / 2);
	Y2=game.canvasOriginY + game.carDistFromOrigin + y_diff - (game.imgH_onLoad / 2);
	
	X2_arr = game.canvasOriginX + x_diff + 30;
	Y2_arr = game.canvasOriginY + game.arrowDistFromOrigin + y_diff;
	
	X2_tempPoint = game.canvasOriginX + x_diff_tempPoint -(game.imgW_onLoad / 2);
	Y2_tempPoint = game.canvasOriginY + game.carDistFromOrigin + y_diff_tempPoint - (game.imgH_onLoad / 2);
	
	if(linearPath){
		//if pause and played in the linear path
		X1 = game.car.x;
		Y1 = game.car.y;
		X1_arr = game._arrow.x;
		Y1_arr = game._arrow.y;
		tangentPathArrowTime = getRequiredTime(X1, Y1, X2, Y2);
		tangentPathArrowTime_tempPoint = getRequiredTime(X1, Y1, X2_tempPoint, Y2_tempPoint);
	}else{
		X1=game.canvasOriginX - (game.imgW_onLoad / 2);
		Y1=(game.canvasOriginY + game.carDistFromOrigin - (game.imgH_onLoad / 2));
		X1_arr=game.canvasOriginX + 30;
		Y1_arr=(game.canvasOriginY + game.arrowDistFromOrigin);
		//get the time at which the arrow has to traverse the path
		tangentPathArrowTime = getRequiredTime(game.canvasOriginX + 30, (game.canvasOriginY + game.arrowDistFromOrigin), game.canvasOriginX + x_diff + 30, game.canvasOriginY + game.arrowDistFromOrigin + y_diff);
		tangentPathArrowTime_tempPoint = getRequiredTime(game.canvasOriginX + 30, (game.canvasOriginY + game.arrowDistFromOrigin), game.canvasOriginX + x_diff_tempPoint + 30, game.canvasOriginY + game.arrowDistFromOrigin + y_diff_tempPoint);
	}
	
	//tangent path for car		
	tangentAsPath = new CAAT.PathBehavior().
					setValues( new CAAT.Path().setColor("#000").setLinear(
						X1, Y1, X2, Y2
					).setInteractive(false) ).
					setAutoRotate( true ).
					setDelayTime( 0, tangentPathArrowTime * 1000 );
						
	//tangent path for arrow
	tangentAsPath_arrow = new CAAT.PathBehavior().
					setValues( new CAAT.Path().setColor("#000").setLinear(
						X1_arr, Y1_arr, X2_arr, Y2_arr
					).setInteractive(false) ).
					setAutoRotate( true ).
					setDelayTime(0, tangentPathArrowTime * 1000 );
		
	//tangent path for temp point	
	tangentAsPath_tempPoint = new CAAT.PathBehavior().
					setValues( new CAAT.Path().setColor("#000").setLinear(
						X1, Y1, X2_tempPoint, Y2_tempPoint
					).setInteractive(false) ).
					setAutoRotate( true ).
					setDelayTime( 0, tangentPathArrowTime_tempPoint * 1000 );
									
	
}
//=======================================================
// Lets rotate the car around the origin
//=======================================================
function rotateCar(bAngle, eAngle, _totalTime, flag) {
	var rotateAroundMidPointTrack = new CAAT.RotateBehavior().
			setDelayTime(0, _totalTime).
			setValues(bAngle, eAngle).
			setCycle(true).
			setAnchor( game.car, parseInt(game.imgW_onLoad/2)-game.car_init_x, parseInt(game.imgH_onLoad/2)-game.car_init_y + 2 );
	var rotateAroundMidPointTrack_temp = new CAAT.RotateBehavior().
			setDelayTime(0, _totalTime).
			setValues(bAngle, eAngle).
			setCycle(true).
			setAnchor( game.tempPoint, parseInt(game.imgW_onLoad/2)-game.car_init_x, parseInt(game.imgH_onLoad/2)-game.car_init_y + 2 );
			
	if(flag) {
		//if reset
		var rotateAroundMidPointTrack = new CAAT.RotateBehavior().
			setDelayTime(0, 0).
			setValues(bAngle, eAngle).
			setCycle(false).
			setFrameTime( 0, 1 ).
			setAnchor( game.car, parseInt(game.imgW_onLoad/2)-game.car_init_x, parseInt(game.imgH_onLoad/2)-game.car_init_y + 2 );
		var rotateAroundMidPointTrack_temp = new CAAT.RotateBehavior().
			setDelayTime(0, 0).
			setValues(bAngle, eAngle).
			setCycle(false).
			setFrameTime( 0, 1 ).
			setAnchor( game.tempPoint, parseInt(game.imgW_onLoad/2)-game.car_init_x, parseInt(game.imgH_onLoad/2)-game.car_init_y + 2 );
	}	
	game.car.emptyBehaviorList();
	game.car.addBehavior(rotateAroundMidPointTrack);
	game.tempPoint.emptyBehaviorList();
	game.tempPoint.addBehavior(rotateAroundMidPointTrack);
}
//=======================================================
// Lets rotate the arrow around the origin
//=======================================================
function rotateArrow(bAngle, eAngle, _totalTime, flag) {
	var rotateAroundMidPointTrack1 = new CAAT.RotateBehavior().
		setDelayTime(0, _totalTime).
		setValues(bAngle, eAngle).
		setCycle(true).
		setAnchor( game._arrow, -game.arrow_init_x , -game.arrow_init_y + 2);
		
	if(flag) {
		//if reset
		var rotateAroundMidPointTrack1 = new CAAT.RotateBehavior().
			setDelayTime(0, _totalTime).
			setValues(bAngle, eAngle).
			setCycle(false).
			setFrameTime( 0, 1 ).
			setAnchor( game._arrow, -game.arrow_init_x , -game.arrow_init_y + 2 );
	}	
	game._arrow.emptyBehaviorList();
	game._arrow.addBehavior(rotateAroundMidPointTrack1);
}	
//=======================================================
// Draw an arrow pointer for the car
//=======================================================	
game.FC= {};
(function() {
	game.FC.Ship= function() {
		game.FC.Ship.superclass.constructor.call(this);
		return this;
	};

	game.FC.Ship.prototype= {
		paint : function( director, time ) {
			var ctx = director.ctx;
			var _sizeship = 9;
			ctx.globalAlpha = 1;
			ctx.fillStyle = '#FF0000';
			ctx.strokeStyle = '#FF0000';
			ctx.lineWidth = 4;

			ctx.save();
			ctx.beginPath();
			ctx.translate(0, 0);
			ctx.moveTo(3 + arrowIncVal * 3.5 , 0);			
			ctx.lineTo(-3 + arrowIncVal * 3.5 + _sizeship * Math.cos(3 * Math.PI / 4), _sizeship * Math.sin(3 * Math.PI / 4));
			ctx.lineTo(-3 + arrowIncVal * 3.5 + _sizeship * Math.cos(5 * Math.PI / 4), _sizeship * Math.sin(5 * Math.PI / 4));
			
			ctx.moveTo(-10 + arrowIncVal * Math.sin(3 * Math.PI / 4)*5, 1);
			ctx.lineTo(-10 + Math.sin(3.5 * Math.PI / 4), 1);			
			ctx.lineTo(-10 + Math.sin(3.5 * Math.PI / 4), 0);
			ctx.lineTo(-10 + arrowIncVal * Math.sin(3 * Math.PI / 4)*5, 0);
			
			ctx.closePath();							
			ctx.fill();
			ctx.restore();
		}
	}
	extend( game.FC.Ship, CAAT.Actor );
}());
//=======================================================
// Draw a tangent path
//=======================================================
game.FC_tan= {};
(function() {
	game.FC_tan.Ship= function() {
		game.FC_tan.Ship.superclass.constructor.call(this);
		return this;
	};
	game.FC_tan.Ship.prototype= {
		paint : function( director, time ) {
			var ctx = director.ctx;
			ctx.globalAlpha = 1;
			ctx.fillStyle = this.fillStyle;
			ctx.strokeStyle = '#FFFFFF';
			ctx.lineWidth = 0;

			ctx.save();
			ctx.beginPath();
			ctx.translate(0, 0);	
			ctx.moveTo(_xx, _yy);
			ctx.lineTo(_xx1, _yy1);
			ctx.lineTo(_xx1 + 2, _yy1 + 2);				
			ctx.lineTo(_xx + 2, _yy + 2);
			ctx.closePath();							
			ctx.fill();
			ctx.restore();
		}
	}
	extend( game.FC_tan.Ship, CAAT.Actor );
}());
//=======================================================
// Draw a dial path
//=======================================================
game.FC_dial= {};
(function() {
	game.FC_dial.Ship= function() {
		game.FC_dial.Ship.superclass.constructor.call(this);
		return this;
	};
	game.FC_dial.Ship.prototype= {
		paint : function( director, time ) {
			var ctx = director.ctx;
			ctx.globalAlpha = 1;
			ctx.fillStyle = this.fillStyle;
			ctx.strokeStyle = '#FFFFFF';
			ctx.lineWidth = 0;

			ctx.save();
			ctx.beginPath();
			ctx.translate(0, 0);	
			ctx.moveTo(0.5, 0);
			ctx.lineTo(0.5, -25);
			ctx.lineTo(1.5, -25);				
			ctx.lineTo(1.5, 0);
			ctx.closePath();							
			ctx.fill();
			ctx.restore();
		}
	}
	extend( game.FC_dial.Ship, CAAT.Actor );
}());
//=======================================================
// Start activity
//=======================================================
function activity() {
	//if activity already started then don't allow further clicks until revoked from pause/reset
	if(startActivity || (game.isGameOver && gameOverButPaused == false))
		return;
		
	if(game.isGamePaused) {
		game.isGamePaused = false;
	}
	
	if(game.isGameOver && gameOverButPaused) {
		gameOverButPaused = false;
	}
	
	startActivity = true;
	isFirstTime = false;
	//game.isGamePaused = false;
	arrowIncVal = game.currentCarSpeed;
	
	//show x,y velocity
	animateXYVelocity(0, 11);
	updateCentripetalAccDial();
	
	//if in the first instant itself the velocity is high then break the circular path
	if(game.currentCarSpeed > game.thresholdVelocity) {
		goAlongPath();
		return false;
	}
	
	var elapsedTime = timeStampEnd - timeStampStart;
	if(totalTime!=0){
		var currAngRad = lastcurrAngRad + (2 * Math.PI * elapsedTime / totalTime);
		var _currAng_1 = lastcurrAng + 360 * (elapsedTime / totalTime);
	}else{
		var currAngRad = 0;
		var _currAng_1 = 0;
	}
	
	//Saving the last covered angle. This needs to be added to the proportional angle
	//calculated with elapsed time in the next visit to this section
	lastcurrAngRad = currAngRad;
	lastcurrAng = _currAng_1;
	var endAngRad = currAngRad + (2*Math.PI);
	
	totalDistanceInMeters = 2 * Math.PI * 18;
	totalTimeInSeconds = totalDistanceInMeters / game.currentCarSpeed;
	totalTime = totalTimeInSeconds * 1000;
	
	
	rotateCar(-currAngRad, -endAngRad, totalTime, false);
	rotateArrow(-currAngRad, -endAngRad, totalTime, false);
	//drawTangent(carDistFromOrigin, 90 - _currAng_1, { x:0, y:0 }, oImg);
	
	//timer to show x,y velocity and centripetal acceleration animation
	var scene = game.getScene();
	scene.createTimer(
		0,
		Number.MAX_VALUE,
		function (scene_time, timer_time, timertask_instance) {}, // timeout
		function (scene_time, timer_time, timertask_instance) {   // tick
			if(startActivity == true && game.isGamePaused == false) {
				hVelocity = hv_velocity()[0];
				vVelocity = hv_velocity()[1];
				
				animateXYVelocity(hVelocity, vVelocity);
				updateCentripetalAccDial();
			} else {
				timertask_instance.cancel();
			}
		},
		function (scene_time, timer_time, timertask_instance) {} // cancel
    )	

	//update start time
	d = new Date();
	timeStampStart = d.getTime();

	return;
}
//=======================================================
// Pause the full activity
//========================================================
game.pauseFunctionality = function() {
	if(game.isGamePaused) 
		return;
	game.isGamePaused = true;
	startActivity = false;
	linearPath = true;
	if(game.isGameOver) {
		gameOverButPaused = true;
	}
	if(!isFirstTime) {
		d = new Date();
		timeStampEnd = d.getTime();
	}
	
	game.car.emptyBehaviorList();
	game._arrow.emptyBehaviorList();
	game._arrow.emptyBehaviorList();
}

//=======================================================
// find horizontal and vertical velocity
//=======================================================
function hv_velocity() {
	centripetalAcceleration = Math.pow( game.currentCarSpeed, 2 ) / ( data_dist_meters );
	hVelocity = game.currentCarSpeed * Math.sin( _getPresentAngle()[1] );
	vVelocity = game.currentCarSpeed * Math.cos( _getPresentAngle()[1] );
	return [hVelocity, vVelocity];
}
//=======================================================
// get present angle at which the car is making rotation
//=======================================================
function _getPresentAngle() {
	var d1 = new Date();
	var _timeStampEnd = d1.getTime();
	
	var elapsedTime = _timeStampEnd - timeStampStart;
	if(totalTime!=0){
		var currAngRad = lastcurrAngRad + (2 * Math.PI * elapsedTime / totalTime);
		var _currAng_1 = lastcurrAng + 360 * (elapsedTime / totalTime);
	}else{
		var currAngRad = 0;
		var _currAng_1 = 0;
	}
	return [_currAng_1, currAngRad];
}
//=======================================================
// Break car's circular path and let go along the tangent path
//=======================================================
function goAlongPath() {
	game.isGameOver = true;
	startActivity = false;
	
	if(loadMsg_2){
		game.__bannerDisplay(2, 0, -70, true, 6, 7);
		loadMsg_2 = false;
	}
	//if the tangential path is not yet created then create one for default
	if(tangentAsPath == null || tangentAsPath_arrow == null) {
		drawTangent(game.carDistFromOrigin, 90, {x:0, y:0}, game.oImg, false);
	} else {
		drawTangent(game.carDistFromOrigin, 90 - _currAng_Global, { x:0, y:0 }, game.oImg, false);
	}	
	//lets clear the rotate behaviors
	game.car.emptyBehaviorList();
	game._arrow.emptyBehaviorList();
	game.tempPoint.emptyBehaviorList();
	//lets add the path behavior
	game.car.addBehavior(tangentAsPath);
	game._arrow.addBehavior(tangentAsPath_arrow);
	game.tempPoint.addBehavior(tangentAsPath_tempPoint);
	
	//when path behavior finishes, reset the x, y velocity and centripetal acceleration.
    //tangentAsPath.addListener({
	tangentAsPath_tempPoint.addListener({
		behaviorExpired : function(behavior, time, actor) {
			var _x_velo_behaviour = new CAAT.ScaleBehavior().
									setCycle(false).
									setFrameTime( 0, 0 ).
									setValues( 0, 0, 1, 1, 0, 0);
			game._x_velo.addBehavior(_x_velo_behaviour);
				
			var _y_velo_behaviour = new CAAT.ScaleBehavior().
									setCycle(false).
									setFrameTime( 0, 0 ).
									setValues( 1, 1, 0, 0, 0, 0);
			game._y_velo.addBehavior(_y_velo_behaviour);
			//reset dial pointer			
			centripetalAcceleration = 0.0;
			updateCentripetalAccDial();
		}
	});
	
	//game.tempPoint
}
//=======================================================
// on speed change of the car update the required calculations
//=======================================================
game.changeSpeed = function( currSpeed ) {
	//Stop car here
	if(game.isGamePaused)
		return false;
		
	arrowIncVal = currSpeed;
	game.updateTxtContent(game.currentSpeedDisp, currSpeed);
		
	if(startActivity == false) 
		return false; 
	
	hVelocity = hv_velocity()[0];
	vVelocity = hv_velocity()[1];
	animateXYVelocity(hVelocity, vVelocity);
		
	d = new Date();
	timeStampEnd = d.getTime();
	
	var elapsedTime = timeStampEnd - timeStampStart;
	var currAngRad = lastcurrAngRad + (2 * Math.PI * elapsedTime / totalTime);
	var _currAng_1 = lastcurrAng + 360 * (elapsedTime / totalTime);
	_currAng_Global = _currAng_1;
	//Saving the last covered angle. This needs to be added to the proportional angle
	//calculated with elapsed time in the next visit to this section
	lastcurrAngRad = currAngRad;
	lastcurrAng = _currAng_1;
	var endAngRad = currAngRad + (2*Math.PI);

	if( parseFloat ( game.currentCarSpeed ) < ( parseFloat( game.thresholdVelocity ) + 0.5 ) ) {
		totalDistanceInMeters = 2 * Math.PI * 18;
		totalTimeInSeconds = totalDistanceInMeters / game.currentCarSpeed;
		totalTime = totalTimeInSeconds * 1000;
	}
		
	if(parseFloat(game.currentCarSpeed) > parseFloat(game.thresholdVelocity) + 0.5) {
		//no further change in speed required when we have crossed 13.0
		return false;
	}	
	
	//when the velocity is above 12.5 break the circular path and drive the car tangentially
	if(parseFloat(game.currentCarSpeed) > game.thresholdVelocity) {
		rotateCar(-currAngRad, -endAngRad, totalTime, false);
		rotateArrow(-currAngRad, -endAngRad, totalTime, false);
		drawTangent(game.carDistFromOrigin, 90 - _currAng_1, { x:0, y:0 }, game.oImg, false);
		goAlongPath();
		var endAngle = 0;
		centripetalAcceleration = 0.0;		
		return;
	}
	
	//Setting the timeStampStart here for recalculation of elapsed time in the next visit here
	d = new Date();
	timeStampStart = d.getTime();
	
	//lets rotate car and arrow
	rotateCar(-currAngRad, -endAngRad, totalTime, false);
	rotateArrow(-currAngRad, -endAngRad, totalTime, false);
}
//=======================================================
// update centripetal acceleration dial pointer
//=======================================================
function updateCentripetalAccDial() {
	var startAngle = 0;
	var endAngle = centripetalAcceleration * ( 360 / 60 );
	var rotateAroundMidPointDial = new CAAT.RotateBehavior().
		setFrameTime(0, 0).
		setValues( startAngle * ( Math.PI / 180 ), endAngle * ( Math.PI / 180 ) ).
		setCycle(false).
		setAnchor( game.dialHand, 0, 0);
	game.dialHand.addBehavior(rotateAroundMidPointDial);
	game.updateTxtContent(game.currentCentriAccDisp, (parseFloat(centripetalAcceleration)).toFixed(1));
}
//=======================================================
// Animate horizontal and vertical velocity
//=======================================================
function animateXYVelocity(hVelocity, vVelocity) {
	//animate x-velocity
	var _x_velo_val = vVelocity / 12.5;	
	var _x_velo_behaviour = new CAAT.ScaleBehavior().
			setFrameTime( 0, 0 ).
			setValues( 0, _x_velo_val, 1, 1, 0, 0);
	game._x_velo.addBehavior(_x_velo_behaviour);
	//animate y-velocity
	var _y_velo_val = hVelocity / 12.5;	
	var _y_velo_behaviour = new CAAT.ScaleBehavior().
			setFrameTime( 0, 0 ).
			setValues( 1, 1, 0, -_y_velo_val, 0, 0);
	game._y_velo.addBehavior(_y_velo_behaviour);	
}
//=======================================================
// on clicking reset button
//=======================================================
game.resetActivity = function() {
	loadMsg_1 = loadMsg_2 = true;	
	startActivity = false;
	game.isGamePaused = false;
	game.isGameOver = false;
	_currAng_Global = 0;
	linearPath = false;
	isFirstTime = true; //to stop end time update before the activity is started
	game.__bannerDisplay(0, 0, -70, true, 4, 5);
	arrowIncVal = 0;
	centripetalAcceleration = 0.0;
	arrowIncVal = game.currentCarSpeed;
	//remove the attached path behaviour from car and arrow
	game.car.emptyBehaviorList();
	game._arrow.emptyBehaviorList();
	game.tempPoint.emptyBehaviorList();
	
	var _x_velo_behaviour = new CAAT.ScaleBehavior().
			setCycle(false).
			setFrameTime( 0, 0 ).
			setValues( 0, 0, 1, 1, 0, 0);
		game._x_velo.addBehavior(_x_velo_behaviour);
		
	
	var _y_velo_behaviour = new CAAT.ScaleBehavior().
		setCycle(false).
		setFrameTime( 0, 0 ).
		setValues( 1, 1, 0, 0, 0, 0);
	game._y_velo.addBehavior(_y_velo_behaviour);
	
	
	//reset tangent path for car		
	tangentAsPath = new CAAT.PathBehavior().
					setValues( new CAAT.Path().setColor("#000").setLinear(
						game.canvasOriginX - (game.imgW_onLoad / 2), 
						(game.canvasOriginY + game.carDistFromOrigin - (game.imgH_onLoad / 2)), 
						game.canvasOriginX - (game.imgW_onLoad / 2), 
						(game.canvasOriginY + game.carDistFromOrigin - (game.imgH_onLoad / 2))
					).setInteractive(false) ).
					setDelayTime(0, 0);
	
	tangentAsPath_tempPoint = tangentAsPath;
					
	//reset tangent path for arrow
	tangentAsPath_arrow = new CAAT.PathBehavior().
					setValues( new CAAT.Path().setColor("#000").setLinear(
						game.canvasOriginX + 30, 
						(game.canvasOriginY + game.arrowDistFromOrigin), 
						game.canvasOriginX + 30, 
						(game.canvasOriginY + game.arrowDistFromOrigin)
					).setInteractive(false) ).
					setDelayTime(0, 0);
	//apply the new reset path 		
	game.car.addBehavior(tangentAsPath);
	game._arrow.addBehavior(tangentAsPath_arrow);
	game.tempPoint.addBehavior(tangentAsPath_tempPoint);
	
	//reset the car position
	rotateCar(0, 0, 0, true);
	game.car.setLocation(game.trackOrginFromLeft - parseInt(game.imgW_onLoad / 2), game.trackOrginFromTop + game.carDistFromOrigin - parseInt(game.imgH_onLoad / 2));
	game.tempPoint.setLocation(game.trackOrginFromLeft - parseInt(game.imgW_onLoad / 2), game.trackOrginFromTop + game.carDistFromOrigin - parseInt(game.imgH_onLoad / 2));
	
	//reset the arrow position
	rotateArrow(0, 0, 0, true);
	game._arrow.setLocation(game.arrow_init_x + (game.trackOrginFromLeft) , game.arrow_init_y + (game.trackOrginFromTop));
	//reset the velocity value
	var currentCarSpeedDisp = (parseFloat(game.currentCarSpeed)).toFixed(1);
	game.updateTxtContent(game.currentSpeedDisp, currentCarSpeedDisp);
	updateCentripetalAccDial();
	
	tangentAsPath = tangentAsPath_arrow = tangentAsPath_tempPoint = null;
	timeStampStart = 0, timeStampEnd = 0, lastcurrAngRad = 0, lastcurrAng = 0;
}
//=======================================================
// when go button is clicked
//=======================================================	
game.go_btn_click = function() {
	if(loadMsg_1) {
		game.__bannerDisplay(0, 0, -70, false, 4, 5);
		loadMsg_1 = false;
	}
	//if their is some car velocity then start the calculation
	activity();
}
//=======================================================
// get hypotenuse dist between two coordinates
//=======================================================	
function getHypotenuseDist(x1, y1, x2, y2) {
    var hyp_dist = 0;
	hyp_dist =  Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2));
	var dist_in_meters = hyp_dist * ( data_dist_meters / data_dist_pixels );
	return dist_in_meters;
}
//================================================================
// get required time to cover the distance between two coordinates
//================================================================	
function getRequiredTime(a, b, c, d) {
	var d_in_meters = getHypotenuseDist(a, b, c, d);
	var _time = d_in_meters / parseFloat(game.currentCarSpeed);
	return _time;
}

game.fixIEConsoleBug = function() {
	// Avoid `console` errors in browsers that lack a console.
	// IE throws exception when the console.log is not found on load and is called by the script
	// IE only executes such scripts when the debug panel
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

})();