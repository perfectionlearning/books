//=======================================================
//	create director and scean
//=======================================================
game.screening = function(director, scene){

	var conBody = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	var conBottom = new CAAT.Foundation.ActorContainer().setBounds(0, director.height-100, director.width, 100);
	//var conBanner = new CAAT.Foundation.ActorContainer().setBounds(10, 8, 390, 50).enableDrag(true);
	var conBanner = new CAAT.Foundation.ActorContainer().setBounds(0, 0, 400, 0).enableDrag(true);
	var extraBannerContainer = new CAAT.Foundation.ActorContainer().setBounds(10, 8, 400, 70).setClip(true);
	//=======================================================
	//	create banner and text msg
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('banner'), 1, 3),true).
											enableEvents(false);
		
		conBanner.addChild(aActor);
		
		var text1 = game.textActor(director, 'To make the jump, the car must be traveling', 'Bold 14px Arial', 'left', '#000000').setId('text1');
		var text2 = game.textActor(director, 'at 12.5 m/s at the bottom of the hill. A 125 N', 'Bold 14px Arial', 'left', '#000000').setId('text2');
		var text3 = game.textActor(director, "frictional force opposes car's motion on the hill.", 'Bold 14px Arial', 'left', '#000000').setId('text3');
		
		text1.setLocation(((conBanner.width  -  text1.width)/2)+6, 12);
		conBanner.addChild(text1);
		
		text2.setLocation(((conBanner.width  -  text2.width)/2)+6, 28);
		conBanner.addChild(text2);
		
		text3.setLocation(((conBanner.width -  text3.width) / 2)+6, 44);
		conBanner.addChild(text3);
		aActor.setSpriteIndex(2);
	})();

	//=======================================================
	//	create static images and backgrounds bottom
	//=======================================================
	(function(){
		var dashBoardEle = [];										//img id, left, top, width, visible
		dashBoardEle.push({id:'dash', left:0, top:0, width:760});
		dashBoardEle.push({id:'wellleft', left:530, top:0, width:10});
		dashBoardEle.push({id:'well100', left:540, top:0, width:100});
		dashBoardEle.push({id:'well100', left:570, top:0, width:100});
		dashBoardEle.push({id:'well100', left:670, top:0, width:100});
		dashBoardEle.push({id:'wellright', left:750, top:0, width:10});
		dashBoardEle.push({id:'speed', left:425, top:0, width:760});
		
		
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true).
												enableEvents(true);
			aActor.setLocation(element.left, element.top);
			conBottom.addChild(aActor);
		}
		
		var lbl1 = game.textActor(director, 'Initial speed', '14px Arial', 'left', '#ffffff');
		lbl1.setLocation(580,25);
		var lbl2 = game.textActor(director, 'm/s', '12px Arial', 'left', '#ffffff');
		lbl2.setLocation(635,50);
		conBottom.addChild(lbl1);
		conBottom.addChild(lbl2);
		
		extraBannerContainer.addChild(conBanner);
		conBottom.addChild(extraBannerContainer);
		//conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
	})();
	
	//=======================================================
	//	create static images and backgrounds body
	//=======================================================
	(function(){
		var dashBoardEle = [];										//img id, left, top, width, visible
		dashBoardEle.push({id:'background', left:0, top:0, width:760});	//well left
		//dashBoardEle.push({id:'arrow', left:62, top:79, width:197});	//well left
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
	scene.addChild(conBottom, 'bottom');
	return conBanner;
}