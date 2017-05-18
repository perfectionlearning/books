//
//	Game Logic
//
(function(){
	var count =0;
	var rotateTimer = null;
	var rdis = 0;
	var rdegree = 0;
	var oneMtInPx = 19;
	var incRotateAng = 0.025714; 
	var radians = 0;
	var velocity = 0;
	var isRunning = false;
	var isPause = false;
	var startTimeStamp = null;
	var pauseTimeStamp = 0;
	
	game.goBtnMDownHandler = function(){		
		if(!isRunning){			
			if(!isPause){
				game.__bannerDisplay(0, 0, 0, -70, false);
				startTimeStamp = new Date().getTime();
			}
            else {
				  var timerStartStamp   = new Date().getTime();
	        	  startTimeStamp = startTimeStamp +   timerStartStamp - pauseTimeStamp; 
	        	 
		    }
			isPause = false;
			incRotateAng = (360/game.revolution)/60;
			isRunning = true;
			calculatePerimeter();		
			rotateObjects(rdis,rdegree);
		}		
	}
	
	game.resetBtnMDownHandler = function(){
		cancelTimer(rotateTimer);
		game.degree = 45;
		isRunning = false;
		isPause = false;
		setLinearSpeed(0);
		setAngularVelocity(0);
		game.rotateContainer.setRotation((game.degree-90) * Math.PI/180);
		game.__bannerDisplay(0, 0, -70, 0, false);
	}
	
	game.pauseBtnMDownHandler = function(){
		cancelTimer(rotateTimer);
		isRunning = false;
		isPause = true;
		pauseTimeStamp = new Date().getTime();
	}

	game.incDecHandler = function(obj){
		
	}
	
	game.incDecHandler = function(obj){
		
	}
	
	game.incDecMDown = function(mouseEvent){
	
	   if(!isPause){
	   	incDecHandler(mouseEvent);
	   }		
	}	
	
	
	game.incDecMUp = function(mouseEvent){
		
		if(game.incDecTimer!=null){
			game.incDecTimer.cancel();
		}		
	}
	
	function cancelTimer(timer){
		if(timer!=null){
			timer.cancel();
		}
	}
	
	function rotateObjects(){		
	   // var count=0;
		rotateTimer = game._scene.createTimer(
            0,
            Number.MAX_VALUE,null,
            function (scene_time, timer_time, timertask_instance) {   // tick  
				var currentTimeStamp = new Date().getTime();
                var elapsedTimeInSec = (currentTimeStamp - startTimeStamp) / 1000;
				var rotateAng= elapsedTimeInSec * (360/game.revolution);	
                game.degree = game.degree - rotateAng; 
                game.rotateContainer.setRotation((game.degree-90) * Math.PI/180,0.5,0.5);                         
                startTimeStamp = currentTimeStamp;  		
            },null
          )
	}
	
	
	function calculatePerimeter(){	
		var circlePeriMeter = (2 * Math.PI * (game.distance*oneMtInPx));		
		var distanceforOneSecond =  (circlePeriMeter / game.revolution)/oneMtInPx;		
		var radianPerSecond = 2*Math.PI/game.revolution;
		if(isRunning){
			setLinearSpeed(distanceforOneSecond);
			setAngularVelocity(radianPerSecond);
		}
		
	}
	
	function incDecHandler(mouseEvent){
		if(game.incDecTimer)	game.incDecTimer.cancel();	
		game.incDecTimer=game._scene.createTimer(
            0,
            Number.MAX_VALUE,null,
            function (scene_time, timer_time, timertask_instance) {   // tick  
               if(count%8==0){
               	if(mouseEvent.source.id=='rocketdistanceInc')
                {		
                	var dis =game.distance.toFixed(1);
					if(dis<10.0){
							game.distance=game.distance+0.2;
							setDistance(game.distance);							
							game.rocketImg.y = game.minDistance+(game.distance*oneMtInPx);
					}
				}
				else if(mouseEvent.source.id=='rocketdistanceDec'){
			
					var dis =game.distance.toFixed(1);
					if(dis>4.0){
							game.distance=game.distance-0.2;
							setDistance(game.distance);						
							game.rocketImg.y = game.minDistance+(game.distance*oneMtInPx);
					}
				}  
				else if(mouseEvent.source.id=='revolutionInc') {
					  var rev =game.revolution.toFixed(1);
					  if(rev<20.0){
					  	 	game.revolution=game.revolution+0.5;
					  	 	setRevolution(game.revolution);	
					  	 	incRotateAng =(360/game.revolution)/60;				  	 	
					  }				  
					 
				}
				else{
					   var rev =game.revolution.toFixed(1);
					  if(rev>4.0){
					  	 	game.revolution=game.revolution-0.5;
					  	 	setRevolution(game.revolution);	
					  	 	incRotateAng =(360/game.revolution)/60;					  	 					  	 	
					  }
				}	
				
				calculatePerimeter();
				 count=0;				 
               }         
               count++;     
                         
            },null
          )
         }
	function setDistance(dis){
		game.oDashTxtArr[7].setText(dis.toFixed(1));
	}
	
	function setRevolution(rev){
		game.oDashTxtArr[10].setText(rev.toFixed(1));
	}
	
	function setLinearSpeed(speed){
		game.oDashTxtArr[1].setText(speed.toFixed(2));
	}
	
	function setAngularVelocity(vel){
		game.oDashTxtArr[4].setText(vel.toFixed(2));
	}
})()