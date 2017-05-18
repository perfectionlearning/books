//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {		
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'420',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'430',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'530',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'630',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'700',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'750',  '0'];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'568',  '25'];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'568',  '55'];		
	
	//dashBoard test
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Power', 	'bold 14px Arial',  'left', 490,  27, 1];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['5,000', 	'bold 14px Arial',  'left', 572,  27, 'powerTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['W', 		'bold 14px Arial',  'left', 631,  27, 2];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Braking force', 'bold 14px Arial',  'left', 440,  56, 3];
		dashBoardTxt[dashBoardTxt.length] = ['600', 		  'bold 14px Arial',  'left', 572,  57, 'brakTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['N', 		 	  'bold 14px Arial',  'left', 631,  56, 4];//Text, font_style, alignment, xPos, yPos, id
		
		
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Apply power for 2.0 s to complete the 10.0 m loop.', 'Then brake to a stop at the finish 15.0 m away.'];
		bannerContentTxt[bannerContentTxt.length] = ['Whoops.', 'You didn\'t brake forcefully enough.'];
		bannerContentTxt[bannerContentTxt.length] = ['Ouch!', 'You need more power to complete the loop.'];
		bannerContentTxt[bannerContentTxt.length] = ['Great job!', 'That was an amazing stunt.'];
		bannerContentTxt[bannerContentTxt.length] = ['Your braking force was too high.', 'You didn\'t make it across the finish line.'];
		bannerContentTxt[bannerContentTxt.length] = ['Whoops.', ' You need more power.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['670', '10', '35', '60'];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = 10,
		bannerContX2Pos	= 10,
		bannerRows = 1, 
		bannerCols = 3,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
	
	var panelHeight = 100;
	
	// Create the main works area and the panel
	//=======================================================
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
			setLocation(0, 300);		
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
					setFillStyle('#c3c3c3').
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
					
			
			
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);			
			dashBG.addChild(oActor);			
		}
				
		__createDashBoardButton();
		__createDashBoardTxt();
		
		__createBannerContainer();
		__createIncDecButton();		
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oActorTxt = game.__addTextOnImage('#fff', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oActorTxt
				.setId()
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(oActorTxt);
			game.oDashTxtArr.push(oActorTxt);
		}
		
		var pow=game.oDashTxtArr[1].text;
		
		if(pow.indexOf(",")==-1)
		{
			game.power=Number(pow);
		}
		else
		{
		    game.power=Number(pow.split(',')[0] + pow.split(',')[1]);
		}
		var brake=game.oDashTxtArr[4].text;
		
		if(brake.indexOf(",")==-1)
		{
			game.brakeForce=Number(brake);
		}
		else
		{
			game.brakeForce=Number(brake.split(',')[0] + brake.split(',')[1]);
		}
		
		
		
	}
//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var inipowerIncBtn = new CAAT.Foundation.Actor().
								setId('inipowerInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incDecHandler(this);
								}).setLocation(545, 25);
		var inipowerDecBtn = new CAAT.Foundation.Actor().
								setId('inipowerDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//game.incDecHandler(this);
								}).setLocation(545, 34);
		var inibrakIncBtn = new CAAT.Foundation.Actor().
								setId('inibrakInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incDecHandler(this);
								}).setLocation(545, 55);
		var inibrakDecBtn = new CAAT.Foundation.Actor().
								setId('inibrakDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//game.incDecHandler(this);
								}).setLocation(545, 64);						
								
		dashBG.addChild(inipowerIncBtn);
		dashBG.addChild(inipowerDecBtn);
		dashBG.addChild(inibrakIncBtn);
		dashBG.addChild(inibrakDecBtn);
				
		//the increment and decrement buttons MouseDown functions are called when long press
		inipowerIncBtn.mouseDown = game.incDecMDown;
		inipowerDecBtn.mouseDown = game.incDecMDown;
		inibrakIncBtn.mouseDown = game.incDecMDown;
		inibrakDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		inipowerIncBtn.mouseUp = game.incDecMUp;
		inipowerDecBtn.mouseUp = game.incDecMUp;
		inibrakIncBtn.mouseUp  = game.incDecMUp;
		inibrakDecBtn.mouseUp  = game.incDecMUp;
		
		//on mouse exit from the button do the same thing as that of mouse up
		inipowerIncBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		inipowerDecBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		inibrakIncBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();
			CAAT.setCursor("default");
		};
		inibrakDecBtn.mouseExit = function() {
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
		var dummyContainer = new CAAT.Foundation.ActorContainer()
									.setSize(400, 70)
									.setClip(true)
									.setLocation(5, 10);
									
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), bannerRows, bannerCols )
		);
		dummyContainer.addChild(bannerContainer);
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( dummyContainer );
		game.__bannerDisplay(0, 0, 70, 0, false);
	}	
	
	//=======================================================
    //Banner Display Container
    //=======================================================
	
    game.__bannerDisplay = function( index, bannerBGIndex, y2, y1, flag ){
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