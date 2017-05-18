//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules

var game = { 
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	massActors:[],
	massesArray:[],
	dropFlag:false,
	lineContainers:[],
	eValueArray:[],
	tempForceArray:[],
	massContainers:[],
	dragFlag:false,
	rTxt: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	game.mainEleImg =[];	
		game.mainEleImg[game.mainEleImg.length] = ['grid-600',  	20,   0,false];
		game.mainEleImg[game.mainEleImg.length] = ['red', 			447, 530,true];
		game.mainEleImg[game.mainEleImg.length] = ['red', 			487, 530,true];
		game.mainEleImg[game.mainEleImg.length] = ['red', 			527, 530,true];
		game.mainEleImg[game.mainEleImg.length] = ['blue', 			567, 525,true];
		game.mainEleImg[game.mainEleImg.length] = ['green', 		617, 527,true];//image_id, image_X_Position, image_Y_Position
		var assets = [						
			{id:'dashBG',      		url:game.sharedPath+'dash.gif' },	
			//dashboard Image
			{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
			{id:'well100',     		url:game.sharedPath+'well100.gif' },
			{id:'wellright',   		url:game.sharedPath+'wellright.gif' },
			{id:'blue',   			url:game.sharedPath+'blue.gif' },	
			{id:'green',   			url:game.sharedPath+'green.gif' },	
			{id:'red',   			url:game.sharedPath+'red.gif' },	
			
			//Banner Image
			{id:'banner',     		url:game.sharedPath+'InDash.png' },
			{id:'buttons',     		url:game.sharedPath+'buttons.png' },
		];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);			
};	
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}	
game.__gameInitialize = function( director ){
	game._director = director;			
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );	
	game.bgContainer = new CAAT.Foundation.ActorContainer().setSize(game._director.width, game._director.height);
	game._scene.addChild(game.bgContainer);
	//add main panel image
	game.__graphContainer();
	game.__createLineContainer(game.bgContainer);
	game.__createDashBoardButton( game.bgContainer );
	game.__createMainImgScene(game.bgContainer,1,game.mainEleImg.length);
	game.__buildElectricField(game.bgContainer);
	//CAAT.loop(60);
}
game.__createMainImgScene = function(container,startIndex,endIndex){
	CAAT.Foundation.Actor.extend(
    {
        paint : function(director,time) {
 		CAAT.exemplarr.superclass.paint.call(this,director,time);
        },
        defaultXPos:-1,
        defaultYPos:-1,
        reSetPosition: function(){
            this.setRotationAnchored(0, 0, 0 )
            this.setLocation(this.defaultXPos, this.defaultYPos);
            return this;
        },
        setDefaultPos: function(x, y){
            this.setLocation(x, y);
            this.defaultXPos = x;
            this.defaultYPos = y;
            return this;
        },
        userDrag: function (index) {
            this.ax = 0;
            this.ay = 0;
            this.asx = 1;
            this.asy = 1;
            this.ara = 0;
            this.screenx = 0;
            this.screeny = 0;
            var holder;
            var offsetX=0;
            var offsetY=0;
            this.mouseEnter = function (mouseEvent) {
                this.__d_ax = -1;
                this.__d_ay = -1;
                this.pointed = true;
                if(!game.dragFlag || this.y>485)
                {
                	CAAT.setCursor('move');
                }
	            else
	            {
	            	CAAT.setCursor('default');
	            }
             };
            this.mouseExit = function (mouseEvent) {
                this.__d_ax = -1;
                this.__d_ay = -1;
                this.pointed = false;
                CAAT.setCursor('default');
             };
         
          	this.mouseMove = function (mouseEvent) {};
            this.mouseUp = function (mouseEvent) {
                this.__d_ax = -1;
                this.__d_ay = -1;
              
                if(this.y>485)
                {
		            if(index==1)
		            {
		            	game.massActors[0].x=447;
		            	game.massActors[0].y=530;
		            	this.x=447;
		            	this.y=530;
		            	game.lineContainers[0].visible=false;
                		game.eValueArray[0].visible=false;
		            }
		            else if(index==2)
		            {
		            	game.massActors[1].x=487;
		            	game.massActors[1].y=530;
		            	this.x=487;
		            	this.y=530;
		            	game.lineContainers[1].visible=false;
                		game.eValueArray[1].visible=false;
		            }
		            else if(index==3)
		            {
		            	game.massActors[2].x=527;
		            	game.massActors[2].y=530;
		            	this.x=527;
		            	this.y=530;
		            	game.lineContainers[2].visible=false;
                		game.eValueArray[2].visible=false;
		            }
		            else if(index==4)
		            {
		            	game.massActors[3].x=567;
		            	game.massActors[3].y=525;
		            	this.x=567;
		            	this.y=525;
		            	game.lineContainers[3].visible=false;
                		game.eValueArray[3].visible=false;
		            }
		            else if(index==5)
		            {
		            	game.massActors[4].x=617;
		            	game.massActors[4].y=527;
		            	this.x=617;
		            	this.y=527;
		            	game.lineContainers[4].visible=false;
                		game.eValueArray[4].visible=false;
		            }
            		for(var i=0;i<game.massesArray.length;i++)
            		{
            			if('mass'+index==game.massesArray[i][1])
	            		{
	            			game.massesArray.splice(i,1);
	            		}	
            		}
            		
            		if(game.massesArray.length>1)
					{
						game.generateForceArray();
					}
					else
					{
						for(var i=0;i<game.massesArray.length;i++)
						{
							if(game.massesArray[i][1]=='mass1')
							{
								game.eValueArray[0].visible=false;
								game.lineContainers[0].visible=false;
							}
							else if(game.massesArray[i][1]=='mass2')
							{
								game.eValueArray[1].visible=false;
								game.lineContainers[1].visible=false;
							}
							else if(game.massesArray[i][1]=='mass3')
							{
								game.eValueArray[2].visible=false;
								game.lineContainers[2].visible=false;
							}
							else if(game.massesArray[i][1]=='mass4')
							{
								game.eValueArray[3].visible=false;
								game.lineContainers[3].visible=false;
							}
							else if(game.massesArray[i][1]=='mass5')
							{
								game.eValueArray[4].visible=false;
								game.lineContainers[4].visible=false;
							}
						}
					}
                }
                else
                {
                	//Add masses into container array
                	this.x=game.massActors[index-1].x;
                	this.y=game.massActors[index-1].y;
                
                	if(game.goFlag)
                	{
                		game.dragFlag=true;
                	}
                	
                	if(game.dropFlag)
                	{
                	   var insert=false;
                	   for(var k=0;k<game.massesArray.length;k++){
                	   	  if(game.massesArray[k][1]=='mass'+index){
                	   	  	insert = true;
                	   	  }
                	   }
                	   if(!insert)
                	   {
	                		game.massesArray[game.massesArray.length] = [game.massActors[index-1],'mass'+index,index];	                		
	              	   }
		               game.dropFlag=false;
                	}
                	if(game.massesArray.length>1)
	                {
	                	if(!game.dragFlag)
	                	{
	                		game.generateForceArray();
	                	}
	                	if(game.collidedCharges.length>0)
	                	{
	                		for(var i=0;i<game.massesArray.length;i++)
							 {
								  for(var j=0; j<game.collidedCharges.length;j++){
								  	  
								  	   if(game.massesArray[i][1]==game.collidedCharges[j][1])
				               			{
				               				if(!game.collidedMoving)
				               				{
				               				game.uh[i]=0;
											game.uv[i]=0;	
											game.accelerationArray[i]=0;
											}
				               			}
								  }
						 	 }
	                	}
	                }
                }
              
     			//game.mouseMoveHandler1Up();
     			
            };
           this.mouseDrag = function (mouseEvent) {
				if(!game.dragFlag)
				{ 
           		game.massIndex=index;
           		
                var pt;
                pt = this.modelToView(new CAAT.Math.Point(mouseEvent.x, mouseEvent.y));
                this.parent.setZOrder(this, Number.MAX_VALUE);
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
                
                game.massActors[this.id-1].x=this.x;
              	game.massActors[this.id-1].y=this.y;
              	var mass=game.massActors[this.id-1];
                game.massesMovement(mass,this);
              
                if(mass.x+mass.width>=game._director.width)
                {
                	mass.x=game._director.width-mass.width;
                }
                if(mass.y+mass.height>=game._director.height )
                {
                	mass.y=game._director.height-mass.height;
                }
                if(mass.y<=0)
                {
                	mass.y=0;
                }
                if(mass.x<=0)
                {
                	mass.x=0;
                }
                if(game.massesArray.length>1)
                {
                	game.generateForceArray();
                }
                }
                if(this.y>485)
                {
               	 game.dragFlag=false;
               	 game.dropFlag=true;
                }
		        //game.mouseMoveHandler(this.getId(),this);
            };
            return this;
        },
    },
    null,
    "CAAT.exemplarr"
    );
	for(var i=startIndex;i<endIndex;i++){
		var oActorImg =new CAAT.exemplarr().
			setBackgroundImage(
				new CAAT.Foundation.SpriteImage().initialize(game._director.getImage(game.mainEleImg[i][0]),1, 1)
			); 
		oActorImg.setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
	    container.addChild(oActorImg);
		game.massActors.push(oActorImg);
		var handcuffdrag= new CAAT.exemplarr()
                .setBounds(
                    oActorImg.x,
                   oActorImg.y,
                    oActorImg.width,
                    oActorImg.height
                )
                .setScale( 1, 1 )
				.setId(i);
	    handcuffdrag.setLocation(oActorImg.x,oActorImg.y);
	    handcuffdrag.userDrag(i);
	    container.addChild(handcuffdrag);
	    game.massContainers.push(handcuffdrag);
	}
}
	//====================================================
//create main panel image on scene
//====================================================
game.__graphContainer = function(){	

	game.graph_actor = new CAAT.Foundation.ActorContainer().							
							setBounds( 0, 0, game._director.width, game._director.height).							
							setClip(false)
							//.setFillStyle('#F00');
	game.graph_actor.paint = function(director, time){
	
		var canvas = director.ctx;
		canvas.beginPath();
		canvas.lineWidth = 0.5;
		canvas.strokeStyle = '#000';
		for(var i=0;i<12; i++){
			canvas.moveTo(0, i*50);
			canvas.lineTo(game._director.width, i*50);			
		}	
		for(var j=0;j<17; j++){
			canvas.moveTo(j*50+5, 0);
			canvas.lineTo(j*50+5, game._director.height);			
		}			
		canvas.stroke();
		canvas.closePath();
	}
	game.mainPanel.addChild(game.graph_actor);
}	

