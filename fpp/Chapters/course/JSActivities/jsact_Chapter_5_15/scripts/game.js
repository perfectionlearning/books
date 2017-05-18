//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	weight: 0,
	verticalAccel: 0,
	normalForce: 0,
	Friction: 0,
	Tension: 0,
	line: null,
	txtFN:null,
	txtn:null,
	oDashTxtArr: [],
	mainPanel: null,
	actPath: null,
	sharedPath: null
};

//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){				//var mainPanel = null;
	CAAT.DEBUG = 0;
	game.grayBox = [];
	game.grayBox[game.grayBox.length] = ['point_1',300,  	 350, 	1, 1, true, 1, 1,''];
	game.grayBox[game.grayBox.length] = ['point_2',287.5,  247.5, 	1, 1, true, 25, 25,'red'];
	game.grayBox[game.grayBox.length] = ['point_3',365,  	 337.5, 1, 1, true, 25, 25,'blue'];
	game.grayBox[game.grayBox.length] = ['point_4',287.5,  415, 	1, 1, true, 25, 25,'black'];
	game.grayBox[game.grayBox.length] = ['point_5',210, 	 337.5, 1, 1, true, 25, 25,'pink'];

	var oActorContainer_0 = null, oActorContainer_1 = null;
	var oActorImg_0 = null, oActorImg_1 = null;
	game.actorImg = [];
	game.actorContainer = [];
	game.Rays = [];

	var assets = [
		{id:'dashBG',      		url:game.sharedPath+'dash.gif' },
		{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
		{id:'well100',     		url:game.sharedPath+'well100.gif' },
		{id:'well50',     		url:game.sharedPath+'well50.gif' },
		{id:'wellright',   		url:game.sharedPath+'wellright.gif' },
		{id:'arrows',   		url:game.sharedPath+'arrows.gif' },
		{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },
		{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },
		{id:'flat',     		url:game.sharedPath+'flat.gif' },

		//Buttons GO, RESET, PAUSE
		{id:'buttons',     		url:game.sharedPath+'buttons.png' },

		//Banner Image
		{id:'banner',     		url:game.actPath+'banner.png' }
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

//=======================================================
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}

game.__gameInitialize = function( director ){
	game._director = director;
	game._scene = director.createScene();
	game.__createMidBox();
	game.mainPanel = game.createPanels( game._director, game._scene );

	//FLAT image
	var oActorImg = game.__addImageOnScene( game._director.getImage('flat'), 1, 1 );
	oActorImg.
		setLocation(0, 0);
	game.mainPanel.addChild(oActorImg);


	//rays
	for(var i=0; i<5; i++) {
		var thisRay = new CAAT.Foundation.ActorContainer().
			setBounds( 0, 0, director.width, director.height );
		thisRay.setGestureEnabled(false);
		game.mainPanel.addChild(thisRay);
		game.Rays.push(thisRay);
	}

	//add image to the main

	game.__createMidLine();

	//NormalForce text in Line
	game.txtFN = game.__addTextOnImage('black','F', 'italic bold 14px Arial', 'center', game._director );

	//NormalForceN text in Line
	game.txtn = game.__addTextOnImage('black','N', 'italic bold 10px Arial', 'center', game._director );

	//Friction text in Line
	game.txtfriction = game.__addTextOnImage('black','f', 'italic bold 14px Arial', 'center', game._director );

	//Weight text in Line
	game.txtweight = game.__addTextOnImage('black','mg', 'italic bold 14px Arial', 'center', game._director );

	//Tension text in Line
	game.txttension = game.__addTextOnImage('black','T', 'italic bold 14px Arial', 'center', game._director );

	game.mainPanel.addChild(game.txtFN);
	game.mainPanel.addChild(game.txtn);
	game.mainPanel.addChild(game.txtfriction);
	game.mainPanel.addChild(game.txtweight);
	game.mainPanel.addChild(game.txttension);

	game.__addMainImgScene();

	game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2],game.actorContainer[3],game.actorContainer[4]);

	game.txtFN.setLocation(game.l1x3+15,game.l1y3+10);
	game.txtn.setLocation(game.l1x3+23,game.l1y3+18);
	game.txtfriction.setLocation(game.l2x3+10,game.l2y3+10);
	game.txtweight.setLocation(game.l3x3+20,game.l3y3+10);
	game.txttension.setLocation(game.l4x3+20,game.l4y3+10);

	CAAT.loop(60);
}

