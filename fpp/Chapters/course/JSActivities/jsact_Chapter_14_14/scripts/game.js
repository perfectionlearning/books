//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {};
game.actPath = '';
game.sharedPath = '';
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){		
	CAAT.DEBUG = 0;
	game.mainEleImg = [];
											//image_id, image_X_Position, image_Y_Position, allowDrag, 
											//spriteRows, spriteCol, isCorrectAnswer, volume value
	game.mainEleImg[game.mainEleImg.length] = ['background',    0,   0,   false, 1, 1,  false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['dog_chase_1',	390,  80, false, 8, 5,  false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['dog_chase_2',	390,  80, false, 9, 5,  false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['palace',	    153, 17,  false, 1, 1,  false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['pool',	        56, 135,  false, 1, 1,  false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['balance_scale',	424, 229, false, 8, 10, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['gold_bar',		255, 530, true,  1, 1,  false, '1,035'];
	game.mainEleImg[game.mainEleImg.length] = ['crown_2',		380, 510, true,  1, 1,  true,  '176'];
	game.mainEleImg[game.mainEleImg.length] = ['crown_3',		514, 509, true,  1, 1,  false, '140'];
	game.mainEleImg[game.mainEleImg.length] = ['dog_chase_3',	390,  80, false, 7, 5,  false, ''];
		
	var assets = [
		{id:'balance_scale', url:game.actPath+'balance_scale.png'},
		{id:'background', url:game.actPath+'background.gif'},
		{id:'palace', url:game.actPath+'palace.gif'},
		{id:'pool', url:game.actPath+'pool.gif'},
		{id:'gold_bar', url:game.actPath+'gold_bar.gif'},
		{id:'crown_2', url:game.actPath+'crown_2.gif'},
		{id:'crown_3', url:game.actPath+'crown_3.gif'},
		{id:'dashBG', url:game.sharedPath+'dash.gif'},
		{id:'wellLeft', url:game.sharedPath+'wellleft.gif'},
		{id:'well100', url:game.sharedPath+'well100.gif'},
		{id:'wellRight', url:game.sharedPath+'wellright.gif'},
		{id:'buttons', url:game.sharedPath+'buttons.png'},
		{id:'banner', url:game.sharedPath+'banner.png'},
		{id:'dog_chase_1', url:game.actPath+'run_1.png'},
		{id:'dog_chase_2', url:game.actPath+'run_2.png'},
		{id:'dog_chase_3', url:game.actPath+'run_3.png'}
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
//====================================================
//Clean up events attached because of this activity
//====================================================
game.Cleanup = function(){
	CAAT.clearEvents();
    CAAT.currentDirector.clean();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function( cont, startIndex, endIndex){
	var _director = game.getDirector();	
	for(var i = startIndex; i < endIndex; i++) {
		var thisActorImg = game.__addImageOnScene( _director.getImage(game.mainEleImg[i][0]), game.mainEleImg[i][4], game.mainEleImg[i][5] );		
		thisActorImg
			.centerOn(thisActorImg.width/2, thisActorImg.height/2)
			.setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2])
			//.setBounds(game.mainEleImg[i][1], game.mainEleImg[i][2], 100, 100)
			.setClip(false);
		if(game.mainEleImg[i][3]) {
			thisActorImg
				//.setBounds(game.mainEleImg[i][1], game.mainEleImg[i][2], 100, 100)
				.userDrag(game.onDragFn, game.onMouseUpFn, game.resetElements)
				.setId('eleId_'+i);
		}
		if(i == 2) {
			thisActorImg.setAnimationImageIndex([44]);
		}
		cont.addChild( thisActorImg );
		game.mainActors.push( thisActorImg );
	}
}
//====================================================
// Initialize game
//====================================================
game.__gameInitialize = function( director ){	
	game.mainActors = [];
	game.extendActorDragFunctionality();
	var _scene = director.createScene();		
	game.getDirector = function() { return director; };
	game.getScene = function() { return _scene; };		
	var cont = game.createPanels( director, _scene );
	game.__createMainImgScene( cont, 0, 5);
	var midPoint =  new CAAT.ShapeActor()
					.setLocation(game.pool_cx, game.pool_cy)
					.setFillStyle('red')
					.setSize(5, 5);
	//cont.addChild(midPoint);
	var mainActorContainer = new CAAT.Foundation.ActorContainer()
								.setSize(director.width, director.height);
	_scene.addChild(mainActorContainer);
	game.__createMainImgScene( mainActorContainer, 5, game.mainEleImg.length);
	game.__createDashBoardButton(mainActorContainer);
	game.initAnimation_bs();
	game.initAnimation_dog();
	CAAT.loop(60);
}

game.extendActorDragFunctionality = function() {
	//=======================================================
	// Extend actor container's enable drag and use it as userDrag 
	// which draws the rays on every movement
	//=======================================================
	CAAT.Foundation.Actor.extend(
		{
			paint : function(director,time) {
				CAAT.exemplarr.superclass.paint.call(this,director,time);
			},

			userDrag: function (callback_drag, callback_mouseUp, callback_resetAll) {
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
				
				this.mouseDown = function (mouseEvent) {
					var objX = this.x, objY = this.y, objWidth = this.width, objHeight = this.height, objId = this.id, objIndex = objId.split('_')[1];
		//Dropped within pool boundary
		if(((objX + objWidth) > game.pool_left) && ((objY + objHeight) > game.pool_top) && (objX < game.pool_right) && (objY < game.pool_bottom)) {
				//stop previous path behavior if any and add new value
				if(game.mainActors[6]) {
					game.mainActors[6].emptyBehaviorList();
				}
				if(game.mainActors[7]) {
					game.mainActors[7].emptyBehaviorList();
				}
				if(game.mainActors[8]) {
					game.mainActors[8].emptyBehaviorList();
				}
		} else {
			//reset all elements
			callback_resetAll( null );
		}
				};

				this.mouseUp = function (mouseEvent) {
					this.__d_ax = -1;
					this.__d_ay = -1;

					if( callback_mouseUp ){
						callback_mouseUp( this );
					}
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
					
					if( callback_drag ){
						callback_drag( this );
					}
				};

				return this;
			},
		},
		null,
		"CAAT.exemplarr"
	);	
}