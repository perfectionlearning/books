//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'345',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'355',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'455',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'555',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well50',     		'655',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'705',  '0'];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'485',  '25'];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'485',  '50'];
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Velocity', 			'bold 14px Arial', 'left', 100, 15, 0];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Acceleration', 		'bold 14px Arial', 'left', 100, 35, 1];
		dashBoardTxt[dashBoardTxt.length] = ['Show velocity graph', 'bold 14px Arial', 'left', 100, 55, 2];		
		dashBoardTxt[dashBoardTxt.length] = ['- -', 				'bold 14px Arial', 'left', 220, 15, 3];
		dashBoardTxt[dashBoardTxt.length] = ['- -', 				'bold 14px Arial', 'left', 220, 35, 4];		
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px Arial', 'left', 285, 15, 5];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px Arial', 'left', 285, 35, 6];
		dashBoardTxt[dashBoardTxt.length] = ['2', 					'10px Arial', 'left', 308, 32, 7];
		dashBoardTxt[dashBoardTxt.length] = ['Initial velocity', 	'bold 14px Arial', 'left', 360, 20, 8];
		dashBoardTxt[dashBoardTxt.length] = ['Acceleration', 		'bold 14px Arial', 'left', 360, 55, 9];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px Arial', 'left', 510, 22, 10];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px Arial', 'left', 510, 55, 11];
		dashBoardTxt[dashBoardTxt.length] = ['2', 					'10px Arial', 'left', 535, 52, 12];
		dashBoardTxt[dashBoardTxt.length] = ['3.0', 				'bold 16px Arial', 'left', 465, 20, 'initVelTxt'];//initial velocity id 
		dashBoardTxt[dashBoardTxt.length] = ['-1.0', 				'bold 16px Arial', 'left', 465, 53, 'accTxt'];//acceleration id 
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['The soccer ball is thrown straight up, then falls', 'back down. Determine the initial velocity and', "the Moon's freefall acceleration and press GO."];
		bannerContentTxt[bannerContentTxt.length] = ['You need to try again.', 'Press RESET to start over.'];
		bannerContentTxt[bannerContentTxt.length] = ["Congratulations!", 'You matched the graph!'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['620', '6', '31', '56'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = 360,
		bannerContX2Pos	= 360,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
		
	var panelHeight = 100;
	
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
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
		//__createSVGraph();
		__SVGraphToggleBtn();
		__createDashBoardTxt();
		__createDashBoardButton();	
		__createIncDecButton();
		return dashBG;
	}	
	//=====================================================
	//Create show velocity Graph toggle button 
	//=====================================================	
	function __SVGraphToggleBtn(){
		var SVGToggleBtn = game.__addImageOnScene(game._director.getImage('checkonoff'), 1, 2);
		SVGToggleBtn.
			setLocation(280, 58);		
		dashBG.addChild(SVGToggleBtn);
		var isSVGShow = false;
		SVGToggleBtn.mouseDown = function(e){
			if(!isSVGShow){
				SVGToggleBtn.
					setAnimationImageIndex([1]);
				isSVGShow = true;
				game.svGraph.
					visible = true;
			}else if(isSVGShow){
				SVGToggleBtn.
					setAnimationImageIndex([0]);
				isSVGShow = false;
				game.svGraph.
					visible = false;
			}
		}
	}	
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oActorTxt = game.__addTextOnImage('#ffffff', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oActorTxt.
				setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(oActorTxt);
			game.oDashTxtArr.push(oActorTxt);
		}
		//set initial velocity and acceleration value to the related variable
		game.iniVelocityVal = Number(dashBoardTxt[13][0]);
		game.accVal = Number(dashBoardTxt[14][0]);
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 1, 2);
		var iniVelIncBtn = new CAAT.Foundation.Actor().
								setId('iniVelInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){									
									//incDecHandler(this);
								}).setLocation(550, 15);
		var iniVelDecBtn = new CAAT.Foundation.Actor().
								setId('iniVelDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//incDecHandler(this);
								}).setLocation(585, 15);
		var accIncBtn = new CAAT.Foundation.Actor().
								setId('accInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//incDecHandler(this);
								}).setLocation(550, 50);
		var accDecBtn = new CAAT.Foundation.Actor().
								setId('accDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//incDecHandler(this);
								}).setLocation(585, 50);
								
		dashBG.addChild(iniVelIncBtn);
		dashBG.addChild(iniVelDecBtn);
		dashBG.addChild(accIncBtn);
		dashBG.addChild(accDecBtn);
		
		//the increment and decrement buttons MouseDown functions
		iniVelIncBtn.mouseDown = game.incDecMDown;
		iniVelDecBtn.mouseDown = game.incDecMDown;
		accIncBtn.mouseDown = game.incDecMDown;
		accDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseUp functions
		iniVelIncBtn.mouseUp = game.incDecMUp;
		iniVelDecBtn.mouseUp = game.incDecMUp;
		accIncBtn.mouseUp = game.incDecMUp;
		accDecBtn.mouseUp = game.incDecMUp;		
		
		//on mouse exit from the button do the same thing as that of mouse up
		iniVelIncBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		iniVelDecBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		accIncBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();
			CAAT.setCursor("default");
		};
		accDecBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();
			CAAT.setCursor("default");
		};
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	function __createDashBoardButton(){
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
		
		dashBG.addChild( b1 );
		dashBG.addChild( b2 );
		dashBG.addChild( b3 );		
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
		for(var j=0;j<3;j++){
			if(this['bannerTxt_'+j] != null){
				 bannerContainer.removeChild(this['bannerTxt_'+j]);
			}
		}
        for(var i=0;i<bannerContentTxt[index].length;i++){
            if(this['bannerTxt_'+i]){
                bannerContainer.removeChild(this['bannerTxt_'+i]);
            }
            this['bannerTxt_'+i] = game.__addTextOnImage('#000000', bannerContentTxt[index][i], 'bold 14px Arial ', 'center', game._director );
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
					setLineWidth( 1 ).
                    calcTextSize( _director ).
                    setTextFillStyle( txtColor )/*.
					cacheAsBitmap()*/;
	}
})();