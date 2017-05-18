//=======================================================
//	create director and scean
//=======================================================
game.screening = function(director, scene){

	var conBody = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	var conBottom = new CAAT.Foundation.ActorContainer().setBounds(0, director.height-100, director.width, 100);
	var conBanner = new CAAT.Foundation.ActorContainer().setBounds(0,0, 380, 50).enableDrag(true);
	
	//=======================================================
	//	create banner and text msg
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('banner'), 1, 3),true).
											enableEvents(false);
		
		conBanner.addChild(aActor);
		
		var text1 = game.textActor(director, 'Set the maximum speed of blue car', 'Bold 14px Arial', 'left', '#000000').setId('text1');
		var text2 = game.textActor(director, 'that keeps it on the track,then press GO. ', 'Bold 14px Arial', 'left', '#000000').setId('text2');
		
		text1.setLocation(((conBanner.width  -  text1.width)/2)+6, 12);
		conBanner.addChild(text1);
		
		text2.setLocation(((conBanner.width  -  text2.width)/2)+6, 28);
		conBanner.addChild(text2);
			
		var pathBehaviour = new CAAT.PathBehavior().
			setValues(new CAAT.Path().
			setLinear(-2, -90, -2, 0).
			setInteractive(false)).
			setDelayTime(0, 600);
		conBanner.addBehavior(pathBehaviour);
	})();

	//=======================================================
	//	create static images and backgrounds bottom
	//=======================================================
	(function(){
		var dashBoardEle = [];										//img id, left, top, width, visible
		dashBoardEle.push({id:'dash', left:0, top:0, width:760});
		dashBoardEle.push({id:'checkline', left:324, top:-80, width:10});
		dashBoardEle.push({id:'finish', left:326, top:-80, width:10});
		dashBoardEle.push({id:'startline', left:460, top:-500, width:10});
		dashBoardEle.push({id:'wellleft', left:380, top:0, width:10});
		dashBoardEle.push({id:'well100', left:390, top:0, width:100});
		dashBoardEle.push({id:'well100', left:470, top:0, width:100});
		dashBoardEle.push({id:'well100', left:570, top:0, width:100});
		dashBoardEle.push({id:'wellright', left:670, top:0, width:10});
		
		
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
		
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true).
												enableEvents(true);
			aActor.setLocation(element.left, element.top);
			conBottom.addChild(aActor);
		}
	
		
			
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('incrBgMed'), 1, 1),true).
											enableEvents(false);
		aActor.setLocation(510, 38);
		conBottom.addChild(aActor);	
		
		
		conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
	})();
	
	//=======================================================
	//	create static images and backgrounds body
	//=======================================================
	(function(){
		var dashBoardEle = [];										//img id, left, top, width, visible
		dashBoardEle.push({id:'background', left:0, top:0, width:760});	//well left
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true);
			aActor.setLocation(element.left, element.top);
			conBody.addChild(aActor);
			
		}
	})();
	
	scene.addChild(conBody, 'body');
	conBody.addChild(conBanner);
	scene.addChild(conBottom, 'bottom');
	return conBanner;
}