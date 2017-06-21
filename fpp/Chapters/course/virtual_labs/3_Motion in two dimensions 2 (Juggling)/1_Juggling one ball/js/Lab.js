var Lab = (function()
{
    function Activity()
    {
        createjs.Container.call(this);

        this.TIMESTEP = 0.05;
        this.time=0.0;//-- main Timer

        this.blueBall = 
        {
            xVelocity: 0.0, //-- xVelocityR
            yVelocity: 0.0, //-- yVelocityR
            firstTrip: true, //-- firstTripR
            flagEnd: 1, //-- flagEndR
            startX: 410, //-- startXR
            startY: 658, //-- startYR
            attachBall: false, //-- attachBallR
            attachBall2: false, //-- attachBallR1
            yVelocityDisp: null, //-- yVelocityDispR
            yPos : 658,
            xPos : 410,
            startTimeStamp: 0, //-- startTimeStampR
            pausedTime: 0, //-- pausedTimeR
        };

        this.initialVelocityX = 0.0; //-- xVelocity
        this.initialVelocityY = 0.0; //-- yVelocity

        this.tempVelocityVertical = 0.0; //-- tempVelocityVertical
        this.tempVelocityHorizontal = 0.0; //-- tempVelocityHorizontal

        this.pausedStartTime = 0.0; //-- pausedStartTime
        this.pausedEndTime = 0.0; //-- pausedEndTime
        this.handTimerInstance = 0.0; //-- handTimerInstance

        this.oneTime = false; //-- oneTime
        this.leftHandCtr = 0; //-- leftHandCtrs
        this.rightHandCtr = 0; //-- rightHandCtr

        this.makeTimerDelay = 0; //-- makeTimerDelay;

        this.currentTimeStamp = 0; //-- currentTimeStamp
        this.elapsedTimeInSec = 0; //-- elapsedTimeInSec
        this.timerInstance = 0; //-- timerInstance
        this.oneMtInPx = 148 * 1.34; //-- oneMtInPx
        this.sx = 0; //-- sx
        this.sy = 0; //-- sy
        this.started = false; //-- started
        this.ispaused = false; //-- ispaused
        this.timeGap = 0; //-- timeGap
        this.currentFrameCounter = 0;

        this.leftHandMovementArray = [
            [410, 668],
            [414, 673],
            [417, 678],
            [424, 679],
            [428, 675],
            [426, 670],
            [419, 668],
            [413, 666],
            [410, 668]
        ];

        this.rightHandMovementArray = [
            [582, 668],
            [574, 673],
            [574, 678],
            [569, 679],
            [568, 675],
            [568, 670],
            [568, 668],
            [574, 666],
            [581, 668],
            [582, 668]//420
        ];
    }

    Activity.prototype = Object.create(createjs.Container.prototype);
    Activity.prototype.constructor = Activity;
    Activity.prototype.startLab = function()
    {
        scope = this;

        this._pauseClicked = pauseClicked.bind(this);
        this._playClicked = playClicked.bind(this);
        this._moveBall = moveBall.bind(this);
        this.reset = this.reset.bind(this);

        this.layout.stepperY.enable().addEventListener("valueChange", function(e)
        {
            scope.layout.velocityY.text = e.currentTarget.value.toFixed(1);
            if (!scope.running)
            {
                scope.initialVelocityY = e.currentTarget.value;
            }
        });

        this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
        this.layout.playButton.enable().addEventListener("click", this._playClicked);
        this.layout.resetButton.enable().addEventListener("click", this.reset);

        this.reset();
    }

    function moveBall()
    {
    	if(this.currentFrameCounter < 9)
    	{
    		var flagEnd;

    		(this.blueBall.xPos > 405 & this.blueBall.xPos < 415) ? flagEnd = 0 : (this.blueBall.xPos > 568 & this.blueBall.xPos < 584) ? flagEnd = 1 : null;
    		
    		if(this.currentFrameCounter == 0)
    			makeImageAnimate(flagEnd, true, this);
    		else
    			makeImageAnimate(flagEnd, false, this);
    	}

    	if(this.elapsedTimeInSec < 0)
		{
			this.elapsedTimeInSec = 0;
		}
		
		if(this.blueBall.firstTripR)
		{
			this.sx = 0;
			this.sy = 0.5 * (-9.8) * (this.elapsedTimeInSec * this.elapsedTimeInSec);
		}
		else
		{
			this.sx = this.blueBall.xVelocity * this.elapsedTimeInSec; 
			this.sy = (this.blueBall.yVelocity * this.elapsedTimeInSec) + (0.5 * (-9.8) * (this.elapsedTimeInSec * this.elapsedTimeInSec));
		}		
		
		//set the y velocity text
		this.blueBall.yVelocityDisp = (this.blueBall.yVelocity +-9.8 * this.elapsedTimeInSec).toFixed(1) * 1;

		if(!this.blueBall.attachBall)
		{
			this.blueBall.xPos = this.blueBall.startX + (this.sx * this.oneMtInPx);
			this.blueBall.yPos = this.blueBall.startY - (this.sy * this.oneMtInPx);

			this.layout.blueBall.x = this.blueBall.xPos;
			this.layout.blueBall.y = this.blueBall.yPos;
		}
		else
		{
			if(this.blueBall.flagEndR==0)
			{
				this.layout.blueBall.x = this.layout.leftHand.x;
				this.layout.blueBall.y = this.layout.leftHand.x - 12;
			}
			else
			{
				this.layout.blueBall.x = this.layout.rightHand.x;
				this.layout.blueBall.y = this.layout.rightHand.y - 12;
			}
		}

		// Blue ball condition
		var angle = (180/Math.PI)*Math.abs(Math.atan(this.blueBall.yVelocityDisp*1/ this.blueBall.xVelocity));
		
		if(this.blueBall.xPos >= 568 && this.blueBall.xPos <= 584 && this.blueBall.yVelocityDisp < (-this.blueBall.yVelocity+0.4) && this.blueBall.yVelocityDisp > (-this.blueBall.yVelocity-0.4) && this.blueBall.flagEnd==0)
		{
			this.blueBall.startTimeStamp = 0.0 //new Date().getTime();
			this.blueBall.pausedTime = 0;
			this.blueBall.xVelocity = -Math.abs(this.blueBall.xVelocity);
			this.blueBall.startX = 410;
			this.blueBall.flagEnd = 0;
			this.blueBall.attachBall = true;
			this.blueBall.attachBall2 = true;
			makeImageAnimate(1,true,this);
		}
		else if(this.blueBall.xPos >= 405 && this.blueBall.xPos <= 415 && this.blueBall.yPos >= 658 && this.blueBall.flagEnd == 1)
		{
			this.blueBall.startTimeStamp = 0.0;//new Date().getTime();
			
			if(this.blueBall.firstTrip)
			{
				this.blueBall.firstTripR = false;
			}

			this.blueBall.pausedTime = 0;
			this.blueBall.xVelocity = Math.abs(this.blueBall.xVelocity);
			this.blueBall.startX = 410;

			this.currentFrameCounter = 0;
				this.currentTimeStamp = 0;
			
			if(this.blueBall.xVelocity <= 0.1)
			{					
				makeImageAnimate(0, true, this);
			}
			else if(this.blueBall.xVelocity < 0.7 && this.blueBall.yVelocity < 0.7)
			{
				this.blueBall.xVelocity = 0;
				this.blueBall.yVelocity = 0;
				makeImageAnimate(0, true, this);
			}
			else if(this.blueBall.yVelocity == 0.0 && this.blueBall.xVelocity > 0.1)
			{
				this.blueBall.xVelocity = 0;
				this.blueBall.yVelocity = 0;
				makeImageAnimate(0, true, this);
			}
			else 
			{
				this.blueBall.attachBall = true;
				this.blueBall.attachBall2 = true;
				makeImageAnimate(this.blueBall.flagEnd, true, this);
			}
			this.blueBall.flagEnd = 1;
		}
		else if((this.layout.blueBall.x + 8) >= (412.5-8) &&(this.layout.blueBall.x + 8) <= (422.5+8))
		{
			//console.log("inside else ");
		}


		this.time = this.time + this.TIMESTEP;
		
		if(this.time > 99.99)
		{
			this.time = 0;
		}

    	this.currentTimeStamp = this.currentTimeStamp + this.TIMESTEP;

		//===== Blue ball
		this.elapsedTimeInSec = this.time;
        
        this.currentFrameCounter++;
       	this.layout.time.text = this.time.toFixed(2);

    	if (this.layout.blueBall.y > 658 || this.initialVelocityY == 0)
        {
         	this.currentFrameCounter = 0;
        	this.currentTimeStamp = 0;

            this.layout.blueBall.y = 658;

            //-- to continue loop comment below lines
            // Ticker.remove(this._moveBall);
			createjs.Ticker.removeEventListener("tick", this._moveBall);
            this.layout.playButton.enable().visible = true;

            var calcTime = (2*this.initialVelocityY/9.8).toFixed(4)*1
            
            if(this.time.toFixed(2) * 1 != calcTime)
            {
            	this.layout.time.text = calcTime.toFixed(2);
            }
        }

    }
    function makeImageAnimate(flagEnd,makeZero,_thisRef)
    {
    	var Y=0;
		var X=0;

		if(makeZero)
		{
			if(_thisRef.rightHandCtr>0)
			{
				_thisRef.rightHandCtr=0;
			}
			
			if(_thisRef.leftHandCtr>0)
			{
				_thisRef.leftHandCtr=0;
			}		
		}
				
    	if(flagEnd==0)
		{
			
			if(_thisRef.leftHandCtr == _thisRef.leftHandMovementArray.length)
			{
				//console.log("inside makeImageAnimate if 2");
				//Ticker.cancel();
			}
			else
			{
				_thisRef.layout.leftHand.x = _thisRef.leftHandMovementArray[_thisRef.leftHandCtr][0];
				_thisRef.layout.leftHand.y = _thisRef.leftHandMovementArray[_thisRef.leftHandCtr][1];
				_thisRef.leftHandCtr++;
			}

			//Release the ball
			if(_thisRef.leftHandCtr>_thisRef.leftHandMovementArray.length/2)
			{
				if(_thisRef.blueBall.flagEnd == 0)
				{
					_thisRef.blueBall.attachBall = false;
				}
			}
			
			if(_thisRef.leftHandCtr >= _thisRef.leftHandMovementArray.length)
			{
				if(flagEnd==0)
				{
					_thisRef.attachBall2 = false;
				}
			}
		}
		if(flagEnd==1)
		{
			if(_thisRef.rightHandCtr == _thisRef.rightHandMovementArray.length)
			{
				// timertask_instance.cancel();
			}
			else
			{
				_thisRef.layout.rightHand.x = _thisRef.rightHandMovementArray[_thisRef.rightHandCtr][0];
				_thisRef.layout.rightHand.y = _thisRef.rightHandMovementArray[_thisRef.rightHandCtr][1];
				_thisRef.rightHandCtr++;
			}	

			//Release the ball
			if(_thisRef.rightHandCtr > _thisRef.rightHandMovementArray.length/2){

				if(_thisRef.blueBall.flagEnd == 1)
				{
					_thisRef.blueBall.attachBall = false;
				}
				// if(flagEndG==1){
				// 	attachBallG=false;
				// }
				// if(flagEndB==1){
				// 	attachBallB=false;
				// }
				
			}
			
			if(_thisRef.rightHandCtr>=_thisRef.rightHandMovementArray.length){

				if(flagEnd==1)
				{
					_thisRef.blueBall.attachBall2=false;
				}
				// if(flagEndG==1){
				// 	attachBallG1=false;
				// }
				// if(flagEndB==1){
				// 	attachBallB1=false;
				// }
				
			}
		}
    }

    function playClicked(e)
    {
    	// console.log(this.ispaused);
    	if(!this.ispaused)
    	{
	    	this.reset();

	        this.blueBall.startTimeStamp = 0.0;

			this.blueBall.xVelocity = this.initialVelocityX;
			this.blueBall.yVelocity = this.initialVelocityY;

			this.layout.stepperY.disable();
		

	        if(this.initialVelocityY > 0)
	        {
		        // Ticker.add(
		        // {
		        //     fps:60,
		        //     callback: this._moveBall
		        // });
				createjs.Ticker.addEventListener("tick", this._moveBall);
	    	}
	    	else
	    	{
	    		this.layout.playButton.enable().visible = true;
	    	}
    	}
    	else
    	{
    		this.ispaused = false;
    		// Ticker.add(
	        // {
	        //     fps:60,
	        //     callback: this._moveBall
	        // });
			createjs.Ticker.addEventListener("tick", this._moveBall);
    	}

    	this.layout.pauseButton.enable().visible = true;
        this.layout.playButton.visible = false;
		this.layout.velocityX.text = "0.0";
    }

    function pauseClicked(e)
    {
        this.ispaused = true;
        this.layout.pauseButton.visible = false;
        this.layout.playButton.enable().visible = true;
        // Ticker.remove(this._moveBall);
		createjs.Ticker.removeEventListener("tick", this._moveBall);

    }

    Activity.prototype.reset = function()
    {
        var scope = this;
        
		this.layout.velocityX.text = "---";

        this.tempVelocityVertical = 0.0; //-- tempVelocityVertical
        this.tempVelocityHorizontal = 0.0; //-- tempVelocityHorizontal

        this.pausedStartTime = 0.0; //-- pausedStartTime
        this.pausedEndTime = 0.0; //-- pausedEndTime
        this.handTimerInstance = 0.0; //-- handTimerInstance

        this.oneTime = false; //-- oneTime
        this.leftHandCtr = 0; //-- leftHandCtrs
        this.rightHandCtr = 0; //-- rightHandCtr

        this.makeTimerDelay = 0; //-- makeTimerDelay;

        this.currentTimeStamp = 0; //-- currentTimeStamp
        this.elapsedTimeInSec = 0; //-- elapsedTimeInSec
        this.timerInstance = 0; //-- timerInstance
        this.oneMtInPx = 150 * 1.34; //-- oneMtInPx
        this.sx = 0; //-- sx
        this.sy = 0; //-- sy
        this.started = false; //-- started
        this.ispaused = false; //-- ispaused
        this.timeGap = 0; //-- timeGap
        this.currentFrameCounter = 0;

        this.time = 0.00;
        this.TIMESTEP = 0.03;

        this.blueBall = 
        {
            xVelocity: 0.0, //-- xVelocityR
            yVelocity: 0.0, //-- yVelocityR
            firstTrip: true, //-- firstTripR
            flagEnd: 1, //-- flagEndR
            startX: 410, //-- startXR
            startY: 658, //-- startYR
            attachBall: false, //-- attachBallR
            attachBall2: false, //-- attachBallR1
            yVelocityDisp: null, //-- yVelocityDispR
            yPos : 658,
            xPos : 410,
            startTimeStamp: 0, //-- startTimeStampR
            pausedTime: 0, //-- pausedTimeR
        };

        this.layout.blueBall.x = 410;
        this.layout.blueBall.y = 658;

        this.layout.pauseButton.visible = false;
        this.layout.playButton.enable().visible = true;

        this.layout.stepperY.enable();

        this.layout.time.text = this.time.toFixed(2);
        // Ticker.remove(this._moveBall);
		createjs.Ticker.removeEventListener("tick", this._moveBall);
    }

    return Activity;
})();