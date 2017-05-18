//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	
	
	
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		300,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		310,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		410,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		510,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		610,  0];
		dashBoardEle[dashBoardEle.length] = ['well50',    		700,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		750,  0];
		dashBoardEle[dashBoardEle.length] = ['arrows',  		450,  -10];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		538,  10];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		538,  30];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		538,  50];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		538,  70];
		

		
	//dashBoard test
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Acceleration', 		'Bold 14px arial', 'left', 100, 35, 1];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.0', 				'Bold 14px arial', 'left', 200, 35, 'accTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'Bold 14px arial', 'left', 250, 35, 2];
		dashBoardTxt[dashBoardTxt.length] = ['Weight:', 			'Bold 14px arial', 'left', 320, 10, 3];
		dashBoardTxt[dashBoardTxt.length] = ['Normal force:', 		'Bold 14px arial', 'left', 320, 30, 4];		
		dashBoardTxt[dashBoardTxt.length] = ['Friction:', 			'Bold 14px arial', 'left', 320, 50, 5];
		dashBoardTxt[dashBoardTxt.length] = ['Tension:', 			'Bold 14px arial', 'left', 320, 70, 6];
		dashBoardTxt[dashBoardTxt.length] = ['60', 					'Bold 14px arial', 'left', 560, 52, 'wgtTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['60', 					'Bold 14px arial', 'left', 560, 12, 'nmlForTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['60', 					'Bold 14px arial', 'left', 560, 32, 'fricTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['60', 					'Bold 14px arial', 'left', 560, 70, 'tenTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['2', 					'10px arial', 	   'left', 275, 30, 7];
		dashBoardTxt[dashBoardTxt.length] = ['N', 					'Bold 14px arial', 'left', 600, 52, 8];
		dashBoardTxt[dashBoardTxt.length] = ['N', 					'Bold 14px arial', 'left', 600, 12, 9];
		dashBoardTxt[dashBoardTxt.length] = ['N', 					'Bold 14px arial', 'left', 600, 32, 10];
		dashBoardTxt[dashBoardTxt.length] = ['N', 					'Bold 14px arial', 'left', 600, 72, 11];
		
		var textActorArray=['txt0','txt1','txt2','txt3','txt4','txt5','txt6','txt7','txt8','txt9','txt10','txt11','txt12','txt13','txt14','txt15'];
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['The weight and the normal force do not' , 'match the description of the situation.'];
		bannerContentTxt[bannerContentTxt.length] = ['Sorry, the acceleration is wrong.', 'Press RESET to try again.'];
		bannerContentTxt[bannerContentTxt.length] = ['Great Job! The box has the' , 'correct acceleration.'];
		bannerContentTxt[bannerContentTxt.length] = ['The force vectors are incorrect.', 'Press RESET to try again.'];
		bannerContentTxt[bannerContentTxt.length] = ['The magnitude of acceleration is correct,' , 'but the force magnitudes are wrong.' , 'Press RESET to try again.'];
		
	
		
	
	
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['660', '510', '535', '560'];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = 0,
		bannerContX2Pos	= 0,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
	
	var graphXValDiff = 18,
		graphYValDiff = 32;
	
	var panelHeight = 100;
	
	var setBG,
		dashBG,
		bannerContainer,
		bannerImg;
	
	
	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene)
	{		
		//Create the panel container
		var panel = createPanel( director.width, panelHeight, director );
		panel.
			setLocation(0, 500);		
		scene.addChild(panel);
		
		
		// Create the main area
		var main = createMain( director.width, director.height  , director );
		main.
			setLocation(0, 0);
		scene.addChild(main);
		
		

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

		__createBannerContainer();//banner show on the dash img (like z-index)
		
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			
			dashBG.addChild(oActor);
			
		}			
		
		__createDashBoardTxt();
		//game.__createDashBoardButton();	
		//game.__createIncDecButton();
		return dashBG;
	}

	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			 textActorArray[i] = game.__addTextOnImage('#FFF', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			 textActorArray[i].
				setId(dashBoardTxt[i][5]).
				setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(textActorArray[i]);	
			
			//dashborad text id, store in to an array --> from get the Id and set the value to the
			//related text id
			game.oDashTxtArr.push(textActorArray[i]);
			//console.log(game.oDashTxtArr[1]);
		}
		
		game.verticalAccel = game.oDashTxtArr[1].text;
		game.weight = game.oDashTxtArr[7].text;
		game.normalForce = game.oDashTxtArr[8].text;
		game.Friction = game.oDashTxtArr[9].text;
		game.Tension = game.oDashTxtArr[10].text;
		//console.log([game.verticalVelocity, game.verticalAccel, game.BForce]);
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	game.__createIncDecButton=function(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var weightIncBtn = new CAAT.Foundation.Actor().
								setId('wegInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incWegHandler(this);
								}).setLocation(532, 510);
		var weightlDecBtn = new CAAT.Foundation.Actor().
								setId('wegDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
								//	game.decWegHandler(this);
								}).setLocation(532, 519);
		var normalForceIncBtn = new CAAT.Foundation.Actor().
								setId('forInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incForHandler(this);
								}).setLocation(532, 530);
		var normalForceDecBtn = new CAAT.Foundation.Actor().
								setId('forDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//game.decForHandler(this);
								}).setLocation(532, 539);
		var frictionIncBtn = new CAAT.Foundation.Actor().
								setId('friInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
								//	game.incFriHandler(this);
								}).setLocation(532, 550);
		var frictionDecBtn = new CAAT.Foundation.Actor().
								setId('friDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//game.decFriHandler(this);
								}).setLocation(532, 559);
		var tensionIncBtn = new CAAT.Foundation.Actor().
								setId('tenInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incTenHandler(this);
								}).setLocation(532, 570);
		var tensionDecBtn = new CAAT.Foundation.Actor().
								setId('tenDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
								//	game.decTenHandler(this);
								}).setLocation(532, 579);
								
		
		game.mainPanel.addChild(weightIncBtn);
		game.mainPanel.addChild(weightlDecBtn);
		game.mainPanel.addChild(normalForceIncBtn);
		game.mainPanel.addChild(normalForceDecBtn);
		game.mainPanel.addChild(frictionIncBtn);
		game.mainPanel.addChild(frictionDecBtn);
		game.mainPanel.addChild(tensionIncBtn);
		game.mainPanel.addChild(tensionDecBtn);
		//the increment and decrement buttons MouseDown functions are called when long press
		weightIncBtn.mouseDown = game.incDecMDown;
		weightlDecBtn.mouseDown = game.incDecMDown;
		normalForceIncBtn.mouseDown = game.incDecMDown;
		normalForceDecBtn.mouseDown = game.incDecMDown;
		frictionIncBtn.mouseDown = game.incDecMDown;
		frictionDecBtn.mouseDown = game.incDecMDown;
		tensionIncBtn.mouseDown = game.incDecMDown;
		tensionDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		weightIncBtn.mouseUp = game.incDecMUp;
		weightlDecBtn.mouseUp = game.incDecMUp;
		normalForceIncBtn.mouseUp = game.incDecMUp;
		normalForceDecBtn.mouseUp = game.incDecMUp;
		frictionIncBtn.mouseUp = game.incDecMUp;
		frictionDecBtn.mouseUp = game.incDecMUp;
		tensionIncBtn.mouseUp = game.incDecMUp;
		tensionDecBtn.mouseUp = game.incDecMUp;
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	game.__createDashBoardButton=function(){
	
	//alert('called');
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
		
		game.mainPanel.addChild( b1 );
		game.mainPanel.addChild( b2 );
		game.mainPanel.addChild( b3 );	
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
		//game.__bannerDisplay(0, 0, -70, 0, false);
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
            setValues( new CAAT.Path().setLinear(bannerContX1Pos,fromY1, bannerContX2Pos, fromY2).setInteractive(false) ).
			setDelayTime(0, (flag) ? 0 : 200);

        for(var j=0; j<=bannerContainer.getNumChildren(); j++){
            bannerContainer.removeChild(this['bannerTxt_'+j]);
        }

        for(var i=0;i<bannerContentTxt[index].length;i++){
            this['bannerTxt_'+i] = game.__addTextOnImage('#000',bannerContentTxt[index][i], 'Bold 14px Arial', 'center', game._director );
            this['bannerTxt_'+i].setLocation(bannerTxtInitXPos,12+(bannerTxtInitYPos*i));
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
                    //calcTextSize( _director ).
                    setTextFillStyle( txtColor ).
                    setOutline( false );                    
	}

})();