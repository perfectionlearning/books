//==========================================================================
// This is the main entry point of the game
//==========================================================================

// Create a top-level shared namespace for the high-level modules
var game = {
	mainPanel: null,
	_director: null,
	oMainTxtArr: [],
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	
	//captor and submarine position from left to right
	game.captorArr = [];
		game.captorArr[game.captorArr.length] = [700, 38, 49, 9];	//x, y, org-x, org-y position of the captor 1
		game.captorArr[game.captorArr.length] = [51,  452, 30, 5];	//x, y, org-x, org-y position of the submarine 1
		game.captorArr[game.captorArr.length] = [458, 437, 50, 5]; 	//x, y, org-x, org-y position of the submarine 2
		
	//Pointer position
	game.pointerArr = [];
		game.pointerArr[game.pointerArr.length] = [716, 62];
		
	game._actor;
	game.actorx = game.pointerArr[0][0] + 9;
	game.actory = game.pointerArr[0][1];
	
	game.angle = Math.PI;
	game.bg_Hi = 270;
	game.createActorPaint = 0;
	game.array_Paint = new Array();
		game.array_Paint[0] = new Array();
		game.array_Paint[1] = new Array();		//for painting the array.
	
	game.sub_point = new Array();
		/*game.sub_point[0] = [((game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2)) + (game.captorArr[1][0] + ((60 - game.captorArr[1][2])/2) + game.captorArr[1][2]))/2, game.captorArr[1][1] + ((20 - game.captorArr[1][3])/2), 'pointer_1'];
		game.sub_point[1] = [((game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2)) + (game.captorArr[2][0] + ((60 - game.captorArr[2][2])/2) + game.captorArr[2][2]))/2, game.captorArr[2][1] + ((20 - game.captorArr[2][3])/2), 'pointer_2'];*/
		game.sub_point[0] = [82, 460, 'pointer_1'];
		game.sub_point[1] = [497, 444, 'pointer_2'];

	
	
	game.arrow_container = [];
		game.arrow_container[game.arrow_container.length] = 'ArrowContainer_0';
		game.arrow_container[game.arrow_container.length] = 'ArrowContainer_2';
		game.arrow_container[game.arrow_container.length] = 'ArrowContainer_3';
	game.getHitArea;
	game.copterArray = [];
		game.copterArray[game.copterArray.length] = 'cop_0';
		game.copterArray[game.copterArray.length] = 'cop_1';
		game.copterArray[game.copterArray.length] = 'cop_2';
		game.copterArray[game.copterArray.length] = 'cop_3';
		game.copterArray[game.copterArray.length] = 'cop_4';
		game.copterArray[game.copterArray.length] = 'cop_5';
	game.setBG;

	game.mainEleTxt = [];
		game.mainEleTxt[game.mainEleTxt.length] = ['n = 1.00', 'Bold 14px Arial', 'left', 15, 240];
		game.mainEleTxt[game.mainEleTxt.length] = ['n = 1.33', 'Bold 14px Arial', 'left', 15, 290];
	
	game.initLine = [];
		game.initLine[game.initLine.length] = [262, 270, 194, 342];
		game.initLine[game.initLine.length] = [582, 270, 540, 361];
		
	var assets = [						
		//Back ground sky image
		{id:'bg',      		url:game.actPath+'snellSky.gif' },	
		
		//Dash Board image
		{id:'dashBG',      		url:game.sharedPath+'dash.gif' },	
		{id:'endleft',      	url:game.sharedPath+'endleft.gif' },	
		{id:'endright',     	url:game.sharedPath+'endright.gif' },	
		{id:'wellleft2',		url:game.sharedPath+'wellleft2.gif'},
		{id:'well100b',     	url:game.sharedPath+'well100b.gif' },	
		{id:'well50b',   		url:game.sharedPath+'well50b.gif' },
		{id:'wellright2',   	url:game.sharedPath+'wellright2.gif' },
		
		//Increment decrement, Holder Image
		{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },
		{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },
		
		//Banner
		{id:'banner',    		url:game.actPath+'banner.png' },
		
		//Buttons FIRE, 3
		{id:'buttons',     		url:game.sharedPath+'buttons.png' },
		
		//Sprite copter and marine
		{id:'copter',   		url:game.actPath+'Captor_sprite.png' },						
	];
	
	
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);	
}
game.__gameInitialize = function( director ){
	var _scene = director.createScene();	
	game.getDirector = function(){return director;};
	game._director = director;
	game.getScene = function(){return _scene;};	
	game.mainPanel = game.createPanels( director, _scene );
	game.createSea();
	game.addSpriteImageonScene();
	game.addPointeronScene();	
	game.__createTextOnScene();
	//game.createAngleText();
	game.initialize();
}	
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
game.__createTextOnScene = function(){
	for(var i=0;i<game.mainEleTxt.length; i++){			
		var oTextActor = game.__addTextOnImage('#000', game.mainEleTxt[i][0], game.mainEleTxt[i][1], game.mainEleTxt[i][2], game._director );				
		oTextActor.
			setLocation(game.mainEleTxt[i][3], game.mainEleTxt[i][4]);
		game.mainPanel.addChild(oTextActor);
		game.oMainTxtArr.push(oTextActor);
	}
}
game.createSea = function()
{
	var _sea_container = new CAAT.Foundation.ActorContainer().
			setBounds(0, 0, 760, 230).
			setLocation(0, 270).
			setFillStyle('#5c8cae');
	game.mainPanel.addChild(_sea_container);
	var _hit_area = new CAAT.Foundation.ActorContainer().
		setBounds(0, 0, game._director.width, game._director.height - 100);
		
	game.getHitArea = _hit_area;
	game.mainPanel.addChild(_hit_area);	
}
	
