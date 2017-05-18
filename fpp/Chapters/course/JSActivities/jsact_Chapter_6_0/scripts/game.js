//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	netForce: 0,
	verticalAccel: 0,
	F1: 0,
	F2: 0,
	oDashTxtArr: [],
	ballImg: null,
	animatedTarget_1: null,
	animatedTarget_2: null,
	animatedTarget_3: null,
	ballImgCx:0,
	ballImgCy:0,
	lineF1drag:null,
	lineF2drag:null,

	lineF2dragHTy:null,
	lineF1:null,
	lineF2:null,
	lineForceNet:null,
	txtF1:null,
	txtF2:null,
	txtNetForce:null,
	finalF1x:0,
	finalF1y:0,
	finalF2X:0,
	finalF2y:0,
	Fnetx:0,
	Fnety:0,
	oneNewtonInPx:8,
	targetAnim: null,
	isPlaying:false,
	isPaused:false,
	isReset:true,
	isHeadtoTail:false,
	isFinished:false,
	netVerticalAcceleration:0,
	netHorizontalAcceleration:0,
	lastFnetx:0,
	lastFnety:0,
	startTime:0,
	current_Time:0,
	beginTime:0,
	initialXVelocity:0,
	initialYVelocity:0,
	finalXVelocity:0,
	finalYVelocity:0,
	ballImgTempx:0,
	ballImgTempy:0,
	headLen:15,
	actPath: null,
	sharedPath: null,
	mainPanel: null,
	SVGToggleBtn:null,
	tx:0,
	ty:0
};

//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){

	game.mainEleImg = [];  //370,   365  //369,   364
	game.mainEleImg[game.mainEleImg.length] = ['force_1',	 369-66,  364, 1, 1, true, 40, 40]; //image_id, image_X_Position, image_Y_Position, sprite rows-cols, allow/stop drag
	game.mainEleImg[game.mainEleImg.length] = ['force_2', 369,  364-132, 1, 1, true, 40, 40];	 //width, height

	var assets = [
			{id:'ball',      			url:game.actPath+'ball.png'},
			{id:'circle',      			url:game.actPath+'circle.png'},
			{id:'dashBG',      			url:game.sharedPath+'dash.gif'},

			//dashboard Image
			{id:'wellleft',    			url:game.sharedPath+'wellleft.gif'},
			{id:'well100',     			url:game.sharedPath+'well100.gif'},
			{id:'wellright',   			url:game.sharedPath+'wellright.gif'},
			{id:'incre_decre_btn',   	url:game.sharedPath+'incre_decre_btn.png'},
			{id:'incrBgMed',   			url:game.sharedPath+'incrBgMed.gif'},
			{id:'checkonoff',   		url:game.sharedPath+'checkonoff.png'},

			//Buttons GO, RESET, PAUSE
			{id:'buttons',     			url:game.sharedPath+'buttons.png'},

			//Banner Image
			{id:'banner',      			url:game.actPath+'banner.png'}
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

//=======================================================
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}

