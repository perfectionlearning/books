//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {		
	var dashBoardEle = [];
	dashBoardEle[dashBoardEle.length] = ['dashBG', 0, 0, 2];	//left end
	dashBoardEle[dashBoardEle.length] = ['wellleft', 100, 0, 10];	//well left
	dashBoardEle[dashBoardEle.length] = ['well100', 110, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['well100', 210, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['well100', 310, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['well100', 410, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['well100', 510, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['well100', 550, 0, 100];	//well100
	dashBoardEle[dashBoardEle.length] = ['wellright', 650, 0, 10];	//well right
	
	var dashBoardTxt = [];
	//Text, font_style, alignment, xPos, yPos, id
	dashBoardTxt[dashBoardTxt.length] = ['Orbital speed', 	'bold 14px Arial',  'left', 124, 25, 1, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['5.65', 		'bold 14px Arial',  'left', 236,  25, 2, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = [ String.fromCharCode(215) + ' 10', 		'bold 15px Arial',  'left', 267,  26, 2, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['3', 		 		'bold 10px Arial',  'left', 299,  23, 2, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 315,  25, 3, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['Orbital radius', 	'bold 14px Arial',  'left', 124, 55, 1, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['1.25', 		'bold 14px Arial',  'left', 236,  55, 2, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = [ String.fromCharCode(215) + ' 10', 		'bold 15px Arial',  'left', 267,  55, 2, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['7', 		 		'bold 10px Arial',  'left', 299,  50, 2, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['m', 		 	'bold 14px Arial',  'left', 315,  55, 3, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['Forward', 		'bold 14px Arial',  'left', 400, 55, 1, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['thrust', 			'bold 14px Arial',  'left', 408, 72, 1, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['Reverse', 		'bold 14px Arial',  'left', 490, 55, 1, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['thrust', 			'bold 14px Arial',  'left', 498, 72, 1, '#fff'];
			
		
	var bannerImg = null, bannerContainer= null, setBG = null, dashBG = null;
	game.inputElementsArr = [], game.oDashTxtArr = [];
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = [
														'  Use forward and reverse thrust buttons to dock with', 
														'the space station. To dock, your ship must be', 
														'touching the space station and match its orbit.'
													];
		bannerContentTxt[bannerContentTxt.length] = ['You have docked!','Nice work!'];
		bannerContentTxt[bannerContentTxt.length] = ['Your ship crashed into the planet.', 'Press RESET to try again.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = [576, 5, 30, 55];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = -2,
		bannerContX2Pos	= -2,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
	
	game.panelHeight = 100;
	game.createPanels = function(director, scene)
	{		
		// Create the main area
		var main = createMain( director.width, director.height - game.panelHeight, director );
		main.setLocation(0, 0);
		scene.addChild(main);
		//Create the panel container
		var panel = createPanel( director.width, game.panelHeight, director );
		panel.setLocation(0, main.height);		
		scene.addChild(panel);
		return main;
	}
	//=======================================================
	//Create main panel
	//=======================================================
	function createMain( pw, ph, director ){
		setBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					//setFillStyle('#f0f0ce').
					setClip(true);		
		return setBG;
	}	
	//=======================================================
	//Create dashboard panel
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
			if(i == 0) {
				__createBannerContainer();	
			}
			dashBG.addChild(oActor);			
		}				
		__createDashBoardTxt();
		__createDashBoardButton();
		__createIncDecButton();
		return dashBG;
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
		//Pause btn creation and add Events
		var b2= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 2, 2, 3, 2, function(button) {
					game.pauseBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][3]);
		
		//Reset btn creation and add Events
		var b3= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
					game.resetBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][2]);	 
		//dashBG.addChild( b1 );
		dashBG.addChild( b2 );
		dashBG.addChild( b3 );	
	}	
	//=====================================================
	//Create increment / decrement button
	//=====================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('thrust'), 1, 2);
		var forwardThrust = new CAAT.Foundation.Actor().
								setId('forwardThrust').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(400, 8);
		var reverseThrust = new CAAT.Foundation.Actor().
								setId('reverseThrust').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(492, 8);
								
		dashBG.addChild(forwardThrust);
		dashBG.addChild(reverseThrust);		
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
		game.__bannerDisplay(0, 0, -70, 10, false);
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