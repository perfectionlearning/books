//=======================================================
//	create director and scean
//=======================================================
game.screening = function(director, scene){

	var conBody = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	var conBottom = new CAAT.Foundation.ActorContainer().setBounds(0, director.height-100, director.width, 100);
	var conBanner = new CAAT.Foundation.ActorContainer().setBounds(0,0, 360, 50).enableDrag(false);
	
	//=======================================================
	//	create banner and text msg
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('banner'), 1, 3),true).
											enableEvents(false);
		conBanner.addChild(aActor);
		conBanner.childrenList[0].setSpriteIndex(1);
		var text1 = game.textActor(director, 'Observe how the atoms decay over time. ', 'Bold 13px Arial', 'left', '#000000');
		var text2 = game.textActor(director, 'Determine the half-life of carbon-14. ', ' Bold 13px Arial', 'left', '#000000');
		
		text1.setLocation(20, 12);
		conBanner.addChild(text1);
		
		text2.setLocation(20, 28);
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
		dashBoardEle.push({id:'box', left:70, top:12, width:68});
		dashBoardEle.push({id:'box', left:70, top:41, width:68});
		dashBoardEle.push({id:'divider', left:45, top:0, width:4});
		dashBoardEle.push({id:'divider', left:270, top:0, width:4});
		dashBoardEle.push({id:'well100', left:274, top:0, width:77});
		dashBoardEle.push({id:'well100', left:351, top:0, width:77});
		dashBoardEle.push({id:'well100', left:428, top:0, width:77});
		dashBoardEle.push({id:'well100', left:505, top:0, width:77});
		dashBoardEle.push({id:'divider', left:582, top:0, width:4});
		
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
		
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true).
												enableEvents(true);
			aActor.setLocation(element.left, element.top);
			conBottom.addChild(aActor);
		}
	
		var text1 = game.textActor(director, 'Thousand Years', 'Bold 12px Arial', 'left', '#000000');
		text1.setLocation(150,14);
		conBottom.addChild(text1);
		var text1 = game.textActor(director, 'Billion Atoms', 'Bold 12px Arial', 'left', '#000000');
		text1.setLocation(150,43);
		conBottom.addChild(text1);
		
		var text1 = game.textActor(director, '16000 Years', 'Bold 10px Arial', 'left', '#FFFFFF');
		text1.setLocation(300,18);
		conBottom.addChild(text1);
		var text1 = game.textActor(director, '11460 Years', 'Bold 10px Arial', 'left', '#FFFFFF');
		text1.setLocation(300,42);
		conBottom.addChild(text1);
		var text1 = game.textActor(director, '5730 Years', 'Bold 10px Arial', 'left', '#FFFFFF');
		text1.setLocation(388,18);
		conBottom.addChild(text1);
		var text1 = game.textActor(director, '2865 Years', 'Bold 10px Arial', 'left', '#FFFFFF');
		text1.setLocation(388,42);
		conBottom.addChild(text1);
		
		conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
	})();
	
	//=======================================================
	//	create static images and backgrounds body
	//=======================================================
	(function(){
		var dashBoardEle = [];										//img id, left, top, width, visible
		dashBoardEle.push({id:'background', left:0, top:0, width:634});	//well left
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
	//conBody.addChild(conBanner);
	return conBanner;
}