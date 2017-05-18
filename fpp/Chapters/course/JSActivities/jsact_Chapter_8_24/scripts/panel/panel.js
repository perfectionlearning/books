//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {		
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'300',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'310',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'410',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'510',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'570',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'670',  '0'];
		dashBoardEle[dashBoardEle.length] = ['smRed',  			'50',  '15'];		
		dashBoardEle[dashBoardEle.length] = ['smGreen',  		'50',  '35'];		
		dashBoardEle[dashBoardEle.length] = ['smPink',  		'50',  '55'];
		dashBoardEle[dashBoardEle.length] = ['smBlue',  		'180',  '15'];				
		dashBoardEle[dashBoardEle.length] = ['smBrown',  		'180',  '35'];			
		dashBoardEle[dashBoardEle.length] = ['smBlack',  		'180',  '55'];
		//dashBoardEle[dashBoardEle.length] = ['PopUpMed',  		'342',  '15'];
		//dashBoardEle[dashBoardEle.length] = ['PopUpMed',  		'342',  '35'];		
		//dashBoardEle[dashBoardEle.length] = ['PopUpMed',  		'342',  '55'];	
	
	//dashBoard test
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 			'bold 14px Arial',  'left', 90,  15, 'redTxt', '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 130,  15, 1, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 		 	'bold 14px Arial',  'left', 90,  35, 'greenTxt', '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 130,  35, 2, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 		 	'bold 14px Arial',  'left', 90,  55, 'pinkTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 130,  55, 3, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 		 	'bold 14px Arial',  'left', 224,  15, 'blueTxt', '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 260,  15, 4, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 		 	'bold 14px Arial',  'left', 224,  35, 'brownTxt', '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 260,  35, 5, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 		 	'bold 14px Arial',  'left', 224,  55, 'blackTxt', '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 260,  55, 6, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['A', 		 	'bold 14px Arial',  'left', 320,  15, 7, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['B', 		 	'bold 14px Arial',  'left', 320,  35, 8, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['C', 		 	'bold 14px Arial',  'left', 320,  55, 9, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		//dashBoardTxt[dashBoardTxt.length] = ['Collision type:', 		 	'bold 14px Arial',  'left', 360,  16, 10, '#000'];//Text, font_style, alignment, xPos, yPos, id
		//dashBoardTxt[dashBoardTxt.length] = ['Collision type:', 		 	'bold 14px Arial',  'left', 360,  36, 11, '#000'];//Text, font_style, alignment, xPos, yPos, id
		//dashBoardTxt[dashBoardTxt.length] = ['Collision type:', 		 	'bold 14px Arial',  'left', 360,  56, 12, '#000'];//Text, font_style, alignment, xPos, yPos, id
		
	var popupTxt = [];
         popupTxt[popupTxt.length] = ['Collision type:'];
         popupTxt[popupTxt.length] = ['elastic'];
         popupTxt[popupTxt.length] = ['completely inelastic'];
         popupTxt[popupTxt.length] = ['inelastic'];
         popupTxt[popupTxt.length] = ['impossible'];

	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Press GO. Record data.', 'Classify the type of each collision below.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations!', 'You identified each collision correctly.'];
		bannerContentTxt[bannerContentTxt.length] = ['Rows A and B and C are wrong.', 'Enter new answers.'];
		bannerContentTxt[bannerContentTxt.length] = ['Rows A and B are wrong.', 'Enter new answers.'];
		bannerContentTxt[bannerContentTxt.length] = ['Rows A and C are wrong.', 'Enter new answers.'];
		bannerContentTxt[bannerContentTxt.length] = ['Rows B and C are wrong.', 'Enter new answers.'];
		bannerContentTxt[bannerContentTxt.length] = ['Row A is wrong.', 'Enter a new answer'];
		bannerContentTxt[bannerContentTxt.length] = ['Row B is wrong.', 'Enter a new answer'];
		bannerContentTxt[bannerContentTxt.length] = ['Row C is wrong.', 'Enter a new answer'];
		
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['572', '10', '35', '60'];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = 0,
		bannerContX2Pos	= 0,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
	
	var panelHeight = 200;
	
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
			setLocation(0, 330 - 70);		
		scene.addChild(panel);
		panel.mouseDown = game.popupMDownHandler;
		return main;
	}
	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph, director ){
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
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], Number(dashBoardEle[i][2])+70);			
			dashBG.addChild(oActor);
			oActor.mouseDown = game.popupMDownHandler;			
		}
		
		__createDashBoardButton();
		__createDashBoardTxt();
		__createSubstanceBtn();
		game.__createSubstancePopup();
		
		
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
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4] + 70);
			dashBG.addChild(oActorTxt);
			game.oDashTxtArr.push(oActorTxt);
			oActorTxt.mouseDown = game.popupMDownHandler;
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
					game.goBtnMDownHandler();					
				}
			).
			setLocation(buttonXYPos[0][0], Number(buttonXYPos[0][1]) + 70);	
		//Reset btn creation and add Events
		var b3= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
					game.resetBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], Number(buttonXYPos[0][2]) + 70);	 
		//Pause btn creation and add Events
		var b2= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 2, 2, 3, 2, function(button) {
					game.pauseBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], Number(buttonXYPos[0][3]) + 70);
		
		dashBG.addChild( b1 );
		dashBG.addChild( b2 );
		dashBG.addChild( b3 );	
	}
	game.__createSubstancePopup = function(){
		
         game.substanceContainer = new CAAT.Foundation.ActorContainer()
                                     .setSize(140, 110)                                    
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

             this['oDummySubTxt_'+i].mouseEnter = function(event){
                  this.pointed= true;
				  //console.log(event.source.id);
             };

             this['oDummySubTxt_'+i].mouseExit = function(){
                  this.pointed= false;
             };	
			 
			 this['oDummySubTxt_'+i].mouseDown = function(mouseEvent){
				game.oSubTxtContMDown(mouseEvent);
			 }
			 
             this['oDummySubTxt_'+i].paint = function(director, time){
                 var canvas = director.ctx;
                 if ( null!=this.parent && null!=this.fillStyle ) {
                     if(this.pointed == true){
                         var id =  Number(this.id.split('_')[1]); game.substanceArr[id].setFillStyle('#3399ff');
                     }else{
                         var id =  Number(this.id.split('_')[1]);
                         game.substanceArr[id].setFillStyle('#FFF');
                     }
                 }
             }
            
         }		
         dashBG.addChild(game.substanceContainer);
     }

	//======================================================
     //create substance button
     //======================================================
     function __createSubstanceBtn(){
	 
		 var substancePopupBtn1 = new CAAT.Foundation.ActorContainer()
                                         .setBounds(140, 55, 201, 20)
                                         .setLocation(340,  15 + 70);

         var substanceBG1 = game.__addImageOnScene( game._director.getImage('PopUpMed'), 1, 1 );
             substanceBG1.setLocation(0,  0);
         game.substanceTxt1 = game.__addTextOnImage('black', 'Collision type:', 'Bold 14px Arial', 'left', game._director);
             game.substanceTxt1.setLocation(10, 2);
	
         //This dummySubPopupBtn is used to show/Hide the popup
         //when click this actor container
         var dummySubPopupBtn1 = new CAAT.Foundation.ActorContainer()
										.setId('Abtn')
                                         .setSize(201, 20)
                                         .setLocation(0,  0);

         substancePopupBtn1.addChild(substanceBG1);
         substancePopupBtn1.addChild(game.substanceTxt1);
         substancePopupBtn1.addChild(dummySubPopupBtn1);
         dashBG.addChild(substancePopupBtn1);
		
         dummySubPopupBtn1.mouseDown = game.substanceShowPopup;
		 
		 dummySubPopupBtn1.mouseEnter = function(){
			CAAT.setCursor('pointer');
		 }
		 
		 dummySubPopupBtn1.mouseExit = function(){
			CAAT.setCursor('default');
		 }
		 
		 var substancePopupBtn2 = new CAAT.Foundation.ActorContainer()
										.setBounds(140, 55, 201, 20)
                                         .setLocation(340,  35 + 70);

         var substanceBG2 = game.__addImageOnScene( game._director.getImage('PopUpMed'), 1, 1 );
             substanceBG2.setLocation(0,  0);
         game.substanceTxt2 = game.__addTextOnImage('black', 'Collision type:', 'Bold 14px Arial', 'left', game._director);
             game.substanceTxt2.setLocation(10, 2);
	
         //This dummySubPopupBtn is used to show/Hide the popup
         //when click this actor container
         var dummySubPopupBtn2 = new CAAT.Foundation.ActorContainer()
										.setId('Bbtn')
                                         .setSize(201, 20)
                                         .setLocation(0,  0);

         substancePopupBtn2.addChild(substanceBG2);
         substancePopupBtn2.addChild(game.substanceTxt2);
         substancePopupBtn2.addChild(dummySubPopupBtn2);
         dashBG.addChild(substancePopupBtn2);
		
         dummySubPopupBtn2.mouseDown = game.substanceShowPopup;
		  dummySubPopupBtn2.mouseEnter = function(){
			CAAT.setCursor('pointer');
		 }
		 
		 dummySubPopupBtn2.mouseExit = function(){
			CAAT.setCursor('default');
		 }
		 
		 
		 var substancePopupBtn3 = new CAAT.Foundation.ActorContainer()
                                         .setBounds(140, 55, 201, 20)
                                         .setLocation(340,  55 + 70);

         var substanceBG3 = game.__addImageOnScene( game._director.getImage('PopUpMed'), 1, 1 );
             substanceBG3.setLocation(0,  0);
         game.substanceTxt3 = game.__addTextOnImage('black', 'Collision type:', 'Bold 14px Arial', 'left', game._director);
             game.substanceTxt3.setLocation(10, 2);
	
         //This dummySubPopupBtn is used to show/Hide the popup
         //when click this actor container
         var dummySubPopupBtn3 = new CAAT.Foundation.ActorContainer()
										.setId('Cbtn')
                                         .setSize(201, 20)
                                         .setLocation(0,  0);

         substancePopupBtn3.addChild(substanceBG3);
         substancePopupBtn3.addChild(game.substanceTxt3);
         substancePopupBtn3.addChild(dummySubPopupBtn3);
         dashBG.addChild(substancePopupBtn3);
		
         dummySubPopupBtn3.mouseDown = game.substanceShowPopup;
		  dummySubPopupBtn3.mouseEnter = function(){
			CAAT.setCursor('pointer');
		 }
		 
		 dummySubPopupBtn3.mouseExit = function(){
			CAAT.setCursor('default');
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
		bannerImg.mouseDown = game.popupMDownHandler;
		
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, 0, 70, false);
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
			this['bannerTxt_'+i].mouseDown = game.popupMDownHandler;
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