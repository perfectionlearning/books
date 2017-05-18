//=======================================================
//	create director and scean
//=======================================================
game.screening = function(director, scene){

	var conBody = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	var conBottom = new CAAT.Foundation.ActorContainer().setBounds(0, director.height-100, director.width, 100);
	var conBanner = new CAAT.Foundation.ActorContainer().setBounds(60, 8, 390, 50).enableDrag(true);
	
	//=======================================================
	//	create banner and text msg
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('banner'), 1, 3),true).
											enableEvents(false);
		
		conBanner.addChild(aActor);
		aActor.setSpriteIndex(2);
		var text1 = game.textActor(director, 'To make the jump, drag the car up the frictionless hill so', 'Bold 14px Arial', 'left', '#000000').setId('text1');
		var text2 = game.textActor(director, 'that its speed at bottom is 12.5 m/s.', 'Bold 14px Arial', 'left', '#000000').setId('text2');
		var text3 = game.textActor(director, 'Release the car to start it.', 'Bold 14px Arial', 'left', '#000000').setId('text3');
		//var text4 = game.textActor(director, 'You ndid it! You picked the',  'Bold 14px Arial', 'left', '#000000').setId('text4');
		//var text5 = game.textActor(director, 'correct height',  'Bold 14px Arial', 'left', '#000000').setId('text3').setId('text5');
		
		text1.setLocation(((conBanner.width  -  text1.width)/2)+6, 12);
		conBanner.addChild(text1);
		
		text2.setLocation(((conBanner.width  -  text2.width)/2)+6, 28);
		conBanner.addChild(text2);
		
		text3.setLocation(((conBanner.width -  text3.width) / 2)+6, 44);
		conBanner.addChild(text3);
		
		//text4.setLocation(((conBanner.width -  text4.width) / 2)+10, 60);
		//conBanner.addChild(text4);
		
		//text5.setLocation(((conBanner.width -  text5.width) / 2)+10, 76);
		//conBanner.addChild(text5);
		
		var pathBehaviour = new CAAT.PathBehavior().
			setValues(new CAAT.Path().
			setLinear(50, 70, 50, 8).
			setInteractive(false)).
			setDelayTime(0, 300);
		conBanner.addBehavior(pathBehaviour);
	})();

	//=======================================================
	//	create static images and backgrounds bottom
	//=======================================================
	(function(){
		var dashBoardEle = [];										//img id, left, top, width, visible
		dashBoardEle.push({id:'dash', left:0, top:0, width:760});
		dashBoardEle.push({id:'wellleft', left:560, top:0, width:10});
		dashBoardEle.push({id:'well100', left:570, top:0, width:100});
		dashBoardEle.push({id:'well50', left:640, top:0, width:50});
		dashBoardEle.push({id:'wellright', left:690, top:0, width:10});
		dashBoardEle.push({id:'speed', left:456, top:0, width:760});
		
		
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true).
												enableEvents(true);
			aActor.setLocation(element.left, element.top);
			conBottom.addChild(aActor);
		}
		conBottom.addChild(conBanner);
		//conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
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
	scene.addChild(conBottom, 'bottom');
	return conBanner;
}