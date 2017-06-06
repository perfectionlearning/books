//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {

	game.panelHeight = 100;
	game.currentSpeedDisp = null;
	game.currentCentriAccDisp = null;
	var currentBannerMsg_1 = null;
	var incDecTimer = null, incDecCount = null, bannerContainer = null;
	
	var dashBoardEle = [];
										//img id, left, top, width, 
	dashBoardEle[dashBoardEle.length] = ['ele_9', 0, 0, 2];	//left end
	dashBoardEle[dashBoardEle.length] = ['ele_0', 2, 0, 50];	//gray50
	dashBoardEle[dashBoardEle.length] = ['ele_1', 52, 0, 110];	//dial
	dashBoardEle[dashBoardEle.length] = ['ele_2', 158, 0, 88];	//gauge_x
	dashBoardEle[dashBoardEle.length] = ['ele_3', 242, 0, 88];	//gauge_y
	dashBoardEle[dashBoardEle.length] = ['ele_0', 330, 0, 50];	//gray50
	dashBoardEle[dashBoardEle.length] = ['ele_5', 380, 0, 10];	//well left
	dashBoardEle[dashBoardEle.length] = ['ele_7', 390, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['ele_7', 470, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['ele_7', 570, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['ele_8', 670, 0, 10];	//well right
	dashBoardEle[dashBoardEle.length] = ['ele_4', 680, 0, 100];	//gray100
	dashBoardEle[dashBoardEle.length] = ['ele_10', 755, 0, 2];	//right end	
	//dashBoardEle[dashBoardEle.length] = ['ele_17', 515, 33, 55];//valPlace

	var dashBoardTxt = [];
	dashBoardTxt[dashBoardTxt.length] = ['Blue car speed', 395, 35, 'bold 14px Arial', 'left'];
	dashBoardTxt[dashBoardTxt.length] = ['m/s', 538, 35, 'bold 14px Arial', 'left'];
	dashBoardTxt[dashBoardTxt.length] = ['-10', 165, 60,'bold 12px Arial', 'left'];
	dashBoardTxt[dashBoardTxt.length] = ['0', 198, 60, 'bold 12px Arial', 'left'];
	dashBoardTxt[dashBoardTxt.length] = ['10', 216, 60, 'bold 12px Arial', 'left'];
	dashBoardTxt[dashBoardTxt.length] = ['10', 265, 20, 'bold 12px Arial', 'right'];
	dashBoardTxt[dashBoardTxt.length] = ['0', 265, 43, 'bold 12px Arial', 'right'];
	dashBoardTxt[dashBoardTxt.length] = ['-10', 265, 67, 'bold 12px Arial', 'right'];
	
	var containerTxt = [];
										//text, left, top, font style, font align, showDefault
	containerTxt[containerTxt.length] = ['r = ', 420, 220, 'bold 14px Arial', 'left', true];
	containerTxt[containerTxt.length] = ['18', 440, 220, 'bold 16px Arial', 'left', true];
	containerTxt[containerTxt.length] = ['m', 460, 220, 'bold 14px Arial', 'left', true];
	containerTxt[containerTxt.length] = ['m', 460, 220, 'bold 14px Arial', 'left', true];
	containerTxt[containerTxt.length] = ['See what the centripetal acceleration is for', 460, 220, 'bold 14px Arial', 'left', false];
	containerTxt[containerTxt.length] = ['different car speeds. Set the car\'s speed and press GO.', 460, 220, 'bold 14px Arial', 'left', false];
	containerTxt[containerTxt.length] = ['Too fast!', 460, 220, 'bold 14px Arial', 'left', false];
	containerTxt[containerTxt.length] = ['Press RESET to start over.', 460, 220, 'bold 14px Arial', 'left', false];

	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene)
	{
		// Create the main area
		var main = createMain( director.width, director.height - game.panelHeight, director);
		main.setLocation(0, 0);
		scene.addChild(main, "top");

		// Create the panel container
		game.panel = createPanel( director.width, game.panelHeight, director );
		game.panel.setLocation(0, 500);
		//scene.addChild(panel, "bottom");

		return main;
	}

	//=======================================================
	//=======================================================
	function createMain( pw, ph, _dir )	{
		var content = new CAAT.Foundation.ActorContainer()
			.setBackgroundImage(
				new CAAT.Foundation.SpriteImage().
					initialize(_dir.getImage('18mR'), 1, 1),
					true
			)
			.setPreferredSize( pw, ph )
			.setBounds( 0, 0, pw, ph )
			.setClip(false);
			for(var i = 0; i < containerTxt.length; i++) {
				if(containerTxt[i][5] == true) {
					content.addChild(createPanelTxtContents( i, _dir, containerTxt));							
				}
			}
		return content;
	}

	//=======================================================
	//=======================================================
	function createPanel( pw, ph, _dir)	{
		var content = new CAAT.Foundation.ActorContainer().
			setPreferredSize( pw, ph ).
			setBounds( 0,0, pw, ph).
			setClip(false).
			setFillStyle( 'gray' );	
			
			//banner container start
			bannerContainer = new CAAT.Foundation.ActorContainer().
	            				  setLocation(0, -50).
								  setBounds(0, 0, 390, 50);
 
		    bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
				new CAAT.Foundation.SpriteImage().initialize( _dir.getImage('bannerImg'), 1, 4 )
			);
					
			currentBannerMsg_1 = new CAAT.Foundation.UI.TextActor().
				setFont( 'bold 14px Arial' ).
				setTextAlign( 'center' ).
				calcTextSize( _dir ).
				setTextFillStyle('#000000').
				cacheAsBitmap().
				setText('').
				setOutline( false );
			currentBannerMsg_1.setLocation(((bannerContainer.width - currentBannerMsg_1.width) / 2) + 10, 12);
			currentBannerMsg_2 = new CAAT.Foundation.UI.TextActor().
				setFont( 'bold 14px Arial' ).
				setTextAlign( 'center' ).
				calcTextSize( _dir ).
				setTextFillStyle('#000000').
				cacheAsBitmap().
				setText('').
				setOutline( false );
			currentBannerMsg_2.setLocation(((bannerContainer.width - currentBannerMsg_2.width) / 2) + 10, 28);
 
    		bannerContainer.addChild( bannerImg );
			bannerContainer.addChild( currentBannerMsg_1 );
			bannerContainer.addChild( currentBannerMsg_2 );
			content.addChild( bannerContainer );
			//banner container end
			
			game.__bannerDisplay(0, 0, -70, true, 4, 5);	
			for(var i = 0; i < dashBoardEle.length; i++) {
				content.addChild(createPanelContents( i, _dir ));	
			}	
			
			for(var j = 0; j < dashBoardTxt.length; j++) {
				content.addChild(createPanelTxtContents( j, _dir, dashBoardTxt));							
			}			
			
			var btnImg= new CAAT.Foundation.SpriteImage().initialize(
						_dir.getImage('buttons'), 2, 3 
					);
			var incre_decre_btnImg= new CAAT.Foundation.SpriteImage().initialize(
						_dir.getImage('ele_18'), 1, 2 
					);
			
			//go button 
			var b1= new CAAT.Foundation.Actor().setAsButton(
						btnImg.getRef(), 0, 0, 1, 0, function(button) {
							game.go_btn_click();
						}
					).
					setLocation(600, 8);		 
			//reset button
			var b2= new CAAT.Foundation.Actor().setAsButton(
						btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
							game.resetActivity();
						}
					).
					setLocation(600, 33);

			//pause button
			var b3= new CAAT.Foundation.Actor().setAsButton(
						btnImg.getRef(), 2, 2, 3, 2, function(button) {
							game.pauseFunctionality();
						}
					).
					setLocation(600, 57);
			//increment button
			var increBtn = new CAAT.Foundation.Actor().
							setAsButton(
								incre_decre_btnImg.getRef(), 0, 0, 0, 0, function(button) {
									if(game.isGameOver) return false;
									if(game.currentCarSpeed > (parseFloat(game.thresholdVelocity) + 2.0)) {
										//do nothing if velocity is 13.0 or greater
									} else {
										if(game.isGamePaused)
											return false;
										game.currentCarSpeed = parseFloat(game.currentCarSpeed) + 0.5;
										game.currentCarSpeed = (parseFloat(game.currentCarSpeed)).toFixed(1);
										game.changeSpeed( game.currentCarSpeed );
									}
								}
							).
							setId('_increBtn').
							setLocation(570, 23);
			//decrement button
			var decreBtn = new CAAT.Foundation.Actor().
							setAsButton(
								incre_decre_btnImg.getRef(), 1, 1, 1, 1, function(button) {
									if(game.isGameOver) return false;
									if(game.currentCarSpeed >= 0.5) {
										if(game.currentCarSpeed > (parseFloat(game.thresholdVelocity) + 2.5)) {
											//do nothing if velocity is 13.0 or greater
										} else {
											if(game.isGamePaused)
												return false;
											game.currentCarSpeed =  parseFloat(game.currentCarSpeed) - 0.5;
											game.currentCarSpeed = (parseFloat(game.currentCarSpeed)).toFixed(1);
											game.changeSpeed( game.currentCarSpeed );
										}
									}
								}
							).
							setId('_decreBtn').
							setLocation(568, 51);
			content.addChild( b1 );
			content.addChild( b2 );
			content.addChild( b3 );
			content.addChild( increBtn );
			content.addChild( decreBtn );	
			
			//the increment and decrement buttons MouseDown functions 
			increBtn.mouseDown = incDecMDown; 
	        decreBtn.mouseDown = incDecMDown;  

			//the increment and decrement buttons MouseUp functions 
			increBtn.mouseUp = incDecMUp; 
			decreBtn.mouseUp = incDecMUp; 
						
			game.currentSpeedDisp = new CAAT.Foundation.UI.TextActor().
				setFont( 'bold 14px Arial' ).
				setTextAlign( 'left' ).
				calcTextSize( _dir ).
				setTextFillStyle('#FFFFFF').
				setText('0.0').
				setOutline( false ).
				cacheAsBitmap();
			game.currentSpeedDisp.setLocation(510, 35);
			game.currentCarSpeed = (parseFloat(game.currentCarSpeed)).toFixed(1);
			game.updateTxtContent(game.currentSpeedDisp, game.currentCarSpeed);
			
			game.currentCentriAccDisp = new CAAT.Foundation.UI.TextActor().
				setFont( 'bold 14px Arial' ).
				setTextAlign( 'left' ).
				calcTextSize( _dir ).
				setTextFillStyle('#000000').
				setText('0.0').
				setOutline( false ).
				cacheAsBitmap();
			game.currentCentriAccDisp.setLocation(96, 63);

		content.addChild( game.currentSpeedDisp );	
		content.addChild( game.currentCentriAccDisp );	
		
		var _x_velo_midLine = new CAAT.Foundation.Actor().
            setLocation(202, 26).
            setSize( 1, 28 ).
            setFillStyle('#000000');
			
		game._x_velo = new CAAT.Foundation.Actor().
            setLocation(202, 25).
            setSize( 28, 29 ).
            setFillStyle('#ff3300');
		
		var _x_velo_behaviour = new CAAT.ScaleBehavior().
			setCycle(false).
			setFrameTime( 0, 2000 ).
			setValues( 0, 0, 1, 1, 0, 0);
		game._x_velo.addBehavior(_x_velo_behaviour);
		
		var _y_velo_midLine = new CAAT.Foundation.Actor().
            setLocation(273, 50).
            setSize( 28, 1 ).
            setFillStyle('#000000');
			
		game._y_velo = new CAAT.Foundation.Actor().
            setLocation(273, 50).
            setSize( 28, 28 ).
            setFillStyle('#ff3300');

		var _y_velo_behaviour = new CAAT.ScaleBehavior().
			setCycle(false).
			setFrameTime( 0, 2000 ).
			setValues( 1, 1, 0, 0, 0, 0);
		game._y_velo.addBehavior(_y_velo_behaviour);
		
		content.addChild( game._x_velo );
		content.addChild( game._y_velo );
		content.addChild( _x_velo_midLine );
		content.addChild( _y_velo_midLine );
		return content;
	}		
	//=======================================================
	// create image for screen
	//=======================================================
	function createPanelContents( index, _dir) {
		var this_elem = dashBoardEle[index];
		var this_img = _dir.getImage(this_elem[0]);
		oActor = _createActor( this_img );
		oActor.setLocation(this_elem[1], this_elem[2]);
		return oActor;
	}
	//=======================================================
	// create text content
	//=======================================================	
	function createPanelTxtContents( index, _dir, whichArr) {
		var this_elem = whichArr[index];
		var this_txt = this_elem[0];
		oActorTxt = _createTextActor( this_txt, _dir, this_elem[3], this_elem[4]);
		oActorTxt.setLocation(this_elem[1], this_elem[2]);
		return oActorTxt;
	}
	
	function _createActor(img) {
		return new CAAT.Foundation.Actor().
			setBackgroundImage(
				new CAAT.Foundation.SpriteImage().
						initialize(img, 1, 1),
				true).
				enableEvents(false);
	}

	function _createTextActor( txt, _dir, fontStyle, fontAlign ) {
		var text = new CAAT.Foundation.UI.TextActor().
            setFont( fontStyle ).
            setText( txt ).
			setTextAlign( fontAlign ).
			calcTextSize( _dir ).
			setOutline( false ).
            cacheAsBitmap();
		return text;
	}
	//=======================================================
	//update dashboard text values dynamically
	//=======================================================
	game.updateTxtContent = function( actor, txt ) {
		actor.setText(txt);
	}	
	//=======================================================
	//Banner Display Container
	//=======================================================
	game.__bannerDisplay = function( index, y1, y2, flag, txt_1_Index, txt_2_Index){		
		bannerImg.
			setAnimationImageIndex([index]);			
		if(flag){
			var fromY1 = y1;
			var fromY2 = y2;
		} else {
			var fromY1 = y2;
			var fromY2 = y1;
		}
		var pathBehaviour = new CAAT.PathBehavior().
			setValues( new CAAT.Path().setLinear(0, fromY1, 0, fromY2).setInteractive(false) ).
		setDelayTime(0, 200);
				
		currentBannerMsg_1.setText(containerTxt[txt_1_Index][0]);
		currentBannerMsg_2.setText(containerTxt[txt_2_Index][0]);
		bannerContainer.addBehavior(pathBehaviour);			
	}
	//=======================================================
	//on increment/decrement button pressed
	//=======================================================
	function incDecMDown(e){ 
		var scene = game.getScene();
		incDecTimer = scene.createTimer( 
						scene.time, 
						Number.MAX_VALUE, 
						null, 
						function(scene_time, time_time, time_instance){ 
							incDecCount++ 
							if(incDecCount%30 == 0){ 
								incDecHandler( e ); 
								incDecCount = 0; 
							} 
						}, 
						null 
					); 
	} 
	//=======================================================
	//on increment/decrement button released
	//=======================================================
	function incDecMUp(e){ 
		incDecTimer.cancel(); 
	} 
	//=======================================================
	//on increment/decrement button continously pressed
	//=======================================================
	function incDecHandler( e ){ 
		if(e.source.id == '_increBtn'){ 
			if(game.isGameOver || game.isGamePaused) return false;
			if(game.currentCarSpeed < 15) {
				game.currentCarSpeed = parseFloat(game.currentCarSpeed) + 0.5;
				game.currentCarSpeed = (parseFloat(game.currentCarSpeed)).toFixed(1);
				game.changeSpeed( game.currentCarSpeed ); 
			}
		} 
		else if(e.source.id == '_decreBtn'){ 
			if(game.isGameOver || game.isGamePaused) return false;
			if(game.currentCarSpeed >= 0.5) {
				game.currentCarSpeed = parseFloat(game.currentCarSpeed) - 0.5;
				game.currentCarSpeed = (parseFloat(game.currentCarSpeed)).toFixed(1);
				game.changeSpeed( game.currentCarSpeed );  
			}
		}
	}
})();