//
//	Game Logic
//
(function(){
var oneMtInPx=150; 
var k=8.99*Math.pow(10,9);
var putterParticle=1.6*Math.pow(10,-19);
var ballParticle=1.6*Math.pow(10,-19); 
var handleIncDecVal = 0;
var incDecTimer;
var inTrap=0;
game.putterCharge=0;
game.ProtonCharge;
game.forceArray = [];
game.accelerationArray=[];
var mass=1.67262158*Math.pow(10,-27);
var positiveElectron =  30 * 1.6 * Math.pow(10,-19);
var NegativeElectron = -10 * 1.6 * Math.pow(10,-19);
var velX = 0;
var velY = 0;
var sx=0;
var sy=0;
game.noOfStrokes = 0;
game.directionRotate=[];
game.d1=0;
var dragContainer=null;
var goFlag = false;
var lastTime;
var m_t;
var reset=false;
var chargeVal;
var hitCount=0;
game.netAcc=0;
game.reduceAcc=false;
var _timerInstance=null;
	//Go Button
	game.goBtnMDownHandler = function(){
		//Calling Timer:
		if(game.directionRotate[0]>60)
		{
			goFlag=true;
		}
		else
		{
			goFlag=false;
		}
		if(!goFlag)
		{
		game.timerStart = new Date().getTime();
		game.tickStart = new Date().getTime();
		game.cancheck=true;
		if(_timerInstance!=null)
		{
			_timerInstance.cancel();
		}
		game.createTimerUpdate();
		game.preX = game.ballImg.x;
		game.preY = game.ballImg.y;
		inTrap=0;
		//Updating Strokes value 
		game.noOfStrokes++;
		game.oDashTxtArr[10].setText(game.noOfStrokes);
		chargeVal=game.putterCharge;
		goFlag=true;
		}
		if(!reset)
		{
			game.__bannerDisplay(0, 0,416,483,true);
			reset=true;
		}
		var distanceBC=game.dist(game.clubImg.x+40,game.clubImg.y+70,game.ballImg.x,game.ballImg.y);
		if(game.putterCharge>20 && distanceBC[0]<10)
	   	{
	   		game.reduceAcc=true;
	   	}
	   	else
	   	{
	   		game.reduceAcc=false;
	   	}
	}
	//Reset Button
	game.resetBtnMDownHandler = function(){
	    game.ballImg.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('ball'), 1, 1 ));
	    game.netAcc=0;
		//Resetting Go Button
		reset=false;
		goFlag=false;
		game.__bannerDisplay(0, 0,416,483, false);
		//Placing ClubImg in original position
		game.clubImg.setBounds(12,210,52,83);
		game.clubImg.setRotation(50);
		game.actorContainer[0].setBounds(10,210,50,90);
		game.ballImg.setLocation(90, 258);
		var x1 = game.ballImg.x;
		var y1 = game.ballImg.y;
		var x2 = game.clubImg.x+40;
		var y2 = game.clubImg.y+70;
		game.directionRotate=game.dist(x2,y2,x1,y1);
		game.oDashTxtArr[5].setText('0.238 m');
		//Updating Strokes value 
		game.oDashTxtArr[10].setText('0');
		game.noOfStrokes=0;
		game.p1Force=[];
		game.accelerationArray=[];
		game.timerStart=0;
		game.timerCurrent=0;
		velX=0;
		velY=0;
		paused=false;
		//Cancelling Timer Instance
		if(_timerInstance!=null)
		{
			_timerInstance.cancel();
		}
		if(dragContainer!=null)
		{
			dragContainer.setRotation(0);
		}
	}
	game.incDecMDown = function (mouseEvent) {
        handleIncDec(mouseEvent);
    }
    game.incDecMUp = function (mouseEvent) {
        incDecTimer.cancel();
		
    }
		//Timer for Inc and Dec button press:
		  function handleIncDec(mouseEvent) {
				incDecTimer = game._scene.createTimer(
				0,
				Number.MAX_VALUE,

				function (scene_time, timer_time, timertask_instance) {}, // timeout
				function (scene_time, timer_time, timertask_instance) { // tick

					handleIncDecVal++;
					if (handleIncDecVal % 5 == 0) {
						tick(mouseEvent);
						handleIncDecVal = 0;
					}
				},

				function (scene_time, timer_time, timertask_instance) {})
			}
	
		 function tick(mouseEvent) {
				if (mouseEvent.source.id == 'iniputterInc') {
					if (game.putterCharge < 30) {
						
						game.putterCharge++;
						//game.__createMainTxt();
						game.oDashIncValArr[0].setText(String(game.putterCharge));
						game.EField.setText(String(game.putterCharge));
					
						game.generateForceArray();
					}
				}
				if (mouseEvent.source.id == 'iniputterDec') {
					if (game.putterCharge > -30) {
					
						game.putterCharge--;
						game.oDashIncValArr[0].setText(String(game.putterCharge));
						
						game.EField.setText(String(game.putterCharge));
						game.generateForceArray();
					}
				}
				//change txt color
				if(game.putterCharge>0)
				{
						
					game.EField.setTextFillStyle( 'red' );
				}
				else{
					game.EField.setTextFillStyle( 'black' );
						
				}

			}
		//OnObjMove method:
		
		game.onObjMove = function (dragger) {
		
		dragContainer=dragger;
		var distance=game.dist(dragger.x+40,dragger.y+70,game.ballImg.x,game.ballImg.y);
		
		if(goFlag)
		{
			goFlag=false;
		}
		if(!goFlag && distance[0]>=7 && game.netAcc<=0.3)
		{
			game.clubImg.setLocation(dragger.x,dragger.y);
			game.massesMovement(game.clubImg,dragger);	
		}
		game.generateForceArray();
		game.oDashTxtArr[5].setText(game.d1.toFixed(3) + ' m');
		}
		//Distance Calculation Function
		game.dist = function (xA, yA, xB, yB) {
			
			var magnitude = Math.sqrt(Math.pow((xA - xB), 2) + Math.pow((yA - yB), 2));
			var direction = Math.atan2(yB - yA, xB - xA);
			return [magnitude, direction];
		}

