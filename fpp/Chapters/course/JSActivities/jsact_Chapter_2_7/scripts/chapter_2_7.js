//
//	Game Logic
//
(function(){
	//var mouseDragTimer=null;
	var lastX,lastY,V,lastV,A,xInSec,yInMts;	
	game.ballMoveHandler = function() {		
		var inc=0;
			if(game.isReset)
			{			
				game.__bannerDisplay(0, 0, 0, -70, true);
			}
			game.isReset=false;
			game.mouseDragTimer = game._scene.createTimer(
							0, 
							Number.MAX_VALUE,
							function(scene_time, time_time, time_instance){ // timeout
							},
							function(scene_time, time_time, time_instance){// tick
							inc++;							
								if(game.ballDrag.x+game.ballDrag.width/2>26 && game.ballDrag.x+game.ballDrag.width/2<=726 ) // 726
								{
								game.ballImg.x=game.ballDrag.x;
								}
								game.ballCx=game.ballImg.x+game.ballImg.width/2;
								if(!game.isStart)
								{
									if( Math.abs(game.ballCx-game.ballIx)>0) // Check if Game Start
									{
										game.isStart=true;
										game.startTime=new Date().getTime();
									}
								}
								else if(game.isStart)
								{
									game.currentTime=new Date().getTime();
									
									game.ellapsetime=(game.currentTime-game.startTime)/1000;									
										
										var plotX=game.ellapsetime*(60);
										var distanceOfBallFromOrigin = game.ballCx - game.ballIx;
										var plotY = 270 - ((90/175)*distanceOfBallFromOrigin);
										
										xInSec=game.ellapsetime;
										yInMts=distanceOfBallFromOrigin*(50/175);
										if(plotY>359)
										{
											plotY=359;
										}
										if(plotY<1)
										{
											plotY=1;
										}
										game.drawingctx.lineTo(plotX, plotY);	
										game.drawingctx.stroke();
										
										if(lastX!=null && xInSec.toFixed(1)!=lastX.toFixed(1)){
												V=(yInMts-lastY)/(xInSec-lastX);
												//Velocity
												game.oDashTxtArr[3].setText(V.toFixed(1));
												//Acc
												if(lastV!=null){
													A=(V-lastV)/(xInSec-lastX);
													//game.oDashTxtArr[4].setText(A.toFixed(1));

												}
											
											lastX=xInSec;
											lastY=yInMts;
											lastV=V;
										}
										if(lastX==null){
											lastX=xInSec;
											lastY=yInMts;
											lastV=V;
										}									
								}
								game.ballPx=game.ballCx;
															
							},
							function (scene_time, timer_time, timertask_instance) {} // cancel
			); 
	}	
	
	game.resetBtnMDownHandler =function(){
	
		
		if(game.isStart)
		{
		game.mouseDragTimer.cancel();
		}
		
		game.isReset=true;
		game.isFirst=true;
		
		game.mainPanel.removeChild(game.drawingActor );
		
		game.isStart=false;
		game.ballImg.x=game.ballIx-game.ballImg.width/2;
		game.ballDrag.x=game.ballIx-game.ballImg.width/2;
		
		game.__bannerDisplay(0, 0, 0, -70, false);
		
		game.svGraph.visible = false;
		
		game.SVGToggleBtn.setAnimationImageIndex([0]);
		game.isSVGShow = false;
		
		game.drawGraphContainer();
		
	}
	
})();