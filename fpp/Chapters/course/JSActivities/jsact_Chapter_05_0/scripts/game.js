//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	spaceshipImg: null,
	verticalVelocity: 0,
	verticalAccel: 0,
	verticalHeight: 0,
	NForce: 0,
	oDashTxtArr: [],
	heightdefine:"m",
	acceldefine :"m/s",
	velocitydefine:"m/s",
	forcedefine:"N",
	timerStart:false,
	actPath: null,
	sharedPath: null,
	mainPanel:null

};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame= function(){
			   game.mainEleImg = [];
				 game.mainEleImg[ game.mainEleImg.length] = ['sky',  		0,   0];//image_id, image_X_Position, image_Y_Position
				 game.mainEleImg[ game.mainEleImg.length] = ['background',  0, 258];

				var assets = [
							{id:'sky', 					url:game.actPath+'sky.gif'},
							{id:'background',      		url:game.actPath+'background.gif' },
							{id:'copterbreake',      	url:game.actPath+'copterbreake.png' },
							{id:'dashBG',      			url:game.sharedPath+'dash.gif' },

							//dashboard Image
							{id:'wellleft',    			url:game.sharedPath+'wellleft.gif' },
							{id:'well100',     			url:game.sharedPath+'well100.gif' },
							{id:'wellright',   			url:game.sharedPath+'wellright.gif' },
							{id:'incre_decre_btn',     	url:game.sharedPath+'incre_decre_btn.png' },
							{id:'incrBgMed',   			url:game.sharedPath+'incrBgMed.gif' },

							//Buttons GO, RESET, PAUSE
							{id:'buttons',     			url:game.sharedPath+'buttons.png' },

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
		game.Cleanup = function() {
			CAAT.clearEvents();
			CAAT.currentDirector.clean();
		}
		}

			game. __gameInitialize = function( director ){

				game._director = director;
				game._scene = director.createScene();
				game.mainPanel = game.createPanels( game._director, game._scene );

				//add image to the main
				game.__createMainImgScene();

				//banner display
				game.__createBannerContainer(false);


                  // add key events

                game.keys(game.spaceshipImg);


                // start helicopter movement action

                game.startFlyAnimation();


				CAAT.loop(60);
			}

		//====================================================
		//create main panel image on scene
		//====================================================
		game. __createMainImgScene=function(){
			for(var i=0;i< game.mainEleImg.length;i++){
				var oActorImg = game.__addImageOnScene( game._director.getImage( game.mainEleImg[i][0]), 1, 1 );
				oActorImg.
					setLocation( game.mainEleImg[i][1],  game.mainEleImg[i][2]);
				game.mainPanel.addChild(oActorImg);
			}

			game.spaceshipImg = new CAAT.Foundation.Actor().setBackgroundImage(
				new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('copterbreake'), 2, 7 )
			);
			game.spaceshipImg
				.setLocation(185, 316);

			game.mainPanel.addChild( game.spaceshipImg );

			game.setNetForceTxt("0");
			game.setAccelerationTxt("0.00");
			game.setHeightTxt("0.07");
			game.setVelocityTxt("0.00");
		}
