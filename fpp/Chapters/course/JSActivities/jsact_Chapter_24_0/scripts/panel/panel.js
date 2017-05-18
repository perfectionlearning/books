//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	//declaration start
	game.dashBoardTxt = [];
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['inDash',   0,    0];//image_id, image_X_Position, image_Y_Position
		dashBoardEle[dashBoardEle.length] = ['dash',     0,    0];
		dashBoardEle[dashBoardEle.length] = ['well100',  430,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',  530,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',  630,  0];
		dashBoardEle[dashBoardEle.length] = ['wellleft', 430,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',725,  0];
		dashBoardEle[dashBoardEle.length] = ['incDecMed',550,  32];
		dashBoardEle[dashBoardEle.length] = ['bottom',   5,    80];


	//dashBoard text
	var dashBoardTxt = [], bannerImg = null, bannerContainer = null, incDecTimer = null;
		dashBoardTxt[dashBoardTxt.length] = ['Charge value', 'bold 13px Arial', 'left', 449, 440+35, 0];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['nC', 			 'bold 13px Arial', 'left', 610, 440+35, 0];
		dashBoardTxt[dashBoardTxt.length] = ['1.00',         'bold 13px Arial', 'left', 573, 440+35 , 0];

	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Click anywhere on the screen to determine the', 'strength and direction of the field at that point.', 'Use the scroll arrows to set the charge.'];

	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = [645, 440+32];//common XPosiotn, button_1 Y Position

	var bannerContX1Pos = 17,
		bannerContX2Pos	= 17,
		bannerRows = 2,
		bannerCols = 3,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
	game.panelHeight = 100;
	//declaration end
	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene){
		// Create the main area
		var main = createMain( director.width, director.height - game.panelHeight, director );
		main.setLocation(0, 0);
		scene.addChild(main);
		//Create the panel container
		var panel = createPanel( director.width, game.panelHeight, director );
		panel.setLocation(0, director.height - game.panelHeight);
		scene.addChild(panel);
		return [main, panel];
	}
	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph, director ){
		var setBG = new CAAT.Foundation.ActorContainer()
					.setPreferredSize( pw, ph )
					.setBounds( 0, 0, pw, ph )
					.setFillStyle('#CCC')
					.setClip(true);
		return setBG;
	}
	//=======================================================
	//Create Bottom dashboard
	//=======================================================
	function createPanel( pw, ph, director ){
		var dashBG = new CAAT.Foundation.ActorContainer()
					.setPreferredSize( pw, ph )
					.setBounds( 0, 0, pw, ph )
					.setFillStyle('#000')
					.setClip(false);

		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			if(i == (dashBoardEle.length-1)) {
				__createBannerContainer( dashBG );
				oActor.setSize(420, 21).setClip(true);
			}
			dashBG.addChild(oActor);
		}
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text
	//=====================================================
	game.__createDashBoardTxt = function( dashBG ){
		var i = null;
		var _director = game.getDirector();
		//Create textActor
		for(var i = 0; i < dashBoardTxt.length; i++) {
			var thisActorTxt = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
				thisActorTxt
					.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
					.setId(dashBoardTxt[i][5]);
			dashBG.addChild(thisActorTxt);
			game.dashBoardTxt.push(thisActorTxt);
		}
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	game.__createDashBoardButton = function( parent ){
		var _director = game.getDirector();
		// Buttons creation
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(
				_director.getImage('buttons'), 2, 3
			);

		//Reset btn creation and add Events
		var b1 = new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5, 4, function(button) {
					game.resetBtn_click();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][1]);

		parent.addChild( b1 );
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	function __createBannerContainer( dashBG ){
		var _director = game.getDirector();
		bannerContainer = new CAAT.Foundation.ActorContainer()
									.setSize(400, 70)
									.setFillStyle('#000')
									.setClip(true);

		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( _director.getImage('inDash'), 1, 1 )
		);

		bannerContainer.addChild( bannerImg );
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, 10, 10, false);
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	game.__createIncDecButton = function( dashBG ){
		var _director = game.getDirector();
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( _director.getImage('incDecBtn'), 2, 1);
		var chargeIncBtn = new CAAT.Foundation.Actor().
								setId('charge_Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(545, 440+32);
		var chargeDecBtn = new CAAT.Foundation.Actor().
								setId('charge_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(545, 440+41);
		dashBG.addChild(chargeIncBtn);
		dashBG.addChild(chargeDecBtn);
		//the increment and decrement buttons MouseDown functions are called when long press
		chargeIncBtn.mouseDown = incDecMDown;
		chargeDecBtn.mouseDown = incDecMDown;
		//the increment and decrement buttons MouseDown functions are called when long press
		chargeIncBtn.mouseUp = incDecMUp;
		chargeDecBtn.mouseUp = incDecMUp;

		chargeDecBtn.mouseExit = function(){
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
		};
		chargeIncBtn.mouseExit = function(){
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
		};
	}
	//=======================================================
    //Banner Display Container
    //=======================================================
    game.__bannerDisplay = function( index, bannerBGIndex, y1, y2, flag ){
		var _director = game.getDirector();
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

        for(var i=0; i<bannerContentTxt[index].length; i++){
            if(this['bannerTxt_'+i]){
                bannerContainer.removeChild(this['bannerTxt_'+i]);
            }
            this['bannerTxt_'+i] = game.__addTextOnImage('black', bannerContentTxt[index][i], 'bold 14px Arial', 'center', _director );
            this['bannerTxt_'+i].setLocation(bannerTxtInitXPos, 12+(bannerTxtInitYPos*i));
            bannerContainer.addChild(this['bannerTxt_'+i]);
        }
        bannerContainer.addBehavior(pathBehaviour);
		game.lastDisplayedBanner = index;
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
	//=======================================================
	//On clicking the increment/decrement of values
	//=======================================================
	game.incDecHandler = function( obj ) {
		//if paused then don't allow any increment/decrement of values
		var thisBtnId = obj.getId();
		var whichVal = thisBtnId.split('_')[0];
		if(thisBtnId == 'charge_Inc') {
			if( parseFloat(game.chargeValue + game.chargeValueStep) < game.chargeValueMax) {
				game.chargeValue = parseFloat(game.chargeValue) + parseFloat(game.chargeValueStep);
				if(game.chargeValue == 0) {
					game.chargeValue = 1;
				}
			}
		} else if(thisBtnId == 'charge_Dec') {
			if((parseFloat(game.chargeValue) - parseFloat(game.chargeValueStep)) >= game.chargeValueMin) {
				game.chargeValue = parseFloat(game.chargeValue) - parseFloat(game.chargeValueStep);
				if(game.chargeValue == 0) {
					game.chargeValue = -1;
				}
			}
		}
		//update the new values in display
		if(whichVal == 'charge') {
			game.chargeValue = parseFloat(game.chargeValue).toFixed(2);
			game.dashBoardTxt[2].setText( game.chargeValue );
		}
		//do some calculation for change in values
		game.valuesChanged();
	};
	//=======================================================
	//on increment/decrement button pressed
	//=======================================================
	function incDecMDown(e){
		var incDecCount = 0;
		var scene = game.getScene();
		if(incDecTimer != null){
			incDecTimer.cancel();
		}
		incDecTimer = scene.createTimer(
						scene.time,
						Number.MAX_VALUE,
						null,
						function(scene_time, time_time, time_instance){
							incDecCount++
							if(incDecCount%25 == 0){
								game.incDecHandler( e.source );
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
		if(incDecTimer != null){
			incDecTimer.cancel();
		}
	}
})();