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
		
		aActor.setSpriteIndex(2);
		conBanner.addChild(aActor);
		
		var text1 = game.textActor(director, 'You need to try again', 'Bold 14px Arial', 'left', '#000000').setId('text1');
		text1.setLocation(((conBanner.width  -  text1.width)/2)+10, 12);
		conBanner.addChild(text1);
		
		var text2 = game.textActor(director, 'Press RESET to start over.', 'Bold 14px Arial', 'left', '#000000').setId('text2');
		text2.setLocation(((conBanner.width  -  text2.width)/2)+10, 28);
		conBanner.addChild(text2);
		
		})();
		
	

	//=======================================================
	//	bottom create static images and backgrounds
	//=======================================================
	(function(){
	
		var dashBoardEle = [];										//img id, left, top, width
		dashBoardEle.push({id:'dash', left:0, top:-27, width:760});
		dashBoardEle.push({id:'wellleft', left:300, top:-27, width:10});
		dashBoardEle.push({id:'well100', left:310, top:-27, width:100});
		dashBoardEle.push({id:'well100', left:410, top:-27, width:100});
		dashBoardEle.push({id:'well100', left:510, top:-27, width:100});
		dashBoardEle.push({id:'well100', left:610, top:-27, width:100});
		dashBoardEle.push({id:'well50', left:700, top:-27, width:50});
		dashBoardEle.push({id:'wellright', left:750, top:-27, width:10});
		dashBoardEle.push({id:'arrows', left:450, top:-10, width:100});
		
		for (var i = 0; i < dashBoardEle.length; i++) {
			var element = dashBoardEle[i];
			var aActor = new CAAT.exemplarr().setBackgroundImage(
											new CAAT.Foundation.SpriteImage().
												initialize(director.getImage(element.id), 1, 1),true).
												enableEvents(true);
			aActor.setLocation(element.left, element.top);
			conBottom.addChild(aActor);
		}
		
		var text1 = game.textActor(director, 'Acceleration', 'Bold 14px Arial', 'left', '#FFFFFF');
		text1.setLocation(100,35);
		conBottom.addChild(text1);
		
		var text2 = game.textActor(director, 'm/s', 'Bold 14px Arial', 'left', '#FFFFFF');
		text2.setLocation(250,35);
		conBottom.addChild(text2);
		var text3 = game.textActor(director, '2', '10px arial', 'left', '#FFFFFF');
		text3.setLocation(275,30);
		conBottom.addChild(text3);
	    
		var text3 = game.textActor(director, 'Weight:', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(320,-10);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, 'Normal force:', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(320,15);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, 'Friction:', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(320,40);
		conBottom.addChild(text3);
		var text3 = game.textActor(director, 'Tension:', 'Bold 14px arial', 'left', '#FFFFFF');
		text3.setLocation(320,65);
		conBottom.addChild(text3);

			
		var text1 = game.textActor(director, 'N', 'Bold 14px arial', 'left', '#FFFFFF');
		text1.setLocation(560,40);
		conBottom.addChild(text1);
		var text1 = game.textActor(director, 'N', 'Bold 14px arial', 'left', '#FFFFFF');
		text1.setLocation(560,-10);
		conBottom.addChild(text1);
		var text1 = game.textActor(director, 'N', 'Bold 14px arial', 'left', '#FFFFFF');
		text1.setLocation(560,15);
		conBottom.addChild(text1);
		var text1 = game.textActor(director, 'N', 'Bold 14px arial', 'left', '#FFFFFF');
		text1.setLocation(560,65);
		conBottom.addChild(text1);
	
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('incrbgmed'), 1, 1),true).
											enableEvents(false);
		aActor.setLocation(550, 10);
		//conBottom.addChild(aActor);
		
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('incrbgmed'), 1, 1),true).
											enableEvents(false);
		aActor.setLocation(550, 30);
		//conBottom.addChild(aActor);
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('incrbgmed'), 1, 1),true).
											enableEvents(false);
		aActor.setLocation(550, 50);
		//conBottom.addChild(aActor);
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('incrbgmed'), 1, 1),true).
											enableEvents(false);
		aActor.setLocation(550, 70);
		//conBottom.addChild(aActor);	
	
	
		conBottom.addChild(conBanner);
		conBottom.setZOrder(conBanner, Number.MIN_VALUE); //z-index for banner
	
	})();
	
	//=======================================================
	//	body create static images and backgrounds
	//=======================================================
	(function(){
		var aActor = new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage('flat'), 1, 1),true).
											enableEvents(false);
		aActor.setLocation(0, 0);
		
		
		/*Mid Box*/
	game.midBox = new CAAT.exemplarr().setBounds(251, 242, 100, 100).setId('midBox');
	game.midBox.paint = function(director,time) {
					var canvas = director.ctx;
					/*canvas.fillStyle='white';
					canvas.fillRect(0,0,this.width,this.height );*/
					canvas.strokeStyle='black';
					canvas.beginPath();
					canvas.lineWidth = 1;
					//canvas.rotate(-Math.PI / 6);
					canvas.rect(0, 0, 100, 100);
					canvas.stroke();					
				};
	game.midBox.setRotationAnchored(Math.PI / 3, 0.5, 0.5);
	conBody.addChild(game.midBox);
		
		/*Mid Line*/
		var midLine = new CAAT.exemplarr().setBounds(0, 0, conBody.width, conBody.height).setId('midLine');
		midLine.paint = function(director, time){
							var ctx = director.ctx;
							ctx.strokeStyle='#000000';
							ctx.beginPath();
							ctx.lineWidth = 0.2;
							ctx.moveTo( 666, 140);
							ctx.lineTo( 44, 500);
							ctx.closePath();
							ctx.stroke();
						}	;
		conBody.addChild(midLine);		
		conBody.addChild(aActor);
	})();
	
	
	scene.addChild(conBody, 'body');
	scene.addChild(conBottom, 'bottom');
	
	return conBanner;
}