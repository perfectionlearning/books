//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,	
	falldownImg: null,	
	notcatchImg: null,
	oDashTxtArr: [],
	svGraph: null,
	graph_actor:null,
	ballImg:null,
	ballDrag:null,
	ballPx:0,
	ballCx:0,
	ballIx:0,
	startTime:0,
	currentTime:0,
	ellapsetime:0,
	isStart:false,
	isReset:true,
	drawingActor:null,
	drawingctx:null,
	mainPanel:null,
	SVGToggleBtn:null,
	isFirst:true,
	mouseDragTimer:null
};


//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){		
		
		game.graph_height = 360, game.graph_width = 600, game.graph_cell_height = game.graph_height/20,game.graph_cell_width = game.graph_width/10;
		game.graph_ball_height = 20, game.graph_ball_width = 700, game.graph_ball_cell_width = game.graph_ball_width/20;
		game.int_pos = 338;
		game.plotGraphActor, game.plotGraphCanvas;		
		
		CAAT.DEBUG = 0;
		
		game.mainEleImg = [];
		game.mainEleImg[game.mainEleImg.length] = ['ball',  			186,   410];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['constzeroneg',  	75,   110];

	var assets = [	
		{id:'dashBG',      			url:game.sharedPath+'dash.gif' },
		{id:'ball',      			url:game.actPath+'ball.gif' },
		{id:'constzeroneg',      	url:game.actPath+'const-zero-neg.gif' },
		{id:'const_zero_negVel',    url:game.actPath+'const_zero_negVel.gif' },
		
		//dashboard Image
		{id:'wellleft',    			url:game.sharedPath+'wellleft.gif' },
		{id:'well100',     			url:game.sharedPath+'well100.gif' },
		{id:'wellright',   			url:game.sharedPath+'wellright.gif' },
		{id:'checkonoff',   		url:game.sharedPath+'checkonoff.png' },
		
		
		//Buttons GO, RESET, PAUSE
		{id:'buttons',     			url:game.sharedPath+'buttons.png' },
		{id:'banner',      			url:game.actPath+'banner.png' }
	];

					// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize						
	);
};
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
game.__gameInitialize = function( director ){
	game._director = director;
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );		
			
	//add image to the main
	game.__createMainImgScene();
	//banner display		
	game.__createBannerContainer();		
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene =function (){	

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
				CAAT.setCursor('move');							
			};
	
			this.mouseExit = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = false;
				CAAT.setCursor('default');
			};
	
			this.mouseMove = function (mouseEvent) {};
						
			this.mouseUp = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				
				game.ballDrag.x=game.ballImg.x;
				game.ballDrag.y=game.ballImg.y;
				game.isFirst=true;
				//game.mouseDragTimer.cancel();
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
				
				
				if(game.isFirst)
				{
					game.ballMoveHandler();
					game.isFirst=false;
				}
			};
	
			return this;
		},
	},
	null,
	"CAAT.exemplarr"
	);

	game.graph_actor = new CAAT.Foundation.ActorContainer().
					setPreferredSize(game.graph_width, game.graph_height).
					setBounds( 75, 20, game.graph_width, game.graph_height).
					setFillStyle('#ffffff').
					setClip(false);
	
	game.create_graph(game.graph_actor, '#d3d3d3');
	
	game.create_vertical_Points_Graph(game.graph_actor);
	
	game.create_horizontal_Points_Graph(game.graph_actor);
	
	game.plotGraphCanvas = document.createElement('canvas');
		game.plotGraphCanvas.width = game.graph_width;
		game.plotGraphCanvas.height = game.graph_height;
		game.plotGraphCanvas.x = 0;
		game.plotGraphCanvas.y = 0;
		
	game.plotGraphActor = new CAAT.Foundation.ActorContainer().
						setPreferredSize(game.graph_width, game.graph_height).
						setBounds( 0, 0, game.graph_width, game.graph_height).
						setBackgroundImage(game.plotGraphCanvas).
						setClip(true);
	game.graph_actor.addChild(game.plotGraphActor);
	
	
	var graph_ball_actor = new CAAT.Foundation.ActorContainer().
						setPreferredSize(game.graph_ball_width, game.graph_ball_height).
						setBounds(25, 450, game.graph_ball_width, game.graph_ball_height).
						setFillStyle('red').
						setClip(false);
	game.create_ball_distance_pointer(graph_ball_actor);
	game.create_ball_horizontal_Points_Graph(graph_ball_actor);
	
	game.mainPanel.addChild(game.graph_actor);
	
	game.mainPanel.addChild(graph_ball_actor);
	
	for(var i=1;i<game.mainEleImg.length;i++){
		var oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );		
		oActorImg.
			setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);			
			game.mainPanel.addChild(oActorImg);
	}
	
	game.drawGraphContainer();
	
	//create Graph - Blue Vector
	game.__createSVGraph();
	//Ball
	
	game.ballImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[0][0]), 1, 1 );
	game.ballImg.setLocation(game.mainEleImg[0][1], game.mainEleImg[0][2]);
	game.mainPanel.addChild(game.ballImg);
	
	//Ball Drag
	
	game.ballDrag = new CAAT.exemplarr().
			setBounds( game.mainEleImg[0][1],game.mainEleImg[0][2], game.ballImg.width, game.ballImg.height )
			.setAlpha(0.5);
	game.mainPanel.addChild(game.ballDrag);
	
	game.ballIx=game.ballImg.x+game.ballImg.width/2;	
	game.ballDrag.userDrag();	
	game.SVGraphToggleBtn();
}


 game.create_graph = function(actor, color) {
	
	actor.paint= function(director, time) {
		var i,j,ctx;
		
		ctx= director.ctx;
		
		ctx.beginPath();
		for( j=0.5; j<actor.width; j+= game.graph_cell_width ) {
			ctx.moveTo(j, 0);
			ctx.lineTo(j, actor.height);
		}
		
		for( i=0.5; i<actor.height; i+= game.graph_cell_height ) {
			ctx.moveTo(0, i);
			ctx.lineTo(actor.width, i);
		}
		
		//this to complete the graph
		ctx.moveTo(0, parseInt(game.graph_height)+0.5);
		ctx.lineTo(parseInt(actor.width) + 0.5, parseInt(game.graph_height)+0.5);
		ctx.moveTo(parseInt(actor.width) + 0.5, game.graph_height);
		ctx.lineTo(parseInt(actor.width) + 0.5, 0);
		ctx.strokeStyle= color;
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle= '#000000';
		ctx.moveTo(0, 0);
		ctx.lineTo(0, game.graph_height);
		ctx.moveTo(0, (game.graph_height/2)+90);
		ctx.lineTo(actor.width, (game.graph_height/2)+90);
		ctx.stroke();
	}
}

 game.create_ball_distance_pointer = function(actor){
	
	actor.paint= function(director, time) {
		var i,j,ctx;
		ctx= director.ctx;
		
		ctx.beginPath();
		for( j=0.5; j<actor.width; j+= game.graph_ball_cell_width) {
			ctx.moveTo(j, 0);
			ctx.lineTo(j, actor.height);
		}
		for( i=0.5; i<actor.height; i+= game.graph_ball_height) {
			ctx.moveTo(0, i);
		}
		
		//this to complete the graph
		ctx.moveTo(actor.width, game.graph_ball_height);
		ctx.lineTo(actor.width, 0);
		ctx.strokeStyle= '#000000';
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle= '#000000';
		ctx.lineWidth = 2.5;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.moveTo(1, game.graph_ball_height/2);
		ctx.lineTo(actor.width, game.graph_ball_height/2);
		ctx.stroke();
	}
}

 game.create_ball_horizontal_Points_Graph=function(actor){
	var _director = game._director;
	var temp = -50.0;
	for(var i=0; i<=5; i++){
		var graph_text = game.__addTextOnImage( 'black', temp.toFixed(1) + ' m', 'bold 14px Arial', 'center', _director );
		temp = temp + 50;
		graph_text
			.setLocation((game.graph_ball_cell_width * 5 * i)+5, game.graph_ball_height);
		actor.addChild(graph_text);
	}
}

 game.create_horizontal_Points_Graph = function(actor){
	var _director = game._director;
	for(var i=1; i<=10; i++){
		var graph_text = game.__addTextOnImage( 'black', i.toFixed(1), 'bold 14px Arial', 'right', _director );
		graph_text
			.setLocation((game.graph_cell_width * i)+game.graph_cell_width+(-50), (game.graph_height/2)+90)
			.setId(graph_text+[i]);
		actor.addChild(graph_text);
	}
	var graph_time_text = game.__addTextOnImage( 'black', 't', 'bold italic 14px Arial', 'center', _director );
	var graph_time_text1 = game.__addTextOnImage( 'black', '(s)', 'bold 14px Arial', 'center', _director );
	graph_time_text
			.setLocation((game.graph_width)+20, (game.graph_height/2)+100);
	graph_time_text1
			.setLocation((game.graph_width)+35, (game.graph_height/2)+100);	
	actor.addChild(graph_time_text);
	actor.addChild(graph_time_text1);
}

 game.create_vertical_Points_Graph = function(actor){
	var _director = game._director;
	var temp = 140;
	for(var i=0; i<=9; i++){
		var graph_text = game.__addTextOnImage( 'black', temp.toFixed(1), 'bold 14px Arial', 'right', _director );
		temp = temp - 20;
		graph_text
			.setLocation(-8, (game.graph_cell_height * i * 2)+10);
		actor.addChild(graph_text);
	}
	var graph_dist_text = game.__addTextOnImage( 'black', 'x', 'bold italic 14px Arial', 'center', _director );
	var graph_dist_text1 = game.__addTextOnImage( 'black', '(m)', 'bold 14px Arial', 'center', _director );
	graph_dist_text
			.setLocation(-70, (game.graph_cell_height)-22);
	graph_dist_text1
			.setLocation(-53, (game.graph_cell_height)-22);
	actor.addChild(graph_dist_text);
	actor.addChild(graph_dist_text1);
}

//==================================================
//Show the velocity Graph
//==================================================
game.__createSVGraph = function (){		
	game.svGraph = game.__addImageOnScene( game._director.getImage('const_zero_negVel'), 1, 1 );
	game.svGraph.					
		setLocation( 50, -18 );
	game.mainPanel.addChild( game.svGraph );
	
	game.svGraph.
		visible = false;
}

game.drawGraphContainer = function() {	
	var canvas = document.createElement('canvas');
	canvas.width =game.graph_actor.width;
	canvas.height = game.graph_actor.height;

	game.drawingActor = new CAAT.Foundation.Actor().
						setBackgroundImage( canvas ).
							setBounds( game.graph_actor.x, game.graph_actor.y, game.graph_actor.width, game.graph_actor.height );
							
							
							
	game.drawingctx = canvas.getContext('2d');
	game.drawingctx.lineWidth = 1;
	game.drawingctx.lineJoin = 'round';
	game.drawingctx.lineCap = 'round';
	game.drawingctx.strokeStyle = 'black';
	game.drawingctx.setAntiAlias=true;
	game.drawingctx.beginPath();

	game.drawingctx.moveTo(0, 270);	

	game.mainPanel.addChild(game.drawingActor );
}