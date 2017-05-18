//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = { 
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	positivecharge: null,
	positivecharge: null,
	poschrImg: null,
	poschrImg: null,
	goFlag:false,
	dropFlag:false,
	dropFlag1:false,
	dropFlag2:false,
	dropFlag3:false,
	dropFlag4:false,
	dropFlag5:false,
	dropFlag6:false,
	chgIndex:0,
	chargesArray:[],
	stuck:false,
	tempchg1:null
	//sharedPath: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
		game.mainEleImg =[];
		game.mainEleImg[game.mainEleImg.length] = ['background',  	0,   0,false];
		game.mainEleImg[game.mainEleImg.length] = ['posChg', 250, 520,true];	//poschg bottom
		game.mainEleImg[game.mainEleImg.length] = ['posChg', 290, 520,true];	//poschg bottom
		game.mainEleImg[game.mainEleImg.length] = ['posChg', 330, 520,true];	//poschg bottom
		game.mainEleImg[game.mainEleImg.length] = ['negChg', 250, 553,true];	//poschg bottom
		game.mainEleImg[game.mainEleImg.length] = ['negChg', 290, 553,true];	//poschg bottom
		game.mainEleImg[game.mainEleImg.length] = ['negChg', 330, 553,true];	//poschg bottom
		//image_id, image_X_Position, image_Y_Position
		var assets = [
			{id:'background',   url:game.actPath+'background.gif' },	
			{id:'posChg',      	url:game.actPath+'posChg.png' },	
			{id:'negChg',      	url:game.actPath+'negChg.png' },	
			{id:'dashBG',      	url:game.sharedPath+'dash.gif' },	
			//dashboard Image
			{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
			{id:'well100',     		url:game.sharedPath+'well100.gif' },
			{id:'well50',     		url:game.sharedPath+'well50.gif' },
			{id:'wellright',   		url:game.sharedPath+'wellright.gif' },						
			//Buttons GO, RESET, PAUSE
			{id:'buttons',     	url:game.sharedPath+'buttons.png' },
			//Banner Image
			{id:'banner',     	url:game.sharedPath+'banner.png' },
		];
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);			
	//
	// Timer collapses are fixed by freezing the activity
	//
	CAAT.bindEvent(window, 'blur', function (event) {
		if(game.goFlag) {
			game.pauseBtnMDownHandler();
		}
	}, false);	
};	
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}	
game.__gameInitialize = function( director ){
	var chargeColor = '#6600ff';
	game.chargeActors=[];
	game.lineContainers=[];
	game._director = director;			
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );
	game.bgContainer = new CAAT.Foundation.ActorContainer().setSize(game._director.width, game._director.height);
	game._scene.addChild(game.bgContainer);
	game.__graphContainer();
	game.__createLineContainer(game.bgContainer);
	game.mainContainer= new CAAT.Foundation.ActorContainer().setSize(game._director.width, game._director.height);
	game._scene.addChild(game.mainContainer);
	game.__createDashBoardButton( game.mainContainer );
	
	game.__createMainImgScene(game.mainContainer, 1, game.mainEleImg.length);
	game.buildElectricField(game.mainContainer);
	CAAT.loop(60);
}



game.__graphContainer = function(){   

                game.graph_actor = new CAAT.Foundation.ActorContainer().                                                                                                  

                setBounds( 0, 0, game._director.width, game._director.height).                                                                                                               

                setClip(false)

                //.setFillStyle('#F00');

                  game.graph_actor.paint = function(director, time){
                                var canvas = director.ctx;

                                canvas.beginPath();

                                canvas.lineWidth = 0.4;

                                canvas.strokeStyle = '#cacacd';
                                

                                for(var i=0;i<51; i++){
										
											canvas.moveTo(0, i*15);

                                        	canvas.lineTo(game._director.width, i*15);                                        
                                }             

                                for(var j=0;j<51; j++){
                                	
											canvas.moveTo(j*15+3, 0);

                                            canvas.lineTo(j*15+3, game._director.height);    
                                   }                                             

                                canvas.stroke();

                                canvas.closePath();

                }

                game.mainPanel.addChild(game.graph_actor);

}

