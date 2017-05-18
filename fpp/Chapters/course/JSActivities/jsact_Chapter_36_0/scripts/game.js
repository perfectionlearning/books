//==========================================================================
// This is the main entry point of the game
//==========================================================================

// Create a top-level shared namespace for the high-level modules
var game = {
	mainPanel: null,
	_director: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	var assets = [						
		//Back ground sky image
		{id:'bg',      		url:game.actPath+'snellSky.gif' },	
		
		//Dash Board image
		{id:'dashBG',      	url:game.sharedPath+'dash.gif' },	
		{id:'endleft',      url:game.sharedPath+'endleft.gif' },	
		{id:'endright',     url:game.sharedPath+'endright.gif' },	
		{id:'wellleft2',	url:game.sharedPath+'wellleft2.gif'},
		{id:'well100b',     url:game.sharedPath+'well100b.gif' },	
		{id:'wellright2',   url:game.sharedPath+'wellright2.gif' },
		
		//Banner
		{id:'banner',    	url:game.sharedPath+'banner_sprite.png' },
		
		//Buttons FIRE, RESET
		{id:'buttons',     	url:game.sharedPath+'buttons.png' },
		
		//Sprite copter and marine
		{id:'copter',   	url:game.actPath+'Captor_sprite.png' },						
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
}	
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
//=======================================================
//Create sea container
//=======================================================
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
	game.drawRedPointer(actor, 'red');
	var client_x = mouseEvent.screenPoint.x;
	var client_y = mouseEvent.screenPoint.y;
	game.laserPointer_Angle(actor, client_x, client_y);
	game._actor = actor.name;
	pointed = true;
}

game.laserPointer_Angle = function(actor, x, y){
	var targetx = x-(actor.x + 10);
	var targety = y-(actor.y);
	game.actorx = actor.x + 10;
	game.actory = actor.y;
	game.angle = Math.atan2(targety, targetx);
	game.angle = game.angle - (Math.PI/2);
	game.reset_Pointer(actor, true, game.angle);
}

game.reset_Pointer = function(actor, check, a){
	for(var i=0; i<=2; i++)
	{
		if(check){
			if('pointer_'+[i] == actor.name){
				actor.setRotationAnchored(a, 0.5, 0);
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
		crx1.moveTo(10, 0);
		crx1.lineTo(10, 35);
		crx1.fill();
		crx1.stroke();
		crx1.closePath();
		
		crx.strokeStyle = col;
		crx.fillStyle = col;
		crx.beginPath();
		crx.lineTo(18, 35);
		crx.lineTo(10, 50);
		crx.lineTo(2, 35);
		crx.lineTo(10, 35);
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

		game.arrow_container[i].mouseDrag = game.addMouseDragScene;
		game.arrow_container[i].mouseDown = game.addMouseDownScence;
		game.arrow_container[i].mouseEnter = function(){
			CAAT.setCursor('move');
		}
		game.arrow_container[i].mouseExit = function(){
			CAAT.setCursor('default');
		}
		game.mainPanel.addChild(game.arrow_container[i]);
	}
}

//Adding sprite in the main scence
game.addSpriteImageonScene = function(){
	//add copter1 on image scene
	for(var i=0;i<game.captorArr.length;i++){
		game.copterArray[i] = game.__addImageOnScene( game._director.getImage('copter'), 1, 12);
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