//Add mouse drag for the pointer
game.addMouseDragScene = function(mouseEvent){
	var actor = mouseEvent.source;
	var client_x = mouseEvent.screenPoint.x;
	var client_y = mouseEvent.screenPoint.y;	
	game.laserPointer_Angle(actor, client_x, client_y);	
}

game.addMouseDownScence = function(mouseEvent){
	var actor = mouseEvent.source;
	//game.pointerActor = actor;
	game.drawRedPointer(actor, '#000');
	var client_x = mouseEvent.screenPoint.x;
	var client_y = mouseEvent.screenPoint.y;
	game.laserPointer_Angle(actor, client_x, client_y);
	game._actor = actor.name;
	pointed = true;
}

game.laserPointer_Angle = function(actor, x, y){
	var targetx = x-(actor.x + 10);
	var targety = y-(actor.y);
	game.actorx = actor.x + 8;
	game.actory = actor.y;
	game.angle = Math.atan2(targety, targetx);
	game.angle = game.angle - (Math.PI/2);
	game.reset_Pointer(actor, true, game.angle);
	game.updateArrowAngle(game.angle, 0);
}

game.reset_Pointer = function(actor, check, a){
	if(check){
		if('pointer_0' == actor.name){
			//actor.setRotationAnchored(a, 0.5, 0);
		}
		else{
			game.arrow_container[i].setRotationAnchored(0, 0.5, 0);
			game.drawRedPointer(game.arrow_container[i], 'black');
		}
	}
	else{
		game.arrow_container[i].resetTransform();
		clearHitArea();
	}
}

game.clearHitArea = function(){
	_hit_area.paint= function(director,time) {
		crx= director.ctx;
		crx.clearRect(0, 0);
	}
}
game.drawRedPointer = function(actor, col){	
	actor.paint= function(director,time) {		
		var crx= director.ctx;
		var crx1= director.ctx;
		
		//draw a pointer
		crx1.strokeStyle='black';
		crx1.beginPath();
		crx1.moveTo(8, 0);
		crx1.lineTo(8, 35);
		crx1.fill();
		crx1.stroke();
		crx1.closePath();
		
		crx.strokeStyle = col;
		crx.fillStyle = col;
		crx.beginPath();
		crx.lineTo(18, 35);
		crx.lineTo(8, 50);
		crx.lineTo(0, 35);
		crx.lineWidth=1;
		crx.lineJoin='round';
		crx.lineCap='round';
		crx.fill();
		crx.stroke();
		crx.closePath();
	}	
}

