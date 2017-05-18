//
//	Game Logic
//
(function(){

  var meu = (4 * 3.14); 
  game.current = 1.00000;
  game.radius = 0.200;
  game.oneMetForCurrent = 0.0238095238095238;
  game.lastL1x = 410;
  game.NewX  = 410;
	var xStart = null, xStart1=null, yStart = null, width = null, height = null;
					
		var numOfCircles = 4;
		var radius = [247, 119, 55, 23];
		var colors = ['#f3c180', '#eeaa78', '#eb9770', '#ce0836'];
		var originX = 217,originY = 250;
		var rodLength = 360;
		var verticalAng = null;
  
  game.onObjMove = function(magneticField,slider1,slider2,a){
		
		game.NC.visible=false;
		game.NL.visible=false;
		game.Redline.visible = true;
		game.oDashSlider1.x=slider1.x;
		 
		
		if(a==1){
		if(slider1.x <=20 && a == 1)
			{
				game.oDashSlider1.x=20;
			}
		if(slider1.x >=104 && a == 1)
			{
				game.oDashSlider1.x=104;
			}
			
		var val_ang = 104 - (game.oDashSlider1.x);
		game.ang1 = (80	 / 84) * (val_ang);
		
		if(game.oDashSlider1.x > 102 && (game.oDashSlider2.x > 471.5)){
		
			game.letterI.visible=true;
		
				 game.Move1X = 0;
				 game.Move1Y = 0;

				 game.Line1X = 0 ;
				 game.Line1Y = 0;

				 game.Move2X = 0;
				 game.Move2Y = 0;

				 game.Line2X = 0;
				 game.Line2Y = 0;

				 game.Move3X = 0;
				 game.Move3Y = 0;

				 game.Line3X = 0;
				 game.Line3Y = 0;
				
				 game.NC.visible=true;
				 game.NL.visible=false;
				 game.Redline.visible = false;
		}else if(game.oDashSlider1.x > 103 && (game.oDashSlider2.x < 470.5)){
				game.Redline.visible = false;
				game.NC.visible=false;
				game.NL.visible=true;
		}else if((game.oDashSlider2.x >= 471.5 && game.oDashSlider2.x <= 472.5)){
				game.Redline.visible = false;
				game.NC.visible=false;
				game.NL.visible=false;		
		}
}


	if(a==2)
	{
			game.oDashSlider2.x = slider2.x;
			
			if(slider2.x >= 514){
				game.oDashSlider2.x = 513.5;
			}
			if(slider2.x <= 429){
				game.oDashSlider2.x = 429.5;
			}
			//if(slider2.x < 514 && slider2.x > 429 && a==2){
		
			//Calcute Slider2 Left
			var sliderLeft = 429;
			var sliderHolderLeft = 471.5;
			var oriDiff = sliderHolderLeft - sliderLeft;
			
			//game.oDashSlider2.setLocation(slider2.x,game.oDashSlider2.y);
	
			if((game.oDashSlider2.x) < 470.5 && slider1.x != 103.5){
				game.letterI.visible=true;
				
				//slider holder in left half of the slider
				game.Circle.setAlpha(1);
				game.Circle2.setAlpha(1);
				game.Circle3.setAlpha(1);
				game.Circle4.setAlpha(1);
	
				var newDiff = game.oDashSlider2.x - sliderLeft;
				var ratio = parseFloat(newDiff / oriDiff).toFixed(1);
				
				game.Circle.setAlpha(Math.abs(1-ratio));
				game.Circle2.setAlpha(Math.abs(1-ratio));
				game.Circle3.setAlpha(Math.abs(1-ratio));
				game.Circle4.setAlpha(Math.abs(1-ratio));
					
				//To Make Line Draw in Left gradually:
				
				game.Move1X = 367;
				game.Move1Y = 238;

				//if((game.oDashSlider2.x - 105.5) >  game.NewX ){
				game.Line1X =  game.oDashSlider2.x - 105.5;
				//}
				game.Line1Y = 236;

				game.Move2X = game.Line1X;
				game.Move2Y = 236;

				game.Line2X = game.Move2X + 10;
				game.Line2Y = 232;

				game.Move3X = game.Line1X;
				game.Move3Y = 236;

				game.Line3X = game.Move3X + 10;
				game.Line3Y = 241;	
				
				game.lastL1x=game.Line1X ;
				
				//Calculate Magnetic Field:

				var dd = Math.abs(471.5 - game.oDashSlider2.x);
				game.current= dd * game.oneMetForCurrent;
				
				game._magField = (meu * game.current.toFixed(2)) / (2 * 3.14 * game.radius.toFixed(3));
				var temp = game._magField.toFixed(2);
				
				var tempval = Math.round(temp * 10)/10;
				game.mag_FieldPowerVal.setText('-7');
					if(temp>=10)
						{
							temp=(temp/10).toFixed(2);
							game.mag_FieldPowerVal.setText('-6');
						}
					if(game.oDashSlider2.x >= 466.5)
						{
						game.mag_FieldPowerVal.setText('-8');
						}
				game.mag_FieldVal.setText( temp + ' x 10');
				game.mag_FieldTVal.setText('T');
				

			}else if(game.oDashSlider2.x > 472.5){
			
		
				game.letterI.visible=true;
				//slider holder in right half of the slider
				game.Circle.setAlpha(1);
				game.Circle2.setAlpha(1);
				game.Circle3.setAlpha(1);
				game.Circle4.setAlpha(1);
				var newDiff = game.oDashSlider2.x - sliderLeft;
				var ratio = parseFloat(newDiff / oriDiff).toFixed(1);
				game.Circle.setAlpha(Math.abs(1-ratio));
				game.Circle2.setAlpha(Math.abs(1-ratio));
				game.Circle3.setAlpha(Math.abs(1-ratio));
				game.Circle4.setAlpha(Math.abs(1-ratio));
				
				
				//To Make Line Draw in right gradually:
				
				
				 game.Move1X = 367;
				 game.Move1Y = 238;
				if((game.oDashSlider2.x - 105.5) <  game.NewX ){
				
				
				 game.Line1X =  game.oDashSlider2.x - 105.5 ;
				 }else{
				 game.Line1X =  game.oDashSlider2.x - 105.5 ;
				 }
				 game.Line1Y = 239;

				 game.Move2X = game.Line1X;
				 game.Move2Y = 239;

				 game.Line2X = game.Move2X - 10;
				 game.Line2Y = 234;

				 game.Move3X = game.Line1X;
				 game.Move3Y = 239;

				 game.Line3X = game.Move3X - 10;
				 game.Line3Y = 243;
				
				game.lastL1x=game.Line1X ;
				
				//Calculate Magnetic Field:

				var dd = Math.abs(game.oDashSlider2.x - 471.5);
				
				game.current = dd * game.oneMetForCurrent;
			
				game._magField = (meu * game.current.toFixed(2)) / (2 * 3.14 * game.radius.toFixed(3));
				var temp = game._magField.toFixed(2);
				
				var tempval = Math.round(temp * 10)/10;
				
				game.mag_FieldPowerVal.setText('-7');
					if(temp>=10)
						{
							temp=(temp/10).toFixed(2);
							game.mag_FieldPowerVal.setText('-6');
						}
					if(game.oDashSlider2.x <= 475.5){
						game.mag_FieldPowerVal.setText('-8');
						}
				game.mag_FieldVal.setText( temp + ' x 10');
				
				game.mag_FieldTVal.setText('T');
				
			} else if((game.oDashSlider2.x >= 471.5 && game.oDashSlider2.x <= 472.5)){
			
				game.Redline.visible = false;
				game.NC.visible = false;
				game.NL.visible = false;
			
				//Centre point of slider
				game.Circle.setAlpha(0);
				game.Circle2.setAlpha(0);
				game.Circle3.setAlpha(0);
				game.Circle4.setAlpha(0);
			
				//Calculate Magnetic Field:
				game.mag_FieldVal.setText('0.00 x 10');
				game.mag_FieldPowerVal.setText('0');
				game.mag_FieldTVal.setText('T');
				//game.Redline.visible = false;
				game.letterI.visible = false;
			}
		
			if(game.oDashSlider1.x > 103 && (slider2.x > 471.5)){
		
				 game.Move1X = 0;
				 game.Move1Y = 0;

				 game.Line1X = 0 ;
				 game.Line1Y = 0;

				 game.Move2X = 0;
				 game.Move2Y = 0;

				 game.Line2X = 0;
				 game.Line2Y = 0;

				 game.Move3X = 0;
				 game.Move3Y = 0;

				 game.Line3X = 0;
				 game.Line3Y = 0;
				 
					
				 game.NC.visible=true;
				 game.Redline.visible = false;
		}else if (game.oDashSlider1.x > 102 && game.oDashSlider2.x < 471.5){
				game.Move1X = 0;
				 game.Move1Y = 0;

				 game.Line1X = 0 ;
				 game.Line1Y = 0;

				 game.Move2X = 0;
				 game.Move2Y = 0;

				 game.Line2X = 0;
				 game.Line2Y = 0;

				 game.Move3X = 0;
				 game.Move3Y = 0;

				 game.Line3X = 0;
				 game.Line3Y = 0;	
		
				game.NL.visible=true;
				game.Redline.visible = false;
		}
		//}

	}		if(a==0){
				game.magnetImg.y = magneticField.y;
		
					if(magneticField.y < 305){
						game.magnetImg.y = 305;
		
					}
					if(magneticField.y > 414){
						game.magnetImg.y = 414;
					}
		
					if((game.oDashSlider2.x >= 471.5 && game.oDashSlider2.x <= 472.5)){
			
						//Calculate Magnetic Field:
						game.mag_FieldVal.setText('0.00 x 10');
						game.mag_FieldPowerVal.setText('0');
						game.mag_FieldTVal.setText('T');
						game.mag_FieldVal.setLocation(game.magnetImg.x +33 ,game.magnetImg.y + 13 );
						game.mag_FieldPowerVal.setLocation(game.magnetImg.x +93 ,game.magnetImg.y + 9 );
						game.mag_FieldTVal.setLocation(game.magnetImg.x +108 ,game.magnetImg.y + 13 );
						game.Val =((game.magnetImg.y+4) - 250)/2;
						game.rTxt.setLocation(game.rTxt.x,game.Val+245);
						
						//Calculating Magnetic Field
						var dd1 = Math.abs( (game.magnetImg.y+4) - 250);
						game.radius = (dd1 /840);
						game.rTxt.setText('R = ' + game.radius.toFixed(3) + ' m ');
					}
		
					else{
						game.mag_FieldVal.setLocation(game.magnetImg.x +33 ,game.magnetImg.y + 13 );
						game.mag_FieldPowerVal.setLocation(game.magnetImg.x +93 ,game.magnetImg.y + 9 );
						game.mag_FieldTVal.setLocation(game.magnetImg.x +108 ,game.magnetImg.y + 13 );
						game.Val =((game.magnetImg.y+4) - 250)/2;
						game.rTxt.setLocation(game.rTxt.x,game.Val+245);
						
						//Calculating Magnetic Field
						var dd1 = Math.abs( (game.magnetImg.y+4) - 250);
						game.radius = (dd1 /840);
						game.rTxt.setText('R = ' + game.radius.toFixed(3) + ' m ');
						
						//Calculate Magnetic Field:
						game._magField = (meu * game.current.toFixed(2)) / (2 * 3.14 * game.radius.toFixed(3));
						var temp = game._magField.toFixed(2);
						
						game.mag_FieldPowerVal.setText('-7');
							if(temp >=10)
							{
								temp = (temp/10).toFixed(2);
								game.mag_FieldPowerVal.setText('-6');	
							}

						game.mag_FieldVal.setText( temp + ' x 10');	
						
						game.mag_FieldTVal.setText('T');
	
					}
		}
	}
	
//---------------------------------
//get coordinates at certain angle
//---------------------------------
		function makeTangent(cx,cy,r,a){
			var ang=(Math.PI/180)*a;
			var x1 = cx + (r * Math.cos(ang));
			var y1 = cy + (r * Math.sin(ang));	
			return [x1,y1];
		}
//---------------------------------------------------------
//on providing some angle in your case via slider change
//---------------------------------------------------------
	game.tiltCircle = function( val ) {
			game.ang1 = val;
			drawCircles(ctxBg, ctxFg);
		}
//----------------------------------
//To get midpoint
//-----------------------------------
	function mid(a,b) {
		return (a+b) / 2;
	}
//----------------------------------
//To draw vectors
//-----------------------------------	
	function drawArrowVectors(c1x, c1y, c2x, c2y, endX, endY, h, ctx, startX, startY, hLen) {
		var cp1x = c1x;
		var cp1y = c1y;
		var cp2x = c2x;
		var cp2y = c2y;
		var ex = endX;
		var ey = endY;
		
		// now find the midpoint of each of those 3 lines
		var ax = mid(cp1x, startX);	//start point to first control point
		var bx = mid(cp2x, ex);		//second control point to end point
		var cx = mid(cp1x, cp2x)	//first and second control point
		
		var ay = mid(cp1y, startY);	//start point to first control point
		var by = mid(cp2y, ey);		//second control point to end point
		var cy = mid(cp1y, cp2y);	//first and second control point
		
		var g1x = mid(ax,cx);		
		var g2x = mid(bx,cx);
		
		var g1y = mid(ay,cy); 
		var g2y = mid(by,cy);  
		
		var FinallyTheMidpointx = mid(g1x,g2x); 
		var FinallyTheMidpointy = mid(g1y,g2y);

		var headlen = hLen;
		
		if((game.oDashSlider2.x) > 471.5){
		
			var dx = g1x - g2x;
			var dy = g1y - g2y;
		}else if((game.oDashSlider2.x) < 471.5){
		
			var dx = g2x - g1x;
			var dy = g2y - g1y;
		
		}
		
		
		var angle = Math.atan2(dy,dx);
		ctx.beginPath();
		ctx.moveTo( FinallyTheMidpointx, FinallyTheMidpointy);			
		ctx.lineTo( FinallyTheMidpointx + headlen * Math.cos(angle-Math.PI/5), FinallyTheMidpointy + headlen*Math.sin(angle-Math.PI/5));
		ctx.moveTo( FinallyTheMidpointx, FinallyTheMidpointy);
		ctx.lineTo( FinallyTheMidpointx + headlen * Math.cos(angle+Math.PI/5), FinallyTheMidpointy + headlen*Math.sin(angle+Math.PI/5));
		ctx.stroke();
	}
//--------------------------------
//this function draws oval/circle
//--------------------------------
	function drawEllipse(ctx, x, y, w, h, fill, color, iVal) {
	  var kappa = .5522848,
		  ox = (w / 2) * kappa, // control point offset horizontal
		  oy = (h / 2) * kappa, // control point offset vertical
		  xe = x + w,           // x-end
		  ye = y + h,           // y-end
		  xm = x + w / 2,       // x-middle
		  ym = y + h / 2;       // y-middle
		
		  ctx.beginPath();
		  ctx.moveTo(x, ym);
		  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
		  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
		  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
		  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);	  

		  game.midPoint.setLocation(xm + ox, y); //cp1
		  game.midPoint1.setLocation(xe, ym - oy); //cp2
		  game.midPoint2.setLocation(xe, ym); //end
		  game.midPoint3.setLocation(xm, y); //start
		  
		  ctx.fillStyle = color;
		  ctx.strokeStyle= color;	
		  ctx.lineWidth = 2.0;
		  
		  if(fill) ctx.fill();
		  ctx.closePath();
		  ctx.stroke();
		  //var iVal = 0;
		  var hLen = 0;
			if(iVal < 4)
				hLen = 10;
			if(iVal < 3)
				hLen = 10;
			if(iVal < 2)
				hLen = 12;
			if(iVal < 1)
				hLen = 14;
		  drawArrowVectors(xm + ox, y, xe, ym - oy, xe, ym, h, ctx, xm, y, hLen);
		  drawArrowVectors(xm - ox, ye, x, ym + oy, x, ym, h, ctx, xm, ye, hLen);
	
		}
		
//-----------------------
//Circle Moving Function
//------------------------
		game.drawCirclesBG = function(ctx, index){
	
			verticalAng = game.ang1 / 16;
		
			var midPtX = 367;	
			var midPtY =  250;

			//calculating the rod length at different angles
			var newRodLength = ((rodLength/2) / 80) * game.ang1;
			var newlineLength = (44/ 80) * game.ang1;
			
			//from the mid point find the where is the origin for red circles is
			var xyValue_bg = makeTangent(midPtX, midPtY, newRodLength, verticalAng + 180);
			var originX_bg = xyValue_bg[0] ;
			var originY_bg = xyValue_bg[1] ;
			
			
			if(game.oDashSlider2.x < 471.5){
			var xyLine_bg = makeTangent(midPtX, midPtY, newlineLength, verticalAng + 180);
			
			if(!game.DFlag){
				game.Move1X = 367;
				game.Move1Y = 238;
			if(xyLine_bg[0]>game.lastL1x)
			{
				game.Line1X = xyLine_bg[0] ;
			}
				game.Line1Y = 236 ;
			
				game.Move2X = game.Line1X;
				game.Move2Y = 236;

				game.Line2X = game.Move2X + 10;
				game.Line2Y = 232;

				game.Move3X = game.Line1X;
				game.Move3Y = 236;

				game.Line3X = game.Move3X + 10;
				game.Line3Y = 241;
				
				game.NewX = game.Line1X ;
			
			}
			}
			
			//calculating the rod length at different angles
			var newRodLength1 = ((rodLength/2) / 80) * game.ang1;
			
			//from the mid point find the where is the origin for blue circles is
			var xyValue_fg = makeTangent(midPtX, midPtY, newRodLength1, verticalAng);
			var originX_fg = xyValue_fg[0] ;
			var originY_fg = xyValue_fg[1] ;
			if(game.oDashSlider2.x > 471.5){
			var xyLine_fg = makeTangent(midPtX, midPtY, newlineLength, verticalAng );
			
			if(!game.DFlag){	

				game.Move1X = 367;
				game.Move1Y = 238;
			

			if(xyLine_fg[0]<game.lastL1x)
			{
				game.Line1X = xyLine_fg[0] ;
			}else{
				game.Line1X = xyLine_fg[0];
			}
				game.Line1Y = 239 ;
			
				game.Move2X = game.Line1X;
				game.Move2Y = 239;

				game.Line2X = game.Move2X - 10;
				game.Line2Y = 234;

				game.Move3X = game.Line1X;
				game.Move3Y = 239;

				game.Line3X = game.Move3X - 10;
				game.Line3Y = 243;
				
				game.NewX = game.Line1X ;
			}
			}
			for(var i = 0; i < numOfCircles; i++) {
				var xyValue1 = makeTangent(originX_bg, originY_bg, radius[i], game.ang1);
				var xyValue2 = makeTangent(originX_fg, originY_fg, radius[i], game.ang1);
				var newRadius1 = originX_bg - xyValue1[0];
				var newRadius2 = originX_fg - xyValue2[0];
				if(index == 1) {
					var NxyValue1 = makeTangent(originX_bg, originY_bg, radius[0], game.ang1);
					//draw red circles
					drawEllipse(ctx, xyValue1[0], originY_bg-radius[i], 2*newRadius1, 2*radius[i], false, colors[i], i);  
					game.Nx = NxyValue1[0];
					game.Ny = originY_bg-radius[0];
					game.Nwidth  = 2*newRadius1;
					game.Nheight = 2*radius[0];
					
					
				} else {
				var NxyValue2 =  makeTangent(originX_fg, originY_fg, radius[0], game.ang1);
					//draw blue circles
					drawEllipse(ctx, xyValue2[0], originY_fg-radius[i], 2*newRadius2, 2*radius[i], false, colors[i], i);
					game.N1x = NxyValue2[0];
					game.N1y = originY_fg-radius[0];
					game.N1width  = 2*newRadius2;
					game.N1height = 2*radius[0];
				}
			}
			
			//draw red circle's center point - just for reference
			//drawEllipse(ctx, originX_bg-2, originY_bg-2, 3, 3, true, 'black');
			
			//draw blue circle's center point - just for reference
			//drawEllipse(ctx, originX_fg-2, originY_fg-2, 3, 3, false, 'black');	  
			//draw center point of the rod - just for reference
			//drawEllipse(ctx, midPtX - 2.5, midPtY - 2.5, 5, 5, true, 'purple');
			  
		
				
			//For Extending the angle till '0'....
			 var dx = 367 - originX_bg;
			 var dy = 250 - originY_bg;
			 var Angle_val = Math.atan2(dy,dx);
			
			 var diff = 104 - (game.oDashSlider1.x );
			 var angL = diff * (190/74);
			 var angR = diff * (215/74);
			 
			 game.nn = makeTangent(originX_bg,originY_bg,-angL,  (Angle_val *(180/Math.PI)));
			 //For Extending the angle till '760'....
			 var dx1 =  originX_fg - 367;
			 var dy1 =  originY_fg - 250;
			
			 var Angle_val1 = Math.atan2(dy1,dx1);
			 
			 game.nn1 = makeTangent(originX_fg,originY_fg,angR,(Angle_val1 *(180/Math.PI)));
			 
			game.drawLine(game.nn[0] ,  game.nn[1],game.nn1[0] +5 ,game.nn1[1]);
		}

//----------------------------------------
// To draw Center Angle Line
//----------------------------------------
game.drawLine = function(originX_bg, originY_bg,originX_fg, originY_fg){
				game.angLine.paint = function(director, time){			
					 var ctx = director.ctx;		
					 ctx.beginPath();
					 ctx.moveTo(originX_bg, originY_bg);
					 ctx.lineTo(originX_fg, originY_fg);
					 ctx.lineWidth = 8;
					 ctx.strokeStyle = '#808080';										 
					 ctx.stroke();
				}
}
//----------------------------------------
// To draw Center Angle Line
//----------------------------------------		
		 game._createAngleLine = function(){
				var canvas = document.createElement('canvas');
				canvas.x = 0;
				canvas.y = 0;
				canvas.width = game.mainPanel.width;
				canvas.height = game.mainPanel.height;
				
				game.angLine = new CAAT.Foundation.Actor().
							setBackgroundImage(canvas).
							 setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
							 setClip(true);
					game.angLine.__ctx = canvas.getContext('2d');
				 		
					 game.angLine.__ctx.beginPath();
					 game.angLine.__ctx.moveTo(0, 0);
					 game.angLine.__ctx.lineTo(0, 100);
					 game.angLine.__ctx.lineWidth = 8;
					 game.angLine.__ctx.strokeStyle = '#808080';
				
			game.mainPanel.addChild(game.angLine);				
		 }
		
//---------------------------------------------------------
//Circle Moving Function
//---------------------------------------------------------
	game.drawCirclesFG = function(ctx, index, obj){
		
		verticalAng = game.ang1 / 16;
		
		//this value is the middle point between the red and blue circles
		
		var midPtX = 367;	
		var midPtY =  250;

		
		//calculating the rod length at different angles
		var newRodLength = ((rodLength/2) / 80) * game.ang1;
		
		//from the mid point find the where is the origin for red circles is
		var xyValue_bg = makeTangent(midPtX, midPtY, newRodLength, verticalAng + 180);
		var originX_bg = xyValue_bg[0] ;
		var originY_bg = xyValue_bg[1];
		
		var newRodLength1 = ((rodLength/2) / 80) * game.ang1;
		
		//from the mid point find the where is the origin for blue circles is
		var xyValue_fg = makeTangent(midPtX, midPtY, newRodLength1, verticalAng);
		var originX_fg = xyValue_fg[0] ;
		var originY_fg = xyValue_fg[1];
		
		for(var i = 0; i < numOfCircles; i++) {
			var xyValue1 = makeTangent(originX_bg, originY_bg, radius[i], game.ang1);
			var xyValue2 = makeTangent(originX_fg, originY_fg, radius[i], game.ang1);
			var newRadius1 = originX_bg - xyValue1[0];
			var newRadius2 = originX_fg - xyValue2[0];
			if( i == 0 ) {
				xStart = xyValue1[0], yStart = originY_bg-radius[i], width = 2*newRadius1, height = 2*radius[i];
				xStart1 = xyValue2[0], yStart = originY_bg-radius[i], width = 2*newRadius1, height = 2*radius[i];
				
			}
			if(index == 1) {
				//draw red circles
				drawEllipse(ctx, xyValue1[0], originY_bg-radius[i], 2*newRadius1, 2*radius[i], false, colors[i], i);  
			} else {
				//draw blue circles
				drawEllipse(ctx, xyValue2[0], originY_fg-radius[i], 2*newRadius2, 2*radius[i], false, colors[i], i);
			}
		}
		//draw red circle's center point - just for reference
		//drawEllipse(ctx, originX_bg-2, originY_bg-2, 3, 3, false, 'black');
	
		//draw blue circle's center point - just for reference
		//drawEllipse(ctx1, originX_fg-2, originY_fg-2, 3, 3, true, 'black');	  
		//draw center point of the rod - just for reference
		//drawEllipse(ctx, midPtX - 2.5, midPtY - 2.5, 5, 5, true, 'purple');
		  
		
		
		var dx = originX_fg - originX_bg;
		var dy = originY_fg - originY_bg;
		
		var m = dy / dx;
		
		var c = originY_bg - m * originX_bg;
		
		var y = m * 0 + c;
		
		var x1 = 760;
		var y1 = m * x1 + c;
		
		
		if( obj==game.Circle2 ) {
			
			obj.setSize(xStart - Math.abs(width/2), 500);
		
		}
		else
		{
			obj.setSize(xStart1 - Math.abs(width/2), 500);
		}
	}
	
	

})()