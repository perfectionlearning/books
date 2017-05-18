//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules

var game = { 
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	oDashIncValArr: [],
	wallhit : [],
	mainPanel: null,
	putterdistance: null,
	putterInc: null,
	ballImg: null,
	EField : null,
	chargesArray:[],
	clubImg: null
	//sharedPath: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
		game.StartGame = function(){
			CAAT.DEBUG = 0;
			var oActorContainer_0 = null, oActorContainer_1 = null;
			game.actorContainer = [];
			game.draggerContainer = [];
			game.mainEleImg =[];
			game.incBanner = [];
			game.incBannerValue = [];
				game.incBannerValue[game.incBannerValue.length] = ['0','bold 14px Arial', 'left', 502, 531, 'IncDecputterTxt', '#fff'];//Text, font_style, alignment, xPos, yPos, id
				game.incBanner[game.incBanner.length]   = ['incrBgMed', 476,  530];
				game.mainEleImg[game.mainEleImg.length] = ['background',  	0,   0];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['golfHole',  	650,   340];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['sand10',  	500,   300];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['mat',  	45,   210];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['hill30',  	550,   25];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['vrtWall',  	492,   215];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['horizWall',  	0,   0];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['v470Wall',  	0,   15];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['v470Wall',  	742,   15];//image_id, image_X_Position, image_Y_Position
				game.mainEleImg[game.mainEleImg.length] = ['horizWall',  	0,   485];//image_id, image_X_Position, image_Y_Position
				var assets = [
					{id:'background',      	url:game.actPath+'background.gif' },	
					{id:'ball',      		url:game.actPath+'ball.png' },	
					{id:'ballSprite',      	url:game.actPath+'ball1.png' },	
					{id:'golfHole',      	url:game.actPath+'golfHole.gif' },	
					{id:'club',      		url:game.actPath+'club.gif' },	
					{id:'vrtWall',      	url:game.actPath+'vrtWall.gif' },	
					{id:'horizWall',      	url:game.actPath+'horizWall.gif' },	
					{id:'v470Wall',      	url:game.actPath+'v470Wall.gif' },	
					{id:'hill30',      		url:game.actPath+'hill30.gif' },	
					{id:'mat',      		url:game.actPath+'mat.gif' },	
					{id:'sand10',      		url:game.actPath+'sand10.gif' },	
					{id:'dashBG',      		url:game.sharedPath+'dash.gif' },	
					
					//dashboard Image
					
					{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
					{id:'well100',     		url:game.sharedPath+'well100.gif' },
					{id:'well50',     		url:game.sharedPath+'well50.gif' },
					{id:'wellright',   		url:game.sharedPath+'wellright.gif' },						
					{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },						
					{id:'incre_decre_btn',   		url:game.sharedPath+'incre_decre_btn.png' },						
					
					//Buttons GO, RESET, PAUSE
					{id:'buttons',     	url:game.sharedPath+'buttons.png' },
					//Banner Image
					{id:'banner',     	url:game.sharedPath+'banner.png' },
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
			
			var bg= game.__addImageOnScene( game._director.getImage(game.mainEleImg[0][0]), 1, 1 );		
			bg.setLocation(game.mainEleImg[0][1], game.mainEleImg[0][2]);			
			game.mainPanel.addChild(bg);

			game.__createBannerContainer();
			//add main panel image
			
			game.__createMainImgScene();
			
			//CAAT.loop(60);
		}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
//Drawing dragPutter
	game.dragPutter = [];
	game.dragPutter[game.dragPutter.length] = ['point_1',10,210, 1, 1, true, 50, 90,'red'];	

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
				// if(!
 //== null){
				// game._timerInstance.cancel();}
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
				this.x=game.clubImg.x;
				this.y=game.clubImg.y;
				this.setRotationAnchored(game.directionRotate[1], 1, 0.8);
				game.generateForceArray();
			};
	
			this.mouseDrag = function (mouseEvent) {
				var pt;
				pt = this.modelToView(new CAAT.Math.Point(mouseEvent.x, mouseEvent.y));
				//this.parent.setZOrder(this, Number.MAX_VALUE);
				this.parent.viewToModel(pt);
				if (this.__d_ax === -1 || this.__d_ay === -1) {
					
					this.x = pt.x-this.width/2;
					this.y = pt.y-this.height/2;
					this.__d_ax = pt.x;
					this.__d_ay = pt.y;
					this.__d_asx = this.scaleX;
					this.__d_asy = this.scaleY;
					this.__d_ara =this.rotationAngle;
					this.__d_screenx = mouseEvent.screenPoint.x;
					this.__d_screeny = mouseEvent.screenPoint.y;
					
				}
				
				this.x += pt.x - this.__d_ax;
				this.y += pt.y - this.__d_ay;
				this.__d_ax = pt.x;
				this.__d_ay = pt.y;
		
				game.onObjMove(game.actorContainer[0]);
				
			
			};
			return this;
		},
	},
	null,
	"CAAT.exemplarr"
	
	);	
	game.clubImg = new CAAT.Foundation.ActorContainer().setBounds(12,210,52,83);
	game.clubImg.setRotation(50);
	game.tempclubImg = game.__addImageOnScene( game._director.getImage('club'), 1, 1 );
	game.tempclubImg
		.setLocation(0, 0);
	game.clubImg.addChild( game.tempclubImg );
	
	//Putter Image
	/*game.clubImg = game.__addImageOnScene( game._director.getImage('club'), 1, 1 );
	game.clubImg
		.setLocation(10, 210);
	game._scene.addChild( game.clubImg );*/
	game.__createMainTxt();
	game._scene.addChild( game.clubImg );

	for(var i=0;i<game.dragPutter.length;i++){

	this['oActorContainer_'+i] = new CAAT.exemplarr()
			.setBounds( 	
				game.dragPutter[i][1], 
				game.dragPutter[i][2], 
				game.dragPutter[i][6], 
				game.dragPutter[i][7]
			)
			.setId('ac_'+i)
			.setScale( 1, 1 );
			
		this['oActorContainer_'+i]
			.setLocation(parseFloat(game.dragPutter[i][1]), parseFloat(game.dragPutter[i][2]));
						
		if(game.dragPutter[i][5]){
			this['oActorContainer_'+i].userDrag();
			// this['oActorContainer_'+i].setAlpha(0.8);
		}
		//this['oActorContainer_'+i] = game.__addImageOnScene( game._director.getImage('ball'), 1, 1 );
		game._scene.addChild( this['oActorContainer_'+i] );
		game.actorContainer.push( this['oActorContainer_'+i] );
			
	}
	
	//create bottom panel
		for(var i=0;i<game.incBanner.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(game.incBanner[i][0]), 1, 1 );
			oActor.			
				setLocation(game.incBanner[i][1], game.incBanner[i][2]);			
			game._scene.addChild(oActor);			
		}
	//Calling method to create INC and DEC button.
	game.__createIncDecButton();
	//For displaying INC and DEC value.
	for(var i=0;i<game.mainEleImg.length;i++){
		var oActorImg ;
		if(!(i==0))
		{
		oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );		
		oActorImg.
		setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);			
		game.mainPanel.addChild(oActorImg);
		}
		game.wallhit.push(oActorImg);
	}
	//For displaying INC and DEC value.
	for(var i=0;i<game.incBannerValue.length; i++){			
			var oActorTxt = game.__addTextOnImage(game.incBannerValue[i][6], game.incBannerValue[i][0], game.incBannerValue[i][1], game.incBannerValue[i][2], game._director );
			oActorTxt
				.setId()
				.setLocation(game.incBannerValue[i][3], game.incBannerValue[i][4]);
			game._scene.addChild(oActorTxt);
			game.oDashIncValArr.push(oActorTxt);
		}
	//Ball Image
	 game.ballImg = game.__addImageOnScene( game._director.getImage('ball'), 1, 1 );
	 game.ballImg.setLocation(90, 258);
	 game.mainPanel.addChild( game.ballImg );
	// game.__createBannerContainer();
	 game.chargesArray[game.chargesArray.length]=[game.ballImg,'chg1'];
	 game.chargesArray[game.chargesArray.length]=[game.clubImg,'chg2'];
	 game.chargesArray[game.chargesArray.length]=[game.wallhit[4],'chg3'];
	 game.chargesArray[game.chargesArray.length]=[game.wallhit[2],'chg4'];
	 
	 //game.generateForceArray();
	 
}	
//=======================================================
//Create Increment and Decrement button
//=======================================================
game.__createIncDecButton=function(){
	var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
	var iniputterIncBtn = new CAAT.Foundation.Actor().
							setId('iniputterInc').
							setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
								//game.incDecHandler(this);
							}).setLocation(472,530);
	var iniputterDecBtn = new CAAT.Foundation.Actor().
							setId('iniputterDec').
							setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
								//game.incDecHandler(this);
							}).setLocation(472,539);
	game._scene.addChild(iniputterIncBtn);
	game._scene.addChild(iniputterDecBtn);
			
	//the increment and decrement buttons MouseDown functions are called when long press
	iniputterIncBtn.mouseDown = game.incDecMDown;
	iniputterDecBtn.mouseDown = game.incDecMDown;
	
	//the increment and decrement buttons MouseDown functions are called when long press
	iniputterIncBtn.mouseUp = game.incDecMUp;
	iniputterDecBtn.mouseUp = game.incDecMUp;
}
//==================================================
//Create Main panel text
//==================================================

			
	game.__createMainTxt = function(){
		//if(game.putterCharge>0){
		//game.EField = game.__addTextOnImage('#ff0000', '0', 'bold 12px Arial',  'left', game._director );
		//}
	 	//else{
		game.EField = game.__addTextOnImage('#000', '0', 'bold 12px Arial',  'left', game._director );
		//}	
		game.EField.
			setRotationAnchored(190,0,0);
		game.EField.
			setLocation(40,56);//49,264
		game.clubImg.addChild(game.EField);	
	}	
