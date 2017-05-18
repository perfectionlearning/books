//=======================================================
//	create director and scean
//=======================================================
game.screening = function(director, scene){
	var conBody = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height).setFillStyle('#597094');
	var conBottom = new CAAT.Foundation.ActorContainer().setBounds(0, director.height-100, director.width, 100);
	var conBanner = new CAAT.Foundation.ActorContainer().setBounds(0, -70, 390, 50).enableDrag(true);

	//=======================================================
	//	create banner and text msg
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('banner'), 1, 4),true).
											enableEvents(false);

		conBanner.addChild(aActor);

		var text1 = game.UIActor(director, '<b>Use voltmeter to help you determine the unknown <br>values. The voltmeter does not measure the <i><fontsize=18>' + String.fromCharCode(949) + '</fontsize></i><fontsize=14> of<br>the battery. Press CHECK to see if you are correct.</fontsize></b>', 'center');
		text1.setBounds(10,10, conBanner.width-5, 10);
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

		var text1 = game.textActor(director, 'Voltmeter', 'Bold 14px Arial', 'left', '#FFFFFF');
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

		var text1 = game.UIActor(director, '<fillcolor=#FFFFFF><b><i>R</i><style=sub>1</style> = 40 </b>' + String.fromCharCode(937), 'left');
		text1.setBounds(260,95, 70, 15);

		var text2 = game.UIActor(director, '<fillcolor=#FFFFFF><b><i>R</i><style=sub>2</style> = 10 </b>' + String.fromCharCode(937), 'left');
		text2.setBounds(130,230, 70, 15);

		var text3 = game.UIActor(director, '<b><fillcolor=#FF0000><i>I</i></fillcolor><fillcolor=#FFFFFF> = <tab><tab><tab><tab>A</b>', 'left');
		text3.setBounds(120,69, 200, 15);

		var text4 = game.UIActor(director, '<fillcolor=#FFFFFF><b><i>R</i><style=sub>3</style> = </b><tab><tab><tab><tab>' + String.fromCharCode(937), 'left');
		text4.setBounds(362,198, 200, 15);

		var text5 = game.UIActor(director, '<fillcolor=#FFFFFF><i><fontsize=20>' + String.fromCharCode(949) + '</fontsize></i><fontsize=14> = </b> <tab><tab><tab><tab>V', 'left');
		text5.setBounds(330,373, 200, 15);

		conBody.addChild(aActor);
		conBody.addChild(text1);
		conBody.addChild(text2);
		conBody.addChild(text3);
		conBody.addChild(text4);
		conBody.addChild(text5);


	})();

	scene.addChild(conBody, 'body');
	scene.addChild(conBottom, 'bottom');
	return conBanner;
}