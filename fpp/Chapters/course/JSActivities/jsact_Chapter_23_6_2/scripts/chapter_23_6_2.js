//
//	Game Logic
//
(function(){


    var incDecTimer=null;
    var currentX;
    var currentY;
    var xMin = 10;
    var yMin = 10;
    var count =0;
    var pathBehaviour = null;
    
	
	game.resetBtnMDownHandler = function(){		
		if(count>0){
		game.actorContainer[game.moveIndex].emptyBehaviorList();
		game.actorContainer[game.moveIndex].setLocation(game.initialPlace[game.moveIndex][0],game.initialPlace[game.moveIndex][1]);
		game.dragContainer[game.moveIndex].emptyBehaviorList();
		game.dragContainer[game.moveIndex].setLocation(game.initialPlace[game.moveIndex][0],game.initialPlace[game.moveIndex][1]);
		}		
		cancelTimer(incDecTimer);
		game.__bannerDisplay(0, 0, -70, 0, false);
		game.dragStart= false;		
		count = 0;
		setEnableEvents(true);
		game.Values = [7.000,3.000,0.000,0.000,0.000];
		setResetValues();
		game.oDashTxtArr[1].setText("0");
		game.isGameOver = false;
	}
	
	
	game.performActions = function(index){
		setEnableEvents(false);
		var moveTo = false;		
		var matchVal = 0;	
		for(var i=0;i<game.actorContainer.length;i++){
			if(i!=index){
				if(getInterceptObject(game.actorContainer[index],game.actorContainer[i])){					
					matchVal = i;
					moveTo = true;							
				}
			}			
		}
		
	
		if(!moveTo){				
			resetPosition(index);
		}else{
			setPathBehaviour(game.actorContainer[index],game.actorContainer[matchVal], game.dragContainer[index],index,matchVal);	
		}	
			
		
		
	}
	
	
   function setPathBehaviour(object1,object2,dragObject,index,i){
   	
   	
   	pathBehaviour = new CAAT.Behavior.PathBehavior().
            		setValues( new CAAT.Path().setLinear(object1.x,object1.y,object2.x+object2.width-18,object2.y).setInteractive(false) ).
        			setDelayTime(0, 300);        			
                   object1.addBehavior(pathBehaviour);
                   dragObject.addBehavior(pathBehaviour);
                   
                   pathBehaviour.addListener({
   								 behaviorExpired : function(behavior, time, actor) {
   								 	count = count+1;
   								 	game.oDashTxtArr[1].setText(count);
        							setIncDecTimer(index,i);
   						 }});
                   
   }

   
   
	
	function cancelTimer(timer){
		if(timer!=null){
			timer.cancel();
			timer = null;
		}
	}	
	
    
    function setIncDecTimer(index,changeValue){
		
		var firstValue = game.Values[index];
		var secondValue = game.Values[changeValue];		
	    
	    var startTimer = true;
	    
	    var smallValue;
	    var bigValue;
	    var bigIndex;
	    var smallIndex;
	    var colorValue;
	    if(firstValue>secondValue){
	    	smallValue = secondValue;
	    	bigValue = firstValue;
	    	bigIndex = index;
	    	smallIndex = changeValue;
	    }
	    else if(secondValue>firstValue){
	    	smallValue = firstValue;
	    	bigValue = secondValue;
	    	bigIndex = changeValue;
	    	smallIndex = index;
	    }
	    else{
	    	startTimer = false;
	    }
		var middleValue = (firstValue+secondValue)/2;		
		incDecTimer = game._scene.createTimer(
            8000,
            Number.MAX_VALUE,
            function (scene_time, timer_time, timertask_instance) {   // timeout
            },
            function (scene_time, timer_time, timertask_instance) {   // tick                
                    
                   if(startTimer){
                   	 if(smallValue<bigValue){
                   	 	smallValue = smallValue + 0.125;
                   	 	bigValue   = bigValue - 0.125;  
                   	 	setTextValues(smallIndex,bigIndex,bigValue,smallValue);
                		
                   	 }else{
                   	 	cancelTimer(incDecTimer);
                   	 }
                   }else{
                   	cancelTimer(incDecTimer);
                   }
                  
                           	
                                     
            },
            function (scene_time, timer_time, timertask_instance) {
            	
            	checkSuccess(middleValue);
            	game.txtContainer[index].setText(middleValue.toFixed(3));
                game.txtContainer[changeValue].setText(middleValue.toFixed(3)); 
                setTextValues(index,changeValue,middleValue,middleValue);
            	game.Values[index] = middleValue;
            	game.Values[changeValue] = middleValue;
            	resetPosition(index);
            }
       )
    }
         
     function setResetValues(){
     	for(var j=0; j<game.actorContainer.length; j++){
    	    game.actorContainer[j].removeChild(game.txtContainer[j]);
		}
		
		for(var i=0;i<game.actorContainer.length;i++){
			game.txtContainer[i] = game.__addTextOnImage(game.mainEleTxt[i][2], game.mainEleTxt[i][0], 'bold 14px Arial',  'left', game._director );
			game.txtContainer[i].setLocation(8,8);
			game.actorContainer[i].addChild(game.txtContainer[i]);
			
		}
     }    
         
    function setTextValues(smallIndex,bigIndex,bigValue,smallValue){
    	
    	for(var j=0; j<=game.actorContainer[smallIndex].getNumChildren(); j++){
    	    game.actorContainer[smallIndex].removeChild(game.txtContainer[smallIndex]);
		}
		
		for(var j=0; j<=game.actorContainer[bigIndex].getNumChildren(); j++){
    	    game.actorContainer[bigIndex].removeChild(game.txtContainer[bigIndex]);
    	    
		}
    
    	
    	if(smallValue>0){
    		game.txtContainer[smallIndex] = game.__addTextOnImage("#f00f00", "+"+ smallValue.toFixed(3)+" "+String.fromCharCode(181)+'C', 'bold 14px Arial',  'left', game._director );
    	}else{
    		game.txtContainer[smallIndex] = game.__addTextOnImage("#000", smallValue.toFixed(3)+" "+String.fromCharCode(181)+'C', 'bold 14px Arial',  'left', game._director );
    	}
    	
    	if(bigValue>0){
    		game.txtContainer[bigIndex] = game.__addTextOnImage("#f00f00", "+"+ bigValue.toFixed(3)+"  "+String.fromCharCode(181)+'C', 'bold 14px Arial',  'left', game._director );
    	}else{
    		game.txtContainer[bigIndex] = game.__addTextOnImage("#000",  bigValue.toFixed(3)+"  "+String.fromCharCode(181)+'C', 'bold 14px Arial',  'left', game._director );
    	}
    	game.txtContainer[bigIndex].setLocation(8, 8);
    	game.txtContainer[smallIndex].setLocation(8, 8);
    	game.actorContainer[bigIndex].addChild(game.txtContainer[bigIndex]);
    	game.actorContainer[smallIndex].addChild(game.txtContainer[smallIndex]);
    }
    
    function setEnableEvents(flag){
    	for(var i=0;i<game.dragContainer.length;i++){
    		game.dragContainer[i].enableEvents(flag);
    	}
    }
    
    function checkSuccess(middleValue){
    	middleValue = (Math.floor(middleValue * 1000)/1000);
    	if(middleValue == 1){
    		if(count == 5){
    			game.__bannerDisplay(2,1,-70,0,false);
    		}else{
    			game.__bannerDisplay(1, 1, -70, 0, false);
    		}
			game.isGameOver = true;
    	}
    }
    
    
    function resetPosition(index){
    	
    	pathBehaviour = new CAAT.Behavior.PathBehavior().
            		setValues( new CAAT.Path().setLinear(game.actorContainer[index].x,game.actorContainer[index].y,game.initialPlace[index][0],game.initialPlace[index][1]).setInteractive(false) ).
        			setDelayTime(100, 300);        			
                    game.dragContainer[index].addBehavior(pathBehaviour);
                    game.actorContainer[index].addBehavior(pathBehaviour);
                   
                 pathBehaviour.addListener({
   								 behaviorExpired : function(behavior, time, actor) {   								 	
   								 	game.dragContainer[index].x =game.actorContainer[index].x;
									game.dragContainer[index].y =game.actorContainer[index].y;	
									setEnableEvents(true);
																	
   						 }});
    }
    
	
	function getInterceptObject(object1,object2){
		
		if(object1.x<=(object2.x+object2.width) &&((object1.y+object1.height)>=object2.y-yMin)&& (object1.y <=object2.y+object2.height)){
			
			return true;
		}
		else{
			return false;
		}
	}

})()


