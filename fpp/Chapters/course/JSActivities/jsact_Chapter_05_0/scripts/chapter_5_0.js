//
//	Game Logic
//
(function(){	
	var oneMtInPx = 7.3,
	 count=0,
	 groundWidth = 300,
	 groundLevel = 550,
	 heliLevel = 316,
	 heliMassInKg = 2083,
	 initialVelocity = 0,
	 g = -9.8,
	 upwardForceInNewtons = 0,
	 downwardForceInNewtons = 0,
	 startTimeStamp,
	 currentTimeStamp,
	 elapsedTimeInSec,
	 si,
	 netForceInNewtons,
	 netAcceleration,
	 s,
	 finalVelocity,
	 timer = null,
	 incDecTimer=null,
	 timerStart = false,                // used for check if timer is running
	 height =0,                         // used for store the distance between plance and ground
	 heliHeight=316,                   // used to find the distance between plane and ground
	 pause = false,                    // used for checking plane is flying or not
	 planeLandorCrash=false,           // used for checking plane is landing or crashing 
	 minHeight=0.07;                  //to check perform pause function or not
	 
	game.incDecMDown = function(mouseEvent){
		_incDecHandler(mouseEvent);
	}
	
	game.incDecMUp = function(mouseEvent){
		 if(incDecTimer!=null){
		 	incDecTimer.cancel();
			count=0;
		 }
	}
	
	
	function _incDecHandler(mouseEvent){
		incDecTimer=game._scene.createTimer(
            0,
            Number.MAX_VALUE,
            function (scene_time, timer_time, timertask_instance) {   // timeout
            },
            function (scene_time, timer_time, timertask_instance) {   // tick  
               if(count%20==0){
               	if(mouseEvent.source.id=='iniVelInc')
                {			
					if(game.NForce<30000){
							incDecNetForce(true);
					}
				}
				else{
				       if(game.NForce>0||timerStart==true){
							incDecNetForce(false);
						}	
					
				}   
				 count=0;
               }         
               count++;     
                         
            },
            function (scene_time, timer_time, timertask_instance) {   // cancel
            }
          )
	}
		
	game.resetBtnMDownHandler = function(){
		
	   
		planeLandorCrash=false;
		cancelTimer();
		timerStart=false;	
	    initialVelocity=0;
	    height=0;
	    game.NForce=0;
	    game.spaceshipImg.y=heliHeight;
		game.setNetForceTxt(String(game.NForce));
		game.setVelocityTxt("0.00");
		game.setAccelerationTxt("0.00");
		game.setHeightTxt(String(minHeight));
	    timer=null;
	    heliLevel=heliHeight;
	    netAcceleration=0;
	    pause=false;
	   
	    game.__bannerDisplay(0, 0, 0, -70, false);
	    game.startFlyAnimation();
		
		
	}
	
	game.pauseBtnMDownHandler = function(){
		
	  	
	   if(height>minHeight){   // if plane is not in the ground then perform pause functionalities
	   	
	   	  if(!pause){         // checking pause already clicked or not
			pause=true;
		    cancelTimer();	
		    game.spaceshipImg.setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('copterbreake'), 2, 7));		    	
		} 
		else{
			pause=false;			
			game.startFlyAnimation();			
			initialVelocity=finalVelocity;
			startMotion();
		}
	   }
		
		
	}
	
	
	game.startFlyAnimation = function(){
		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('copterbreake'),2,7).
                        addAnimation("fly",     [0,1,2,3], 70);
                                          
        game.spaceshipImg.setBackgroundImage(si).playAnimation("fly");    
	}
	
	game.keys = function(spaceshipImg){
   		CAAT.registerKeyListener( function k1( keyEvent ){
		
				if(keyEvent.getKeyCode()==CAAT.Keys.UP){	
						
					if(keyEvent.getAction()==='down'){
						
						if(game.NForce<30000){
							incDecNetForce(true);
						}				
						
					}			
												
				}
			     
			    if(keyEvent.getKeyCode()==CAAT.Keys.DOWN){
			    	
			    	if(keyEvent.getAction()==='down'){								    		
			    		
			    		if(game.NForce>0||timerStart==true){
							incDecNetForce(false);
						}	
					}				    		
			    	
			    }			   
			
		});
			
	}	

   function incDecNetForce(incDecValue){
   	    if(incDecValue){
   	    	game.NForce+=250;
			startMotion();
   	    }else{
   	    	game.NForce-=250;
			startMotion();
   	    }
   	        
   }
	
	function startTimer(){
		timer=game._scene.createTimer(
            0,
            Number.MAX_VALUE,
            function (scene_time, timer_time, timertask_instance) {   // timeout
            },
            function (scene_time, timer_time, timertask_instance) {   // tick                
                 moveHelicopter()              
            },
            function (scene_time, timer_time, timertask_instance) {   // cancel
            }
    )
	}
	//======================================
	//Timer function
	//======================================
	function cancelTimer(){
		
			if(timer!=null){
				timer.cancel();
				timer=null;
				timerStart=false;
			}				
		 
	}	
	
	
	function startMotion(){
		
		  if(!pause&&!planeLandorCrash){	  	
		  	
		  	 game.setNetForceTxt(String(game.NForce));
			game.startFlyAnimation();
		  	netForceInNewtons = game.NForce;
			netAcceleration = netForceInNewtons / heliMassInKg;
			 game.setAccelerationTxt(netAcceleration.toFixed(2));			
			startTimeStamp = new Date().getTime();
		    heliLevel=game.spaceshipImg.y;
		    
		    if(!timerStart){
		    	startTimeStamp =new Date().getTime();
		    	startTimer();
		    	timerStart=true;
		    }else{
		    	 initialVelocity=finalVelocity;
		    	 startTimeStamp =currentTimeStamp;
		    }
		  }	    
		    
			
	}
	
	game.setVelocityTxt = function(value)
    {
      game.oDashTxtArr[8].setText(value+" "+game.velocitydefine);
     }
 
    game.setHeightTxt = function(value){
	  game.oDashTxtArr[1].setText(value+" "+game.heightdefine);
    }
    game.setAccelerationTxt = function(value){
	  game.oDashTxtArr[4].setText(value+" "+game.acceldefine+String.fromCharCode(178));
    }    
    game.setNetForceTxt = function( value){
	  game.oDashTxtArr[11].setText(value+" "+game.forcedefine);
    }
	
	function moveHelicopter(){
		currentTimeStamp = new Date().getTime();
		elapsedTimeInSec = ( currentTimeStamp - startTimeStamp ) / 1000;
		finalVelocity = initialVelocity + ( netAcceleration * elapsedTimeInSec );
		s = ( initialVelocity * elapsedTimeInSec ) + 0.5 * netAcceleration * Math.pow(elapsedTimeInSec,2);
		s = s * oneMtInPx;			
		
		if((heliLevel-s)<heliHeight){	 	
			    	    
			    		game.spaceshipImg.y=(heliLevel-s);	
			    		
			    		if((heliLevel-s)>0){
			    			height=minHeight+(heliHeight-(heliLevel-s))/oneMtInPx;	
			    		}				    		
					    else
					    {
							height=minHeight+(heliHeight+(-(heliLevel-s)))/oneMtInPx;
						}	
								    										    	
			    		
		}else{
			
			game.spaceshipImg.y=heliHeight;
			height=minHeight;
		    cancelTimer();
		    
		    planeLandorCrash=true;
		    if(finalVelocity>-2){
		    	safeLanding();
		    }else{
		    	crashingAnimation();
		    }
		    
			finalVelocity=0;	
			
			 game.setAccelerationTxt("0.00");
			 game.setNetForceTxt("0");
		}		
		 game.setHeightTxt(height.toFixed(2)+"");
		 game.setVelocityTxt(finalVelocity.toFixed(2)+"");
		
		
		}
		
		// helicopter image breaking animation
		
		function crashingAnimation(){
			
		  
			// FAILURE LANDING BANNER	
		game.__bannerDisplay(1, 2, 0, -70, false);	
          var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('copterbreake'),2,7).
                        addAnimation("fly", [5,6,7,8,9,10,11,12,13], 200, setBrokenImage);
                  
           game.spaceshipImg.setBackgroundImage(si).playAnimation("fly");  		
		}	
	    
	    //setting helicopter broked image	    
		function setBrokenImage(){
			game.spaceshipImg.setAnimationImageIndex([13]);		
			
		}
	 
	    // setting helicopter safe landing image
	    function safeLanding(){	    	
	    	
			// SUCCESSFUL LANDING BANNER
			game.__bannerDisplay(2, 1, 0, -70, false);
			
	    	game.spaceshipImg.setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('copterbreake'), 2, 7));
			
			
	    }
	
	
})();