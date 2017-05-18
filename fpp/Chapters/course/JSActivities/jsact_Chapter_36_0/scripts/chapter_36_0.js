
;(function() {

//==========================================================================
// Game Logic
//==========================================================================
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
	drawcheck = true;

var _tempCop6 = 6, _tempCop4 = 4, _tempCop5 = 5, _tempCop1 = 1, _tempCop2 = 2, _tempCop3 = 3;

game.goBtnMDownHandler = function(){	
	if(game.isGameStart){
		return;
	}
	game.hide_pointer(true);
	game.add_to_array();
	game_entry();
	checkRefract = false;	
}
game.resetMDownHandler = function(){
	game._reset_all();
	game.hide_pointer(false);
	game.__bannerDisplay(0, 50, game.bannerContainerInitYPos, true);
	game.createActorPaint = 0;
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
	create_actor_paint();
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
	var normal, refrect_ang;
	
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
	
	refrect_x1 = x1_Point(refrect_ang, x1, y1, refrect_y1);
	create_timer_for_paint(true);
	drawcheck = true;
}

function create_actor_paint(){
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

function draw_intersection_line(){
	game.array_Paint[0][game.createActorPaint-1].__ctx.beginPath();
	game.array_Paint[0][game.createActorPaint-1].__ctx.strokeStyle = 'black';
	game.array_Paint[0][game.createActorPaint-1].__ctx.dashedLine(_x, 0, _x+0.001, 500, [10,10]);	
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineWidth = 1;
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineJoin = 'round';
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineCap = 'round';
	game.array_Paint[0][game.createActorPaint-1].__ctx.stroke();
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
					draw_intersection_line();
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
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineWidth = 1;
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineJoin = 'round';
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineCap = 'round';
}

function _create_Timer(chk_copter_sub){
	
	if(game.isGameOver){
		return;
	}
	
	var s = slope_of_2Points([_x, _y], [_x1, _y1]);
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
	
	if(_tempCop3==0 && _tempCop1 ==0 && _tempCop2 ==0){
		timer.cancel();
		game.__bannerDisplay(2, 50, game.bannerContainerInitYPos, true);
		game.isGameOver = true;
	}
	else if(_tempCop6 ==0 && _tempCop4 ==0 && _tempCop5 ==0){
		timer.cancel();
		game.__bannerDisplay(1, 50, game.bannerContainerInitYPos, true);
		game.isGameOver = true;
	}

}

function paint_Scene(x, y, chk_copter_sub){
	//this is for copter3
	var setBG = game.setBG;
	var _director = game.getDirector();
	var _hit_area = game.getHitArea;
	
	if(x >= (game.captorArr[0][0] + ((60 - game.captorArr[0][2])/2)) && x <= (game.captorArr[0][0] + ((60 - game.captorArr[0][2])/2) + game.captorArr[0][2]) && y >= (game.captorArr[0][1] + ((20 - game.captorArr[0][3])/2)) && y <= (game.captorArr[0][1] + ((20 - game.captorArr[0][3])/2) + game.captorArr[0][3]) && _tempCop3 == 3){
		if(game._actor != 'pointer_2' || chk_copter_sub != true){
			_tempCop3 = 0;
			timer.cancel();
			draw_line(x, y);  //added for filling the object
			game.copterArray[0].setSpriteIndex(0+6);
			setBG.removeChild(game.arrow_container[2]);
			game.hide_pointer(true);
			game.isGameStart = true;
			if(chk_copter_sub != true){
				check_hit_xy();
			}
			sub_marine_turn();
		}
	}
	//this is for copter2
	else if(x >= (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2)) && x <= (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2) + game.captorArr[1][2]) && y >= (game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2)) && y <= (game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2) + game.captorArr[1][3]) && _tempCop2 == 2){
		if(game._actor != 'pointer_1' || chk_copter_sub != true){
			_tempCop2 = 0;
			timer.cancel();
			draw_line(x, y);  //added for filling the object
			game.copterArray[1].setSpriteIndex(1+6);
			setBG.removeChild(game.arrow_container[1]);
			game.hide_pointer(true);
			game.isGameStart = true;
			if(chk_copter_sub != true){
				check_hit_xy();
			}
			sub_marine_turn();
		}
	}
	//this is for copter1
	else if(x >= (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2)) && x <= (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2) + game.captorArr[2][2]) && y >= (game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2)) && y <= (game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2) + game.captorArr[2][3]) && _tempCop1 == 1){
		if(game._actor != 'pointer_0' || chk_copter_sub != true){
			_tempCop1 = 0;
			draw_line(x, y);  //added for filling the object
			timer.cancel();
			game.copterArray[2].setSpriteIndex(2+6);
			setBG.removeChild(game.arrow_container[0]);
			game.hide_pointer(true);
			game.isGameStart = true;
			if(chk_copter_sub != true){
				check_hit_xy();
			}
			sub_marine_turn();
		}
	}
	//this is for sub marine 3
	else if(x >= (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) && x <= (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]) && y >= (game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2)) && y <= (game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2) + game.captorArr[3][3]) && _tempCop4 == 4){
		_tempCop4 = 0;
		timer.cancel();
		draw_line(x, y);  //added for filling the object
		game.copterArray[3].setSpriteIndex(3+6);
		game.hide_pointer(false);
		game.isGameStart = false;
		check_sub_xy();
	}
	//this is for sub marine 1
	else if(x >= (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) && x <= (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]) && y >= (game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2)) && y <= (game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2) + game.captorArr[4][3]) && _tempCop5 == 5){
		_tempCop5 = 0;
		timer.cancel();
		draw_line(x, y);  //added for filling the object
		game.copterArray[4].setSpriteIndex(4+6);
		game.hide_pointer(false);
		game.isGameStart = false;
		check_sub_xy();
	}
	//this is for sub marine 2
	else if(x >= (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) && x <= (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]) && y >= (game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2)) && y <= (game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2) + game.captorArr[5][3]) && _tempCop6 == 6){
		_tempCop6 = 0;
		timer.cancel();
		draw_line(x, y);  //added for filling the object
		game.copterArray[5].setSpriteIndex(5+6);
		game.hide_pointer(false);
		game.isGameStart = false;
		check_sub_xy();
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
		}
		return;
	}
	//paint in remaining area
	else{
		draw_line(x, y);
	}	
}