//Adding Pointer on the scence
game.addPointeronScene = function(){	
	for(var i=0;i<game.pointerArr.length;i++){		
		game.arrow_container[i] = new CAAT.Foundation.ActorContainer().
								setSize(20, 50);
		
		game.arrow_container[i].name = "pointer_"+i;
		
		game.arrow_container[i].
					setLocation(game.pointerArr[i][0], game.pointerArr[i][1]);
		
		game.drawRedPointer(game.arrow_container[i], 'black');

		game.arrow_container[i].mouseEnter = function(){
			CAAT.setCursor('move');
		}
		game.arrow_container[i].mouseExit = function(){
			CAAT.setCursor('default');
			return;
		}
		game.pointerActor = game.arrow_container[i];
		game.arrow_container[i].mouseDrag = game.addMouseDragScene;
		game.arrow_container[i].mouseDown = game.addMouseDownScence;
		
		game.mainPanel.addChild(game.arrow_container[i]);
	}
}

//Adding sprite in the main scence
game.addSpriteImageonScene = function(){
	//add copter1 on image scene
	for(var i=0;i<game.captorArr.length;i++){
		game.copterArray[i] = game.__addImageOnScene( game._director.getImage('copter'), 1, 6);
		game.copterArray[i].			
			setLocation(game.captorArr[i][0], game.captorArr[i][1]).
			setAnimationImageIndex([i]);
		game.copterArray[i].name = 'cop_id_'+i;
		game.mainPanel.addChild(game.copterArray[i]);
	}
}
game.add_to_array = function(){
	game.createActorPaint = game.createActorPaint + 1;
	game.array_Paint[0].push('_hit_area'+game.createActorPaint);
	game.array_Paint[1].push('canvas'+game.createActorPaint);
}

game.initialize = function(){
	for(var i=0;i<2;i++){
		game.add_to_array();
		game.create_actor_paint();
		game.draw_intersection_line(game.initLine[i][0], game.initLine[i][1], game.initLine[i][0], 500, '#c0c0c0');
		game.drawLine(game.initLine[i][0], game.initLine[i][1], game.initLine[i][2], game.initLine[i][3]);
	}
}
var check_Text = true;
game.drawLine = function(x1, y1, x2, y2){	
	game.array_Paint[0][game.createActorPaint-1].__ctx.beginPath();
	game.array_Paint[0][game.createActorPaint-1].__ctx.strokeStyle = '#c0c0c0';
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineWidth = 2;
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineJoin = 'round';
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineCap = 'round';
	game.array_Paint[0][game.createActorPaint-1].__ctx.moveTo(x1, y1);
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineTo(x2, y2);
	game.array_Paint[0][game.createActorPaint-1].__ctx.stroke();
	
	var ang = game.slope_of_2Points([x1, y1], [x2, y2]);
		ang = Math.atan(ang);
	var initStartAng = (Math.PI/2);
	var initEndAng = initStartAng +((Math.PI/2) - Math.abs(ang)); 
	
	var initAngle = ((Math.PI/2) - Math.abs(ang));
	var angle = (Math.floor(Math.abs((initAngle) *(180/Math.PI)) * 10) / 10).toFixed(1)+String.fromCharCode(176);	
	//console.log(angle);
	if(check_Text){
		check_Text = false;
		game.createAngleText(game.array_Paint[0][game.createActorPaint-1], '43.3 '+String.fromCharCode(186), x1-40, y1 + 110);
	}
	else{
		check_Text = true;
		game.createAngleText(game.array_Paint[0][game.createActorPaint-1], '25.4 '+String.fromCharCode(186), x1-40, y1 + 110);
	}
	
	game.array_Paint[0][game.createActorPaint-1].__ctx.beginPath();
	game.array_Paint[0][game.createActorPaint-1].__ctx.arc( x1, y1, 100, initStartAng, initEndAng );
	game.array_Paint[0][game.createActorPaint-1].__ctx.strokeStyle = '#c0c0c0';
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineWidth = 2;
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineJoin = 'round';
	game.array_Paint[0][game.createActorPaint-1].__ctx.lineCap = 'round';
	game.array_Paint[0][game.createActorPaint-1].__ctx.stroke();
}