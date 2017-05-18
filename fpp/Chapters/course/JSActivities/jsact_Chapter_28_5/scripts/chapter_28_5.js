//
//	Game Logic
//
(function(){

	var incDecTimer,tempDist,incDecCount=0;
	
	game.incDecMDown = function(mouseEvent){
		
		tempDist =Number(game.oDashTxtArr[4].text);
		
		incDecTimer = game._scene.createTimer(
							game._scene.time, 
							Number.MAX_VALUE,
							function(scene_time, time_time, time_instance){
							},
							function(scene_time, time_time, time_instance){
								incDecCount++; 
								if(incDecCount>10)
								{	
									game.incDecHandler( mouseEvent.source );
								}
								
							}
						);
		
	}
	
	game.incDecMUp = function(mouseEvent){
		incDecTimer.cancel();
		incDecCount=0;
	}
	
	
	
	game.incDecHandler = function(obj){
	
		if(game.isReset)
		{	
			if(obj.id =='inidistanceInc')
			{
				tempDist=tempDist+0.01
				if(tempDist.toFixed(2)<=9.99)
				{
				game.oDashTxtArr[4].setText(tempDist.toFixed(2));
				
				}
			}
			else if(obj.id =='inidistanceDec')
			{
				tempDist=tempDist-0.01
				if(tempDist.toFixed(2)>=5.00)
				{
				game.oDashTxtArr[4].setText(tempDist.toFixed(2));
				
				}
			
			}
			
			var tempdiff=(Math.abs(Number(game.oDashTxtArr[4].text)*10-75));
			if(tempdiff>=1)
			{
				if(Number(game.oDashTxtArr[4].text)>7.5)
				{
				game.minusImg.x=game.negIniPos-tempdiff;
				game.plusImg.x=game.posIniPos+tempdiff;
				}
				else{
				game.minusImg.x=game.negIniPos+tempdiff;
				game.plusImg.x=game.posIniPos-tempdiff;
				
				}
				game.mainPanel.removeChild(game.drawingActor );
				game.drawGraphContainer();
				game.mainPanel.removeChild(game.minusImg)
				game.mainPanel.addChild(game.minusImg)
				game.mainPanel.removeChild(game.plusImg)
				game.mainPanel.addChild(game.plusImg)
			}
			
		}	
		
		
	}
	
	game.resetBtnMDownHandler = function(){

		if(game.isPlay){
			game.goTimer.cancel();
		}
		game.isReset=true;
		game.isPlay=false;
		
		game.__bannerDisplay(0, 0, -68, 0, false);
		game.minusImg.setAnimationImageIndex([1])
		game.plusImg.setAnimationImageIndex([1])
		game.deltav.setText(String.fromCharCode(916)+'V= 0 volts');
		
		game.mainPanel.removeChild(game.drawingActor );
		
		game.thirdPtX=game.mainPanel.width-40;
		game.thirdPtY=200-20;
		game.thirdPtey=200-20;
		game.thirdPtey1=200;
		game.drawGraphContainer();
		
		game.mainPanel.removeChild(game.minusImg)
		game.mainPanel.addChild(game.minusImg)
		game.mainPanel.removeChild(game.plusImg)
		game.mainPanel.addChild(game.plusImg)
		
		game.oDashTxtArr[1].setText('0.00');
		
	}

	
	game.goBtnMDownHandler = function(){
	
		if(game.isReset)
		{
			game.isPlay=true;
			game.isReset=false;
			game.__bannerDisplay(0, 0, -68, 0, true);
			game.mainPanel.removeChild(game.drawingActor );
			game.thirdPtX=game.mainPanel.width-40;
			game.thirdPtY=200;
			game.thirdPtey=198;
			game.thirdPtey1=198;
			game.drawGraphContainer();
			
			game.mainPanel.removeChild(game.minusImg)
				game.mainPanel.addChild(game.minusImg)
				game.mainPanel.removeChild(game.plusImg)
				game.mainPanel.addChild(game.plusImg)
			
			
			game.deltav.setText(String.fromCharCode(916)+'V= 175 volts');
			
			//q=c*v where c=epsi0*A/d , here epsi0=8.85x10 -12
			
			var c=(8.85*0.01)/Number(game.oDashTxtArr[4].text);
			var q=c*175;
			var Qmax=Math.round(q*100)/100;
			game.oDashTxtArr[1].setText(Math.round(q*100)/100);
			
			game.startTime=new Date().getTime();
			
			game.goTimer=game._scene.createTimer(
				0,
				Number.MAX_VALUE,
				function (scene_time, timer_time, timertask_instance) {}, // timeout
				function (scene_time, timer_time, timertask_instance) {   // tick
				
				
					var currentTime=new Date().getTime();
					
					var ellapsetime=(currentTime-game.startTime)/1000;
					
					var powv=-ellapsetime/0.5;
					var Q = Qmax*(1-Math.pow(Math.E, powv));
					game.oDashTxtArr[1].setText(Q.toFixed(2));
					
					var imgIndex=1+parseInt(Q*ellapsetime);
					
					if((imgIndex+1)<=(3*Qmax))
					{
					game.minusImg.setAnimationImageIndex([imgIndex])
					game.plusImg.setAnimationImageIndex([imgIndex])
					}
					
					if(Q.toFixed(2)>=Qmax)
					{
						game.goTimer.cancel();
						
						if(Qmax==2.00)
						{
						game.__bannerDisplay(2, 1, -68, 0, false);
						}
						else{
							game.__bannerDisplay(1, 2, -68, 0, false);
						}
					}
					
					
				},
				function (scene_time, timer_time, timertask_instance) {} // cancel
			)
		
		}
	}
	

})()