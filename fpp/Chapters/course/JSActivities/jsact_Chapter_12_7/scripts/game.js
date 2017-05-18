//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = { 
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	oDashImg : [],
	mainPanel: null,
	rodangleTxt: null,
	rodangleTxt: null,
	axisposTxt : null,
	rodlenTxt: null,
	angleTxt: null,
	forceTxt: null,
	axisdistanceTxt : null,
	pivotImg: null,
	obj_Ypos : 243,
	draggerDot : false,
	drag_firstObj  : false,
	drag_secondObj : false,
	drag_thirdObj  : false,
	drag_fourthObj : false,
	drag_fifthObj  : false,
	drag_sixthObj  : false,
	drag_axisObj   : false,
	lineEndX : 224.5,
	//lineEndX : 223,
	//lineEndY : 526.5,
	lineEndY : 530,
	//upArrowEndX : 526.5,
	upArrowEndX : 530,
	//upArrowEndX : 526,
	oneMetinPix : 170,
	obj_minX : 225,
	obj_maxX : 273,
	max_dargY : 500,
	tot_firang : 0,
	tot_secang : 0,
	tot_thiang : 0,
	tot_fouang : 0,
	tot_fifang : 0,
	tot_sixang : 0,
	torque1 : 0,
	torque2 : 0,
	torque3 : 0,
	torque4 : 0,
	torque5 : 0,
	torque6 : 0,
	Hradial_force1 : 0,inertia1 :0,
	Hradial_force2 : 0,inertia2 :0,
	Hradial_force3 : 0,inertia3 :0,
	Hradial_force4 : 0,inertia4 :0,
	Hradial_force5 : 0,inertia5 :0,
	Hradial_force6 : 0,inertia6 :0,
	gravit_const : 9.8,
	init_angVel : 0,
	isRunning: false,
	offset: 0,
	incDecTimer: null,
	axisPos: 0.50,
	act_0_InMt: 0,
	act_1_InMt: 0,
	act_2_InMt: 0,
	act_3_InMt: 0,
	act_4_InMt: 0,
	act_5_InMt: 0,
	graph_line: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;	
//===============================DRAGGER ON RIGHT SIDE=========================================================//
	game.grayBox = [];
	game.grayBox[game.grayBox.length] = ['point_1', 530, 542, 1, 1, true, 10, 10, '#8f5ca8'];		
	game.grayBox[game.grayBox.length] = ['point_2', 530, 562, 1, 1, true, 10, 10, '#8f5ca8'];
	game.grayBox[game.grayBox.length] = ['point_3', 530, 582, 1, 1, true, 10, 10, '#8f5ca8'];		
	game.grayBox[game.grayBox.length] = ['point_4', 582, 542, 1, 1, true, 10, 10, '#8f5ca8'];
	game.grayBox[game.grayBox.length] = ['point_5', 582, 562, 1, 1, true, 10, 10, '#8f5ca8'];
	game.grayBox[game.grayBox.length] = ['point_6', 582, 582, 1, 1, true, 10, 10, '#8f5ca8'];
	
//===============================CIRCLE ON RIGHT SIDE=========================================================//
	game.midPoint1 =  new CAAT.ShapeActor()
				.setLocation(530, 543)
				.setFillStyle('#9900cc')
				.setSize(10, 10);
	game.midPoint2 =  new CAAT.ShapeActor()
				.setLocation(530, 563)
				.setFillStyle('#9900cc')
				.setSize(10, 10);
	game.midPoint3 =  new CAAT.ShapeActor()
				.setLocation(530, 583)
				.setFillStyle('#9900cc')
				.setSize(10, 10);
	game.midPoint4 =  new CAAT.ShapeActor()
				.setLocation(582, 543)
				.setFillStyle('#9900cc')
				.setSize(10, 10);
	game.midPoint5 =  new CAAT.ShapeActor()
				.setLocation(582, 563)
				.setFillStyle('#9900cc')
				.setSize(10, 10);
	game.midPoint6 =  new CAAT.ShapeActor()
				.setLocation(582, 583)
				.setFillStyle('#9900cc')
				.setSize(10, 10);