//==================================================
//Generates all the force arrays here
//==================================================
	game.generateForceArray=function(){
			game.p1Force=[];
			game.Q=1.6*Math.pow(10,-19);
			var source=game.chargesArray[0][0];	
				for(var j=1;j<game.chargesArray.length;j++){
	                    var destination=game.chargesArray[j][0];
	                    if(j==1)
						{
							game.distanceDirection=game.dist(destination.x+40,destination.y+70,source.x,source.y);
						}
						else
						{
							game.distanceDirection=game.dist(destination.x+(destination.width/2),destination.y+(destination.height/2),source.x+(source.width),source.y+(source.height));
						}
						
						game.distance=game.distanceDirection[0];
						oneMtInPx=171;
						game.r=game.distance/oneMtInPx;
						if(j==1)
						{
							game.q=game.putterCharge * putterParticle;
							game.d1=game.r;
						}
						else if(j==2)
						{
							game.q=30*1.6*Math.pow(10,-19);
						}
						else if(j==3)
						{
							if(inTrap==1 || inTrap==2)
							{
								game.q=0;
							}
							else
							{
							    game.q=-10*1.6*Math.pow(10,-19);
							}
						}
						game.F=k*game.q*game.Q/Math.pow(game.r,2);
						game.p1Force[game.p1Force.length]=[game.F,game.distanceDirection[1]];
				}	
	}
	
	function populateAcceleration()
	{
		game.accelerationArray[0]=game.getXYAcceleration(game.p1Force);
	}
	
	game.getXYAcceleration=function(forceArray)
	{
		var netVerticalForce=0;
        var netHorizontalForce=0;
        var forceFlag=false;
        for(var i=0;i<forceArray.length;i++)
        {
        	if(game.ballImg.x<game.wallhit[5].x+game.wallhit[5].width || inTrap==1 || inTrap==2)
        	{
        		if(i==2)
        		{
        			forceFlag=true;
        		}
        	}	
        	if(!forceFlag)
        	{
        		netVerticalForce = netVerticalForce + ( forceArray[i][0] * Math.sin(forceArray[i][1]) );
            	netHorizontalForce = netHorizontalForce + ( forceArray[i][0] * Math.cos(forceArray[i][1]) );
        	}
		}
        var netVerticalAcceleration = netVerticalForce/mass;
        var netHorizontalAcceleration = netHorizontalForce/mass;
        return [netHorizontalAcceleration, netVerticalAcceleration,netVerticalForce,netHorizontalForce];
	}
	
	//=======================================================
    // Timer keeps monitoring the object movement range and position
    //=======================================================
    game.createTimerUpdate = function () {
 		 _timerInstance = game._scene.createTimer(
	        0,
	        Number.MAX_VALUE,
	
	        function (scene_time, timer_time, timertask_instance) {}, // timeout
	        function (scene_time, timer_time, timertask_instance) { // tick			
	              
	              moveBall(); 
	             
	        },
	
	        function (scene_time, timer_time, timertask_instance) {
				// console.log('Inside timer');
			} // cancel
        	);

    };
   
   function moveBall()
   {   
   		var newElapsedTime;
   		var timeDuration=0;
	   	game.timerCurrent = new Date().getTime();
	    game.elapsedTime = (game.timerCurrent - game.timerStart) / 1000;
		var  elTime = (game.timerCurrent - game.tickStart) / 1000;
		game.generateForceArray();
		populateAcceleration();
			if((inTrap==1 || inTrap==2) && game.ballImg.x>(game.wallhit[5].x+game.wallhit[5].width)+30)
			{
				if(hitCount==1)
				{
					velX=0;
					velY=0;		
				}
				timeDuration=0.01;
				inTrap=0;
			}
			else
			{
				timeDuration=0.05;
			}
		//Make ball to move a little bit if the charge is 0
		if(!(chargeVal==0))
		{
			   if(elTime<=timeDuration)
			   {
				   //Do something
			   }
			   else 
			   {
				   game.cancheck=false;
				  // game.accRatio=game.accelerationArray[0][0]/game.accelerationArray[0][1];
			   }
				   if(!game.cancheck){
							   if(hitCount>0 && game.putterCharge<=10)
							   {	
							   game.avx2 = Math.abs(velX*9);	
							   game.avy2 = Math.abs(velY*9);
							   }
							   else
							   {
							   if(game.putterCharge<=5)
							   {
								   game.avx2 = Math.abs(velX*6);
								   game.avy2 = Math.abs(velY*6);
							   }
							   else if(game.putterCharge>=6 && game.putterCharge<=10)
							   {
								   game.avx2 = Math.abs(velX*4.5);
								   game.avy2 = Math.abs(velY*4.5);
							   }
							   else
							   {
						   		   game.avx2 = Math.abs(velX*3);
						   		   game.avy2 = Math.abs(velY*3);
							   }
					   		 }
					   if(velX>0){
						   game.accelerationArray[0][0]=-game.avx2;
					   }else{
						   game.accelerationArray[0][0]=game.avx2;
					   }
					   if(velY>0){
						   game.accelerationArray[0][1]=-game.avy2;
					   }else{
						   game.accelerationArray[0][1]=game.avy2;
					   }
				   }	
		var distBallHill=game.dist(game.wallhit[4].x+(game.wallhit[4].width/2),game.wallhit[4].y+(game.wallhit[4].height/2),game.ballImg.x+(game.ballImg.width),game.ballImg.y+(game.ballImg.height));
		var distBallSand=game.dist(game.wallhit[2].x+(game.wallhit[2].width/2),game.wallhit[2].y+(game.wallhit[2].height/2),game.ballImg.x+(game.ballImg.width),game.ballImg.y+(game.ballImg.height));
		var distance=game.dist(game.clubImg.x+40,game.clubImg.y+70,game.ballImg.x,game.ballImg.y);
		var netAcceleration=Math.sqrt(Math.pow(game.accelerationArray[0][0],2),Math.pow(game.accelerationArray[0][1],2));
		game.netAcc=netAcceleration;  
	   	if(distBallHill[0]<=130  || distance[0]<=75 || (distBallSand[0]<=10 && game.ballImg.x>game.wallhit[5].x+game.wallhit[5].width+30))
		{
	   		if(netAcceleration>0.4)
	   		{
	   		game.cancheck=true;
	   		game.tickStart=new Date().getTime();
	   		timerDuration=0.01;
	   		}
	   	}
	   	if(game.reduceAcc)
	   	{
	   		 game.accelerationArray[0][0]=game.accelerationArray[0][0]/4;
	   		 game.accelerationArray[0][1]=game.accelerationArray[0][1]/4;
	   	}
	   	else{
	   		 game.accelerationArray[0][0]=game.accelerationArray[0][0];
	   		 game.accelerationArray[0][1]=game.accelerationArray[0][1];
	   	}
	   	sx = (velX * game.elapsedTime) + 0.5 *game.accelerationArray[0][0]* Math.pow(game.elapsedTime, 2);
	    sy = (velY * game.elapsedTime) + 0.5 * game.accelerationArray[0][1] * Math.pow(game.elapsedTime, 2);
	   	
	    var netSpeed = Math.sqrt(Math.pow(velX,2) + Math.pow(velY,2));
	   	oneMtInPx=150;
	    var BlineX = game.ballImg.x + (sx * oneMtInPx); 
	    var BlineY = game.ballImg.y + (sy * oneMtInPx);
	   // game.ballImg.setLocation(BlineX, BlineY);
		velX = velX + (game.accelerationArray[0][0] * game.elapsedTime);
		velY = velY + (game.accelerationArray[0][1] * game.elapsedTime);
		//deal with negatively charged putter.
		var distanceballClub=game.dist(game.clubImg.x+40,game.clubImg.y+70,game.ballImg.x,game.ballImg.y);
		if ( game.putterCharge<0 )
		{
			 if( distanceballClub[0] > 20)
			 {
			 	game.ballImg.setLocation(BlineX, BlineY);
			 }
			 else
			 {
			 	goFlag=false;
			 	game.ballImg.x=game.clubImg.x+43;
			 	game.ballImg.y=game.clubImg.y+66;
			 	_timerInstance.cancel();
			 	velX=0;
			 	velY=0;
			 	game.netAcc=0;
			 }
		}
		else
		{
			 game.ballImg.setLocation(BlineX, BlineY);
		}
		var x1 = game.ballImg.x;
		var y1 = game.ballImg.y;
		//var x2 = obj.x+(obj.width/2);
		//var y2 = obj.y+(obj.height/2);
		var x2 = game.clubImg.x+40;
		var y2 = game.clubImg.y+70;
		game.directionRotate=game.dist(x2,y2,x1,y1);
		if(netAcceleration<=0.1)
		{
			goFlag=false;
		}
		//Distance between the ball and the hole
		var distBH=game.dist(game.ballImg.x+(game.ballImg.width)/2,game.ballImg.y+(game.ballImg.height)/2,game.wallhit[1].x+(game.wallhit[1].width)/2,game.wallhit[1].y+(game.wallhit[1].height)/2);
		//Place the ball inside the hole
		if(distBH[0]<=20 && netAcceleration<=0.3) 
		{
			_timerInstance.cancel();
			//sankSuccess(1);
			if(game.noOfStrokes>4)
			{
				sankSuccess(1);
			}
			else if(game.noOfStrokes==4)
			{
				sankSuccess(2);
			}
			else if(game.noOfStrokes<4){
				sankSuccess(3);
			}
		}
		//Check the ball meets the trap 
		if((game.ballImg.x+game.ballImg.width>=game.wallhit[2].x+25 && game.ballImg.x<=game.wallhit[2].x+game.wallhit[2].width-25) && (game.ballImg.y+game.ballImg.height>game.wallhit[2].y+25 && game.ballImg.y<game.wallhit[2].y+game.wallhit[2].height-25))
		{
			if(inTrap==0){
				inTrap=1;
			}
			hitCount++;
		}
		else if((game.ballImg.x+game.ballImg.width>=game.wallhit[2].x && game.ballImg.x<=game.wallhit[2].x+game.wallhit[2].width) && (game.ballImg.y+game.ballImg.height>game.wallhit[2].y && game.ballImg.y<game.wallhit[2].y+game.wallhit[2].height))
		{
			if(inTrap==0){
				inTrap=2;
			}
			hitCount++;
		}
		else
		{
			hitCount=0;
		}
		game.timerStart = new Date().getTime();
		wallBounce();
		obstacleBounce();
		game.preX = game.ballImg.x;
		game.preY = game.ballImg.y;
		}
   } 
    function sankSuccess(index)
   {	
   		  game.ballImg.x=(game.wallhit[1].x+(game.wallhit[1].width)/2)-6;
		  game.ballImg.y=(game.wallhit[1].y+(game.wallhit[1].height)/2)-6;
		  game.__bannerDisplay(index, 1,416,483,false);	
		  animateBallImage();
  	}
   function animateBallImage()
   {   		  		
		var si=new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('ballSprite'), 2, 7 ).addAnimation("hole",[0,1,2,3,4,5,6,7,8,9,10,11,12],50,function()
		{
			game.ballImg.setAnimationImageIndex([12]);
		});
		game.ballImg.setBackgroundImage(si).playAnimation("hole");
   }
   function wallBounce()
   {
    	if (game.ballImg.x + game.ballImg.width > game.wallhit[8].x - 25){
			velX= -Math.abs(velX);
		}
		 else if (game.ballImg.x < game.wallhit[7].x + 16) {
			velX= Math.abs(velX);
		}
		
		if (game.ballImg.y < game.wallhit[6].y + 16){
			velY = Math.abs(velY);
		}
		else if (game.ballImg.y+game.ballImg.height > game.wallhit[9].y){//+game.wallhit[9].height-100
			velY = -Math.abs(velY);
		}
   }
		function obstacleBounce(){
			if((game.ballImg.x+game.ballImg.width>=game.wallhit[5].x && game.ballImg.x<=game.wallhit[5].x+game.wallhit[5].width && game.ballImg.y+game.ballImg.height>=game.wallhit[5].y)||(game.ballImg.x<=game.wallhit[5].x+game.wallhit[5].width && game.ballImg.x>=game.wallhit[5].x && game.ballImg.y+game.ballImg.height>=game.wallhit[5].y)){
				if(game.preX<game.wallhit[5].x && game.preY>game.wallhit[5].y){
					//Entry from left
					velX = -Math.abs(velX);
				}else if(game.preX>game.wallhit[5].x+game.wallhit[5].width && game.preY>game.wallhit[5].y){
					//Entry from right
					velX = Math.abs(velX);
				}else{
					//Entry from top
					velY = -Math.abs(velY);
				}
			}
		}

	
   game.massesMovement=function( obj, event)
	{
		var destination=game.chargesArray[0][0];
		var x1 = destination.x;
		var y1 = destination.y;
		//var x2 = obj.x+(obj.width/2);
		//var y2 = obj.y+(obj.height/2);
		var x2 = obj.x+40;
		var y2 = obj.y+70;
		game.directionRotate=game.dist(x2,y2,x1,y1);
		//obj.setRotation(game.directionRotate[1]);
		obj.setRotationAnchored(game.directionRotate[1], 1, 0.85);
		var minX, minY, maxX, maxY, newX, newY;
		minX = -30;
		minY = -40;
		maxX = 690;
		maxY = 415;
		newX = event.x;
		newY = event.y;
		if(newX < minX)
			newX = minX;
		else if(newX > maxX)
			newX = maxX;
		if(newY < minY)
			newY = minY;
		else if(newY > maxY)
			newY = maxY;
	 	game.clubImg.x=newX;
	 	game.clubImg.y=newY;			
	} 
	//======================================
	//Timer function
	//======================================
	game.cancelTimer = function(){
		 this._timerInstance != null && this._timerInstance.cancel();
		 this._timerInstance = null
	}
})()