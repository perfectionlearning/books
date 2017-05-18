(function () {
    game.oneNInPx = (28 / 100); //100N  = 28px
    game.beamAngle = 0;

    game.angle1 = 0.0;
    game.normalForce1 = 28;

    game.angle2 = 0.0;
    game.normalForce2 = 28;

    game.angle3 = 0.0;
    game.normalForce3 = 28;

    game.angle4 = 0.0;
    game.normalForce4 = 28;

    game.angle5 = 0.0;
    game.normalForce5 = 28;

    game.angle6 = 0.0;
    game.normalForce6 = 28;
	
	game.kArray = [];
	game.vH=0;
	game.vV=0;
	game.sH=0;
	game.sV=0;
	game.cw=1;
	
	game.forceRadial1=0;
	game.forceRadial2=0;
	game.forceRadial3=0;
	game.forceRadial4=0;
	game.forceRadial5=0;
	game.forceRadial6=0;
	game._timerInstance = null;
    game.anch_value = 20;

    game.Farr_BlueColor = '#0101ed';
    game.Farr_PinkColor = '#9933cc';

    game.Searr_BlueColor = '#0101ed';
    game.Searr_PinkColor = '#9933cc';

    game.Tharr_BlueColor = '#0101ed';
    game.Tharr_PinkColor = '#9933cc';

    game.Foarr_BlueColor = '#0101ed';
    game.Foarr_PinkColor = '#9933cc';

    game.Fiarr_BlueColor = '#0101ed';
    game.Fiarr_PinkColor = '#9933cc';

    game.Siarr_BlueColor = '#0101ed';
    game.Siarr_PinkColor = '#9933cc';

    var handleIncDecVal = 0;
    game.userDragging = false;
    game.up_ang = false;
	game.isPause = false;
    var isGoing = false;

    game.rodUP = false;
    game.rodDOWN = false;
	
    var increment = false;
    game.s = false;
	game.eachGridInPx = 150;
	game.eachGridInPx_Init = 150;
	game.rodLength = 1.75;
	game.rodLengthStep = 0.01;
	game.rodLengthMin = 0.10;
	game.rodLengthMax = 9.99;
	game.rodLengthInPx = 300;
	game.ForceVectorArr = [];
	var isBannerDisplay = false;
	
	//Implemented by mathi
    var forceToVelocity = 15;
    game.hVelocity1 = 0;
    game.vVelocity1 = 0;
    game.hVelocity2 = 0;
    game.vVelocity2 = 0;
    game.hVelocity3 = 0;
    game.vVelocity3 = 0; 
    game.hVelocity4 = 0;
    game.vVelocity4 = 0;
    game.hVelocity5 = 0;
    game.vVelocity5 = 0;
    game.hVelocity6 = 0;
    game.vVelocity6 = 0;
	
	game.checkZero1=false;
	game.checkZero2=false;
	game.checkZero3=false;
	game.checkZero4=false;
	game.checkZero5=false;
	game.checkZero6=false;
	
   	game.isRunning1 = false;
	game.GameStatus = false;	
    game.goBtnMDownHandler = function () {
		if(!game.isRunning){
			if ((game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX)) {			
				//store the at last position of the force
				if(!game.isPause){
					game.obj0CX = game.actorContainer[0].x;
					game.obj0CY = game.actorContainer[0].y;			
				}
				if(game.actorContainer[0].x<game.pivotImg.x){
					game.kArray[0]=-1;
				}else{
					game.kArray[0]=1;
				}
				game.fir_lineang(game.actorContainer[0], game.actorContainer1[0]);
				game.s = true;
			}
			if ((game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX)) {
				if(!game.isPause){
					game.obj1CX = game.actorContainer[1].x;
					game.obj1CY = game.actorContainer[1].y;
				}
				if(game.actorContainer[1].x<game.pivotImg.x){
					game.kArray[1]=-1;
				}else{
					game.kArray[1]=1;
				}
				game.fir_lineang(game.actorContainer[1], game.actorContainer1[1]);			
				game.s = true;
			}
			if ((game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX)) {
				if(!game.isPause){
					game.obj2CX = game.actorContainer[2].x;
					game.obj2CY = game.actorContainer[2].y;
				}
				if(game.actorContainer[2].x<game.pivotImg.x){
					game.kArray[2]=-1;
				}else{
					game.kArray[2]=1;
				}
				game.fir_lineang(game.actorContainer[2], game.actorContainer1[2]);
				game.s = true;
			}
			if ((game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX)) {
				if(!game.isPause){
					game.obj3CX = game.actorContainer[3].x;
					game.obj3CY = game.actorContainer[3].y;
				}
				if(game.actorContainer[3].x<game.pivotImg.x){
					game.kArray[3]=-1;
				}else{
					game.kArray[3]=1;
				}
				game.fir_lineang(game.actorContainer[3], game.actorContainer1[3]);
				game.s = true;
		   }
			if ((game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX)) {
				if(!game.isPause){
					game.obj4CX = game.actorContainer[4].x;
					game.obj4CY = game.actorContainer[4].y;
				}
				if(game.actorContainer[4].x<game.pivotImg.x){
					game.kArray[4]=-1;
				}else{
					game.kArray[4]=1;
				}
				game.fir_lineang(game.actorContainer[4], game.actorContainer1[4]);
				game.s = true;
			}
			if ((game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX)) {
				if(!game.isPause){
					game.obj5CX = game.actorContainer[5].x;
					game.obj5CY = game.actorContainer[5].y;
				}
				if(game.actorContainer[5].x<game.pivotImg.x){
					game.kArray[5]=-1;
				}else{
					game.kArray[5]=1;
				}
				game.fir_lineang(game.actorContainer[5], game.actorContainer1[5]);
				game.s = true;
			}        
			if(game.ForceVectorArr.length > 0 && !game.isRunning){				
				if(!isBannerDisplay){
					game.__bannerDisplay(0, 0, -70, 0, true);
					isBannerDisplay = true;
				}
				game.isRunning = true;
				//visible false of the axis text actor
				game.Axis_actor.visible = false;
				//visible false of the draggable axis container
				game.axisContainer[0].visible = false;
				game.createTimerUpdate();							
			}	 
		}		
    }

    game.resetBtnMDownHandler = function () {
		for(var i=0;i<6;i++){
			if(game.isAdded('act_'+i)){
				game.actorContainer1[i].enableEvents(true);
			}else{
				game.actorContainer1[i].enableEvents(false);
			}			
		}
		game.__bannerDisplay(0, 0, -70, 0, false);
		//visible false in degree
		game.oDashTxtArr[3].visible = true;
		//display rod angle 				
		game.oDashTxtArr[2].setText('0.00');
		game.vH=0;
		game.vV=0;
		game.sH=0;
		game.sV=0;
		game.cw=1;
		
	    game.hVelocity1 = 0;
		game.vVelocity1 = 0;
		
		game.hVelocity2 = 0;
		game.vVelocity2 = 0;
		
		game.hVelocity3 = 0;
		game.vVelocity3 = 0; 
		
		game.hVelocity4 = 0;
		game.vVelocity4 = 0;
		
		game.hVelocity5 = 0;
		game.vVelocity5 = 0;
		
		game.hVelocity6 = 0;
		game.vVelocity6 = 0;
		
		game.isRunning1 = false;
		game.isPause = false;
		
		
		game.checkZero1=false;
		game.checkZero2=false;
		game.checkZero3=false;
		game.checkZero4=false;
		game.checkZero5=false;
		game.checkZero6=false;
		
		//reset the all force vector to the original position
		//ie, before clicking the go button
		game.isRunning = false;			
		if(game.isAdded('act_0')){
			game.actorContainer[0].x = game.obj0CX;
			game.actorContainer[0].y = game.obj0CY;
			game.onObjMove(game.actorContainer[0]);
		}
		if(game.isAdded('act_1')){
			game.actorContainer[1].x = game.obj1CX;
			game.actorContainer[1].y = game.obj1CY;
			game.onObjMove(game.actorContainer[1]);
		}
		if(game.isAdded('act_2')){
			game.actorContainer[2].x = game.obj2CX;
			game.actorContainer[2].y = game.obj2CY;
			game.onObjMove(game.actorContainer[2]);
		}
		if(game.isAdded('act_3')){
			game.actorContainer[3].x = game.obj3CX;
			game.actorContainer[3].y = game.obj3CY;
			game.onObjMove(game.actorContainer[3]);
		}
		if(game.isAdded('act_4')){
			game.actorContainer[4].x = game.obj4CX;
			game.actorContainer[4].y = game.obj4CY;
			game.onObjMove(game.actorContainer[4]);
		}
		if(game.isAdded('act_5')){
			game.actorContainer[5].x = game.obj5CX;
			game.actorContainer[5].y = game.obj5CY;
			game.onObjMove(game.actorContainer[5]);
		}
		game.beamAngle = 0;
		
		//reset pivot image location		
		game.pivotImg
			.setLocation(game.axisContainer[0].x , game.axisContainer[0].y);	
		game.mainPanel.removeChild(game.graph_line);
		game.__graphContainerLine();
				
		//reset K array
		game.kArray = [];	
		game.s = false;			
		//cancel the timer
		if(game._timerInstance != null){
			game._timerInstance.cancel();
		}
		if(game.incDecTimer != null){
			 game.incDecTimer.cancel();
		}
		//visible true of the axis text actor
		game.Axis_actor.visible = true;
		//visible true of the draggable axis container
		game.axisContainer[0].visible = true;
		isBannerDisplay = false;
    }

    game.pauseBtnMDownHandler = function () {
		if(game._timerInstance != null){
        	game._timerInstance.cancel();
		}
		game.isRunning = false;
		game.isRunning1 = false;
		game.isPause = true;
    }

    game.incDecMDown = function (mouseEvent) {
        handleIncDec(mouseEvent);
    }

    game.incDecMUp = function (mouseEvent) {
        game.incDecTimer.cancel();
    }

	game.graphScale = function() {
		game.rodLength = Math.round(game.rodLength * 100) / 100;
		if(game.rodLength < 0.2) {
			game.majorScale = 0.05;	
		} else if(game.rodLength < 0.4) {
			game.majorScale = 0.1;
		} else if(game.rodLength < 0.61) {
			game.majorScale = 0.15;
		} else if(game.rodLength < 0.76) {
			game.majorScale = 0.25;
		} else if(game.rodLength < 2) {
			game.majorScale = 0.5;
		} else if(game.rodLength < 4) {
			game.majorScale = 1;
		} else if(game.rodLength < 6) {
			game.majorScale = 2;
		} else if(game.rodLength < 8) {
			game.majorScale = 3;
		} else if(game.rodLength < 10) {
			game.majorScale = 4;
		}
		game.graphScaleFactor.setText('Scale = '+parseFloat(game.majorScale).toFixed(2)+' m');			
		game.rodLengthInPx = game.graph_line_end_x - game.graph_line_x;
		game.eachGridInPx = game.rodLengthInPx / (game.rodLength / game.majorScale);
		
		var totalNumOfGrids_x = Math.ceil(game._director.width / game.eachGridInPx);
		var numOfGridsBeforeGraphLine_x = Math.ceil(game.graph_line_x / game.eachGridInPx);
		var graphGridXStart =  game.graph_line_x - (numOfGridsBeforeGraphLine_x * game.eachGridInPx);

		var totalNumOfGrids_y = Math.ceil(game._director.height / game.eachGridInPx);
		var numOfGridsBeforeGraphLine_y = Math.ceil(game.graph_line_y / game.eachGridInPx);
		var graphGridYStart =  game.graph_line_y - (numOfGridsBeforeGraphLine_y * game.eachGridInPx);
				
		game.oDashTxtArr[8].setText(parseFloat(game.rodLength).toFixed(2));
		game.graph_actor.paint = function(director, time){	
			var canvas = director.ctx;
			canvas.beginPath();
			canvas.lineWidth = 1;
			//canvas.strokeStyle = '#f0f0f0';
			canvas.strokeStyle = '#FFF';
			for(var i=graphGridYStart;i<(totalNumOfGrids_y*game.eachGridInPx); i+=game.eachGridInPx){
				//horizontal
				canvas.moveTo(0, i);
				canvas.lineTo(game._director.width, i);			
			}	
			for(var j=graphGridXStart;j<(totalNumOfGrids_x*game.eachGridInPx); j+=game.eachGridInPx){
				//vertical
				canvas.moveTo(j, 0);
				canvas.lineTo(j, game._director.height);			
			}	
			canvas.stroke();
			canvas.closePath();
		}	
	}
	function handleIncDec(mouseEvent) {
		//tick(mouseEvent);
		if(game.incDecTimer != null){
			 game.incDecTimer.cancel();
		}
        game.incDecTimer = game._scene.createTimer(
            0,
            Number.MAX_VALUE,
        	function (scene_time, timer_time, timertask_instance) {}, // timeout
        	function (scene_time, timer_time, timertask_instance) { // tick
				handleIncDecVal++;
				if (handleIncDecVal % 5 == 0) {
					tick(mouseEvent);
					handleIncDecVal = 0;
				}
        	}, 
			function (scene_time, timer_time, timertask_instance) {}
		)
    }
    function tick(mouseEvent) {
        if (mouseEvent.source.id == 'rodlengthInc') {
			if((game.rodLength + game.rodLengthStep) <= game.rodLengthMax){
				game.rodLength = parseFloat(game.rodLength) + parseFloat(game.rodLengthStep);
			}
			//adjust the scale factoring
			game.graphScale();
			//calculate position the pivot, rod lenth, added force
			game.calcSysPosition();
        }

        if (mouseEvent.source.id == 'rodlengthDec') {
			if((game.rodLength - game.rodLengthStep) >= game.rodLengthMin){
				game.rodLength = parseFloat(game.rodLength) - parseFloat(game.rodLengthStep);
			}
			//adjust the scale factoring
			game.graphScale();
			//calculate position the pivot, rod lenth, added force
			game.calcSysPosition();
        }

        if (mouseEvent.source.id == 'forceInc') {
            //======================================================================================================
            //For Incrementing First Line FORCE When it is in the CENTER LINE:
            //=======================================================================================================
            if ((game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX) && (game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.normalForce1++;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce1/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[0]);
            }
            //====================================================================================================
            //For Incrementing Second Line FORCE When it is in the CENTER LINE:
            //=====================================================================================================
            if ((game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX) && (!game.drag_firstObj) && (game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.normalForce2++;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce2/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[1]);
            }
            //================================================================================================
            //For Incrementing Third Line FORCE When it is in the CENTER LINE:
            //=================================================================================================
            if ((game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.normalForce3++;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce3/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[2]);
            }
            //==================================================================================================
            //For Incrementing Fourth Line FORCE When it is in the CENTER LINE:
            //===================================================================================================
            if ((game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX)
            //&& (game.actorContainer[3].x > 218.5 && game.actorContainer[3].x < 525)
            && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.normalForce4++;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce4/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[3]);
            }
            //====================================================================================================
            //For Incrementing Fifth Line FORCE When it is in the CENTER LINE:
            //=====================================================================================================
            if ((game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX)
            //&& (game.actorContainer[4].x > 218.5 && game.actorContainer[4].x < 525)
            && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.normalForce5++;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce5/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[4]);
            }
            //====================================================================================================
            //For Incrementing Sixth Line FORCE When it is in the CENTER LINE:
            //===================================================================================================
            if ((game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX)
            //&& (game.actorContainer[5].x > 218.5 && game.actorContainer[5].x < 525)
            && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.normalForce6++;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce6/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[5]);
            }
        }
        if (mouseEvent.source.id == 'forceDec') {
            //======================================================================================================
            //For Decrementing First Line FORCE When it is in the CENTER LINE:
            //=====================================================================================================
            if ((game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX) && (game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                if (game.normalForce1 > 0)
                    game.normalForce1--;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce1/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[0]);
            }
            //====================================================================================================
            //For Decrementing Second Line FORCE When it is in the CENTER LINE:
            //=====================================================================================================
            if ((game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX) && (!game.drag_firstObj) && (game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                if (game.normalForce2 > 0)
                    game.normalForce2--;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce2/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[1]);
            }
            //========================================================================================================
            //For Decrementing Third Line FORCE When it is in the CENTER LINE:
            //=======================================================================================================
            if ((game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                if (game.normalForce3 > 0)
                    game.normalForce3--;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce3/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[2]);
            }
            //========================================================================================================
            //For Decrementing Fourth Line FORCE When it is in the CENTER LINE:
            //=======================================================================================================
            if ((game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                if (game.normalForce4 > 0)
                    game.normalForce4--;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce4/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[3]);
            }
            //========================================================================================================
            //For Decrementing Fifth Line FORCE When it is in the CENTER LINE:
            //=======================================================================================================
            if ((game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {

                if (game.normalForce5 > 0)
                    game.normalForce5--;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce5/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[4]);
            }
            //========================================================================================================
            //For Decrementing Sixth Line FORCE When it is in the CENTER LINE:
            //=======================================================================================================
            if ((game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
                if (game.normalForce6 > 0)
                    game.normalForce6--;
                //To Display Force
                //game.oDashTxtArr[12].setText((game.normalForce6/game.oneNInPx).toFixed(0));
                game.onObjMove(game.actorContainer[5]);
            }
        }

        if (mouseEvent.source.id == 'angleInc') {
            //========================================================================================================
            //For Incrementing First Line ANGLE When it is in the CENTER LINE:
            //=========================================================================================================
            if ((game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX) && (game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle1--;
                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round((game.angle1)).toFixed(1));
                game.onObjMove(game.actorContainer[0]);
                game.Update();
            }
            //========================================================================================================
            //For Incrementing Second Line ANGLE When it is in the CENTER LINE:
            //=========================================================================================================
            if ((game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX) && (!game.drag_firstObj) && (game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle2--;
                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round((game.angle2)).toFixed(1));
                game.onObjMove(game.actorContainer[1]);
                game.Update();
            }
            //========================================================================================================
            //For Incrementing Third Line ANGLE When it is in the CENTER LINE:
            //=========================================================================================================
            if ((game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle3--;
                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle3).toFixed(1));
                game.onObjMove(game.actorContainer[2]);
                game.Update();
            }
            //========================================================================================================
            //For Incrementing Fourth Line ANGLE When it is in the CENTER LINE:
            //=========================================================================================================
            if ((game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle4--;
                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle4).toFixed(1));
                game.onObjMove(game.actorContainer[3]);
                game.Update();
            }
            //========================================================================================================
            //For Incrementing Fifth Line ANGLE When it is in the CENTER LINE:
            //=========================================================================================================
            if ((game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle5--;
                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle5).toFixed(1));
                game.onObjMove(game.actorContainer[4]);
                game.Update();
            }
            //========================================================================================================
            //For Incrementing Sixth Line ANGLE When it is in the CENTER LINE:
            //=========================================================================================================
            if ((game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle6--;
                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle6).toFixed(1));
                game.onObjMove(game.actorContainer[5]);
                game.Update();
            }
        }

        if (mouseEvent.source.id == 'angleDec') {
            //===========================================================================================================
            //For Decrementing First Line ANGLE When it is in the CENTER LINE:
            //===========================================================================================================
            if ((game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX) && (game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle1++;

                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle1).toFixed(1));
                game.onObjMove(game.actorContainer[0]);
                game.Update();
            }
            //===========================================================================================================
            //For Decrementing Second Line ANGLE When it is in the CENTER LINE:
            //===========================================================================================================
            if ((game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX) && (!game.drag_firstObj) && (game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle2++;

                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle2).toFixed(1) );
                game.onObjMove(game.actorContainer[1]);
                game.Update();
            }
            //===========================================================================================================
            //For Decrementing Third Line ANGLE When it is in the CENTER LINE:
            //===========================================================================================================
            if ((game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle3++;

                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle3).toFixed(1));
                game.onObjMove(game.actorContainer[2]);
                game.Update();
            }
            //===========================================================================================================
            //For Decrementing Fourth Line ANGLE When it is in the CENTER LINE:
            //===========================================================================================================
            if ((game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle4++;

                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle4).toFixed(1));
                game.onObjMove(game.actorContainer[3]);
                game.Update();
            }
            //===========================================================================================================
            //For Decrementing Fifth Line ANGLE When it is in the CENTER LINE:
            //===========================================================================================================
            if ((game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle5++;

                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle5).toFixed(1));
                game.onObjMove(game.actorContainer[4]);
                game.Update();
            }
            //===========================================================================================================
            //For Decrementing Sixth Line ANGLE When it is in the CENTER LINE:
            //===========================================================================================================
            if ((game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.angle6++;

                //To Display Angle:
                //game.oDashTxtArr[15].setText(Math.round(game.angle6).toFixed(1));
                game.onObjMove(game.actorContainer[5]);
                game.Update();
            }
        }
        if (mouseEvent.source.id == 'disaxisInc' && !game.isRunning) {
            //======================================================================================================
            //For Incrementing First Line Axis When it is in the CENTER LINE:
            //=======================================================================================================
            if (game.drag_firstObj && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
				var obj = game.actorContainer[0];					
				if(((obj.x+obj.width/2) > game.graph_line_x) && ((obj.x+obj.width/2) < game.graph_line_end_x)){							
                    if (game.actorContainer[0].x > game.pivotImg.x) {						   
					   game.actorContainer[0].x++;
                    } else {						
					   game.actorContainer[0].x--;
                    }
                    game.onObjMove(game.actorContainer[0]);
					game.act_0_InMt = (game.actorContainer[0].x - 225) * (game.rodLength/300);
                } else {					
                    game.actorContainer[0].x = 530;
                    game.actorContainer[0].y = 542;
                    game.angle1 = 0;
                    game.normalForce1 = 28;
                    game.midPoint1.setLocation(game.actorContainer[0].x, game.actorContainer[0].y + 1);
                    game.onObjMove(game.actorContainer[0]);
                    game.retext_values();
                }
				if(obj.x == 530 || obj.y == 542){					
				}else{
					game.first_arrow();
				}
            }
            //======================================================================================================
            //For Incrementing Second Line Axis When it is in the CENTER LINE:
            //=======================================================================================================
            if (game.drag_secondObj && (!game.drag_firstObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                //if ((game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX) && (game.actorContainer[1].x > game.lineEndX && game.actorContainer[1].x < game.upArrowEndX)) {
				var obj = game.actorContainer[1];					
				if(((obj.x+obj.width/2) > game.graph_line_x) && ((obj.x+obj.width/2) < game.graph_line_end_x)){
                    if (game.actorContainer[1].x > game.pivotImg.x) {                     
					   game.actorContainer[1].x++;
                    } else {
                     
					  game.actorContainer[1].x--;
                    }                  
                    game.onObjMove(game.actorContainer[1]);
					game.act_1_InMt = (game.actorContainer[1].x - 225) * (game.rodLength/300);
                } else {
                    game.actorContainer[1].x = 530;
                    game.actorContainer[1].y = 562;
                    game.angle2 = 0;
                    game.normalForce2 = 28;
                    game.midPoint2.setLocation(game.actorContainer[1].x, game.actorContainer[1].y + 1);
                    game.onObjMove(game.actorContainer[1]);
                    game.retext_values();
                }
				if(obj.x == 530 || obj.y == 562){					
				}else{
					game.second_arrow();
				}
            }
            //======================================================================================================
            //For Incrementing Third Line Axis When it is in the CENTER LINE:
            //=======================================================================================================
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                //if ((game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX) && (game.actorContainer[2].x > game.lineEndX && game.actorContainer[2].x < game.upArrowEndX)) {
				var obj = game.actorContainer[2];					
				if(((obj.x+obj.width/2) > game.graph_line_x) && ((obj.x+obj.width/2) < game.graph_line_end_x)){
                    if (game.actorContainer[2].x > game.pivotImg.x) {
                        game.actorContainer[2].x++;
                    } else {
                        game.actorContainer[2].x--;
                    }
                    game.onObjMove(game.actorContainer[2]);
					game.act_2_InMt = (game.actorContainer[2].x - 225) * (game.rodLength/300);
                } else {
                    game.actorContainer[2].x = 530;
                    game.actorContainer[2].y = 582;
                    game.angle3 = 0;
                    game.normalForce3 = 28;
                    game.midPoint3.setLocation(game.actorContainer[2].x, game.actorContainer[2].y + 1);
                    game.onObjMove(game.actorContainer[2]);
                    game.retext_values();
                }
				if(obj.x == 530 || obj.y == 582){					
				}else{
					game.third_arrow();
				}
            }
            //======================================================================================================
            //For Incrementing Fourth Line Axis When it is in the CENTER LINE:
            //=======================================================================================================
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                //if ((game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX) && (game.actorContainer[3].x > game.lineEndX && game.actorContainer[3].x < game.upArrowEndX)) {
				var obj = game.actorContainer[3];					
				if(((obj.x+obj.width/2) > game.graph_line_x) && ((obj.x+obj.width/2) < game.graph_line_end_x)){
                    if (game.actorContainer[3].x > game.pivotImg.x) {
                        game.actorContainer[3].x++;
                    } else {
                        game.actorContainer[3].x--;
                    }
                    game.onObjMove(game.actorContainer[3]);
					game.act_3_InMt = (game.actorContainer[3].x - 225) * (game.rodLength/300);
                } else {
                    game.actorContainer[3].x = 582;
                    game.actorContainer[3].y = 542;
                    game.angle4 = 0;
                    game.normalForce4 = 28;
                    game.midPoint4.setLocation(game.actorContainer[3].x, game.actorContainer[3].y + 1);
                    game.onObjMove(game.actorContainer[3]);
                    game.retext_values();
                }
				if(obj.x == 582 || obj.y == 542){					
				}else{
					game.fourth_arrow();
				}
            }
            //======================================================================================================
            //For Incrementing Fifth Line Axis When it is in the CENTER LINE:
            //=======================================================================================================
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                //if ((game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX) && (game.actorContainer[4].x > game.lineEndX && game.actorContainer[4].x < game.upArrowEndX)) {
				var obj = game.actorContainer[4];					
				if(((obj.x+obj.width/2) > game.graph_line_x) && ((obj.x+obj.width/2) < game.graph_line_end_x)){
                    if (game.actorContainer[4].x > game.pivotImg.x) {
                        game.actorContainer[4].x++;
                    } else {
                        game.actorContainer[4].x--;
                    }
                    game.onObjMove(game.actorContainer[4]);
					game.act_4_InMt = (game.actorContainer[4].x - 225) * (game.rodLength/300);
                } else {
                    game.actorContainer[4].x = 582;
                    game.actorContainer[4].y = 562;
                    game.angle5 = 0;
                    game.normalForce5 = 28;
                    game.midPoint5.setLocation(game.actorContainer[4].x, game.actorContainer[4].y + 1);
                    game.onObjMove(game.actorContainer[4]);
                    game.retext_values();
                }
				if(obj.x == 582 || obj.y == 562){					
				}else{
					game.fifth_arrow();
				}
            }
            //======================================================================================================
            //For Incrementing Sixth Line Axis When it is in the CENTER LINE:
            //=======================================================================================================
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
                //if ((game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX) && (game.actorContainer[5].x > game.lineEndX && game.actorContainer[5].x < game.upArrowEndX)) {
				var obj = game.actorContainer[5];					
				if(((obj.x+obj.width/2) > game.graph_line_x) && ((obj.x+obj.width/2) < game.graph_line_end_x)){
                    if (game.actorContainer[5].x > game.pivotImg.x) {
                        game.actorContainer[5].x++;
                    } else {
                        game.actorContainer[5].x--;
                    }
                    game.onObjMove(game.actorContainer[5]);
					game.act_5_InMt = (game.actorContainer[5].x - 225) * (game.rodLength/300);
                } else {
                    game.actorContainer[5].x = 582;
                    game.actorContainer[5].y = 582;
                    game.angle6 = 0;
                    game.normalForce6 = 28;
                    game.midPoint6.setLocation(game.actorContainer[5].x, game.actorContainer[5].y + 1);
                    game.onObjMove(game.actorContainer[5]);
                    game.retext_values();
                }
				if(obj.x == 582 || obj.y == 582){					
				}else{
					game.sixth_arrow();
				}
            }
        }
        //----------------------------Distance Decrement Function-----------------------------------------------------------		
        if (mouseEvent.source.id == 'disaxisDec' && !game.isRunning) {
            //========================================================================================================
            //For Decrementing First Line Axis When it is in the CENTER LINE:
            //=========================================================================================================
            if (game.drag_firstObj && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {				
                if ((game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX) && (game.actorContainer[0].x > game.lineEndX && game.actorContainer[0].x < game.lineEndY)) {					
                    if (game.actorContainer[0].x > game.pivotImg.x + 3) {						
                        game.actorContainer[0].x--;
                    } else if (game.actorContainer[0].x < game.pivotImg.x + 3) {						
                        game.actorContainer[0].x++;
                    }
					game.act_0_InMt = (game.actorContainer[0].x - 225) * (game.rodLength/300);
                    game.onObjMove(game.actorContainer[0]);
                } else {					
                    game.actorContainer[0].x = 530;
                    game.actorContainer[0].y = 542;
                    game.angle1 = 0;
                    game.normalForce1 = 28;
                    game.midPoint1.setLocation(game.actorContainer[0].x, game.actorContainer[0].y + 1);
                    game.onObjMove(game.actorContainer[0]);
                    game.retext_values();
                }
            }
            //========================================================================================================
            //For Decrementing Second Line Axis When it is in the CENTER LINE:
            //=========================================================================================================
            if (game.drag_secondObj && (!game.drag_firstObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                if ((game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX) && (game.actorContainer[1].x > game.lineEndX && game.actorContainer[1].x < game.lineEndY)) {
                    if (game.actorContainer[1].x > game.pivotImg.x + 3) {
                        game.actorContainer[1].x--;
                    } else if (game.actorContainer[1].x < game.pivotImg.x + 3) {
                        game.actorContainer[1].x++;
                    }
					game.act_1_InMt = (game.actorContainer[1].x - 225) * (game.rodLength/300);
                    game.onObjMove(game.actorContainer[1]);
                } else {
                    game.actorContainer[1].x = 530;
                    game.actorContainer[1].y = 562;
                    game.angle2 = 0;
                    game.normalForce2 = 28;
                    game.midPoint2.setLocation(game.actorContainer[1].x, game.actorContainer[1].y + 1);
                    game.onObjMove(game.actorContainer[1]);
                    game.retext_values();
                }
            }
            //========================================================================================================
            //For Decrementing Third Line Axis When it is in the CENTER LINE:
            //=========================================================================================================
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                if ((game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX) && (game.actorContainer[2].x > game.lineEndX && game.actorContainer[2].x < game.lineEndY)) {
                    if (game.actorContainer[2].x > game.pivotImg.x + 3) {
                        game.actorContainer[2].x--;
                    } else if (game.actorContainer[0].x < game.pivotImg.x + 3) {
                        game.actorContainer[2].x++;
                    }
					game.act_2_InMt = (game.actorContainer[2].x - 225) * (game.rodLength/300);
                    game.onObjMove(game.actorContainer[2]);
                } else {
                    game.actorContainer[2].x = 530;
                    game.actorContainer[2].y = 582;
                    game.angle3 = 0;
                    game.normalForce3 = 28;
                    game.midPoint3.setLocation(game.actorContainer[2].x, game.actorContainer[2].y + 1);
                    game.onObjMove(game.actorContainer[2]);
                    game.retext_values();
                }
            }
            //========================================================================================================
            //For Decrementing Fourth Line Axis When it is in the CENTER LINE:
            //=========================================================================================================
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                if ((game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX) && (game.actorContainer[3].x > game.lineEndX && game.actorContainer[3].x < game.lineEndY)) {
                    if (game.actorContainer[3].x > game.pivotImg.x + 3) {
                        game.actorContainer[3].x--;
                    } else if (game.actorContainer[3].x < game.pivotImg.x + 3) {
                        game.actorContainer[3].x++;
                    }
					game.act_3_InMt = (game.actorContainer[3].x - 225) * (game.rodLength/300);
                    game.onObjMove(game.actorContainer[3]);
                } else {
                    game.actorContainer[3].x = 582;
                    game.actorContainer[3].y = 542;
                    game.angle4 = 0;
                    game.normalForce4 = 28;
                    game.midPoint4.setLocation(game.actorContainer[3].x, game.actorContainer[3].y + 1);
                    game.onObjMove(game.actorContainer[3]);
                    game.retext_values();
                }
            }
            //========================================================================================================
            //For Decrementing Fifth Line Axis When it is in the CENTER LINE:
            //=========================================================================================================
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                if ((game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX) && (game.actorContainer[4].x > game.lineEndX && game.actorContainer[4].x < game.lineEndY)) {
                    if (game.actorContainer[4].x > game.pivotImg.x + 3) {
                        game.actorContainer[4].x--;
                    } else if (game.actorContainer[4].x < game.pivotImg.x + 3) {
                        game.actorContainer[4].x++;
                    }
					game.act_4_InMt = (game.actorContainer[4].x - 225) * (game.rodLength/300);
                    game.onObjMove(game.actorContainer[4]);
                } else {
                    game.actorContainer[4].x = 582;
                    game.actorContainer[4].y = 562;
                    game.angle5 = 0;
                    game.normalForce5 = 28;
                    game.midPoint5.setLocation(game.actorContainer[4].x, game.actorContainer[4].y + 1);
                    game.onObjMove(game.actorContainer[4]);
                    game.retext_values();
                }
            }
            //========================================================================================================
            //For Decrementing Sixth Line Axis When it is in the CENTER LINE:
            //=========================================================================================================
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
                if ((game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX) && (game.actorContainer[5].x > game.lineEndX && game.actorContainer[5].x < game.lineEndY)) {
                    if (game.actorContainer[5].x > game.pivotImg.x + 3) {
                        game.actorContainer[5].x--;
                    } else if (game.actorContainer[5].x < game.pivotImg.x + 3) {
                        game.actorContainer[5].x++;
                    }
					game.act_5_InMt = (game.actorContainer[5].x - 225) * (game.rodLength/300);
                    game.onObjMove(game.actorContainer[5]);
                } else {
                    game.actorContainer[5].x = 582;
                    game.actorContainer[5].y = 582;
                    game.angle6 = 0;
                    game.normalForce6 = 28;
                    game.midPoint6.setLocation(game.actorContainer[5].x, game.actorContainer[5].y + 1);
                    game.onObjMove(game.actorContainer[5]);
                    game.retext_values();
                }
            }
        }
    }
	//If incrementing/decrementing the rod length value
	//Calaculate system position i.e force vectors, pivot, line
	game.calcSysPosition = function(){		
		var axisPosInPx  = game.axisPosInMt * (game.rodLengthInPx/game.rodLength);		
        axisPosInPx = 222 + axisPosInPx;
        game.pivotImg.x = axisPosInPx;
        game.axisContainer[0].x = axisPosInPx;
		 
		if(game.axisContainer[0].x >= 522){
			game.axisContainer[0].x = 522;
			game.pivotImg.x = game.axisContainer[0].x;
			game.axisPos = (game.pivotImg.x - 222);
            game.axisPosInMt = game.axisPos * (game.rodLength/300);
			game.oDashTxtArr[5].setText(parseFloat(game.axisPosInMt).toFixed(2)); 
		}
		//movement of axis text
		game.Axis_actor
			.setLocation(game.pivotImg.x - 5, game.pivotImg.y + 25);
					
		if(game.isAdded("act_0")){			
			var act_0InPx = game.act_0_InMt * (game.rodLengthInPx/game.rodLength);
			act_0InPx = 225 + act_0InPx;
			game.actorContainer[0].x = act_0InPx;
			//store the current actor container value at every 
			//increment and decrement tick			
			game.obj0CX = game.actorContainer[0].x;
			game.obj0CY = game.actorContainer[0].y;				
			game.onObjMove(game.actorContainer[0]);
						
			if(game.actorContainer[0].x >= 525 ){
				game.actorContainer[0].x = 530;
				game.actorContainer[0].y = 542;
				game.angle1=0;
				game.normalForce1 = 28;
				game.midPoint1.setLocation(game.actorContainer[0].x,game.actorContainer[0].y + 1);
				game.onObjMove(game.actorContainer[0]);
				game.retext_values();
				if(game.ForceVectorArr.indexOf('act_0') != -1){
					game.hVelocity1 = 0;
					game.vVelocity1 = 0;
					if(game.isRunning1){
						game.isRunning1 = false;
					}
					game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_0'), 1);
				}
				//disable the draggable
				game.actorContainer1[0].enableEvents(false);		
			}
		}
		if(game.isAdded("act_1")){
			var act_1InPx = game.act_1_InMt * (game.rodLengthInPx/game.rodLength);
			act_1InPx = 225 + act_1InPx;
			game.actorContainer[1].x = act_1InPx;
			//store the current actor container valu at every 
			//increment and decrement tick
			game.obj1CX = game.actorContainer[1].x;
			game.obj1CY = game.actorContainer[1].y;	
			
			game.onObjMove(game.actorContainer[1]);
			if(game.actorContainer[1].x >= 525){			
				game.actorContainer[1].x = 530 ;
				game.actorContainer[1].y = 562;
				game.angle2=0;
				game.normalForce2 = 28;
				game.midPoint2.setLocation(game.actorContainer[1].x,game.actorContainer[1].y + 1);
				game.onObjMove(game.actorContainer[1]);
				game.retext_values();
				if(game.ForceVectorArr.indexOf('act_1') != -1){
					game.hVelocity2 = 0;
					game.vVelocity2 = 0;
					if(game.isRunning1){
						game.isRunning1 = false;
					}
					game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_1'), 1);
				}
				//disable the draggable
				game.actorContainer1[1].enableEvents(false);		
			}
		}
		if(game.isAdded("act_2")){
			var act_2InPx = game.act_2_InMt * (game.rodLengthInPx/game.rodLength);
			act_2InPx = 225 + act_2InPx;
			game.actorContainer[2].x = act_2InPx;
			//store the current actor container valu at every 
			//increment and decrement tick
			game.obj2CX = game.actorContainer[2].x;
			game.obj2CY = game.actorContainer[2].y;	
			
			game.onObjMove(game.actorContainer[2]);
			if(game.actorContainer[2].x >= 525){
				game.actorContainer[2].x = 530 ;
				game.actorContainer[2].y = 582;
				game.angle3=0;
				game.normalForce3 = 28;
				game.midPoint3.setLocation(game.actorContainer[2].x,game.actorContainer[2].y + 1);
				game.onObjMove(game.actorContainer[2]);
				game.retext_values();
				if(game.ForceVectorArr.indexOf('act_2') != -1){
					game.hVelocity3 = 0;
					game.vVelocity3 = 0;
					if(game.isRunning1){
						game.isRunning1 = false;
					}
					game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_2'), 1);
				}
				//disable the draggable
				game.actorContainer1[2].enableEvents(false);		
			}
		}
		if(game.isAdded("act_3")){
			var act_3InPx = game.act_3_InMt * (game.rodLengthInPx/game.rodLength);
			act_3InPx = 225 + act_3InPx;
			game.actorContainer[3].x = act_3InPx;			
			//store the current actor container valu at every 
			//increment and decrement tick
			game.obj3CX = game.actorContainer[3].x;
			game.obj3CY = game.actorContainer[3].y;	
			
			game.onObjMove(game.actorContainer[3]);
			if(game.actorContainer[3].x >= 525){
				game.actorContainer[3].x = 582;
				game.actorContainer[3].y = 542;
				game.angle4=0;
				game.normalForce4 = 28;
				game.midPoint4.setLocation(game.actorContainer[3].x,game.actorContainer[3].y + 1);
				game.onObjMove(game.actorContainer[3]);
				game.retext_values();
				if(game.ForceVectorArr.indexOf('act_3') != -1){
					game.hVelocity4 = 0;
					game.vVelocity4 = 0;
					if(game.isRunning1){
						game.isRunning1 = false;
					}
					game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_3'), 1);
				}
				//disable the draggable
				game.actorContainer1[3].enableEvents(false);		
			}
		}
		if(game.isAdded("act_4")){
			var act_4InPx = game.act_4_InMt * (game.rodLengthInPx/game.rodLength);
			act_4InPx = 225 + act_4InPx;
			game.actorContainer[4].x = act_4InPx;
			//store the current actor container valu at every 
			//increment and decrement tick
			game.obj4CX = game.actorContainer[4].x;
			game.obj4CY = game.actorContainer[4].y;	
			
			game.onObjMove(game.actorContainer[4]);
			if(game.actorContainer[4].x >= 525){
				game.actorContainer[4].x = 582;
				game.actorContainer[4].y = 562;
				game.angle5=0;
				game.normalForce5 = 28;
				game.midPoint5.setLocation(game.actorContainer[4].x,game.actorContainer[4].y + 1);
				game.onObjMove(game.actorContainer[4]);
				game.retext_values();
				if(game.ForceVectorArr.indexOf('act_4') != -1){
					game.hVelocity5 = 0;
					game.vVelocity5 = 0;
					if(game.isRunning1){
						game.isRunning1 = false;
					}
					game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_4'), 1);
				}
				//disable the draggable
				game.actorContainer1[4].enableEvents(false);		
			}
		}
		if(game.isAdded("act_5")){
			var act_5InPx = game.act_5_InMt * (game.rodLengthInPx/game.rodLength);
			act_5InPx = 225 + act_5InPx;
			game.actorContainer[5].x = act_5InPx;
			//store the current actor container valu at every 
			//increment and decrement tick
			game.obj5CX = game.actorContainer[5].x;
			game.obj5CY = game.actorContainer[5].y;	
			
			game.onObjMove(game.actorContainer[5]);
			if(game.actorContainer[5].x >= 525){
				game.actorContainer[5].x = 582;
				game.actorContainer[5].y = 582;
				game.angle6=0;
				game.normalForce6 = 28;
				game.midPoint6.setLocation(game.actorContainer[5].x,game.actorContainer[5].y + 1);
				game.onObjMove(game.actorContainer[5]);
				game.retext_values();
				if(game.ForceVectorArr.indexOf('act_5') != -1){
					game.hVelocity6 = 0;
					game.vVelocity6 = 0;
					if(game.isRunning1){
						game.isRunning1 = false;
					}
					game.ForceVectorArr.splice(game.ForceVectorArr.indexOf('act_5'), 1);
				}
				//disable the draggable
				game.actorContainer1[5].enableEvents(false);		
			}
		}		
	}
    //=======================================================
    // On moving the object 
    //=======================================================
    game.onObjMove = function (obj) {
        //===========================================================================================
        //							First arrow dragging
        //===========================================================================================
        if (obj.id == 'bc_0') {
            game.midPoint1.x = obj.x;
            game.midPoint1.y = obj.y + 1;
            if (!game.isRunning) {
                if (obj.y > game.obj_minX && obj.y < game.obj_maxX && obj.x > game.lineEndX && obj.x < game.lineEndY) {					
                    game.midPoint1.y = game.obj_Ypos;
                }
            }
            //For Changing the color of the arrow 			
            if ((obj.y > game.obj_minX && obj.y < game.obj_maxX) && obj.x > game.lineEndX && obj.x < game.lineEndY && (game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {	
                game.Farr_PinkColor = game.Farr_BlueColor;
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = '#9933cc';
				
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
	             game.oDashTxtArr[12].setText((game.normalForce1 / game.oneNInPx).toFixed(0));
               	game.first_arrow();
            } else {
                game.Farr_PinkColor = '#9933cc';
                game.retext_values();
            }

            game.l1x1 = game.midPoint1.x + (game.midPoint1.width) / 2;
            game.l1y1 = game.midPoint1.y + (game.midPoint1.height) / 2;
  
            game.tang_XY = game.makeTangent(
                game.l1x1,
                game.l1y1,
                game.normalForce1,
                game.angle1);

            game.actorContainer1[0].x = game.tang_XY[0] - game.actorContainer1[0].width / 2;
            game.actorContainer1[0].y = game.tang_XY[1] - game.actorContainer1[0].height / 2;

            game.l1x2 = game.actorContainer1[0].x + game.actorContainer1[0].width / 2;
            game.l1y2 = game.actorContainer1[0].y + game.actorContainer1[0].height / 2;

        }
        if (obj.id == 'cc_0') {
            //For Changing the color of the arrow 			
            if ((game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = game.Farr_BlueColor;
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = '#9933cc';

                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce1 / game.oneNInPx).toFixed(0));
                game.first_arrow();
            } else {
                game.Farr_PinkColor = '#9933cc';
            }
            if (game.actorContainer1[0].y < game.max_dargY) {
                game.l1x2 = obj.x + (obj.width) / 2;
                game.l1y2 = obj.y + (obj.height) / 2;
                //game.Update();
            } else {
                game.actorContainer1[0].y = game.max_dargY;
                game.l1x2 = obj.x + (obj.width) / 2;
                game.l1y2 = obj.y + (obj.height) / 2;

            }
            game.Update();
        }
        //===========================================================================================
        //							Second arrow dragging
        //===========================================================================================
        if (obj.id == 'bc_1') {
            game.midPoint2.x = obj.x;
            game.midPoint2.y = obj.y + 1;
			
			if (!game.isRunning) {
				if ((obj.y > game.obj_minX && obj.y < game.obj_maxX) && (obj.x > game.lineEndX && obj.x < game.lineEndY)) {
					game.midPoint2.y = game.obj_Ypos;
				}
			}
            //For Changing the color of the arrow 			
            if ((obj.y > game.obj_minX && obj.y < game.obj_maxX) && (obj.x > game.lineEndX && obj.x < game.lineEndY) && (!game.drag_firstObj) && (game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = game.Searr_BlueColor;
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = '#9933cc';
               //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce2 / game.oneNInPx).toFixed(0));
                game.second_arrow();
            } else {
                game.Searr_PinkColor = '#9933cc';
                game.retext_values();
            }

            game.l2x1 = game.midPoint2.x + (game.midPoint2.width) / 2;
            game.l2y1 = game.midPoint2.y + (game.midPoint2.height) / 2;

            game.tang_XY = game.makeTangent(
                game.l2x1,
                game.l2y1,
                game.normalForce2,
                game.angle2);

            game.actorContainer1[1].x = game.tang_XY[0] - game.actorContainer1[1].width / 2;
            game.actorContainer1[1].y = game.tang_XY[1] - game.actorContainer1[1].height / 2;

            game.l2x2 = game.actorContainer1[1].x + game.actorContainer1[1].width / 2;
            game.l2y2 = game.actorContainer1[1].y + game.actorContainer1[1].height / 2;
        }
        if (obj.id == 'cc_1') {
            //For Changing the color of the arrow 			
            if ((!game.drag_firstObj) && (game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = game.Searr_BlueColor;
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = '#9933cc';
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce2 / game.oneNInPx).toFixed(0));
                game.second_arrow();
            } else {
                game.Searr_PinkColor = '#9933cc';
            }


            if (game.actorContainer1[1].y < game.max_dargY) {
                game.l2x2 = obj.x + (obj.width) / 2;
                game.l2y2 = obj.y + (obj.height) / 2;
                game.Update();
            } else {
                game.actorContainer1[1].y = game.max_dargY;
                game.l2x2 = obj.x + (obj.width) / 2;
                game.l2y2 = obj.y + (obj.height) / 2;
                game.Update();
            }
        }
        //===========================================================================================
        //							Third arrow dragging
        //===========================================================================================
        if (obj.id == 'bc_2') {
            game.midPoint3.x = obj.x;
            game.midPoint3.y = obj.y + 1;
			if (!game.isRunning) {
				if (obj.y > game.obj_minX && obj.y < game.obj_maxX && (obj.x > game.lineEndX && obj.x < game.lineEndY)) {
					game.midPoint3.y = game.obj_Ypos;
				}
			}
            //For Changing the color of the arrow 			
            if ((obj.y > game.obj_minX && obj.y < game.obj_maxX) && (obj.x > game.lineEndX && obj.x < game.lineEndY) && (!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = game.Tharr_BlueColor;
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = '#9933cc';
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce3 / game.oneNInPx).toFixed(0));
                game.third_arrow();
            } else {
                game.Tharr_PinkColor = '#9933cc';
                game.retext_values();
            }

            game.l3x1 = game.midPoint3.x + (game.midPoint3.width) / 2;
            game.l3y1 = game.midPoint3.y + (game.midPoint3.height) / 2;

            game.tang_XY = game.makeTangent(
                game.l3x1,
                game.l3y1,
                game.normalForce3,
                game.angle3);

            game.actorContainer1[2].x = game.tang_XY[0] - game.actorContainer1[2].width / 2;
            game.actorContainer1[2].y = game.tang_XY[1] - game.actorContainer1[2].height / 2;

            game.l3x2 = game.actorContainer1[2].x + game.actorContainer1[2].width / 2;
            game.l3y2 = game.actorContainer1[2].y + game.actorContainer1[2].height / 2;
        }
        if (obj.id == 'cc_2') {
            //For Changing the color of the arrow 			
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = game.Tharr_BlueColor;
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = '#9933cc';
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce3 / game.oneNInPx).toFixed(0));
                game.third_arrow();
            } else {
                game.Tharr_PinkColor = '#9933cc';
            }

            if (game.actorContainer1[2].y < game.max_dargY) {
                game.l3x2 = obj.x + (obj.width) / 2;
                game.l3y2 = obj.y + (obj.height) / 2;
                game.Update();
            } else {
                game.actorContainer1[2].y = game.max_dargY;
                game.l3x2 = obj.x + (obj.width) / 2;
                game.l3y2 = obj.y + (obj.height) / 2;
                game.Update();
            }
        }
        //===========================================================================================
        //							Fourth arrow dragging
        //===========================================================================================
        if (obj.id == 'bc_3') {
            game.midPoint4.x = obj.x;
            game.midPoint4.y = obj.y + 1;
			if (!game.isRunning) {
				if (obj.y > game.obj_minX && obj.y < game.obj_maxX && (obj.x > game.lineEndX && obj.x < game.lineEndY)) {
					game.midPoint4.y = game.obj_Ypos;
				}
			}
            //For Changing the color of the arrow 			
            if ((obj.y > game.obj_minX && obj.y < game.obj_maxX) && (obj.x > game.lineEndX && obj.x < game.lineEndY) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = game.Foarr_BlueColor;
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = '#9933cc';
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce4 / game.oneNInPx).toFixed(0));
                game.fourth_arrow();
            } else {
                game.Foarr_PinkColor = '#9933cc';
                game.retext_values();
            }

            game.l4x1 = game.midPoint4.x + (game.midPoint4.width) / 2;
            game.l4y1 = game.midPoint4.y + (game.midPoint4.height) / 2;

            game.tang_XY = game.makeTangent(
                game.l4x1,
                game.l4y1,
                game.normalForce4,
                game.angle4);

            game.actorContainer1[3].x = game.tang_XY[0] - game.actorContainer1[3].width / 2;
            game.actorContainer1[3].y = game.tang_XY[1] - game.actorContainer1[3].height / 2;

            game.l4x2 = game.actorContainer1[3].x + game.actorContainer1[3].width / 2;
            game.l4y2 = game.actorContainer1[3].y + game.actorContainer1[3].height / 2;
        }
        if (obj.id == 'cc_3') {
            //For Changing the color of the arrow 			
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = game.Foarr_BlueColor;
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = '#9933cc';
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce4 / game.oneNInPx).toFixed(0));
                game.fourth_arrow();
            } else {
                game.Foarr_PinkColor = '#9933cc';
            }

            if (game.actorContainer1[3].y < game.max_dargY) {
                game.l4x2 = obj.x + (obj.width) / 2;
                game.l4y2 = obj.y + (obj.height) / 2;
                game.Update();
            } else {
                game.actorContainer1[3].y = game.max_dargY;
                game.l4x2 = obj.x + (obj.width) / 2;
                game.l4y2 = obj.y + (obj.height) / 2;
                game.Update();
            }
        }
        //===========================================================================================
        //							Fifth arrow dragging
        //===========================================================================================
        if (obj.id == 'bc_4') {
            game.midPoint5.x = obj.x;
            game.midPoint5.y = obj.y + 1;
			if (!game.isRunning) {
				if (obj.y > game.obj_minX && obj.y < game.obj_maxX && (obj.x > game.lineEndX && obj.x < game.lineEndY)) {
					game.midPoint5.y = game.obj_Ypos;
				}
			}
            //For Changing the color of the arrow 			
            if ((obj.y > game.obj_minX && obj.y < game.obj_maxX) && (obj.x > game.lineEndX && obj.x < game.lineEndY) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = game.Fiarr_BlueColor;
                game.Siarr_PinkColor = '#9933cc';
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce5 / game.oneNInPx).toFixed(0));
                game.fifth_arrow();
            } else {
                game.Fiarr_PinkColor = '#9933cc';
                game.retext_values();
            }

            game.l5x1 = game.midPoint5.x + (game.midPoint5.width) / 2;
            game.l5y1 = game.midPoint5.y + (game.midPoint5.height) / 2;

            game.tang_XY = game.makeTangent(
                game.l5x1,
                game.l5y1,
                game.normalForce5,
                game.angle5);

            game.actorContainer1[4].x = game.tang_XY[0] - game.actorContainer1[4].width / 2;
            game.actorContainer1[4].y = game.tang_XY[1] - game.actorContainer1[4].height / 2;

            game.l5x2 = game.actorContainer1[4].x + game.actorContainer1[4].width / 2;
            game.l5y2 = game.actorContainer1[4].y + game.actorContainer1[4].height / 2;
        }
        if (obj.id == 'cc_4') {
            //For Changing the color of the arrow 			
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = game.Fiarr_BlueColor;
                game.Siarr_PinkColor = '#9933cc';
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce5 / game.oneNInPx).toFixed(0));
                game.fifth_arrow();
            } else {
                game.Fiarr_PinkColor = '#9933cc';
            }
            if (game.actorContainer1[4].y < game.max_dargY) {
                game.l5x2 = obj.x + (obj.width) / 2;
                game.l5y2 = obj.y + (obj.height) / 2;
                game.Update();
            } else {
                game.actorContainer1[4].y = game.max_dargY;
                game.l5x2 = obj.x + (obj.width) / 2;
                game.l5y2 = obj.y + (obj.height) / 2;
                game.Update();
            }
        }
        //===========================================================================================
        //							Sixth arrow dragging
        //===========================================================================================
        if (obj.id == 'bc_5') {
            game.midPoint6.x = obj.x;
            game.midPoint6.y = obj.y + 1;
			if (!game.isRunning) {
				if (obj.y > game.obj_minX && obj.y < game.obj_maxX && (obj.x > game.lineEndX && obj.x < game.lineEndY)) {
					game.midPoint6.y = game.obj_Ypos;
				}
			}
            //For Changing the color of the arrow 			
            if ((obj.y > game.obj_minX && obj.y < game.obj_maxX) && (obj.x > game.lineEndX && obj.x < game.lineEndY) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = game.Siarr_BlueColor;
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce6 / game.oneNInPx).toFixed(0));
                game.sixth_arrow();
            } else {
                game.Siarr_PinkColor = '#9933cc';
                game.retext_values();
            }

            game.l6x1 = game.midPoint6.x + (game.midPoint6.width) / 2;
            game.l6y1 = game.midPoint6.y + (game.midPoint6.height) / 2;

            game.tang_XY = game.makeTangent(
                game.l6x1,
                game.l6y1,
                game.normalForce6,
                game.angle6);

            game.actorContainer1[5].x = game.tang_XY[0] - game.actorContainer1[5].width / 2;
            game.actorContainer1[5].y = game.tang_XY[1] - game.actorContainer1[5].height / 2;

            game.l6x2 = game.actorContainer1[5].x + game.actorContainer1[5].width / 2;
            game.l6y2 = game.actorContainer1[5].y + game.actorContainer1[5].height / 2;

        }
        if (obj.id == 'cc_5') {
            //For Changing the color of the arrow 			
            if ((!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
                game.Farr_PinkColor = '#9933cc';
                game.Searr_PinkColor = '#9933cc';
                game.Tharr_PinkColor = '#9933cc';
                game.Foarr_PinkColor = '#9933cc';
                game.Fiarr_PinkColor = '#9933cc';
                game.Siarr_PinkColor = game.Siarr_BlueColor;
                //To Display Angle:
                game.oDashTxtArr[15].setText(String(Math.round(-game.angle1).toFixed(1)));
                //To Display Force
                game.oDashTxtArr[12].setText((game.normalForce6 / game.oneNInPx).toFixed(0));
                game.sixth_arrow();
            } else {
                game.Siarr_PinkColor = '#9933cc';
            }

            if (game.actorContainer1[5].y < game.max_dargY) {
                game.l6x2 = obj.x + (obj.width) / 2;
                game.l6y2 = obj.y + (obj.height) / 2;
                game.Update();
            } else {
                game.actorContainer1[5].y = game.max_dargY;
                game.l6x2 = obj.x + (obj.width) / 2;
                game.l6y2 = obj.y + (obj.height) / 2;
                game.Update();
            }
        }
        //===========================================================================================
        //							Pivot Element Dragging
        //===========================================================================================			
        if (obj.id == 'axis_0') {
            game.pivotImg.x = game.axisContainer[0].x;
            game.Axis_actor.setLocation(game.pivotImg.x - 5, game.pivotImg.y + 25);			
            if (game.axisContainer[0].x < (230 - game.pivotImg.width / 2)) {
                game.pivotImg.x = (230 - game.pivotImg.width / 2);
                game.Axis_actor.setLocation(game.pivotImg.x - 5, game.pivotImg.y + 25);					
            }
            if (game.axisContainer[0].x > (530 - game.pivotImg.width / 2)) {
                game.pivotImg.x = (530 - game.pivotImg.width / 2);
                game.Axis_actor.setLocation(game.pivotImg.x - 5, game.pivotImg.y + 25);
            }
			game.axisPos = (game.pivotImg.x - 222);
            game.axisPosInMt = game.axisPos * (game.rodLength/300);
			game.oDashTxtArr[5].setText(parseFloat(game.axisPosInMt).toFixed(2)); 
			
            game.Farr_PinkColor = '#9933cc';
            game.Searr_PinkColor = '#9933cc';
            game.Tharr_PinkColor = '#9933cc';
            game.Foarr_PinkColor = '#9933cc';
            game.Fiarr_PinkColor = '#9933cc';
            game.Siarr_PinkColor = '#9933cc';
			if(game.isAdded('act_0')){
				game.first_arrow();
			}
			if(game.isAdded('act_1')){
				game.second_arrow();
			}
			if(game.isAdded('act_2')){
				game.third_arrow();
			}
			if(game.isAdded('act_3')){
				game.fourth_arrow();
			}
			if(game.isAdded('act_4')){
				game.fifth_arrow();
			}
			if(game.isAdded('act_5')){
				game.sixth_arrow();
			}			
        }
        //First Line
        drawPaths(game.Rays[0], {
            x: game.l1x1,
            y: game.l1y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l1x2,
            y: game.l1y2
        }, false, game.Farr_PinkColor, 1, 'rightArrowHead', false);

        //Second Line
        drawPaths(game.Rays[1], {
            x: game.l2x1,
            y: game.l2y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l2x2,
            y: game.l2y2
        }, false, game.Searr_PinkColor, 1, 'rightArrowHead', false);

        //Third line
        drawPaths(game.Rays[2], {
            x: game.l3x1,
            y: game.l3y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l3x2,
            y: game.l3y2
        }, false, game.Tharr_PinkColor, 1, 'rightArrowHead', false);


        //Fourth line
        drawPaths(game.Rays[3], {
            x: game.l4x1,
            y: game.l4y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l4x2,
            y: game.l4y2
        }, false, game.Foarr_PinkColor, 1, 'rightArrowHead', false);

        //Fifth line
        drawPaths(game.Rays[4], {
            x: game.l5x1,
            y: game.l5y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l5x2,
            y: game.l5y2
        }, false, game.Fiarr_PinkColor, 1, 'rightArrowHead', false);

        //Sixth line
        drawPaths(game.Rays[5], {
            x: game.l6x1,
            y: game.l6y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l6x2,
            y: game.l6y2
        }, false, game.Siarr_PinkColor, 1, 'rightArrowHead', false);

    }
    //=======================================================
    // Lets draw the rays with arrow heads
    //=======================================================
    function drawPaths(obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
        var headlen = 18;
        obj.paint = function (_director, time) {
            var dx = lineTO.x - moveTO.x;
            var dy = lineTO.y - moveTO.y;
            var angle = Math.atan2(dy, dx);
            var canvas = _director.ctx;
            canvas.strokeStyle = '#9933cc';
            canvas.fillStyle = strokeColor;
            canvas.lineWidth = 1.5;
            if (isDashed) {} else {
                canvas.beginPath();
                canvas.moveTo(moveTO.x, moveTO.y);
                canvas.lineTo(lineTO.x, lineTO.y);
                canvas.stroke();
            }
            canvas.beginPath();
            if (arrowDir == 'leftArrowHead') {
                canvas.moveTo(moveTO.x, moveTO.y);
                canvas.lineTo(moveTO.x + headlen * Math.cos(angle - Math.PI / 8), moveTO.y + headlen * Math.sin(angle - Math.PI / 8));
                canvas.lineTo(moveTO.x + headlen * Math.cos(angle + Math.PI / 8), moveTO.y + headlen * Math.sin(angle + Math.PI / 8));
                canvas.fill();
            } else if (arrowDir == 'rightArrowHead') {
                canvas.moveTo((lineTO.x), lineTO.y);
                canvas.lineTo((lineTO.x) - headlen * Math.cos(angle - Math.PI / 8), lineTO.y - headlen * Math.sin(angle - Math.PI / 8));
                canvas.lineTo((lineTO.x) - headlen * Math.cos(angle + Math.PI / 8), lineTO.y - headlen * Math.sin(angle + Math.PI / 8));
                canvas.fill();
            }
            canvas.lineJoin = 'round';
            canvas.lineCap = 'round';
            canvas.closePath();
        };
    }
    //=======================================================
    // Timer keeps monitoring the object movement range and position
    //=======================================================
    game.createTimerUpdate = function () {       
        game.timerStart = new Date().getTime();
        var getR = 0;
		var force1Axis = 0, force2Axis = 0, force3Axis = 0, force4Axis = 0, force5Axis = 0, force6Axis = 0;
        //game.fir_lineang();
        var maxAngAcceleration = game.ang_accelration;
        var minAngAcceleration = -game.ang_accelration;
		var accelaratePerSecond = 10;
        game.init_angVel = 0;
        game._timerInstance = game._scene.createTimer(
            0,
            Number.MAX_VALUE,
	        function (scene_time, timer_time, timertask_instance) {}, // timeout	
    	    function (scene_time, timer_time, timertask_instance) { // tick				
				game.timerCurrent = new Date().getTime();
				game.elapsedTime = (game.timerCurrent - game.timerStart) / 1000;
				
				game.timerStart = new Date().getTime();
				game.init_angVel += game.ang_accelration * game.elapsedTime;
				var initAngAccel = game.init_angVel*game.elapsedTime;
				
				//Anyway find pivot
				var pivotx = game.pivotImg.x + (game.pivotImg.width / 2);
				var pivoty = game.pivotImg.y + (game.pivotImg.height / 2);	
				
				//Anyway set a new beam angle				
				getR = game.beamAngle + initAngAccel;
				
				var anchorX = (game.pivotImg.x + (game.pivotImg.width / 2) - game.graph_line.x) / 750;
				var anchorY = (game.pivotImg.y + (game.pivotImg.height / 2)  - game.graph_line.y) / 600;
				game.graph_line.setRotationAnchored(getR, anchorX, anchorY);
				game.beamAngle = getR;
				//visible false in degree
				game.oDashTxtArr[3].visible = false;
				//display rod angle 	
				game.oDashTxtArr[2].setText((-game.beamAngle * (180/Math.PI)).toFixed(2)+String.fromCharCode(186));
				//Place objects
				if(game.isAdded("act_0")){
					if(!game.isRunning1){						
						force1Axis = game.kArray[0] * game.fir_axis[0];
					}					
					var line_newXY = rotatecalc(pivotx, pivoty, pivotx + force1Axis, pivoty, getR);					
					game.actorContainer[0].x = line_newXY[0] - game.actorContainer[0].width / 2;
					game.actorContainer[0].y = line_newXY[1] - game.actorContainer[0].height / 2;
					game.fir_lineang(game.actorContainer[0], game.actorContainer1[0]);					
				}
				if(game.isAdded("act_1")){
					if(!game.isRunning1){	
						force2Axis = game.kArray[1] * game.sec_axis[0];
					}
					var line_newXY = rotatecalc(pivotx, pivoty, pivotx + force2Axis, pivoty, getR);
					game.actorContainer[1].x = line_newXY[0] - game.actorContainer[1].width / 2;
					game.actorContainer[1].y = line_newXY[1] - game.actorContainer[1].height / 2;
					game.fir_lineang(game.actorContainer[1], game.actorContainer1[1]);
				}
				if(game.isAdded("act_2")){	
					if(!game.isRunning1){		
						force3Axis = game.kArray[2] * game.thi_axis[0];
					}
					var line_newXY = rotatecalc(pivotx, pivoty, pivotx + force3Axis, pivoty, getR);
					game.actorContainer[2].x = line_newXY[0] - game.actorContainer[2].width / 2;
					game.actorContainer[2].y = line_newXY[1] - game.actorContainer[2].height / 2;
					game.fir_lineang(game.actorContainer[2], game.actorContainer1[2]);
				}
				if(game.isAdded("act_3")){
					if(!game.isRunning1){	
						force4Axis = game.kArray[3] * game.fou_axis[0];
					}
					var line_newXY = rotatecalc(pivotx, pivoty, pivotx + force4Axis, pivoty, getR);
					game.actorContainer[3].x = line_newXY[0] - game.actorContainer[3].width / 2;
					game.actorContainer[3].y = line_newXY[1] - game.actorContainer[3].height / 2;
					game.fir_lineang(game.actorContainer[3], game.actorContainer1[3]);
				}
				if(game.isAdded("act_4")){
					if(!game.isRunning1){	
						force5Axis = game.kArray[4] * game.fif_axis[0];
					}
					var line_newXY = rotatecalc(pivotx, pivoty, pivotx + force5Axis, pivoty, getR);
					game.actorContainer[4].x = line_newXY[0] - game.actorContainer[4].width / 2;
					game.actorContainer[4].y = line_newXY[1] - game.actorContainer[4].height / 2;
					game.fir_lineang(game.actorContainer[4], game.actorContainer1[4]);
				}
				if(game.isAdded("act_5")){
					if(!game.isRunning1){
						force6Axis = game.kArray[5] *  game.six_axis[0];
					}
					var line_newXY = rotatecalc(pivotx, pivoty, pivotx + force6Axis, pivoty, getR);
					game.actorContainer[5].x = line_newXY[0] - game.actorContainer[5].width / 2;
					game.actorContainer[5].y = line_newXY[1] - game.actorContainer[5].height / 2;
					game.fir_lineang(game.actorContainer[5], game.actorContainer1[5]);
				}	
				
				
		    //Calculating total horizontal and vertical velocity	
			if(!game.isRunning1){				
		       game.radHAcc = game.hVelocity1+game.hVelocity2+game.hVelocity3+game.hVelocity4+game.hVelocity5+game.hVelocity6;
		       game.radVAcc = game.vVelocity1+game.vVelocity2+game.vVelocity3+game.vVelocity4+game.vVelocity5+game.vVelocity6;
		       game.isRunning1 = true;
			}				 
			 if(game.ang_accelration.toFixed(3)==0 && game.radHAcc.toFixed(3)==0 &&game.radVAcc.toFixed(3)==0){
				 if(game._timerInstance != null){
				 	game._timerInstance.cancel();				 
				 }
			 }
			var sH = 0.5 * game.radHAcc * game.elapsedTime * game.elapsedTime * 100;
			var sV = 0.5 * game.radVAcc * game.elapsedTime * game.elapsedTime * 100;
			
				
				//Move all objects
				game.pivotImg.x+=sH;
				game.pivotImg.y+=sV;
				
				game.graph_line.x+=sH;
				game.graph_line.y+=sV;				

				for(var j=0;j<5;j++){
					var jname="act_"+j;
					if(game.isAdded(jname)){
						game.actorContainer[j].x+=sH;
						game.actorContainer[j].y+=sV;
					}
				}
				if(game.pivotImg.x < 0 || game.pivotImg.y < 0 || game.pivotImg.x > 760 || game.pivotImg.y > 600){
					if(isBannerDisplay){
						game.__bannerDisplay(1, 2, -70, 0, false);
						isBannerDisplay = false;
					}
				}
			},
        	function (scene_time, timer_time, timertask_instance) {} // cancel
        )
    };
	
	game.isAdded = function(who){		
		var existFlag=false;
		for(var i=0;i<game.ForceVectorArr.length;i++){
			var obj_id = game.ForceVectorArr[i];
			if(obj_id==who){
				existFlag=true;
				break;
			}
		}
		return existFlag;
	};
	
    game.fir_lineang = function(oDotActCon, oRectActCon){
        game.onObjMove(oDotActCon);
		var P12 = 0, P13 = 0, P23 = 0;
        var minAngle = 0;
		
		game.PivotX = game.pivotImg.x + (game.pivotImg.width / 2);
		game.PivotY = game.pivotImg.y + (game.pivotImg.height / 2);		
		if(oDotActCon.id == 'bc_0'){
			game.l1x1 = (oDotActCon.x + oDotActCon.width / 2);
			game.l1y1 = (oDotActCon.y + oDotActCon.height / 2)
			game.l1x2 = (oRectActCon.x + oRectActCon.width / 2);
			game.l1y2 = (oRectActCon.y + oRectActCon.height / 2);			
						
			P12 = game.dist(game.l1x1, game.l1y1, game.l1x2, game.l1y2)[0];			
			P13 = game.dist(game.PivotX, game.PivotY, game.l1x1, game.l1y1)[0];
			P23 = game.dist(game.PivotX, game.PivotY, game.l1x2, game.l1y2)[0];
			
			if(P12 == 0) {
				P12 = 0.0001;
			}
			if(P13 == 0) {
				P13 = 0.0001;
			}						
						
			var angle = Math.acos((Math.pow(P12, 2) + Math.pow(P13, 2) - Math.pow(P23, 2)) / (2 * P12 * P13));	
			if(game.l1x1 == game.PivotX){
				angle=0;
			}
				
		    var force = 0;	
		    if(!game.checkZero1){
				  if(!game.isRunning1){
					if(game.l1y1==game.l1y2){
						 game.checkZero1 = true;
					}
				}else{
					force = game.normalForce1 * Math.sin(angle);
				}
			}		
					
        	game.torque1 = P13 * force;			
			game.inertia1 = (game.normalForce1 / 9.8) * P13;
			
			var checkClock = isClockwise(game.l1x1, game.l1y1, game.PivotX, game.PivotY, game.l1x2, game.l1y2);			
			if (!checkClock) {
            	game.torque1 = -game.torque1;
		    }			
			if(!game.isRunning1){
				var ang_val = Math.atan2(game.l1y1 -game.l1y2,game.l1x1 -game.l1x2);					
				game.hVelocity1 = (game.normalForce1/forceToVelocity) * Math.cos(ang_val);
				game.vVelocity1 = (game.normalForce1/forceToVelocity) * Math.sin(ang_val);  
				game.hVelocity1 = -game.hVelocity1;
				game.vVelocity1 = -game.vVelocity1;		
			}
			game.cw=-1;
			if(angle>Math.PI/2){
				game.cw=1;
			}			
		}
		if(oDotActCon.id == 'bc_1'){
			game.l2x1 = (oDotActCon.x + oDotActCon.width / 2);
			game.l2y1 = (oDotActCon.y + oDotActCon.height / 2)
			game.l2x2 = (oRectActCon.x + oRectActCon.width / 2);
			game.l2y2 = (oRectActCon.y + oRectActCon.height / 2);		
						
			P12 = game.dist(game.l2x1, game.l2y1, game.l2x2, game.l2y2)[0];
			P13 = game.dist(game.PivotX, game.PivotY, game.l2x1, game.l2y1)[0];
			P23 = game.dist(game.PivotX, game.PivotY, game.l2x2, game.l2y2)[0];
			
			if(P12 == 0) {
				P12 = 0.0001;
			}
			if(P13 == 0) {
				P13 = 0.0001;
			}	
			var angle = Math.acos((Math.pow(P12, 2) + Math.pow(P13, 2) - Math.pow(P23, 2)) / (2 * P12 * P13));
			if(game.l2x1 == game.PivotX){
				angle=0;
			}
			
			var force = 0;	
		    if(!game.checkZero2){
				  if(!game.isRunning1){
					if(game.l2y1==game.l2y2){
						 game.checkZero2 = true;
					}
				}else{
					force = game.normalForce2 * Math.sin(angle);
				}
			}				
			game.torque2 = P13 * force;			
			game.inertia2 = (game.normalForce1 / 9.8) * P13;
			var checkClock = isClockwise(game.l2x1, game.l2y1, game.PivotX, game.PivotY, game.l2x2, game.l2y2);
			if (!checkClock) {
            	game.torque2 = -game.torque2;
		    }
			 if(!game.isRunning1){
				var ang_val = Math.atan2(game.l2y1 -game.l2y2,game.l2x1 -game.l2x2);					
				game.hVelocity2 = (game.normalForce2/forceToVelocity) * Math.cos(ang_val);
				game.vVelocity2 = (game.normalForce2/forceToVelocity) * Math.sin(ang_val); 	    		
				game.hVelocity2 = -game.hVelocity2;
				game.vVelocity2 = -game.vVelocity2;	
			}
			game.cw=-1;
			if(angle>Math.PI/2){
				game.cw=1;
			}
		}
		if(oDotActCon.id == 'bc_2'){
			game.l3x1 = (oDotActCon.x + oDotActCon.width / 2);
			game.l3y1 = (oDotActCon.y + oDotActCon.height / 2)
			game.l3x2 = (oRectActCon.x + oRectActCon.width / 2);
			game.l3y2 = (oRectActCon.y + oRectActCon.height / 2);
						
			P12 = game.dist(game.l3x1, game.l3y1, game.l3x2, game.l3y2)[0];
			P13 = game.dist(game.PivotX, game.PivotY, game.l3x1, game.l3y1)[0];
			P23 = game.dist(game.PivotX, game.PivotY, game.l3x2, game.l3y2)[0];			
			
			if(P12 == 0) {
				P12 = 0.0001;
			}
			if(P13 == 0) {
				P13 = 0.0001;
			}
			
			var angle = Math.acos((Math.pow(P12, 2) + Math.pow(P13, 2) - Math.pow(P23, 2)) / (2 * P12 * P13));
			if(game.l3x1 == game.PivotX){
				angle=0;
			}
			
			var force = 0;	
		    if(!game.checkZero3){
				  if(!game.isRunning1){
					if(game.l3y1==game.l3y2){
						 game.checkZero3 = true;
					}
				}else{
					force = game.normalForce3 * Math.sin(angle);
				}
			}			

			game.torque3 = P13 * force;			
			game.inertia3 = (game.normalForce1 / 9.8) * P13;
			
			var checkClock = isClockwise(game.l3x1, game.l3y1, game.PivotX, game.PivotY, game.l3x2, game.l3y2);
			if (!checkClock) {
            	game.torque3 = -game.torque3;				
		    }	
			if(!game.isRunning1){
				var ang_val = Math.atan2(game.l3y1 -game.l3y2,game.l3x1 -game.l3x2);									
				game.hVelocity3 = (game.normalForce3/forceToVelocity) * Math.cos(ang_val);
				game.vVelocity3 = (game.normalForce3/forceToVelocity) * Math.sin(ang_val);  	    			
				game.hVelocity3 = -game.hVelocity3;
				game.vVelocity3 = -game.vVelocity3;
			}						
			game.cw=-1;
			if(angle>Math.PI/2){
				game.cw=1;
			}
		}
		if(oDotActCon.id == 'bc_3'){
			game.l4x1 = (oDotActCon.x + oDotActCon.width / 2);
			game.l4y1 = (oDotActCon.y + oDotActCon.height / 2)
			game.l4x2 = (oRectActCon.x + oRectActCon.width / 2);
			game.l4y2 = (oRectActCon.y + oRectActCon.height / 2);
						
			P12 = game.dist(game.l4x1, game.l4y1, game.l4x2, game.l4y2)[0];
			P13 = game.dist(game.PivotX, game.PivotY, game.l4x1, game.l4y1)[0];
			P23 = game.dist(game.PivotX, game.PivotY, game.l4x2, game.l4y2)[0];
				
			if(P12 == 0) {
				P12 = 0.0001;
			}
			if(P13 == 0) {
				P13 = 0.0001;
			}
				
			var angle = Math.acos((Math.pow(P12, 2) + Math.pow(P13, 2) - Math.pow(P23, 2)) / (2 * P12 * P13));
			if(game.l4x1 == game.PivotX){
				angle=0;
			}
			var force = 0;	
		    if(!game.checkZero4){
				  if(!game.isRunning1){
					if(game.l4y1==game.l4y2){
						 game.checkZero4 = true;
					}
				}else{
					force = game.normalForce4 * Math.sin(angle);
				}
			}
			
			game.torque4 = P13 * force;			
			game.inertia4 = (game.normalForce1 / 9.8) * P13;
			
			var checkClock = isClockwise(game.l4x1, game.l4y1, game.PivotX, game.PivotY, game.l4x2, game.l4y2);
			if (!checkClock) {
            	game.torque4 = -game.torque4;
		    }	
			if(!game.isRunning1){
				var ang_val = Math.atan2(game.l4y1 -game.l4y2,game.l4x1 -game.l4x2);								
				game.hVelocity4 = (game.normalForce4/forceToVelocity) * Math.cos(ang_val);
				game.vVelocity4 = (game.normalForce4/forceToVelocity) * Math.sin(ang_val); 	    		
				game.hVelocity4 = -game.hVelocity4;
				game.vVelocity4 = -game.vVelocity4;
			}		
			game.cw=-1;
			if(angle>Math.PI/2){
				game.cw=1;
			}			
		}
		if(oDotActCon.id == 'bc_4'){
			game.l5x1 = (oDotActCon.x + oDotActCon.width / 2);
			game.l5y1 = (oDotActCon.y + oDotActCon.height / 2)
			game.l5x2 = (oRectActCon.x + oRectActCon.width / 2);
			game.l5y2 = (oRectActCon.y + oRectActCon.height / 2);
			
			P12 = game.dist(game.l5x1, game.l5y1, game.l5x2, game.l5y2)[0];
			P13 = game.dist(game.PivotX, game.PivotY, game.l5x1, game.l5y1)[0];
			P23 = game.dist(game.PivotX, game.PivotY, game.l5x2, game.l5y2)[0];
				
			if(P12 == 0) {
				P12 = 0.0001;
			}
			if(P13 == 0) {
				P13 = 0.0001;
			}
			var angle = Math.acos((Math.pow(P12, 2) + Math.pow(P13, 2) - Math.pow(P23, 2)) / (2 * P12 * P13));			
			if(game.l5x1 == game.PivotX){
				angle=0;
			}
			var force = 0;	
		    if(!game.checkZero5){
				  if(!game.isRunning1){
					if(game.l5y1==game.l5y2){
						 game.checkZero5 = true;
					}
				}else{
					force = game.normalForce5 * Math.sin(angle);
				}
			}

			game.torque5 = P13 * force;			
			game.inertia5 = (game.normalForce1 / 9.8) * P13;
			
			var checkClock = isClockwise(game.l5x1, game.l5y1, game.PivotX, game.PivotY, game.l5x2, game.l5y2);
			if (!checkClock) {
            	game.torque5 = -game.torque5;
		    }			
			if(!game.isRunning1){
				var ang_val = Math.atan2(game.l5y1 -game.l5y2,game.l5x1 -game.l5x2); 	
				game.hVelocity5 = (game.normalForce5/forceToVelocity) * Math.cos(ang_val);
				game.vVelocity5 = (game.normalForce5/forceToVelocity) * Math.sin(ang_val); 
				game.hVelocity5 = -game.hVelocity5;
				game.vVelocity5 = -game.vVelocity5;
			}
			game.cw=-1;
			if(angle>Math.PI/2){
				game.cw=1;
			}			
		}
		if(oDotActCon.id == 'bc_5'){
			game.l6x1 = (oDotActCon.x + oDotActCon.width / 2);
			game.l6y1 = (oDotActCon.y + oDotActCon.height / 2)
			game.l6x2 = (oRectActCon.x + oRectActCon.width / 2);
			game.l6y2 = (oRectActCon.y + oRectActCon.height / 2);			
			
			P12 = game.dist(game.l6x1, game.l6y1, game.l6x2, game.l6y2)[0];
			P13 = game.dist(game.PivotX, game.PivotY, game.l6x1, game.l6y1)[0];
			P23 = game.dist(game.PivotX, game.PivotY, game.l6x2, game.l6y2)[0];
				
			if(P12 == 0) {
				P12 = 0.0001;
			}
			if(P13 == 0) {
				P13 = 0.0001;
			}
			var angle = Math.acos((Math.pow(P12, 2) + Math.pow(P13, 2) - Math.pow(P23, 2)) / (2 * P12 * P13));
			if(game.l6x1 == game.PivotX){
				angle=0;
			}
			var force = 0;	
		    if(!game.checkZero6){
				  if(!game.isRunning1){
					if(game.l6y1==game.l6y2){
						 game.checkZero6 = true;
					}
				}else{
					force = game.normalForce6 * Math.sin(angle);
				}
			}
			
			game.torque6 = P13 * force;			
			game.inertia6 = (game.normalForce1 / 9.8) * P13;
			
			var checkClock = isClockwise(game.l6x1, game.l6y1, game.PivotX, game.PivotY, game.l6x2, game.l6y2);
			if (!checkClock) {
            	game.torque6 = -game.torque6;
		    }	
			if(!game.isRunning1){
				var ang_val = Math.atan2(game.l6y1 -game.l6y2,game.l6x1 -game.l6x2);				  	
				game.hVelocity6 = (game.normalForce6/forceToVelocity) * Math.cos(ang_val);
				game.vVelocity6 = (game.normalForce6/forceToVelocity) * Math.sin(ang_val); 
				game.hVelocity6 = -game.hVelocity6;
				game.vVelocity6 = -game.vVelocity6;										
			}
			game.cw=-1;
			if(angle>Math.PI/2){
				game.cw=1;
			}			
		}    						
		game.torque = game.torque1 + game.torque2 + game.torque3 + game.torque4 + game.torque5 + game.torque6;		
		game.inertia = game.inertia1 + game.inertia2 + game.inertia3 + game.inertia4 + game.inertia5 + game.inertia6;		
        game.ang_accelration = game.torque / game.inertia;      
    }
    //=================================================================================================
    // Function which gives DIRECTION and ANGLE between two X, Y points	
    game.dist = function (xA, yA, xB, yB) {		
		var magnitude = Math.sqrt(Math.pow((xA - xB), 2) + Math.pow((yA - yB), 2));		
        var direction = Math.atan2(yB - yA, xB - xA);
        return [magnitude, direction];
    }
    //=================================================================================================

    //=================================================================================================
    // Update function, used to calculate the NORMAL FORCE and ANGLE
    //=================================================================================================	
    game.Update = function () {
        //To get Distance and Angle:
        game.f1 = game.dist(game.l1x1, game.l1y1, game.l1x2, game.l1y2);
        game.f2 = game.dist(game.l2x1, game.l2y1, game.l2x2, game.l2y2);
        game.f3 = game.dist(game.l3x1, game.l3y1, game.l3x2, game.l3y2);
        game.f4 = game.dist(game.l4x1, game.l4y1, game.l4x2, game.l4y2);
        game.f5 = game.dist(game.l5x1, game.l5y1, game.l5x2, game.l5y2);
        game.f6 = game.dist(game.l6x1, game.l6y1, game.l6x2, game.l6y2);

        game.normalForce1 = game.f1[0];
        game.normalForce2 = game.f2[0];
        game.normalForce3 = game.f3[0];
        game.normalForce4 = game.f4[0];
        game.normalForce5 = game.f5[0];
        game.normalForce6 = game.f6[0];

        //Convert radians Value
        game.angle1 = ((180 / Math.PI) * game.f1[1]);
        game.angle2 = ((180 / Math.PI) * game.f2[1]);
        game.angle3 = ((180 / Math.PI) * game.f3[1]);
        game.angle4 = ((180 / Math.PI) * game.f4[1]);
        game.angle5 = ((180 / Math.PI) * game.f5[1]);
        game.angle6 = ((180 / Math.PI) * game.f6[1]);

        if ((game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX) && (game.actorContainer[0].x > game.lineEndX && game.actorContainer[0].x < game.upArrowEndX) && (game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
            //To Display Angle:
            game.oDashTxtArr[15].setText(Math.round((game.angle1) * -1).toFixed(1));
            //To Display Force
            game.oDashTxtArr[12].setText((game.normalForce1 / game.oneNInPx).toFixed(0));
        }
        if ((game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX) && (game.actorContainer[1].x > game.lineEndX && game.actorContainer[1].x < game.upArrowEndX) && (!game.drag_firstObj) && (game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
            //To Display Angle:
            game.oDashTxtArr[15].setText(Math.round((game.angle2) * -1).toFixed(1));
            //To Display Force
            game.oDashTxtArr[12].setText((game.normalForce2 / game.oneNInPx).toFixed(0));
        }
        if ((game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX) && (game.actorContainer[2].x > game.lineEndX && game.actorContainer[2].x < game.upArrowEndX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
            //To Display Angle:
            game.oDashTxtArr[15].setText(Math.round((game.angle3) * -1).toFixed(1));
            //To Display Force
            game.oDashTxtArr[12].setText((game.normalForce3 / game.oneNInPx).toFixed(0));
        }
        if ((game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX) && (game.actorContainer[3].x > game.lineEndX && game.actorContainer[3].x < game.upArrowEndX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (game.drag_fourthObj) && (!game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
            //To Display Angle:
            game.oDashTxtArr[15].setText(Math.round((game.angle4) * -1).toFixed(1));
            //To Display Force:
            game.oDashTxtArr[12].setText((game.normalForce4 / game.oneNInPx).toFixed(0));
            //To Display Axis:
        }
        if ((game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX) && (game.actorContainer[4].x > game.lineEndX && game.actorContainer[4].x < game.upArrowEndX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (game.drag_fifthObj) && (!game.drag_sixthObj) && (!game.drag_axisObj)) {
            //To Display Angle:
            game.oDashTxtArr[15].setText(Math.round((game.angle5) * -1).toFixed(1));
            //To Display Force
            game.oDashTxtArr[12].setText((game.normalForce5 / game.oneNInPx).toFixed(0));

        }
        if ((game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX) && (game.actorContainer[5].x > game.lineEndX && game.actorContainer[5].x < game.upArrowEndX) && (!game.drag_firstObj) && (!game.drag_secondObj) && (!game.drag_thirdObj) && (!game.drag_fourthObj) && (!game.drag_fifthObj) && (game.drag_sixthObj) && (!game.drag_axisObj)) {
            //To Display Angle:
            game.oDashTxtArr[15].setText(Math.round((game.angle6) * -1).toFixed(1));
            //To Display Force
            game.oDashTxtArr[12].setText((game.normalForce6 / game.oneNInPx).toFixed(0));
        }
    }
    //=================================================================================================

    //-----------------------------------------------------------------------------------------
    //get coordinates at certain angle(This function is main part of this activity)
    //-----------------------------------------------------------------------------------------
    game.makeTangent = function (cx, cy, r, a) {
        var ang = (Math.PI / 180) * a;
        var x1 = cx + (r * Math.cos(ang));
        var y1 = cy + (r * Math.sin(ang));
        return [x1, y1];
    }

    game.first_arrow = function () {	
        game.fir_axis = game.dist((game.pivotImg.x + (game.pivotImg.width / 2)), (game.pivotImg.y + (game.pivotImg.height / 2)), game.l1x1, game.l1y1);
        //To Display Axis:		
		//game.oDashTxtArr[18].setText(((game.fir_axis[0]) / game.oneMetinPix).toFixed(2));	
		game.oDashTxtArr[18].setText(((game.rodLength/300) * game.fir_axis[0]).toFixed(2));
		//game.oDashTxtArr[18].setText(Math.round((game.rodLength/300) * game.fir_axis[0] * 100)/100);
    }
    game.second_arrow = function () {
        game.sec_axis = game.dist(game.pivotImg.x + game.pivotImg.width / 2, game.pivotImg.y + game.pivotImg.height / 2, game.l2x1, game.l2y1);
        //To Display Axis:
        //game.oDashTxtArr[18].setText(((game.sec_axis[0]) / game.oneMetinPix).toFixed(2));
		game.oDashTxtArr[18].setText(((game.rodLength/300) * game.sec_axis[0]).toFixed(2));
    }
    game.third_arrow = function () {
        game.thi_axis = game.dist(game.pivotImg.x + game.pivotImg.width / 2, game.pivotImg.y + game.pivotImg.height / 2, game.l3x1, game.l3y1);
        //To Display Axis:
        //game.oDashTxtArr[18].setText(((game.thi_axis[0]) / game.oneMetinPix).toFixed(2));
		game.oDashTxtArr[18].setText(((game.rodLength/300) * game.thi_axis[0]).toFixed(2));
    }
    game.fourth_arrow = function () {
        game.fou_axis = game.dist(game.pivotImg.x + game.pivotImg.width / 2, game.pivotImg.y + game.pivotImg.height / 2, game.l4x1, game.l4y1);
        //To Display Axis:
        //game.oDashTxtArr[18].setText(((game.fou_axis[0]) / game.oneMetinPix).toFixed(2));
		game.oDashTxtArr[18].setText(((game.rodLength/300) * game.fou_axis[0]).toFixed(2));
    }
    game.fifth_arrow = function () {
        game.fif_axis = game.dist(game.pivotImg.x + game.pivotImg.width / 2, game.pivotImg.y + game.pivotImg.height / 2, game.l5x1, game.l5y1);
        //To Display Axis:
        //game.oDashTxtArr[18].setText(((game.fif_axis[0]) / game.oneMetinPix).toFixed(2));
		game.oDashTxtArr[18].setText(((game.rodLength/300) * game.fif_axis[0]).toFixed(2));
    }
    game.sixth_arrow = function () {
        game.six_axis = game.dist(game.pivotImg.x + game.pivotImg.width / 2, game.pivotImg.y + game.pivotImg.height / 2, game.l6x1, game.l6y1);
        //To Display Axis:
        //game.oDashTxtArr[18].setText(((game.six_axis[0]) / game.oneMetinPix).toFixed(2));
		game.oDashTxtArr[18].setText(((game.rodLength/300) * game.six_axis[0]).toFixed(2));
    }

    //To re-text the values:
    game.retext_values = function () {
        //To Display Angle:
        game.oDashTxtArr[15].setText('0.0');
        //To Display Force
        game.oDashTxtArr[12].setText('0');
        game.oDashTxtArr[18].setText('0.00');
    }

    //===================================================================================================================================
    //MOUSE DRAG method and ONLOAD Method called 
    //=========================================================================================================================
    game.onload_mouseDrag = function () {
        //================================================================================================================
        //To replace Dragger Image on PIVOT image
        //================================================================================================================
        game.axisContainer[0].x = game.pivotImg.x;
        game.axisContainer[0].y = game.pivotImg.y;
        //=================================================================================================================
        //To replace FIRST arrows at At LINE if condition satisfies else setting at original position :
        //=================================================================================================================
        if (game.actorContainer[0].y > game.obj_minX && game.actorContainer[0].y < game.obj_maxX &&
            game.actorContainer[0].x > game.lineEndX && game.actorContainer[0].x < game.lineEndY) {
            game.actorContainer1[0].userDrag();
            game.actorContainer[0].y = game.obj_Ypos;
            game.midPoint1.setLocation(game.actorContainer[0].x, game.actorContainer[0].y);
        } else {
            game.actorContainer[0].x = 530;
            game.actorContainer[0].y = 542;
            game.angle1 = 0;
            game.normalForce1 = 28;
            game.midPoint1.setLocation(game.actorContainer[0].x, game.actorContainer[0].y + 1);
            game.onObjMove(game.actorContainer[0]);
            game.retext_values();
        }
        //=================================================================================================================
        //To replace SECOND arrows at At LINE if condition satisfies else setting at original position:
        //=================================================================================================================
        if (game.actorContainer[1].y > game.obj_minX && game.actorContainer[1].y < game.obj_maxX &&
            game.actorContainer[1].x > game.lineEndX && game.actorContainer[1].x < game.lineEndY) {
            game.actorContainer1[1].userDrag();
            game.actorContainer[1].y = game.obj_Ypos;
            game.midPoint2.setLocation(game.actorContainer[1].x, game.actorContainer[1].y);
        } else {
            game.actorContainer[1].x = 530;
            game.actorContainer[1].y = 562;
            game.angle2 = 0;
            game.normalForce2 = 28;
            game.midPoint2.setLocation(game.actorContainer[1].x, game.actorContainer[1].y + 1);
            game.onObjMove(game.actorContainer[1]);
            game.retext_values();
        }
        //=================================================================================================================
        //To replace THIRD arrows at At LINE if condition satisfies else setting at original position:
        //=================================================================================================================
        if (game.actorContainer[2].y > game.obj_minX && game.actorContainer[2].y < game.obj_maxX &&
            game.actorContainer[2].x > game.lineEndX && game.actorContainer[2].x < game.lineEndY) {
            game.actorContainer1[2].userDrag();
            game.actorContainer[2].y = game.obj_Ypos;
            game.midPoint3.setLocation(game.actorContainer[2].x, game.actorContainer[2].y);
        } else {
            game.actorContainer[2].x = 530;
            game.actorContainer[2].y = 582;
            game.angle3 = 0;
            game.normalForce3 = 28;
            game.midPoint3.setLocation(game.actorContainer[2].x, game.actorContainer[2].y + 1);
            game.onObjMove(game.actorContainer[2]);
            game.retext_values();
        }
        //=================================================================================================================
        //To replace FOURTH arrows at At LINE if condition satisfies else setting at original position:
        //=================================================================================================================
        if (game.actorContainer[3].y > game.obj_minX && game.actorContainer[3].y < game.obj_maxX &&
            game.actorContainer[3].x > game.lineEndX && game.actorContainer[3].x < game.lineEndY) {
            game.actorContainer1[3].userDrag();
            game.actorContainer[3].y = game.obj_Ypos;
            game.midPoint4.setLocation(game.actorContainer[3].x, game.actorContainer[3].y);

        } else {
            game.actorContainer[3].x = 582;
            game.actorContainer[3].y = 542;
            game.angle4 = 0;
            game.normalForce4 = 28;
            game.midPoint4.setLocation(game.actorContainer[3].x, game.actorContainer[3].y + 1);
            game.onObjMove(game.actorContainer[3]);
            game.retext_values();
        }
        //=================================================================================================================
        //To replace FIFTH arrows at At LINE if condition satisfies else setting at original position:
        //=================================================================================================================
        if (game.actorContainer[4].y > game.obj_minX && game.actorContainer[4].y < game.obj_maxX &&
            game.actorContainer[4].x > game.lineEndX && game.actorContainer[4].x < game.lineEndY) {
            game.actorContainer1[4].userDrag();
            game.actorContainer[4].y = game.obj_Ypos;
            game.midPoint5.setLocation(game.actorContainer[4].x, game.actorContainer[4].y);
        } else {
            game.actorContainer[4].x = 582;
            game.actorContainer[4].y = 562;
            game.angle5 = 0;
            game.normalForce5 = 28;
            game.midPoint5.setLocation(game.actorContainer[4].x, game.actorContainer[4].y + 1);
            game.onObjMove(game.actorContainer[4]);
            game.retext_values();
        }
        //=================================================================================================================
        //To replace SIXTH arrows at At LINE if condition satisfies else setting at original position:
        //=================================================================================================================
        if (game.actorContainer[5].y > game.obj_minX && game.actorContainer[5].y < game.obj_maxX &&
            game.actorContainer[5].x > game.lineEndX && game.actorContainer[5].x < game.lineEndY) {
            game.actorContainer1[5].userDrag();
            game.actorContainer[5].y = game.obj_Ypos;
            game.midPoint6.setLocation(game.actorContainer[5].x, game.actorContainer[5].y);
        } else {
            game.actorContainer[5].x = 582;
            game.actorContainer[5].y = 582;
            game.angle6 = 0;
            game.normalForce6 = 28;
            game.midPoint6.setLocation(game.actorContainer[5].x, game.actorContainer[5].y + 1);
            game.onObjMove(game.actorContainer[5]);
            game.retext_values();
        }
        //=================================================================================================================
        //To CALL the USER DRAG METHOD FOR DRAGGING THE OBJECT
        //=================================================================================================================			
        game.onObjMove(this);
        //=================================================================================================================			
    }
    function getAngle(centerX, centerY, leftX, leftY, rightX, rightY) {
        var distance = Math.sqrt(Math.pow((centerX - leftX), 2) + Math.pow((rightY - leftY), 2));
        var angle = Math.atan2(leftY - rightY, leftX - rightX);
        return angle;
    }
    function isClockwise(x, y, x1, y1, x2, y2) {
        if (((x1 - x) * (y2 - y) - (y1 - y) * (x2 - x)) > 0) {
            return false;
        } else {
            return true;
        }
    }   
    //-------------------------------------------------------------------------------------------------------------
    function rotatecalc(ox, oy, px, py, theta) {
        //theta=(Math.PI/180)*theta;
        var rx = ox + (Math.cos(theta) * (px - ox)) - (Math.sin(theta) * (py - oy));
        var ry = oy + (Math.sin(theta) * (px - ox)) + (Math.cos(theta) * (py - oy));
        return [rx, ry];
    }
})();