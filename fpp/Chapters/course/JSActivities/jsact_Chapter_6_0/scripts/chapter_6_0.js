//
//	Game Logic
//
(function(){
	var incDecTimer=null,
		mouseDragTimer1=null,
		mouseDragTimer2=null,
		tempvalF1,
		tempvalF2,
		startTime,
		currentTime,
		ellapsetime,
		drX,
		drY,
		minLineDA=66,
		tempheadlen=15,
		initialXVelocity=0,
		initialYVelocity=0,
		x=0,
		y=0;

	game.incDecMDown = function(mouseEvent){
		
		tempvalF1 =game.oDashTxtArr[9].text;
		tempvalF2= game.oDashTxtArr[12].text;
		
		incDecTimer = game._scene.createTimer(
							game._scene.time, 
							Number.MAX_VALUE,
							function(scene_time, time_time, time_instance){
							},
							function(scene_time, time_time, time_instance){
								game.incDecHandler( mouseEvent.source );
							}
						);
		
	}
	
	game.incDecMUp = function(mouseEvent){
		incDecTimer.cancel();
	}
	
	game.incDecHandler = function(obj){
		
		if(!game.isPaused  )
		{
			if(obj.id =='iniF1Inc')
			{
				tempvalF1= (Number(tempvalF1)+0.1).toFixed(1);
				game.oDashTxtArr[9].setText( Math.round(tempvalF1) );
				changeLineByIncDec(obj.id);
			}
			else if(obj.id =='iniF1Dec')
			{
				tempvalF1= (Number(tempvalF1)-0.1).toFixed(1);
				if(Math.round(tempvalF1)>=10)
				{
				game.oDashTxtArr[9].setText( Math.round(tempvalF1) );
				}
				changeLineByIncDec(obj.id);
			}
			else if(obj.id =='iniF2Inc')
			{
				tempvalF2= (Number(tempvalF2)+0.1).toFixed(1);
				game.oDashTxtArr[12].setText( Math.round(tempvalF2) );
				changeLineByIncDec(obj.id);
			}
			else if(obj.id =='iniF2Dec')
			{
				tempvalF2= (Number(tempvalF2)-0.1).toFixed(1);
				if(Math.round(tempvalF2)>=10)
				{
				game.oDashTxtArr[12].setText( Math.round(tempvalF2) );
				}
				changeLineByIncDec(obj.id);
			}
		}	
	}
	function changeLineByIncDec(id)
	{
		if(id=='iniF1Inc'||id=='iniF1Dec')
		{
			var linedistance=Number(game.oDashTxtArr[9].text)*game.oneNewtonInPx;
			
			if(game.finalF1y==game.ballImgCy)
			{
				if(game.finalF1x<game.ballImgCx)
				{
					game.finalF1x=game.ballImgCx-linedistance;
				}
				else if(game.finalF1x>game.ballImgCx)
				{
					game.finalF1x=game.ballImgCx+linedistance;
				}
			}
			else if(game.finalF1x==game.ballImgCx)
			{
				if(game.finalF1y<game.ballImgCy)
				{
					game.finalF1x=game.ballImgCx;
					game.finalF1y=game.ballImgCy-linedistance;
				}	
				else
				{
					game.finalF1x=game.ballImgCx;
					game.finalF1y=game.ballImgCy+linedistance;
				}
				
			}
			game.txtF1.setLocation(game.finalF1x+20, game.finalF1y+10);
			game.lineF1drag.x=game.finalF1x-game.lineF1drag.width/2;
			game.lineF1drag.y=game.finalF1y-game.lineF1drag.height/2;
			
			if(game.isHeadtoTail)
			{
				game.lineF2drag.x=game.lineF2dragHTx;
				game.lineF2drag.y=game.lineF2dragHTy;
			}
			
			drawForceNet();
		
			game.drawPaths( game.lineF1, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.finalF1x,y:game.finalF1y}, false, '#000000', 1, 'rightArrowHead', false);
			
			if(game.isHeadtoTail)
			{
				//alert('chk');
				game.onHeadtoTail();
			}
		}
		if(id=='iniF2Inc'||id=='iniF2Dec')
		{
			var linedistance=Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx;
			
			if(game.finalF2y==game.ballImgCy)
			{
				if(game.finalF2x<game.ballImgCx)
				{
					game.finalF2x=game.ballImgCx-linedistance;
					game.finalF2y=game.ballImgCy;
				}
				else
				{
					game.finalF2x=game.ballImgCx+linedistance;
					game.finalF2y=game.ballImgCy;
				}
			}
			else
			{
				if(game.finalF2y<game.ballImgCy)
				{
					game.finalF2x=game.ballImgCx;
					game.finalF2y=game.ballImgCy-linedistance;
				}
				else{
					game.finalF2x=game.ballImgCx;
					game.finalF2y=game.ballImgCy+linedistance;
				}
			}
			
			game.txtF2.setLocation(game.finalF2x+20, game.finalF2y+10);
			game.lineF2drag.x=game.finalF2x-game.lineF2drag.width/2;
			game.lineF2drag.y=game.finalF2y-game.lineF2drag.height/2;
			
			if(game.isHeadtoTail)
			{
				game.lineF2drag.x=game.lineF2dragHTx;
				game.lineF2drag.y=game.lineF2dragHTy;
			}
			
			drawForceNet();
			
			game.drawPaths( game.lineF2, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.finalF2x,y:game.finalF2y}, false, '#000000', 1, 'rightArrowHead', false);
			
			if(game.isHeadtoTail )
			{
				game.onHeadtoTail();
			}
		}
	}
	
	game.goBtnMDownHandler = function()
	{
		if(Number(game.oDashTxtArr[1].text)==0)
		{
			game.__bannerDisplay(3, 1, -70, 0, false);// txt , bgcolor,-,-,bottom-top
			game.isFinished=true;
			
			game.lineF1.visible=false;
			game.lineF2.visible=false;
			game.lineF1drag.visible=false;
			game.lineF2drag.visible=false;
			game.txtF1.visible=false;
			game.txtF2.visible=false; 
		}		
		else if(!game.isFinished)
		{
			game.animatedTarget_1.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation');
			game.animatedTarget_2.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation');
			game.animatedTarget_3.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation');
			
			if(game.isReset)
			{
				game.__bannerDisplay(0, 0, -70, 0, true);
				
				game.isReset=false;
				game.lineF1.visible=false;
				game.lineF2.visible=false;
				game.lineF1drag.visible=false;
				game.lineF2drag.visible=false;
				game.txtF1.visible=false;
				game.txtF2.visible=false; 
				//---------------------------------------
				var f1Value=game.oDashTxtArr[9].text;
				var f2Value=game.oDashTxtArr[12].text;
			
				var y = game.finalF1y-game.ballImgCy; // forceY-ballY
				var x = game.finalF1x-game.ballImgCx;
			
				var f1Angle = Math.atan2(y,x);
				
				y= game.finalF2y-game.ballImgCy;
				x= game.finalF2x-game.ballImgCx;
				
				var f2Angle = Math.atan2(y,x);
		 
				var forceArray = new Array();
		 
				forceArray[forceArray.length] = [Number(f1Value),f1Angle];//force , angle

				forceArray[forceArray.length] = [Number(f2Value),f2Angle];
		   
				var mass = 5;
				
				var netVerticalForce=0;

				var netHorizontalForce=0;

				for(var i=0;i<forceArray.length;i++){

						netVerticalForce = netVerticalForce + ( forceArray[i][0] * Math.sin(forceArray[i][1]) );

						netHorizontalForce = netHorizontalForce + ( forceArray[i][0] * Math.cos(forceArray[i][1]) );

				}

				game.netVerticalAcceleration = netVerticalForce/mass;

				game.netHorizontalAcceleration = netHorizontalForce/mass;
					
				var tempAccTxt = Math.sqrt((game.netVerticalAcceleration*game.netVerticalAcceleration)+(game.netHorizontalAcceleration*game.netHorizontalAcceleration));
				game.oDashTxtArr[4].setText(tempAccTxt.toFixed(1));	
				//-------------------------------------------------------------
				game.lastFnetx=game.Fnetx;
				game.lastFnety=game.Fnety;
			}
			if(!game.isPlaying)
			{
				game.startTime=new Date().getTime();
				onPlay();
			}
				
			game.isPlaying=true;	
		}
	
	}
	
	
	function onPlay()
	{
		game.isPlaying=true;
		game.goTimer=game._scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
			
				currentTime=new Date().getTime();
				
				ellapsetime=(currentTime-game.startTime)/1000;
				
				var curX=(game.initialXVelocity*ellapsetime)+(game.netHorizontalAcceleration*(ellapsetime*ellapsetime))/2;//s=ut+(1/2)at^2
				var curY=(game.initialYVelocity*ellapsetime)+(game.netVerticalAcceleration*(ellapsetime*ellapsetime))/2;
				
				game.finalXVelocity = game.initialXVelocity + (game.netHorizontalAcceleration*ellapsetime); // set final V to Initail V
				game.finalYVelocity  = game.initialYVelocity + (game.netVerticalAcceleration*ellapsetime);
				
				game.ballImg.setLocation(game.ballImgTempx+curX,game.ballImgTempy+curY);
				
				//Move Fnet Line
				var tempFnetRx= game.lastFnetx - game.ballImgCx;
				var tempFnetRy= game.lastFnety- game.ballImgCy;
				
				game.txtNetForce.setLocation((game.ballImg.x+game.ballImg.width/2)+tempFnetRx+20, (game.ballImg.y+game.ballImg.height/2)+tempFnetRy);
				
				game.drawPaths( game.lineForceNet, {x:game.ballImg.x+game.ballImg.width/2, y:game.ballImg.y+game.ballImg.height/2}, {x:0, y:0}, {x:(game.ballImg.x+game.ballImg.width/2)+tempFnetRx, y:(game.ballImg.y+game.ballImg.height/2)+tempFnetRy}, false, '#FF0000', 1, 'rightArrowHead', false);
			
				//if( game.ballImg.x  >= game.animatedTarget_1.x && game.ballImg.x<= (game.animatedTarget_1.x+game.animatedTarget_1.width/2) )//79
				if( game.ballImg.x  >= game.animatedTarget_1.x && game.ballImg.x<= (game.animatedTarget_1.x+10) )//79
				{
					if((game.ballImg.y>= game.animatedTarget_1.y )&& (game.ballImg.y<=(game.animatedTarget_1.y+10)))//215
					{
						var tX= ( game.animatedTarget_1.x+(game.animatedTarget_1.width/2) ) - ( game.ballImg.width/2);
						var tY= ( game.animatedTarget_1.y+(game.animatedTarget_1.height/2) ) - ( game.ballImg.height/2);
						game.ballImg.setLocation(tX,tY);
						timertask_instance.cancel();
						game.animatedTarget_1.setBackgroundImage(game.targetAnim).playAnimation('targetStand');
						//alert('Target1');
						game.__bannerDisplay(2, 1, -70, 0, false);
						game.isFinished=true;
					}
				}
				else if( game.ballImg.x +game.ballImg.width <= game.animatedTarget_2.x + game.animatedTarget_2.width && game.ballImg.x+game.ballImg.width>= (game.animatedTarget_2.x+game.animatedTarget_2.width-10) )//79
				{
					if((game.ballImg.y>= game.animatedTarget_2.y )&& (game.ballImg.y<=(game.animatedTarget_2.y+10)))//215
					{
						var tX= ( game.animatedTarget_2.x+(game.animatedTarget_2.width/2) ) - ( game.ballImg.width/2);
						var tY= ( game.animatedTarget_2.y+(game.animatedTarget_2.height/2) ) - ( game.ballImg.height/2);
						game.ballImg.setLocation(tX,tY);
						timertask_instance.cancel();
						game.animatedTarget_2.setBackgroundImage(game.targetAnim).playAnimation('targetStand');
						game.__bannerDisplay(2, 1, -70, 0, false); 
						game.isFinished=true;
					}
				}
				else if( game.ballImg.x +game.ballImg.width  <= game.animatedTarget_3.x+game.animatedTarget_3.width && game.ballImg.x+game.ballImg.width>= (game.animatedTarget_3.x+game.animatedTarget_3.width-10) )//79
				{
					if((game.ballImg.y+game.ballImg.height/2)>=game.ballImgCy-10 && (game.ballImg.y+game.ballImg.height/2)<=game.ballImgCy+10 )//215
					{
						var tX= ( game.animatedTarget_3.x+(game.animatedTarget_3.width/2) ) - ( game.ballImg.width/2);
						var tY= ( game.animatedTarget_3.y+(game.animatedTarget_3.height/2) ) - ( game.ballImg.height/2);
						game.ballImg.setLocation(tX,tY);
						timertask_instance.cancel();
						game.animatedTarget_3.setBackgroundImage(game.targetAnim).playAnimation('targetStand');
						game.__bannerDisplay(2, 1, -70, 0, false); // txt , bgcolor,-,-,bottom-top
						game.isFinished=true;
					}
				}
				else if(game.ballImg.x>=800 || game.ballImg.x<0- game.ballImg.width || game.ballImg.y<0-game.ballImg.height || game.ballImg.y>600)
				{
					game.__bannerDisplay(1, 2, -70, 0, false); // txt , bgcolor,-,-,bottom-top game._director.width
					timertask_instance.cancel();
					//game.lineForceNet.visible=false;
					game.txtNetForce.visible=false;
					game.isFinished=true;
				}
				
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
		)
	}
	
	game.resetBtnMDownHandler = function(){
	
	
	

		if(game.isPlaying)
		{
		game.goTimer.cancel();
		}
		
		game.__bannerDisplay(0, 0, -70, 0, false);
		
		game.oDashTxtArr[4].setText('--');	
		
		game.isReset=true;
		game.isPaused=false;
		game.isPlaying=false;
		
		game.ballImg.x=game.ballImgCx-game.ballImg.width/2;
		game.ballImg.y=game.ballImgCy-game.ballImg.height/2;
		
		game.lineF1.visible=true;
		game.lineF2.visible=true;
		game.lineF1drag.visible=true;
		game.lineF2drag.visible=true;
		game.txtF1.visible=true;
		game.txtF2.visible=true;
		game.isFinished=false;
		
		if(game.lineForceNet.visible){
		//game.lineForceNet.visible=true;
		game.txtNetForce.visible=true;
		game.txtNetForce.setLocation(game.Fnetx+20, game.Fnety);
		game.drawPaths( game.lineForceNet, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.Fnetx, y:game.Fnety}, false, '#FF0000', 1, 'rightArrowHead', false);
		}	
		game.initialXVelocity=0;
		game.initialYVelocity=0;	
		
		game.ballImgTempx=game.ballImg.x;
		game.ballImgTempy=game.ballImg.y;
				
		game.animatedTarget_1.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation');
		game.animatedTarget_2.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation');
		game.animatedTarget_3.setBackgroundImage(game.targetAnim).playAnimation('targetAnimation');
		
		game.SVGToggleBtn.setAnimationImageIndex([0]);
		game.isHeadtoTail = false;
		game.onHeadtoTail();
		game.lineF2drag.x=game.finalF2x-game.lineF2drag.width/2;
		game.lineF2drag.y=game.finalF2y-game.lineF2drag.height/2;
		
	}
	
	game.pauseBtnMDownHandler = function(){
	
	if(!game.isFinished)
	{	
		//if(!game.isPaused)
		//{
			if(game.isPlaying)
			{
			game.goTimer.cancel();
			game.isPaused=true;
			game.isPlaying=false;
			game.isReset=false;
			game.initialXVelocity=game.finalXVelocity;
			game.initialYVelocity=game.finalYVelocity;
			game.ballImgTempx=game.ballImg.x;
			game.ballImgTempy=game.ballImg.y;
			game.animatedTarget_1.setBackgroundImage(game.targetAnim).playAnimation('targetPause');
			game.animatedTarget_2.setBackgroundImage(game.targetAnim).playAnimation('targetPause');
			game.animatedTarget_3.setBackgroundImage(game.targetAnim).playAnimation('targetPause');
			
			}			
	}	
	}
	 
	game.onHeadtoTail =function()
	{
		if(game.isHeadtoTail)	
		{
			if(game.finalF1y==game.ballImgCy && game.finalF2y!=game.ballImgCy)
			{
			game.drawPaths( game.lineF2, {x:game.finalF1x, y:game.finalF1y}, {x:0, y:0}, {x:game.finalF1x,y:game.finalF2y}, false, '#000000', 1, 'rightArrowHead', false);
			game.lineF2dragHTx=game.finalF1x-game.lineF2drag.width/2;
			game.lineF2dragHTy=game.finalF2y-game.lineF2drag.height/2;	
			}
			else if(game.finalF1x==game.ballImgCx && game.finalF2x!=game.ballImgCx)
			{
			game.drawPaths( game.lineF2, {x:game.finalF1x, y:game.finalF1y}, {x:0, y:0}, {x:game.finalF2x,y:game.finalF1y}, false, '#000000', 1, 'rightArrowHead', false);
			game.lineF2dragHTx=game.finalF2x-game.lineF2drag.width/2;
			game.lineF2dragHTy=game.finalF1y-game.lineF2drag.height/2;	
			
			}
			else if(game.finalF1y==game.ballImgCy && game.finalF2y==game.ballImgCy)
			{
				if(game.finalF2x<game.ballImgCx){
					game.drawPaths( game.lineF2, {x:game.finalF1x, y:game.finalF1y}, {x:0, y:0}, {x:game.finalF1x-(Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx),y:game.finalF2y}, false, '#000000', 1, 'rightArrowHead', false);
					
					game.lineF2dragHTx=game.finalF1x-(Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx)-game.lineF2drag.width/2;
					game.lineF2dragHTy=game.finalF2y-game.lineF2drag.height/2;
				}
				else{
					game.drawPaths( game.lineF2, {x:game.finalF1x, y:game.finalF1y}, {x:0, y:0}, {x:game.finalF1x+(Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx),y:game.finalF2y}, false, '#000000', 1, 'rightArrowHead', false);
					
					game.lineF2dragHTx=game.finalF1x+(Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx)-game.lineF2drag.width/2;
					game.lineF2dragHTy=game.finalF2y-game.lineF2drag.height/2;
				}
			}
			else if(game.finalF1x==game.ballImgCx && game.finalF2x==game.ballImgCx)
			{
				if(game.finalF2y<game.ballImgCy)
				{
					game.drawPaths( game.lineF2, {x:game.finalF1x, y:game.finalF1y}, {x:0, y:0}, {x:game.finalF2x,y:game.finalF1y-(Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx)}, false, '#000000', 1, 'rightArrowHead', false);
					game.lineF2dragHTx=game.finalF2x-game.lineF2drag.width/2;
					game.lineF2dragHTy=game.finalF1y-(Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx)-game.lineF2drag.height/2;
				}
				else
				{
					game.drawPaths( game.lineF2, {x:game.finalF1x, y:game.finalF1y}, {x:0, y:0}, {x:game.finalF2x,y:game.finalF1y+(Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx)}, false, '#000000', 1, 'rightArrowHead', false);
					game.lineF2dragHTx=game.finalF2x-game.lineF2drag.width/2;
					game.lineF2dragHTy=game.finalF1y+(Number(game.oDashTxtArr[12].text)*game.oneNewtonInPx)-game.lineF2drag.height/2;
				}
			}
			
			game.txtF2.setLocation(game.lineF2dragHTx+40, game.lineF2dragHTy+40);
		}
		else if(!game.isHeadtoTail)
		{
			game.txtF2.setLocation(game.finalF2x+20, game.finalF2y+10);
			game.drawPaths( game.lineF2, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.finalF2x, y:game.finalF2y}, false, '#000000', 1, 'rightArrowHead', false);
		}
	}
	
	game.mouseMoveHandler = function(id,drag)
	{
		var xdiff=Math.abs((game.ballImgCx)-(drag.x+drag.width/2));
		var ydiff=Math.abs((game.ballImgCy)-(drag.y+drag.height/2));
		
		if((drag.x+drag.width/2)<(game.ballImgCx)) // leftSide from Ball
		{
			if(ydiff<=xdiff){	
				game.tx=drag.x+drag.width/2-game.headLen;
				game.ty=game.ballImgCy;
			}
			else if(ydiff>xdiff){
				game.tx=game.ballImgCx;
				game.ty=drag.y+drag.height/2;
			}
		}
		else if((drag.x+drag.width/2)>(game.ballImgCx))//RightSide from Ball
		{
			if(ydiff<xdiff){
				game.tx=Math.round(drag.x+drag.width/2)-game.headLen;
				game.ty=game.ballImgCy;
			}
			else if(ydiff>xdiff){
				game.tx=game.ballImgCx;
				game.ty=drag.y+drag.height/2;
			}
		}
		
		var tempvalFx= Math.abs((game.ballImgCx)-(game.tx));
		var tempvalFy= Math.abs((game.ballImgCy)-(game.ty));
		
		if(id=='F1drag')
		{
			var ftxt;
			if(tempvalFx>tempvalFy)
			{
				ftxt=tempvalFx;
			}	
			else
			{
				ftxt=tempvalFy;
			}	
			if(Math.round(ftxt/game.oneNewtonInPx)>=10)
			{
				game.oDashTxtArr[9].setText( Math.round(ftxt/game.oneNewtonInPx) );
				game.finalF1x=game.tx;
				game.finalF1y=game.ty;
				game.drawPaths( game.lineF1, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.finalF1x, y:game.finalF1y}, false, '#000000', 1, 'rightArrowHead', false);
				game.txtF1.setLocation(game.finalF1x+20, game.finalF1y+10);
			}
			
		}
		if(id=='F2drag')
		{
			var ftxt;
			if(tempvalFx>tempvalFy)
			{
				ftxt=tempvalFx;
			}	
			else
			{
				ftxt=tempvalFy;
			}	
			if(Math.round(ftxt/game.oneNewtonInPx)>=10)
			{
				game.oDashTxtArr[12].setText( Math.round(ftxt/game.oneNewtonInPx) );
				game.finalF2x=game.tx;
				game.finalF2y=game.ty;
				game.drawPaths( game.lineF2, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.finalF2x, y:game.finalF2y}, false, '#000000', 1, 'rightArrowHead', false);
				game.txtF2.setLocation(game.finalF2x+20, game.finalF2y+10);
			}
		}
		
		drawForceNet();	
		
		if(game.isHeadtoTail)
		{
		game.onHeadtoTail();
		}
		
	}
	
	game.drawPaths=function ( obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq)
	{
	
		var headlen = 15;	// length of head in pixels
		obj.paint= function(_director, time) {	
			var dx = lineTO.x - moveTO.x;
			var dy = lineTO.y - moveTO.y;
			var angle = Math.atan2(dy,dx);
			
			var canvas = game._director.ctx;			
			canvas.strokeStyle = strokeColor;
			canvas.fillStyle = strokeColor;
			canvas.lineWidth = lineWidth;
			canvas.beginPath();
			if(arrowDir == 'leftArrowHead') {
				canvas.moveTo( moveTO.x, moveTO.y);			
				canvas.lineTo( moveTO.x + headlen * Math.cos(angle-Math.PI/10), moveTO.y + headlen*Math.sin(angle-Math.PI/10));
				canvas.lineTo( moveTO.x + headlen * Math.cos(angle+Math.PI/10), moveTO.y + headlen*Math.sin(angle+Math.PI/10));
				canvas.fill();
			} else if(arrowDir == 'rightArrowHead'){
				canvas.moveTo( (lineTO.x), lineTO.y);
				canvas.lineTo( (lineTO.x) - headlen * Math.cos(angle-Math.PI/7), lineTO.y - headlen*Math.sin(angle-Math.PI/7));
				canvas.lineTo( (lineTO.x) - headlen * Math.cos(angle+Math.PI/7), lineTO.y - headlen*Math.sin(angle+Math.PI/7));
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
				//canvas.dashedLine(moveTO.x, moveTO.y, midPoint.x, midPoint.y, lineTO.x, lineTO.y, [10,10]);	
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
	
	function drawForceNet()
	{
		if((game.finalF1x==game.ballImgCx && game.finalF2x==game.ballImgCx) || (game.finalF1y==game.ballImgCy && game.finalF2y==game.ballImgCy) )
		{
			if(game.finalF1y==game.ballImgCy && game.finalF2y==game.ballImgCy)// X Axis
			{
				//F1 & F2 opposite 
				if((game.finalF1x<game.ballImgCx && game.finalF2x>game.ballImgCx) || (game.finalF1x>game.ballImgCx && game.finalF2x<game.ballImgCx))
				{
					game.oDashTxtArr[1].setText(Math.abs(Number(game.oDashTxtArr[9].text)-Number(game.oDashTxtArr[12].text)).toFixed(1)+'');
					
					if(Number(game.oDashTxtArr[9].text)== Number(game.oDashTxtArr[12].text) )//Force == same
					{
					
						game.txtNetForce.setLocation(game.ballImgCx, game.ballImgCy);
						game.lineForceNet.visible=false;
						game.txtZero.visible=true;
					}
					else
					{
						game.lineForceNet.visible=true;
						game.txtZero.visible=false;
						
						if(Number(game.oDashTxtArr[9].text)> Number(game.oDashTxtArr[12].text))
						{
						
							if(game.finalF1x<game.ballImgCx ){
								game.Fnetx=game.ballImgCx-(Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx);
							}
							else if(game.finalF1x>game.ballImgCx ){
								game.Fnetx=game.ballImgCx+Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx;
							}
							game.Fnety=game.ballImgCy;
						}
						
						else if(Number(game.oDashTxtArr[9].text)< Number(game.oDashTxtArr[12].text))
						{
							if(game.finalF2x<game.ballImgCx ){
								game.Fnetx=game.ballImgCx-(Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx);
							}
							else if(game.finalF2x>game.ballImgCx ){
								game.Fnetx=game.ballImgCx+Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx;
							}
							game.Fnety=game.ballImgCy;
						}
						
						if(!game.isFinished)
						{
						//game.txtNetForce.setText('Fnet');
						game.txtNetForce.setLocation(game.Fnetx+20, game.Fnety);
						//game.lineForceNet.visible=true;
						game.drawPaths( game.lineForceNet, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.Fnetx, y:game.Fnety}, false, '#FF0000', 1, 'rightArrowHead', false);
						}
						
					}
			
				}
				else //F1 & F2 in same dir
				{ 
					game.lineForceNet.visible=true;
					game.txtZero.visible=false;
					game.oDashTxtArr[1].setText((Number(game.oDashTxtArr[9].text)+Number(game.oDashTxtArr[12].text)).toFixed(1)+'');
					
					if(game.finalF1x<game.ballImgCx && game.finalF2x<game.ballImgCx) // Left Dir
					{
						game.Fnetx=game.ballImgCx-Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx;
						
					}
					if(game.finalF1x>game.ballImgCx && game.finalF2x>game.ballImgCx) // right Dir
					{
						game.Fnetx=game.ballImgCx+Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx;
					}
					game.Fnety=game.ballImgCy;
					if(!game.isFinished)
					{
					//game.txtNetForce.setText('Fnet');
					game.txtNetForce.setLocation(game.Fnetx+20, game.Fnety);
					//game.lineForceNet.visible=true;
					game.drawPaths( game.lineForceNet, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.Fnetx, y:game.Fnety}, false, '#FF0000', 1, 'rightArrowHead', false);
					}
				}
				
			}
			else if(game.finalF1x==game.ballImgCx && game.finalF2x==game.ballImgCx) // Y Axis
			{
				//F1 & F2 opposite 
				if((game.finalF1y<game.ballImgCy && game.finalF2y>game.ballImgCy) || (game.finalF1y>game.ballImgCy && game.finalF2y<game.ballImgCy))
				{
					game.oDashTxtArr[1].setText(Math.abs(Number(game.oDashTxtArr[9].text)-Number(game.oDashTxtArr[12].text)).toFixed(1)+'');
					
					if(Number(game.oDashTxtArr[9].text)== Number(game.oDashTxtArr[12].text) )//Force == same
					{
						game.txtNetForce.setLocation(game.ballImgCx, game.ballImgCy);
						game.lineForceNet.visible=false;
						game.txtZero.visible=true;
						
					}
					else{
					
						game.lineForceNet.visible=true;
						game.txtZero.visible=false;
						
						if(Number(game.oDashTxtArr[9].text)> Number(game.oDashTxtArr[12].text))
						{
							if(game.finalF1y<game.ballImgCy ){
								game.Fnety=game.ballImgCy-(Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx);
							}
							else if(game.finalF1y>game.ballImgCy ){
								game.Fnety=game.ballImgCy+Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx;
							}
							game.Fnetx=game.ballImgCx;
						}
						
						else if(Number(game.oDashTxtArr[9].text)< Number(game.oDashTxtArr[12].text))
						{
							if(game.finalF2y<game.ballImgCy ){
								game.Fnety=game.ballImgCy-(Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx);
							}
							else if(game.finalF2y>game.ballImgCy ){
								game.Fnetx=game.ballImgCy+Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx;
							}
							game.Fnetx=game.ballImgCx;
						}
						
						if(!game.isFinished)
						{
						//game.txtNetForce.setText('Fnet');
						game.txtNetForce.setLocation(game.Fnetx+20, game.Fnety);
						game.drawPaths( game.lineForceNet, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.Fnetx, y:game.Fnety}, false, '#FF0000', 1, 'rightArrowHead', false);
						}
					}
			
				}
				else //F1 & F2 in same dir
				{ 
					game.lineForceNet.visible=true;
					game.txtZero.visible=false;
					game.oDashTxtArr[1].setText((Number(game.oDashTxtArr[9].text)+Number(game.oDashTxtArr[12].text)).toFixed(1)+'');
					
					if(game.finalF1y<game.ballImgCy && game.finalF2y<game.ballImgCy) //  Top 
					{
						game.Fnety=game.ballImgCy-Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx;
					}
					if(game.finalF1y>game.ballImgCy && game.finalF2y>game.ballImgCy) // Bottom
					{
						game.Fnety=game.ballImgCx+Number(game.oDashTxtArr[1].text)*game.oneNewtonInPx;
					}
					game.Fnetx=game.ballImgCx;
					if(!game.isFinished)
					{
					//game.txtNetForce.setText('Fnet');
					game.txtNetForce.setLocation(game.Fnetx+20, game.Fnety);
					game.drawPaths( game.lineForceNet, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.Fnetx, y:game.Fnety}, false, '#FF0000', 1, 'rightArrowHead', false);
					}
				}
			}
			
		}
		
		else
		{
			game.lineForceNet.visible=true;
			game.txtZero.visible=false;
			var tempNetF= Math.sqrt((Number(game.oDashTxtArr[9].text)*Number(game.oDashTxtArr[9].text))+(Number(game.oDashTxtArr[12].text)*Number(game.oDashTxtArr[12].text)));
			game.oDashTxtArr[1].setText(tempNetF.toFixed(1));
					
			if( Math.abs(game.ballImgCx-game.finalF1x) > Math.abs(game.ballImgCx-game.finalF2x))
			{
				game.Fnetx=game.finalF1x;
				game.Fnety=game.finalF2y;
				
			}
			else{
			
				game.Fnetx=game.finalF2x;
				game.Fnety=game.finalF1y;
			}
			if(!game.isFinished)
			{
			//game.txtNetForce.setText('Fnet');
			game.txtNetForce.setLocation(game.Fnetx+25, game.Fnety+5);
			game.drawPaths( game.lineForceNet, {x:game.ballImgCx, y:game.ballImgCy}, {x:0, y:0}, {x:game.Fnetx, y:game.Fnety}, false, '#FF0000', 1, 'rightArrowHead', false);
			}
		}				
	}
})();