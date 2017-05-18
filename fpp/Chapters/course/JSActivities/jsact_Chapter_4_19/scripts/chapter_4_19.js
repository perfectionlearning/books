//
//	Game Logic
//
(function(){
	var xVelocityR=0.0;
	var xVelocityG=0.0;
	var xVelocityB=0.0;
	var xVelocity=0.0;
	var yVelocity=0.0;
	var yVelocityR=0.0;
	var yVelocityG=0.0;
	var yVelocityB=0.0;
	var firstTripB=true;
	var firstTripG=true;
	var firstTripR=true;
	var flagEndR=1;
	var flagEndG=1;
	var flagEndB=1;
	var tempVelocityVertical;
	var tempVelocityHorizontal;
	var startXR=320;
	var startXB=startXR;
	var startXG=startXR;
	var attachBallR=false;
	var attachBallG=false;
	var attachBallB=false;
	var attachBallR1=false;
	var attachBallG1=false;
	var attachBallB1=false;
	var pausedTimeR=0;
	var pausedTimeG=0;
	var pausedTimeB=0;
	var pausedStartTime, pausedEndTime;
	var handTimerInstance;
	//var goFlag=false;
	var oneTime=false;
	var leftHandCtr=0;
	var rightHandCtr=0;
	var leftHandMovementArray=new Array();
	leftHandMovementArray[leftHandMovementArray.length]=[314,437];
	leftHandMovementArray[leftHandMovementArray.length]=[318,442];
	leftHandMovementArray[leftHandMovementArray.length]=[321,447];
	leftHandMovementArray[leftHandMovementArray.length]=[328,448];
	leftHandMovementArray[leftHandMovementArray.length]=[332,444];
	leftHandMovementArray[leftHandMovementArray.length]=[330,439];
	leftHandMovementArray[leftHandMovementArray.length]=[323,437];
	leftHandMovementArray[leftHandMovementArray.length]=[317,435];
	leftHandMovementArray[leftHandMovementArray.length]=[314,437];
	var rightHandMovementArray=new Array();
	rightHandMovementArray[rightHandMovementArray.length]=[420,435];
	rightHandMovementArray[rightHandMovementArray.length]=[417,440];
	rightHandMovementArray[rightHandMovementArray.length]=[412,445];
	rightHandMovementArray[rightHandMovementArray.length]=[407,445];
	rightHandMovementArray[rightHandMovementArray.length]=[402,442];
	rightHandMovementArray[rightHandMovementArray.length]=[402,437];
	rightHandMovementArray[rightHandMovementArray.length]=[406,436];
	rightHandMovementArray[rightHandMovementArray.length]=[412,435];
	rightHandMovementArray[rightHandMovementArray.length]=[419,433];
	rightHandMovementArray[rightHandMovementArray.length]=[420,435];
	var startYR=424;
	var startYB=startYR;
	var startYG=startYR;
	var yVelocityDispR;
	var yVelocityDispG;
	var yVelocityDispB;
	var makeTimerDelay=0;
	var startTimeStampR=0,startTimeStampG=0,startTimeStampB=0;
	var currentTimeStamp=0;
	var elapsedTimeInSec;
	var timerInstance;
	var oneMtInPx=130;
	var sx,sy;
	var started=false;
	var paused=false;
	var timeGap=0;
	game.incDecHandler = function(obj){
		
	}
	game.incDecHandler = function(obj){
		
	}
	game.incDecMDown = function(mouseEvent){
		
		handleIncDec(mouseEvent);
		
	}
	game.incDecMUp = function(mouseEvent){
		
		game.incDecTimer.cancel();
	}
	game.goBtnMDownHandler = function(){
		
		if(!game.goFlag)
		{
			initialise();
			game.goFlag=true;	
			started=true;
		}
	}
	function initialise()
	{
		xVelocity=parseFloat(game.oDashTxtArr[17].text);
		yVelocity=parseFloat(game.oDashTxtArr[16].text);
		if(xVelocity==0.0 && yVelocity==0.0)
		{
		game.oDashTxtArr[8].setText('0.0');
		//set the y velocity text
		game.oDashTxtArr[4].setText('0.0');
		//set the acceleration vertical text
		game.oDashTxtArr[5].setText('0.0');
		//set the horizontal acceleration text
		game.oDashTxtArr[9].setText('0.0');
		}
		else
		{
		if(paused)
		{
			pausedEndTime=new Date().getTime();
			pausedTimeR=pausedTimeR+pausedEndTime-pausedStartTime;
			pausedTimeG=pausedTimeG+pausedEndTime-pausedStartTime;
			pausedTimeB=pausedTimeB+pausedEndTime-pausedStartTime;
			if(xVelocity<=0.1)
			{
				makeImageAnimate(0,false);
			}
			else
			{
				if(attachBallB1&&flagEndB==0)
				{
					makeImageAnimate(0,false);
				}
				if(attachBallG1&&flagEndG==0)
				{
					makeImageAnimate(0,false);
				}	
				if(attachBallR1&&flagEndR==0)
				{
					makeImageAnimate(0,false);
				}
				if(attachBallB1&&flagEndB==1)
				{
					makeImageAnimate(1,false);
				}
				if(attachBallG1&&flagEndG==1)
				{
					makeImageAnimate(1,false);
				}	
				if(attachBallR1&&flagEndR==1)
				{
					makeImageAnimate(1,false);
				}
			}
			paused=false;
			game.goFlag=true;
		}
		else
		{
			timeGap = (4*(yVelocity/9.8) / 3)*1000;
			startTimeStampR=new Date().getTime();
			startTimeStampG = startTimeStampR + timeGap;
			startTimeStampB = startTimeStampR +(2*timeGap); 
			xVelocityB=xVelocity;
			xVelocityR=xVelocity;
			xVelocityG=xVelocity;
			yVelocityB=yVelocity;
			yVelocityR=yVelocity;
			yVelocityG=yVelocity;
		}
		timerInstance=game._scene.createTimer(
			 	0,
					Number.MAX_VALUE,
					function (scene_time, timer_time, timertask_instance) {   // timeout
					},
					function (scene_time, timer_time, timertask_instance) {   // tick
						
						moveBalls(timertask_instance);
					},
					function (scene_time, timer_time, timertask_instance) {   
						
					}
		     )
		}
	}
	function moveBalls(timertask_instance)
	{
		currentTimeStamp=new Date().getTime();
		//////// Red ball //////////////		
		elapsedTimeInSec=(currentTimeStamp-startTimeStampR-pausedTimeR)/1000;

		if(elapsedTimeInSec<0){
			elapsedTimeInSec=0;
		}
		if(firstTripR){
			sx=0;
			sy = (0.5 * -9.8 * Math.pow(elapsedTimeInSec,2));
		}else{
			sx = xVelocityR * elapsedTimeInSec; 
			sy = (yVelocityR * elapsedTimeInSec) + (0.5 * -9.8 * Math.pow(elapsedTimeInSec,2));
		}		
		game.oDashTxtArr[8].setText(xVelocity.toFixed(1));
		//set the y velocity text
		yVelocityDispR=	(yVelocityR+-9.8*elapsedTimeInSec).toFixed(1);	
		game.oDashTxtArr[4].setText(yVelocityDispR);
		//set the acceleration vertical text
		game.oDashTxtArr[5].setText('-9.8');
		//set the horizontal acceleration text
		game.oDashTxtArr[9].setText('0.0');
		if(!attachBallR){	
				game.redballImg.x = startXR + (sx * oneMtInPx);
				game.redballImg.y = startYR - (sy * oneMtInPx);
		}else{
			if(flagEndR==0){
				game.redballImg.x = game.smallLeftHand.x;
				game.redballImg.y = game.smallLeftHand.y-12;
			}
			else{
				game.redballImg.x = game.smallRightHand.x;
				game.redballImg.y = game.smallRightHand.y-12;
			}
		}
		/////////// Green ball ////////////////
		elapsedTimeInSec=(currentTimeStamp-startTimeStampG-pausedTimeG)/1000;

		if(elapsedTimeInSec<0){
			elapsedTimeInSec=0;
		}
		
		if(firstTripG){
			sx=0;
			sy = (0.5 * -9.8 * Math.pow(elapsedTimeInSec,2));
		}else{
			sx = xVelocityG * elapsedTimeInSec; 
			sy = (yVelocityG * elapsedTimeInSec) + (0.5 * -9.8 * Math.pow(elapsedTimeInSec,2));
		}
		yVelocityDispG= (yVelocityG+-9.8*elapsedTimeInSec).toFixed(1);
		
		if(!attachBallG){	
				game.greenballImg.x = startXG + (sx * oneMtInPx);
				game.greenballImg.y = startYG - (sy * oneMtInPx);
		}else{
			if(flagEndG==0)
			{
				game.greenballImg.x = game.smallLeftHand.x;
				game.greenballImg.y = game.smallLeftHand.y-12;
				
			}
			else{
				game.greenballImg.x = game.smallRightHand.x;
				game.greenballImg.y = game.smallRightHand.y-12;
			}
		}
		/////////// Blue ball ////////////////////////
		elapsedTimeInSec=(currentTimeStamp-startTimeStampB-pausedTimeB)/1000;

		if(elapsedTimeInSec<0){
			elapsedTimeInSec=0;
		}
		if(firstTripB){
			sx=0;
			sy = (0.5 * -9.8 * Math.pow(elapsedTimeInSec,2));
		}else{
			sx = xVelocityB * elapsedTimeInSec; 
			sy = (yVelocityB* elapsedTimeInSec) + (0.5 * -9.8 * Math.pow(elapsedTimeInSec,2));
		}
		yVelocityDispB= (yVelocityB+-9.8*elapsedTimeInSec).toFixed(1);
		if(!attachBallB)
		{	
			game.blueballImg.x = startXB + (sx * oneMtInPx);
			game.blueballImg.y = startYB - (sy * oneMtInPx);
			
			
		}else{
			if(flagEndB==0){
				game.blueballImg.x = game.smallLeftHand.x;
				game.blueballImg.y = game.smallLeftHand.y-12;
				
			}else{
				game.blueballImg.x = game.smallRightHand.x;
				game.blueballImg.y = game.smallRightHand.y-12;
				
			}
		}
	
	//set the x velocity text	
	game.oDashTxtArr[8].setText(xVelocityR.toFixed(1));
	
	
	//Check if the ball has reached the other hand)
		//Red balls condition
		var angle=(180/Math.PI)*Math.abs(Math.atan(yVelocityDispR/xVelocityR));
			if(game.redballImg.x+game.redballImg.width>=419 && game.redballImg.x<=436 && yVelocityDispR<(-yVelocityR+0.4)&& yVelocityDispR>(-yVelocityR-0.4) && flagEndR==0)//&& !(game.redballImg.y>game._director.height-150))//&& !(game.redballImg.y>game._director.height-150))
			{
				startTimeStampR=new Date().getTime();
				pausedTimeR=0;
				xVelocityR=-Math.abs(xVelocityR);
				startXR=410;
				flagEndR=1;
				attachBallR=true;
				attachBallR1=true;
				makeImageAnimate(1,true);
			}
			else if(game.redballImg.x>=300 && game.redballImg.x<=339 && game.redballImg.y>=425 && flagEndR==1)// && !(game.redballImg.y>game._director.height-160))
			{
				startTimeStampR=new Date().getTime();
				if(firstTripR){
					firstTripR=false;
				}
				pausedTimeR=0;
				xVelocityR=Math.abs(xVelocityR);
				startXR=330;
				if(xVelocityR<=0.1)
				{
					makeImageAnimate(0,true);
				}
				else if(xVelocityR<0.7 && yVelocityR<0.7)
				{
					xVelocityR=0;
					yVelocityR=0;
					makeImageAnimate(0,true);
				}
				else if(yVelocityR==0.0 && xVelocityR>0.1)
				{
					xVelocityR=0;
					yVelocityR=0;
					makeImageAnimate(0,true);
				}
				else 
				{
					flagEndR=0;
					attachBallR=true;
					attachBallR1=true;
					makeImageAnimate(flagEndR,true);
				}
			}
			else if((game.redballImg.x+game.redballImg.width/2)>=(382.5-game.redballImg.width/2) &&(game.redballImg.x+game.redballImg.width/2)<=(382.5+game.redballImg.width/2)){
				game.oDashTxtArr[8].setText("0.0");
				game.oDashTxtArr[5].setText('0.0');
		
			}
	//green ball's condition
			if(game.greenballImg.x+game.greenballImg.width>=419 && game.greenballImg.x<=436 && yVelocityDispG<(-yVelocityG+0.4)&& yVelocityDispG>(-yVelocityG-0.4) && flagEndG==0 )//&& !(game.greenballImg.y>game._director.height-160))
			{
				startTimeStampG=new Date().getTime();
				pausedTimeG=0;
				xVelocityG=-Math.abs(xVelocityG);
				startXG=410;
				flagEndG=1;
				attachBallG=true;
				attachBallG1=true;
				makeImageAnimate(1,true);
			}
			
			else if(game.greenballImg.x>=300 && game.greenballImg.x<=339 && game.greenballImg.y>=425 && flagEndG==1)// && !(game.greenballImg.y>game._director.height-160))
			{
				startTimeStampG=new Date().getTime();
				if(firstTripG){
					firstTripG=false;
				}
				pausedTimeG=0;
				xVelocityG=Math.abs(xVelocityG);
				startXG=330;

				if(xVelocityG==0.0 && !oneTime)
				{
					xVelocityG=0.2;
					yVelocityG=0.3;
					oneTime=true;
				}
				else if(yVelocityG==0.0 && xVelocityG>0.1)
				{
					xVelocityG=0.2;
					yVelocityG=0.3;
				}
				else
				{
				flagEndG=0;
				attachBallG=true;
				attachBallG1=true;
				makeImageAnimate(flagEndG,true);
				}
			}
			if(game.blueballImg.x+game.blueballImg.width>=419 && game.blueballImg.x<=436 && yVelocityDispB<(-yVelocityB+0.4)&& yVelocityDispB>(-yVelocityB-0.4) && flagEndB==0)// && !(game.blueballImg.y>game._director.height-160))
			{
				startTimeStampB=new Date().getTime();
				pausedTimeB=0;
				xVelocityB=-Math.abs(xVelocityB);
				startXB=410;
				flagEndB=1;
				attachBallB=true;
				attachBallB1=true;
				makeImageAnimate(1,true);
			}
			else if(game.blueballImg.x>=300  && game.blueballImg.x<=339 && game.blueballImg.y>=425 && flagEndB==1 )//&& !(game.blueballImg.y>game._director.height-160))
			{
				startTimeStampB=new Date().getTime();
				if(firstTripB){
					firstTripB=false;
				}
				pausedTimeB=0;
				xVelocityB=Math.abs(xVelocityB);
				startXB=330;
				if(xVelocityB==0.0 && yVelocityB>=1.4)
				{
					makeImageAnimate(0,true);
				}
				else if(yVelocityB==0.0 && xVelocityB>0.1)
				{
					xVelocityB=0.2;
					yVelocityB=0.3;
				}
				else{
					flagEndB=0;
					attachBallB=true;
					attachBallB1=true;
					makeImageAnimate(flagEndB,true);
				}
			}
			
			if(game.redballImg.y>=600)
			{
				game.redballImg.visible=false;
			}
	}	
	
	//=======================================================
	//Finds the distance and angle between two objects
	//=======================================================
	 function dist(xA, yA, xB, yB) {
        var distance = Math.sqrt(Math.pow((xB - xA), 2) + Math.pow((yB - yA), 2));
        var direction = Math.atan2(yB - yA, xB - xA);
        return [distance, direction];
    } 
	
	function makeImageAnimate(flagEnd,makeZero)
	{
		var Y=0;
		var X=0;
		if(makeZero)
		{
			if(rightHandCtr>0)
			{
				rightHandCtr=0;
			}
			
			if(leftHandCtr>0)
			{
				leftHandCtr=0;
			}
		
		}
		handTimerInstance=game._scene.createTimer(
			0,
					Number.MAX_VALUE,
					function (scene_time, timer_time, timertask_instance) {   // timeout
						
						
					},
					
					function (scene_time, timer_time, timertask_instance) {   // tick
						
						if(flagEnd==0)
						{
							if(leftHandCtr==leftHandMovementArray.length)
							{
								timertask_instance.cancel();
							}
							else
							{
								game.smallLeftHand.x=leftHandMovementArray[leftHandCtr][0];
								game.smallLeftHand.y=leftHandMovementArray[leftHandCtr][1];
								leftHandCtr++;
							}	
							//Release the ball
							if(leftHandCtr>leftHandMovementArray.length/2){
								if(flagEndR==0){
									attachBallR=false;
								}
								if(flagEndG==0){
									attachBallG=false;
								}
								if(flagEndB==0){
									attachBallB=false;
								}
							}
							
							if(leftHandCtr>=leftHandMovementArray.length){
								if(flagEndR==0){
									attachBallR1=false;
								}
								if(flagEndG==0){
									attachBallG1=false;
								}
								if(flagEndB==0){
									attachBallB1=false;
								}
							}
						}
						if(flagEnd==1)
						{
							if(rightHandCtr==rightHandMovementArray.length)
							{
								timertask_instance.cancel();
							}
							else
							{
								game.smallRightHand.x=rightHandMovementArray[rightHandCtr][0];
								game.smallRightHand.y=rightHandMovementArray[rightHandCtr][1];
								rightHandCtr++;
							}	

							//Release the ball
							if(rightHandCtr>rightHandMovementArray.length/2){

								if(flagEndR==1){
									attachBallR=false;
								}
								if(flagEndG==1){
									attachBallG=false;
								}
								if(flagEndB==1){
									attachBallB=false;
								}
								
							}
							
							if(rightHandCtr>=rightHandMovementArray.length){

								if(flagEndR==1){
									attachBallR1=false;
								}
								if(flagEndG==1){
									attachBallG1=false;
								}
								if(flagEndB==1){
									attachBallB1=false;
								}
								
							}

						}
					
					},
					
					function (scene_time, timer_time, timertask_instance) {   
						// cancel
					}
			)
	}
	game.resetBtnMDownHandler = function(){
		
		resetAll();
		
	}
	
	game.pauseBtnMDownHandler = function(){
		
		if(!paused)
		{
			if(game.goFlag)
			{
			
				if(timerInstance!=null && handTimerInstance!= null)
				{
					pausedStartTime=new Date().getTime();
					timerInstance.cancel();
					handTimerInstance.cancel();
				}			
				paused=true;
				game.goFlag=false;
			}
		}
		else 
		{
			initialise();	
		}
	}
	function handleIncDec(mouseEvent){
		
		game.incDecTimer=game._scene.createTimer(
			    
			     0,
                    Number.MAX_VALUE,
                    
                    function (scene_time, timer_time, timertask_instance) {   // timeout
                    },
                    function (scene_time, timer_time, timertask_instance) {  
                    	
                    	makeTimerDelay++;
                    	
                    	if(makeTimerDelay%5==0)
                    	{
                    		tick(mouseEvent);
                    		makeTimerDelay=0;
                    	}
                        
                    },
                    function (scene_time, timer_time, timertask_instance) {   // cancel
                    }
               )
           }
	
	function tick(mouseEvent){
		
		if(mouseEvent.source.id=='xVelInc' && !started)
		{
			if((parseFloat(game.oDashTxtArr[17].text)+0.1)<=10)
			{
				game.oDashTxtArr[17].setText((parseFloat(game.oDashTxtArr[17].text)+0.1).toFixed(1));
			}
		
		}
		
		else if(mouseEvent.source.id=='xVelDec' && !started) 
		{
			
			if( (parseFloat(game.oDashTxtArr[17].text)-0.1)>=0.0)
			{
				
			game.oDashTxtArr[17].setText((parseFloat(game.oDashTxtArr[17].text)-0.1).toFixed(1));
			
			}
			
		}
		
		else if(mouseEvent.source.id=='yVelInc'  && !started)
		{
			if((parseFloat(game.oDashTxtArr[16].text)+0.1)<=10)
			{
				game.oDashTxtArr[16].setText((parseFloat(game.oDashTxtArr[16].text)+0.1).toFixed(1));
			}
			
		}
		
		else if(mouseEvent.source.id=='yVelDec'  &&  !started)
		{
			
		    if((parseFloat(game.oDashTxtArr[16].text)-0.1)>=0.0)
			{
			game.oDashTxtArr[16].setText((parseFloat(game.oDashTxtArr[16].text)-0.1).toFixed(1));
			}
			
		}
				
	}
	
	function resetAll()
	{
		if( timerInstance!=null)
		{
			timerInstance.cancel();
			handTimerInstance.cancel();
			startTimeStampR=0;
			startTimeStampG =0;
			startTimeStampB =0; 
			currentTimeStamp=0;
			game.smallRightHand.x=418;
			game.smallRightHand.y=436;
			game.smallLeftHand.x=312;
			game.smallLeftHand.y=436;
		}
		game.redballImg.visible=true; 
		xVelocity=0.0;
		yVelocity=0.0;
		timeGap=0;
		paused=false;
		game.goFlag=false;
		started=false;
		game.redballImg.setLocation(320,424);
		game.blueballImg.setLocation(320,424);
		game.greenballImg.setLocation(320,424);
		startXR=320;
		startXB=320;
		startXG=320;
		startYR=424;
		startYB=424;
		startYG=424;
		flagEndG=1;
		flagEndR=1;
		flagEndB=1;
		attachBallR=false;
		attachBallG=false;
		attachBallB=false;
		attachBallR1=false;
		attachBallG1=false;
		attachBallB1=false;
		firstTripB=true;
		oneTime=false;
		firstTripR=true;
		firstTripG=true;
		game.oDashTxtArr[8].setText('- -');
		//set the y velocity text
		game.oDashTxtArr[4].setText('- -');
		//set the acceleration vertical text
		game.oDashTxtArr[5].setText('- -');
		//set the horizontal acceleration text
		game.oDashTxtArr[9].setText('- -');
	}

}
	 
)();