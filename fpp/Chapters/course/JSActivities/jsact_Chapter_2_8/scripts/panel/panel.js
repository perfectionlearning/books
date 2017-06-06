//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {

	//dash board elements
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   	0,    0];//image_id, image_X_Position, image_Y_Position
		dashBoardEle[dashBoardEle.length] = ['endleft',     1,    0];
		dashBoardEle[dashBoardEle.length] = ['endright',    798,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    600,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    500,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    400,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    350,  0];
		dashBoardEle[dashBoardEle.length] = ['wellleft2',   340,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright2',  700,  0];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  	490,  10];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  	490,  30];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  	490,  50];

	var inc_button = [];
		inc_button[inc_button.length] = [540, 8];//x and y pos of the increment button
		inc_button[inc_button.length] = [575, 8];
		inc_button[inc_button.length] = [540, 35];
		inc_button[inc_button.length] = [575, 35];
		inc_button[inc_button.length] = [540, 62];
		inc_button[inc_button.length] = [575, 62];

	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Velocity', 'bold 13px arial', 'left', 100, 15, 'vel_txt'];
		//dashBoardTxt[dashBoardTxt.length] = ['Acceleration', 'bold 13px arial', 'left', 100, 35, 'acc_txt'];
		dashBoardTxt[dashBoardTxt.length] = [' ', 'bold 13px arial', 'left', 100, 35, 'acc_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['--', 	'bold 14px arial', 'left', 220, 15, 'vel_val']; //velocity value
		//dashBoardTxt[dashBoardTxt.length] = ['--', 	'bold 14px arial', 'left', 220, 35, 'acc_val']; //acceleration value
		dashBoardTxt[dashBoardTxt.length] = [' ', 	'bold 14px arial', 'left', 220, 35, 'acc_val']; //acceleration value
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 'bold 13px arial', 'left', 285, 15, 'm_s_txt'];
		//dashBoardTxt[dashBoardTxt.length] = ['m/s', 'bold 13px arial', 'left', 285, 35, 'm_s_2_txt'];
		dashBoardTxt[dashBoardTxt.length] = [' ', 'bold 13px arial', 'left', 285, 35, 'm_s_2_txt'];
		//dashBoardTxt[dashBoardTxt.length] = ['2', 'bold 11px arial', 'left', 308, 32, '2_txt'];
		dashBoardTxt[dashBoardTxt.length] = [' ', 'bold 11px arial', 'left', 308, 32, '2_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['Velocity, 0-3 s', 'bold 13px arial', 'left', 365, 13, 'vel_0-3_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['Velocity, 3-7 s', 'bold 13px arial', 'left', 365, 40, 'vel_3-7_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['Velocity, 7-10 s', 'bold 13px arial', 'left', 365, 67, 'vel_7-10_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 'bold 13px arial', 'left', 503, 13, 'vel_0-3_ms'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 'bold 13px arial', 'left', 503, 40, 'vel_3-7_ms'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 'bold 13px arial', 'left', 503, 67, 'vel_7-10_ms'];
		dashBoardTxt[dashBoardTxt.length] = ['0', 'bold 13px arial', 'left', 475, 13, 'vel_val_1'];	//velocity value in 0-3
		dashBoardTxt[dashBoardTxt.length] = ['0', 'bold 13px arial', 'left', 475, 40, 'vel_val_2'];	//velocity value in 3-7
		dashBoardTxt[dashBoardTxt.length] = ['0', 'bold 13px arial', 'left', 475, 67, 'vel_val_3'];	//velocity value in 7-10

	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['The ball moves at a constant velocity from 0 to 3', 'seconds, 3 to 7 seconds, and 7 to 10 seconds. Set', 'the three velocites to match the graph and press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations!', 'You matched the graph.'];
		bannerContentTxt[bannerContentTxt.length] = ['You need to try again.', 'Press RESET to start over.'];


	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['620', '6', '31', '56'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position

	game.textActor = ['oActorTxt_0', 'oActorTxt_1', 'oActorTxt_2', 'oActorTxt_3', 'oActorTxt_4', 'oActorTxt_5', 'oActorTxt_6', 'oActorTxt_7', 'oActorTxt_8', 'oActorTxt_9', 'oActorTxt_10', 'oActorTxt_11', 'oActorTxt_12', 'oActorTxt_13', 'oActorTxt_14', 'oActorTxt_15'];

	var bannerContainer;
	game.panelHeight = 100;
	game.vel_1 = game.vel_2 = game.vel_3 = 0;
	game.setBG;
	var stepVal = 1;
	var maxVal = 50;
	var minVal = -50;
	var timer_incdec = null;
	var staContainer;
	var bannerContX1Pos = 0,
		bannerContX2Pos = 0;
	var bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 17;
	var graph_height = 360, graph_width = 600, graph_cell_height = graph_height/20;
	var graph_cell_width = graph_width/10;
	var graph_ball_height = 20, graph_ball_width = 700;
	var graph_ball_cell_width = graph_ball_width/20;
	game.int_pos = 338;
	game.plotGraphActor, game.plotGraphCanvas;
	var bannerImg;
	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.__createPanels = function(director, scene)
	{
		var main = createMain(director.width, director.height - game.panelHeight, director);
			main.
				setLocation(0, 0);
		scene.addChild(main);

		var panel = createPanel(director.width, director.height - game.panelHeight, director);
			panel.
				  setLocation(0, 500);
		scene.addChild(panel);

		return main;
	}

	function createMain(pw, ph, actor){
		var setBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setFillStyle('#ffffff').
					setClip(true);
		game.setBG = setBG; //intialize to global variable

		game.graph_actor = new CAAT.Foundation.ActorContainer().
							setPreferredSize(graph_width, graph_height).
							setBounds( 75, 20, graph_width, graph_height).
							setFillStyle('#ffffff').
							setClip(false);

		create_graph(game.graph_actor, '#d3d3d3')
		create_vertical_Points_Graph(game.graph_actor);



		game.plotGraphCanvas = document.createElement('canvas');
			game.plotGraphCanvas.width = graph_width;
			game.plotGraphCanvas.height = graph_height;
			game.plotGraphCanvas.x = 0;
			game.plotGraphCanvas.y = 0;

		game.plotGraphActor = new CAAT.Foundation.ActorContainer().
							setPreferredSize(graph_width, graph_height).
							setBounds( 0, 0, graph_width, graph_height).
							setBackgroundImage(game.plotGraphCanvas).
							setClip(true);
		game.graph_actor.addChild(game.plotGraphActor);

		var graph_ball_actor = new CAAT.Foundation.ActorContainer().
							setPreferredSize(graph_ball_width, graph_ball_height).
							setBounds(25, 450, graph_ball_width, graph_ball_height).
							setFillStyle('red').
							setClip(false);
		create_ball_distance_pointer(graph_ball_actor);
		create_ball_horizontal_Points_Graph(graph_ball_actor);

		setBG.addChild(game.graph_actor);
		create_horizontal_Points_Graph(setBG);
		setBG.addChild(graph_ball_actor);

		addImageonScene(graph_ball_actor);

		//__createBannerContainer(setBG); //commmented for hide the banner
		return setBG;
	}

	function addImageonScene(actor){
		var _director = game.getDirector();
		game.ballActor = game.__addImageOnScene(_director.getImage('ball'), 1, 1 );
			game.ballActor.
				setLocation(game.int_pos, -30);
			actor.addChild(game.ballActor);
	}

	function create_graph(actor, color) {

		actor.paint= function(director, time) {
			var i,j,ctx;
			ctx= director.ctx;

			ctx.beginPath();
			for( j=0.5; j<actor.width; j+= graph_cell_width ) {
				ctx.moveTo(j, 0);
				ctx.lineTo(j, actor.height);
			}

			for( i=0.5; i<actor.height; i+= graph_cell_height ) {
				ctx.moveTo(0, i);
				ctx.lineTo(actor.width, i);
			}

			//this to complete the graph
			ctx.moveTo(0, graph_height);
			ctx.lineTo(actor.width, graph_height);
			ctx.moveTo(actor.width, graph_height);
			ctx.lineTo(actor.width, 0);
			ctx.strokeStyle= color;
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle= '#000000';
			ctx.moveTo(0, 0);
			ctx.lineTo(0, graph_height);
			ctx.moveTo(0, (graph_height/2)-0.5);
			ctx.lineTo(actor.width, (graph_height/2)-0.5);
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle= 'red';
			ctx.lineWidth = 2;
			ctx.lineJoin = 'round';
			ctx.lineCap = 'round';
			ctx.moveTo(0, (graph_height/2));
			ctx.lineTo(graph_cell_width * 3, graph_cell_height);
			ctx.lineTo(graph_cell_width * 7, graph_cell_height * 19);
			ctx.lineTo(graph_cell_width * 10, (graph_height/2));
			ctx.stroke();
		}
	}

	function create_ball_distance_pointer(actor){

		actor.paint= function(director, time) {
			var i,j,ctx;
			ctx= director.ctx;

			ctx.beginPath();
			for( j=0.5; j<actor.width; j+= graph_ball_cell_width) {
				ctx.moveTo(j, 0);
				ctx.lineTo(j, actor.height);
			}
			for( i=0.5; i<actor.height; i+= graph_ball_height) {
				ctx.moveTo(0, i);
			}

			//this to complete the graph
			ctx.moveTo(actor.width, graph_ball_height);
			ctx.lineTo(actor.width, 0);
			ctx.strokeStyle= '#000000';
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle= '#000000';
			ctx.lineWidth = 2.5;
			ctx.lineJoin = 'round';
			ctx.lineCap = 'round';
			ctx.moveTo(1, graph_ball_height/2);
			ctx.lineTo(actor.width, graph_ball_height/2);
			ctx.stroke();
		}
	}

	function create_ball_horizontal_Points_Graph(actor){
		var _director = game.getDirector();
		var temp = -100;
		for(var i=0; i<=5; i++){
			var graph_text = game.__addTextOnImage( 'black', temp.toFixed(1) + ' m', 'bold 14px Arial', 'center', _director );
			temp = temp + 50;
			graph_text
				.setLocation((graph_ball_cell_width * 5 * i)+5, graph_ball_height);
			actor.addChild(graph_text);
		}
	}

	function create_horizontal_Points_Graph(actor){
		var _director = game.getDirector();
		for(var i=1; i<=10; i++){
			var graph_text = game.__addTextOnImage( 'black', i.toFixed(1), 'bold 14px Arial', 'center', _director );
			graph_text
				.setLocation((graph_cell_width * i)+graph_cell_width+16, (graph_height/2)+20)
				.setId(graph_text+[i]);
			actor.addChild(graph_text);
		}
		var graph_time_text = game.__addTextOnImage( 'black', 't', 'bold italic 14px Arial', 'center', _director );
		graph_time_text
				.setLocation((graph_width)+108, (graph_height/2)+30);
		actor.addChild(graph_time_text);

		var t2 = game.__addTextOnImage( 'black', '(s)', 'bold 14px Arial', 'center', _director );
		t2.setLocation((graph_width)+124, (graph_height/2)+30);
		actor.addChild(t2);
	}

	function create_vertical_Points_Graph(actor){
		var _director = game.getDirector();
		var temp = 100;
		for(var i=0; i<=10; i++){
			var graph_text = game.__addTextOnImage( 'black', temp.toFixed(1), 'bold 14px Arial', 'right', _director );
			temp = temp - 20;
			graph_text
				.setLocation(-10, (graph_cell_height * i * 2)-7);
			actor.addChild(graph_text);
		}
		var graph_dist_text = game.__addTextOnImage( 'black', 'x', 'bold italic 14px Arial', 'center', _director );
		graph_dist_text
				.setLocation(-57, (graph_cell_height)-12);
		actor.addChild(graph_dist_text);

		var t2 = game.__addTextOnImage( 'black', '(m)', 'bold 14px Arial', 'center', _director );
		t2.setLocation(-57+20, (graph_cell_height)-12);
		actor.addChild(t2);
	}

	function createPanel( pw, ph, director ){

		var dashBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setClip(false);

		//create bottom panel
		for(var i=0; i<dashBoardEle.length; i++){
			var oActor = game.__addImageOnScene(director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			dashBG.addChild(oActor);
		}
		__createDashBoardButton( dashBG );
		__createIncDecButton( dashBG );
		__createDashBoardTxt( dashBG );
		return dashBG;
	}

	//=======================================================
	//Create Banner Container
	//=======================================================
	game.__createBannerContainer = function (){
		var _director = game.getDirector();
		game.staContainer = new CAAT.Foundation.ActorContainer().
							setSize(400, 70);
				game.staContainer.
							setLocation(360, 0).
							setClip(true);
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize(_director.getImage('banner'), 1, 3)
		);

		game.getbannerContainer = bannerContainer;

		bannerContainer.addChild(bannerImg);
		game.mainPanel.addChild(game.staContainer);
		game.staContainer.addChild(bannerContainer);
		//game.__bannerDisplay(0, -70, 0, true);

		game.__bannerDisplay(0, 0, 0, -70, false);
	}

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
            this['bannerTxt_'+i].setLocation(bannerTxtInitXPos, 8+(bannerTxtInitYPos*i));
            bannerContainer.addChild(this['bannerTxt_'+i]);
        }
        bannerContainer.addBehavior(pathBehaviour);
    }

	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	function __createDashBoardButton( dashBG ){
		var _director = game.getDirector();

		// Buttons creation
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(_director.getImage('buttons'), 2, 3);

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
	//Create Dashboard Text
	//=====================================================
	function __createDashBoardTxt(dashBG){
		var _director = game.getDirector();

		//Create game.textActor
		for(var i=0; i<dashBoardTxt.length; i++){
		game.textActor[i] = game.__addTextOnImage('#ffffff', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
			game.textActor[i]
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
				.setId(dashBoardTxt[i][5]);
			game.getVel = function(){return game.textActor[2]};
			game.getAcc = function(){return game.textActor[3]};
			dashBG.addChild(game.textActor[i]);
		}
	}

	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(dashBG){
		var _director = game.getDirector();
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( _director.getImage('incre_decre_btn'), 1, 2);

		var vel_inc_butt1 = new CAAT.Foundation.Actor().
								setId('velocity_Inc_1').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){

								}).setLocation(inc_button[0][0], inc_button[0][1]);
		var vel_dec_butt1 = new CAAT.Foundation.Actor().
								setId('velocity_dec_1').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){

								}).setLocation(inc_button[1][0], inc_button[1][1]);

		var vel_inc_butt2 = new CAAT.Foundation.Actor().
								setId('velocity_Inc_2').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){

								}).setLocation(inc_button[2][0], inc_button[2][1]);
		var vel_dec_butt2 = new CAAT.Foundation.Actor().
								setId('velocity_dec_2').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){

								}).setLocation(inc_button[3][0], inc_button[3][1]);
		var vel_inc_butt3 = new CAAT.Foundation.Actor().
								setId('velocity_Inc_3').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){

								}).setLocation(inc_button[4][0], inc_button[4][1]);
		var vel_dec_butt3 = new CAAT.Foundation.Actor().
								setId('velocity_dec_3').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){

								}).setLocation(inc_button[5][0], inc_button[5][1]);

		vel_inc_butt1.mouseDown = incdec_mousedown_handler;
		vel_dec_butt1.mouseDown = incdec_mousedown_handler;
		vel_inc_butt2.mouseDown = incdec_mousedown_handler;
		vel_dec_butt2.mouseDown = incdec_mousedown_handler;
		vel_inc_butt3.mouseDown = incdec_mousedown_handler;
		vel_dec_butt3.mouseDown = incdec_mousedown_handler;
		
		vel_inc_butt1.mouseUp = function() {
			if(timer_incdec)	timer_incdec.cancel();
			//CAAT.setCursor("default");	
		}
		vel_dec_butt1.mouseUp = function() {			
			if(timer_incdec)	timer_incdec.cancel();
			//CAAT.setCursor("default");	
		}
		vel_inc_butt2.mouseUp = function() {
			if(timer_incdec)	timer_incdec.cancel();
			//CAAT.setCursor("default");	
		}
		vel_dec_butt2.mouseUp = function() {			
			if(timer_incdec)	timer_incdec.cancel();
			//CAAT.setCursor("default");	
		}
		vel_inc_butt3.mouseUp = function() {
			if(timer_incdec)	timer_incdec.cancel();
			//CAAT.setCursor("default");	
		}
		vel_dec_butt3.mouseUp = function() {			
			if(timer_incdec)	timer_incdec.cancel();
			//CAAT.setCursor("default");	
		}
		
		
		dashBG.addChild(vel_inc_butt1);
		dashBG.addChild(vel_dec_butt1);
		dashBG.addChild(vel_inc_butt2);
		dashBG.addChild(vel_dec_butt2);
		dashBG.addChild(vel_inc_butt3);
		dashBG.addChild(vel_dec_butt3);
		
		vel_inc_butt1.mouseDrag = function() {
			incdec_mouseup_handler(window.event);
		}
		vel_dec_butt1.mouseDrag = function() {
			incdec_mouseup_handler(window.event);
		}
		vel_inc_butt2.mouseDrag = function() {
			incdec_mouseup_handler(window.event);
		}
		vel_dec_butt2.mouseDrag = function() {
			incdec_mouseup_handler(window.event);
		}
		vel_inc_butt3.mouseDrag = function() {
			incdec_mouseup_handler(window.event);
		}
		vel_dec_butt3.mouseDrag = function() {
			incdec_mouseup_handler(window.event);
		}
		
		//on mouse exit from the button do the same thing as that of mouse up
		vel_inc_butt1.mouseExit = function() {
			if(timer_incdec)	timer_incdec.cancel();
			CAAT.setCursor("default");
		};
		vel_dec_butt1.mouseExit = function() {
			if(timer_incdec)	timer_incdec.cancel();
			CAAT.setCursor("default");
		};
		vel_inc_butt2.mouseExit = function() {
			if(timer_incdec)	timer_incdec.cancel();
			CAAT.setCursor("default");
		};
		vel_dec_butt2.mouseExit = function() {
			if(timer_incdec)	timer_incdec.cancel();
			CAAT.setCursor("default");
		};
		vel_inc_butt3.mouseExit = function() {
			if(timer_incdec)	timer_incdec.cancel();
			CAAT.setCursor("default");
		};
		vel_dec_butt3.mouseExit = function() {
			if(timer_incdec)	timer_incdec.cancel();
			CAAT.setCursor("default");
		};		
	}

	var counter = 0;
	//=======================================================
	//Mouse handler for increase and decrease
	//=======================================================
	function incdec_mousedown_handler(e){
		var actor = e.source;
		var __scene = game.getScene();
		if(timer_incdec!=null){
			timer_incdec.cancel();
		}
		
		game.incDecHandler(actor);
		
		
		timer_incdec = __scene.createTimer(
		__scene.time, //start time
		Number.MAX_VALUE, //Duration
		function(scene_time, time_time, time_instance){	//callback_timeout
			//
		},
		function(scene_time, time_time, time_instance){	//callback_tick
			counter++;
			if(counter%10 == 0){
				game.incDecHandler(actor);
				counter = 0;
			}
			//actor.mouseUp = incdec_mouseup_handler;
		},
		function(scene_time, time_time, time_instance){ //callback cancel
			if(counter > 0) incdec_mouseup_handler(window.event);
		});
	}

	function incdec_mouseup_handler(e){
		counter = 0;
		if(timer_incdec!=null){
			timer_incdec.cancel();
		}
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
	//Image Dispaly container
	//=======================================================
	game.__addImageOnScene = function( img , _rows, _cols){
		return new CAAT.Foundation.Actor().
			setBackgroundImage(
				new CAAT.Foundation.SpriteImage().initialize(img, _rows, _cols)
			)
	}

	//=======================================================
	//On clicking the increment/decrement of values
	//=======================================================
	game.incDecHandler = function(obj) {
		if(game.isReset)
		{
			var thisBtnId = obj.getId();
			var whichVal = thisBtnId.split('_')[2];
			if(whichVal == 1) {
				game.vel_1 = incdec_Cond(thisBtnId, whichVal, game.vel_1);
				game.textActor[13].setText(game.vel_1.toFixed(0));
			} else if(whichVal == 2) {
				game.vel_2 = incdec_Cond(thisBtnId, whichVal, game.vel_2);
				game.textActor[14].setText(game.vel_2.toFixed(0));
			} else if(whichVal == 3) {
				game.vel_3 = incdec_Cond(thisBtnId, whichVal, game.vel_3);
				game.textActor[15].setText(game.vel_3.toFixed(0));
			}
		}
	}

	function incdec_Cond(id, but_val, val){

		if(id == 'velocity_Inc_'+but_val) {
			if((val + stepVal) <= maxVal) {
				val = val + stepVal;
			}
			else if((val + stepVal) > maxVal) {
				val = maxVal;
			}
			else{
				val = 0;
			}
		} else if(id == 'velocity_dec_'+but_val) {
			if((val - stepVal) >= minVal) {
				val = val - stepVal;
			}
			else if(((val - stepVal) < minVal)){
				val = minVal;
			}
			else{
				val = 0;
			}
		}
		return val;
	}

})();