//====================================================
//create main panel image on scene
//====================================================
game.__addMainImgScene = function(){
	//=======================================================
	// Extend actor container's enable drag and use it as userDrag
	// which draws the rays on every movement
	//=======================================================
	CAAT.Foundation.ActorContainer.extend(
	{
		paint : function(director,time) {
			CAAT.exemplarr.superclass.paint.call(this,director,time);
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

			this.mouseMove = function (mouseEvent) {

			};

			this.mouseUp = function (mouseEvent) {
				game.userDragging = false;
				//For placing the actor container on the line dragged position for future dragging
				//Placing 1st Container
				game.actorContainer[1].x = game.l1x3 - game.actorContainer[1].width / 2;
				game.actorContainer[1].y = game.l1y3 - game.actorContainer[1].height / 2;

				game.actorContainer[2].x = game.l2x3 - game.actorContainer[2].width / 2;
				game.actorContainer[2].y = game.l2y3 - game.actorContainer[2].height / 2;

				game.actorContainer[3].x = game.l3x3 - game.actorContainer[3].width / 2;
				game.actorContainer[3].y = game.l3y3 - game.actorContainer[3].height / 2;

				game.actorContainer[4].x = game.l4x3 - game.actorContainer[4].width / 2;
				game.actorContainer[4].y = game.l4y3 - game.actorContainer[4].height / 2;

				game.Update();

				this.__d_ax = -1;
				this.__d_ay = -1;
			};

			this.mouseDrag = function (mouseEvent) {
				game.userDragging = true;
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
				game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2],game.actorContainer[3],game.actorContainer[4]);

			};

			return this;
		},
	},
	null,
	"CAAT.exemplarr"
	);

	for(var i=0;i<game.grayBox.length;i++){
		this['oActorContainer_'+i] = new CAAT.exemplarr()
			.setBounds(
				game.grayBox[i][1],
				game.grayBox[i][2],
				game.grayBox[i][6],
				game.grayBox[i][7]
			)
			.setId('ac_'+i)
			.setFillStyle(game.grayBox[i][8])
			.setScale( 1, 1 );

		this['oActorContainer_'+i]
			.setLocation(parseFloat(game.grayBox[i][1]), parseFloat(game.grayBox[i][2]));

		if(game.grayBox[i][5]) {
			this['oActorContainer_'+i].userDrag();
			this['oActorContainer_'+i].setAlpha('0.0');
		}
		game.mainPanel.addChild( this['oActorContainer_'+i] );
		game.actorContainer.push( this['oActorContainer_'+i] );
	}
	game.__createDashBoardButton();
	game.__createIncDecButton();
}
//=======================================================
//Create Middle Line
//=======================================================
game.__createMidLine = function() {
	var line = new CAAT.Foundation.Actor().
			setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			setClip(true);
	line.paint = function(director, time){
		var ctx = director.ctx;
		ctx.strokeStyle='#000000';
		ctx.beginPath();
		ctx.lineWidth = 0.2;
		ctx.moveTo( 800, 400);
		ctx.lineTo( 0, 400);
		ctx.closePath();
		ctx.stroke();
	}
	game.mainPanel.addChild(line);
}
//=======================================================
//Create Middle Box
//=======================================================
game.__createMidBox = function() {
	game.line = new CAAT.Foundation.Actor().
			setBounds( 0, 0, 760,600 ).
			setClip(true);

	game.line.paint = function(director, time){
		var ctx = director.ctx;
		ctx.strokeStyle='black';
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.rect(250, 300, 100, 100);
		//ctx.closePath();
		ctx.stroke();
	}
	game._scene.addChild(game.line);
}
