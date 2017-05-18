//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	
	
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'254',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'264',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'364',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'464',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'564',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'604',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'700',  '0'];
		/*dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'510',  '33'];*/
		
		
	//dashBoard test
	var dashBoardTxt = [];
		
		dashBoardTxt[dashBoardTxt.length] = ['Angular velocity', 	'bold 14px arial', 'left', 28, 35, 2, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 				'bold 14px arial', 'left', 167, 35, 'angleTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['rad/s', 				'bold 14px arial', 'left', 204, 35, 3, '#fff'];		
		dashBoardTxt[dashBoardTxt.length] = ['Angular acceleration to launch', 		'bold 14px arial', 'left', 270, 33, 4, '#fff'];				
		dashBoardTxt[dashBoardTxt.length] = ['rad/s '+String.fromCharCode('178'), 					'bold 14px arial', 'left', 565, 35, 5, '#fff'];
		
	var dashTxt = [];
	    
	    dashTxt[dashTxt.length] = ['0.200', 				'bold 14px arial', 'left', 518, 535, 'disRTxt', '#fff'];	
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Set the angular acceleration for the first revolution', 'so the ride has an angular velocity of 1.64 rad/s.', 'Then press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['You need to try again.', 'Press RESET to start over.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations!', 'The rocket is on its way.'];
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['620', '510', '535', '560'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = 0,
		bannerContX2Pos	= 0,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
		
	var panelHeight = 100;
	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene)
	{		
		// Create the main area
		var main = createMain( director.width, director.height - panelHeight, director );
		main.
			setLocation(0, 0);
		scene.addChild(main);

		//Create the panel container
		var panel = createPanel( director.width, panelHeight, director );
		panel.
			setLocation(0, main.height);		
		scene.addChild(panel);

		return main;
	}
	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph, director ){
		setBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setFillStyle('#b2e3ff').
					setClip(true);				
		return setBG;
	}			
	//=======================================================
	//Create Bottom dashboard 
	//=======================================================
	function createPanel( pw, ph, director ){
		dashBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setClip(false);
					
		__createBannerContainer();
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			
			dashBG.addChild(oActor);			
		}
		__createDashBoardTxt();
		//__createDashBoardButton();
		//__createIncDecButton();
		
		return dashBG;
	}

	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oActorTxt = game.__addTextOnImage(dashBoardTxt[i][6], dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oActorTxt
				.setId()
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(oActorTxt);
			game.oDashTxtArr.push(oActorTxt);
		}
	}
	
	game.__createDashTxt = function(){
		for(var i=0;i<dashTxt.length; i++){			
			var oActorTxt = game.__addTextOnImage(dashTxt[i][6], dashTxt[i][0], dashTxt[i][1], dashTxt[i][2], game._director );
			oActorTxt
				.setId()
				.setLocation(dashTxt[i][3], dashTxt[i][4]);
			game._scene.addChild(oActorTxt);
			game.oDashTxtArr.push(oActorTxt);
		}
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	game.__createIncDecButton = function(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var rocketdistanceIncBtn = new CAAT.Foundation.Actor().
								setId('rocketdistanceInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(490, 533);
		var rocketdistanceDecBtn = new CAAT.Foundation.Actor().
								setId('rocketdistanceDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(490, 542);
									
								
		game._scene.addChild(rocketdistanceIncBtn);
		game._scene.addChild(rocketdistanceDecBtn);
		
				
		//the increment and decrement buttons MouseDown functions are called when long press
		rocketdistanceIncBtn.mouseDown = game.incDecMDown;
		rocketdistanceDecBtn.mouseDown = game.incDecMDown;
		
		
		//the increment and decrement buttons MouseDown functions are called when long press
		rocketdistanceIncBtn.mouseUp = game.incDecMUp;
		rocketdistanceDecBtn.mouseUp = game.incDecMUp;
	
		//When mouse exit out of the scroll buttons we have to stop the timer
		rocketdistanceIncBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		rocketdistanceDecBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
	}	
		
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	game.__createDashBoardButton = function(){
		// Buttons creation
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(
				game._director.getImage('buttons'), 2, 3 
			); 
		//Go btn creation and add Events
		var b1= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 0, 0, 1, 0, function(button) {					
					game.goBtnMDownHandler();					
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][1]);	
		//Reset btn creation and add Events
		var b3= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
				   game.resetBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][2]);	 
		//Pause btn creation and add Events
		var b2= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 2, 2, 3, 2, function(button) {
					game.pauseBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][3]);
		
		game._scene.addChild( b1 );
		game._scene.addChild( b2 );
		game._scene.addChild( b3 );		
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
function __createBannerContainer(){
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), bannerRows, bannerCols )
		);
		
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, -70, 0, false);
	}	
	//=======================================================
    //Banner Display Container
    //=======================================================
    game.__bannerDisplay = function( index, bannerBGIndex, y1, y2, flag ){
        bannerImg.	
            setAnimationImageIndex([bannerBGIndex]);
        if(flag){
            var fromY1 = y1;
            var fromY2 = y2;
        } else {
            var fromY1 = y2;
            var fromY2 = y1;
        }
        var pathBehaviour = new CAAT.Behavior.PathBehavior().
            setValues( new CAAT.Path().setLinear(bannerContX1Pos, fromY1, bannerContX2Pos, fromY2).setInteractive(false) ).
        setDelayTime(0, 200);

		for(var j=0; j<=bannerContainer.getNumChildren(); j++){
    	    bannerContainer.removeChild(this['bannerTxt_'+j]);
		}
		
        for(var i=0;i<bannerContentTxt[index].length;i++){
            this['bannerTxt_'+i] = game.__addTextOnImage('#000', bannerContentTxt[index][i], 'Bold 14px Arial', 'center', game._director );
            this['bannerTxt_'+i].setLocation(bannerTxtInitXPos, 12+(bannerTxtInitYPos*i));
            bannerContainer.addChild(this['bannerTxt_'+i]);
        }
        bannerContainer.addBehavior(pathBehaviour);
    }
	
	//=======================================================
	//Image Dispaly container
	//=======================================================
	game.__addImageOnScene = function( img , _rows, _cols){
		return new CAAT.Foundation.Actor().
			setBackgroundImage(
				new CAAT.Foundation.SpriteImage().initialize(img, _rows, _cols)
			)
	}	
	//=======================================================
	//Text Display container
	//=======================================================
	game.__addTextOnImage = function( txtColor, txt, fontStyle, align, _director ){
		return new CAAT.Foundation.UI.TextActor().
                    setFont( fontStyle ).
                    setTextAlign( align ).
                    setText( txt ).					
                    calcTextSize( _director ).
                    setTextFillStyle( txtColor ).
                    setOutline( false );                    
	}
})();