//
//	Game Logic
//
(function(){
	
/*********** variable initialization ********/	
var oneMtInPx = 10.8;
var heliLevel = 55 ;
var heliMassInKg = 1710;
var boxMassInKg=46;
var initialVelocity = -3.6;
var g = -9.8;
var upwardForceInNewtons = 0;
var downwardForceInNewtons = 0;
var startTimeStamp;
var currentTimeStamp;
var elapsedTimeInSec;
var si;
var netForceInNewtons;
var netAcceleration;
var s;
var finalVelocity;
var pick=false;
var timerInstance;
var lastVelocity=initialVelocity;
var crashed=false;
var goFlag=false;
var yDiff=0;
/*********** variable initialization ********/	

    game.incDecMDown = function(mouseEvent){
		
	}
	
	game.incDecMUp = function(mouseEvent){
		
	}
	
	game.goBtnMDownHandler = function(){
		
		if(!goFlag)
		{
		
		 downwardForceInNewtons = heliMassInKg * g;
	     
	     var upwardforceValue=game.initXVelTxtBox.value;
	     
	     game.__bannerDisplay(0, 0, -70, 0, true);
	     
	     game.oDashTxtArr[12].visible = false;
	     
	     // Text box validation
	     if(isNaN(upwardforceValue) || upwardforceValue.length==0)
	     {
	     	upwardForceInNewtons = 0;
	     	 
	     	game.initXVelTxtBox.value= '0.0';
	     		     
	     }
	     else
	     {
	     	 upwardForceInNewtons = parseInt(game.initXVelTxtBox.value);
	     }
	   
	     game.initXVelTxtBox.disabled=true;
	     
	     netForceInNewtons = downwardForceInNewtons + upwardForceInNewtons;
	    
	     netAcceleration = netForceInNewtons / heliMassInKg;
	   
	     game.oDashTxtArr[4].setText(netAcceleration.toFixed(2));
		
	     startTimeStamp = new Date().getTime();
	
		 timerInstance= game._scene.createTimer(
					0,
					Number.MAX_VALUE,
					function (scene_time, timer_time, timertask_instance) {   // timeout
						
						
					},
					function (scene_time, timer_time, timertask_instance) {   // tick
						
						
						 moveHelicopter(timertask_instance);
					
					},
					function (scene_time, timer_time, timertask_instance) {   
						// cancel
					}
			)
			
		//make go button not to work when helichopter is already moving
		goFlag=true;
		
		}
		
		else
   		{
   			//If helichopter crashed and the user presses go
	     	if(crashed)
			{
				resetHeliPosition();
			}	
		}
	}

	game.resetBtnMDownHandler = function(){
		 resetHeliPosition();
	}
	function moveHelicopter(timertask_instance)
	{
	currentTimeStamp = new Date().getTime();
	
	elapsedTimeInSec = ( currentTimeStamp - startTimeStamp ) / 1000;
	
	finalVelocity = initialVelocity + ( netAcceleration * elapsedTimeInSec );
	
	s = ( initialVelocity * elapsedTimeInSec ) + 0.5 * netAcceleration * Math.pow(elapsedTimeInSec,2);
	
	s = s * oneMtInPx;
	//Moving the helichopter with the calculated values
	game.spaceshipImg.y = ( heliLevel - s );
	//If the helchopter exceeds the box then it is crashed
 	if(game.spaceshipImg.y>=320){
		
		if(timertask_instance!=null)
		{
			 timertask_instance.cancel();
			
		}
		game.spaceshipImg.y=320;
		
		game.oDashTxtArr[12].visible = true ; 
		    
	    game.__bannerDisplay(1, 2, -70, 0, false);
	    
		var si=new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('copterbreake'), 2, 7 ).addAnimation("fly",[4,5,6,7,8,9,10,11,12,13],100,function()
		{
			game.spaceshipImg.setAnimationImageIndex([13]);
		});
		
		game.spaceshipImg.setBackgroundImage(si).playAnimation("fly");
		
		//crashed here
		crashed=true;
		
		game.initXVelTxtBox.disabled=false;

	}
	
	// Pick the box if velocity and helichopter are on a valid range	
	if(!pick)
	{
		
		if(lastVelocity<0 && finalVelocity>=0 && game.spaceshipImg.y>=266 && game.spaceshipImg.y<=276)
		{
			pick = true;

			downwardForceInNewtons = (heliMassInKg+boxMassInKg) * g;
			netForceInNewtons = downwardForceInNewtons + upwardForceInNewtons;
			netAcceleration = netForceInNewtons / (heliMassInKg+boxMassInKg);
			startTimeStamp = new Date().getTime();
			heliLevel=game.spaceshipImg.y;
			initialVelocity=0;
			game.oDashTxtArr[4].setText(netAcceleration.toFixed(2));
			yDiff=game.spaceshipImg.y-game.largeCrateHooked.y;
			//Display congrats banner here	
			game.__bannerDisplay(2, 1, -70, 0, false);	
		}
		
	}
	else
	{
		game.largeCrateHooked.y=game.spaceshipImg.y-yDiff;
	}
	
	lastVelocity = finalVelocity;
	
	game.oDashTxtArr[8].setText(finalVelocity.toFixed(2));
	
	if(game.spaceshipImg.y<-200 && !pick)
	{
	//If the helichopter goes out of range and not picked the crate reset it once again	
	game.__bannerDisplay(1, 2, -70, 0, false);
	timerInstance.cancel();
	game.initXVelTxtBox.disabled=false;
	crashed=true;
	}
	
    }
    
    function resetHeliPosition()
    {
    	//Reset all that needs to reset 
    	if(timerInstance!=null)
    	{
    		timerInstance.cancel();
    	}
		game.oDashTxtArr[12].visible = false;
    	game.__bannerDisplay(0, 0, -70, 0, false);
    	var siHeli=new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('copterbreake'), 2, 7 ).addAnimation("fly",[0,1,2,3],100);
		game.spaceshipImg.setBackgroundImage(siHeli).playAnimation("fly");
		game.spaceshipImg.y=55;	
		game.largeCrateHooked.y=308;
		crashed=false;
		pick=false;
		goFlag=false;
		heliLevel=55;
		initialVelocity=-3.6;
		game.initXVelTxtBox.disabled=false;
		game.oDashTxtArr[4].setText("0.00");
		game.oDashTxtArr[8].setText("-3.60");
		
    }
 
})();