//
//	Game Logic
//
(function(){

	var pathBehaviour;
	var startX,startY;//-250, -25.3

	game.redMDown = function(mouseEvent){
		if(!game.redClicked)
		{
			game.btnRed.setAnimationImageIndex([0]);
			game.btnViolet.setAnimationImageIndex([3]);
			game.redClicked=true;
			game.violetClicked=false;
			game.circleColor='#f90000'; 
			game.lineColor='#e39292';
		}
		game.setFlash();
	}
	
	game.violetMDown = function(mouseEvent){
		if(!game.violetClicked)
		{
			game.btnRed.setAnimationImageIndex([1]);
			game.btnViolet.setAnimationImageIndex([2]);
			game.violetClicked=true;
			game.redClicked=false;
			game.circleColor='#e000e0'; 
			game.lineColor='#cf94d8';
		}
		game.setFlash();
	}
	
	game.lowMDown = function(mouseEvent){
		if(!game.lowClicked)
		{
			game.btnLow.setAnimationImageIndex([6]);
			game.btnHigh.setAnimationImageIndex([5]);
			game.lowClicked=true;
			game.highClicked=false;
			game.cirCount=8;
		}
		game.setFlash();
		//game.beamBG.removeChild(game.beamActor );
		//game.electronsBG.removeChild(game.elecContainer);
		//game.isPause=false;
		game.beamActor.visible=false;
		game.elecContainer.visible=false;
	}
	
	game.highMDown = function(mouseEvent){
		if(!game.highClicked)
		{
			game.btnHigh.setAnimationImageIndex([4]);
			game.btnLow.setAnimationImageIndex([7]);
			game.highClicked=true;
			game.lowClicked=false;
			game.cirCount=16;
		}
		game.setFlash();
		//game.beamBG.removeChild(game.beamActor );
		//game.electronsBG.removeChild(game.elecContainer);
		//game.isPause=false;
		game.beamActor.visible=false;
		game.elecContainer.visible=false;
	}
	
	game.setFlash = function(){
		
		if(game.lowClicked)
		{
			game.hi_lowImg.setAnimationImageIndex([2]);
		}
		else if(game.highClicked)
		{
			game.hi_lowImg.setAnimationImageIndex([1]);
		}
		 if(!game.redClicked && !game.violetClicked)
		{
			game.torchImg.setAnimationImageIndex([2]);
			
			if(!game.lowClicked&&!game.highClicked)
			{
				game.torchImg.setLocation(-500,-500);
			}
			else if(game.lowClicked)
			{
				game.torchImg.setLocation(-500,-500);
			}
			else if(game.highClicked)
			{
				game.torchImg.setLocation(239,66);
			}
			
		}
		 if(game.redClicked)
		{
			game.torchImg.setLocation(240,66);
			if(!game.lowClicked&&!game.highClicked)
			{
				game.torchImg.setAnimationImageIndex([3]); 
				
			}
			else if(game.lowClicked)
			{
				game.torchImg.setAnimationImageIndex([3]); 
			}
			else if(game.highClicked)
			{
				game.torchImg.setAnimationImageIndex([1]);
			}
		}
		else if(game.violetClicked)
		{
			game.torchImg.setLocation(240,66);
			if(!game.lowClicked&&!game.highClicked)
			{
				game.torchImg.setAnimationImageIndex([4]); 
			}
			if(game.lowClicked)
			{
				game.torchImg.setAnimationImageIndex([4]); 
			}
			else if(game.highClicked)
			{
				game.torchImg.setAnimationImageIndex([0]);
			}
		}
	}
	
	game.goBtnMDownHandler = function(){
		
		if(!game.isPause)
		{
			if((game.redClicked || game.violetClicked)&&(game.lowClicked||game.highClicked))
			{
				game.beamBG.removeChild(game.beamActor );
				game.beamContainer();
				game.targetTime=5000;
				game.electronsBG.removeChild(game.elecContainer);
				if(game.violetClicked)
				{
					game.electronsContainer();
				}
			}
		}
		if((game.redClicked || game.violetClicked)&&(game.lowClicked||game.highClicked))
		{
			addPathBehavior();
			game.startTime=new Date().getTime();
			addElecPathBehavior();
			game.isPause=false;
			game.beamActor.visible=true;
			game.elecContainer.visible=true;
		}
	}
	
	game.resetBtnMDownHandler = function(){
		
		game.beamActor.visible=false;
		game.elecContainer.visible=false;
		game.isPause=false;
		game.redClicked =false;
		game.violetClicked=false;
		game.lowClicked=false;
		game.highClicked=false;
		game.btnRed.setAnimationImageIndex([1]);
		game.btnViolet.setAnimationImageIndex([3]);
		game.btnLow.setAnimationImageIndex([7]);
		game.btnHigh.setAnimationImageIndex([5]);
		game.hi_lowImg.setAnimationImageIndex([0]);
		game.__bannerDisplayShutter();
		game.torchImg.setLocation(-500,-500);
	}
	
	game.pauseBtnMDownHandler = function(){
	
		if(!game.isPause)
		{
			game.isPause=true;
			game.elecContainer.emptyBehaviorList();
			game.beamActor.emptyBehaviorList();
			game.ellapseTime= (new Date().getTime()) - game.startTime;
			game.targetTime=game.targetTime-game.ellapseTime;
		}
		
	}

	function addPathBehavior(){
		
		pathBehaviour = new CAAT.Behavior.PathBehavior().
        setValues( new CAAT.Path().setLinear(game.beamActor.x, game.beamActor.y, 243,24).setInteractive(false) ).
        setDelayTime(0, game.targetTime);
		game.beamActor.addBehavior(pathBehaviour);
		
	}
	
	function addElecPathBehavior(){
		
		var elecpathBehav= new CAAT.Behavior.PathBehavior().
        setValues( new CAAT.Path().setLinear(game.elecContainer.x,0,-520-500,0).setInteractive(false) ).
        setDelayTime(0, game.targetTime+5000);//2900
		game.elecContainer.addBehavior(elecpathBehav);
	}
	
})()