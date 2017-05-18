//
//	Game Logic
//
(function(){
	game.G=6.67*Math.pow(10,-11);
	//game.G=1;
	game.m=0;
	game.M=Math.pow(10,16);//1.18*Math.pow(10,-20);
	//game.oneMtInPx=15.28*Math.pow(10,17);
	game.oneMtInPx = 153;
	game.goFlag=false;
	var chargeColor = '#6600ff';
	game.F;
	var mainTimer;
	var startTimeStamp;
	var currentTimeStamp;
	var elapsedTimeInSec;
	game.accelerationArray=[];
	game.uh=[0,0,0,0,0];
	game.uv=[0,0,0,0,0];
	game.sh=[0,0,0,0,0];
	game.sv=[0,0,0,0,0];
	game.stuck=false;
	game.collidedCharges=[];
	var addDatatoArrayI=false;
	var addDatatoArrayJ=false;
	var countGroup1 = 0;
	var countGroup2 = 0;
	game.collidedChargeGroup1=[];
	game.collidedChargeGroup2=[];
	var group2 = false;
	var hor = 0;
	var ver = 0;
	var fcount = 0;
	game.p1Force=[];
	game.p2Force=[];
	game.p3Force=[];
	game.p4Force=[];
	game.p5Force=[];
	game.collidedMoving=false;
	game.goBtnMDownHandler = function(){
		if(!game.goFlag)
		{
			startTimeStamp=new Date().getTime();
			invisilbeLines();
			
			mainTimer=game._scene.createTimer(
						0,
						Number.MAX_VALUE,
						function (scene_time, timer_time, timertask_instance) {   // timeout
							
						},
						function (scene_time, timer_time, timertask_instance) { 
							moveMasses();
						},
						function (scene_time, timer_time, timertask_instance) {   
							// cancel
						}
					)
			game.goFlag=true;
			game.dragFlag=true;
		 }
	}
	
	function moveMasses()
	{
		currentTimeStamp=new Date().getTime();
		elapsedTimeInSec=(currentTimeStamp-startTimeStamp)/1000;
		
		for(var i=0;i<game.massesArray.length;i++)
		{
			//Move the present in the container here
			//			 // tick
			populateAcceleration();
			game.generateForceArray(); 
			
			if(game.collidedCharges.length>0)
			{
					for(var g=0;g<game.collidedCharges.length;g++)
					{
						if(game.massesArray[i][1]==game.collidedCharges[g][1])
							{
									hor = hor + game.accelerationArray[i][0];
									ver = ver  + game.accelerationArray[i][1];	
									fcount = fcount+1;
							}
					}
			}
		
			if(fcount>0){
				hor = hor / fcount;
				ver = ver / fcount;
			}else{
				hor = game.accelerationArray[i][0];
				ver = game.accelerationArray[i][1];
			}
			
			game.sh[i]=(game.uh[i]*elapsedTimeInSec)+(0.5*hor*Math.pow(elapsedTimeInSec,2));
			game.sv[i]=(game.uv[i]*elapsedTimeInSec)+(0.5*ver*Math.pow(elapsedTimeInSec,2));
			if(game.collidedCharges.length>0)
			{
				for(var k=0;k<game.collidedCharges.length;k++)
				{
					if(game.massesArray[i][1]==game.collidedCharges[k][1])
					{
						game.stuck=true;
					}
					if(game.collidedCharges[k][3]==1){
						group2 = true;
					}
					
				}
			}
			if(!game.stuck )
			{   
				game.massesArray[i][0].x=game.massesArray[i][0].x+(game.sh[i]*game.oneMtInPx/(3.2*Math.pow(10,7)));
				game.massesArray[i][0].y=game.massesArray[i][0].y+(game.sv[i]*game.oneMtInPx/(3.2*Math.pow(10,7)));			
			}	
			else if(game.collidedCharges.length<game.massesArray.length || group2){
							
							for(var k=0;k<game.collidedCharges.length;k++)
							{
								if(game.massesArray[i][1]==game.collidedCharges[k][1])
								{   
									var x = game.collidedCharges[k][3];
									
									for(var z=0;z<game.collidedCharges.length;z++){
										
										if(game.collidedCharges[z][3]==x){
											game.collidedCharges[z][0].x=game.collidedCharges[z][0].x+(game.sh[i]*game.oneMtInPx/(3.2*Math.pow(10,7)));
											game.collidedCharges[z][0].y=game.collidedCharges[z][0].y+(game.sv[i]*game.oneMtInPx/(3.2*Math.pow(10,7)));
											game.collidedMoving=true;
										}
									}
										
								}
							}
						}
			
			game.stuck=false;
			group2=false;
			var isSourceInCollide = -1;
				for(var z=0;z<game.collidedCharges.length;z++){
					if(game.collidedCharges[z][1]==game.massesArray[i][1]){
						isSourceInCollide = game.collidedCharges[z][3];
					}
				}
			var source=game.massesArray[i][0];
			var sourceId=game.massesArray[i][1];
			for(var j=0;j<game.massesArray.length;j++){
				var isDesInCollide = -1;
				if(j!=i)
					{
					   var destination = null;
						   for(var z=0;z<game.collidedCharges.length;z++){
								if(game.collidedCharges[z][1]==game.massesArray[j][1]){
										
										isDesInCollide = game.collidedCharges[z][3];
								}
							}	
								if(isDesInCollide!=-1&&isSourceInCollide!=-1){
								if(isSourceInCollide!=isDesInCollide){									
									destination=game.massesArray[j][0];
								}
							}
						if(isSourceInCollide!=-1){
							if(isDesInCollide!=isSourceInCollide){
								destination=game.massesArray[j][0];
							}
						}
						else{
							destination=game.massesArray[j][0];	
						}
				     if(destination!=null){
						var distanceArray=game.dist(destination.x+destination.width/2,destination.y+destination.height/2,source.x+source.width/2,source.y+source.height/2);
						//Find the distance between the charges and check if they contact each other
						if(distanceArray[0]<=(source.width+destination.width)/2)
						{	
							for(var k=0;k<game.collidedCharges.length;k++)
							{
								if(game.massesArray[i][1]==game.collidedCharges[k][1])
								{
									addDatatoArrayI=true;									
									
								}
								if(game.massesArray[j][1]==game.collidedCharges[k][1])
								{
									addDatatoArrayJ=true;									
									
								}
							}
							if(addDatatoArrayI&&addDatatoArrayJ){
									for(var m=0;m<game.collidedCharges.length;m++){
											game.collidedCharges[m][3]=0;
										}
								}
							if(!addDatatoArrayI)
							{   				
								if(game.collidedCharges.length==0)
								{
									game.collidedCharges[game.collidedCharges.length]=[game.massesArray[i][0],game.massesArray[i][1],game.massesArray[i][2],0];
								}	
								else
								{
									var group=1;
									for(var l=0;l<game.collidedCharges.length;l++){
										if(sourceId == game.collidedCharges[l][1]){
											group = game.collidedCharges[l][3];
										}
									}
									game.collidedCharges[game.collidedCharges.length]=[game.massesArray[i][0],game.massesArray[i][1],game.massesArray[i][2],group];
								}			
								
							}
							if(!addDatatoArrayJ)
							{
								if(game.collidedCharges.length==0)
								{
									game.collidedCharges[game.collidedCharges.length]=[game.massesArray[j][0],game.massesArray[j][1],game.massesArray[j][2],0];
								}	
								else
								{
									var group=1;
									for(var l=0;l<game.collidedCharges.length;l++){
										if(sourceId == game.collidedCharges[l][1]){
											group = game.collidedCharges[l][3];
										}
									}
									game.collidedCharges[game.collidedCharges.length]=[game.massesArray[j][0],game.massesArray[j][1],game.massesArray[j][2],group];									
								}							
								
							}			
							addDatatoArrayI=false;
							addDatatoArrayJ=false;
							if(!addDatatoArrayI||!addDatatoArrayJ){
									if(game.collidedCharges.length>0)
	                				{
	                					for(var m=0;m<game.massesArray.length;m++)
							 			{
								  				for(var s=0; s<game.collidedCharges.length;s++){
								  													  	  
								  	   				if(game.massesArray[m][1]==game.collidedCharges[s][1])
				               						{
				               							game.uh[m]=0;
														game.uv[m]=0;	
														game.accelerationArray[m]=0;
				               						}
								  			}
						 			 }
						 		 moveMasses();		
	                			}
							}
						}
						}
					}
			}
			game.uh[i]=game.uh[i]+(game.accelerationArray[i][0]*elapsedTimeInSec);
			game.uv[i]=game.uv[i]+(game.accelerationArray[i][1]*elapsedTimeInSec);
		}
		//Re-initialize the start time stamp and currentx...etc
		startTimeStamp=new Date().getTime();
	}
 //=======================================================
//Generate force arrays for 5 individual masses
//=======================================================	
	game.generateForceArray=function(){
	game.p1Force=[];
	game.p2Force=[];
	game.p3Force=[];
	game.p4Force=[];
	game.p5Force=[];
	var oneNInPx = 10.28 * Math.pow(10, -21);
    countGroup1 = 0;
    countGroup2 = 0;
    for(var z=0;z<game.collidedCharges.length;z++){
    	for(var i=0;i<game.massesArray.length;i++)
		{
				if(game.collidedCharges[z][1]==game.massesArray[i][1]){
					//isSourceInCollide = true;
					if(game.collidedCharges[z][2]<=3){
						if(game.collidedCharges[z][3]==0){
							countGroup1 = countGroup1+1;
						}else{
							countGroup2 = countGroup2+1;
						}						
						
					}
					else if(game.collidedCharges[z][2]==4){
						if(game.collidedCharges[z][3]==0){
							countGroup1 = countGroup1+4;
						}else{
							countGroup2 = countGroup2+4;
						}
					}
					else if(game.collidedCharges[z][2]==5){
						if(game.collidedCharges[z][3]==0){
							countGroup1 = countGroup1+2;
						}else{
							countGroup2 = countGroup2+2;
						}
					}
				}
			}
			
			
	    }
		for(var i=0;i<game.massesArray.length;i++)
		{
			var isSourceInCollide=-1;
			for(var z=0;z<game.collidedCharges.length;z++){
				if(game.collidedCharges[z][1]==game.massesArray[i][1]){
					if(game.collidedCharges[z][3]==0){
						isSourceInCollide=game.collidedCharges[z][3];
					}
					else if(game.collidedCharges[z][3]==1){
						isSourceInCollide=game.collidedCharges[z][3];
					}	
				}
			}
			if(isSourceInCollide==0){
				if(game.massesArray[i][1]=='mass1')
				{
					game.M=countGroup1*Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass2')
				{
					game.M=countGroup1*Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass3')
				{
					game.M=countGroup1* Math.pow(10,16);
				} 
				else if(game.massesArray[i][1]=='mass4')
				{
					game.M=countGroup1*Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass5')
				{
					game.M=countGroup1*Math.pow(10,16);
				}
			}else if(isSourceInCollide==1){
				if(game.massesArray[i][1]=='mass1')
				{
					game.M=countGroup2*Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass2')
				{
					game.M=countGroup2*Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass3')
				{
					game.M=countGroup2* Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass4')
				{
					game.M=countGroup2*Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass5')
				{
					game.M=countGroup2*Math.pow(10,16);
				}
			}
			else{
				if(game.massesArray[i][1]=='mass1')
				{
					game.M=Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass2')
				{
					game.M=Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass3')
				{
					game.M=Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass4')
				{
					game.M=4*Math.pow(10,16);
				}
				else if(game.massesArray[i][1]=='mass5')
				{
					game.M=2*Math.pow(10,16);
				}
			}
			var source=game.massesArray[i][0];
			
			for(var j=0;j<game.massesArray.length;j++){
					
			var isDesInCollide = -1;
				
			if(j!=i)
				{
				   var destination = null;
				   for(var z=0;z<game.collidedCharges.length;z++){
						if(game.collidedCharges[z][1]==game.massesArray[j][1]){
								isDesInCollide = game.collidedCharges[z][3];
								if(isDesInCollide==0){
									game.m = countGroup1*Math.pow(10,16);
									
									
									
								}
								else if(isDesInCollide==1){
									game.m = countGroup2*Math.pow(10,16);
								}
						}
					}	
				  if(isSourceInCollide!=-1){
						if(isDesInCollide!=isSourceInCollide){
							destination=game.massesArray[j][0];
						}
					}
					else{
						destination=game.massesArray[j][0];	
					}
                    if(destination!=null){ 
						
						game.distanceDirection=game.dist(source.x+source.width/2,source.y+source.height/2,destination.x+destination.width/2,destination.y+destination.height/2);
						var distance=game.distanceDirection[0];
						var r=distance/game.oneMtInPx;
								if(game.massesArray[j][1]=='mass1')
								{
									if(!game.goFlag)
									{
									game.lineContainers[0].visible=true;	
									game.eValueArray[0].visible=true;
									}
									
									if(isDesInCollide ==-1){
										game.m=Math.pow(10,16);
									}
									game.F=game.G*game.M*game.m/Math.pow(r,2);
									game.p1Force[game.p1Force.length]=[game.F,game.distanceDirection[1]-Math.PI];
									var HVForce=game.getXYAcceleration(game.p1Force,game.m);
									var angle_deg =  Math.atan2( HVForce[2], HVForce[3] );
									var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
									var netmag=netForce * oneNInPx;
									game.createForceValue(0,netForce);
									game.drawLines(angle_deg,j,	game.lineContainers[0],netmag);
								}
								else if(game.massesArray[j][1]=='mass2')
								{
									if(!game.goFlag)
									{
									game.lineContainers[1].visible=true;
									game.eValueArray[1].visible=true;	
									}
									if(isDesInCollide ==-1){
										game.m=Math.pow(10,16);
									}
									game.F=game.G*game.M*game.m/Math.pow(r,2);
									game.p2Force[game.p2Force.length]=[game.F,game.distanceDirection[1]-Math.PI];
									var HVForce=game.getXYAcceleration(game.p2Force,game.m);
									var angle_deg = Math.atan2( HVForce[2], HVForce[3] );
									var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
									var netmag=netForce * oneNInPx;
									game.createForceValue(1,netForce);
									game.drawLines(angle_deg,j,	game.lineContainers[1],netmag);
								}
							    else if(game.massesArray[j][1]=='mass3')
							    {
									if(!game.goFlag)
									{
									game.lineContainers[2].visible=true;
									game.eValueArray[2].visible=true;	
									}										
									if(isDesInCollide ==-1){
										game.m=Math.pow(10,16);
									}
									game.F=game.G*game.M*game.m/Math.pow(r,2);
									game.p3Force[game.p3Force.length]=[game.F,game.distanceDirection[1]-Math.PI];
							    	var HVForce=game.getXYAcceleration(game.p3Force,game.m);
									var angle_deg = Math.atan2( HVForce[2], HVForce[3] );
									var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
									var netmag=netForce * oneNInPx;
									game.createForceValue(2,netForce);
									game.drawLines(angle_deg,j,	game.lineContainers[2],netmag);
								}
							     else if(game.massesArray[j][1]=='mass4')
							    {
							 		if(!game.goFlag)
									{
									game.lineContainers[3].visible=true;
									game.eValueArray[3].visible=true;
									}
									if(isDesInCollide ==-1){
										game.m=4*Math.pow(10,16);
									}	
									game.F=game.G*game.M*game.m/Math.pow(r,2);
									game.p4Force[game.p4Force.length]=[game.F,game.distanceDirection[1]-Math.PI];
							    	var HVForce=game.getXYAcceleration(game.p4Force,game.m);
									var angle_deg =  Math.atan2( HVForce[2], HVForce[3] );
									var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
									var netmag=netForce * oneNInPx;
									game.createForceValue(3,netForce);
									game.drawLines(angle_deg,j,	game.lineContainers[3],netmag);
								}
							    else if(game.massesArray[j][1]=='mass5')
							    {
							   		if(!game.goFlag)
									{
									game.lineContainers[4].visible=true;
									game.eValueArray[4].visible=true;
									}
									if( isDesInCollide == -1){
										game.m=2*Math.pow(10,16);
									}
									game.F=game.G*game.M*game.m/Math.pow(r,2);
									game.p5Force[game.p5Force.length]=[game.F,game.distanceDirection[1]-Math.PI];
									var HVForce=game.getXYAcceleration(game.p5Force,game.m);
									var angle_deg = Math.atan2( HVForce[2], HVForce[3] );
									var netForce = Math.sqrt(Math.pow(HVForce[2], 2) + Math.pow(HVForce[3], 2));
									var netmag=netForce * oneNInPx;
									game.createForceValue(4,netForce);
									game.drawLines(angle_deg,j,	game.lineContainers[4],netmag);
								}
							}
						}
					}
				}
	}
	 //=======================================================
	//Populates the acceleration for every movement of the masses
	//=======================================================
	function populateAcceleration()
	{
		//Assign every acceleration array from each populated force arrays
		countGroup1 =0;
		countGroup2 = 0;
		
		 for(var z=0;z<game.collidedCharges.length;z++){
        	for(var i=0;i<game.massesArray.length;i++)
			{
					if(game.collidedCharges[z][1]==game.massesArray[i][1]){
						//isSourceInCollide = true;
						if(game.collidedCharges[z][2]<=3){
							if(game.collidedCharges[z][3]==0){
								countGroup1 = countGroup1+1;
							}else{
								countGroup2 = countGroup2+1;
							}						
						}
						else if(game.collidedCharges[z][2]==4){
							if(game.collidedCharges[z][3]==0){
								countGroup1 = countGroup1+4;
							}else{
								countGroup2 = countGroup2+4;
							}
						}
						else if(game.collidedCharges[z][2]==5){
							if(game.collidedCharges[z][3]==0){
								countGroup1 = countGroup1+2;
							}else{
								countGroup2 = countGroup2+2;
							}
						}
					}
				}
		}
		for(var i=0;i<game.massesArray.length;i++)
		{
			var isSourceInCollide1 = false;
			var isSourceInCollide2 = false;
		
				for(var z=0;z<game.collidedCharges.length;z++){
					if(game.collidedCharges[z][1]==game.massesArray[i][1]){
						if(game.collidedCharges[z][3]==0){
							isSourceInCollide1=true;
						}
						else if(game.collidedCharges[z][3]==1){
							isSourceInCollide2=true;
						}											
					}
			}
				if(isSourceInCollide1){
					if(game.massesArray[i][1]=='mass1' )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p1Force,countGroup1*Math.pow(10,16));//returns net horizontal acceleration,net vertical acceleration
						}
						else if(game.massesArray[i][1]=='mass2'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p2Force,countGroup1*Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass3' )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p3Force,countGroup1*Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass4'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p4Force,countGroup1*Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass5'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p5Force,countGroup1*Math.pow(10,16));
						}
				}		
				else if(isSourceInCollide2){
					if(game.massesArray[i][1]=='mass1' )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p1Force,countGroup2*Math.pow(10,16));//returns net horizontal acceleration,net vertical acceleration
						}
						else if(game.massesArray[i][1]=='mass2'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p2Force,countGroup2*Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass3' )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p3Force,countGroup2*Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass4'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p4Force,countGroup2*Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass5'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p5Force,countGroup2*Math.pow(10,16));
						}
				}
				else {
					if(game.massesArray[i][1]=='mass1' )
						{							
							game.accelerationArray[i]=game.getXYAcceleration(game.p1Force,Math.pow(10,16));//returns net horizontal acceleration,net vertical acceleration
						}
						else if(game.massesArray[i][1]=='mass2'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p2Force,Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass3' )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p3Force,Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass4'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p4Force,4*Math.pow(10,16));
						}
						else if(game.massesArray[i][1]=='mass5'  )
						{
							game.accelerationArray[i]=game.getXYAcceleration(game.p5Force,2*Math.pow(10,16));
						}
				}
		}
	}
	game.pauseBtnMDownHandler = function(){
		mainTimer.cancel();
		game.goFlag = false;
	}	
	game.resetBtnMDownHandler = function(){
		
		resetPositions();
	}
	game.getXYAcceleration=function(forceArray,mass)
	{
		var netVerticalForce=0;
        var netHorizontalForce=0;
        for(var i=0;i<forceArray.length;i++)
        {
            netVerticalForce = netVerticalForce + ( forceArray[i][0] * Math.sin(forceArray[i][1]) );
            netHorizontalForce = netHorizontalForce + ( forceArray[i][0] * Math.cos(forceArray[i][1]) );
		}
        var netVerticalAcceleration = netVerticalForce/mass;
        var netHorizontalAcceleration = netHorizontalForce/mass;
        return [netHorizontalAcceleration, netVerticalAcceleration,netVerticalForce,netHorizontalForce];
	}
	 //=======================================================
	//Finds the distance and angle between two objects
	//=======================================================
	game.dist = function (xA, yA, xB, yB) {
        var distance = Math.sqrt(Math.pow((xB - xA), 2) + Math.pow((yB - yA), 2));
        var direction = Math.atan2(yB - yA, xB - xA);
        return [distance, direction];
    } 
   //======================================================
	// For every charges lines are drawn
	//======================================================
    game.drawLines=function(angle,index,container,netMag)
    {
    	var angle_deg =angle* ( 180 / Math.PI );
		var fieldStrength =game.makeTangent(game.massesArray[index][0].x+game.massesArray[index][0].width/2, game.massesArray[index][0].y+game.massesArray[index][0].width/2, netMag, angle_deg);
		game.drawPaths(container, {x:game.massesArray[index][0].x+game.massesArray[index][0].width/2, y: game.massesArray[index][0].y+game.massesArray[index][0].width/2}, 0, {x:fieldStrength[0], y:fieldStrength[1]}, false, chargeColor, 1, 'rightArrowHead', false);
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
	//RESET mandatory things which needs to be reset
	//=======================================================
	function resetPositions()
	{
		if(mainTimer!=null)
		{
			mainTimer.cancel();
		}	
		game.dropFlag=false;
		game.goFlag=false;
		game.dragFlag=false;
		game.collidedCharges=[];
		game.collidedMoving=false;
		invisilbeLines();
		game.massesArray=[];
		game.__bannerDisplay(0,  0, 0, 70, false);
		game.uh=[0,0,0,0,0];
		game.uv=[0,0,0,0,0];
		game.sh=[0,0,0,0,0];
		game.sv=[0,0,0,0,0];
		hor=0;
		ver=0;
		game.massActors[0].x=447;
		game.massActors[0].y=530;
		game.massActors[1].x=487;
		game.massActors[1].y=530;
		game.massActors[2].x=527;
		game.massActors[2].y=530;
		game.massActors[3].x=567;
		game.massActors[3].y=525;
		game.massActors[4].x=617;
		game.massActors[4].y=527;
		game.massContainers[0].x=447;
		game.massContainers[0].y=530;
		game.massContainers[1].x=487;
		game.massContainers[1].y=530;
		game.massContainers[2].x=527;
		game.massContainers[2].y=530;
		game.massContainers[3].x=567;
		game.massContainers[3].y=525;
		game.massContainers[4].x=617;
		game.massContainers[4].y=527;
		game.p1Force=[];
		game.p2Force=[];
		game.p3Force=[];
		game.p4Force=[];
		game.p5Force=[];
	}
	function invisilbeLines()
	{
		//Invisible all the lines when go is pressed
		for(var i=0;i<5;i++)
		{
			game.lineContainers[i].visible=false;
			game.eValueArray[i].visible=false;
		}
	}
	 //=======================================================
	//Creates containers for displaying lines
	//=======================================================
	game.__createLineContainer=function(parent)
	{
		for(var i=0;i<5;i++)
		{
			var lineContainer= new CAAT.Foundation.ActorContainer().setSize(game._director.width, game._director.height);
			parent.addChild(lineContainer);
			game.lineContainers.push(lineContainer);
		}	
	}
    //=======================================================
	//Creates containers for displaying the force values
	//=======================================================
	game.__buildElectricField = function( parent ) {
		var chargeColor = '#6600ff';
		for(var i=0;i<5;i++)
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
	 //=======================================================
	//Creates force value which is displayed
	//=======================================================
	game.createForceValue=function(indexValue,netF)
	{
		game.eValueArray[indexValue].setLocation(game.massActors[indexValue].x+20,game.massActors[indexValue].y+20);
		var netFInExp = netF.toExponential();
		var netMantissa = netFInExp.split('e')[0];
		var netExponent = netFInExp.split('e')[1];
		if(( game.massActors[indexValue].x + game.massActors[indexValue].width ) > game._director.width - 110) {
			game.eValueArray[indexValue].x = game.massActors[indexValue].x - game.eValueArray[indexValue].width - 10;
		} else {
			game.eValueArray[indexValue].x = ( game.massActors[indexValue].x+  game.massActors[indexValue].width ) + 10;
		}
		if((  game.massActors[indexValue].y + game.massActors[indexValue].height ) > 400) {
			game.eValueArray[indexValue].y =  game.massActors[indexValue].y - game.eValueArray[indexValue].height - 10;
		} else {
			game.eValueArray[indexValue].y = (  game.massActors[indexValue].y + game.massActors[indexValue].height ) + 10;	
		}
		game.eValueArray[indexValue].getChildAt(1).setLocation(parseFloat(game.eValueArray[indexValue].getChildAt(0).x + game.eValueArray[indexValue].getChildAt(0).width) + 5, 5);
		game.eValueArray[indexValue].getChildAt(1).setText(' = ' + Math.abs(parseFloat(netMantissa).toFixed(2)) + ' ' + String.fromCharCode(215) + ' 10' );	
		game.eValueArray[indexValue].getChildAt(2).setLocation(parseFloat(game.eValueArray[indexValue].getChildAt(1).x + game.eValueArray[indexValue].getChildAt(1).width)-3, 3);
	
		var formatExpInDisplay = (netExponent > 0) ? (netExponent).split('+')[1] : netExponent;
		
		if(netExponent === undefined) {
			//when the exponent becomes undefined at the center of the charge
			game.eValueArray[indexValue].getChildAt(2).setText( '' );		
		} else {
			//show the exponent
			game.eValueArray[indexValue].getChildAt(2).setText( ' '+formatExpInDisplay );		
		}
		game.eValueArray[indexValue].getChildAt(3).setLocation(parseFloat(game.eValueArray[indexValue].getChildAt(2).x + game.eValueArray[indexValue].getChildAt(2).width) + 2, 5);
		game.eValueArray[indexValue].setSize(game.eValueArray[indexValue].getChildAt(0).width + game.eValueArray[indexValue].getChildAt(1).width + game.eValueArray[indexValue].getChildAt(2).width + game.eValueArray[indexValue].getChildAt(3).width + 14, game.eValueArray[indexValue].getChildAt(1).height + 8);
	}
	 //=======================================================
	//This avoids the overlapping of mass objects when it is dragged
	//=======================================================
	game.massesMovement=function( obj, event)
	{
		
		for(var i=0;i<game.massesArray.length;i++)
		{
			if('mass'+game.massIndex!=game.massesArray[i][1])
			{
				var destination=game.massesArray[i][0];
				
				var netWidth=(obj.width+destination.width)/2;
				
				var x1 = destination.x+(destination.width/2);
				var y1 = destination.y+(destination.height/2);
				var x2 = obj.x+(obj.width/2);
				var y2 = obj.y+(obj.height/2);
				var distanceDirection1=game.dist(x1,y1,x2,y2);
				var angleMouse=game.dist(x1,y1,event.x,event.y);
				console.log([obj.width,destination.width,netWidth,angleMouse[0],distanceDirection1[0]]);
				//console.log([angleMouse[1]*180/Math.PI]);
				if(distanceDirection1[0]<=netWidth)
				{
					var fx=x1+(Math.cos(angleMouse[1])*netWidth);
					var fy=y1+(Math.sin(angleMouse[1])*netWidth);
					obj.x = fx - (obj.width/2);
					obj.y = fy - (obj.height/2);
				}
			}
		}
	}
})()