//=======================================================
//	create director and scean
//=======================================================
game.screening = function(director, scene){
	var conBody = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height).setFillStyle('#597094');
	var conBottom = new CAAT.Foundation.ActorContainer().setBounds(0, director.height-100, director.width, 100);
	var conBanner = new CAAT.Foundation.ActorContainer().setBounds(0, 0, 390, 50).enableDrag(true);
	
	//=======================================================
	//	create banner and text msg
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('banner'), 1, 4),true).
											enableEvents(false);
		
		conBanner.addChild(aActor);
		
		var text1 = game.textActor(director, 'Drag light bulbs and wires to build', 'Bold 14px Arial', 'left', '#000000');
		text1.setLocation(((conBanner.width  -  text1.width)/2)+10, 12);
		conBanner.addChild(text1);
		
		var text2 = game.textActor(director, 'various circuits. Measure current with', 'Bold 14px Arial', 'left', '#000000');
		text2.setLocation(((conBanner.width  -  text2.width)/2)+10, 28);
		conBanner.addChild(text2);
		
		var text3 = game.textActor(director, 'ammeter and potential difference with voltmeter.', 'Bold 14px Arial', 'left', '#000000');
		text3.setLocation(((conBanner.width -  text3.width) / 2)+10, 44);
		conBanner.addChild(text3);
		
		var pathBehaviour = new CAAT.PathBehavior().
			setValues(new CAAT.Path().
			setLinear(-3, 0, -3, -70).
			setInteractive(false)).
			setDelayTime(0, 300);
		conBanner.addBehavior(pathBehaviour);
	})();

	//=======================================================
	//	create static images and backgrounds
	//=======================================================
	(function(){
		
		var dashBoardEle = [];										//img id, left, top, width, visible
		dashBoardEle.push({id:'endleft', left:0, top:0, width:2});		//left end
		dashBoardEle.push({id:'gray100', left:2, top:0, width:100});		//gray100
		dashBoardEle.push({id:'wellleft', left:102, top:0, width:10});	//well left
		dashBoardEle.push({id:'well50', left:112, top:0, width:50});		//well50	
		dashBoardEle.push({id:'well100', left:162, top:0, width:100});	//well100
		dashBoardEle.push({id:'well100', left:262, top:0, width:100});	//well100
		dashBoardEle.push({id:'well100', left:362, top:0, width:100});	//well100
		dashBoardEle.push({id:'wellright', left:462, top:0, width:10});	//well right
		dashBoardEle.push({id:'gray100', left:472, top:0, width:100});	//gray100
		
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true).
												enableEvents(true);
			aActor.setLocation(element.left, element.top);
			conBottom.addChild(aActor);
		}
		
		var text1 = game.textActor(director, 'Ammeter', 'Bold 14px Arial', 'left', '#FFFFFF');
		text1.setLocation(147,15);
		conBottom.addChild(text1);
		
		var text2 = game.textActor(director, 'Voltmeter', 'Bold 14px Arial', 'left', '#FFFFFF');
		text2.setLocation(241,15);
		conBottom.addChild(text2);
		
		conBottom.addChild(conBanner);
		conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
	})();
	
	scene.addChild(conBody, 'body');
	scene.addChild(conBottom, 'bottom');
	return conBanner;
}