function check_hit_xy(){
	var a = Math.max(Math.max(_tempCop1,_tempCop2),_tempCop3);
	if( a == 1){
		game.actorx = game.pointerArr[0][0]+10;
		game.actory = game.pointerArr[0][1];
		game.angle = Math.PI;
		game._actor = "pointer_0";
	}
	else if(a == 2){
		game.actorx = game.pointerArr[1][0]+10;
		game.actory = game.pointerArr[1][1];
		game.angle = Math.PI;
		game._actor = "pointer_1";
	}
	else if(a == 3){
		game.actorx = game.pointerArr[2][0]+10;
		game.actory = game.pointerArr[2][1];
		game.angle = Math.PI;
		game._actor = "pointer_2";
	}
}

function check_sub_xy(){
	game.sub_point = new Array();
	var a = Math.max(Math.max(_tempCop4,_tempCop5),_tempCop6);
	if( a == 4){
		game.sub_point[0] = [((game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) + (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]))/2, game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2), 'pointer_3'];
		game.sub_point[1] = [((game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) + (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]))/2, game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2), 'pointer_3'];
		game.sub_point[2] = [((game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) + (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]))/2, game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2), 'pointer_3'];
	}
	else if(a == 5){
		if(_tempCop4 == 0){
			game.sub_point[0] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4'];
			game.sub_point[1] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4'];
			game.sub_point[2] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4'];	
		}
		else{
			game.sub_point[0] = [((game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) + (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]))/2, game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2), 'pointer_3'];
			game.sub_point[1] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4'];
			game.sub_point[2] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4'];
		}
	}
	else if(a == 6){
		if(_tempCop4 == 0 && _tempCop5 == 0){
			game.sub_point[0] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
			game.sub_point[1] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
			game.sub_point[2] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
		}
		else if(_tempCop4 == 0 && _tempCop5 == 5){
			game.sub_point[0] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
			game.sub_point[1] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4'];
			game.sub_point[2] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
		}
		else if(_tempCop4 == 4 && _tempCop5 == 0){
			game.sub_point[0] = [((game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) + (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]))/2, game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2), 'pointer_3'];
			game.sub_point[1] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
			game.sub_point[2] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
		}
		else if(_tempCop4 == 4 && _tempCop5 > 1){
			game.sub_point[0] = [((game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) + (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]))/2, game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2), 'pointer_3'];
			game.sub_point[1] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4'];
			game.sub_point[2] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
		}
	}
}
function crtical_angle(theta){
	var thet = 230 * (Math.tan(theta));
	return thet;
}

