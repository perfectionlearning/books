//
//	Game Logic
//
(function(){
var chargeColor = '#6600ff';
var mainTimer;
game.oneMtInPx=153;
game.distance;
game.k=8.99*Math.pow(10,9);
game.Q=0;
game.q=0;
game.F;
game.mass=1.6726*Math.pow(10,-27);
var distanceDirection=[];
var currentTimeStamp;
game.elapsedTimeInSec;
game.accelerationArray=[];
game.eValueArray=[];
game.paused=false;
game.uh=[0,0,0,0,0,0];
game.uv=[0,0,0,0,0,0];
game.sh=[0,0,0,0,0,0];
game.sv=[0,0,0,0,0,0];
var addDatatoArrayI=false;
var addDatatoArrayJ=false;
game.moveCharges=false;
game.collidedCharges=[];
game.chargeMouseDown='';
game.startTimeStamp;
//==================================================
//Go button handler
//==================================================
game.goBtnMDownHandler = function(){
	if(!game.goFlag)
	{
		game.startTimeStamp=new Date().getTime();
		invisilbeLines();
		if(!game.paused)
		{
			game.__bannerDisplay(0, 0, -70, 0,true);
		}
		mainTimer=game._scene.createTimer(
					0,
					Number.MAX_VALUE,
					function (scene_time, timer_time, timertask_instance) {   // timeout
						
						
					},
					function (scene_time, timer_time, timertask_instance) { 
						
						moveChargeImages();
										
					},
					function (scene_time, timer_time, timertask_instance) {   
						// cancel
					}
				)
		game.goFlag=true;
		}
	}
	function populateAcceleration()
	{
		//Assign every acceleration array from each populated force arrays
		for(var i=0;i<game.chargesArray.length;i++)
		{
			if(game.chargesArray[i][1]=='chg1' )
			{
				game.accelerationArray[i]=game.getXYAcceleration(game.p1Force);//returns net horizontal acceleration,net vertical acceleration
																			//net vertical force,net horizontal force	
			}
			else if(game.chargesArray[i][1]=='chg2'  )
			{
				game.accelerationArray[i]=game.getXYAcceleration(game.p2Force);
			}
			else if(game.chargesArray[i][1]=='chg3' )
			{
				game.accelerationArray[i]=game.getXYAcceleration(game.p3Force);
			}
			else if(game.chargesArray[i][1]=='chg4'  )
			{
				game.accelerationArray[i]=game.getXYAcceleration(game.p4Force);
			}
			else if(game.chargesArray[i][1]=='chg5'  )
			{
				game.accelerationArray[i]=game.getXYAcceleration(game.p5Force);
			}
			else if(game.chargesArray[i][1]=='chg6' )
			{
				game.accelerationArray[i]=game.getXYAcceleration(game.p6Force);
			}
		}
	}
		
	//Called continuosly on every timer tick
	function moveChargeImages()
	{
		currentTimeStamp=new Date().getTime();
		game.elapsedTimeInSec=(currentTimeStamp-game.startTimeStamp)/1000;
		for(var i=0;i<game.chargesArray.length;i++)
		{
			//Move the present in the container here
			game.generateForceArray(); 
			populateAcceleration(); // tick
			game.sh[i]=(game.uh[i]*game.elapsedTimeInSec)+(0.5*game.accelerationArray[i][0]*Math.pow(game.elapsedTimeInSec,2));
			game.sv[i]=(game.uv[i]*game.elapsedTimeInSec)+(0.5*game.accelerationArray[i][1]*Math.pow(game.elapsedTimeInSec,2));
			if(game.collidedCharges.length>0)
			{
				for(var k=0;k<game.collidedCharges.length;k++)
				{
					if(game.chargesArray[i][1]==game.collidedCharges[k])
					{
						game.stuck=true;
					}
				}
			}
			if(!game.stuck)
			{
				if(game.chargesArray[i][1]!=game.chargeMouseDown)
				{
					game.chargesArray[i][0].x=game.chargesArray[i][0].x+(game.sh[i]*game.oneMtInPx);
					game.chargesArray[i][0].y=game.chargesArray[i][0].y+(game.sv[i]*game.oneMtInPx);
				}
			}
			game.stuck=false;
			
			var source=game.chargesArray[i][0];
			for(var j=0;j<game.chargesArray.length;j++){
				if(j!=i)
					{
						var destination=game.chargesArray[j][0];
						var distanceArray=game.dist(source.x,source.y,destination.x,destination.y);
						//Find the distance between the charges and check if they contact each other
						if(distanceArray[0]>16 && distanceArray[0]<20)
						{	
							for(var k=0;k<game.collidedCharges.length;k++)
							{
								if(game.chargesArray[i][1]==game.collidedCharges[k])
								{
									addDatatoArrayI=true;
								}
								if(game.chargesArray[j][1]==game.collidedCharges[k])
								{
									addDatatoArrayJ=true;
								}
							}
							if(!addDatatoArrayI)
							{
								game.collidedCharges[game.collidedCharges.length]=game.chargesArray[i][1];
							}
							if(!addDatatoArrayJ)
							{
								game.collidedCharges[game.collidedCharges.length]=game.chargesArray[j][1];
							}
							addDatatoArrayI=false;
							addDatatoArrayJ=false;
						}
					}
			}
			game.uh[i]=game.uh[i]+(game.accelerationArray[i][0]*game.elapsedTimeInSec);
			game.uv[i]=game.uv[i]+(game.accelerationArray[i][1]*game.elapsedTimeInSec);
		}
		//Re-initialize the start time stamp and currentx...etc
		game.startTimeStamp=new Date().getTime();
	}
	game.getXYAcceleration=function(forceArray)
	{
		var netVerticalForce=0;
        var netHorizontalForce=0;
        for(var i=0;i<forceArray.length;i++)
        {
            netVerticalForce = netVerticalForce + ( forceArray[i][0] * Math.sin(forceArray[i][1]) );
            netHorizontalForce = netHorizontalForce + ( forceArray[i][0] * Math.cos(forceArray[i][1]) );
		}
        var netVerticalAcceleration = netVerticalForce/game.mass;
        var netHorizontalAcceleration = netHorizontalForce/game.mass;
        return [netHorizontalAcceleration, netVerticalAcceleration,netVerticalForce,netHorizontalForce];
	}
	game.resetBtnMDownHandler = function(){
		resetPositions();
	}
	game.pauseBtnMDownHandler = function(){
		if(mainTimer!=null)
		{
			mainTimer.cancel();
			game.goFlag=false;
			game.paused=true;
			visilbeLines();
			game.stuck=false;
		}	
	}
	function resetPositions()
	{
		if(mainTimer!=null)
		{
			mainTimer.cancel();
		}	
		game.dropFlag=false;
		game.paused=false;
		game.collidedCharges=[];
		game.stuck=false;
		game.uh=[0,0,0,0,0,0];
		game.uv=[0,0,0,0,0,0];
		game.sh=[0,0,0,0,0,0];
		game.sv=[0,0,0,0,0,0];
		game.chargeMouseDown='';
		game.accelerationArray=[];
		game.goFlag=false;
		invisilbeLines();
		game.chargesArray=[];
		game.__bannerDisplay(0, 0, -70, 0, false);
		game.chargeActors[1].y=520;
		game.chargeActors[1].x=250;
		game.chargeActors[2].y=520;
		game.chargeActors[2].x=290;
		game.chargeActors[3].y=520;
		game.chargeActors[3].x=330;
		game.chargeActors[4].y=553;
		game.chargeActors[4].x=250;
		game.chargeActors[5].y=553;
		game.chargeActors[5].x=290;
		game.chargeActors[6].y=553;
		game.chargeActors[6].x=330;
	}
	game.dist = function (xA, yA, xB, yB) {
        var distance = Math.sqrt(Math.pow((xB - xA), 2) + Math.pow((yB - yA), 2));
        var direction = Math.atan2(yB - yA, xB - xA);
        return [distance, direction];
    } 
     //=====================================================
	// For every charges lines are drawn
	//======================================================
    game.drawLines=function(angle,index,container,netMag)
    {
    	if(netMag<18){
			netMag = 18;
		}
    	var angle_deg =angle* ( 180 / Math.PI );
		var fieldStrength =game.makeTangent(game.chargesArray[index][0].x+10, game.chargesArray[index][0].y+10, netMag, angle_deg);
		game.drawPaths(container, {x:game.chargesArray[index][0].x+10, y: game.chargesArray[index][0].y+10}, 0, {x:fieldStrength[0], y:fieldStrength[1]}, false, chargeColor, 1, 'rightArrowHead', false);
    }
     //=====================================================
	// Lets draw the rays with arrow heads
	//======================================================
	game.drawPaths=function( obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
		var headlen = 20;	// length of head in pixels
		obj.paint= function(_director, time) {	
			var dx = lineTO.x - moveTO.x;
			var dy = lineTO.y - moveTO.y;
			var angle = Math.atan2(dy,dx);
			var canvas = _director.ctx;
			canvas.strokeStyle = strokeColor;
			canvas.fillStyle = strokeColor;
			canvas.lineWidth = lineWidth;
			canvas.beginPath();
			if(arrowDir == 'leftArrowHead') {
				canvas.moveTo( moveTO.x, moveTO.y);			
				canvas.lineTo( moveTO.x + headlen * Math.cos(angle-Math.PI/7), moveTO.y + headlen*Math.sin(angle-Math.PI/7));
				canvas.lineTo( moveTO.x + headlen * Math.cos(angle+Math.PI/7), moveTO.y + headlen*Math.sin(angle+Math.PI/7));
				canvas.fill();
			} else if(arrowDir == 'rightArrowHead'){
				canvas.moveTo( lineTO.x, lineTO.y);
				canvas.lineTo( lineTO.x - headlen * Math.cos(angle-Math.PI/7), lineTO.y - headlen*Math.sin(angle-Math.PI/7));
				canvas.lineTo( lineTO.x - headlen * Math.cos(angle+Math.PI/7), lineTO.y - headlen*Math.sin(angle+Math.PI/7));
				canvas.fill();
			}		
			if(middleArrowHeadReq) {
				var dx = midPoint.x - moveTO.x;
				var dy = midPoint.y - moveTO.y;
				var angle = Math.atan2(dy,dx);
				canvas.fillStyle = strokeColor;
				canvas.moveTo( (midPoint.x - 7), midPoint.y);
				canvas.lineTo( (midPoint.x - 7) - headlen * Math.cos(angle-Math.PI/7), midPoint.y - headlen*Math.sin(angle-Math.PI/7));
				canvas.lineTo( (midPoint.x - 7) - headlen * Math.cos(angle+Math.PI/7), midPoint.y - headlen*Math.sin(angle+Math.PI/5));
				canvas.fill();
			}
			canvas.moveTo(moveTO.x, moveTO.y);
			canvas.lineTo(lineTO.x, lineTO.y);
			canvas.lineJoin = 'round';
			canvas.lineCap = 'round';
			canvas.closePath();	
			canvas.stroke();	
		};	
	}
	//=======================================================
	// Make tangent path for electric field
	//=======================================================
	game.makeTangent=function(cx,cy,r,a){
		var ang=(Math.PI/180)*a;
		var x1 = cx + (r * Math.cos(ang));
		var y1 = cy + (r * Math.sin(ang));	
		return [x1,y1];
	}
	//=======================================================
	//Creates a container for displaying the force values
	//=======================================================
	game.buildElectricField = function( parent ) {
		for(var i=0;i<6;i++)
		{
		game.eValueContainer = new CAAT.Foundation.ActorContainer()
									.setFillStyle('white')
									.setClip(true);		
		//This displays the F character
		var chargeTxt_lhs = game.__addTextOnImage( chargeColor, 'F', 'italic bold 14px Arial', 'left', game._director);	
		//This displays the mantissa part of the value
		var chargeTxt = game.__addTextOnImage( chargeColor, 'x', 'bold 14px Arial', 'left',  game._director );
		chargeTxt.setFillStyle('white');
		//This displays the exponent part of the value
		var chargeTxt_pow = game.__addTextOnImage( chargeColor, '3', '11px Arial', 'left',  game._director);
		var chargeTxt_unit = game.__addTextOnImage( chargeColor, ' N', 'bold 14px Arial', 'left', game._director);
		chargeTxt_lhs.setLocation(5, 5);
		chargeTxt.x = chargeTxt_lhs.x + chargeTxt_lhs.width + 5;
		chargeTxt_pow.x = chargeTxt.x + chargeTxt.width + 5;
		chargeTxt_unit.x = chargeTxt_pow.x + chargeTxt_pow.width + 5;
		game.eValueContainer.addChild(chargeTxt_lhs);
		game.eValueContainer.addChild(chargeTxt);
		game.eValueContainer.addChild(chargeTxt_pow);
		game.eValueContainer.addChild(chargeTxt_unit);    
		parent.addChild( game.eValueContainer );
		game.eValueArray.push(game.eValueContainer);
		}
	}	
	game.createForceValue=function(indexValue,netF)
	{
		game.eValueArray[indexValue].setLocation(game.chargeActors[indexValue+1].x+20,game.chargeActors[indexValue+1].y+20);
		var netFInExp = netF.toExponential();
		var netMantissa = netFInExp.split('e')[0];
		var netExponent = netFInExp.split('e')[1];
		if(( game.chargeActors[indexValue+1].x + game.chargeActors[indexValue+1].width ) > game._director.width - 110) {
			game.eValueArray[indexValue].x = game.chargeActors[indexValue+1].x - game.eValueArray[indexValue].width - 10;
		} else {
			game.eValueArray[indexValue].x = ( game.chargeActors[indexValue+1].x+  game.chargeActors[indexValue+1].width ) + 10;
		}
		if((  game.chargeActors[indexValue+1].y + game.chargeActors[indexValue+1].height ) > 400) {
			game.eValueArray[indexValue].y =  game.chargeActors[indexValue+1].y - game.eValueArray[indexValue].height - 10;
		} else {
			game.eValueArray[indexValue].y = (  game.chargeActors[indexValue+1].y + game.chargeActors[indexValue+1].height ) + 10;	
		}
		game.eValueArray[indexValue].getChildAt(1).setLocation(parseFloat(game.eValueArray[indexValue].getChildAt(0).x + game.eValueArray[indexValue].getChildAt(0).width) + 5, 5);
		game.eValueArray[indexValue].getChildAt(1).setText(' = ' + Math.abs(parseFloat(netMantissa).toFixed(2)) + ' ' + String.fromCharCode(215) + ' 10' );	
		game.eValueArray[indexValue].getChildAt(2).setLocation(parseFloat(game.eValueArray[indexValue].getChildAt(1).x + game.eValueArray[indexValue].getChildAt(1).width)-3, 3);
		var formatExpInDisplay = (netExponent > 0) ? (netExponent).split('+')[1] : netExponent;
		if(netExponent === undefined || netExponent >= 0) {
			//when the exponent becomes undefined at the center of the charge
			game.eValueArray[indexValue].getChildAt(2).setText( '' );		
		} else {
			//show the exponent
			game.eValueArray[indexValue].getChildAt(2).setText( ' '+formatExpInDisplay );		
		}
		game.eValueArray[indexValue].getChildAt(3).setLocation(parseFloat(game.eValueArray[indexValue].getChildAt(2).x + game.eValueArray[indexValue].getChildAt(2).width) + 2, 5);
		game.eValueArray[indexValue].setSize(game.eValueArray[indexValue].getChildAt(0).width + game.eValueArray[indexValue].getChildAt(1).width + game.eValueArray[indexValue].getChildAt(2).width + game.eValueArray[indexValue].getChildAt(3).width + 14, game.eValueArray[indexValue].getChildAt(1).height + 8);
	}
	function invisilbeLines()
	{
		//Invisible all the lines when go is pressed
		for(var i=0;i<6;i++)
		{
			game.lineContainers[i].visible=false;
			game.eValueArray[i].visible=false;
		}
	}
	function visilbeLines()
	{
		//Invisible all the lines when go is pressed
		for(var i=0;i<game.chargesArray.length;i++)
		{
			if(game.chargesArray[i][1]=='chg1')
			{
				game.lineContainers[0].visible=true;
				game.eValueArray[0].visible=true;
			}
			if(game.chargesArray[i][1]=='chg2')
			{
				game.lineContainers[1].visible=true;
				game.eValueArray[1].visible=true;
			}
			if(game.chargesArray[i][1]=='chg3')
			{
				game.lineContainers[2].visible=true;
				game.eValueArray[2].visible=true;
			}
			if(game.chargesArray[i][1]=='chg4')
			{
				game.lineContainers[3].visible=true;
				game.eValueArray[3].visible=true;
			}
			if(game.chargesArray[i][1]=='chg5')
			{
				game.lineContainers[4].visible=true;
				game.eValueArray[4].visible=true;
			}
			if(game.chargesArray[i][1]=='chg6')
			{
				game.lineContainers[5].visible=true;
				game.eValueArray[5].visible=true;
			}
				
		}
	}
})();