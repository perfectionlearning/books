//==========================================================================
// Game Logic
//==========================================================================
(function() {
	var checkRefract,
		timer = null,
		refrect_y1 = 500,
		refrect_x1 = 0, 
		_x,
		_y,
		_x1,
		_y1,
		sub_refrect_y1 = 0,
		sub_refrect_x1 = 0,
		drawcheck = true,
		incDecCount = 0,
		incDecTimer = null,
		angleInc = 0,
		isIncReach = false,
		normal, 
		refrect_ang,
		critic_check,
		inter_section_x = 0,
		inter_section_y = 0,
		incidentAng = 0,
		reflectionAng = 0,
		refStartAng = 0, 
		refEndAng = 0,
		incStartAng = 0,
		incEndAng = 0;
		gameAngle = 0;
	var _tempCop1 = 1, _tempCop2 = 2, _tempCop3 = 3;
	
	game.incDecMExit = function(e){
		if(incDecTimer!=null){
			incDecTimer.cancel();
		}
		incDecCount = 0;
		CAAT.setCursor("default");
	}

	game.incDecMDown = function(e){
		if(incDecTimer!=null){
			incDecTimer.cancel();
		}
		if(game.isGameStart){
			return;
		}		
		_scene = game.getScene();
		angleInc = gameAngle;
		incDecTimer = _scene.createTimer(
						_scene.time, 
						Number.MAX_VALUE,
						function(scene_time, time_time, time_instance){	//callback_timeout
							//
						},
						function(scene_time, time_time, time_instance){
							incDecCount++;
							if(incDecCount%5 == 0){
								game.incDecHandler( e );
								incDecCount = 0;
							}
						}
						/*function(scene_time, time_time, time_instance){ //callback cancel
							if(incDecCount > 0) game.incDecMUp(window.event);
						}*/
					);
	}
	
	game.incDecMUp = function(e){
		if(incDecTimer!=null){
			incDecTimer.cancel();
		}
		if(game.isGameStart){
			return;
		}	
		incDecCount = 0;
		gameAngle = angleInc;
		incDecTimer.cancel();
	}
	
	game.incDecHandler = function( e ){
		//console.log(e.source.id, incDecCount, isIncReach);
		if(e.source.id == 'iniVelInc'){
			//angleInc = parseFloat(angleInc)+0.1;
			if(angleInc < 180 && !isIncReach){				
				//angleInc+=0.1;
				angleInc = parseFloat(angleInc)+0.1;
				game.updateArrowAngle(angleInc, 1);
			}else if(angleInc >= 180 && !isIncReach){	
				//angleInc-=0.1;			
				angleInc = parseFloat(angleInc)-0.1;
				isIncReach = true;
				game.updateArrowAngle(angleInc, 1);
			}else if(angleInc <= 180 && isIncReach){
				//angleInc-=0.1;
				angleInc = parseFloat(angleInc)-0.1;
				game.updateArrowAngle(angleInc, 1);
			}			
		}
		
		else if(e.source.id == 'iniVelDec'){
			if((angleInc-0.1) > 0.0){
				isIncReach = false;
				//angleInc-=0.1;
				angleInc = parseFloat(angleInc)-0.1;
				game.updateArrowAngle(angleInc, 1);
			}
		}		
	}
	
	game.updateAngle = function(angle){		
		var temp_ang = angle;
		var angle_in_rad = parseFloat(angle) * (Math.PI/180);
			game.angle = angle_in_rad;
		var angle_text;
		game.arrow_container[0].setRotationAnchored(angle_in_rad, 0.5, 0);
		
		if(angle>90 && angle<=180){
			var temp_angle = angle;
				temp_angle = angle - 360;
				temp_angle = parseFloat(temp_angle) * (Math.PI/180);
				game.angle = temp_angle;
		}
		
		if(angle>90 && angle<=180){
			angle = Math.abs((angle - 180).toFixed(1));
			game.angleTxt.setText(angle);
		}
		else{
			game.angleTxt.setText(angle);
		}
		
		//control the angle of the copter laser.
		if(angle>180 && angle<=270){
			angle_text = '0.0';
			game.angle = -3.16;
			game.arrow_container[0].setRotationAnchored(Math.PI, 0.5, 0);
			game.angleTxt.setText(angle_text);
		}
		else if(angle>270 && angle<=359){
			angle = 0;
			game.angle = Math.PI;
			angle_text = '0.0';
			game.arrow_container[0].setRotationAnchored(0, 0.5, 0);
			game.angleTxt.setText(angle_text);
		}
	}
	
	game.updateArrowAngle = function(angleInc, drag_incDec){
		//console.log('called ', angleInc, drag_incDec);
		if(drag_incDec == 0){
			gameAngle = game.angle * 180/Math.PI;
			if(gameAngle < 0){
				gameAngle = 360 + gameAngle;
			}
			gameAngle = (Math.floor(gameAngle * 10)/10).toFixed(1);
			game.updateAngle(gameAngle);
		}else if(drag_incDec == 1){
			var angle_btn = (Math.floor(angleInc * 10)/10).toFixed(1);
			game.updateAngle(angle_btn);
		}	
	}
	
	//=============================================
	//Draw arc of the incident and refraction line
	//=============================================
	game.drawArcCopter = function(chkArc){				
		game.array_Paint[0][game.createActorPaint-1].__ctx.beginPath();
		game.array_Paint[0][game.createActorPaint-1].__ctx.arc( inter_section_x, inter_section_y, 50, incStartAng, incEndAng );
		game.array_Paint[0][game.createActorPaint-1].__ctx.strokeStyle = 'black';
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineWidth = 1.5;
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineJoin = 'round';
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineCap = 'round';
		game.array_Paint[0][game.createActorPaint-1].__ctx.stroke();
		
		game.array_Paint[0][game.createActorPaint-1].__ctx.beginPath();
		game.array_Paint[0][game.createActorPaint-1].__ctx.arc( inter_section_x, inter_section_y, 50, refStartAng, refEndAng );
		game.array_Paint[0][game.createActorPaint-1].__ctx.stroke();

		var incidentAngle = (Math.floor(Math.abs((incidentAng) *(180/Math.PI)) * 10) / 10).toFixed(1)+String.fromCharCode(176);
		game.createAngleText(game.array_Paint[0][game.createActorPaint-1], incidentAngle, inter_section_x+5, inter_section_y - 70);
		
		var reflectionAngle = (Math.floor((Math.abs(reflectionAng) *(180/Math.PI)) * 10) / 10).toFixed(1)+String.fromCharCode(176);
		game.createAngleText(game.array_Paint[0][game.createActorPaint-1], reflectionAngle, inter_section_x-40, inter_section_y + 70);
	}
	
	game.createAngleText = function(oActContainer, angText, x, y){
		var angleTxt = game.__addTextOnImage('#000', angText, 'Bold 14px Arial', 'left', game._director );
		angleTxt.setLocation(x, y);
		oActContainer.addChild(angleTxt);
	}
	
	//=======================================================
	//Draw Intersection point of the incident and refraction
	//=======================================================
	game.draw_intersection_line = function(x1, y1, x2, y2, strkColor){
		game.array_Paint[0][game.createActorPaint-1].__ctx.beginPath();
		game.array_Paint[0][game.createActorPaint-1].__ctx.strokeStyle = strkColor;		
		game.array_Paint[0][game.createActorPaint-1].__ctx.dashedLine(x1, y1, x2+0.001, y2, [10,10]);	
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineWidth = 2;
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineJoin = 'round';
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineCap = 'round';
		game.array_Paint[0][game.createActorPaint-1].__ctx.stroke();		
	}
	game.goBtnMDownHandler = function(){	
		if(game.isGameStart){
			return;
		}		
		game.hide_pointer(true);
		game.hide_angletext(true);
		game.add_to_array();
		game_entry();
		checkRefract = false;	
		//_hit_area.emptyChildren();
	}
	
	game.resetMDownHandler = function(){
		game._reset_all();
		game.hide_pointer(false);
		game.hide_angletext(false);
		game.__bannerDisplay(0, 0, 50, 0, true);
		game.createActorPaint = 0;
		game.initialize();
	}
	function game_entry(){
		var x = game.actorx;
		var y = game.actory;
		var y1 = game.bg_Hi;
		var ang = game.angle;		
		var x1 = game.getHitxy(ang, x, y, y1);
	}
	
	game.getHitxy = function(theta, x, y, y1){		
		game.isGameStart = true;
		game.create_actor_paint();
		//get angle for draw incident arc of the line
		incStartAng = -(Math.PI/2);
		incEndAng = incStartAng+theta;
		incidentAng = theta;
		var theta1 = (180/Math.PI)*theta;
		if(theta1 <= 89 && theta1 >= -89){
			y1 = y1;
			checkRefract = true;
		}
		else if(theta1 <= -91){
			y1 = 0;
		}
		else if(theta1 == -90 || theta1 == 90 ){
			y1 = y1/2;
		}
		else{
			y1 = y1;
			checkRefract = true;
		}
		
		var x1 = x1_Point(theta, x, y, y1);
		
		if(theta1 == 90){
			x1 = 0;
		}
		_x = x;
		_y = y;
		_x1 = x1;
		_y1 = y1;

		var theta_0 = angle_between_2Points(x, y, x1, y1);	//angle of incidence		
		if(theta_0 < 0){
			normal = Math.PI / 2 * -1;
			theta_0 = normal - theta_0;
			theta_0 = Math.PI/2 - theta_0;
			refrect_ang = new_angle(theta_0, 1.0, 1.33, true);	  	//theta_0, N1 of Air, N2 of Water
			refrect_ang = -refrect_ang;			
		}
		else{
			normal = Math.PI / 2 * 1;
			theta_0 = theta_0 - normal;
			theta_0 = Math.PI/2 - theta_0;
			refrect_ang = new_angle(theta_0, 1.0, 1.33, true);	  	//theta_0, N1 of Air, N2 of Water
		}
		refStartAng = Math.PI/2;
		refEndAng = refrect_ang + refStartAng;
		reflectionAng = refrect_ang;
		
		refrect_x1 = x1_Point(refrect_ang, x1, y1, refrect_y1);
		create_timer_for_paint(true);
		drawcheck = true;
	}
	
	game.create_actor_paint = function(){
		var _director = game.getDirector();
		var _hit_area = game.getHitArea;
		game.array_Paint[1][game.createActorPaint-1]= document.createElement("canvas");
					game.array_Paint[1][game.createActorPaint-1].width = _director.width;
					game.array_Paint[1][game.createActorPaint-1].height = _director.height - 100;
					game.array_Paint[1][game.createActorPaint-1].x = 0;
					game.array_Paint[1][game.createActorPaint-1].y = 0;
	
		game.array_Paint[0][game.createActorPaint-1] = new CAAT.Foundation.ActorContainer().
				setBounds(0, 0, _director.width, _director.height - 100).
				setBackgroundImage(game.array_Paint[1][game.createActorPaint-1]);
		game.array_Paint[0][game.createActorPaint-1].name = "hit_area"+game.createActorPaint;
		game.array_Paint[0][game.createActorPaint-1].__ctx = game.array_Paint[1][game.createActorPaint-1].getContext("2d");
		_hit_area.addChild(game.array_Paint[0][game.createActorPaint-1]);
		
	}
	
	var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
	if (CP && CP.lineTo){
	  CP.dashedLine = function(x,y,x1,y1,dashArray){
		if (!dashArray) dashArray=[10,5];
		if (dashLength==0) dashLength = 0.001; // Hack for Safari
		var dashCount = dashArray.length;
		this.moveTo(x, y);
		var dx = (x1-x), dy = (y1-y);
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
		  draw = !draw;
		}
	  }
	}	
	function findRefrectAngle(check){
		if(check){
			_x1 = refrect_x1;
			_y1 = refrect_y1;
		}
		else{
			_x1 = sub_refrect_x1;
			_y1 = sub_refrect_y1;
			
			var ang = game.slope_of_2Points([_x, _y], [_x1, _y1]);			
			ang = Math.atan(ang);
			incStartAng = -(Math.PI/2);
			incEndAng = incStartAng+((Math.PI/2) - Math.abs(ang));
			incidentAng = ((Math.PI/2) - Math.abs(ang)); 
		}
	}
	function create_timer_for_paint(check_copter_sub){
		var _scene = game.getScene();
		timer = _scene.createTimer(
			_scene.time, //start time
			Number.MAX_VALUE, //Duration
			function(scene_time, time_time, time_instance){	//callback_timeout
				time_instance.reset(scene_time);
			},
			function(scene_time, time_time, time_instance){	//callback_tick			
				draw_in_Hitarea(_x, _y, "red");  //intial point
				_create_Timer(check_copter_sub);
				var round_y = parseFloat(_y.toFixed(0));
				if(round_y == 268 || round_y == 269 || round_y == 270 || round_y == 271 || round_y == 272){
					if(drawcheck){
						inter_section_x = _x;
						inter_section_y = _y;						
						drawcheck = false;
					}
					draw_in_Hitarea(_x, _y, "red"); //second point
					findRefrectAngle(check_copter_sub);
					_create_Timer(check_copter_sub);
				}
			});
	}
	function draw_in_Hitarea(x, y, col1){
		//Draw line on the canvas
		game.array_Paint[0][game.createActorPaint-1].__ctx.beginPath();
		game.array_Paint[0][game.createActorPaint-1].__ctx.moveTo(x, y);
		game.array_Paint[0][game.createActorPaint-1].__ctx.strokeStyle = col1;
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineWidth = 1.5;
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineJoin = 'round';
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineCap = 'round';
	}	
	function _create_Timer(chk_copter_sub){		
		if(game.isGameOver){
			return;
		}		
		var s = game.slope_of_2Points([_x, _y], [_x1, _y1]);	
		var xStep = Math.sqrt(1/(1 + s*s));
		xStep = xStep * 5;	
		if(_x > _x1){
			_x = _x - xStep;
			_y = _y - ((s * xStep));
		}
		else if(_x == _x1){
			_x = _x;
			_y = _y + (xStep);
		}
		else{
			_x = _x + xStep;
			_y = _y + ((s * xStep));
		}
		paint_Scene(_x, _y, chk_copter_sub)
		check_game_over();	
	}	
	function draw_line(x1, y1){
		game.array_Paint[0][game.createActorPaint-1].__ctx.lineTo(x1, y1);
		game.array_Paint[0][game.createActorPaint-1].__ctx.stroke();
	}	
	function check_game_over(){		
		if(_tempCop1 ==0){
			timer.cancel();
			game.__bannerDisplay(2, 2, 50, 0, true);
			game.isGameOver = true;
			game.hide_pointer(false);
			game.hide_angletext(true);
		}
		else if(_tempCop2 ==0 && _tempCop3 ==0){
			timer.cancel();
			game.__bannerDisplay(1, 1, 50, 0, true);
			game.isGameOver = true;
			game.hide_pointer(false);
			game.hide_angletext(false);
		}	
	}
	function paint_Scene(x, y, chk_copter_sub){
		
		//this is for copter3
		var setBG = game.setBG;
		var _director = game.getDirector();
		var _hit_area = game.getHitArea;
		
		if(x >= (game.captorArr[0][0] + ((60 - game.captorArr[0][2])/2)) && x <= (game.captorArr[0][0] + ((60 - game.captorArr[0][2])/2) + game.captorArr[0][2]) && y >= (game.captorArr[0][1] + ((20 - game.captorArr[0][3])/2)) && y <= (game.captorArr[0][1] + ((20 - game.captorArr[0][3])/2) + game.captorArr[0][3]) && _tempCop1 == 1){
			if(game._actor != 'pointer_0' || chk_copter_sub != true){
				_tempCop1 = 0;
				timer.cancel();
				draw_line(x, y);  //added for filling the object
				game.copterArray[0].setSpriteIndex(0+3);
				setBG.removeChild(game.arrow_container[2]);
				game.hide_pointer(true);
				game.hide_angletext(true);
				game.isGameStart = true;				
				//sub_marine_turn();				
				game.draw_intersection_line(inter_section_x, 0, inter_section_x, 500, 'black');
				game.drawArcCopter(true);
			}
		}
		//this is for sub marine 3
		else if(x >= (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2)) && x <= (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2) + game.captorArr[1][2]) && y >= (game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2)) && y <= (game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2) + game.captorArr[1][3]) && _tempCop2 == 2){
			_tempCop2 = 0;
			timer.cancel();
			draw_line(x, y);  //added for filling the object
			game.copterArray[1].setSpriteIndex(1+3);
			game.hide_pointer(false);
			game.hide_angletext(false);
			game.isGameStart = false;
			check_sub_xy();
			game.draw_intersection_line(inter_section_x, 0, inter_section_x, 500, 'black');
			game.drawArcCopter(false);
			var pos = _hit_area.findChild(game.array_Paint[0][0]);
			_hit_area.removeChildAt(pos);
		}
		
		//this is for sub marine 1
		else if(x >= (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2)) && x <= (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2) + game.captorArr[2][2]) && y >= (game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2)) && y <= (game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2) + game.captorArr[2][3]) && _tempCop3 == 3){
			_tempCop3 = 0
			timer.cancel();
			draw_line(x, y);  //added for filling the object
			game.copterArray[2].setSpriteIndex(2+3);
			game.hide_pointer(false);
			game.hide_angletext(false);
			game.isGameStart = false;
			check_sub_xy();
			game.draw_intersection_line(inter_section_x, 0, inter_section_x, 500, 'black');
			game.drawArcCopter(false);
			var pos = _hit_area.findChild(game.array_Paint[0][1]);
			_hit_area.removeChildAt(pos);
		}	
		
		//this is for beyond hit area
		else if(y >= _director.height - 100 || y <= 1 || x>=760 || x<=1){
			timer.cancel();
			draw_line(x, y);  //added for filling the object
			var pos = _hit_area.findChild(game.array_Paint[0][game.createActorPaint-1]);
			_hit_area.removeChildAt(pos);
			if(chk_copter_sub){
				game.isGameStart = true;
				sub_marine_turn();
			}
			else{
				game.isGameStart = false;
				game.hide_pointer(false);
				game.hide_angletext(false);
			}
			return;
		}
		//paint in remaining area
		else{
			draw_line(x, y);
		}	
	}
	function check_sub_xy(){
		game.sub_point = new Array();
		var a = Math.max(Math.max(_tempCop2, _tempCop3));
		if( a == 2){
			game.sub_point[0] = [((game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2)) + (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2) + game.captorArr[1][2]))/2, game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2), 'pointer_1'];
			game.sub_point[1] = [((game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2)) + (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2) + game.captorArr[1][2]))/2, game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2), 'pointer_1'];
		}
		else if(a == 3){
			if(_tempCop2 == 0){
			game.sub_point[0] = [((game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2)) + (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2) + game.captorArr[2][2]))/2, game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2), 'pointer_2'];
			game.sub_point[1] = [((game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2)) + (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2) + game.captorArr[2][2]))/2, game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2), 'pointer_2'];
			}
			else{
			game.sub_point[0] = [((game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2)) + (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2) + game.captorArr[1][2]))/2, game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2), 'pointer_1'];
			game.sub_point[1] = [((game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2)) + (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2) + game.captorArr[2][2]))/2, game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2), 'pointer_2'];
			}
		}	
	}
	function crtical_angle(theta){
		var thet = 230 * (Math.tan(theta));
		return thet;
	}
	
	function sub_marine_turn(){		
		refStartAng = 0, 
		refEndAng = 0,
		incStartAng = 0,
		incEndAng = 0;
			
		game.add_to_array();
		RandomArray(game.sub_point);
		game.create_actor_paint();
		
		_x = game.sub_point[0][0];
		_y = game.sub_point[0][1];
		
		
		random_hit_submarine();
		var theta_0 = angle_between_2Points(_x, _y, _x1, _y1);		

		//get angle for draw incident arc of the line
		refStartAng = (Math.PI/2);
		refEndAng = refStartAng + Math.abs(theta_0);				
		reflectionAng = Math.abs(theta_0);
		
		
		if(theta_0 < 0){
			normal = Math.PI / 2 * -1;
			theta_0 = normal - theta_0;
			theta_0 = Math.PI/2 - theta_0;
			theta_0 = Math.PI - theta_0;
			refrect_ang = new_angle(theta_0, 1.00, 1.33, false);	  	//theta_0, N1 of air, N2 of water
			refrect_ang = -refrect_ang;
			critic_check = false;
		}
		else{
			normal = Math.PI / 2 * 1;
			theta_0 = theta_0 - normal;
			theta_0 = Math.PI/2 - theta_0;
			theta_0 = Math.PI - theta_0;
			refrect_ang = new_angle(theta_0, 1.00, 1.33, false);	  	//theta_0, N1 of air, N2 of water
			critic_check = true;
		}		
		
		var theta_0_deg = theta_0 * 180/Math.PI;		
		var critical_angle = Math.asin(1/1.33) * (180/Math.PI);		
		critical_angle = critical_angle.toFixed(2);
		theta_0_deg = theta_0_deg.toFixed(2);

		if(parseFloat(theta_0_deg) == parseFloat(critical_angle)){ //this occurs when angle of incidence is equal to critical angle
			sub_refrect_y1 = 270;
			if(critic_check){
				sub_refrect_x1 = 0;
			}
			else{
				sub_refrect_x1 = 760;
			}
		}
		else if(parseFloat(theta_0_deg) > parseFloat(critical_angle)){  //beyond the critical angle
			sub_refrect_y1 = 500;
			if(critic_check){
				var c_theta = crtical_angle(theta_0_deg * (Math.PI/180));
				sub_refrect_x1 = _x1 - c_theta;
			}
			else
			{
				var c_theta = crtical_angle(theta_0_deg * (Math.PI/180));
				sub_refrect_x1 = _x1 + c_theta;
			}
		}
		else{	//within the critical angle
			sub_refrect_y1 = 0;
			//sub_refrect_x1 = x1_Point(refrect_ang, _x1, _y1, 500);
			
			var _sub_actor = game.sub_point[0][2];

			if(_sub_actor == 'pointer_1'){
				//sub_refrect_x1 = 862;	
				sub_refrect_x1 = hitArray[0][0];
			}else if(_sub_actor == 'pointer_2'){
				//sub_refrect_x1 = 768;
				sub_refrect_x1 = hitArray[0][2];
			}
		}
		create_timer_for_paint(false);
		drawcheck = true;
	}

	var hitArray = [];
		hitArray[hitArray.length] = [862, 261.5, 768, 580];
		hitArray[hitArray.length] = [780, 220, 720, 555];
		hitArray[hitArray.length] = [880, 320, 820, 555];
		hitArray[hitArray.length] = [880, 280, 820, 555];
		

	function random_hit_submarine(){
		var _sub_actor = game.sub_point[0][2];
		var actorx = game.actorx;
		var actory = game.actory;
		
		RandomArray(hitArray);

		//console.log(hitArray[0]);

		if(_sub_actor == 'pointer_1'){	//submarine 1
			//_x1 = Math.floor((Math.random() * 5) + (actorx-370));
			//_x1 = 261.5;
			_x1 = hitArray[0][1];
			_y1 = 270;
		}
		else if(_sub_actor == 'pointer_2'){	//submarine 2
			//_x1 = Math.floor((Math.random() * 5) + (actorx-110));
			//_x1 = 580;
			_x1 = hitArray[0][3];
			_y1 = 270;
		}	
	}
	
	game.slope_of_2Points = function(from, to){
		var x=from[0], y=from[1], dx, dy, slope;
		if(x > to[0]){
			dx = to[0] - x;
			dy = to[1] - y;
		}
		else if(x == to[0]){
			slope = 0;
			return slope;
		}
		else{
			dx = x - to[0];
			dy = y - to[1];
		}
		slope = dy/dx;		
		return slope;
	}
	
	function x1_Point(theta, x, y, y1){
		var m = Math.tan(theta-(Math.PI/2));
		var c = y - (m * x);
		var x1 = (y1 - c) / m;
		return x1;
	}
	
	function angle_between_2Points(x1, y1, x, y){
		var deltaX = y1 - y;
		var deltaY = x1 - x;
		var angleInRadians = Math.atan2(deltaY, deltaX);		
		return angleInRadians;
	}
	
	function new_angle(angleInc, n1, n2, check){
		var angRef;
		if(check){
			angRef = Math.asin((n1 * Math.sin(angleInc))/n2);
		}
		else{
			angRef = Math.asin((n2 * Math.sin(angleInc))/n1);
		}		
		return angRef;
	}
	
	game.hide_pointer = function(check){
		for(var i=0;i<game.pointerArr.length;i++){
			if(check){
				if(game.arrow_container[i].name == "pointer_"+i){
					game.arrow_container[i].visible = false;
				}
			}
			else
			{
				if(game.arrow_container[i].name == "pointer_"+i){
					game.arrow_container[i].visible = true;
				}
			}
		}
	}
	
	game.hide_angletext = function(check){
		if(check){
			game.array_Paint[0][0].visible = false;
			game.array_Paint[0][1].visible = false;
		}
		else
		{
			game.array_Paint[0][0].visible = true;
			game.array_Paint[0][1].visible = true;
		}
	}
	
	function RandomArray(myArray) {
	  var i = myArray.length;
	  if ( i == 0 ) return false;
	  while ( --i ) {
		 var j = Math.floor( Math.random() * ( i + 1 ) );
		 var tempi = myArray[i];
		 var tempj = myArray[j];
		 myArray[i] = tempj;
		 myArray[j] = tempi;
	   }
	}
	
	game._reset_all = function(){
		var _hit_area = game.getHitArea;
		if(timer != null)
			timer.cancel();
		_tempCop1 = 1, _tempCop2 = 2, _tempCop3 = 3;
		//game.angle = Math.PI;
		game.sub_point = new Array();
			/*game.sub_point[0] = [((game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2)) + (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2) + game.captorArr[1][2]))/2, game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2), 'pointer_1'];
			game.sub_point[1] = [((game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2)) + (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2) + game.captorArr[2][2]))/2, game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2), 'pointer_2'];*/
			game.sub_point[0] = [82, 460, 'pointer_1'];
			game.sub_point[1] = [497, 444, 'pointer_2'];
		game.isGameOver = false;
		game.isGameStart = false;
		game.laserPointer_Angle(game.pointerActor, 726, 120);
		_hit_area.emptyChildren();
		//remove_All_Pointer();
		change_SpritImage();
		//game.addPointeronScene();
		refStartAng = 0, 
		refEndAng = 0,
		incStartAng = 0,
		incEndAng = 0;
		angleInc = 0;
		game.angle = 0;
	}
	
	function change_SpritImage(){
		game.copterArray[0].setSpriteIndex(0);
		game.copterArray[1].setSpriteIndex(1);
		game.copterArray[2].setSpriteIndex(2);	
	}
	
	function remove_All_Pointer(){
		var setBG = game.setBG;
		setBG.removeChild(game.arrow_container[0]);
		setBG.removeChild(game.arrow_container[1]);
		setBG.removeChild(game.arrow_container[2]);
	}
})();