//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {

	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'15',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'380',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'388',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'450',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'500',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'550',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'320',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'608',  '0'];


	var bannerImg,
		bannerContainer,
		setBG,
		dashBG;

	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['See how light determines electron emission.', 'Select red or violet, and the intensity...', 'Then press GO.'];

	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['550', '8', '27', '48'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position
		buttonXYPos[buttonXYPos.length] = ['405', '12', '40'];
		buttonXYPos[buttonXYPos.length] = ['478', '12', '40'];

	var bannerContX1Pos = 23,
		bannerContX2Pos	= 23,
		bannerRows = 1,
		bannerCols = 1,
		bannerTxtInitXPos = 135,
		bannerTxtInitYPos = 18;

	var panelHeight = 83;
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
					setFillStyle('#ccffff').
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
		__createBannerContainer();
		game.__createShutterBannerContainer();
		//__createDashBoardTxt();
		__createDashBoardButton();
		__createDashBoardLightButton();

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
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	function __createDashBoardLightButton(){
		game.btnRed = game.__addImageOnScene(game._director.getImage('buttonA'), 2, 4 );
		game.btnRed.setLocation(buttonXYPos[1][0], buttonXYPos[1][1]);
		game.btnRed.setAnimationImageIndex([1]);
		dashBG.addChild(game.btnRed);

		game.btnViolet = game.__addImageOnScene(game._director.getImage('buttonA'), 2, 4 );
		game.btnViolet.setLocation(buttonXYPos[1][0], buttonXYPos[1][2]);
		game.btnViolet.setAnimationImageIndex([3]);
		dashBG.addChild(game.btnViolet);

		game.btnLow = game.__addImageOnScene(game._director.getImage('buttonA'), 2, 4 );
		game.btnLow.setLocation(buttonXYPos[2][0], buttonXYPos[2][1]);
		game.btnLow.setAnimationImageIndex([7]);
		dashBG.addChild(game.btnLow);


		game.btnHigh = game.__addImageOnScene(game._director.getImage('buttonA'), 2, 4 );
		game.btnHigh.setLocation(buttonXYPos[2][0], buttonXYPos[2][2]);
		game.btnHigh.setAnimationImageIndex([5]);
		dashBG.addChild(game.btnHigh);

		game.btnRed.mouseDown = game.redMDown;
		game.btnViolet.mouseDown = game.violetMDown;
		game.btnLow.mouseDown = game.lowMDown;
		game.btnHigh.mouseDown = game.highMDown;


	}
	//=======================================================
	//Create Banner Container
	//=======================================================
function __createBannerContainer(){
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(270, 73);

		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), bannerRows, bannerCols )
		);

		bannerContainer.addChild( bannerImg );
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, 0, 0, false);

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
            this['bannerTxt_'+i] = game.__addTextOnImage('#000', bannerContentTxt[index][i], 'Bold 11px Arial', 'center', game._director );
            this['bannerTxt_'+i].setLocation(bannerTxtInitXPos, 12+(bannerTxtInitYPos*i));
            bannerContainer.addChild(this['bannerTxt_'+i]);
        }
        bannerContainer.addBehavior(pathBehaviour);

		var scaleBehavior = new CAAT.Behavior.ScaleBehavior().
            setCycle(false).
            setDelayTime( 0, 1000 ).
            setValues( 1, 1, 0, 1, 0, 0);

    }

	game.__createShutterBannerContainer = function(){
		game. bannerContainerShutter = new CAAT.Foundation.ActorContainer().setSize(270, 73);

		game.bannerImgShutter = new CAAT.Foundation.Actor().setBackgroundImage(
				new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('shutter'), 1, 1 )
		);

		game.bannerContainerShutter.addChild( game.bannerImgShutter );

		dashBG.addChild( game.bannerContainerShutter );

		game.__bannerDisplayShutter();

	}
	game.__bannerDisplayShutter = function( opt ){
		game.bannerContainerShutter.emptyBehaviorList();
		//shutter down
		var scaleBehavior = new CAAT.Behavior.ScaleBehavior().
            setCycle(false).
            setDelayTime( 0, 1500 ).
            setValues( 1.1, 1.1, 0, 1, 0, 0).
            setPingPong();

		game.bannerContainerShutter
				.setLocation(23, 0)
				.addBehavior(scaleBehavior);


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