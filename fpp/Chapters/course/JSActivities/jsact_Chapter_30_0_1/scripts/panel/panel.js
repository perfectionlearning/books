//=======================================================
//	create director and scean
//=======================================================
game.screening = function(director, scene){

	var conBody = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height).setFillStyle('#fffe9a');
	game.conBottom = new CAAT.Foundation.ActorContainer().setBounds(0, director.height-100, director.width, 100);
	var conBanner = new CAAT.Foundation.ActorContainer().setBounds(0, 0, 390, 70).enableDrag(true);
	
	//=======================================================
	//	create banner and text msg
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('banner'), 1, 4),true).
											enableEvents(false);
		conBanner.addChild(aActor);
		
		var text1 = game.textActor(director, 'Press GO and observe the motion. Try changing', 'Bold 14px Arial', 'left', '#000000').setId('text1');
		var text2 = game.textActor(director, 'the viewing angle. Press RESET, change the initial', 'Bold 14px Arial', 'left', '#000000').setId('text2');
		var text3 = game.textActor(director, "speed to zero, and press GO. what happens?", 'Bold 14px Arial', 'left', '#000000').setId('text3');
		
		text1.setLocation(((conBanner.width  -  text1.width)/2)+6, 12);
		conBanner.addChild(text1);
		
		text2.setLocation(((conBanner.width  -  text2.width)/2)+6, 28);
		conBanner.addChild(text2);
		
		text3.setLocation(((conBanner.width -  text3.width) / 2)+6, 44);
		conBanner.addChild(text3);
		aActor.setSpriteIndex(0);
		
		var pathBehaviour = new CAAT.PathBehavior().
			setValues(new CAAT.Path().
			setLinear(0, 0, 0, -70).
			setInteractive(false)).
			setDelayTime(0, 300);
		conBanner.addBehavior(pathBehaviour);
	})();

	//=======================================================
	//	create static images and backgrounds bottom
	//=======================================================
	(function(){
		
		game.conBottom.addChild(conBanner);
		
		var dashBoardEle = [];										//img id, left, top, width, visible
		dashBoardEle.push({id:'dash', left:0, top:0, width:760});
		dashBoardEle.push({id:'divider', left:15, top:0, width:10});
		dashBoardEle.push({id:'wellleft', left:300, top:0, width:10});
		dashBoardEle.push({id:'well100', left:310, top:0, width:100});
		dashBoardEle.push({id:'well100', left:410, top:0, width:100});
		dashBoardEle.push({id:'well100', left:510, top:0, width:100});
		dashBoardEle.push({id:'well50', left:610, top:0, width:50});
		dashBoardEle.push({id:'wellright', left:650, top:0, width:10});
		
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true).
												enableEvents(true);
			aActor.setLocation(element.left, element.top);
			game.conBottom.addChild(aActor);
		}
		
		var lbl1 = game.textActor(director, 'Viewing angle', '14px Arial', 'left', '#ffffff');
		lbl1.setLocation(320,32);
		var lbl2 = game.textActor(director, 'Initial speed', '14px Arial', 'left', '#ffffff');
		lbl2.setLocation(320,52);
		var lbl3 = game.textActor(director, 'm/s', '14px Arial', 'left', '#ffffff');
		lbl3.setLocation(480,52);
		var lbl4 = game.textActor(director, 'Show velocity vector', '14px Arial', 'left', '#ffffff');
		lbl4.setLocation(320,72);
		game.lbl5 = game.textActor(director, 'Speed -- m/s', '14px Arial', 'left', '#ffffff');
		game.lbl5.setLocation(100,32);
		
		game.conBottom.addChild(lbl1);
		game.conBottom.addChild(lbl2);
		game.conBottom.addChild(lbl3);
		game.conBottom.addChild(lbl4);
		game.conBottom.addChild(game.lbl5);
		//conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
	})();
	
	//=======================================================
	//	create static images and backgrounds body
	//=======================================================
	(function(){
		var dashBoardEle = [];										//img id, left, top, width, visible
		//dashBoardEle.push({id:'background', left:0, top:0, width:760});	//well left
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
	
	return conBanner;
}