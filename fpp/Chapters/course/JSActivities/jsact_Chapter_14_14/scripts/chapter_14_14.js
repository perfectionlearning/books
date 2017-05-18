/////////////////////////////////////////
// Game Logic
/////////////////////////////////////////
(function() {
	game.pool_left = 160, game.pool_top = 220; 
	game.pool_right = 337, game.pool_bottom = 390;
	game.pool_cx = 248, game.pool_cy = 307;
	
	game.palace_left = 153, game.palace_top = 17; 
	game.palace_width = 260, game.palace_height = 177;
	game.palace_right = game.palace_left + game.palace_width, game.palace_bottom = game.palace_top + game.palace_height;
	
	var lastAnimation = null;
	var snapAllowed = false;
	var isCrown2Tested = false;
	game.totalTime = 4;	//seconds
	
	game.resetElements = function( ele ) {
		if( ele === null) {
			//reset all elements
			game.mainActors[6].setAlpha(1.0).setLocation(game.mainEleImg[6][1], game.mainEleImg[6][2]);
			game.mainActors[7].setAlpha(1.0).setLocation(game.mainEleImg[7][1], game.mainEleImg[7][2]);
			game.mainActors[8].setAlpha(1.0).setLocation(game.mainEleImg[8][1], game.mainEleImg[8][2]);
			game.mainActors[6].emptyBehaviorList();
			game.mainActors[7].emptyBehaviorList();
			game.mainActors[8].emptyBehaviorList();
			//reset opacity of crown 2
			var alpha_behavior = new CAAT.AlphaBehavior().
					setValues(1, 1).
					setDelayTime(0, 0);
			game.mainActors[7].addBehavior( alpha_behavior );
			if(game.lastDisplayedBanner != 0) {
				game.__bannerDisplay(0, 0, -70, 0, false);
			}
		} else if( ele ) {
			//reset only this element
			var eleId = ele.id, eleIndex = eleId.split('_')[1]
			ele.setAlpha(1.0).setLocation(game.mainEleImg[eleIndex][1], game.mainEleImg[eleIndex][2]);
		}
		//set volume displaced text to 0
		setVolume( null, false);
		//show appropriate unloading of the balance scale
		if(lastAnimation == 'gold_load') {
			game.mainActors[5].setBackgroundImage(game.si).playAnimation("gold_unload");
		} else if(lastAnimation == 'crown2_load') {
			game.mainActors[5].setBackgroundImage(game.si).playAnimation("crown2_unload");
		} else if(lastAnimation == 'crown3_load') {
			game.mainActors[5].setBackgroundImage(game.si).playAnimation("crown3_unload");
		}
		//hide dog animation
		game.mainActors[1].setAnimationImageIndex([0]);
		game.mainActors[2].setAnimationImageIndex([44]);
		lastAnimation = null;
	}
	//====================================================
	// On every instant of dragging
	//====================================================
	game.onDragFn = function( obj ) {
		var objX = obj.x, objY = obj.y, objWidth = obj.width, objHeight = obj.height, objId = obj.id, objIndex = objId.split('_')[1];
		if(((objX + objWidth) > game.pool_left) && ((objY + objHeight) > game.pool_top) && (objX < game.pool_right) && (objY < game.pool_bottom)) {
			//within pool boundary	
		} else if(((objX + objWidth) > game.palace_left) && (objY < game.palace_bottom) && ((objY + objHeight) > game.palace_top) && (objX < game.palace_right)) { 
			//within palace boundary
			game.resetElements('');
		} else {
			//outside of pool and palace
			game.mainActors[objIndex].setAlpha(1.0);	
			game.resetElements('');
		}
	}
	//====================================================
	// On mouseup from dragged element
	//====================================================
	game.onMouseUpFn = function( obj ) {
		var objX = obj.x, objY = obj.y, objWidth = obj.width, objHeight = obj.height, objId = obj.id, objIndex = objId.split('_')[1];
		//====================================================
		//Dropped within pool boundary
		//====================================================
		if(((objX + objWidth) > game.pool_left) && ((objY + objHeight) > game.pool_top) && (objX < game.pool_right) && (objY < game.pool_bottom)) {
			var fullRange = game.pool_bottom - game.pool_top;
			var remainingDist = (game.pool_bottom - objHeight) - objY;
			var remainingTime = ( remainingDist * game.totalTime ) / fullRange;
			var X1 = objX, Y1 = objY, X2 = objX, Y2 = game.pool_bottom - objHeight;
			if( X1 < game.pool_left ) {
				X1 = game.pool_left + 5;
				X2 = X1;
			} else if( X1 > ( game.pool_right - objWidth ) ) {
				X1 = ( game.pool_right - objWidth ) - 5;
				X2 = X1;
			}
			if(objIndex == 7) {	//if crown2
				isCrown2Tested = true;
			}
			var path = new CAAT.PathBehavior()
						.setValues( new CAAT.Path().setColor("#000").setLinear(
							X1, Y1, X2, Y2 
						).setInteractive(false) )
						.setDelayTime( 0, remainingTime * 1000 );
			game.mainActors[objIndex].setAlpha(0.7).addBehavior(path);
			//set volume displaced in display
			setVolume( objIndex, true);
			if(parseInt(objIndex) == 6) {
				if(lastAnimation == null) {
					//play animation - gold bar displacing water
					lastAnimation = 'gold_load';
					game.mainActors[5].setBackgroundImage(game.si).playAnimation("gold_load");
				}
			} else if(parseInt(objIndex) == 7) {
				if(lastAnimation == null) {
					//play animation - crown2 displacing water
					lastAnimation = 'crown2_load';
					game.mainActors[5].setBackgroundImage(game.si).playAnimation("crown2_load");
				}
			} else if(parseInt(objIndex) == 8) {
				if(lastAnimation == null) {
					//play animation - crown3 displacing water
					lastAnimation = 'crown3_load';
					game.mainActors[5].setBackgroundImage(game.si).playAnimation("crown3_load");
				}
			}
		} 
		//====================================================
		// Dropped within palace boundary
		//====================================================
		else if(((objX + objWidth) > game.palace_left) && (objY < game.palace_bottom) && ((objY + objHeight) > game.palace_top) && (objX < game.palace_right)) {
			//if crown2 is dropped on the palace
			if(game.mainEleImg[objIndex][6]){	
				if(isCrown2Tested) {
					//great job - as the crown2 is tested and found to be impure
					game.__bannerDisplay(1, 1, -70, 0, false);
				} else {
					//dont cheat, please do some calculation before answering
					game.__bannerDisplay(3, 3, -70, 0, false);
				} 
				//adulterated crown found. Time to punish the gold smith
				//
				//fade out this crown				
				var alpha_behavior = new CAAT.AlphaBehavior().
					setValues(1, 0).
					setDelayTime(0, 2000);
				obj.addBehavior( alpha_behavior );
				//
				//dog animation
				//
				game.mainActors[1].visible = true;
				if(isCrown2Tested) {
					//chase the gold smith
					game.mainActors[1].setBackgroundImage(game.dog).playAnimation("chase_1");
				} else {
					//just dog comes out and stares at us
					game.mainActors[1].setBackgroundImage(game.dog_2).playAnimation("chase_3");
				}
			} else {
				//Sorry, that was pure gold
				if( objIndex == 6 ){
					//gold bar
					game.__bannerDisplay(4, 3, -70, 0, false);
				} else if( objIndex == 8 ){
					//crown3
					game.__bannerDisplay(2, 3, -70, 0, false);
				}
				game.resetElements(obj);
			}
			setVolume( objIndex, false);
		} 
		//====================================================
		//Dropped outside of palace and pool
		//====================================================
		else {
			snapAllowed = false;
			game.mainActors[objIndex].setAlpha(0.7);
			game.resetElements(obj);
			setVolume( objIndex, false);
		}
	}
	//====================================================
	// Change displaced volume on display
	//====================================================
	function setVolume( objIndex, flag ) {
		if(flag) {
			game.dashBoardTxt[1].setText(game.mainEleImg[objIndex][7]);
		} else {
			game.dashBoardTxt[1].setText('0');	
		}
		game.dashBoardTxt[2].x = game.dashBoardTxt[1].x + game.dashBoardTxt[1].width + 4;
		game.dashBoardTxt[3].x = game.dashBoardTxt[2].x + 19;
	}
	//====================================================
	// On clicking reset button in dash board
	//====================================================
	game.resetBtn_click = function () {
		game.resetElements( null );
		game.__bannerDisplay(0, 0, -70, 0, false);
		isCrown2Tested = false;
	}
	//====================================================
	// Init balance scale animation sequence
	//====================================================
	game.initAnimation_bs = function() {
		game.si = new CAAT.Foundation.SpriteImage()
					.initialize( game.getDirector().getImage(game.mainEleImg[5][0]), game.mainEleImg[5][4], game.mainEleImg[5][5])
					.addAnimation(
						"gold_load",    
						[50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72], 
						100, 
						function() {
							//stop at the last frame
							this.setAnimationImageIndex([72]);
						}
					)
					.addAnimation(
						"gold_unload",  
						[73, 74, 75, 76, 77, 78, 79], 
						100,
						function() {
							//stop at the last frame
							this.setAnimationImageIndex([79]);
						}
					)
					.addAnimation(
						"crown2_load",  
						[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35], 
						100,
						function() {
							//stop at the last frame
							this.setAnimationImageIndex([35]);
						}
					)
					.addAnimation(
						"crown2_unload",
						[36, 37, 38, 39, 40, 41, 42], 
						100,
						function() {
							//stop at the last frame
							this.setAnimationImageIndex([42]);
						}
					)
					.addAnimation(
						"crown3_load",  
						[2,3,4,5,6,7,8,9,10,11,12,13], 
						100,
						function() {
							//stop at the last frame
							this.setAnimationImageIndex([13]);
						}
					)
					.addAnimation(
						"crown3_unload",
						[14,15,16,17,18,19], 
						100,
						function() {
							//stop at the last frame
							this.setAnimationImageIndex([19]);
						}
					);
	}
	//====================================================
	// Init dog chase animation sequence
	//====================================================
	game.initAnimation_dog = function() {
		game.dog_2 = new CAAT.Foundation.SpriteImage()
					.initialize( game.getDirector().getImage(game.mainEleImg[9][0]), game.mainEleImg[9][4], game.mainEleImg[9][5])
					.addAnimation(
						"chase_3",    
						[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], 
						100, 
						function() {
							//stop at the last frame
							this.setAnimationImageIndex([28]);
						}
					);
		game.dog_1 = new CAAT.Foundation.SpriteImage()
					.initialize( game.getDirector().getImage(game.mainEleImg[2][0]), game.mainEleImg[2][4], game.mainEleImg[2][5])
					.addAnimation(
						"chase_2",    
						[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 
						100, 
						function() {
							//stop at the last frame
							this.setAnimationImageIndex([44]);
						}
					);
		game.dog = new CAAT.Foundation.SpriteImage()
					.initialize( game.getDirector().getImage(game.mainEleImg[1][0]), game.mainEleImg[1][4], game.mainEleImg[1][5])
					.addAnimation(
						"chase_1",    
						[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 
						100, 
						function() {
							//stop at the first frame
							this.setAnimationImageIndex([0]);
							game.mainActors[2].setBackgroundImage(game.dog_1).playAnimation("chase_2");
						}
					);
	}
})();