//
//	Game Logic
//
(function(){

	var hrInc=0;
	var tempAtom=24,mAtom=24;
	var hrNew=0,atomdec=0,atomHL=3.253;
	
	game.goBtnMDownHandler = function(){
		game.onPlay();
		game.isPlay=true;
	}
	game.onPlay = function(){
	
		game.goTimer=game._scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
			
				hrInc++;
				
				if(hrInc%7==0)
				{
					//----Hours Disply ------
					var tempHr=hrInc/100;
					
					
					game.oDashTxtArr[1].setText(tempHr.toFixed(2));
					//--- Atoms Disply ----
					
					var tempN = tempHr/atomHL;
					tempAtom = 24/Math.pow(2,tempN);
					
					game.oDashTxtArr[3].setText(tempAtom.toFixed(1));
					
			
					if(Number(game.oDashTxtArr[3].text)<0.1)
					{
						game.oDashTxtArr[3].setText(0+'');
					}
					
					//--- Draw Scale Line ---
					game.scLength=tempAtom.toFixed(1)*(66/24);
					if(game.scLength<3)
					{
						game.scLength=3;
					}
					game.mainPanel.removeChild(game.drawingActor );
					game.drawGraphContainer();
					
				}
				
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
		)
	
	}
	function pad2(number) {
   
     return (number < 10 ? '0' : '') + number
   
	}
	game.resetBtnMDownHandler = function(){
				
		if(game.isPlay)
		{
			game.goTimer.cancel();
		}
		game.isPlay=false;
		hrInc=0;
		tempAtom=24,mAtom=24;
		hrNew=0,atomdec=0,atomHL=3.25;
		
		game.oDashTxtArr[1].setText(' '+(0.00).toFixed(2));
		game.oDashTxtArr[3].setText(''+(24.0).toFixed(1));
		
		game.scLength=66;
		game.mainPanel.removeChild(game.drawingActor );
		game.drawGraphContainer();
				
		game.__bannerDisplayShutter(0);
		game.armImg.y=340;
		
	}
	game.pauseBtnMDownHandler = function(){
		if(game.isPlay)
		{
			game.goTimer.cancel();
		}
	}

})()