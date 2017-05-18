//
//	Game Logic
//
(function(){	
	var incDecTimer=null;
	var incDecCount=0;
	var startTime,elapsedTimeInSec,currentTime,pauseTime,accXY;
	var oneMtInPx=0.49;
	var initialVerticalVelocity = 65;
	var finalVerticalVelocity = initialVerticalVelocity;
	var showFinalVerticalVelocity;
    var forceArray = new Array();
    var mass = 8910;
	var gOnMoon = 1.62;	
	var startX, startY;
	var isGamestart=true;
    var isGamepause=false;
	var isGameEnd=false;
	var _timer,spaceshipImg_Y=82;
	var verAcc=0;
	//var tempInDe=34500;
	
	
	function incDecHandler(obj){		
	
		// Increment the B force
		 // BForceVal= game.BForce.split(',')[0] + game.BForce.split(',')[1] ;
		 // BForceVal = Number(BForceVal);
		
		 if(obj.id=='iniVelInc')
		 {			
		   if(game.BForce != 40000)
		   {						
				game.BForce+=100;
				var bForcetoString= String(game.BForce).slice(0, 2) + "," + String(game.BForce).slice(2);
				game.oDashTxtArr[11].setText(bForcetoString);
		   }
		   
		 }		
		 
		// Decrement the B force
		
		if(obj.id=='iniVelDec')
		{
		   
		   if(game.BForce != 20000)
		   {
				game.BForce-=100;
				var bForcetoString=String(game.BForce).slice(0, 2) + "," + String(game.BForce).slice(2);
				game.oDashTxtArr[11].setText(bForcetoString);
		   }
		   
			 
		}
		
		
	}
	
	game.incDecMDown = function(mouseEvent){
	
		if(isGamestart && !isGamepause)
		{
			incDecTimer = game._scene.createTimer(
						game._scene_time, 
						Number.MAX_VALUE,
						null,
						function(scene_time, time_time, time_instance){
								incDecCount++;
								if(incDecCount%5 == 0){
									incDecHandler(mouseEvent.source);	
									incDecCount = 0;
								}												
						},
						null
					);
		}
	}
	
	game.incDecMUp = function(mouseEvent){
		 incDecTimer.cancel();
	}
	
	game.goBtnMDownHandler = function(){
	
		// BForceVal= game.BForce.split(',')[0] + game.BForce.split(',')[1] ;
		// BForceVal = Number(BForceVal);
		if(isGamestart)
		{
			 if(!isGamepause)
			 {
			  game.__bannerDisplay(0, 0, -70, 0, true);
			 }
			 //Force Magnitudes
			 forceArray[forceArray.length] = [35600,68*(Math.PI/180)]; //68  67
			 forceArray[forceArray.length] = [game.BForce,129*(Math.PI/180)]; // 129  126
			 forceArray[forceArray.length] = [mass*gOnMoon,-(Math.PI/2)];
			 accXY = getXYAcceleration();
		
			 
			startX=game.spaceshipImg.x;
			startY=game.spaceshipImg.y;
			
			if(game.BForce<=30000){
				verAcc =3.83+ Math.abs(game.BForce- 20000 )*(0.9/10000);
			}
			else {
				verAcc =4.74+ Math.abs(game.BForce- 30000 )*(0.99/10000);
			}
			
			game.oDashTxtArr[4].setText(verAcc.toFixed(2)); 
			  
			 isGamestart=false;
			 
			  startTime=new Date().getTime();
			 __createUpdateTimer();
		}
	}
	
	game.resetBtnMDownHandler = function(){
	   	   
		 if(_timer!=null)
		 {
			_timer.cancel();
		 }
		game.__bannerDisplay(1, 2, -70, 0, true);
		game.__bannerDisplay(0, 0, -70, 0, false);
		game.spaceshipImg.y=81.5;
		game.spaceshipImg.x=369;
		game.spaceshipImg.setAnimationImageIndex([0]);
		isGamestart=true;
		isGamepause=false;
		isGameEnd=false;
		initialVerticalVelocity=65;
		game.oDashTxtArr[1].setText("     -- "+"m/s");
		game.oDashTxtArr[4].setText("     --");
		forceArray = new Array();
	
	}
	
	game.pauseBtnMDownHandler = function(){
		if(!isGamestart && !isGameEnd)
		{
		 forceArray = new Array();
		 isGamestart=true;
		 isGamepause=true;
		 initialVerticalVelocity=finalVerticalVelocity;
		 _timer.cancel();
		}
	}
	
	// Timer Function.
	
	function __createUpdateTimer()
	{
	 var spaceshipRows = 5, 
	 spaceshipCols = 8;
	 
	 _timer = game._scene.createTimer(
            0,
            Number.MAX_VALUE,
            function (scene_time, timer_time, timertask_instance) {   // timeout
			
            },
            function (scene_time, timer_time, timertask_instance) {   // tick			
						
			game.spaceshipImg.setAnimationImageIndex([4]);  //change sprite image
			
			currentTime=new Date().getTime();
			
			elapsedTimeInSec=(currentTime-startTime)/1000;   // Getting elapsed time
			
			var sx = ( 0.5 * accXY[0] * Math.pow(elapsedTimeInSec,2)) ;
			var sx = sx * oneMtInPx;
			
			var sy = ( initialVerticalVelocity * elapsedTimeInSec ) + ( 0.5 * -accXY[1] * Math.pow(elapsedTimeInSec,2)) ;
			finalVerticalVelocity = initialVerticalVelocity + ( -accXY[1] * elapsedTimeInSec );
			
			showFinalVerticalVelocity = -1 * finalVerticalVelocity;
			game.oDashTxtArr[1].setText(String(showFinalVerticalVelocity.toFixed(1))+" m/s");
			
			sy = sy * oneMtInPx;
			
			game.spaceshipImg.x=startX+sx;
			game.spaceshipImg.y=startY+sy;
			
			// Check the spaceship for safe landing
			
			if( game.spaceshipImg.y>344)
			{
			   if(game.spaceshipImg.x>=368 && game.spaceshipImg.x<=370 )
			   {
			       
				   if(finalVerticalVelocity>=1 && finalVerticalVelocity<5)
				   {
				         game.spaceshipImg.setAnimationImageIndex([16]);
						 game.__bannerDisplay(2, 1, -70, 0, false);
				   }
				   else
				   {
						  var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('spaceship'), spaceshipRows, spaceshipCols).
					 addAnimation("start",   [17,18,19,20,21,22,23,24,25,26,27], 100,function(){
						game.spaceshipImg.setAnimationImageIndex([27]);
					 });
					 game.spaceshipImg.setBackgroundImage(si).playAnimation("start");
					 game.__bannerDisplay(1, 2, -70, 0, false);
				   }
			   }
			   else
			   {
						var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('spaceship'), spaceshipRows, spaceshipCols).
					 addAnimation("start",   [17,18,19,20,21,22,23,24,25,26,27], 100,function(){
						game.spaceshipImg.setAnimationImageIndex([27]);
						
				 });
				 game.spaceshipImg.setBackgroundImage(si).playAnimation("start");
				 game.__bannerDisplay(1, 2, -70, 0, false);
			   }
			   
			    
				timertask_instance.cancel();
				game.oDashTxtArr[1].setText("0.0"+"    m/s");
		        game.oDashTxtArr[4].setText("0.00")
			}
			
			// Display failure banner
			
			if((game.spaceshipImg.y).toFixed(0)==-20||(game.spaceshipImg.y).toFixed(0)==-21)
			{
			   game.__bannerDisplay(1, 2, -70, 0, false);
			   _timer.cancel();
			   isGamestart=false;
			   isGameEnd=true;
			}
			
            },
            function (scene_time, timer_time, timertask_instance) {   // cancel
            }
				
			)
    }
	
	
    function getXYAcceleration(){
        var netVerticalForce=0;
        var netHorizontalForce=0;
		var netVerticalAcceleration=0;
		var netHorizontalAcceleration=0;
        for(var i=0;i<forceArray.length;i++){
            netVerticalForce = netVerticalForce + ( forceArray[i][0] * Math.sin(forceArray[i][1]) );
            netHorizontalForce = netHorizontalForce + ( forceArray[i][0] * Math.cos(forceArray[i][1]) );
        }

        netVerticalAcceleration = (netVerticalForce/mass).toFixed(2);
        netHorizontalAcceleration = (netHorizontalForce/mass).toFixed(2);
        return [netHorizontalAcceleration, netVerticalAcceleration];
		
    }


	
})();