function sub_marine_turn(){
	
	game.add_to_array();
	RandomArray(game.sub_point);
	create_actor_paint();
	
	_x = game.sub_point[0][0];
	_y = game.sub_point[0][1];
		
	random_hit_submarine();
	var theta_0 = angle_between_2Points(_x, _y, _x1, _y1);
	var normal, refrect_ang, critic_check;
	
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
	
	if(theta_0_deg == critical_angle){ //this occurs when angle of incidence is equal to critical angle
		sub_refrect_y1 = 270;
		if(critic_check){
			sub_refrect_x1 = 0;
		}
		else{
			sub_refrect_x1 = 760;
		}
	}
	else if(theta_0_deg > critical_angle){  //beyond the critical angle
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
		sub_refrect_x1 = x1_Point(refrect_ang, _x1, _y1, 500);
	}
	create_timer_for_paint(false);
	drawcheck = true;
}
function random_hit_submarine(){
	var _sub_actor = game.sub_point[0][2];
	var actorx = game.actorx;
	var actory = game.actory;
	
	if(game._actor == 'pointer_0'){
		if(_sub_actor == 'pointer_3'){	//submarine 3
			var _count = Math.floor((Math.random()*5) + 1);
			if(_count == 4){
				_x1 = Math.floor((Math.random()*3) + (actorx+10));
				_y1 = actory;
			}
			else if(_count == 5){
				critical_angle_rad = Math.asin(1/1.33);
				_x1 = x1_Point(-critical_angle_rad, _x, _y, actory);
				_y1 = actory;
				_count = 1;
			}
			else{
				_x1 = Math.floor((Math.random()*10) + (actorx+210));
				_y1 = actory;
			}
		}
		else if(_sub_actor == 'pointer_4'){	//submarine 1
			_x1 = Math.floor((Math.random()*30) + (actorx-110));
			_y1 = actory;
		}
		else if(_sub_actor == 'pointer_5'){	//submarine 2
			_x1 = Math.floor((Math.random()*30)+ (actorx+80));
			_y1 = actory;
		}
	}
	else if(game._actor == 'pointer_1'){
		if(_sub_actor == 'pointer_3'){	//submarine 3
			_x1 = Math.floor((Math.random()*30) + (actorx+100));
			_y1 = actory;
		}
		else if(_sub_actor == 'pointer_4'){	//submarine 1
			_x1 = Math.floor((Math.random()*30) + (actorx-220));
			_y1 = actory;
		}
		else if(_sub_actor == 'pointer_5'){	//submarine 2
			_x1 = Math.floor((Math.random()*30)+ (actorx+10));
			_y1 = actory;
		}
	}
	else if(game._actor == 'pointer_2'){
		if(_sub_actor == 'pointer_3'){	//submarine 3
			_x1 = actorx;
			_y1 = actory;
		}
		else if(_sub_actor == 'pointer_4'){	//submarine 1
			var _count1 = Math.floor((Math.random()*5) + 1);
			if(_count1 == 4){
				_x1 = Math.floor((Math.random()*3) + (actorx-100));
				_y1 = actory;
			}
			else if(_count1 == 5){
				critical_angle_rad = Math.asin(1/1.33);
				_x1 = x1_Point(critical_angle_rad, _x, _y, actory);
				_y1 = actory;
				_count1 = 1;
			}
			else{
				_x1 = Math.floor((Math.random()*10) + (actorx-380));
				_y1 = actory;
			}
		}
		else if(_sub_actor == 'pointer_5'){	//submarine 2
			_x1 = Math.floor((Math.random()*30) + (actorx-100));
			_y1 = actory;
		}
	}
	else{
		_x1 = Math.floor((Math.random()*20)+ (actorx));
		_y1 = actory;
	}
}

function slope_of_2Points(from, to){
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
		for(var i=0;i<3;i++){
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
	if(timer != null){
		timer.cancel();
	}
	_tempCop6 = 6, _tempCop4 = 4, _tempCop5 = 5, _tempCop1 = 1, _tempCop2 = 2, _tempCop3 = 3;
	game.angle = Math.PI;
	game.sub_point = new Array();
	game.sub_point[0] = [((game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) + (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]))/2, game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2), 'pointer_3'];
	game.sub_point[1] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4'];
	game.sub_point[2] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
	game.isGameOver = false;
	game.isGameStart = false;
	_hit_area.emptyChildren();
	remove_All_Pointer();
	change_SpritImage();
	game.addPointeronScene();
}

function change_SpritImage(){
	game.copterArray[0].setSpriteIndex(0);
	game.copterArray[1].setSpriteIndex(1);
	game.copterArray[2].setSpriteIndex(2);
	game.copterArray[3].setSpriteIndex(3);
	game.copterArray[4].setSpriteIndex(4);
	game.copterArray[5].setSpriteIndex(5);
}

function remove_All_Pointer(){
	var setBG = game.setBG;
	setBG.removeChild(game.arrow_container[0]);
	setBG.removeChild(game.arrow_container[1]);
	setBG.removeChild(game.arrow_container[2]);
}
})();