//====================================================
//create main panel image on scene
//====================================================
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
          	this.mouseMove = function (mouseEvent) {};
            this.mouseUp = function (mouseEvent) {
                this.__d_ax = -1;
                this.__d_ay = -1;
                if(this.y>485)
                {                	
                	if(index==1)
                	{
                		game.chargeActors[index].y=520;
                		game.chargeActors[index].x=250;
                		game.lineContainers[0].visible=false;
                		game.eValueArray[0].visible=false;
                 	} 
                	else if(index==2 )
                	{
                		game.chargeActors[index].y=520;
                		game.chargeActors[index].x=290;
                		game.lineContainers[1].visible=false;
                		game.eValueArray[1].visible=false;                		                		
                 	}
                	else if(index==3 )
                	{
                		game.chargeActors[index].y=520;
                		game.chargeActors[index].x=330;
                		game.lineContainers[2].visible=false;
                		game.eValueArray[2].visible=false;
                	}
                	else if(index==4 )
                	{
                		game.chargeActors[index].y=553;
                		game.chargeActors[index].x=250;
                		game.lineContainers[3].visible=false;
                		game.eValueArray[3].visible=false;
                		
                 	}
                	else if(index==5)
                	{
                		game.chargeActors[index].y=553;
                		game.chargeActors[index].x=290;
                		game.lineContainers[4].visible=false;
                		game.eValueArray[4].visible=false;
                		
                	}
                	else if(index==6 )
                	{
                		game.chargeActors[index].y=553;
                		game.chargeActors[index].x=330;
                		game.lineContainers[5].visible=false;
                		game.eValueArray[5].visible=false;
                 	}
                 	
            		for(var i=0;i<game.chargesArray.length;i++)
            		{
            			if('chg'+index==game.chargesArray[i][1])
	            		{
	            			game.chargesArray.splice(i,1);
	            		}	
            		}
 					if(game.chargesArray.length>1)
					{
						game.generateForceArray();
					}
					else
					{
						for(var i=0;i<game.chargesArray.length;i++)
						{
							if(game.chargesArray[i][1]=='chg1')
							{
								game.eValueArray[0].visible=false;
								game.lineContainers[0].visible=false;
							}
							else if(game.chargesArray[i][1]=='chg2')
							{
								game.eValueArray[1].visible=false;
								game.lineContainers[1].visible=false;
							}
							else if(game.chargesArray[i][1]=='chg3')
							{
								game.eValueArray[2].visible=false;
								game.lineContainers[2].visible=false;
							}
							else if(game.chargesArray[i][1]=='chg4')
							{
								game.eValueArray[3].visible=false;
								game.lineContainers[3].visible=false;
							}
							else if(game.chargesArray[i][1]=='chg5')
							{
								game.eValueArray[4].visible=false;
								game.lineContainers[4].visible=false;
							}
							else if(game.chargesArray[i][1]=='chg6')
							{
								game.eValueArray[5].visible=false;
								game.lineContainers[5].visible=false;
							}
						}
					}
                 }
              else
                {
                	if(game.goFlag || game.paused)
		               	{
		               			for(var i=0;i<game.chargesArray.length;i++)
			               		{
			               			if(game.chargesArray[i][1]==game.chargeMouseDown)
			               			{
			               				game.uh[i]=0;
										game.uv[i]=0;	
			               			}
			               		}
		               	  game.chargeMouseDown='';
		            	}

   					if(game.dropFlag)
                	{
                	   var insert=false;
                	   for(var k=0;k<game.chargesArray.length;k++){
                	   	  if(game.chargesArray[k][1]=='chg'+index){
                	   	  	insert = true;
                	   	  }
                	   }
                	   if(!insert){
                	   	 if(index==1||index==2||index==3)
	                	{
	                		game.chargesArray[game.chargesArray.length] = [game.chargeActors[index],'chg'+index,1];	                		
	                	}
	                	if(index==4||index==5||index==6)
	                	{
	                		game.chargesArray[game.chargesArray.length] = [game.chargeActors[index],'chg'+index,0];                		
	                	}
                	   }
						if(game.chargesArray.length>1)
						{
							//Mouse release generate force array
							game.generateForceArray();
						}
		                game.dropFlag=false;
                	}
	             }
             //game.mouseMoveHandler1Up();
            };
           this.mouseDrag = function (mouseEvent) {
                if(this.y>485)
               	{
               	 game.dropFlag=true;
               	}
               	
           		game.chgIndex=index;
               	if(game.goFlag || game.paused)
               	{
               	game.chargeMouseDown='chg'+index;		
               	var bool=false;	
               	for(var i=0;i<game.collidedCharges.length;i++)
				{
               		if('chg'+index==game.collidedCharges[i])
               		{
               			bool=true;
               		}
               	}
               	if(bool)
               	{
               		for(var i=0;i<game.chargesArray.length;i++)
						 {
							  for(var j=0; j<game.collidedCharges.length;j++){
							  	  
							  	   if(game.chargesArray[i][1]==game.collidedCharges[j])
			               			{
			               				game.uh[i]=0;
										game.uv[i]=0;	
										game.accelerationArray[i]=0;
			               			}
							  }
						  }
					game.collidedCharges=[];	 
					bool=false;
					} 
               	}
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
                if(this.x+20>game._director.width)
                {
                	this.x=game._director.width-20;
                }
               	if(this.y+20>game._director.height)
                {
                	this.y=game._director.height-20;
                }
                if(this.y<0)
                {
                	this.y=0;
                }
                if(this.x<0)
                {
                	this.x=0;
                }
                  //Refresh arrays at the movement time                
                if(game.chargesArray.length>1)
                {                	
               		game.generateForceArray();
                }
                chargesMovement(this,mouseEvent);
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
			); /*game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );*/
		if(game.mainEleImg[i][3])
		{
			oActorImg.userDrag(i);	
		}
		oActorImg.setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
	    container.addChild(oActorImg);
	    game.chargeActors.push(oActorImg);
		}
}
function chargesMovement( obj )
{
	for(var i=0;i<game.chargesArray.length;i++)
	{
		if('chg'+game.chgIndex!=game.chargesArray[i][1])
		{
			var destination=game.chargesArray[i][0];
			var distanceDirection1=game.dist(destination.x,destination.y,obj.x,obj.y);
			if(distanceDirection1[0]<=20 )
			{
				obj.x=destination.x+(20*Math.cos(distanceDirection1[1]));
				obj.y=destination.y+(20*Math.sin(distanceDirection1[1]));
			}
		}	}
}
game.__createLineContainer=function(parent)
{
	for(var i=0;i<6;i++)
	{
		var lineContainer= new CAAT.Foundation.ActorContainer().setSize(game._director.width, game._director.height);
		parent.addChild(lineContainer);
		game.lineContainers.push(lineContainer);
	}	
}
//==================================================
//Generates all the force arrays here
//==================================================
game.generateForceArray=function(){
	game.p1Force=[];
	game.p2Force=[];
	game.p3Force=[];
	game.p4Force=[];
	game.p5Force=[];
	game.p6Force=[];
	var oneNInPx = 12 * Math.pow(10, 28);
	var len=0;
		for(var i=0;i<game.chargesArray.length;i++)
		{
			if(game.chargesArray[i][1]=='chg1'|| game.chargesArray[i][1]=='chg2'|| game.chargesArray[i][1]=='chg3')
			{
				game.Q=1.6*Math.pow(10,-19);
			}
			
			else if(game.chargesArray[i][1]=='chg4'|| game.chargesArray[i][1]=='chg5'|| game.chargesArray[i][1]=='chg6')
			{
				game.Q=-1.6*Math.pow(10,-19);
			}
			var source=game.chargesArray[i][0];
				for(var j=0;j<game.chargesArray.length;j++){
					if(j!=i){						
	                    var destination=game.chargesArray[j][0];
						game.distanceDirection=game.dist(source.x+(source.width/2),source.y+(source.height/2),destination.x+(destination.width/2),destination.y+(destination.height/2));
						game.distance=game.distanceDirection[0];
						game.r=game.distance/game.oneMtInPx;
						if(game.chargesArray[j][1]=='chg1')
						{
							
							if(!game.goFlag)
							{
							game.lineContainers[0].visible=true;	
							game.eValueArray[0].visible=true;
							}
							game.q=1.6*Math.pow(10,-19);
							game.F=game.k*game.q*game.Q/Math.pow(game.r,2);
							game.p1Force[game.p1Force.length]=[game.F,game.distanceDirection[1]];
							var HVForce=game.getXYAcceleration(game.p1Force);
							var angle_deg =  Math.atan2( HVForce[2], HVForce[3] );
							var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
							var netmag=netForce * oneNInPx;
							game.createForceValue(0,netForce);
							game.drawLines(angle_deg,j,	game.lineContainers[0],netmag);
						}
						else if(game.chargesArray[j][1]=='chg2')
						{
							if(!game.goFlag)
							{
							game.lineContainers[1].visible=true;
							game.eValueArray[1].visible=true;	
							}
							game.q=1.6*Math.pow(10,-19);
							game.F=game.k*game.q*game.Q/Math.pow(game.r,2);
							game.p2Force[game.p2Force.length]=[game.F,game.distanceDirection[1]];
							var HVForce=game.getXYAcceleration(game.p2Force);
							var angle_deg = Math.atan2( HVForce[2], HVForce[3] );
							var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
							var netmag=netForce * oneNInPx;
							game.createForceValue(1,netForce);							
							game.drawLines(angle_deg,j,	game.lineContainers[1],netmag);
						}
					    else if(game.chargesArray[j][1]=='chg3')
					    {
						    if(!game.goFlag)
							{
							game.lineContainers[2].visible=true;
							game.eValueArray[2].visible=true;	
							}
							game.q=1.6*Math.pow(10,-19);
							game.F=game.k*game.q*game.Q/Math.pow(game.r,2);
							game.p3Force[game.p3Force.length]=[game.F,game.distanceDirection[1]];
					    	var HVForce=game.getXYAcceleration(game.p3Force);
							var angle_deg = Math.atan2( HVForce[2], HVForce[3] );
							var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
							var netmag=netForce * oneNInPx;
							game.createForceValue(2,netForce);
						
							game.drawLines(angle_deg,j,	game.lineContainers[2],netmag);
						}
					     else if(game.chargesArray[j][1]=='chg4')
					    {
					 		if(!game.goFlag)
							{
							game.lineContainers[3].visible=true;
							game.eValueArray[3].visible=true;
							}
							game.q=-1.6*Math.pow(10,-19);
							game.F=game.k*game.q*game.Q/Math.pow(game.r,2);
							game.p4Force[game.p4Force.length]=[game.F,game.distanceDirection[1]];
					    	var HVForce=game.getXYAcceleration(game.p4Force);
							var angle_deg =  Math.atan2( HVForce[2], HVForce[3] );
							var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
							var netmag=netForce * oneNInPx;
							game.createForceValue(3,netForce);
							game.drawLines(angle_deg,j,	game.lineContainers[3],netmag);
						}
					    else if(game.chargesArray[j][1]=='chg5')
					    {
					   		if(!game.goFlag)
							{
							game.lineContainers[4].visible=true;
							game.eValueArray[4].visible=true;
							}
							game.q=-1.6*Math.pow(10,-19);
							game.F=game.k*game.q*game.Q/Math.pow(game.r,2);
							game.p5Force[game.p5Force.length]=[game.F,game.distanceDirection[1]];
							var HVForce=game.getXYAcceleration(game.p5Force);
							var angle_deg = Math.atan2( HVForce[2], HVForce[3] );
							var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
							var netmag=netForce * oneNInPx;
							game.createForceValue(4,netForce);
							game.drawLines(angle_deg,j,	game.lineContainers[4],netmag);
						}
					    else if(game.chargesArray[j][1]=='chg6')
					    {
					    	if(!game.goFlag)
							{
							game.lineContainers[5].visible=true;
							game.eValueArray[5].visible=true;
							}
							game.q=-1.6*Math.pow(10,-19);
							game.F=game.k*game.q*game.Q/Math.pow(game.r,2);
							game.p6Force[game.p6Force.length]=[game.F,game.distanceDirection[1]];
							var HVForce=game.getXYAcceleration(game.p6Force);
						    var angle_deg = Math.atan2( HVForce[2], HVForce[3] );
						    var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
						    var netmag=netForce * oneNInPx;
						    game.createForceValue(5,netForce);
						    game.drawLines(angle_deg,j,	game.lineContainers[5],netmag);
					    }
					}
				}
		}		
}
//==================================================
//Create Main panel text
//==================================================
game.__createMainTxt = function(){
	//for(var i=0;i<mainEleTxt.length; i++){			
		var EField = game.__addTextOnImage('#fff', 'r =21.0  m', 'bold 14px Arial',  'left', game._director );				
		EField.
			setLocation(420, 220);
		game.mainPanel.addChild(EField);			
	//}
}