//===============================DRAGGER ON LEFT SIDE===============================================================//	
	game.grayBox2 = [];
	game.grayBox2[game.grayBox2.length] = ['point_11', 563- 12.5, (542 - 12.5), 1, 1, true, 25, 25, '#cc00ff' ];		
	game.grayBox2[game.grayBox2.length] = ['point_21', 563- 12.5, (552 - 12.5), 1, 1, true, 25, 25, '#cc00ff' ];
	game.grayBox2[game.grayBox2.length] = ['point_31', 563- 12.5, (582 - 12.5), 1, 1, true, 25, 25, '#cc00ff' ];		
	game.grayBox2[game.grayBox2.length] = ['point_41', 615- 12.5, (542 - 12.5), 1, 1, true, 25, 25, '#cc00ff' ];
	game.grayBox2[game.grayBox2.length] = ['point_51', 615- 12.5, (552 - 12.5), 1, 1, true, 25, 25, '#cc00ff' ];
	game.grayBox2[game.grayBox2.length] = ['point_61', 615- 12.5, (582 - 12.5), 1, 1, true, 25, 25, '#cc00ff' ];
	
//===============================DRAGGER ON AXIS ACTOR===============================================================//	
	game.axisDragger = [];
	game.axisDragger[game.axisDragger.length] = ['axis_drag', 297, 240, 1, 1, true, 16, 16, '#cc00ff' ];

	game.actorImg = [];
	game.actorContainer = [];	
	game.actorContainer1 = [];
	game.axisContainer = [];
	game.Rays = [];
	game.graph_line_x = 230, game.graph_line_y = 248;
	game.graph_line_end_x = 530, game.graph_line_end_y = 248;
			
	var assets = [
					{id:'pivot',      		url:game.actPath+'pivot.gif' },
					{id:'dashBG',      		url:game.sharedPath+'dashPlain.gif' },					
					{id:'dividerPlain',     url:game.sharedPath+'dividerPlain.gif' },		
					{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },	
					{id:'well100',     		url:game.sharedPath+'well100.gif' },	
					{id:'wellright',   		url:game.sharedPath+'wellright.gif' },	
					{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },	
					{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },
					{id:'incrBgBig',   		url:game.sharedPath+'incrBgBig.png' },
					{id:'arrowBlack',   	url:game.sharedPath+'arrowBlack.gif' },					
					{id:'arrowPink',   		url:game.sharedPath+'arrowPink.png' },					
					//Buttons GO, RESET, PAUSE
					{id:'buttons',     		url:game.sharedPath+'buttons.png' },	
					//Banner Image
					{id:'banner',      		url:game.sharedPath+'banner.png' },	
			];
			
// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		750,//Height of the canvas that will be created
		600,//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
	//
	// Timer collapses are fixed by freezing the activity
	//
	CAAT.bindEvent(window, 'blur', function (event) {
		if(game.isRunning) {
			game.pauseBtnMDownHandler();
		}
	}, false);
};
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
game.__gameInitialize = function( director ){
	game._director = director;			
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );	
	//====================================================================================	
	//		Creating Dragger Object After creation of all Containers:
	//========================================================================================
	game.pivotImg = game.__addImageOnScene( game._director.getImage('pivot'), 1, 1 );
	game.pivotImg
		//.setLocation(222 , 250-10);	
		.setLocation(315-8 , 250-10);	
		//.setLocation(297, 240);	
	game._scene.addChild(game.pivotImg );
	game.axisPosInMt = (game.pivotImg.x - 222) * (game.rodLength/300);
	//set axis position text field
	game.oDashTxtArr[5].setText((game.axisPos).toFixed(2));

	game.Axis_actor = game.__addTextOnImage( 'white', 'Axis', 'bold 14px arial', 'left',  game._director );
	game.Axis_actor
			.setLocation(game.pivotImg.x - 5, game.pivotImg.y + 25);	
	game._scene.addChild(game.Axis_actor);

	game.graphScaleFactor = game.__addTextOnImage( 'white', 'Scale = 0.0 m', 'bold 14px arial', 'left',  game._director );
	game.graphScaleFactor
		.setBounds(0, 0, 100, 20)
		.setFillStyle('#8bb9ff')
		.setLocation(550, 475);	
	game._scene.addChild(game.graphScaleFactor);

	//rays
	for(var i=0; i<6; i++) {
		var thisRay = new CAAT.Foundation.ActorContainer().
			setBounds( 0, 0, director.width, director.height );
		thisRay.setGestureEnabled(false);
		game._scene.addChild(thisRay);
		game.Rays.push(thisRay);
	}	
	//game.__graph();
	game.__graphContainer();
	game.__graphContainerLine();
	game.__createMainImgScene();
	game.onload_mouseDrag();
}			
//=====================================================
//Create User Drag Function
//=====================================================
game.__createMainImgScene = function(){	
	//=======================================================
	// Extend actor container's enable drag and use it as userDrag 
	// which draws the rays on every movement
	//=======================================================
	CAAT.Foundation.ActorContainer.extend(
	{
		paint : function(director,time) {
			CAAT.exemplarr.superclass.paint.call(this,director,time);
		},
	
		userDrag: function () {
			this.ax = 0;
			this.ay = 0;
			this.asx = 1;
			this.asy = 1;
			this.ara = 0;
			this.screenx = 0;
			this.screeny = 0;
			var holder;
			
			this.mouseEnter = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = true;
				CAAT.setCursor('move');
			};
	
			this.mouseExit = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = false;
				CAAT.setCursor('default');
			};
	
			this.mouseMove = function (mouseEvent) {
			
			};
			
			this.mouseUp = function (mouseEvent) {
				if(game.isRunning){
					return;
				}			
				//game.onload_mouseDrag();	
				//================================================================================================================
				//To replace Dragger Image on PIVOT image
				//================================================================================================================
				game.axisContainer[0].x = game.pivotImg.x ;
				game.axisContainer[0].y = game.pivotImg.y;
				game.Axis_actor
						.setLocation(game.pivotImg.x - 5, game.pivotImg.y + 25);	
				//=================================================================================================================
				//To replace FIRST arrows at At LINE if condition satisfies else setting at original position :
				//=================================================================================================================
				if(game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX && 
					game.actorContainer[0].x > game.lineEndX && game.actorContainer[0].x < game.lineEndY){
					//enable events the draggable
					game.actorContainer1[0].enableEvents(true);
					game.actorContainer1[0].userDrag();
					game.actorContainer[0].y = game.obj_Ypos;					
					game.midPoint1.setLocation(game.actorContainer[0].x,game.actorContainer[0].y );					
					if(game.ForceVectorArr.indexOf('act_0') == -1){
						game.ForceVectorArr.push('act_0');						
					}
					//store the current x and y value of the add force 1
					game.obj0CX = game.actorContainer[0].x;
					game.obj0CY = game.actorContainer[0].y;
					//If i changing the rod length ie. increment/decrement
					//adjust the force based on the rod length	
					game.act_0_InMt = (game.actorContainer[0].x - 225) * (game.rodLength/300);
				}				
				else{										
					game.actorContainer[0].x = 530;
					game.actorContainer[0].y = 542;
					game.angle1=0;
					game.normalForce1 = 28;
					game.midPoint1.setLocation(game.actorContainer[0].x,game.actorContainer[0].y + 1);
					game.onObjMove(game.actorContainer[0]);
					game.retext_values();
					if(game.ForceVectorArr.indexOf('act_0') != -1){
						game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_0'), 1);
					}
					//disable the draggable
					game.actorContainer1[0].enableEvents(false);			
				}	
				
				//=================================================================================================================
				//To replace SECOND arrows at At LINE if condition satisfies else setting at original position:
				//=================================================================================================================
				if(game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX&& 
					game.actorContainer[1].x > game.lineEndX && game.actorContainer[1].x < game.lineEndY){
					//enable events the draggable
					game.actorContainer1[1].enableEvents(true);
					game.actorContainer1[1].userDrag();
					game.actorContainer[1].y = game.obj_Ypos ;
					game.midPoint2.setLocation(game.actorContainer[1].x,game.actorContainer[1].y);
					if(game.ForceVectorArr.indexOf('act_1') == -1){
						game.ForceVectorArr.push('act_1');
					}
					//store the current x and y value of the add force 2
					game.obj1CX = game.actorContainer[1].x;
					game.obj1CY = game.actorContainer[1].y;
					//If i changing the rod length ie. increment/decrement
					//adjust the force based on the rod length	
					game.act_1_InMt = (game.actorContainer[1].x - 225) * (game.rodLength/300);
				}				
				else{
					game.actorContainer[1].x = 530;
					game.actorContainer[1].y = 562;
					game.angle2=0;
					game.normalForce2 = 28;
					game.midPoint2.setLocation(game.actorContainer[1].x,game.actorContainer[1].y + 1);
					game.onObjMove(game.actorContainer[1]);
					game.retext_values();
					if(game.ForceVectorArr.indexOf('act_1') != -1){
						game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_1'), 1);
					}
					//disable the draggable
					game.actorContainer1[1].enableEvents(false);			
				}	
				//=================================================================================================================
				//To replace THIRD arrows at At LINE if condition satisfies else setting at original position:
				//=================================================================================================================
				if(game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX&& 
					game.actorContainer[2].x > game.lineEndX && game.actorContainer[2].x < game.lineEndY){
					//enable events the draggable
					game.actorContainer1[2].enableEvents(true);
					game.actorContainer1[2].userDrag();
					game.actorContainer[2].y = game.obj_Ypos ;
					game.midPoint3.setLocation(game.actorContainer[2].x,game.actorContainer[2].y);
					if(game.ForceVectorArr.indexOf('act_2') == -1){
						game.ForceVectorArr.push('act_2');
					}
					//store the current x and y value of the add force 3
					game.obj2CX = game.actorContainer[2].x;
					game.obj2CY = game.actorContainer[2].y;
					//If i changing the rod length ie. increment/decrement
					//adjust the force based on the rod length	
					game.act_2_InMt = (game.actorContainer[2].x - 225) * (game.rodLength/300);
				}				
				else{
					game.actorContainer[2].x = 530 ;
					game.actorContainer[2].y = 582;
					game.angle3=0;
					game.normalForce3 = 28;
					game.midPoint3.setLocation(game.actorContainer[2].x,game.actorContainer[2].y + 1);
					game.onObjMove(game.actorContainer[2]);
					game.retext_values();
					if(game.ForceVectorArr.indexOf('act_2') != -1){
						game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_2'), 1);
					}
					//disable the draggable
					game.actorContainer1[2].enableEvents(false);			
				}	
				//=================================================================================================================
				//To replace FOURTH arrows at At LINE if condition satisfies else setting at original position:
				//=================================================================================================================
				if(game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX&& 
					game.actorContainer[3].x > game.lineEndX && game.actorContainer[3].x < game.lineEndY){
					//enable events the draggable
					game.actorContainer1[3].enableEvents(true);
					game.actorContainer1[3].userDrag();
					game.actorContainer[3].y = game.obj_Ypos ;
					game.midPoint4.setLocation(game.actorContainer[3].x,game.actorContainer[3].y );
					if(game.ForceVectorArr.indexOf('act_3') == -1){
						game.ForceVectorArr.push('act_3');
					}
					//store the current x and y value of the add force 4
					game.obj3CX = game.actorContainer[3].x;
					game.obj3CY = game.actorContainer[3].y;
					//If i changing the rod length ie. increment/decrement
					//adjust the force based on the rod length	
					game.act_3_InMt = (game.actorContainer[3].x - 225) * (game.rodLength/300);
				}				
				else{
					game.actorContainer[3].x = 582;
					game.actorContainer[3].y = 542;
					game.angle4=0;
					game.normalForce4 = 28;
					game.midPoint4.setLocation(game.actorContainer[3].x,game.actorContainer[3].y + 1);
					game.onObjMove(game.actorContainer[3]);
					game.retext_values();
					if(game.ForceVectorArr.indexOf('act_3') != -1){
						game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_3'), 1);
					}
					//disable the draggable
					game.actorContainer1[3].enableEvents(false);			
				}	
				//=================================================================================================================
				//To replace FIFTH arrows at At LINE if condition satisfies else setting at original position:
				//=================================================================================================================
				if(game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX&& 
					game.actorContainer[4].x > game.lineEndX && game.actorContainer[4].x < game.lineEndY){
					//enable events the draggable
					game.actorContainer1[4].enableEvents(true);
					game.actorContainer1[4].userDrag();
					game.actorContainer[4].y = game.obj_Ypos ;
					game.midPoint5.setLocation(game.actorContainer[4].x,game.actorContainer[4].y );
					if(game.ForceVectorArr.indexOf('act_4') == -1){
						game.ForceVectorArr.push('act_4');
					}
					//store the current x and y value of the add force 5
					game.obj4CX = game.actorContainer[4].x;
					game.obj4CY = game.actorContainer[4].y;
					//If i changing the rod length ie. increment/decrement
					//adjust the force based on the rod length	
					game.act_4_InMt = (game.actorContainer[4].x - 225) * (game.rodLength/300);
				}				
				else{
					game.actorContainer[4].x = 582;
					game.actorContainer[4].y = 562;
					game.angle5=0;
					game.normalForce5 = 28;
					game.midPoint5.setLocation(game.actorContainer[4].x,game.actorContainer[4].y + 1);
					game.onObjMove(game.actorContainer[4]);
					game.retext_values();
					if(game.ForceVectorArr.indexOf('act_4') != -1){
						game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_4'), 1);
					}
					//disable the draggable
					game.actorContainer1[4].enableEvents(false);			
				}
				//=================================================================================================================
				//To replace SIXTH arrows at At LINE if condition satisfies else setting at original position:
				//=================================================================================================================
				if(game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX&& 
					game.actorContainer[5].x > game.lineEndX && game.actorContainer[5].x < game.lineEndY){
					//enable events the draggable
					game.actorContainer1[5].enableEvents(true);
					game.actorContainer1[5].userDrag();
					game.actorContainer[5].y = game.obj_Ypos ;
					game.midPoint6.setLocation(game.actorContainer[5].x,game.actorContainer[5].y );
					if(game.ForceVectorArr.indexOf('act_5') == -1){
						game.ForceVectorArr.push('act_5');
					}
					//store the current x and y value of the add force 6
					game.obj5CX = game.actorContainer[5].x;
					game.obj5CY = game.actorContainer[5].y;
					//If i changing the rod length ie. increment/decrement
					//adjust the force based on the rod length	
					game.act_5_InMt = (game.actorContainer[5].x - 225) * (game.rodLength/300);
				}				
				else{
					game.actorContainer[5].x = 582;
					game.actorContainer[5].y = 582;
					game.angle6=0;
					game.normalForce6 = 28;
					game.midPoint6.setLocation(game.actorContainer[5].x,game.actorContainer[5].y + 1);
					game.onObjMove(game.actorContainer[5]);
					game.retext_values();
					if(game.ForceVectorArr.indexOf('act_5') != -1){
						game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_5'), 1);
					}
					//disable the draggable
					game.actorContainer1[5].enableEvents(false);			
				}
				game.onObjMove(this);	
				this.__d_ax = -1;
				this.__d_ay = -1;
			};
			
			this.mouseDown = function (mouseEvent) {
				if(game.isRunning){
					return;
				}		
				if(this.id == 'bc_0' || this.id == 'cc_0'){
					//console.log('1');
					game.drag_firstObj = true;
					game.drag_secondObj= false;
					game.drag_thirdObj = false;
					game.drag_fourthObj= false;		
                    game.drag_fifthObj = false;
                    game.drag_sixthObj = false;	
					game.drag_axisObj  = false;
				}
				if(this.id == 'bc_1' || this.id == 'cc_1'){
					//console.log('2');
					game.drag_firstObj = false;
					game.drag_secondObj= true;
					game.drag_thirdObj = false;
					game.drag_fourthObj= false;		
                    game.drag_fifthObj = false;
                    game.drag_sixthObj = false;	
					game.drag_axisObj  = false;
				}
				if(this.id == 'bc_2' || this.id == 'cc_2'){
					game.drag_firstObj = false;
					game.drag_secondObj= false;
					game.drag_thirdObj = true;
					game.drag_fourthObj= false;		
                    game.drag_fifthObj = false;
                    game.drag_sixthObj = false;	
					game.drag_axisObj  = false;
				}
				if(this.id == 'bc_3' || this.id == 'cc_3'){
					game.drag_firstObj = false;
					game.drag_secondObj= false;
					game.drag_thirdObj = false;
					game.drag_fourthObj= true;		
                    game.drag_fifthObj = false;
                    game.drag_sixthObj = false;	
					game.drag_axisObj  = false;
				}
				if(this.id == 'bc_4' || this.id == 'cc_4'){
					game.drag_firstObj = false;
					game.drag_secondObj= false;
					game.drag_thirdObj = false;
					game.drag_fourthObj= false;		
                    game.drag_fifthObj = true;
                    game.drag_sixthObj = false;	
					game.drag_axisObj  = false;
				}
				if(this.id == 'bc_5' || this.id == 'cc_5'){
					game.drag_firstObj = false;
					game.drag_secondObj= false;
					game.drag_thirdObj = false;
					game.drag_fourthObj= false;		
                    game.drag_fifthObj = false;
                    game.drag_sixthObj = true;
					game.drag_axisObj  = false;					
				}
				if(this.id == 'axis_0'){
					game.drag_firstObj = false;
					game.drag_secondObj= false;
					game.drag_thirdObj = false;
					game.drag_fourthObj= false;		
                    game.drag_fifthObj = false;
                    game.drag_sixthObj = false;
					game.drag_axisObj  = true;			
				}					
			}
			this.mouseDrag = function (mouseEvent) {
				if(game.isRunning){
					return;
				}
				var pt;
				pt = this.modelToView(new CAAT.Math.Point(mouseEvent.x, mouseEvent.y));
				//this.parent.setZOrder(this, Number.MAX_VALUE);
				this.parent.viewToModel(pt);
				
				if (this.__d_ax === -1 || this.__d_ay === -1) {
					
					this.x = pt.x - this.width/2;
					this.y = pt.y - this.height/2;
					this.__d_ax = pt.x;
					this.__d_ay = pt.y;
					this.__d_asx = this.scaleX;
					this.__d_asy = this.scaleY;
					this.__d_ara = this.rotationAngle;
					this.__d_screenx = mouseEvent.screenPoint.x;
					this.__d_screeny = mouseEvent.screenPoint.y;
				}
				
				this.x += pt.x - this.__d_ax;
				this.y += pt.y - this.__d_ay;
				
				this.__d_ax = pt.x;
				this.__d_ay = pt.y;

				//Calling User Drag Method:
				game.onObjMove( this );
					
			};
	
			return this;
		},
	},
	null,
	"CAAT.exemplarr"
	);
	
	//Adding Small Circles:
	game._scene.addChild(game.midPoint1);
	game._scene.addChild(game.midPoint2);
	game._scene.addChild(game.midPoint3);
	game._scene.addChild(game.midPoint4);
	game._scene.addChild(game.midPoint5);
	game._scene.addChild(game.midPoint6);
	
	
	for(var i=0;i<game.grayBox.length;i++){
		this['oActorContainer_'+i] = new CAAT.exemplarr()
			.setBounds( 	
				game.grayBox[i][1], 
				game.grayBox[i][2], 
				game.grayBox[i][6], 
				game.grayBox[i][7]
			)
			.setId('bc_'+i)
			.setFillStyle(game.grayBox[i][8])
			.setScale( 1, 1 );

		this['oActorContainer_'+i]
			.setLocation(parseFloat(game.grayBox[i][1]), parseFloat(game.grayBox[i][2]));
						
		if(game.grayBox[i][5]) {
			this['oActorContainer_'+i].userDrag();
			this['oActorContainer_'+i].setAlpha('0');
		}
		game._scene.addChild( this['oActorContainer_'+i] );
		game.actorContainer.push( this['oActorContainer_'+i] );
		
	}
	
		for(var i=0;i<game.grayBox2.length;i++){
		this['oActorContainer_'+i] = new CAAT.exemplarr()
			.setBounds( 	
				game.grayBox2[i][1], 
				game.grayBox2[i][2], 
				game.grayBox2[i][6], 
				game.grayBox2[i][7]
			)
			.setId('cc_'+i)
			.setFillStyle(game.grayBox2[i][8])
			.setScale( 1, 1 );

		this['oActorContainer_'+i]
			.setLocation(parseFloat(game.grayBox2[i][1]), parseFloat(game.grayBox2[i][2]));
						
		 if((game.grayBox2[i][5])) {
			// this['oActorContainer_'+i].userDrag();
			 this['oActorContainer_'+i].setAlpha('0');
			 
		 }
		game._scene.addChild( this['oActorContainer_'+i] );
		game.actorContainer1.push( this['oActorContainer_'+i] );

	}
