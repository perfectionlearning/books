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
		
		var text1 = game.UIActor(director, '<b>Use the ammeter to determine the currents in <br>this circuit. Calculate the resistance <i>R</i>,<br>enter this value in the box, and press CHECK.</b>', 'center');
		text1.setBounds(10, 10, conBanner.width-5, 50);
		conBanner.addChild(text1);
		
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
		dashBoardEle.push({id:'gray100', left:102, top:0, width:100});		//gray100
		dashBoardEle.push({id:'wellleft', left:150, top:0, width:10});	//well left
		dashBoardEle.push({id:'well50', left:162, top:0, width:50});		//well50
		dashBoardEle.push({id:'well50', left:212, top:0, width:50});		//well50
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
		text1.setLocation(241,15);
		conBottom.addChild(text1);
		
		conBottom.addChild(conBanner);
		conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
	})();
	
	//=======================================================
	//	create static body images and backgrounds
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
					new CAAT.Foundation.SpriteImage().
						initialize(director.getImage("digram"), 1, 1),true).
						enableEvents(true).setLocation(90, 80);
		
		var text1 = game.textActor(director, 'R = ', 'Bold Italic 14px Arial', 'left', '#FFFFFF');
		text1.setLocation(335,60);
		var text1Omega = game.textActor(director, String.fromCharCode(937), '14px Arial', 'left', '#FFFFFF');
		text1Omega.setLocation(422,60);

		var text2 = game.textActor(director, '20.0', 'Bold 14px Arial', 'left', '#FFFFFF');
		text2.setLocation(148,100);
		var text2Omega = game.textActor(director, String.fromCharCode(937), '14px Arial', 'left', '#FFFFFF');
		text2Omega.setLocation(180,100);
		
		var text3 = game.textActor(director, '10.0', 'Bold 14px Arial', 'left', '#FFFFFF');
		text3.setLocation(275,230);
		var text3Omega = game.textActor(director, String.fromCharCode(937), '14px Arial', 'left', '#FFFFFF');
		text3Omega.setLocation(308,230);
		
		conBody.addChild(aActor);
		conBody.addChild(text1);
		conBody.addChild(text1Omega);
		conBody.addChild(text2);
		conBody.addChild(text2Omega);
		conBody.addChild(text3);
		conBody.addChild(text3Omega);
		
	})();
	
	scene.addChild(conBody, 'body');
	scene.addChild(conBottom, 'bottom');
	return conBanner;
}