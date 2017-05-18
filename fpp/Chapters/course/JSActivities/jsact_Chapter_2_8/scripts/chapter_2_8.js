
(function() {

var isSxChng1=true,isSxChng2=true;
var oldET=0,totelET=0;
var currentTime = null;
game.goBtnMDownHandler = function(){
//if(game.isReset){
	if(game.isPlay)
	{		
		if(game.Timer != null){
			game.Timer.cancel();
		}
	}

	game.isPlay = true;

	if(game.isReset)
	{
		game.isReset=false;
		game.__bannerDisplay(0, 0, 0, -70, true);

		game.startX=game.int_pos; 
		game.startTime=new Date().getTime();
	}
	if(game.isPause)
	{
		game.startTime=new Date().getTime();
		game.isPause=false;
	}
	

	game.Timer = game._scene.createTimer(
							0, 
							Number.MAX_VALUE,
							function(scene_time, time_time, time_instance){ // timeout
							},
							function(scene_time, time_time, time_instance){// tick
							
								currentTime=new Date().getTime();
								game.ellapsetime=(currentTime-game.startTime)/1000;
								totelET = oldET + game.ellapsetime;
								
								if(totelET<=3){
									
									game.ballV=Number(game.textActor[13].text);
									game.textActor[2].setText(game.ballV.toFixed(1));
									//game.textActor[3].setText('0.0');
									//moveBall();
								}
								else if(totelET >3 && totelET <=7 )
								{
									if(isSxChng1)
									{
										isSxChng1=false;
										game.startX= game.ballActor.x;
										oldET=oldET+game.ellapsetime;
										game.startTime=new Date().getTime();
										game.ellapsetime=(currentTime-game.startTime)/1000;
										game.ballV=Number(game.textActor[14].text);
										game.textActor[2].setText(game.ballV.toFixed(1));
									}
									
									//moveBall();
								}
								else if(totelET >7 && totelET <=10 )
								{
									if(isSxChng2)
									{
										isSxChng2=false;
										game.startX= game.ballActor.x;
										oldET=oldET+game.ellapsetime;
										game.startTime=new Date().getTime();
										game.ellapsetime=(currentTime-game.startTime)/1000;
										game.ballV=Number(game.textActor[15].text);
										game.textActor[2].setText(game.ballV.toFixed(1));
									}
									
									//moveBall();
								}
								else if(totelET >10)
								{
									time_instance.cancel();
									if(Number(game.textActor[13].text)==30 && Number(game.textActor[14].text)==-45 && Number(game.textActor[15].text)==30)
									{
										game.__bannerDisplay(1, 1, 0, -70, false);
									}
									else 
									{
										game.__bannerDisplay(2, 2, 0, -70, false);
									}
									
									game.isFinished = true;
								}
								
								if(!game.isFinished){
									game.ballActor.x = game.startX+ (game.ballV*game.ellapsetime*3.5);
									var plotX=totelET*(60);
									var distanceOfBallFromOrigin = game.ballActor.x - game.int_pos; //game.ballCx - game.ballIx; //game.ballActor.x - game.int_pos
									var plotY = 180 - ((90/175)*distanceOfBallFromOrigin);
									
									game.drawingctx.lineTo(plotX, plotY);	
									game.drawingctx.stroke();
								}
															
							},
							function (scene_time, timer_time, timertask_instance) {} // cancel
						); 
//}
}

function moveBall(){
	game.ballActor.x = game.startX+ (game.ballV*game.ellapsetime*3.5);
}



game.pauseBtnMDownHandler = function(){
	if(game.isPlay)
	{
		game.isPause=true;
		game.isPlay=false;
		if(game.Timer != null){
			game.Timer.cancel();
		}
		game.startX=game.ballActor.x;
		oldET=oldET+game.ellapsetime;
	}
	
}

game.resetBtnMDownHandler = function(){

	if(game.isPlay || game.isPause)
	{
		if(game.Timer != null){
			game.Timer.cancel();
		}
	game.mainPanel.removeChild(game.drawingActor );
	game.mainPanel.removeChild(game.staContainer);
	game.drawGraphContainer();
	game.__createBannerContainer();
	game.ballActor.x=game.int_pos; 
	
	game.__bannerDisplay(0, 0, 0, -70, false);
	
	game.textActor[2].setText('--');
	//game.textActor[3].setText('--');
	
	game.isReset=true;
	game.isPause=false;
	game.isPlay=false;
	isSxChng1=true;
	isSxChng2=true;
	oldET=0;
	totelET=0;
	game.isFinished=false;
	
	}
	
	
	//game.startX=game.int_pos; 
	
	
	
}

})();