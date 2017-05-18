//==========================================================================
// This is the main entry point of the game
//==========================================================================

// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	spaceshipImg: null,
	redballImg: null,
	blueballImg: null,
	greenballImg: null,
	smallRightHand:null,
	smallLeftHand:null,
	verticalVelvalue: 0,
	verticalAccvalue: 0,
	horizontalVelvalue: 0,
	horizontalAccvalue: 0,
	initialyVelvalue: 0,
	initialxVelvalue: 0,
	oDashTxtArr: [],
	actPath: null,
	sharedPath: null,
	mainPanel: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================

		game.StartGame = function(){

					var assets=[
							{id:'background',      	url:game.actPath+'background.gif' },
							{id:'dashBG',      			url:game.sharedPath+'dash.gif' },
							//dashboard Image
							{id:'wellleft',    			url:game.sharedPath+'wellleft.gif' },
							{id:'divider',    			url:game.sharedPath+'divider.gif' },
							{id:'well100',     			url:game.sharedPath+'well100.gif' },
							{id:'well50',     			url:game.sharedPath+'well50.gif' },
							{id:'wellright',   			url:game.sharedPath+'wellright.gif' },
							{id:'incre_decre_btn',   	url:game.sharedPath+'incre_decre_btn.png' },
							{id:'incrBgMed',   			url:game.sharedPath+'incrBgMed.gif'},
							{id:'smalljuggballred',   	url:game.actPath+'smalljuggballred.gif'},
							{id:'smalljuggballgreen',   url:game.actPath+'smalljuggballgreen.gif'},
							{id:'smalljuggballblue',   	url:game.actPath+'/smalljuggballblue.gif'},
							{id:'grid',    				url:game.sharedPath+'grid.gif' },
							{id:'smallhandLt',    		url:game.sharedPath+'smallhandLt.gif' },
							{id:'smallhandRt',    		url:game.sharedPath+'smallhandRt.gif' },

							//Buttons GO, RESET, PAUSE
							{id:'buttons',     			url:game.sharedPath+'buttons.png' },

							//Banner Image
							{id:'banner',      			url:game.actPath+'banner.gif' }
							];

					// Start the game.  Loads the assets, creates the canvas, and starts it all running.
		CAAT.Module.Initialization.Template.init(
			760, 	//Height of the canvas that will be created
			600,	//width of the canvas that will be created
			'activity',	// Leave this null to create a new canvas that will be appended to the body
			assets,
			game.__gameInitialize
		);
		//
		// Timer collapses are fixed by freezing the activity
		//
		CAAT.bindEvent(window, 'blur', function (event) {
			if(game.goFlag) {
				game.pauseBtnMDownHandler();
			}
		}, false);
	}

	game.Cleanup = function() {
		CAAT.clearEvents();
		CAAT.currentDirector.clean();
	}

	 game.__gameInitialize=function( director ){
				CAAT.DEBUG = 0;

				game._director = director;

				game._scene = director.createScene();

				game.mainPanel = game.createPanels( game._director, game._scene );

				var oActorImg = game.__addImageOnScene( game._director.getImage('background'), 1, 1 );
				oActorImg.setLocation(0, 0);
				game.mainPanel.addChild(oActorImg);
				var oActor = game.__addImageOnScene( game._director.getImage('banner'), 1, 1 );
				oActor.setLocation(525, 380);

				game.mainPanel.addChild(oActor);

				//add image to the main
				game.__createMainImgScene();

				//game.__createDashBoardTxt();
				game.__createDashBoardButton();
				game.__createIncDecButton();

				CAAT.loop(60);
			}
		//====================================================
		//create main panel image on scene
		//====================================================
		game.__createMainImgScene=function(){



			  	game.blueballImg = game.__addImageOnScene( game._director.getImage('smalljuggballblue'), 1, 1 );
				game.blueballImg.setLocation(320, 424);
				game.mainPanel.addChild(game.blueballImg);

				game.greenballImg = game.__addImageOnScene( game._director.getImage('smalljuggballgreen'), 1, 1 );
				game.greenballImg.setLocation(320, 424);
				game.mainPanel.addChild(game.greenballImg);

			    game.redballImg = game.__addImageOnScene( game._director.getImage('smalljuggballred'), 1, 1 );
				game.redballImg.setLocation(320, 424);
				game.mainPanel.addChild(game.redballImg);

				game.smallRightHand=game.__addImageOnScene( game._director.getImage('smallhandRt'), 1, 1 );
				game.smallRightHand.setLocation(418,436);
				game.mainPanel.addChild(game.smallRightHand);


				game.smallLeftHand=game.__addImageOnScene( game._director.getImage('smallhandLt'), 1, 1 );
				game.smallLeftHand.setLocation(312,436);
				game.mainPanel.addChild(game.smallLeftHand);

		}
