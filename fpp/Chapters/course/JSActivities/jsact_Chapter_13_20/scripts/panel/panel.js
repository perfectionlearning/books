//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {		
	var dashBoardEle = [];
	dashBoardEle[dashBoardEle.length] = ['dashBG', 			0, 0];	
	dashBoardEle[dashBoardEle.length] = ['well100', 		440, 0, 100];
	dashBoardEle[dashBoardEle.length] = ['well100', 		540, 0, 100];		
	dashBoardEle[dashBoardEle.length] = ['well100', 		640, 0, 100];
	dashBoardEle[dashBoardEle.length] = ['well100', 		700, 0, 100];		
	dashBoardEle[dashBoardEle.length] = ['wellleft', 		430, 0, 10];	
	dashBoardEle[dashBoardEle.length] = ['wellright', 		750, 0, 10];	
	dashBoardEle[dashBoardEle.length] = ['bottom', 		-20, 80, 466];
	
	var dashBoardTxt = [];
	//Text, font_style, alignment, xPos, yPos, id
	dashBoardTxt[dashBoardTxt.length] = ['Launch speed', 		'bold 14px Arial', 'left', 454, 20, 1, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px Arial', 'left', 620, 20, 2, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['Orbital radius', 		'bold 14px Arial', 'left', 454, 50, 3, '#fff'];
	dashBoardTxt[dashBoardTxt.length] = ['km', 					'bold 14px Arial', 'left', 620, 50, 4, '#fff'];
		
		
	var bannerImg = null, bannerContainer= null, setBG = null, dashBG = null;
	game.inputElementsArr = [], game.oDashTxtArr = [];
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Select the orbital speed and radius to achieve', 
													 'geosynchronous orbit. Remember to factor', 
													 'in the Earth\'s rotation. Press GO to blast off.'
													];
		bannerContentTxt[bannerContentTxt.length] = ['That is not the correct orbit.', 'Press RESET and enter new values to try again.'];		
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations!', 'You have achieved geosynchronous orbit.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['670',  '6', '31', '56' ];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = 10,
		bannerContX2Pos	= 10,
		bannerRows = 1, 
		bannerCols = 3,
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
			if(i == dashBoardEle.length-1) {
				__createBannerContainer();	
			}
			dashBG.addChild(oActor);			
		}				
		__createDashBoardTxt();
		__createDashBoardButton();
		__createInputTxtBox('launchSpeed', '50px', '556px', '515px');
		__createInputTxtBox('orbitalRadius', '50px', '556px', '545px');
		return dashBG;
	}	
	//===================================================
	//create the input box on the dashboard
	//===================================================
	function __createInputTxtBox(id, width, left, top){
		var thisEle = document.createElement('input');
		thisEle.type = 'text';
		thisEle.id = id;
		thisEle.style.position = 'absolute';
		thisEle.style.width = width;
		thisEle.style.left = left;
		thisEle.style.top = top;
		thisEle.value = '0';	
		game.inputElementsArr.push(thisEle);
		document.getElementById('act_controls').appendChild(thisEle);
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
		dashBG.addChild( b1 );
		dashBG.addChild( b2 );
		dashBG.addChild( b3 );	
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
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('InDash'), bannerRows, bannerCols )
		);
		
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, 10, 10, false);
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