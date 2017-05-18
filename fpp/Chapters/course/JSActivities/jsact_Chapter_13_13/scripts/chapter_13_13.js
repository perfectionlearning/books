//
//	Game Logic
//
(function(){
	game.status = 'started';
	game.allowSpeedChange = false;
	game.timerCnt = 0;
	game.smallTiltAng = 0;
	game.isCollided = false;
	game.earthCenterX = 380, game.earthCenterY = 250;
	game.thrustValue = 1.36, game.thrustInitValue = 1.36, game.thrustStepValue = 0.005;
	game.orbitalSpeed = 5.65E3, game.orbitalSpeed_init = 5.65E3;
	game.orbitalSpeedDisp = 5.65;
	game.orbitalRadiusDisp = 1.25;
	game.orbitalRadius = 1.25E7, game.orbitalRadius_init = 1.25E7;
	game.s_u = 0;
	game.s_v = 0;
	game.sats = null, game._sats = null;
	game.wrongOrbitMsgShown = false, game.correctOrbitMsgShown = false, game.initialBannerHidden = false;
	game.orbitRadiusRefInPx = 180;
	game.__createarc = function(){	
		game.graph_actor = new CAAT.Foundation.ActorContainer().							
								setBounds( 0, 0, game._director.width, game._director.height).							
								setClip(false);
		game.graph_actor.paint = function(director, time){	
			var canvas = director.ctx;
			canvas.beginPath();
			canvas.lineWidth = 1;
			canvas.strokeStyle = '#ebebeb';
			canvas.arc(game.earthCenterX, game.earthCenterY, 180, 0,2*Math.PI);
			canvas.stroke();
			canvas.closePath();		
		}
		game.mainPanel.addChild(game.graph_actor);	
	}
	//earth image's configuration
	game.earth = {
		x: game.earthCenterX,
		y: game.earthCenterY,
		r: 85,
		r2: 85*85,
		m:50
	}
	game.earth.m = game.earth.m * 10e10;
	//=======================================================
	// On clicking the reset button
	//=======================================================
	game.resetBtnMDownHandler = function() {
		game.status = 'started';
		if(game.spaceStation_ShipRotationTimer) game.spaceStation_ShipRotationTimer.cancel();
		game.isCollided = false;
		game.wrongOrbitMsgShown = false;
		game.correctOrbitMsgShown = false;
		game.initialBannerHidden = false;
		game.allowSpeedChange = false;
		game.thrustValue = game.thrustInitValue;
		game.orbitalRadius = game.orbitalRadius_init;
		game.oldThrustX = null;
		game.oldThrustY = null;
		game.spaceshipImg
			.setAnimationImageIndex([0])
			.setAlpha(1)
			.setLocation(380 - (game.spaceshipImg.width/2), 250 - 180 - (game.spaceshipImg.height/2));
		game.mainContainerActors[2].setLocation(game.mainEleImg[2][1], game.mainEleImg[2][2]);
		game.spaceStation_spaceShipInit();
		game.__bannerDisplay(0, 0, -70, 10, false);
		var canvas = document.createElement('canvas');
		canvas.width = game._director.width;
		canvas.height = game._director.height - game.panelHeight;
		game.orbitPath.setBackgroundImage( canvas );
		game.orbitPath.__ctx = canvas.getContext('2d');
		game.orbitPath.__ctx.lineWidth = 1;
		game.orbitPath.__ctx.strokeStyle = '#e1e102';
		game.orbitPath.__ctx.fillStyle = 'none';
		game.orbitPath.__ctx.beginPath();
		game.orbitPath.__ctx.arc(380, 250, 180, 0,2*Math.PI);
		game.orbitPath.__ctx.stroke();
		game.orbitPath.__ctx.closePath();
		game.oDashTxtArr[1].setText(parseFloat(game.orbitalSpeedDisp).toFixed(2));
		game.oDashTxtArr[6].setText(parseFloat(game.orbitalRadiusDisp).toFixed(2));
	}
	//=======================================================
	// Make tangent path for the car at all points of rotation
	//=======================================================
	function makeTangent(cx,cy,r,a){
		var ang=(Math.PI/180)*a;
		var x1 = cx + (r * Math.cos(ang));
		var y1 = cy + (r * Math.sin(ang));	
		return [x1,y1];
	}
	//=======================================================
	// get hypotenuse dist between two coordinates
	//=======================================================	
	function getHypotenuseDist(x1, y1, x2, y2) {
		var hyp_dist = 0;
		hyp_dist =  Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2));
		return hyp_dist;
	}
	//================================================================
	// get required time to cover the distance between two coordinates
	//================================================================	
	function getRequiredTime(a, b, c, d) {
		var _dist = getHypotenuseDist(a, b, c, d);
		var _time = _dist / 250;
		return _time;
	}	
	//=======================================================
	// On click of the pause button
	//=======================================================
	game.pauseBtnMDownHandler = function(){
		if(game.status == 'started') {
			game.status = 'paused';
			if(game.spaceStation_ShipRotationTimer) game.spaceStation_ShipRotationTimer.cancel();
			game.startPauseTime = new Date().getTime();
		} else if(game.status == 'paused') {
			game.status = 'started';
			game.spaceStation_spaceShipRotate();
		}		
	}
	//=======================================================
	// When their is no enough orbital radius or launch speed
	// the satellite collides on the earth
	//=======================================================
	function onCollision() {
		game.isCollided = true;
		//if collision banner already displayed then exit
		if(game.wrongOrbitMsgShown) return;
		game.wrongOrbitMsgShown = true;
		game.__bannerDisplay(2, 2, -70, 10, false);
		game.spaceshipImg.playAnimation("collide");
	}
	//=======================================================
	// Physics - where the orbiting of the spaceship happens
	//=======================================================
	var Physics = {};
	var timestep = 1;
	game.oldX = 0, game.oldY = 0;	
	Physics = function(opts) {
		return Physics;
	};
	Physics.setTimestep = function(ts)
	{
		timestep = ts;
	};
	Physics.reCalc = function(store)
	{
		var collisions = [];
		if(game.correctOrbitMsgShown) {
			game.spaceshipImg.setRotationAnchored(game.spaceStationAngle+3*(Math.PI/2), 0.5, 0.5);
			game.spaceshipImg.setLocation( game.s1_x -(game.spaceshipImg.width/2), game.s1_y - (game.spaceshipImg.height/2));
			return;	
		}
		var s = game.sats;
		var d = (s.x - game.earth.x) * (s.x - game.earth.x) + (s.y - game.earth.y) * (s.y - game.earth.y);
		if (d <= game.earth.r2) {
			onCollision();
		} else {
			var theta = Math.atan2(s.y - game.earth.y, s.x - game.earth.x);
			var k = -6.67300e-11 * game.earth.m * s.m / d;
			s.u += ((k * Math.cos(theta)) / s.m) * timestep;
			s.v += ((k * Math.sin(theta)) / s.m) * timestep;				
			if (store === true) {
				s.xpoints.push(s.x);
				s.ypoints.push(s.y);
				s.colors.push(calcLineColor(s.initSpeed, Math.sqrt((s.u * s.u) + (s.v * s.v))));
			}
			s.x += s.u * timestep;
			s.y += s.v * timestep;
			game.s_x = s.x;
			game.s_y = s.y;
			game.s_u = s.u;
			game.s_v = s.v;
			//display the space ship's orbital speed
			var speed = Math.sqrt( Math.pow(s.u, 2) + Math.pow(s.v, 2) );
			game.orbitalSpeed = speed * (game.orbitalSpeed_init / game.thrustInitValue);
			game.orbitalSpeed = Math.round((game.orbitalSpeed/1000)*100)/100;
			if(game.allowSpeedChange) {
				game.oDashTxtArr[1].setText(parseFloat(game.orbitalSpeed).toFixed(2));
			}
			//display the space ship's orbital radius
			var radius = Math.sqrt(d);
			game.orbitalRadius = radius * (game.orbitalRadius_init / game.orbitRadiusRefInPx);
			game.orbitalRadius = Math.round((game.orbitalRadius/1E7)*100)/100;
			if(game.allowSpeedChange) {
				game.oDashTxtArr[6].setText(parseFloat(game.orbitalRadius).toFixed(2));
			}
			//make the space ship tilt and maintain angle along the path
			game.smallTiltAng = Math.atan2((game.s_y - game.oldY),(game.s_x - game.oldX));
			game.spaceshipImg.setRotationAnchored(game.smallTiltAng, 0.5, 0.5);
			var spaceShipX = s.x -(game.spaceshipImg.width/2);
			var spaceShipY = s.y - (game.spaceshipImg.height/2);
			game.spaceshipImg.setLocation(spaceShipX, spaceShipY);
			//keep cheching if the ship docks with the station
			checkForDocking();
		}
		//old points stored for calculating the ship tilt angle
		game.oldX = s.x;
		game.oldY = s.y;
	};
	//================================================================
	// Check if the spaceship is docked with the station
	//================================================================
	function checkForDocking() {
		var ship_station_dist_x = Math.abs(game.spaceshipImg.x - game.mainContainerActors[2].x);
		var ship_station_dist_y = Math.abs(game.spaceshipImg.y - game.mainContainerActors[2].y);
		var x1 = game.spaceshipImg.x + (game.spaceshipImg.width/2);
		var y1 = game.spaceshipImg.y + (game.spaceshipImg.height/2);
		var x2 = game.mainContainerActors[2].x + (game.mainContainerActors[2].width/2);
		var y2 = game.mainContainerActors[2].y + (game.mainContainerActors[2].height/2);
		var dist = getHypotenuseDist(x1, y1, x2, y2);
		
		var diffInHVelo = Math.abs(game.s1_u - game.s_u);
		var diffInVVelo = Math.abs(game.s1_v - game.s_v);
		//dist = 1; diffInHVelo = 0.04; diffInVVelo = 0.04;
		if(dist < 2 && diffInHVelo < 0.05 && diffInVVelo < 0.05) {
			if(game.correctOrbitMsgShown) return;					
			game.__bannerDisplay(1, 1, -70, 10, false);
			game.correctOrbitMsgShown = true;	
			var deltaY = 250 - (game.mainContainerActors[2].y+(game.mainContainerActors[2].height/2));
			var deltaX = 380 - (game.mainContainerActors[2].x+(game.mainContainerActors[2].width/2));
			game.spaceStationAngle = Math.atan2(deltaY, deltaX);
			var spaceStationCenterX = game.stationX_init+(game.mainContainerActors[2].width/2);
			var spaceStationCenterY = game.stationY_init+(game.mainContainerActors[2].height/2);
			var initSpeedXVal = game.thrustInitValue * Math.cos(game.spaceStationAngle+(Math.PI/2));
			var initSpeedYVal = game.thrustInitValue * Math.sin(game.spaceStationAngle+(Math.PI/2));
			//game.sats = {x:spaceStationCenterX, y:spaceStationCenterY, u:initSpeedXVal, v:initSpeedYVal, m:25, c:"#FF0000"};
			game.sats = {x:game.s1_x, y:game.s1_y, u:game.s1_u, v:game.s1_v, m:25, c:"#FF0000"};			
			//draw yellow arc
			var canvas = document.createElement('canvas');
			canvas.width = game._director.width;
			canvas.height = game._director.height - game.panelHeight;
			game.orbitPath.setBackgroundImage( canvas );
			game.orbitPath.__ctx = canvas.getContext('2d');
			game.orbitPath.__ctx.lineWidth = 1;
			game.orbitPath.__ctx.strokeStyle = '#e1e102';
			game.orbitPath.__ctx.fillStyle = 'none';
			game.orbitPath.__ctx.beginPath();
			game.orbitPath.__ctx.arc(380, 250, 180, 0,2*Math.PI);
			game.orbitPath.__ctx.stroke();
			game.orbitPath.__ctx.closePath();
		}
	}
	//================================================================
	// Let's initiate the spaceship and space station rotation
	//================================================================
	game.spaceStation_spaceShipInit = function() {
		//
		// Space ship
		//
		Physics.setTimestep(1);
		var deltaY = 250 - (game.spaceshipImg.y + (game.spaceshipImg.height/2));
		var deltaX = 380 - (game.spaceshipImg.x + (game.spaceshipImg.width/2));
		game.spaceshipAngle = Math.atan2(deltaY, deltaX);
		var spaceShipCenterX = game.spaceshipImg.x + (game.spaceshipImg.width/2);
		var spaceShipCenterY = game.spaceshipImg.y + (game.spaceshipImg.height/2);
		var initSpeedXVal = game.thrustValue * Math.cos(game.spaceshipAngle+(Math.PI/2));
		var initSpeedYVal = game.thrustValue * Math.sin(game.spaceshipAngle+(Math.PI/2));
		game.spaceshipImg.setRotationAnchored(Math.PI, 0.5, 0.5);
		game.sats = {x:spaceShipCenterX, y:spaceShipCenterY, u:initSpeedXVal, v:initSpeedYVal, m:25, c:"#FF0000"};
		//
		// Space station
		//
		spaceStation.setTimestep(1);
		var deltaY = 250 - (game.mainContainerActors[2].y+(game.mainContainerActors[2].height/2));
		var deltaX = 380 - (game.mainContainerActors[2].x+(game.mainContainerActors[2].width/2));
		game.spaceStationAngle = Math.atan2(deltaY, deltaX);
		var spaceStationCenterX = game.stationX_init+(game.mainContainerActors[2].width/2);
		var spaceStationCenterY = game.stationY_init+(game.mainContainerActors[2].height/2);
		var xyVal = makeTangent(380, 250, 180, 90);
		var initSpeedXVal = game.thrustInitValue * Math.cos(game.spaceStationAngle+(Math.PI/2));
		var initSpeedYVal = game.thrustInitValue * Math.sin(game.spaceStationAngle+(Math.PI/2));
		game.spaceStationConfig = {x:xyVal[0], y:xyVal[1], u:initSpeedXVal, v:initSpeedYVal, m:25, c:"#FF0000"};
		game.spaceStation_spaceShipRotate();
	}
	//================================================================
	// Lets rotate the space station
	//================================================================
	game.spaceStation_spaceShipRotate = function() {
		var ctrr = 0
		if(game.spaceStation_ShipRotationTimer) game.spaceStation_ShipRotationTimer.cancel();
		game.spaceStation_ShipRotationTimer = game._scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				if(ctrr%1 == 0) {	//slow the space ship and space station rotation
					if(!game.isCollided) {
						Physics.reCalc();
					}
					spaceStation.reCalc();
				}
				ctrr++;
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
		)	
	}
	//=======================================================
	// Space station
	//=======================================================
	var spaceStation = {};
	var timestep_s1 = 1;	
	spaceStation = function(opts) {
		return spaceStation;
	};
	spaceStation.setTimestep = function(ts)
	{
		timestep_s1 = ts;
	};
	spaceStation.reCalc = function()
	{
		//var collisions = [];
		var s1 = game.spaceStationConfig;
		var d_s1 = (s1.x - game.earth.x) * (s1.x - game.earth.x) + (s1.y - game.earth.y) * (s1.y - game.earth.y);
		if (d_s1 <= game.earth.r2) {
			// there is no collision of the space station on to the earth
		} else {
			var theta_s1 = Math.atan2(s1.y - game.earth.y, s1.x - game.earth.x);
			var k_s1 = -6.67300e-11 * game.earth.m * s1.m / d_s1;
			s1.u += ((k_s1 * Math.cos(theta_s1)) / s1.m) * timestep_s1;
			s1.v += ((k_s1 * Math.sin(theta_s1)) / s1.m) * timestep_s1;				
			s1.x += s1.u * timestep_s1;
			s1.y += s1.v * timestep_s1;
			game.s1_u = s1.u;
			game.s1_v = s1.v;
			game.s1_x = s1.x;
			game.s1_y = s1.y;
			game.spaceStationAngle = theta_s1;
			game.mainContainerActors[2].setRotationAnchored(theta_s1+3*(Math.PI/2), 0.5, 0.5);
			game.mainContainerActors[2].setLocation(s1.x -(game.mainContainerActors[2].width/2), s1.y - (game.mainContainerActors[2].height/2));
		}
	};
	//=======================================================
	// Thrust increase / decrease
	//=======================================================
	game.incDecHandler = function(obj){
		// After the spaceship has collided onto the earth / spaceship docked successfully, no further increment/decrement allowed
		if(game.isCollided || game.correctOrbitMsgShown) {
			game.allowSpeedChange = false;
			return;	
		}
		game.allowSpeedChange = true;
		game.spaceshipImg.playAnimation('normalOrbit');
		if(obj) var objId = obj.getId();
		if(objId == 'forwardThrust') {
			if(game.status != 'paused') {
				game.spaceshipImg.playAnimation('forwardThrust');
			}
			//game.thrustValue += game.thrustStepValue;
			if(game.s_u<0){
				game.s_u = game.s_u - game.thrustStepValue;
			}else{
				game.s_u = game.s_u + game.thrustStepValue;
			}
			if(game.s_v<0){
				game.s_v = game.s_v - game.thrustStepValue;
			}else{
				game.s_v = game.s_v + game.thrustStepValue;
			}
			var deltaY = 250 - (game.spaceshipImg.y + (game.spaceshipImg.height/2));
			var deltaX = 380 - (game.spaceshipImg.x + (game.spaceshipImg.width/2));
			game.spaceshipAngle = Math.atan2(deltaY, deltaX);
			var initSpeedXVal = game.s_u;
			var initSpeedYVal = game.s_v;
			var spaceShipCenterX = game.s_x;
			var spaceShipCenterY = game.s_y;
			game.sats = {x:spaceShipCenterX, y:spaceShipCenterY, u:initSpeedXVal, v:initSpeedYVal, m:25, c:"#FF0000"};
			game._sats = {x:spaceShipCenterX, y:spaceShipCenterY, u:initSpeedXVal, v:initSpeedYVal, m:25, c:"#FF0000"};
			drawOrbitPath(game._sats);
		} else if(objId == 'reverseThrust') {
			game.spaceshipImg.setAnimationImageIndex([0]);
			if(game.status != 'paused') {
				game.spaceshipImg.playAnimation('reverseThrust');
			}
			//game.thrustValue -= game.thrustStepValue;
			//game.oldThrustX = game.s_u;
			if(game.s_u <0){				
				game.s_u = game.s_u + game.thrustStepValue;
			}else{
				game.s_u = game.s_u - game.thrustStepValue;
			}
			if(game.s_v <0){
				game.s_v = game.s_v + game.thrustStepValue;
			}else{
				game.s_v = game.s_v - game.thrustStepValue;
			}			
			var deltaY = 250 - (game.spaceshipImg.y + (game.spaceshipImg.height/2));
			var deltaX = 380 - (game.spaceshipImg.x + (game.spaceshipImg.width/2));
			game.spaceshipAngle = Math.atan2(deltaY, deltaX);			
			var initSpeedXVal = game.s_u;
			var initSpeedYVal = game.s_v;
			var spaceShipCenterX = game.s_x;
			var spaceShipCenterY = game.s_y;
			game.sats = {x:spaceShipCenterX, y:spaceShipCenterY, u:initSpeedXVal, v:initSpeedYVal, m:25, c:"#FF0000"};
			game._sats = {x:spaceShipCenterX, y:spaceShipCenterY, u:initSpeedXVal, v:initSpeedYVal, m:25, c:"#FF0000"};
			drawOrbitPath(game._sats);
		}
		if(game.status == 'started' && !game.initialBannerHidden) {
			game.__bannerDisplay(0, 0, -70, 10, true);
			game.initialBannerHidden = true;
		}
		//update display values
		var d_ = (game.s_x - game.earth.x) * (game.s_x - game.earth.x) + (game.s_y - game.earth.y) * (game.s_y - game.earth.y);
		var speed = Math.sqrt( Math.pow(game.s_u, 2) + Math.pow(game.s_v, 2) );
		game.orbitalSpeed = speed * (game.orbitalSpeed_init / game.thrustInitValue);
		game.orbitalSpeed = Math.round((game.orbitalSpeed/1000)*100)/100;
		if(game.allowSpeedChange) {
			game.oDashTxtArr[1].setText(parseFloat(game.orbitalSpeed).toFixed(2));
		}
		//display the space ship's orbital radius
		var radius = Math.sqrt(d_);
		game.orbitalRadius = radius * (game.orbitalRadius_init / game.orbitRadiusRefInPx);
		game.orbitalRadius = Math.round((game.orbitalRadius/1E7)*100)/100;
		if(game.allowSpeedChange) {
			game.oDashTxtArr[6].setText(parseFloat(game.orbitalRadius).toFixed(2));
		}
	}
	//=======================================================
	// Let draw the path that the spaceship will make
	//=======================================================
	function drawOrbitPath( config ) {
		var canvas = document.createElement('canvas');
		canvas.width = game._director.width;
		canvas.height = game._director.height - game.panelHeight;
		game.orbitPath.setBackgroundImage( canvas );
		game.orbitPath.__ctx = canvas.getContext('2d');
		game.orbitPath.__ctx.lineWidth = 1;
		game.orbitPath.__ctx.strokeStyle = '#e1e102';
		game.orbitPath.__ctx.fillStyle = 'none';
		game.orbitPath.__ctx.beginPath();
		game.orbitPath.__ctx.moveTo(config.x, config.y);
		var _d_init = (config.x - game.earth.x) * (config.x - game.earth.x) + (config.y - game.earth.y) * (config.y - game.earth.y);
		var cntr = 0;
		var _timestep = 1;
		var _s = config;
		var _ix =_s.x;
		var _iy =_s.y;
		while(1) {
			var _d = (_s.x - game.earth.x) * (_s.x - game.earth.x) + (_s.y - game.earth.y) * (_s.y - game.earth.y);
			var _theta = Math.atan2(_s.y - game.earth.y, _s.x - game.earth.x);
			var _k = -6.67300e-11 * game.earth.m * _s.m / _d;
			_s.u += ((_k * Math.cos(_theta)) / _s.m) * _timestep;
			_s.v += ((_k * Math.sin(_theta)) / _s.m) * _timestep;
			_s.x += _s.u * _timestep;
			_s.y += _s.v * _timestep;
			game.orbitPath.__ctx.lineTo(_s.x, _s.y);
			cntr++;
			if(Math.abs(_ix-_s.x)<1 && Math.abs(_iy-_s.y)<1 && cntr>10000){
				break;
			}			
			if(cntr>20000){
				//for large curve just clear the previous drawn and break from the loop
				var canvas = document.createElement('canvas');
				canvas.width = game._director.width;
				canvas.height = game._director.height - game.panelHeight;
				game.orbitPath.setBackgroundImage( canvas );
				break;
			}	
		}
		game.orbitPath.__ctx.stroke();
	}
})();