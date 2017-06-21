var layout = 
{
    background: 
    [
	    {
	        name: "bg",
	        namespace: "lib",
	        type: "mc_bg",
	        transform: [132.5, 436.4, 1, 1, 0, 0, 0, 133.3, 436.4],
	    },
	    {
	        name: "juggler",
	        namespace: "lib",
	        type: "mc_juggler",
	        transform: [497.4, 604.8, 1, 1, 0, 0, 0, 112.9, 203.5],
	    },
	    {
	        name: "patch",
	        namespace: "lib",
	        type: "mc_btn_patch",
	        transform: [511.6, 766.6, 1, 1, 0, 0, 0, 512.6, 31.5],
	    },
	    {
	        name: "Unit1",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 178,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "m/s",
	            color:"white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    }/*,	    	    
	    {
	        name: "velocityTextXinitial",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 55,
	            y: 750,
	            font: "bold 18px Arial",
	            text: "Initial",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    }*/,
	    {
	        name: "textX",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 30,
	            y: 762,
	            font: "Italic 18px Arial",
	            text: "x",
	            color:"white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "velocityTextX",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 75,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "velocity",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "velocityTextYinitial",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 345,
	            y: 752,
	            font: "bold 18px Arial",
	            text: "Initial",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "textY",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 382,
	            y: 752,
	            font: "Italic 18px Arial",
	            text: "y",
	            textAlign: "center",
	            color:"white",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "velocityTextY",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 355,
	            y: 752+21,
	            font: "bold 18px Arial",
	            text: "velocity",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "Unit2",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 530,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "m/s",
	            color:"white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
    	{
	        name: "TimeIntervalTxt1",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 588,
	            y: 752,
	            font: "bold 18px Arial",
	            text: "Time",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "TimeIntervalTxt2",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 600,
	            y: 752+21,
	            font: "bold 18px Arial",
	            text: "interval",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "TimeIntervalsecUnit",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 756,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "s",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
    	},
    ],
    foreground: 
    [
	    {
	        name: "resetButton",
	        type: "Button",
	        up: "replayIconN",
	        over: "replayIconO",
	        down: "replayIconC",
	        props:
	        {
	            x:943,
				y:730,
	            scaleX: 0.5 * 1.25,
	            scaleY: 0.5 * 1.25,
	        }
	    },
	    {
	        name: "greenBall",
	        type: "mc_green_ball",
	        namespace: "lib",
	        transform: [410, 666, 1, 1, 0, 0, 0, 16.1, 16.1]
	    },
	    {
	        name: "redBall",
	        type: "mc_red_ball",
	        namespace: "lib",
	        transform: [410, 666, 1, 1, 0, 0, 0, 16.1, 16.1]
	    },
	    {
	        name: "leftHand",
	        namespace: "lib",
	        type: "mc_lefthand",
	        transform: [409.3, 668, 1, 1, 0, 0, 0, 21.3, 15.5],
	    },
	    {
	        name: "rightHand",
	        namespace: "lib",
	        type: "mc_righthand",
	        transform: [582.7, 668, 1, 1, 0, 0, 0, 21.3, 15.5],
	    },
	    {
	        name: "pauseButton",
	        type: "Button",
	        up: "pauseIconN",
	        over: "pauseIconO",
	        down: "pauseIconC",
	        props:
	        {
	            x:869,
				y:730,
	            scaleX: 0.5 * 1.25,
	            scaleY: 0.5 * 1.25,
	        }
	    },
	    {
	        name: "playButton",
	        type: "Button",
	        up: "playIconN",
	        over: "playIconO",
	        down: "playIconC",
	        props:
	        {
	            x:869,
				y:730,
	            scaleX: 0.5 * 1.25,
	            scaleY: 0.5 * 1.25
	        }
	    },
	    {
	        name: "time",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 257,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "0.2",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
     	{
	        name: "timeInterval",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 714,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "0.2",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "velocityY",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 479,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "0.0",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "velocityX",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 134,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "0.0",
	            color:"white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "stepperY",
	        type: "NumericStepper",
	        value: 0,
	        min: 0,
	        max: 10,
	        step: 0.1,
	        inc:
	        {
	            up: "incN",
	            over: "incO",
	            down: "incD",
	        },
	        dec:
	        {
	            up: "decN",
	            over: "decO",
	            down: "decD",
	        },
	        gap: 1,
	        props:
	        {
	            x: 398,
	            y: 725,
	            scaleX: 0.6,
	            scaleY: 0.6,
	        }
	    },
	    {
	        name: "stepperT",
	        type: "NumericStepper",
	        value: 0,
	        min: 0.2,
	        max: 5,
	        step: 0.1,
	        inc:
	        {
	            up: "incN",
	            over: "incO",
	            down: "incD",
	        },
	        dec:
	        {
	            up: "decN",
	            over: "decO",
	            down: "decD",
	        },
	        gap: 1,
	        props:
	        {
	            x: 638,
	            y: 725,
	            scaleX: 0.6,
	            scaleY: 0.6,
	        }
	    }, 
    ]
}