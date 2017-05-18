//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {		
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['divider',   		130,  0];
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		300,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		310,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		410,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		510,  0];
		dashBoardEle[dashBoardEle.length] = ['well50',    		610,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		650,  0];
		dashBoardEle[dashBoardEle.length] = ['exponentbox',  	413,  30];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		445,  30];	
		
	//dashBoard test
	var dashBoardTxt = [];//Text, font_style, alignment, xPos, yPos, id, color
		dashBoardTxt[dashBoardTxt.length] = ['B', 				 'Bold Italic 14px Arial', 'left', 150, 15, 0, 	'white'];
		dashBoardTxt[dashBoardTxt.length] = ['q', 				 'Bold Italic 14px Arial', 'left', 150, 33, 1, 	'white'];
		dashBoardTxt[dashBoardTxt.length] = ['r', 				 'Bold Italic 14px Arial', 'left', 150, 55, 2, 	'white'];		
		dashBoardTxt[dashBoardTxt.length] = ['= 0.62 T', 		 'Bold 14px Arial', 	   'left', 169, 15, 3, 	'white'];
		dashBoardTxt[dashBoardTxt.length] = [' = 1.6 '+String.fromCharCode('215')+' 10     C','Bold 14px Arial', 	   'left', 165, 35, 4, 	'white'];		
		dashBoardTxt[dashBoardTxt.length] = ['-19', 		     'Bold 10px Arial', 	   'left', 233, 30, 5, 	'white'];
		dashBoardTxt[dashBoardTxt.length] = ['=           	 cm','Bold 14px Arial', 	   'left', 165, 55, 6, 	'white'];
		dashBoardTxt[dashBoardTxt.length] = ['Speed', 		     'Bold 14px Arial', 	   'left', 340, 32, 7, 	'white'];
		dashBoardTxt[dashBoardTxt.length] = ['4.0', 		 	 'Bold 14px Arial', 	   'left', 436, 32, 'speedTxt', 'white'];
		dashBoardTxt[dashBoardTxt.length] = [String.fromCharCode('215')+' 10',		 	     'Bold 14px Arial', 	   'left', 459, 32, 9, 'white'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			 'Bold 14px Arial', 	   'left', 505, 32, 10, 'white'];
		dashBoardTxt[dashBoardTxt.length] = ['4', 				 'Bold 10px Arial', 	   'left', 489, 31, 'ten2power', 'white'];
		dashBoardTxt[dashBoardTxt.length] = ['--', 				 'Bold 14px Arial', 	   'left', 185, 55, 'raduisTxt', 'white'];
	
	var popupTxt = [];
		popupTxt[popupTxt.length] = ['Substance is:'];
		popupTxt[popupTxt.length] = ['Helium   6.7E-27 kg'];
		popupTxt[popupTxt.length] = ['Oxygen  5.3E-26 kg'];
		popupTxt[popupTxt.length] = ['Xenon    2.2E-25 kg'];
		popupTxt[popupTxt.length] = ['Radon    3.7E-25 kg'];
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Select an initial velocity for the ion entering the', 'mass spectrometer and press GO. Observe the radius.', 'Determine the substance and select it below.'];
	bannerContentTxt[bannerContentTxt.length] = ['No. To calculate the mass, use the', 'product of the magnetic field, the charge,', 'and the radius, divided by the speed.'];
	bannerContentTxt[bannerContentTxt.length] = ['Congratulations.  You have correctly identified', 'the unknown substance.', 'It is xenon gas.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['560', '13', '38'];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = 358,
		bannerContX2Pos	= 358,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
	
	var graphXValDiff = 18,
		graphYValDiff = 32;
	
	var panelHeight = 200;
	
	var isPopupShow = false;
	
	var substancePopupContainer = null;
	
	var setBG,
		dashBG,
		bannerImg,
		bannerContainer;
	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene)
	{		
		// Create the main area
		var main = createMain( director.width, director.height - panelHeight );
		main.
			setLocation(0, 0);
		scene.addChild(main);

		//Create the panel container
		var panel = createPanel( director.width, panelHeight, director );
		panel.
			setLocation(0, 400);		
		scene.addChild(panel);

		return main;
	}
	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph ){
		setBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setClip(false);		
		
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
		dashBG.mouseDown = game.subtanceShow;
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]+100);
			
			dashBG.addChild(oActor);
			oActor.mouseDown = game.subtanceShow;
		}
		
		
		__createSubstanceBtn();
		__createDashBoardTxt();		
		__createIncDecButton();	
		game.__createSubstancePopup();		
		__createDashBoardButton();	
		return dashBG;
	}

	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var iniVelIncBtn = new CAAT.Foundation.Actor().
								setId('incSpeed').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler('incSpeed');									
								}).setLocation(410, 30+100);
		var iniVelDecBtn = new CAAT.Foundation.Actor().
								setId('decSpeed').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler('decSpeed');
								}).setLocation(410, 38+100);
								
		dashBG.addChild(iniVelIncBtn);
		dashBG.addChild(iniVelDecBtn);
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseDown = game.incDecMDown;
		iniVelDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseUp = game.incDecMUp;
		iniVelDecBtn.mouseUp = game.incDecMUp;
	}	
	
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oDashTxt = game.__addTextOnImage(dashBoardTxt[i][6], dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oDashTxt
				.setId(dashBoardTxt[i][5])
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]+100);
			dashBG.addChild(oDashTxt);
			game.oDashTxtArr.push(oDashTxt);
			oDashTxt.mouseDown = game.subtanceShow;
		}
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
					game.goBtnMouseDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], Number(buttonXYPos[0][1])+100);			
		//Reset btn creation and add Events
		var b2= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5, 4, function(button) {
					game.resetBtnMouseDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], Number(buttonXYPos[0][2])+100);
		
		dashBG.addChild( b1 );
		dashBG.addChild( b2 );	
	}
	//======================================================
	//create substance button
	//======================================================
	function __createSubstanceBtn(){
		var substancePopupBtn = new CAAT.Foundation.ActorContainer()										
										.setBounds(140, 55, 201, 20)
										.setLocation(340,  55+100);
										
		var substanceBG = game.__addImageOnScene( game._director.getImage('PopUpWd'), 1, 1 );
			substanceBG.setLocation(0,  0);
		game.substanceTxt = game.__addTextOnImage('black', 'Substance is:', 'Bold 14px Arial', 'left', game._director);
			game.substanceTxt.setLocation(10, 2);
		
		//This dummySubPopupBtn is used to show/Hide the popup
		//when click this actor container
		var dummySubPopupBtn = new CAAT.Foundation.ActorContainer()										
										.setSize(201, 20)
										.setLocation(0,  0)
										//.setFillStyle('#00F');
										
		substancePopupBtn.addChild(substanceBG);
		substancePopupBtn.addChild(game.substanceTxt);
		substancePopupBtn.addChild(dummySubPopupBtn);
		dashBG.addChild(substancePopupBtn);	
		
		dummySubPopupBtn.mouseDown = game.substanceShowPopup;
		
		dummySubPopupBtn.mouseEnter = function(){
			CAAT.setCursor('pointer');
		}
		dummySubPopupBtn.mouseExit = function(){
			CAAT.setCursor('default');
		}
	}
	//=======================================================
	//create substance popup
	//=======================================================
	game.__createSubstancePopup = function(){
		game.substanceContainer = new CAAT.Foundation.ActorContainer()
									.setSize(140, 110)									
									.setLocation(340, -55+100)									
									.setFillStyle('#FFF');
									
		for(var i=0;i<popupTxt.length;i++){
			this['oSubTxtCont_'+i] = new CAAT.Foundation.ActorContainer()
								.setSize(138, 22)
								.setId('oSubTxt_'+i)
								.setLocation(1, i*22)
								.setFillStyle('#FFF');
								
			var oSubTxt = game.__addTextOnImage('black', popupTxt[i][0], '13px Arial', 'left', game._director);
				oSubTxt
					.setSize(140, 22)
					.setLocation(10, 5);

			this['oDummySubTxt_'+i] = new CAAT.Foundation.ActorContainer()
							.setSize(139, 22)
							.setLocation(0, i*22)
							.setId('oDummySubTxt_'+i)
							.setFillStyle('#FFF');
			
			game.substanceContainer.addChild(this['oSubTxtCont_'+i]);
			this['oSubTxtCont_'+i].addChild(oSubTxt);
			game.substanceContainer.addChild(this['oDummySubTxt_'+i]);
			
			game.substanceContainer.visible = false;
			
			game.substanceArr.push(this['oSubTxtCont_'+i]);
			
			this['oDummySubTxt_'+i].mouseEnter = function(){
				 this.pointed= true;				
			};
			
			this['oDummySubTxt_'+i].mouseExit = function(){
				 this.pointed= false;
			};
			
			this['oDummySubTxt_'+i].paint = function(director, time){				
				var canvas = director.ctx;				
				if ( null!=this.parent && null!=this.fillStyle ) {					
					if(this.pointed == true){
						var id =  Number(this.id.split('_')[1]);
						game.substanceArr[id].setFillStyle('#3399ff');
					}else{
						var id =  Number(this.id.split('_')[1]);
						game.substanceArr[id].setFillStyle('#FFF');
					}
				}
			}
			this['oDummySubTxt_'+i].mouseDown = game.oSubTxtContMDown;
		}
		dashBG.addChild(game.substanceContainer);		
	}
	
	//=======================================================
	//Create Banner Container
	//=======================================================
	function __createBannerContainer(){
		bannerContainer = new CAAT.Foundation.ActorContainer().setSize(400, 70+100);
											
		bannerImg = game.__addImageOnScene( game._director.getImage('banner'), bannerRows, bannerCols );
		
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		bannerImg.mouseDown = game.subtanceShow;
		game.__bannerDisplay(0, 0, -70+100, 100, false);
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
            this['bannerTxt_'+i] = game.__addTextOnImage('black', bannerContentTxt[index][i], 'Bold 14px Arial', 'center', game._director );
            this['bannerTxt_'+i].setLocation(2+bannerTxtInitXPos, 12+(bannerTxtInitYPos*i));
            bannerContainer.addChild(this['bannerTxt_'+i]);
			this['bannerTxt_'+i].mouseDown = game.subtanceShow;
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