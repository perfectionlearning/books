//
//	Game Logic
//
(function(){

var incDecCount=0;

game.incDecMDown = function(mouseEvent){

	game.blueVTxt =Number(game.oDashTxtArr[11].text);
	game.redVTxt= Number(game.oDashTxtArr[13].text);
	
	game.incDecTimer = game._scene.createTimer(
						0, 
						Number.MAX_VALUE,
						function(scene_time, time_time, time_instance){
						},
						function(scene_time, time_time, time_instance){
							incDecCount++;
							if(incDecCount>15)
							{
							incDecCount=0;
							game.incDecHandler( mouseEvent.source );
							
							}
						}
				 );
}
	
game.incDecMUp = function(mouseEvent){
	game.incDecTimer.cancel();
}
	
game.incDecHandler = function(obj){
	
	if(!game.isPause  )
	{
		if(obj.id =='iniBlueInc')
		{
			if(( (Number(game.blueVTxt)+0.1).toFixed(1) )<=2.0)
			{
				game.oDashTxtArr[11].setText( (Number(game.blueVTxt)+0.1).toFixed(1) );
				game.blueVTxt =Number(game.oDashTxtArr[11].text);
			}
		}
		else if(obj.id =='iniBlueDec')
		{	
			if(( (Number(game.blueVTxt)-0.1).toFixed(1) )>=-2.0)
			{
				game.oDashTxtArr[11].setText( (Number(game.blueVTxt)-0.1).toFixed(1) );
				game.blueVTxt =Number(game.oDashTxtArr[11].text);
			}
		}
		else if(obj.id =='iniRedInc')
		{
			if( ((Number(game.redVTxt)+0.1).toFixed(1))<=2.0 )
			{
				game.oDashTxtArr[13].setText( (Number(game.redVTxt)+0.1).toFixed(1) );
				game.redVTxt= Number(game.oDashTxtArr[13].text);
			}
		}
		else if(obj.id =='iniRedDec')
		{
			if( ((Number(game.redVTxt)-0.1).toFixed(1))>=-2.0 )
			{
				game.oDashTxtArr[13].setText( (Number(game.redVTxt)-0.1).toFixed(1) );
				game.redVTxt= Number(game.oDashTxtArr[13].text);
			}
		}
		
	}	
} // incDecHndler - End

game.goBtnMDownHandler = function(){
if(game.isReset)
{
game.__bannerDisplay(0, 0, -70, 0, true);
game.isReset=false;
}
	if(game.isPlay)
	{
		game.goTimer.cancel();
	}

	if(!game.isPause)
	{
		game.bluePuck.x=game.bluePuckIx;
		game.redPuck.x=game.redPuckIx;
		game.blueV=Number(game.oDashTxtArr[11].text);
		game.redV=Number(game.oDashTxtArr[13].text);
		game.isLC=false;
		game.isRC=false;
		game.lCPt=800;
		game.isBp=false;
		game.isRp=false;
		game.bluePuckSx=game.bluePuckIx;
		game.redPuckSx=game.redPuckIx;
		game.isCollision=false;
		
	}
	//Velocity
	game.oDashTxtArr[1].setText(''+game.blueV.toFixed(1));
	game.oDashTxtArr[3].setText(''+game.redV.toFixed(1));
							
	//Momentum = mass * v
	game.oDashTxtArr[6].setText(''+(game.blueV*1).toFixed(1));
	game.oDashTxtArr[8].setText(''+(game.redV*2).toFixed(1));
	
	game.startTime=new Date().getTime();
	game.onPlay();
	
	game.isPlay=true;
	game.isPause=false;
	//console.log('LCPT'+game.lCPt);

}// goBtn - End 
game.pauseBtnMDownHandler = function(){
	if(game.isPlay){
	game.isPause=true;
	game.isReset=false;
	game.goTimer.cancel();
	game.bluePuckSx = game.bluePuck.x;
	game.redPuckSx = game.redPuck.x;
	}
}// pauseBtn - End 
game.resetBtnMDownHandler = function(){
	game.__bannerDisplay(0, 0, -70, 0, false);
	game.isPlay=false;
	game.isPause=false;
	game.isBp=false;
	game.isRp=false;
	game.isLC=false;
	game.isRC=false;
	game.lCPt=800;
	game.isReset=true;
	if(game.goTimer!=null)
	{
		game.goTimer.cancel();
	}
	game.bluePuck.x=game.bluePuckIx;
	game.redPuck.x=game.redPuckIx;
	
	
	//Velocity
	game.oDashTxtArr[1].setText('- -');
	game.oDashTxtArr[3].setText('- -');
	
	//Momentum = mass * v
	game.oDashTxtArr[6].setText('- -');
	game.oDashTxtArr[8].setText('- -');
	game.isCollision=false;
	

}// resetBtn - End 

game.onPlay = function(){

	var currentTime=0;
	var ellapsetime=0;

	game.goTimer=game._scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				
				currentTime = new Date().getTime();
				
				ellapsetime=(currentTime-game.startTime)/1000;
				
				var bluePuckS = game.blueV*ellapsetime;//s=vt
				if(!game.isBp){
					game.bluePuck.x = game.bluePuckSx +(bluePuckS*game.oneMtInPx);
				}
				var redPuckS = game.redV*ellapsetime;//s=vt
				if(!game.isRp){
					game.redPuck.x = game.redPuckSx + (redPuckS*game.oneMtInPx);
				}
				if(game.bluePuck.x<30 && !game.isLC )
				{
					game.isBp=true;
					if(!game.isCollision){
						game.bluePuck.x=0;
						game.blueV=Number(0.0);
						//game.oDashTxtArr[1].setText(''+game.blueV.toFixed(1));
						//game.oDashTxtArr[6].setText(''+game.blueV.toFixed(1));
						game.oDashTxtArr[1].setText(''+game.blueV.toFixed(2));
						game.oDashTxtArr[6].setText(''+game.blueV.toFixed(2));
					}
				}	
				if(game.redPuck.x+game.redPuck.width>720 && !game.isRC)
				{
					game.isRp=true;
					if(!game.isCollision){
						game.redPuck.x=720;
						game.redV=Number(0.0);
						//game.oDashTxtArr[3].setText(''+game.redV.toFixed(1));
						//game.oDashTxtArr[8].setText(''+game.redV.toFixed(1));						
						game.oDashTxtArr[3].setText(''+game.redV.toFixed(2));
						game.oDashTxtArr[8].setText(''+game.redV.toFixed(2));
					}
				}
				if(game.isBp&&game.isRp)
				{
					game.goTimer.cancel();
					game.isPlay=false;
					game.isBp=false;
					game.isRp=false;
				}
				game.isCollision=false;
				
				
				var xd = game.bluePuck.x - game.redPuck.x;
				var yd = game.bluePuck.y - game.redPuck.y;

				var sumRadius = game.bluePuck.width/2 + game.redPuck.width/2;
				var sqrRadius = sumRadius * sumRadius;

				var distSqr = (xd * xd);// + (yd * yd);

				if (distSqr <= sqrRadius)
				{
					if(Math.abs(game.lCPt-game.redPuck.x)>20)
					{
						game.isCollision=true;
						if(game.isBp)
						{
							game.isLC=true;
							game.isBp=false;
						}
						if(game.isRp)
						{
							game.isRC=true;
							game.isRp=false
						}
						//v1 = u1(m1-m2)+2m2u2/(m1+m2)
						var v1= (game.blueV*(1-2)+2*(2*game.redV))/(1+2);
						
						//v2=u2(m2-m1)+2m1u1/(m1+m2)
						var v2 = (game.redV*(2-1)+2*(1*game.blueV))/(1+2);
						
						game.blueV=v1;
						game.redV=v2;
						
						game.bluePuckSx = game.bluePuck.x;
						game.redPuckSx = game.redPuck.x;
						
						game.startTime = new Date().getTime();
						
						//Velocity
						//game.oDashTxtArr[1].setText(''+game.blueV.toFixed(1));
						//game.oDashTxtArr[3].setText(''+game.redV.toFixed(1));
						game.oDashTxtArr[1].setText(''+game.blueV.toFixed(2));
						game.oDashTxtArr[3].setText(''+game.redV.toFixed(2));
						//Momentum = mass * v
						//game.oDashTxtArr[6].setText(''+(game.blueV*1).toFixed(1));
						//game.oDashTxtArr[8].setText(''+(game.redV*2).toFixed(1));
						game.oDashTxtArr[6].setText(''+(game.blueV*1).toFixed(2));
						game.oDashTxtArr[8].setText(''+(game.redV*2).toFixed(2));
						
						game.lCPt=game.redPuck.x;
					}
					
				}
				
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
	)

}// onPlay Fun - End 


})()