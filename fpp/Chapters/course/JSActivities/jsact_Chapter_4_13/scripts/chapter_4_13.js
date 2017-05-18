//
//	Game Logic
//
(function(){
	
	
	var velocity=15,
	    stickAngle=-8,
	    count=0,
	    g= -9.8,
		startTimeStamp,
 		currentTimeStamp,
		elapsedTimeInSec,
		initialVelocity= -9.8,
		bananaTimer=null,
		professorTimer=null,
		drawTimer=null,
	    incDecTimer=null,
	    treeLevel = 20,
	    oneMtInPx = 23,	
	    minHeight=0,
	    hVelocity=0, 
	    vVelocity=0,
	    maxRadius= 533,
	    minRadius = 178,
	    bananaXPosition = 72,
	    bananaYPosition =425,
	    rotateBehaviour = null,
	    lineStartPointRadius =54,
	    catchBanana= false,
	    pauseTimeStamp =0,
	    timerStartStamp =0,
	    pause = false,
	    start = false,
	    initialStart = true,
	    
	    isNotCatchRunning = false,
	    isCatchRunning = false,
	    
	    isCatchEndRunning = false,
	    isNotCatchEndRunning = false,   
	    isNotCatchEnd = false,
	    isCatchEnd = false,
	    
	    
	   
	    catchStrIdx = 1,
	    notCatchStrIdx = 1,
	    catchEndStrIdx = 0,
	    notCatchEndStrIdx = 0,
	    
	    catchArr = [],
	    endCatchArr = [],
	    notCatchArr = [],
	    notCatchEndArr = [];	    
	   
	    
	    
	game.goBtnMDownHandler =function(){	 
	    
	      
	   	 
	      
	      if(!start){
	      	if(initialStart){
	        	startTimeStamp = new Date().getTime();
	        	game.monkeyHead.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('monkeyWithOutBanaHead'),1,1));	
	        	catchArr 					=	getArrayValues(1,23);
	        	catchEndArr					=   getArrayValues(0,23);
	        	notCatchArr					= 	getArrayValues(1,24);
	        	notCatchEndArr				= 	getArrayValues(0,21);	 
	        }
	        
	        
	    	if(!pause){
	    	  	  	    	  
	    	  	  	//game.__bannerDisplay(0, 0, -70, 0, false);   	 	
	    			hVelocity = velocity * Math.cos((Math.PI/180)*stickAngle);
	    			vVelocity = velocity * Math.sin((Math.PI/180)*stickAngle);  
	    			game.banana.visible = true;
	    	  	  	setHorizontalVelocityTxt(hVelocity);
	    			setverticalAccelerationTxt(g);
	    			game.actorContainer[0].visible = false;
	    			game.actorContainer[1].visible = false;
	    			pause = false;
	   		}
	        else{
	        	  timerStartStamp   = new Date().getTime();
	        	  startTimeStamp = startTimeStamp +   timerStartStamp - pauseTimeStamp; 
	        	  pause= false;
	        }  	    	
	    	startMovement();
	    	start = true;
	      }
	        
	    
	   
	}
	
	
	
	game.resetBtnMDownHandler =function(){
		
		
		cancelTimer(professorTimer);
		cancelTimer(bananaTimer);
		game.banana.x = 80;
		game.banana.y = 420;
	//	game.falldownImg.x = 465;
		game.falldownImg.y = 21;
		game.banana.setRotation(0);
		game.banana.visible = false;
		game.falldownImg.visible = true;	
	    catchStrIdx = 1;
	    notCatchStrIdx = 1;
	    isCatchEnd=false,
	    isNotCatchEnd = false,
	    
	    isNotCatchEndRunning = false;
	    isCatchRunning = false;	 
	    isNotCatchRunning = false;	
	    isCatchEndRunning = false;  
	    game.stage.visible = true;
	    catchBanana = false;
	    
	
	
		game.catchImg.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('catch'),4,6));
				game.notcatchImg.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('notcatch'),5,6));
			
				game.monkeyHead.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('monkeyWithBananaHead'),1,1));
	
	
		game.professorHangAnimation();
		
		game.actorContainer[0].visible = true;
		game.actorContainer[1].visible = true;
		setTextValuesEmpty();
		initialStart = true;
		start = false;
		pause = false;
		
		pauseTimeStamp =0;
		game.bannerDown = true;
		game.__bannerDisplay(0, 0, 0, -70, false);
	
	}
	game.pauseBtnMDownHandler =function(){		
		  
		  if(!pause && start){
		  	pause = true;
			handlePause();	
			pauseTimeStamp = new Date().getTime();		
		    initialStart =false;
		  }		
	
	}
	game.incDecHandler = function(obj){
		
	}
	game.incDecMDown = function(mouseEvent){
		incDecHandler(mouseEvent);
	}
	game.incDecMUp = function(mouseEvent){
	    if(incDecTimer!=null){
	    	incDecTimer.cancel();
	    }
	}
	function cancelTimer(timer){
		if(timer!=null){
			timer.cancel();
			timer=null;
		}		
	}
	
	
	
	
	
	
	function handlePause(){
		
		    cancelTimer(bananaTimer);
			 cancelTimer(professorTimer);			
          
             if(isCatchRunning||isNotCatchRunning){                	
             	
             	if(isCatchRunning){ 
             		if(isCatchEndRunning){             			         	  
             			catchEndStrIdx = game.catchImg.backgroundImage.spriteIndex;
             			game.catchImg.setAnimationImageIndex([catchEndStrIdx]);  
             			catchEndArr = getArrayValues(catchEndStrIdx,23);
             		} else{             			         	  
             			catchStrIdx = game.catchImg.backgroundImage.spriteIndex;
             			game.catchImg.setAnimationImageIndex([catchStrIdx]);  
             			catchArr = getArrayValues(catchStrIdx,23);
             			if(catchStrIdx==23){
             				isCatchEndRunning = true;
             			}
             		}             		
             		
             	}
             	else if(isNotCatchRunning){
             		if(isNotCatchEndRunning){
             			notCatchEndStrIdx= game.notcatchImg.backgroundImage.spriteIndex;
             			game.notcatchImg.setAnimationImageIndex([notCatchEndStrIdx]); 
             			notCatchEndArr = getArrayValues(notCatchEndStrIdx,21);             		
             		}else{
             			notCatchStrIdx= game.notcatchImg.backgroundImage.spriteIndex;
             				game.notcatchImg.setAnimationImageIndex([notCatchStrIdx]); 
             			notCatchArr = getArrayValues(notCatchStrIdx,29);
             			if(catchStrIdx==29){
             				isNotCatchEndRunning = true;
             			}
             		}
             		
             	}            
             	
             	
             	
             }            
             
             else{
             	
             	game.falldownImg.setAnimationImageIndex([game.falldownImg.backgroundImage.spriteIndex]);                   	
             	            
             }            
             
             start = false;	     
		    
		     
	}
	
	
		function startMovement(){
			
			if(isCatchRunning){	 
	      if(!isCatchEnd){
	      	
	      	if(isCatchEndRunning){
	    		catchEndAnimation(catchEndArr);
	    	}   	
	    	else{
	    		catchAnimation(catchArr);
	    	} 
	      }   	
	    	
	    	    	
	    }
	    else if(isNotCatchRunning){
	      if(!isNotCatchEnd){
	      
	      	if(isNotCatchEndRunning){
	    		notCatchEndAnimation(notCatchEndArr);
	    	}
	    	else{
	    	  		notCatchAnimation(notCatchArr);
	    	}
	      }	
	    	
	    	
	    }
	    else{
	    	if(catchBanana){
	    		professorWithBanana()
	    	}else{
	    		professorWithOutBanana();	
	    	}	
	    	setRotateAnimationBanana();    	
			startProfessorTimer();	
			startBananaTimer();
	    }		
	    
		
	}
	
	
	function setRotateAnimationBanana(){
		
        rotateBehaviour =  new CAAT.RotateBehavior().
                    setFrameTime(0,1000).
                    setValues(0,2*Math.PI).
                    setId(8).
                    setCycle(true);
        game.banana.addBehavior(rotateBehaviour);
	}

	
	
	
	function startProfessorTimer(){
		professorTimer=game._scene.createTimer(
            0,
            Number.MAX_VALUE,
            function (scene_time, timer_time, timertask_instance) {   // timeout
            },
            function (scene_time, timer_time, timertask_instance) {   // tick                
                 movementProfessor();
                            
            },
            function (scene_time, timer_time, timertask_instance) {   // cancel
            	
            }
       )
    }
    
    function startBananaTimer(){
    	    bananaTimer=game._scene.createTimer(
            0,
            Number.MAX_VALUE,
            function (scene_time, timer_time, timertask_instance) {   // timeout
            },
            function (scene_time, timer_time, timertask_instance) {   // tick             
                moveBanana();            
            },
            function (scene_time, timer_time, timertask_instance) {   // cancel            
            	rotateBehaviour.cycleBehavior = false;
            }  
            )  
   }

 
	
	function movementProfessor(){				
		
		currentTimeStamp = new Date().getTime();
		elapsedTimeInSec = ( currentTimeStamp - startTimeStamp ) / 1000;
		s = 0.5 * g * Math.pow(elapsedTimeInSec,2);
		s = s * oneMtInPx;					
		
		
		if((treeLevel-s)>=game.notcatchImg.y+119){
			game.falldownImg.visible=false;		
			game.stage.visible = false;	
			if(catchBanana){	
				game.__bannerDisplay(2, 1, 0, -70, false);				
				catchAnimation(catchArr);       			
			}
			else
			{		
				notCatchAnimation(notCatchArr);				
        		game.__bannerDisplay(1, 2, 0, -70, false);
		    }			
				
			cancelTimer(professorTimer);
			
		}		
		else{
			game.falldownImg.y=treeLevel-s;
		}
		
		
	}	
	
	function moveBanana(){	
		
		currentTimeStamp = new Date().getTime();
		elapsedTimeInSec = ( currentTimeStamp - startTimeStamp ) / 1000;
		finalVelocity = vVelocity + ( -g * elapsedTimeInSec);
		setVerticalVelocityTxt(finalVelocity);
		
		sH =hVelocity*elapsedTimeInSec;
		sV= vVelocity*elapsedTimeInSec+ (0.5 * -g * Math.pow(elapsedTimeInSec,2));				
		
		if(game.banana.y >470){
			cancelTimer(bananaTimer);
			game.banana.y = 474;			
			setTextValuesZero();
		}
		else{
			
			game.banana.x = bananaXPosition+ (sH * oneMtInPx);
			game.banana.y = bananaYPosition + (sV * oneMtInPx);
			if(((game.banana.x+game.banana.width/2) >(game.falldownImg.x+game.falldownImg.width/2)) && (stickAngle.toFixed(1)>=-44.0) && (stickAngle.toFixed(1)<=-40.0))			
			{				
				            
							professorWithBanana();
							cancelTimer(bananaTimer);
							setTextValuesZero();
							catchBanana = true;
							
			}
			
		}
		
	}			
	
	
	function professorWithOutBanana(){
		
		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('falldown'),4,3).
                        addAnimation("professorwithoutbananaAnimation", [6,7,8], 70);                     
        game.falldownImg.setBackgroundImage(si).playAnimation("professorwithoutbananaAnimation"); 
	}
	
	function professorWithBanana(){		
		
		game.banana.visible = false;
		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('falldown'),4,3).
                        addAnimation("professorwithbananaAnimation", [9,10,11], 50);                             
        game.falldownImg.setBackgroundImage(si).playAnimation("professorwithbananaAnimation");
	}	
	
	game.professorHangAnimation = function(startIndex){
		
		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('falldown'),4,3).
                        addAnimation("professorhangAnimation", [0,1,2,3,4,5], 350);                     
        game.falldownImg.setBackgroundImage(si).playAnimation("professorhangAnimation");
	}
	
		
	function notCatchAnimation(arr){
		
		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('notcatch'),5,6).
                        addAnimation("notcatchAnimation", arr, (arr.length*4) ,setBackgroundNotCatch);   
                isNotCatchRunning = true;           
           	game.notcatchImg.setBackgroundImage(si).playAnimation("notcatchAnimation"); 
	}
	
	
	
	function catchAnimation(arr){
	
		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('catch'),4,6).
 		      addAnimation("catchAnimation", arr, (arr.length*4),setBackgroundCatch); 		      
 		isCatchRunning = true;
         game.catchImg.setBackgroundImage(si).playAnimation("catchAnimation"); 
      
	}	
	
	
	function setBackgroundCatch(){			
			catchEndAnimation(catchEndArr);						
	}
	
	

	function catchEndAnimation(arr){		

		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('catchend'),4,6).
					   addAnimation("catchendAnimation", arr, (arr.length*4) ,setBackgroundCatchEnd); 		  
		isCatchEndRunning = true;	    
		game.catchImg.setBackgroundImage(si).playAnimation("catchendAnimation"); 
						
 
	    
	}

		
	function notCatchEndAnimation(arr){
		
		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('notcatchend'),4,6).
	                    addAnimation("notcatchendAnimation", arr, (arr.length*4) ,setBackgroundNotCatchEnd);   
	            isNotCatchEndRunning = true;           
	       	game.notcatchImg.setBackgroundImage(si).playAnimation("notcatchendAnimation"); 
	       
	}
	
	function getArrayValues(strIdx,endIdx){
		var arr = [];	
		for(var i=strIdx;i<=endIdx;i++){
			arr[arr.length]= i;
		}
		return arr;
	}
	
	
	function setBackgroundNotCatch(){	
		notCatchEndAnimation(notCatchEndArr);		
	}
	

	function setBackgroundNotCatchEnd(){			
		game.notcatchImg.setAnimationImageIndex([21]);
		isNotCatchEnd = true;
	}
	
	function setBackgroundCatchEnd(){		
		game.catchImg.setAnimationImageIndex([23]);	
		isCatchEnd = true;
	}	
	
	
	
	function getAngle(xA,yA,xB,yB){
        var magnitude = Math.sqrt(Math.pow((xA - xB),2) + Math.pow((yA - yB),2));
        var direction = Math.atan2(yB-yA,xB-xA);
        return [magnitude,direction];
        
    }
	
	 game.onObjMove = function(a1) {			
				
		
	    
		game.x2 = (a1.x+a1.width/2);
		game.y2 = (a1.y+a1.height/2);		
		game.x3 = (a1.x+a1.width/2);
		game.y3 = (a1.y+a1.height/2);	
		//green - two parts  
	    var functionValue = getAngle(game.x,game.y,game.x2,game.y2);
	    var checkAngle = ((180/Math.PI)*functionValue[1]);
	    
	    if(checkAngle>=-60&&checkAngle<=10){
	    	 	    	
	    	stickAngle=checkAngle;
	    	setAngleTxt(stickAngle);
			game.monkeyHead.setRotation(stickAngle/(180/Math.PI));
			//game.monkeyHead.setRotationAnchored(stickAngle/(180/Math.PI), 0.5, 0.5);
	    }
	    else{
	    	if(stickAngle>=0){
	    		stickAngle=10;
	    	}
	    	else{
	    		stickAngle=-60;
	    	}
	    	 game.monkeyHead.setRotation(stickAngle/(180/Math.PI));
	    	setAngleTxt(stickAngle); 	
	    	
	    }			
	    var getXY_snap = circlePoint(game.x, game.y, a1, stickAngle);
			game.x2=  getXY_snap[0];
			game.y2 = getXY_snap[1];
			game.x3 = getXY_snap[0];
			game.y3 = getXY_snap[1];
			
			var getxy = getXY(stickAngle);
					   game.x1 = getxy[0];
					   game.y1 = getxy[1];
		 
		   
		    drawPaths( game.Rays[0], {x:game.x1, y:game.y1}, {x:game.x2, y:game.y2}, {x:game.x3, y:game.y3}, false, 'blue', 1, 'rightArrowHead', false);
	
	}
	
	
	
	
	function circlePoint(cx, cy, actor, roota) {
      
        var x1=actor.x+actor.width/2;
        var y1 = actor.y+actor.height/2;
    
    
        var ang = Math.atan2(y1-cy , x1-cx);
        
        var distance =Math.sqrt(Math.pow((x1-cx),2) + Math.pow((y1-cx),2));         
   
        var angleValue=getAngle(cx,cy,x1,y1);
        var distance = angleValue[0];
        if(distance>maxRadius){
	    	x1 = cx + maxRadius * Math.cos(ang);
	    	y1 = cy + maxRadius * Math.sin(ang);	    	
	    	velocity = 50;
	    	
	    }
	    
		else if(distance<minRadius){
			x1 = cx + minRadius * Math.cos(ang);
			y1 = cy + minRadius * Math.sin(ang);
			velocity = 15;
		}
		else{
			velocity = ((distance-minRadius)/10.42)+15;
		}	 	    
				
		var r = getAngle(cx, cy, x1, y1);
        var ang = ( Math.PI / 180 ) * roota;
       
        var xValue = cx + (r[0] * Math.cos(ang));
        var yValue = cy + (r[0] * Math.sin(ang));	    
	    setBananaVelocity(velocity);
	 
        return [xValue, yValue];
    }        
    
    
    
    	function getXY(angle){
		var setAngle=0;
		var x1,y1;
									
		if(angle>=0){
						setAngle =90-angle;
						x1 = game.x + (lineStartPointRadius * Math.sin(setAngle/(180/Math.PI)));
						y1 = game.y + (lineStartPointRadius * Math.cos(setAngle/(180/Math.PI)));
					}
				else{
						setAngle = -(angle);
						x1 = game.x + (lineStartPointRadius * Math.cos(setAngle/(180/Math.PI)));
						y1 = game.y - (lineStartPointRadius * Math.sin(setAngle/(180/Math.PI)));							
					}			
			return [x1,y1];						
			
	}
	
	
	
	function setObjectPosition(angle,velocity){		
		
		
		game.monkeyHead.setRotation(angle/(180/Math.PI));	
		
		var distance = minRadius+((velocity-15)*10.42);
		
		var dx = distance * Math.cos(angle/(180/Math.PI));
		var dy = distance * Math.sin(angle/(180/Math.PI));
		
		game.x2 = game.x + dx;
		
		game.y2 = game.y + dy;
		
		game.x3 = game.x + dx;
		
		game.y3 = game.y + dy;
		
		var getxy = getXY(angle);
		game.x1 = getxy[0];
		game.y1 = getxy[1];
		
			
		
		game.actorContainer[0].x = game.x2 - game.actorContainer[0].width/2;
		
		game.actorContainer[0].y = game.y2 - game.actorContainer[0].height/2;		
		 
		drawPaths( game.Rays[0], {x:game.x1, y:game.y1}, {x:game.x2, y:game.y2}, {x:game.x3, y:game.y3}, false, 'blue', 1, 'rightArrowHead', false);
	}
	
	//=======================================================
	// Lets draw the rays with arrow heads
	//=======================================================
	function drawPaths( obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
	
		var headlen = 15;	// length of head in pixels
		obj.paint= function(_director, time) {	
			
			var dx = lineTO.x - moveTO.x;
			var dy = lineTO.y - moveTO.y;
			var angle = Math.atan2(dy,dx);
					  
			var canvas = _director.ctx;
			canvas.strokeStyle = strokeColor;
			canvas.fillStyle = strokeColor;
			canvas.lineWidth = lineWidth;
			canvas.beginPath();						
			
			 if(arrowDir == 'rightArrowHead'){
				canvas.moveTo( (lineTO.x), lineTO.y);
				canvas.lineTo( (lineTO.x) - headlen * Math.cos(angle-Math.PI/10), lineTO.y - headlen*Math.sin(angle-Math.PI/10));
				canvas.lineTo( (lineTO.x) - headlen * Math.cos(angle+Math.PI/10), lineTO.y - headlen*Math.sin(angle+Math.PI/10));
				canvas.fill();
			}		
			if(middleArrowHeadReq) {
				var dx = midPoint.x - moveTO.x;
				var dy = midPoint.y - moveTO.y;
				var angle = Math.atan2(dy,dx);
				canvas.fillStyle = strokeColor;
				canvas.moveTo( (midPoint.x - 5), midPoint.y);
				canvas.lineTo( (midPoint.x - 5) - headlen * Math.cos(angle-Math.PI/10), midPoint.y - headlen*Math.sin(angle-Math.PI/10));
				canvas.lineTo( (midPoint.x - 5) - headlen * Math.cos(angle+Math.PI/10), midPoint.y - headlen*Math.sin(angle+Math.PI/10));
				canvas.fill();
			}
			if(isDashed) {
				canvas.dashedLine(moveTO.x, moveTO.y, midPoint.x, midPoint.y, lineTO.x, lineTO.y, [10,10]);	
			} else {			
				canvas.moveTo(moveTO.x, moveTO.y);
				canvas.lineTo(lineTO.x, lineTO.y);
			}
			canvas.lineJoin = 'round';
			canvas.lineCap = 'round';
			canvas.closePath();	
			canvas.stroke();	
		};	
	}	
	
	
	  
    //Setting Text Values
    
    
    
	function setAngleTxt(value){
		var val=value.toFixed(1);
		if(val==0.0){
			game.IncDecValArray[0].setText("0.0");
		} else{			
			game.IncDecValArray[0].setText((-value).toFixed(1));
		}

	}
	
	function setBananaVelocity(value){
		game.IncDecValArray[1].setText(value.toFixed(1));
	}
	
	
	function setHorizontalVelocityTxt(value){
		
		game.oDashTxtArr[9].setText(value.toFixed(1));
	}
	
	function setHorizontalAccelerationTxt(value){
		game.oDashTxtArr[11].setText(value.toFixed(1));
	}
	
	function setVerticalVelocityTxt(value){
		game.oDashTxtArr[3].setText((-value.toFixed(1)));
	}
	
	function setverticalAccelerationTxt(value){
		game.oDashTxtArr[5].setText(value.toFixed(1));
	}
	
	
	function setTextValuesEmpty(){
		game.oDashTxtArr[3].setText("--");
		game.oDashTxtArr[5].setText("--");
		game.oDashTxtArr[9].setText("--");
		game.oDashTxtArr[11].setText("--");
	}
	
	
	function setTextValuesZero(){
		game.oDashTxtArr[3].setText("0.0");
		game.oDashTxtArr[5].setText("0.0");
		game.oDashTxtArr[9].setText("0.0");
		game.oDashTxtArr[11].setText("0.0");
	}
	
	function incDecHandler(mouseEvent){
		
	  if(!start){
		incDecTimer=game._scene.createTimer(
            0,
            Number.MAX_VALUE,null,
            function (scene_time, timer_time, timertask_instance) {   // tick  
               if(count%5==0){
               	if(mouseEvent.source.id=='iniVelInc')
                {		
                	var vel =velocity.toFixed(1);
					if(vel<50.0){
							velocity=velocity+0.1;
							setBananaVelocity(velocity);
					}
				}
				else if(mouseEvent.source.id=='iniVelDec'){
			
					var vel =velocity.toFixed(1);
					  if(vel>15.0){
					  	   velocity=velocity-0.1;
					  	   setBananaVelocity(velocity);
					  }
				}  
				else if(mouseEvent.source.id=='accInc') {
					  var stAng =stickAngle.toFixed(1);
					  if(stAng>-60.0){
					  	 	stickAngle=stickAngle-0.1;
					  	 	setAngleTxt(stickAngle);					  	 	
					  }
					  
					 
				}
				else{
					   var stAng =stickAngle.toFixed(1);
					  if(stAng<10.0){
					  		stickAngle=stickAngle+0.1;
					  		setAngleTxt(stickAngle);
					  }
					  
				}
				 count=0;
				 setObjectPosition(stickAngle,velocity);
               }         
               count++;     
                         
            },null
          )
         }
	}
	
	
})();