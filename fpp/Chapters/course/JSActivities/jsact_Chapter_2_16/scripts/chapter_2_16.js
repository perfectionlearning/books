//
//	Game Logic
//
(function(){
	var grayRabbitDistance = 0,
		brownRabbitDistance = 0,
		blackRabbitDistance = 0,
		whiteRabbitDisatance = 0,
		
		grayRabbitAcc = -0.4,
		brownRabbitAcc = -0.36,
			
		grayVel = 0,
		brownVel = 0,
		blackVel = -0.8,
		whiteVel = 0.7,
		
		brownInitVel = 0.9,
		grayInitVel = 1.0,
		
		t = 1/60,
		elapsedT = 0,
		currentTimeStamp = 0,
		startTimeStamp = 0,
		pauseTimeStamp = 0,
		
		blackRabbitTimer = null, 
		whiteRabbitTimer = null,
		grayRabbitTimer = null,
		brownRabbitTimer = null,
		isFrstHalfCompleted = false,
		counter = 0,
		isGameStart = false,
		isGameOver = false,
		blackFrstHalfCompleted = false,
		whiteFrstHalfCompleted = false,
		grayFrstHalfCompleted = false,
		brownFrstHalfCompleted = false;
		
	game.resetTags = function(){
		game.tag_1.
			setLocation(600, 450).
			visible = false;
		game.tag_2.
			setLocation(670, 450).
			visible = false;
	}
	
	game.gobtnClickHandler = function(){
		if(!isGameStart){
			game.resetTags();		
			isGameStart = true;		
		}else{
			return
		}	
		if(!isFrstHalfCompleted){
			isFrstHalfCompleted = true;
			game.__bannerDisplay(0, 0, 0, -70, true);
			startTimeStamp = new Date().getTime();		
		}
		/////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////	
		if(!grayFrstHalfCompleted){
				game.grayRabbit.setBackgroundImage(game.grayRabbitSpriteImgAnim).playAnimation('gray_fwd_run');
		}else{
			game.grayRabbit.setBackgroundImage(game.grayRabbitSpriteImgAnim).playAnimation('gray_bwd_run');
		}		
		
		game.brownRabbit.setBackgroundImage(game.brownRabbitSpriteImgAnim).playAnimation('brown_run');
		
		if(!blackFrstHalfCompleted){
			game.blackRabbit.setBackgroundImage(game.blackRabbitSpriteImgAnim).playAnimation('black_bwd_run');
		}else{
			game.blackRabbit.setBackgroundImage(game.blackRabbitSpriteImgAnim).playAnimation('black_fwd_run');
		}
			
		game.whiteRabbit.setBackgroundImage(game.whiteRabbitSpriteImgAnim).playAnimation('white_run');		
		/////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////
		
		blackRabbitTimer = game._scene.createTimer(
							game._scene.time,
							1E3,
							function( scene_time, timer_time, timer_instance ){
								timer_instance.reset(scene_time);
							},
							function( scene_time, timer_time, timer_instance ){
								currentTimeStamp = new Date().getTime();
								elapsedT = (currentTimeStamp - startTimeStamp)/1000;
								setBlackRabbitPath();								
							}
						)
		whiteRabbitTimer = game._scene.createTimer(
							game._scene.time,
							1E3,
							function( scene_time, timer_time, timer_instance ){
								timer_instance.reset(scene_time);
							},
							function( scene_time, timer_time, timer_instance ){
								setWhiteRabbitPath();
							}
						)		
		
		brownRabbitTimer = game._scene.createTimer(
							game._scene.time,
							1E3,
							function( scene_time, timer_time, timer_instance ){
								timer_instance.reset(scene_time);
							},
							function( scene_time, timer_time, timer_instance ){
								setBrownRabbitPath();
							}
						   );
		
		grayRabbitTimer = game._scene.createTimer(
							game._scene.time,
							1E3,
							function( scene_time, timer_time, timer_instance ){
								timer_instance.reset(scene_time);
							},
							function( scene_time, timer_time, timer_instance ){
								setGrayRabbitPath();
							}
						   );
	}
	function setBlackRabbitPath(){
		blackRabbitDistance = blackVel * t;	
		blackRabbitDistance *= 150;	
		game.oDashTxtArr[10].setText(parseFloat(blackVel).toFixed(1));
		game.blackRabbit.
			setLocation(game.blackRabbit.x+=blackRabbitDistance, game.blackRabbit.y);
			
		if(game.blackRabbit.x < 0 && !blackFrstHalfCompleted){
			blackFrstHalfCompleted = true;
			game.blackRabbit.
				setBackgroundImage(game.blackRabbitSpriteImgAnim).playAnimation('black_fwd_run');
			blackVel = 0.8;		
		}
		else if(blackFrstHalfCompleted){
			if(game.blackRabbit.x > 280){
				game.blackRabbit.
					setBackgroundImage(game.blackRabbitSpriteImgAnim).playAnimation('black_stand');
				blackRabbitTimer.cancel();
				
				game.oDashTxtArr[10].setText('0.0');
			}
		}
	}
	
	function setWhiteRabbitPath(){	
		whiteRabbitDisatance  = whiteVel * t;
		whiteRabbitDisatance *= 150;
		game.oDashTxtArr[13].setText(parseFloat(whiteVel).toFixed(1));
		game.whiteRabbit.
			setLocation(game.whiteRabbit.x, game.whiteRabbit.y-=whiteRabbitDisatance);
			
		if(game.whiteRabbit.y < 10 && !whiteFrstHalfCompleted ){		
			whiteFrstHalfCompleted = true;
			whiteVel = -0.7;
		}else if(whiteFrstHalfCompleted){
			if(game.whiteRabbit.y > 280){
				game.whiteRabbit.
						setBackgroundImage(game.whiteRabbitSpriteImgAnim).playAnimation('white_stand');
				whiteRabbitTimer.cancel();
				
				game.oDashTxtArr[13].setText('0.0');
			}
		}
	}
	function setGrayRabbitPath(){
		grayRabbitDistance = (grayInitVel * t) + (0.5 * t * t);
		grayRabbitDistance *= 140;
		grayVel = grayInitVel + (grayRabbitAcc * t);
		grayInitVel = grayVel;
		game.grayRabbit.
			setLocation(game.grayRabbit.x+=grayRabbitDistance, game.grayRabbit.y);
		game.oDashTxtArr[14].setText(parseFloat(grayVel).toFixed(1));
		if(game.grayRabbit.x > 558 && !grayFrstHalfCompleted){
			game.grayRabbit.
				setBackgroundImage(game.grayRabbitSpriteImgAnim).playAnimation('gray_bwd_run');
			grayFrstHalfCompleted = true;
		}else if(grayFrstHalfCompleted){
			if(game.grayRabbit.x < 380){
				game.grayRabbit.
					setBackgroundImage(game.grayRabbitSpriteImgAnim).playAnimation('gray_bwd_stand');
				grayRabbitTimer.cancel();
				
				game.oDashTxtArr[14].setText('0.0');
				//visible the tags after 5 seconds
				game.tag_1.visible = true;
				game.tag_2.visible = true;
				game.__bannerDisplay(1, 0, -70, 0, true );
			}
		}
	}
	
	function setBrownRabbitPath(){
		brownRabbitDistance = (brownInitVel * t) + (0.5 * brownRabbitAcc * t * t);
		brownRabbitDistance *= 140;
		brownVel = brownInitVel + (brownRabbitAcc * t);
		brownInitVel = brownVel;
		game.brownRabbit.
			setLocation(game.brownRabbit.x, game.brownRabbit.y-=brownRabbitDistance);
		game.oDashTxtArr[11].setText(parseFloat(brownVel).toFixed(1));	
		if(game.brownRabbit.y > 270){
			brownRabbitTimer.cancel();
			game.brownRabbit.	
				setBackgroundImage(game.brownRabbitSpriteImgAnim).playAnimation('brown_stand');
			game.oDashTxtArr[11].setText('0.0');	
		}
	}
	game.pauseBtnMDownHandler = function(){
		if(isGameOver)
			return;
		isGameStart = false;
		
		//when pause button is clicked stop the current animation paused
		game.blackRabbit.setAnimationImageIndex([game.blackRabbit.backgroundImage.spriteIndex]);
		game.brownRabbit.setAnimationImageIndex([game.brownRabbit.backgroundImage.spriteIndex]);
		game.grayRabbit.setAnimationImageIndex([game.grayRabbit.backgroundImage.spriteIndex]);
		game.whiteRabbit.setAnimationImageIndex([game.whiteRabbit.backgroundImage.spriteIndex]);	
		cancelTimer();	
	}
	game.resetBtnMDownHandler = function(){
		game.__bannerDisplay(0, 0, -70, 0, true );
		cancelTimer();
		game.resetTags();
		resetProperties();
		game.tanRabbit.
			setLocation(game.rabbitsXYPos[0][0], game.rabbitsXYPos[0][1]);
		
		game.blackRabbit.
			setBackgroundImage(game.blackRabbitSpriteImgAnim).playAnimation('black_bwd_stand').
			setLocation(game.rabbitsXYPos[1][0], game.rabbitsXYPos[1][1]);
		
		game.brownRabbit.
			setBackgroundImage(game.brownRabbitSpriteImgAnim).playAnimation('brown_stand').
			setLocation(game.rabbitsXYPos[2][0], game.rabbitsXYPos[2][1]);
		
		game.grayRabbit.
			setBackgroundImage(game.grayRabbitSpriteImgAnim).playAnimation('gray_fwd_stand').
			setLocation(game.rabbitsXYPos[3][0], game.rabbitsXYPos[3][1]);
		
		game.whiteRabbit.
			setBackgroundImage(game.whiteRabbitSpriteImgAnim).playAnimation('white_stand').
			setLocation(game.rabbitsXYPos[4][0], game.rabbitsXYPos[4][1]);
			
		for(var i=10;i<15;i++){
			game.oDashTxtArr[i].setText('0.0');
		}
	}
	function resetProperties(){
		grayRabbitDistance = 0;
		brownRabbitDistance = 0;
		blackRabbitDistance = 0;
		whiteRabbitDisatance = 0;
		
		grayRabbitAcc = -0.4;
		brownRabbitAcc = -0.36;
			
		grayVel = 0;
		brownVel = 0;
		blackVel = -0.8;
		whiteVel = 0.7;
		
		brownInitVel = 0.9;
		grayInitVel = 1.0;
		
		//t = 1/60;
		elapsedT = 0;
		currentTimeStamp = 0;
		startTimeStamp = 0;
		pauseTimeStamp = 0;
		
		blackRabbitTimer = whiteRabbitTimer = grayRabbitTimer = brownRabbitTimer = null;
		isFrstHalfCompleted = false;
		counter = 0;
		isGameStart = isGameOver = false;
		blackFrstHalfCompleted = whiteFrstHalfCompleted = grayFrstHalfCompleted = brownFrstHalfCompleted = false;
		resetDragDrop();
	}
	//======================================
	//Timer function
	//======================================
	function cancelTimer(){	 
		 if(blackRabbitTimer != null)
			blackRabbitTimer.cancel();
		 
		 if(whiteRabbitTimer != null)
			 whiteRabbitTimer.cancel();
			
		if(grayRabbitTimer != null)
			grayRabbitTimer.cancel();
		 
		 if(brownRabbitTimer != null)
			 brownRabbitTimer.cancel();
	}
	
	//==================================================================
	//                  Drag and Drop Implementation
	//==================================================================
	game.RabArray = [];
	game.RabArray.push({first:false, second: false, isSnapped: false});	//A
	game.RabArray.push({first:false, second: false, isSnapped: false});	//B
	game.RabArray.push({first:false, second: false, isSnapped: false});	//C
	game.RabArray.push({first:false, second: false, isSnapped: false});	//D
	game.RabArray.push({first:false, second: false, isSnapped: false});	//E

	
	var isDrag = false, 
		outerSnapPoint_x = 450,
		outerSnapPoint_y = 170,
		bannerTag1DispArr = [],
		bannerTag2DispArr = [];
		
		bannerTag1DispArr.push({whichRabbit:0, isSnapped:false});
		bannerTag2DispArr.push({whichRabbit:0, isSnapped:false});
		
	game.CurrActor = null;
		
	function dist(x1, y1, x2, y2){
		return Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
	}
	game.tagMouseHandler = function( mouseEvent ){
		game.CurrActor = mouseEvent.source;		
		if(mouseEvent.sourceEvent.type == 'mouseup'){
			game.__calculateSnap();
			isDrag = false;		
		}else if(mouseEvent.sourceEvent.type == 'mousedown'){
			isDrag = true;
			//this.x = mouseEvent.screenPoint.x - this.width/2;
			//this.y = mouseEvent.screenPoint.y - this.height/2;			
		}
	}
	game.__calculateSnap = function(){
		//currently dragging tag actor
		var actor = game.CurrActor;			
		if(actor == null) return false;	//if their is no actor then terminate the loop
		if(isDrag == true) return false;//allow snap only on mouseup		
		game.dragX = actor.x;
		game.dragY = actor.y;
		
		var flag = false;
		
		//rabbit A snap ref point calculate
		var dropAX = game.tanRabbit.width/2 + game.tanRabbit.x;
		var dropAY = game.tanRabbit.height/2 + game.tanRabbit.y;
		
		var dropBX = game.blackRabbit.width/2 + game.blackRabbit.x;
		var dropBY = game.blackRabbit.height/2 + game.blackRabbit.y;
		
		var dropCX = game.brownRabbit.width/2 + game.brownRabbit.x;
		var dropCY = game.brownRabbit.height/2 + game.brownRabbit.y;
		
		var dropDX = game.grayRabbit.width/2 + game.grayRabbit.x;
		var dropDY = game.grayRabbit.height/2 + game.grayRabbit.y;
		
		var dropEX = game.whiteRabbit.width/2 + game.whiteRabbit.x;
		var dropEY = game.whiteRabbit.height/2 + game.whiteRabbit.y;
		
		//console.log([dropAX, dropAY, dropBX, dropBY, dropCX, dropCY, dropDX, dropDY]);
		
		var distA = dist( dropAX, dropAY, game.dragX, game.dragY);//distance bw tan rabbit
		var distB = dist( dropBX, dropBY, game.dragX, game.dragY);//distance bw black rabbit
		var distC = dist( dropCX, dropCY, game.dragX, game.dragY);//distance bw brown rabbit
		var distD = dist( dropDX, dropDY, game.dragX, game.dragY);//distance bw gray rabbit
		var distE = dist( dropEX, dropEY, game.dragX, game.dragY);//distance bw white rabbit
		var distOutside = dist(outerSnapPoint_x, outerSnapPoint_y, game.dragX, game.dragY);
	
		if(distA < 40){
			//console.log('dist A');
			if(!isSnapAllowed(1, game.CurrActor.getId())) {
				snapToOriginalPos( actor );
				return false;
			}
			//tan Rabbit			
			actor.
				setLocation(360, 260);
			setTagForRabbit(1, game.CurrActor.getId());
		}else if(distB < 40){
			//console.log('dist B');
			if(!isSnapAllowed(2, game.CurrActor.getId())) {
				snapToOriginalPos( actor );
				return false;
			}		
			//black Rabbit
			actor.
				setLocation(330, 450);
			setTagForRabbit(2, game.CurrActor.getId());			
		}else if(distC < 40){
			//console.log('dist C');
			if(!isSnapAllowed(3, game.CurrActor.getId())) {			
				snapToOriginalPos( actor );
				return false;
			}		
			//brown Rabbit
			actor.
				setLocation(280, 360);
			
			setTagForRabbit(3, game.CurrActor.getId());	
		}else if(distD < 40){
			//console.log('dist D');
			if(!isSnapAllowed(4, game.CurrActor.getId())) {
				snapToOriginalPos( actor );
				return false;
			}
			//gray Rabbit
			actor.
				setLocation(400, 440);
			setTagForRabbit(4, game.CurrActor.getId());
		}else if(distE < 40){
			//console.log('dist E');
			if(!isSnapAllowed(5, game.CurrActor.getId())) {
				snapToOriginalPos( actor );
				return false;
			}		
			//white Rabbit
			actor.
				setLocation(450, 360);
			setTagForRabbit(5, game.CurrActor.getId());			
		}else if(distOutside < 550){
			//console.log('outside');
			flag = true;	
			snapToOriginalPos( actor );	
			setTagForRabbit(0, game.CurrActor.getId());
		}
		game.CurrActor = null;
	}
		
	function setTagForRabbit( whichRabbit, tagId ) {	
		if(tagId == 'tag_1') {
			for(var i = 1; i<=5; i++) {
				if(whichRabbit == i) {				
					game.RabArray[i-1].first = true;
				} else {
					game.RabArray[i-1].first = false;
				}
			}
			if(whichRabbit != 0){
				bannerTag1DispArr[0].whichRabbit = whichRabbit;
				bannerTag1DispArr[0].isSnapped = true;
			}
		} else {
			for(var i = 1; i<=5; i++) {
				if(whichRabbit == i) {				
					game.RabArray[i-1].second = true;					
				} else {
					game.RabArray[i-1].second = false;					
				}
			}
			if(whichRabbit != 0){
				bannerTag2DispArr[0].whichRabbit = whichRabbit;
				bannerTag2DispArr[0].isSnapped = true;
			}
		}
		displayResult();
	}
	
	
	function isSnapAllowed( whichRabbit, tagId) {
		if(tagId == 'tag_1') {
			if( game.RabArray[whichRabbit-1].second ) {
				return false;	
			}
		} else {
			if( game.RabArray[whichRabbit-1].first ) {
				return false;	
			}
		}	
		return true;
	}	
	
	//snap actor's to original place
	function snapToOriginalPos( actor ) {
		//Snap to original position when no other snap pointers assigned
		if(isDrag == false) {
			if(actor.getId() == 'tag_1') {
				actor.
					setLocation(600, 450);
				bannerTag1DispArr[0].whichRabbit = 0;
				bannerTag1DispArr[0].isSnapped = false;
			} else if(actor.getId() == 'tag_2') {
				actor.
					setLocation(670, 450);
				bannerTag2DispArr[0].whichRabbit = 0;
				bannerTag2DispArr[0].isSnapped = false;
			}
		}	
		displayResult();
	}
	
	function displayResult(){
		if(bannerTag1DispArr[0].isSnapped == false || bannerTag2DispArr[0].isSnapped == false){
			return true;
		}else{		
			if((bannerTag1DispArr[0].whichRabbit == 5 && bannerTag2DispArr[0].whichRabbit == 2) || (bannerTag1DispArr[0].whichRabbit == 2 && bannerTag2DispArr[0].whichRabbit == 5)){
				game.__bannerDisplay(3, 1, -70, 0, true );	
			}else if(bannerTag1DispArr[0].isSnapped == true && bannerTag2DispArr[0].isSnapped == true){
				game.__bannerDisplay(2, 2, -70, 0, true );
			}	
		}
	}
	function resetDragDrop(){
		game.RabArray = [];
		game.RabArray.push({first:false, second: false, isSnapped: false});	//A
		game.RabArray.push({first:false, second: false, isSnapped: false});	//B
		game.RabArray.push({first:false, second: false, isSnapped: false});	//C
		game.RabArray.push({first:false, second: false, isSnapped: false});	//D
		game.RabArray.push({first:false, second: false, isSnapped: false});	//E
		
		bannerTag1DispArr = [];
		bannerTag2DispArr = [];
		bannerTag1DispArr.push({whichRabbit:0, isSnapped:false});
		bannerTag2DispArr.push({whichRabbit:0, isSnapped:false});
		isDrag = false;
	}
	
	game._mouseUp = function( obj ) {
		isDrag = false;
		game.CurrActor = obj;		
		game.__calculateSnap();				
	}
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

			userDrag: function (callback_mDrag, callback_mup) {
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
					//isDrag = true;
					CAAT.setCursor('move');
				};

				this.mouseExit = function (mouseEvent) {
					this.__d_ax = -1;
					this.__d_ay = -1;
					this.pointed = false;
					//isDrag = false;
					CAAT.setCursor('default');
				};

				this.mouseMove = function (mouseEvent) {
				};

				this.mouseUp = function (mouseEvent) {
					this.__d_ax = -1;
					this.__d_ay = -1;
					if(callback_mup) {
						callback_mup(this);
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
					
					isDrag = true;
					if(callback_mDrag) {
						callback_mDrag();
					}
					//game.__calculateSnap();
				};

				return this;
			},
		},
		null,
		"CAAT.exemplarr"
	);
})();