//================================================================================================================
//				>DRAGGER OBJECT ON AXIS PIVOT<
//================================================================================================================
		for(var i=0;i<game.axisDragger.length;i++){
		this['oActorContainer_'+i] = new CAAT.exemplarr()
			.setBounds( 	
				game.axisDragger[i][1], 
				game.axisDragger[i][2], 
				game.axisDragger[i][6], 
				game.axisDragger[i][7]
			)
			.setId('axis_'+i)
			.setFillStyle(game.axisDragger[i][8])
			.setScale( 1, 1 );

		this['oActorContainer_'+i]
			.setFillStyle('#00F')
			.setLocation(parseFloat(game.axisDragger[i][1]), parseFloat(game.axisDragger[i][2]));
						
		if(game.axisDragger[i][5]) {
			this['oActorContainer_'+i].userDrag();
			this['oActorContainer_'+i].setAlpha('0');
		}
		game._scene.addChild( this['oActorContainer_'+i] );
		game.axisContainer.push( this['oActorContainer_'+i] );		
	}
		
	game.__createIncDecButton();
	game.__createDashBoardButton();
		
	}
game.__graphContainer = function(){	
	game.graph_actor = new CAAT.Foundation.ActorContainer().							
							setBounds( 0, 0, game._director.width, game._director.height).							
							setClip(false)
							//.setFillStyle('#F00');
	
	game.graphScale();
	game.mainPanel.addChild(game.graph_actor);
}

game.__graphContainerLine = function(){	
	game.graph_line = new CAAT.Foundation.ActorContainer().							
							setBounds( 0, 0, game._director.width, game._director.height).							
							setClip(false)
							//.setFillStyle('#F00');							
	
	game.graph_line.paint = function(director, time){	
		var canvas = director.ctx;
		canvas.beginPath();
		canvas.lineWidth = 2;
		canvas.strokeStyle = '#000';
		canvas.moveTo( game.graph_line_x, game.graph_line_y);
		canvas.lineTo( game.graph_line_end_x, game.graph_line_end_y);			
		canvas.stroke();
		canvas.closePath();
	}	
	game.mainPanel.addChild(game.graph_line);	
}
	