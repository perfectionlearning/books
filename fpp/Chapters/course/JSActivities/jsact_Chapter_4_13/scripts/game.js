//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	falldownImg: null,
	notcatchImg: null,
	catchImg : null,
	monkeyWithBanana:null,
	x:75,
	y:443,
	onIncDecArr:[],
	IncDecValArray: [],
	bannerDown:true,
	oDashTxtArr: []
};


//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
			CAAT.DEBUG = 0;

			var mainPanel = null,
				falldownRows = 4,
				falldownCols = 3,
				notcatchRows = 9,
				notcatchCols = 6;

            game.imgLinePath=['point', 229.45,  379.51, 1, 1, true, 35, 35, 'blue'];

	            var oActorContainer = null;
				game.actorContainer = [];
				game.Rays = [];

				game.mainEleImg = [];
					game.mainEleImg[game.mainEleImg.length] = ['psProfessorBackground',  	0,   0];//image_id, image_X_Position, image_Y_Position
					game.mainEleImg[game.mainEleImg.length] = ['coverleaf',  				38,   25];
					game.mainEleImg[game.mainEleImg.length] = ['monkeyWithBananaBody',  	48,   440];
				    game.mainEleImg[game.mainEleImg.length] = ['coverleaf',  		38,   25];



			var assets = [
							{id:'psProfessorBackground', 	url:game.actPath+'psProfessorBackground.gif'},
							{id:'falldown', 				url:game.actPath+'falldown.png'},
							{id:'coverleaf', 				url:game.actPath+'coverleaf.png'},
							{id:'stage', 					url:game.actPath+'stage.png'},
							{id:'monkeyWithBananaHead',   	url:game.actPath+'monkeyWithBananaHead.png'},
							{id:'monkeyWithBananaBody',   	url:game.actPath+'monkeyWithBananaBody.gif'},
							{id:'monkeyWithOutBanaHead',   	url:game.actPath+'ground_monkey.png'},
							{id:'notcatch',   				url:game.actPath+'notcatch.png'},
							{id:'catch',   				    url:game.actPath+'catch.png'},
							{id:'notcatchend',   			url:game.actPath+'notcatchend.png'},
							{id:'catchend',   				url:game.actPath+'catchend.png'},
							{id:'banner',      				url:game.actPath+'banner.png' },

							//dashboard Image
							{id:'dashBG',      			url:game.sharedPath+'dash.gif' },
							{id:'dividerPlain',    		url:game.sharedPath+'divider.gif' },
							{id:'bananaicon',    		url:game.sharedPath+'bananaicon.gif' },
							{id:'grid',    				url:game.sharedPath+'grid.gif' },
							{id:'wellleft',    			url:game.sharedPath+'wellleft.gif' },
							{id:'well100',     			url:game.sharedPath+'well100.gif' },
							{id:'wellright',   			url:game.sharedPath+'wellright.gif' },
							{id:'incre_decre_btn',   	url:game.sharedPath+'incre_decre_btn.png' },
							{id:'incrBgMed',   			url:game.sharedPath+'incrBgMed.gif'},
							{id:'buttons',     			url:game.sharedPath+'buttons.png' }
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
	game.__gameInitialize= function( director ){
				game._director = director;
				game._scene = director.createScene();

				game.mainPanel = game.createPanels( game._director, game._scene );
				//add image to the main
				game.__createMainImgScene();

				game._createForeGround(game._director);
				//banner display

	}

	game._createForeGround = function(director){

	           var thisRay = null;
	           for(var i=0; i<1; i++) {
	                           thisRay = new CAAT.Foundation.ActorContainer().
	                           setBounds( 0, 0, director.width, 900);
	                           thisRay.setGestureEnabled(false);
	                           game.mainPanel.addChild(thisRay);
	                           game.Rays.push(thisRay);
	                       }

			   this['oActorContainer'] = new CAAT.exemplarr()
							.setBounds(
								game.imgLinePath[1],
								game.imgLinePath[2],
								game.imgLinePath[6],
								game.imgLinePath[7]
							)
							.setFillStyle(game.imgLinePath[8])
							.setScale( 1, 1 )
							.setAlpha(0.0);

				this['oActorContainer']
					.setLocation(parseFloat(game.imgLinePath[1]), parseFloat(game.imgLinePath[2]));

				if(game.imgLinePath[5]) {
					this['oActorContainer'].userDrag(true);
				}
				game.actorContainer.push( this['oActorContainer'] );
				game.actorContainer.push(thisRay);

				//Calling inc and dec Button Display and Bg image
				game._incDecBg();
				game._IncDecDispFun();

				game.onObjMove(game.actorContainer[0]);


				game.mainPanel.addChild(game.monkeyHead);
				game.__createBannerContainer();

				game._scene.addChild( this['oActorContainer'] );

				game.__createDashBoardButton();
				game.__createIncDecButton();


	       }

		//====================================================
		//create main panel image on scene
		//====================================================
    game.__createMainImgScene = function(){
			for(var i=0;i<game.mainEleImg.length;i++){
				var oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );
				oActorImg.
					setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
				game.mainPanel.addChild(oActorImg);
			}

			game.falldownImg = game.__addImageOnScene( game._director.getImage('falldown'), 4, 3 );
			game.falldownImg
				.setLocation(463, 21);

			game.notcatchImg = game.__addImageOnScene( game._director.getImage('notcatch'), 5, 6 );
			game.notcatchImg
				.setLocation(418, 203);

		    game.monkeyHead = game.__addImageOnScene( game._director.getImage('monkeyWithBananaHead'), 1, 1);
		    game.monkeyHead.setLocation(20,   418);

		    game.banana= game.__addImageOnScene( game._director.getImage('bananaicon'), 1, 1);
				game.banana
					.setLocation(72,   425);




			game.catchImg = game.__addImageOnScene( game._director.getImage('catch'), 4,6);
			game.catchImg
					.setLocation(418, 203);

			game.stage = game.__addImageOnScene( game._director.getImage('stage'), 1,1);
			game.stage
									.setLocation(426, 440);
		//	game.banana.visible = false;

			game.mainPanel.addChild( game.falldownImg );
			game.mainPanel.addChild( game.notcatchImg );
			game.mainPanel.addChild(game.catchImg);
			game.mainPanel.addChild(game.stage);

			game.mainPanel.addChild(game.banana);
			game.professorHangAnimation();

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

						this.mouseMove = function (mouseEvent) {
						};

						this.mouseUp = function (mouseEvent) {
							this.__d_ax = -1;
							this.__d_ay = -1;

							game.actorContainer[0].x = game.x2  - ((game.actorContainer[0].width)*(1/2));
							game.actorContainer[0].y = game.y2  - ((game.actorContainer[0].height)*(1/2));

						};

						this.mouseDrag = function (mouseEvent) {

							if(game.bannerDown){
								game.__bannerDisplay(0, 0, -70, 0, false);
								game.bannerDown = false;
							}
							var pt;
							pt = this.modelToView(new CAAT.Math.Point(mouseEvent.x, mouseEvent.y));
							//this.parent.setZOrder(this, Number.MAX_VALUE);
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


							game.onObjMove(game.actorContainer[0]);

						};

						return this;
					},
				},
				null,
				"CAAT.exemplarr"
			);

	}
