//=======================================================
//	create director and scean
//=======================================================
game.screening = function(director, scene){
	var conBody = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	var conBottom = new CAAT.Foundation.ActorContainer().setBounds(0, director.height-100, director.width, 100);
	var conBanner = new CAAT.Foundation.ActorContainer().setBounds(0, 0, 390, 50).enableDrag(false).setId('banner');
	
	
	//=======================================================
	//	create banner and text msg
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('banner'), 1, 4),true).
											enableEvents(false);
		
		aActor.setSpriteIndex(0);
		conBanner.addChild(aActor);
		
		var text1 = game.textActor(director, 'Press GO to send a sound wave through the', 'Bold 14px Arial', 'left', '#000000');
		text1.setLocation(((conBanner.width  -  text1.width)/2)+10, 12);
		conBanner.addChild(text1);
		
		var text2 = game.textActor(director, 'air particles. Vary the amplitude and frequency ', 'Bold 14px Arial', 'left', '#000000');
		text2.setLocation(((conBanner.width  -  text2.width)/2)+10, 28);
		conBanner.addChild(text2);
		
		var text2 = game.textActor(director, 'and observe the different sound waves. ', 'Bold 14px Arial', 'left', '#000000');
		text2.setLocation(((conBanner.width  -  text2.width)/2)+10, 44);
		conBanner.addChild(text2);
		
		

		
			var pathBehaviour = new CAAT.PathBehavior().
										setValues(new CAAT.Path().
										setLinear(-3, 0, -3, -70).
										setInteractive(false)).
										setDelayTime(0, 300);
			conBanner.addBehavior(pathBehaviour);
			
		})();

	//=======================================================
	//	bottom create static images and backgrounds
	//=======================================================
	(function(){
	
		var dashBoardEle = [];										//img id, left, top, width
		dashBoardEle.push({id:'dash', left:0, top:0, width:760});
		dashBoardEle.push({id:'wellleft', left:230, top:0, width:10});
		dashBoardEle.push({id:'well100', left:240, top:0, width:100});
		dashBoardEle.push({id:'well100', left:340, top:0, width:100});
		dashBoardEle.push({id:'well100', left:440, top:0, width:100});
		dashBoardEle.push({id:'well100', left:540, top:0, width:100});
		dashBoardEle.push({id:'well50', left:640, top:0, width:50});
		dashBoardEle.push({id:'wellright', left:690, top:0, width:10});
		
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true).
												enableEvents(true);
			aActor.setLocation(element.left, element.top);
			conBottom.addChild(aActor);
			
		}
	
		var text3 = game.textActor(director, 'Amplitude', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(385,40);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, 'Frequency', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(385,60);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, 'Wavelength', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(55,40);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, 'm', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(182,40);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, 'm', ' Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(544,40);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, String.fromCharCode(181), 'Italic Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(535,40);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, 'Hz', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(535,62);
		conBottom.addChild(text3);	
	
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('incrbgmed'), 1, 1),true).
											enableEvents(false);
		aActor.setLocation(475, 40);
		conBottom.addChild(aActor);
		
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('incrbgmed'), 1, 1),true).
											enableEvents(false);
		aActor.setLocation(475, 60);
		conBottom.addChild(aActor);
	
	
	
		conBottom.addChild(conBanner);
		conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
	
	})();

	scene.addChild(conBody, 'body');
	scene.addChild(conBottom, 'bottom');
	
	return conBanner;
}