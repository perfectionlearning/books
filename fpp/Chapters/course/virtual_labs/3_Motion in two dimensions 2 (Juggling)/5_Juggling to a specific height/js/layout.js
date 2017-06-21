var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "mc_bg",
			transform:[132.5,436.4,1,1,0,0,0,133.3,436.4],
		},{
			name: "juggler",
			namespace: "lib",
			type: "mc_juggler",
			transform:[500.2,647.9,0.393,0.393,0,0,0,112.9,203.5],
		},{
			name: "whitepatch",
			namespace: "lib",
			type: "mc_whitePatch",
			transform:[500,700.7,1,1,0,0,0,88.8,21.5],
		},{
			name: "patch",
			namespace: "lib",
			type: "mc_btn_patch",
			transform:[511.6,766.6,1,1,0,0,0,512.6,31.5],
		},
	    {
	        name: "xDisplacement",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 474,
	            y: 705,
	            font: "bold Italic 18px Arial",
	            text: "x",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "xDisplacementBold",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 516,
	            y: 705,
	            font: "bold 18px Arial",
	            text: " = 1.1 m",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "Unit1",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 338,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "m/s",
	            color:"white",
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
	            x: 580,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "m/s",
	            color:"white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "textX",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 433,
	            y: 752,
	            font: "Italic 18px Arial",
	            text: "x",
	            color:"white",
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
	            x: 198,
	            y: 752,
	            font: "Italic 18px Arial",
	            text: "y",
	            textAlign: "center",
	            color:"white",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "velocityTextX",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 405,
	            y: 752+21,
	            font: "bold 18px Arial",
	            text: "velocity",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "velocityTextXinitial",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 395,
	            y: 752,
	            font: "bold 18px Arial",
	            text: "Initial",
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
	            x: 160,
	            y: 752,
	            font: "bold 18px Arial",
	            text: "Initial",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "velocityTextY",
	        namespace: "createjs",
	        type: "Text",
	        props:
	        {
	            x: 170,
	            y: 752+21,
	            font: "bold 18px Arial",
	            text: "velocity",
	            color: "white",
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
	            x: 635,
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
	            x: 648,
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
	            x: 810,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "s",
	            color: "white",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
    	}
	],
	foreground: [{
	        name: "resetButton",
	        type: "Button",
	        up: "replayIconN",
	        over: "replayIconO",
	        down: "replayIconC",
	        props:{
	            x:943,
				y:730,
	            scaleX: 0.5 * 1.25,
	            scaleY: 0.5 * 1.25,
	        }
	    },{
			name:"ring1",
			type:"mc_rightside_ring",
			namespace:"lib",
			transform:[505,293.8,1,1,0,0,0,8.8,45.6]
		},{
			name:"greendBall",
			type:"mc_green_ball",
			namespace:"lib",
			transform:[466,669,0.365,0.365,0,0,0,16.1,16.2]
		},{
			name:"blueBall",
			type:"mc_blue_ball",
			namespace:"lib",
			transform:[466,669,0.365,0.365,0,0,0,16.1,16.2]
		},{
			name:"redBall",
			type:"mc_red_ball",
			namespace:"lib",
			transform:[466,669,0.365,0.365,0,0,0,16.1,16.2]
		},{
			name:"ring2",
			type:"mc_leftside_ring",
			namespace:"lib",
			transform:[487.2,293.8,1,1,0,0,0,10.4,45.6]
		},{
			name:"mc_stick",
			type:"mc_stick",
			namespace:"lib",
			transform:[496.8,129,1,1,0,0,0,4.8,129.8]
		},{
			name:"mc_animation",
			type:"mc_animation",
			namespace:"lib",
			transform:[497,169.3,1,1,0,0,0,19.2,170.1]
		},{
			name: "leftHand",
			namespace: "lib",
			type: "mc_lefthand",
			props:{
				x:465.6,
				y:672.5,
				scaleX:0.55,
				scaleY:0.393,
				regX:21,
				regY:16
			}
		},{
			name: "rightHand",
			namespace: "lib",
			type: "mc_righthand",
			props:{
				x:533.9,
				y:672.1,
				scaleX:0.55,
				scaleY:0.393,
				regX:21,
				regY:16
			}
			// transform:[533.9,672.1,0.393,0.393,0,0,0,21.5,15.6],
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
	            x: 70,
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
	            x: 769,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "0.2",
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
	            x: 529,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "0.0",
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
	            x: 289,
	            y: 762,
	            font: "bold 18px Arial",
	            text: "0.0",
	            textAlign: "center",
	            textBaseline: "middle"
	        }
	    },
	    {
	        name: "stepperY",
	        type: "NumericStepper",
	        value: 0,
	        min: 0,
	        max: 15,
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
	            x: 212,
	            y: 726,
	            scaleX: 0.6,
	            scaleY: 0.6,
	        }
	    },
	    {
	        name: "stepperX",
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
	            x: 450,
	            y: 726,
	            scaleX: 0.6,
	            scaleY: 0.6,
	        }
	    },
	    {
	        name: "stepperT",
	        type: "NumericStepper",
	        value: 0.2,
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
	            x: 690,
	            y: 726,
	            scaleX: 0.6,
	            scaleY: 0.6,
	        }
	    },
	]
}
