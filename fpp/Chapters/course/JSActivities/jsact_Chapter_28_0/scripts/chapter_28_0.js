//
//	Game Logic
//
(function(){

	var incDecTimer;
	var incDecCount=0;
	
	game.incDecMDown = function(mouseEvent){
		
		incDecTimer = game._scene.createTimer(
						0, 
						Number.MAX_VALUE,
						function(scene_time, time_time, time_instance){
						},
						function(scene_time, time_time, time_instance){
							incDecCount++;
							if(incDecCount%20 == 0)
							{
								incDecCount=0;
								game.incDecHandler( mouseEvent.source );
							}
						}
					);
	}
	
	game.incDecMUp = function(mouseEvent){
		if(incDecTimer) incDecTimer.cancel();
		incDecCount=0;
	}
	game.incDecHandler = function(obj){
		if(obj.id =='Inc')
		{
			if((Number(game.incDecTxt.text)+10)<=120)
			{
			game.incDecTxt.setText(''+(Number(game.incDecTxt.text)+10));
			}
		}
		else if(obj.id =='Dec')
		{
			if((Number(game.incDecTxt.text)-10)>=0)
			{
			game.incDecTxt.setText(''+(Number(game.incDecTxt.text)-10));
			}
		}
		
		var index = (Number(game.incDecTxt.text))/10;
		game.minusImg.setAnimationImageIndex([index]);
		game.plusImg.setAnimationImageIndex([index]);
		
		game.oDashTxtArr[1].setText(game.Qval[0][index].toFixed(2)+' nC');
		
	}
	
	game.resetBtnMDownHandler = function(){
		
		game.__bannerDisplay(0, 0, -68, 0, false);
		game.incDecTxt.setText(70);
		game.minusImg.setAnimationImageIndex([7]);
		game.plusImg.setAnimationImageIndex([7]);
		game.oDashTxtArr[1].setText(game.Qval[0][7].toFixed(2)+' nC');
	}
	
})()