game.__gameInitialize = function( director ){
	CAAT.DEBUG = 0;

	game._director = director;

	game._scene = director.createScene();

	game.mainPanel = game.createPanels( game._director, game._scene );
	//add image to the main
	game.__createMainImgSceneCircle();

	CAAT.loop(60);
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgSceneCircle = function(){
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

				if(this.getId()=='F1drag')
				{
					game.lineF1drag.x=game.finalF1x-game.lineF1drag.width/2;
					game.lineF1drag.y=game.finalF1y-game.lineF1drag.height/2;

					if(game.isHeadtoTail)
					{
						game.lineF2drag.x=game.lineF2dragHTx;
						game.lineF2drag.y=game.lineF2dragHTy;
					}
				}
				if(this.getId()=='F2drag')
				{

					if(!game.isHeadtoTail)
					{
						game.lineF2drag.x=game.finalF2x-game.lineF2drag.width/2;
						game.lineF2drag.y=game.finalF2y-game.lineF2drag.height/2;

					}
					else if(game.isHeadtoTail)
					{
						game.lineF2drag.x=game.lineF2dragHTx;
						game.lineF2drag.y=game.lineF2dragHTy;
					}
				}

				//game.mouseMoveHandler1Up();
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

				//console.log(this.x+' '+this.y);
				game.mouseMoveHandler(this.getId(),this);
			};

			return this;
		},
	},
	null,
	"CAAT.exemplarr"
	);


	game.targetAnim = new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('circle'), 2, 5)
							.addAnimation('targetStand', [8, 9], 100)
							.addAnimation('targetAnimation', [0, 1, 2, 3, 4 ,5 ,6, 7], 75)
							.addAnimation('targetPause',[0],0)
	game.animatedTarget_1 = game.__addImageOnScene(game._director.getImage('circle'), 2, 5);
	game.animatedTarget_1
		.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation')
		.setLocation(32, 168);
	game.mainPanel.addChild( game.animatedTarget_1 );

	game.animatedTarget_2 = game.__addImageOnScene(game._director.getImage('circle'), 2, 5);
	game.animatedTarget_2
		.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation')
		.setLocation(662, 59);
	game.mainPanel.addChild( game.animatedTarget_2 );

	game.animatedTarget_3 = game.__addImageOnScene(game._director.getImage('circle'), 2, 5);
	game.animatedTarget_3
		.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation')
		.setLocation(694, 358);
	game.mainPanel.addChild( game.animatedTarget_3 );

	game.ballImg = game.__addImageOnScene(game._director.getImage('ball'), 1, 1);
	game.ballImg.setLocation(369,   364);
	game.mainPanel.addChild(game.ballImg);

	//center of the ball
	game.ballImgCx=game.ballImg.x+game.ballImg.width/2;
	game.ballImgCy=game.ballImg.y+game.ballImg.height/2;

	//line F1
	game.lineF1 = new CAAT.exemplarr().
		setBounds( 0, 0, game._director.width, game._director.height );
	game.mainPanel.addChild(game.lineF1);

	//line NetForce
	game.lineForceNet = new CAAT.exemplarr().
		setBounds( 0, 0, game._director.width, game._director.height );
	game.mainPanel.addChild(game.lineForceNet);

	//line F2
	game.lineF2 = new CAAT.exemplarr().
		setBounds( 0, 0, game._director.width, game._director.height );
	game.mainPanel.addChild(game.lineF2);

	//drag Point of F1
	game.lineF1drag= new CAAT.exemplarr()
				.setId('F1drag')
				.setBounds(
					game.mainEleImg[0][1],
					game.mainEleImg[0][2],
					game.mainEleImg[0][6],
					game.mainEleImg[0][7]
				)
				//.setFillStyle( '#CCC')
				.setScale( 1, 1 )
				//.setAlpha(0.5);

	game.lineF1drag.setLocation(parseFloat(game.mainEleImg[0][1])-parseFloat(game.mainEleImg[0][6]/2), parseFloat(game.mainEleImg[0][2]));

	game.lineF1drag.userDrag();

	game.mainPanel.addChild(game.lineF1drag);

	game.finalF1x=Math.round(game.ballImgCx-game.oneNewtonInPx*10);
	game.finalF1y=game.ballImgCy;

	game.lineF1drag.x=game.finalF1x-game.lineF1drag.width/2;
	game.lineF1drag.y=game.finalF1y-game.lineF1drag.height/2;
	//drawF1Line
	game.drawPaths( game.lineF1, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.finalF1x, y:game.finalF1y}, false, '#000000', 1, 'rightArrowHead', false);

	//F1 text in Line

	var tempF=game.__addTextOnImage('black','F', 'bold 14px Arial', 'center', game._director );

	game.txtF1=new CAAT.Foundation.ActorContainer();

	var tempF1=game.__addTextOnImage('black','1', '10px Arial', 'center', game._director );
	tempF1.setLocation(5,10);

	game.txtF1.addChild(tempF); // Add F
	game.txtF1.addChild(tempF1); // Add F1
	game.txtF1.setLocation(game.lineF1drag.x+game.lineF1drag.width, game.lineF1drag.y+game.lineF1drag.height);
	game.mainPanel.addChild(game.txtF1);



	//drag Point of F2
	game.lineF2drag= new CAAT.exemplarr()
				.setId('F2drag')
				.setBounds(
					game.mainEleImg[1][1],
					game.mainEleImg[1][2],
					game.mainEleImg[1][6],
					game.mainEleImg[1][7]
				)
				//.setFillStyle( 'green')
				.setScale( 1, 1 )
				//.setAlpha(0.5);

	game.lineF2drag.setLocation(parseFloat(game.mainEleImg[1][1]), parseFloat(game.mainEleImg[1][2])-parseFloat(game.mainEleImg[1][7]/2) );

	game.lineF2drag.userDrag();

	game.mainPanel.addChild(game.lineF2drag);

	game.finalF2x=game.ballImgCx;
	game.finalF2y=Math.round(game.ballImgCy-game.oneNewtonInPx*20);

	game.lineF2drag.x=game.finalF2x-game.lineF2drag.width/2;
	game.lineF2drag.y=game.finalF2y-game.lineF2drag.height/2;
	//drawF2Line
	game.drawPaths( game.lineF2, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.finalF2x, y:game.finalF2y}, false, '#000000', 1, 'rightArrowHead', false);

	//F2 text in Line

	var tempF=game.__addTextOnImage('black','F', 'bold 14px Arial', 'center', game._director );

	game.txtF2=new CAAT.Foundation.ActorContainer()

	var tempF2=game.__addTextOnImage('black','2', '10px Arial', 'center', game._director );
	tempF2.setLocation(5,10);

	game.txtF2.addChild(tempF);
	game.txtF2.addChild(tempF2);
	game.txtF2.setLocation(game.lineF2drag.x+game.lineF2drag.width, game.lineF2drag.y+game.lineF2drag.height);
	game.mainPanel.addChild(game.txtF2);


	//NetForce Line
	game.Fnetx=game.finalF1x;
	game.Fnety=game.finalF2y;
	game.drawPaths( game.lineForceNet, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.Fnetx, y:game.Fnety}, false, '#FF0000', 1, 'rightArrowHead', false);


	//NetForce text in Line

	game.txtNetForce=new CAAT.Foundation.ActorContainer()
					.setBounds(
					game.Fnetx+30,
					game.Fnety,
					20,
					20
					).setScale( 1, 1 )

	var tempF=game.__addTextOnImage('red','F', 'bold 14px Arial', 'center', game._director );
	var tempnet=game.__addTextOnImage('red','net', '10px Arial', 'center', game._director );

	tempnet.setLocation(10,10);
	game.txtNetForce.addChild(tempF);
	game.txtNetForce.addChild(tempnet);

	game.txtNetForce.setLocation(game.Fnetx+25, game.Fnety+5);
	game.mainPanel.addChild(game.txtNetForce);

	game.txtZero=game.__addTextOnImage('red','=0', 'bold 14px Arial', 'center', game._director );
	game.txtZero.setLocation(game.ballImgCx+20,game.ballImgCy);
	game.mainPanel.addChild(game.txtZero);
	game.txtZero.visible=false;

	game.ballImgTempx=game.ballImg.x;
	game.ballImgTempy=game.ballImg.y;


	game.__ToggleBtn(game.mainPanel);
	game.__createIncDecButton(game.mainPanel);
	game.__createDashBoardButton(game.mainPanel);
}