// //=======================================================
// //	create desktop for user interaction
// //=======================================================
game.interaction = function(director, scene, banner){

	var hourInc=0;
	var tempAtom=32,mAtom=32;
	var hourNew=0;

	var atomdec=0;
	var atomHL=5.73;
	var scLength=533;
	var isGameStart = true;
	var aWhichRadioIsActive = -1;
	var aActorRadioShow = false;
	var aActorRadioShow3 = false;
	var aActorRadioShow1 = false;
	var aActorRadioShow2 = false;
	var isFrstTime = false,pauseFlg = false;
	var aAtoms = new Array();

	var bannerBg = banner.childrenList[0];
	var text1 = banner.childrenList[1];
	var text2 = banner.childrenList[2];

	var actionTimerInstance;

	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);

		function getActor(drag, x, y, id, imgname, row, column){
		var aActor =  new CAAT.exemplarr().setBackgroundImage(
					new CAAT.Foundation.SpriteImage().
						initialize(director.getImage(imgname), row, column), false).
						setSpriteIndex(0).
						setDefaultPos(x, y).
						setId(id);
			return aActor;
	}

	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	var goAction = function(){
		var prevAtom = 32;
		var reduceAtom = 0;
		var cntAtom = 0;

		actionTimerInstance = scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				hourInc++;
				if(hourInc%15==0)
				{
					//----Hours Disply ------
					var tempHour=hourInc/100;
					aLabelYears.setText(tempHour.toFixed(2));

					//--- Atoms Disply ----
						var tempN = tempHour/atomHL;
						tempAtom = 32/Math.pow(2,tempN);
						aLabelAtom.setText(tempAtom.toFixed(1));

						var atomNo=Math.round(tempAtom);
						aAtoms[atomNo].setSpriteIndex(1);
//							console.log([Math.round(tempAtom),atomNo]);

						//--- Draw Scale Line ---
						scLength=tempAtom.toFixed(1)*(533/32);
						if(tempAtom<1)
						{
						scLength=0;
						}
						desktop.removeChild(drawingActor );
						drawGraphContainer();
				}
			},
			function (scene_time, timer_time, timertask_instance) {
			} // cancel
	)};

	function pad2(number) {
     return (number < 10 ? '0' : '') + number;
  	}

	//Bule line for scale
	var drawingActor=null;
	var drawGraphContainer = function() {
		var canvas = document.createElement('canvas');
				canvas.width = 600;
				canvas.height = 10;

	 drawingActor = new CAAT.Foundation.Actor().
							setBackgroundImage( canvas ).
								setBounds( 55, 375,600, 10 );
		var drawingctx = canvas.getContext('2d');
		drawingctx.lineWidth = 17;
		drawingctx.strokeStyle = '#00ccff';

		drawingctx.beginPath();

		drawingctx.moveTo(0, 0);
		drawingctx.lineTo(scLength,0);
		drawingctx.stroke();
		desktop.addChild(drawingActor);
	}
	drawGraphContainer();

	/*Radio Button		*/
	var aRadioBtnRes = -1;
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('radiobutton'), 1, 2)
	var aActorRadio1 = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0,
			function(button){
				aActorRadio1.setButtonImageIndex(1,0,0,0);
				aActorRadio2.setButtonImageIndex(0,0,0,0);
				aActorRadio3.setButtonImageIndex(0,0,0,0);
				aActorRadio4.setButtonImageIndex(0,0,0,0);
				aRadioBtnRes = 0;
			}).setLocation(285, 435);


	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('radiobutton'), 1, 2)
	var aActorRadio2 = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0,
			function(button){
				aActorRadio2.setButtonImageIndex(1,0,0,0);
				aActorRadio1.setButtonImageIndex(0,0,0,0);
				aActorRadio3.setButtonImageIndex(0,0,0,0);
				aActorRadio4.setButtonImageIndex(0,0,0,0);
				aRadioBtnRes = 1;
			}).setLocation(285, 459);

	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('radiobutton'), 1, 2)
		var aActorRadio3 = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0,
			function(button){
				aActorRadio3.setButtonImageIndex(1,0,0,0);
				aActorRadio1.setButtonImageIndex(0,0,0,0);
				aActorRadio2.setButtonImageIndex(0,0,0,0);
				aActorRadio4.setButtonImageIndex(0,0,0,0);
					aRadioBtnRes = 2;
				}).setLocation(370, 435);
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('radiobutton'), 1, 2)
		var aActorRadio4 = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0,
				function(button){
					aActorRadio4.setButtonImageIndex(1,0,0,0);
					aActorRadio1.setButtonImageIndex(0,0,0,0);
					aActorRadio2.setButtonImageIndex(0,0,0,0);
					aActorRadio3.setButtonImageIndex(0,0,0,0);
					aRadioBtnRes = 3;
				}).setLocation(370, 459);


	/*Check Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('check'), 1, 2)
	var aActorCheck = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 0,
			function(button){

							banner.visible=true;
						if(aRadioBtnRes == 0 || aRadioBtnRes == 1 || aRadioBtnRes == 3)
						{
							banner.childrenList[0].setSpriteIndex(2);
							banner.childrenList[1].setText("This is the wrong half-life.");
							banner.childrenList[2].setText(" ");
						}
						else if(aRadioBtnRes == 2)
						{
							banner.childrenList[0].setSpriteIndex(0);
							banner.childrenList[1].setText("This is the correct half-life.");
							banner.childrenList[2].setText(" ");
						}
						else{
							banner.childrenList[0].setSpriteIndex(2);
							banner.childrenList[1].setText("You must select the number of years. ");
							banner.childrenList[2].setText(" ");
						}

				banner.childrenList[1].setLocation(20, 12);
				banner.childrenList[2].setLocation(20, 28);

				var pathBehaviour = new CAAT.PathBehavior().
					setValues(new CAAT.Path().
					setLinear(-2, -90,-2, 0).
					setInteractive(false)).
					setDelayTime(0, 600);
				banner.addBehavior(pathBehaviour);

				//pause the timer
						if(actionTimerInstance){
							actionTimerInstance.cancel();
						}
						pauseFlg = true;
						isGameStart = false;
						}).setLocation(455, 442	);

	/*Go Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorGo = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 0,
			function(button){

					if(isGameStart){
						aAtoms = shuffleArray(aAtoms);
						isGameStart = false;
						goAction();
						banner.visible=false;
						pauseFlg = false;
					}else{
						if(pauseFlg){
							goAction();
							pauseFlg = false;
						}
					}
			}).setLocation(523, 424);

	/*Pause Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorPause = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 2, 2, 3, 2,
						function(button){

						actionTimerInstance && actionTimerInstance.cancel();
						pauseFlg = true;
						isGameStart = false;

						}).setLocation(523, 464);

	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4,
						function(button){
								if(actionTimerInstance){
									actionTimerInstance.cancel();}

								isGameStart=true;
								pauseFlg = false;
								isFrstTime = false;
								pauseFlg = false;
								hourInc=0;
								tempAtom=32,mAtom=32;
								hourNew=0;
								scLength=533;
								desktop.removeChild(drawingActor );
								drawGraphContainer();
								aLabelAtom.setText('32.0');
								aLabelYears.setText('0.00');
								atomdec=0;
								atomHL=5.73;
								for(i=0;i<tempAtom;i++){
								aAtoms[i].setSpriteIndex(0);
								}
					banner.visible=true;
						banner.childrenList[0].setSpriteIndex(1);
						banner.childrenList[1].setText("Observe how the atoms decay over time.");
						banner.childrenList[2].setText("Determine the half-life of carbon-14. ");

						banner.childrenList[1].setLocation(20, 12);
						banner.childrenList[2].setLocation(20, 28);

						var pathBehaviour = new CAAT.PathBehavior().
							setValues(new CAAT.Path().
							setLinear(-2, -90,-2, 0).
							setInteractive(false)).
							setDelayTime(0, 600);
						banner.addBehavior(pathBehaviour);


				}).setLocation(523, 443);

	var aLabelYears =  game.textActor(director, '0.00', ' 13px Arial', 'left', '#00000').setLocation(98, 431);
	var aLabelAtom =  game.textActor(director, '32.0', ' 13px Arial', 'left', '#00000').setLocation(100, 460);  //75,146

	//line 1
	var aActorReddotN = getActor(false, 29, 45, 'reddot', 'red_dot', 1, 2);
	var aActorReddotN1 = getActor(false, 103, 45, 'reddot', 'red_dot', 1, 2);
	var aActorReddotN2 = getActor(false, 177, 45, 'reddot', 'red_dot', 1, 2);
	var aActorReddotN3 = getActor(false, 250, 45, 'reddot', 'red_dot', 1, 2);
	var aActorReddotN4 = getActor(false, 323, 45, 'reddot', 'red_dot', 1, 2);
	var aActorReddotN5 = getActor(false, 397, 45, 'reddot', 'red_dot', 1, 2);
	var aActorReddotN6 = getActor(false, 471, 45, 'reddot', 'red_dot', 1, 2);
	var aActorReddotN7 = getActor(false, 544, 45, 'reddot', 'red_dot', 1, 2);

	aAtoms.push(aActorReddotN);
	aAtoms.push(aActorReddotN1);
	aAtoms.push(aActorReddotN2);
	aAtoms.push(aActorReddotN3);
	aAtoms.push(aActorReddotN4);
	aAtoms.push(aActorReddotN5);
	aAtoms.push(aActorReddotN6);
	aAtoms.push(aActorReddotN7);

	desktop.addChild(aActorReddotN);
	desktop.addChild(aActorReddotN1);
	desktop.addChild(aActorReddotN2);
	desktop.addChild(aActorReddotN3);
	desktop.addChild(aActorReddotN4);
	desktop.addChild(aActorReddotN5);
	desktop.addChild(aActorReddotN6);
	desktop.addChild(aActorReddotN7);

	//line 2
	var aActorReddotl1 = getActor(false, 31, 210, 'reddot', 'red_dot', 1, 2);
	var aActorReddotl2 = getActor(false, 105, 210, 'reddot', 'red_dot', 1, 2);
	var aActorReddotl3 = getActor(false, 178.5, 210, 'reddot', 'red_dot', 1, 2);
	var aActorReddotl4 = getActor(false, 252, 210, 'reddot', 'red_dot', 1, 2);
	var aActorReddotl5 = getActor(false, 325, 210, 'reddot', 'red_dot', 1, 2);
	var aActorReddotl6 = getActor(false, 398.5, 210, 'reddot', 'red_dot', 1, 2);
	var aActorReddotl7 = getActor(false, 472, 210, 'reddot', 'red_dot', 1, 2);
	var aActorReddotl8 = getActor(false, 546.5, 210, 'reddot', 'red_dot', 1, 2);

	aAtoms.push(aActorReddotl1);
	aAtoms.push(aActorReddotl2);
	aAtoms.push(aActorReddotl3);
	aAtoms.push(aActorReddotl4);
	aAtoms.push(aActorReddotl5);
	aAtoms.push(aActorReddotl6);
	aAtoms.push(aActorReddotl7);
	aAtoms.push(aActorReddotl8);

	desktop.addChild(aActorReddotl1);
	desktop.addChild(aActorReddotl2);
	desktop.addChild(aActorReddotl3);
	desktop.addChild(aActorReddotl4);
	desktop.addChild(aActorReddotl5);
	desktop.addChild(aActorReddotl6);
	desktop.addChild(aActorReddotl7);
	desktop.addChild(aActorReddotl8);

	//line 3
	var aActorReddot = getActor(false, 62, 129, 'reddot', 'red_dot', 1, 2);
	var aActorReddot1 = getActor(false, 134.5, 129, 'reddot', 'red_dot', 1, 2);
	var aActorReddot2 = getActor(false, 208.5, 129, 'reddot', 'red_dot', 1, 2);
	var aActorReddot3 = getActor(false, 282.5, 129, 'reddot', 'red_dot', 1, 2);
	var aActorReddot4 = getActor(false, 356.5, 129, 'reddot', 'red_dot', 1, 2);
	var aActorReddot5 = getActor(false, 430.5, 129, 'reddot', 'red_dot', 1, 2);
	var aActorReddot6 = getActor(false, 504.5, 129, 'reddot', 'red_dot', 1, 2);
	var aActorReddot7 = getActor(false, 578.5, 129, 'reddot', 'red_dot', 1, 2);

	aAtoms.push(aActorReddot);
	aAtoms.push(aActorReddot1);
	aAtoms.push(aActorReddot2);
	aAtoms.push(aActorReddot3);
	aAtoms.push(aActorReddot4);
	aAtoms.push(aActorReddot5);
	aAtoms.push(aActorReddot6);
	aAtoms.push(aActorReddot7);

	desktop.addChild(aActorReddot);
	desktop.addChild(aActorReddot1);
	desktop.addChild(aActorReddot2);
	desktop.addChild(aActorReddot3);
	desktop.addChild(aActorReddot4);
	desktop.addChild(aActorReddot5);
	desktop.addChild(aActorReddot6);
	desktop.addChild(aActorReddot7);

	//line 4
	var aActorReddotF1 = getActor(false, 53, 283, 'reddot', 'red_dot', 1, 2);
	var aActorReddotF2 = getActor(false, 127, 283, 'reddot', 'red_dot', 1, 2);
	var aActorReddotF3 = getActor(false, 201, 283, 'reddot', 'red_dot', 1, 2);
	var aActorReddotF4 = getActor(false, 274, 283, 'reddot', 'red_dot', 1, 2);
	var aActorReddotF5 = getActor(false, 348, 283, 'reddot', 'red_dot', 1, 2);
	var aActorReddotF6 = getActor(false, 422, 283, 'reddot', 'red_dot', 1, 2);
	var aActorReddotF7 = getActor(false, 496, 283, 'reddot', 'red_dot', 1, 2);
	var aActorReddotF8 = getActor(false, 569, 283, 'reddot', 'red_dot', 1, 2);

	aAtoms.push(aActorReddotF1);
	aAtoms.push(aActorReddotF2);
	aAtoms.push(aActorReddotF3);
	aAtoms.push(aActorReddotF4);
	aAtoms.push(aActorReddotF5);
	aAtoms.push(aActorReddotF6);
	aAtoms.push(aActorReddotF7);
	aAtoms.push(aActorReddotF8);

	desktop.addChild(aActorReddotF1);
	desktop.addChild(aActorReddotF2);
	desktop.addChild(aActorReddotF3);
	desktop.addChild(aActorReddotF4);
	desktop.addChild(aActorReddotF5);
	desktop.addChild(aActorReddotF6);
	desktop.addChild(aActorReddotF7);
	desktop.addChild(aActorReddotF8);

	//Main Elements
	desktop.addChild(aActorReset);
	desktop.addChild(aActorGo);
	desktop.addChild(aActorCheck);
	desktop.addChild(aLabelAtom);
	desktop.addChild(aLabelYears);
	desktop.addChild(aActorPause);
	desktop.addChild(aActorRadio1);
	desktop.addChild(aActorRadio2);
	desktop.addChild(aActorRadio3);
	desktop.addChild(aActorRadio4);
	desktop.addChild(banner);
	scene.addChild(desktop, 'desktop');

 }
