//
//	Game Logic
//
(function(){
	game.status = null, game.isFired = false;
	game.ls_lower = 2600, game.ls_upper = 2620;
	game.or_lower = 42200, game.or_upper = 42300;
	game.satelliteAnglePhy = 0;
	game.degreePerUnitTime = 0;
	game.isCorrectLaunch = false;
	game.journey = 'first';
	game.totalPauseTime = 0;
	game.timerCnt = 0;
	game.smallTiltAng = 0;
	game.wrongOrbitMsgShown = false, game.correctOrbitMsgShown = false, game.initialBannerHidden = false;
	game.__createarc = function(){	
		game.graph_actor = new CAAT.Foundation.ActorContainer().							
								setBounds( 0, 0, game._director.width, game._director.height).							
								setClip(false)
								//.setFillStyle('#F00');	
		game.graph_actor.paint = function(director, time){	
			var canvas = director.ctx;
			canvas.beginPath();
			canvas.lineWidth = 2;
			canvas.strokeStyle = 'yellow';
			canvas.arc(380, 250, 199, 0,2*Math.PI);
			canvas.stroke();
			canvas.closePath();		
		}
		game.mainPanel.addChild(game.graph_actor);	
	}
	//earth image's configuration
	game.earth = {
		x: 380,
		y: 250,
		r: 30,
		r2: 30*30,
		m:50
	}
	game.earth.m = game.earth.m * 10e10;
	game.orbitRadiusRefInPx = 199;
	//Magic number - do not change this
	game.initXVeloRef = 1.3035496183206106870229007633588;
	game.earthAngle = -90;
	//=======================================================
	// On clicking go button
	//=======================================================
	game.goBtnMDownHandler = function() {
		if(game.status == 'started') return;	
		
		//get the values from the input elements
		game.launchSpeedFromInput = ( game.inputElementsArr[0].value );
		game.orbitalRadiusFromInput = ( game.inputElementsArr[1].value );
		//if the launch speed / orbital radius is left empty then set its default to empty
		if(game.launchSpeedFromInput.trim().length == 0 && game.orbitalRadiusFromInput.trim().length == 0) {
			game.launchSpeedFromInput = 0;
			game.inputElementsArr[0].value = 0;
			game.orbitalRadiusFromInput = 0;
			game.inputElementsArr[1].value = 0;
		}
		game.inputElementsArr[0].readOnly = true;
		game.inputElementsArr[1].readOnly = true;
		if(isNaN(game.launchSpeedFromInput)){
			game.launchSpeedFromInput = 0;
			game.inputElementsArr[0].value = 0;
		}
		if(isNaN(game.orbitalRadiusFromInput)){
			game.orbitalRadiusFromInput = 0;
			game.inputElementsArr[1].value = 0;
		}
		/*
		if(game.orbitalRadiusFromInput == 0 ){
			//onCollision();
			//return;
		}
		*/
		// if the launch speed is within the range then let the satellite travel on correct path
		if( game.launchSpeedFromInput >= game.ls_lower && game.launchSpeedFromInput <= game.ls_upper ) {
			game.launchSpeedFromInput = 2620;
		}
		// if the orbital radius is within the range then let the satellite travel on correct path
		if( game.orbitalRadiusFromInput >= game.or_lower && game.orbitalRadiusFromInput <= game.or_upper ) {
			game.orbitalRadiusFromInput = 42300;
		}
		//set timestamp
		Physics.setTimestep(0.9);
		game.isFired = true;				
		var initRadius = game.orbitalRadiusFromInput * ( game.orbitRadiusRefInPx / 42300 );
		var xxVal = game.spaceshipImg.viewVertices[0].x + (game.spaceshipImg.viewVertices[1].x-game.spaceshipImg.viewVertices[0].x)/2;
		var yyVal = game.spaceshipImg.viewVertices[0].y + (game.spaceshipImg.viewVertices[1].y-game.spaceshipImg.viewVertices[0].y)/2;
		
		var deltaY = 250 - yyVal;
		var deltaX = 380 - xxVal;
		game._spaceshipAngle = (Math.atan2(-deltaY, -deltaX))*(180/Math.PI);
		
		var init_xyVal = makeTangent(380, 250, 50, game._spaceshipAngle);		
		var X1 = init_xyVal[0];
		var Y1 = init_xyVal[1];
		
		var xyVal = makeTangent(380, 250, initRadius - 17, game._spaceshipAngle);
		var X2 = xyVal[0];
		var Y2 = xyVal[1];
		
		var actualTime = getRequiredTime(X1, Y1, X2, Y2);
		var totalDegrees = game.degreePerUnitTime * actualTime;
		var _xyVal = makeTangent(380, 250, initRadius - 17, game._spaceshipAngle + totalDegrees);
		var _X2 = _xyVal[0];
		var _Y2 = _xyVal[1];
		
		var totalDistance = initRadius;
		var totalTime = actualTime;//2;
		var totalSpeed = totalDistance / totalTime;
			
		var tangentAsPath = new CAAT.PathBehavior()
					.setValues( new CAAT.Path().setColor("#000").setLinear(
						X1, Y1, _X2, _Y2
					))
					.setDelayTime( 0, getRequiredTime(X1, Y1, X2, Y2) * 1000 );
		game.spaceshipImg.setRotationAnchor(0.5, 0.5);
		
		if(game.status != 'paused') {
			game.startTime = new Date().getTime();
			game.spaceshipImg.setPositionAnchor(0.5, 0.5);
			launchSatellite(totalSpeed, initRadius);
			//if activity is started fresh
			/*
			game.spaceshipImg			
				.setPositionAnchor(0.5, 0.5)
				.addBehavior(tangentAsPath);
			*/
			//when the satellite is being launched show the thrust flame
			
			game.spaceshipImg.playAnimation('beforeOrbit');
		} else if(game.status == 'paused') {
			if(game.journey == 'first') {
				game.endPauseTime = new Date().getTime();
				game.totalPauseTime = game.totalPauseTime + game.endPauseTime - game.startPauseTime;
			}
			game.rotateEarth();
			//if activity is started from paused state then continue revolution
			launchSatellite(totalSpeed, initRadius);
		}
		if(!game.correctOrbitMsgShown && !game.wrongOrbitMsgShown){		
			//hide initial banner
			if(game.status == 'started' && !game.initialBannerHidden) {
				game.__bannerDisplay(0, 0, 10, 80, true);
				game.initialBannerHidden = true;
			}
		}
		game.status = 'started';
		if(game.orbitalRadiusFromInput == 42300 && game.launchSpeedFromInput == 2620) {
			correctLaunch();
		}
	}
	//=======================================================
	// Hurray, Satellite launching
	//=======================================================
	function launchSatellite(tSpeed, initDist1) {
		game.satelliteMotion = game._scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				game.currentTime = new Date().getTime();
				game.elapsedTime = (game.currentTime - game.totalPauseTime - game.startTime)/1000;
				//50 represents the top of the satellite from middle of the earth before launch
				var _dist = 50+(tSpeed * game.elapsedTime);
				if(initDist1 < 50) {
					//for calculated value lesser than 50
					var initDist = initDist1 + 50;	
				} else {
					//if the calculated value is greater than 50 then use as it is 
					var initDist = initDist1;	
				}
				var xyValues = makeTangent(380, 250, _dist, game.earthAngle);
				if(_dist < initDist ) {
					game.journey = 'first';
					game.spaceshipImg.setRotationAnchored((game.earthAngle+90)*(Math.PI/180), 0.5, 0.5);
					game.spaceshipImg.setLocation(xyValues[0], xyValues[1]);
				} else {
					if(game.journey == 'first') {
						_dist = initDist - 1;	
					} else {
						_dist = initDist;
					}
					game.journey = 'second';
					//only the first value of the second journey is give as init points for the satellite					
					if(game.timerCnt == 0) {
						game.totalPauseTime = 0;
						var xyValues = makeTangent(380, 250, _dist, game.earthAngle);
						//var xxVal = game.spaceshipImg.viewVertices[0].x + (game.spaceshipImg.viewVertices[1].x-game.spaceshipImg.viewVertices[0].x)/2;
						//var yyVal = game.spaceshipImg.viewVertices[0].y + (game.spaceshipImg.viewVertices[1].y-game.spaceshipImg.viewVertices[0].y)/2;
						var deltaY = 250 - game.spaceshipImg.y;
						var deltaX = 380 - game.spaceshipImg.x;
						game.spaceshipAngle = Math.atan2(-deltaY, -deltaX);
						
						var scaleDownXVal = game.launchSpeedFromInput * ( game.initXVeloRef / 2620 );
						var initSpeedXVal = scaleDownXVal * Math.cos(game.spaceshipAngle+(Math.PI/2)) ;
						
						var scaleDownYVal = game.launchSpeedFromInput * ( game.initXVeloRef / 2620 );
						var initSpeedYVal = scaleDownYVal * Math.sin(game.spaceshipAngle+(Math.PI/2));
						var spaceShipCenterX = game.spaceshipImg.x;
						var spaceShipCenterY = game.spaceshipImg.y;
						sats = {x:xyValues[0], y:xyValues[1], u:initSpeedXVal, v:initSpeedYVal, m:25, c:"#FF0000"};
						game.spaceshipImg.playAnimation('onReachingOrbit');
					}
					
					game.timerCnt++;
					Physics.reCalc();	
				}
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
		)
	}
	//=======================================================
	// On clicking the reset button
	//=======================================================
	game.resetBtnMDownHandler = function() {
		game.status = null;
		game.inputElementsArr[0].readOnly = false;
		game.inputElementsArr[1].readOnly = false;
		game.isFired = false;
		game.earthAngle = -90;
		game.satelliteAnglePhy = 0;
		game.degreePerUnitTime = 0;
		game.isCorrectLaunch = false;
		game.wrongOrbitMsgShown = false;
		game.correctOrbitMsgShown = false;
		game.initialBannerHidden = false;
		game.journey = 'first';
		game.totalPauseTime = 0;
		game.timerCnt = 0;
		game.spaceshipImg.setAlpha(1);
		game.smallTiltAng = 0;
		game.spaceshipImg.emptyBehaviorList();
		if(game.earthRotation) game.earthRotation.cancel();
		if(game.satelliteMotion) game.satelliteMotion.cancel();
		if(game.correctLaunchBannerTimer) game.correctLaunchBannerTimer.cancel();
		game.__bannerDisplay(0, 0, 10, 80, false);
		game.spaceshipImg
			.playAnimation("beforeLaunch")
			.setPositionAnchor(0, 0)
			.setRotationAnchored(0, 0.5, 1.5)
			.setLocation(180 - (game.spaceshipImg.width/2), 300 - (game.spaceshipImg.height/2));
		game.spaceshipImg.setLocation(380 - (game.spaceshipImg.width/2), 250-50);
		game.redPoint.setLocation(380 - Math.ceil(game.redPoint.width/2), 250-33);
		game.rotateEarth();
	}
	//=======================================================
	// Make tangent path for the car at all points of rotation
	//=======================================================
	function makeTangent(cx,cy,r,a){
		ang=(Math.PI/180)*a;
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
	//================================================================
	// Lets rotate the earth and satellite
	//================================================================
	game.rotateEarth = function() {
		var timeLimit = 0;
		game.earthRotation = game._scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				if(timeLimit%3 == 0) {
					if(!game.isFired){		
						game.mainContainerActors[1].setRotationAnchored((game.earthAngle+90)*(Math.PI/180), 0.5, 0.5);
						game.redPoint.setRotationAnchored((game.earthAngle+90)*(Math.PI/180), 0.5, 5.5);
						game.spaceshipImg.setRotationAnchored((game.earthAngle+90)*(Math.PI/180), 0.5, 1.5);						
						game.spaceshipAngle = game.earthAngle;
					} else if(game.isFired && game.isCorrectLaunch && game.satelliteAnglePhy != 0){
						game.mainContainerActors[1].setRotationAnchored((game.satelliteAnglePhy+Math.PI/2), 0.5, 0.5);
						game.redPoint.setRotationAnchored((game.satelliteAnglePhy+Math.PI/2), 0.5, 5.5);
					} else {
						game.mainContainerActors[1].setRotationAnchored((game.earthAngle+90)*(Math.PI/180), 0.5, 0.5);
						game.redPoint.setRotationAnchored((game.earthAngle+90)*(Math.PI/180), 0.5, 5.5);
					}
					game.earthAngle += 1;
					if(game.earthAngle >= 360){
						game.earthAngle = 0;
					}
					timeLimit = 0;
				}
				timeLimit++;
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
		)	
		game.degreePerUnitTime = 1 / 0.1;
	}	
	//=======================================================
	// On click of the pause button
	//=======================================================
	game.pauseBtnMDownHandler = function(){
		if(game.status == null) return;	//dont allow to pause when is not yet started
		game.status = 'paused';
		game.startPauseTime = new Date().getTime();
		game.inputElementsArr[0].readOnly = true;
		game.inputElementsArr[1].readOnly = true;
		if(game.earthRotation) game.earthRotation.cancel();
		if(game.satelliteMotion) game.satelliteMotion.cancel();
	}
	//=======================================================
	// When their is no enough orbital radius or launch speed
	// the satellite collides on the earth
	//=======================================================
	function onCollision() {
		game.spaceshipImgObj.addAnimation(
			"collide",    
			[27, 28, 29, 30, 31, 32, 33, 34], 
			100, 
			function() {
				game.spaceshipImg.setAlpha(0);
			}
		);	
		game.spaceshipImg.playAnimation("collide");
		if(game.satelliteMotion) game.satelliteMotion.cancel();
		game.__bannerDisplay(1, 1, 10, 80, false);
	}
	//=======================================================
	// If the satellite launch was success then congrats!!! 
	// You made it. Cheers
	//=======================================================
	function correctLaunch() {
		if(game.correctOrbitMsgShown) return;		
		var startTime = new Date().getTime();
		//hide initial banner
		if(game.status == 'started' && !game.initialBannerHidden) {
			game.__bannerDisplay(0, 0, 10, 80, true);
			game.initialBannerHidden = true;
		}
		game.isCorrectLaunch = true;
		//congrats message show at some delay. here 2 seconds delay
		if(game.correctLaunchBannerTimer) game.correctLaunchBannerTimer.cancel();
		game.correctLaunchBannerTimer = game._scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {
			}, // timeout
			function (scene_time, timer_time, timertask_instance) {
				var currentTime = new Date().getTime();
				var elaspsedTime = (currentTime - startTime);
				if(game.status == 'started' && elaspsedTime > 2000) {
					game.__bannerDisplay(2, 2, 10, 80, false);
					game.correctOrbitMsgShown = true;
					this.cancel();
				}	
			},   // tick
			function (scene_time, timer_time, timertask_instance) {} // cancel
		)
	}
	//=======================================================
	// Physics
	//=======================================================
	var Physics = {};
	var timestep = 1;	
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
		var s = sats;
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
			game.satelliteAnglePhy = theta;
			//if the launch speed was zero then turn the satellite and make it fall on the earth
			if(game.launchSpeedFromInput == 0){
				game.smallTiltAng += 0.01;
				game.spaceshipImg.setRotationAnchored(theta+Math.PI+(game.smallTiltAng), 0.5, 0.5);
				if(game.smallTiltAng > 0.8 && game.wrongOrbitMsgShown ==  false) {
					game.__bannerDisplay(1, 1, 10, 80, false);
					game.wrongOrbitMsgShown = true;
				}
			} else {
				game.spaceshipImg.setRotationAnchored(theta+Math.PI, 0.5, 0.5);
				//if the launch speed was too high
				if(game.launchSpeedFromInput > game.ls_upper && game.wrongOrbitMsgShown ==  false) {
					game.__bannerDisplay(1, 1, 10, 80, false);
					game.wrongOrbitMsgShown = true;
				}
				//if the orbital radius was too big
				else if(game.orbitalRadiusFromInput > game.or_upper && game.wrongOrbitMsgShown ==  false) {
					game.__bannerDisplay(1, 1, 10, 80, false);
					game.wrongOrbitMsgShown = true;
				} 
				//if the launch speed / orbital radius was too low
				else if( (game.orbitalRadiusFromInput < game.or_lower || game.launchSpeedFromInput < game.ls_lower) && game.wrongOrbitMsgShown ==  false) {
					game.__bannerDisplay(1, 1, 10, 80, false);
					game.wrongOrbitMsgShown = true;
				} 
			}
			game.spaceshipImg.setLocation(s.x , s.y);
		}
	};
})();