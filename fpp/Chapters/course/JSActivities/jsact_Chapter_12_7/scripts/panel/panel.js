//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	
	
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['dividerPlain',   	'226',  '0'];
		dashBoardEle[dashBoardEle.length] = ['dividerPlain',   	'496',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'640',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'650',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'740',  '0'];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'128',  '68'];
		//dashBoardEle[dashBoardEle.length] = ['incrBgBig',  		'400',  '30'];
		//dashBoardEle[dashBoardEle.length] = ['incrBgBig',  		'400',  '50'];
		//dashBoardEle[dashBoardEle.length] = ['incrBgBig',  		'400',  '70'];
		dashBoardEle[dashBoardEle.length] = ['arrowBlack',  	'390',  '10'];
		
	//dashBoard test
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Rod information:', 	'bold 14px arial', 'left', 20, 10, 1, '#fff'];//Text, font_style,
		dashBoardTxt[dashBoardTxt.length] = ['Rod angle', 			'bold 14px arial', 'left', 20, 30, 2, '#fff'];//Text, font_style,
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 				'bold 14px arial', 'left', 100, 30, 'rodangleTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = [String.fromCharCode(186), 'bold 14px arial', 'left', 130, 30, 3, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Axis position', 		'bold 14px arial', 'left', 20, 50, 4, '#fff'];//Text, font_style, 
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 				'bold 14px arial', 'left', 120, 50, 'axisposTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 					'bold 14px arial', 'left', 155, 50, 5, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Rod length', 			'bold 14px arial', 'left', 20, 70, 6, '#fff'];//Text, font_style, 
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 				'bold 14px arial', 'left', 110, 70, 'rodlenTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 					'bold 14px arial', 'left', 148, 70, 7, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Selected vector:', 	'bold 14px arial', 'left', 254, 10, 8, '#fff'];//Text, font_style,
		dashBoardTxt[dashBoardTxt.length] = ['Force', 				'bold 14px arial', 'left', 254, 30, 9, '#fff'];//Text, font_style,
		dashBoardTxt[dashBoardTxt.length] = ['0', 					'bold 14px arial', 'left', 395, 32, 'forceTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['N', 					'bold 14px arial', 'left', 420, 32, 10, '#fff'];		
		dashBoardTxt[dashBoardTxt.length] = ['Angle', 				'bold 14px arial', 'left', 254, 50, 11, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.0', 				'bold 14px arial', 'left', 395, 52, 'angleTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = [String.fromCharCode(186), 				'bold 14px arial', 'left', 422, 50, 12, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Distance to axis', 	'bold 14px arial', 'left', 254, 70, 13, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 				'bold 14px arial', 'left', 385, 72, 'axisdistanceTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 					'bold 14px arial', 'left', 420, 72, 14, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Add force vector:', 	'bold 14px arial', 'left', 514, 10, 15, '#fff'];//Text, font_style, 
		
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Set the simulation to achieve static equilibrium.', 'Adjust the rod length and axis, and add force vectors', 'by dragging them from the control panel.'];
		bannerContentTxt[bannerContentTxt.length] = ['You need to try again.', 'Press RESET to start over.'];
		
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['660', '510', '535', '560'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = -0,
		bannerContX2Pos	= -0,
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
					setFillStyle('#8bb9ff').

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
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	game.__createIncDecButton = function(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 1, 2);
		var rodlengthIncBtn = new CAAT.Foundation.Actor().
								setId('rodlengthInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){									
								}).setLocation(170, 568);
		var rodlengthDecBtn = new CAAT.Foundation.Actor().
								setId('rodlengthDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){									
								}).setLocation(200, 568);
								
		var forceIncBtn = new CAAT.Foundation.Actor().
								setId('forceInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){									
								}).setLocation(440, 516);
		var forceDecBtn = new CAAT.Foundation.Actor().
								setId('forceDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){									
								}).setLocation(466, 516);
								
		var angleIncBtn = new CAAT.Foundation.Actor().
								setId('angleInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){									
								}).setLocation(440, 543);
		var angleDecBtn = new CAAT.Foundation.Actor().
								setId('angleDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){									
								}).setLocation(466, 543);
		var disaxisIncBtn = new CAAT.Foundation.Actor().
								setId('disaxisInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
								}).setLocation(440, 571);
		var disaxisDecBtn = new CAAT.Foundation.Actor().
								setId('disaxisDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
								}).setLocation(466, 571);
																
		game._scene.addChild(rodlengthIncBtn);
		game._scene.addChild(rodlengthDecBtn);
		game._scene.addChild(forceIncBtn);
		game._scene.addChild(forceDecBtn);
		game._scene.addChild(angleIncBtn);
		game._scene.addChild(angleDecBtn);
		game._scene.addChild(disaxisIncBtn);
		game._scene.addChild(disaxisDecBtn);
				
		//the increment and decrement buttons MouseDown functions are called when long press
		rodlengthIncBtn.mouseDown = game.incDecMDown;
		rodlengthDecBtn.mouseDown = game.incDecMDown;
		forceIncBtn.mouseDown = game.incDecMDown;
		forceDecBtn.mouseDown = game.incDecMDown;
		angleIncBtn.mouseDown = game.incDecMDown;
		angleDecBtn.mouseDown = game.incDecMDown;
		disaxisIncBtn.mouseDown = game.incDecMDown;
		disaxisDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		rodlengthIncBtn.mouseUp = game.incDecMUp;
		rodlengthDecBtn.mouseUp = game.incDecMUp;
		forceIncBtn.mouseUp = game.incDecMUp;
		forceDecBtn.mouseUp = game.incDecMUp;
		angleIncBtn.mouseUp = game.incDecMUp;
		angleDecBtn.mouseUp = game.incDecMUp;
		disaxisIncBtn.mouseUp = game.incDecMUp;
		disaxisDecBtn.mouseUp = game.incDecMUp;
		
		//When mouse exit out of the scroll buttons we have to stop the timer
		rodlengthIncBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		rodlengthDecBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		forceIncBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		forceDecBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		angleIncBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		angleDecBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		disaxisIncBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		disaxisDecBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
	}	
		
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	game.__createDashBoardButton=function(){
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