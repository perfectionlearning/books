//
//	Game Logic
//
(function(){
	var show=true;
	game.goBtnMDownHandler = function(){
		if(game.isPlay){
			game.goTimer.cancel();
		}
		if(!game.isPause){
		
			var lF=1.00;
			var rF=-0.60;
			//set V value in TextField
			for(var i=0;i<3;i++){
				game.diskVTxtC[i][0].setText(lF.toFixed(2));
				game.diskVTxtC[i][1].setText(rF.toFixed(2));
			}
			//velocity of ball in track
			for(var i=0;i<3;i++){
				game.diskV[i]=[Number(game.diskVTxtC[i][0].text) , Number(game.diskVTxtC[i][1].text)];
			}
			//Intialize Position
			for(var i=0;i<3;i++){
				game.track[i][0].x = game.initialPos[i][0];
				game.track[i][1].x = game.initialPos[i][1];
			}
			//Load Starting Position
			for(var i=0;i<3;i++)
			{
				game.startingPos[i]=[game.initialPos[i][0],game.initialPos[i][1]];
			}
			
			game.__bannerDisplay(0, 0, 0, 70, true);
		}
		else if(game.isPause && !game.isFirst)
		{
			game.onDisplayBanner();
		}
		game.startTime=new Date().getTime();
		game.onPlay();
		game.isPause=false;
		game.isPlay=true;
		
		if(game.substanceContainer.visible){
			game.substanceContainer.visible = false;
		}
	}
	
	game.resetBtnMDownHandler = function(){
		if(game.isPlay)
		{
		game.goTimer.cancel();
		}
		game.isPlay=false;
		game.isPause=false;
		game.bannerFlag=0;
		
		for(var i=0;i<3;i++){
			game.track[i][0].x = game.initialPos[i][0];
			game.track[i][1].x = game.initialPos[i][1];
		}
		game.__bannerDisplay(0, 0, 0, 70, false);
		if(game.substanceContainer.visible){
			game.substanceContainer.visible = false;
		}
	}
	
	game.pauseBtnMDownHandler = function(){
		if(game.isPlay){
			if(game.track[2][0].x==0 && game.track[2][1].x==720){
				game.isPause=false;
			}
			else{
				game.isPause=true;
				for(var i=0;i<3;i++)
				{
					game.startingPos[i]=[game.track[i][0].x ,game.track[i][1].x];
				}
			}
			game.goTimer.cancel();
		}
		if(game.substanceContainer.visible){
			game.substanceContainer.visible = false;
		}
	}
	
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
				
				for(var i=0;i<3;i++){
					game.track[i][0].x = game.startingPos[i][0]+ (game.diskV[i][0]*ellapsetime*game.oneMtInPx);
					game.track[i][1].x = game.startingPos[i][1]+ (game.diskV[i][1]*ellapsetime*game.oneMtInPx);
					
					if(game.track[i][0].x+game.track[i][0].width/2<30){
						game.track[i][0].x = 5;
						game.diskVTxtC[i][0].setText('0.00');
					}
					if(game.track[i][1].x+game.track[i][1].width/2>720){
						game.track[i][1].x = 727;
						game.diskVTxtC[i][1].setText('0.00');
					}
					if( (game.track[i][0].x+game.track[i][0].width) >=game.track[i][1].x-3  && (game.track[i][0].x+game.track[i][0].width) <=  game.track[i][1].x+3 )
					{
						game.diskV[i]=game.diskCV[i];
						game.diskVTxtC[i][0].setText(game.diskV[i][0].toFixed(2));
						game.diskVTxtC[i][1].setText(game.diskV[i][1].toFixed(2));
						//Change Starting Pos after Colli
						game.startingPos[i][0]=game.track[i][0].x;
						game.startingPos[i][1]=game.track[i][1].x;
						game.startTime=new Date().getTime();
					}
				}
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
		)
	}
	
	game.substanceShowPopup = function(event){
	
		game.ABCbtn=event.source.id;
		game.substanceContainer.visible=true;
		if(game.ABCbtn=='Abtn'){
			game.substanceContainer.setLocation(340, -7);
		}
		else if(game.ABCbtn=='Bbtn'){
			game.substanceContainer.setLocation(340, 13);
		}
		else if(game.ABCbtn=='Cbtn'){
			game.substanceContainer.setLocation(340, 33);
		}
		
		if(game.isPlay && !game.isPause){
			game.goTimer.cancel();
			for(var i=0;i<3;i++)
			{
				game.startingPos[i]=[game.track[i][0].x ,game.track[i][1].x];
			}
		}
		
		else if(!game.isPlay && !game.isPause && show)
		{
			show=false;
			game.__bannerDisplay(0, 0, 0, 70, true);
		}
	}
	
	game.oSubTxtContMDown = function(mouseEvent){
	
		var id = Number(mouseEvent.source.id.match(/\d+/g)[0]);
		game.substanceContainer.visible = false;
		
		if(game.isPlay && !game.isPause){
			game.startTime=new Date().getTime();
			game.onPlay();
		}
		
		if(game.ABCbtn=='Abtn'){
		game.substanceTxt1.setText(game.substanceArr[id].childrenList[0].text);
		
		}
		else if(game.ABCbtn=='Bbtn'){
			game.substanceTxt2.setText(game.substanceArr[id].childrenList[0].text);
		}
		else if(game.ABCbtn=='Cbtn'){
			game.substanceTxt3.setText(game.substanceArr[id].childrenList[0].text);
		}
		if(game.isFirst)
		{
		if(game.substanceTxt1.text!='Collision type:' && game.substanceTxt2.text!='Collision type:' && game.substanceTxt3.text!='Collision type:')
		{
			game.isFirst=false;
		}
		}
		if(!game.isPause && !game.isFirst)
		{
			game.onDisplayBanner();
		}
	}
	
	game.onDisplayBanner = function(){
	
		if(game.substanceTxt1.text=='impossible' && game.substanceTxt2.text=='elastic' && game.substanceTxt3.text=='inelastic')
		{
			if(game.bannerFlag!=1)
			{
			game.__bannerDisplay(1, 1, 0, 70, false);
			game.bannerFlag=1;
			}
		}
		else if(game.substanceTxt1.text!='impossible' && game.substanceTxt2.text!='elastic' && game.substanceTxt3.text!='inelastic')
		{
			if(game.bannerFlag!=2)
			{
			game.__bannerDisplay(2, 2, 0, 70, false);
			game.bannerFlag=2;
			}
		}
		else if(game.substanceTxt1.text!='impossible' && game.substanceTxt2.text!='elastic' && game.substanceTxt3.text=='inelastic')
		{
			if(game.bannerFlag!=3)
			{
			game.__bannerDisplay(3, 2, 0, 70, false);
			game.bannerFlag=3;
			}
		}
		else if(game.substanceTxt1.text!='impossible' && game.substanceTxt2.text=='elastic' && game.substanceTxt3.text!='inelastic')
		{
			if(game.bannerFlag!=4)
			{
			game.__bannerDisplay(4, 2, 0, 70, false);
			game.bannerFlag=4;
			}
		}
		else if(game.substanceTxt1.text=='impossible' && game.substanceTxt2.text!='elastic' && game.substanceTxt3.text!='inelastic')
		{
			if(game.bannerFlag!=5)
			{
			game.__bannerDisplay(5, 2, 0, 70, false);
			game.bannerFlag=5;
			}
		}
		else if(game.substanceTxt1.text!='impossible' && game.substanceTxt2.text=='elastic' && game.substanceTxt3.text=='inelastic')
		{
			if(game.bannerFlag!=6)
			{
			game.__bannerDisplay(6, 2, 0, 70, false);
			game.bannerFlag=6;
			}
		}
		else if(game.substanceTxt1.text=='impossible' && game.substanceTxt2.text!='elastic' && game.substanceTxt3.text=='inelastic')
		{
			if(game.bannerFlag!=7)
			{
			game.__bannerDisplay(7, 2, 0, 70, false);
			game.bannerFlag=7;
			}
		}
		else if(game.substanceTxt1.text=='impossible' && game.substanceTxt2.text=='elastic' && game.substanceTxt3.text!='inelastic')
		{
			if(game.bannerFlag!=8)
			{
			game.__bannerDisplay(8, 2, 0, 70, false);
			game.bannerFlag=8;
			}
		}
	}
	game.popupMDownHandler = function(){
		if(game.substanceContainer.visible)
		{
			//game.oSubTxtContMDown();
			game.substanceContainer.visible = false;
			if(game.isPlay && !game.isPause){
			game.startTime=new Date().getTime();
			game.onPlay();
		}
		}
		//game.substanceContainer.visible = false;
		//console.log('called');
	}
})();