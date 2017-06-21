var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "Bg",
			props: {
				x: 603.8,
				y: 506.9,
			}
		},
	],
	foreground: [
		{
			name: "left",
			namespace: "lib",
			type: "Submarine_Small01",
			props: {
				x: 278.2,
				y: 657.7,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "middle",
			namespace: "lib",
			type: "Submarine_big01",
			props: {
				x: 600.9,
				y: 666.8,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "right",
			namespace: "lib",
			type: "Submarine_medium01",
			props: {
				x: 960.2,
				y: 630.7,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "helicopterLeft",
			namespace: "lib",
			type: "Helicopter",
			props: {
				x: 64.4,
				y: 72.6,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "helicopterMiddle",
			namespace: "lib",
			type: "Helicopter_Small",
			props: {
				x: 396.4,
				y: 66.1,
				rotation: -5
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "helicopterRight",
			namespace: "lib",
			type: "Helicopter2",
			props: {
				x: 740.9,
				y: 73.1,
				rotation: 11.7
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name:"arrowLeft",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:927,
				y:185,
				regX:7.5,
				regY:7.5,
				scaleX:1.4,
				scaleY:1.4,
			}
			
		},
		{
			name:"arrowLeftLine",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"arrowMiddle",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:927,
				y:185,
				regX:7.5,
				regY:7.5,
				scaleX:1.4,
				scaleY:1.4,
			}
			
		},
		{
			name:"arrowMiddleLine",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"arrowRight",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:927,
				y:185,
				regX:7.5,
				regY:7.5,
				scaleX:1.4,
				scaleY:1.4,
			}
			
		},
		{
			name:"arrowRightLine",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"player_1",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"player_2",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name: "correct",
			namespace: "lib",
			type: "InstructionText2",
			props: {
				x: 316.55,
				y: 720,
				visible:false
			}
		},
		{
			name: "incorrect",
			namespace: "lib",
			type: "InstructionText",
			props: {
				x: 316.55,
				y: 721,
				visible:false
			}
		},
		{
			name: "patch",
			namespace: "lib",
			type: "Button_Set_1",
			props: {
				x: -5,
				y: 723,
				scaleX: 1.25,
				scaleY: 1.25,
			}
		},
		{
			name: "goButton",
			type: "Button",
			up: "playIconN",
			over: "playIconO",
			down: "playIconC", 
			props: {
				x: 871,
				y: 731,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		}, {
			name: "resetButton",
			type: "Button",
			up: "replayIconN",
			over: "replayIconO",
			down: "replayIconC",
			props: {
				x: 945,
				y: 731,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		},
		{
			name:"velocityText1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:296-230-2,
				y:753,
				font:"bold italic 18px Arial",
				text:"V",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityText2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:485-230-2,
				y:753,
				font:"bold italic 18px Arial",
				text:"V",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityText3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:676-230-2,
				y:753,
				font:"bold italic 18px Arial",
				text:"V",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityTextN1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:309-230-2,
				y:758,
				font:"bold italic 13px Arial",
				text:"1",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityTextN2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:498-230-2,
				y:758,
				font:"bold italic 13px Arial",
				text:"2",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityTextN3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:688-230-2,
				y:758,
				font:"bold italic 13px Arial",
				text:"3",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocity1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:341-230-2,
				y:753,
				font:"bold 18px Arial",
				text:"0.0",
				textAlign:"center",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocity2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:529-230-2,
				y:753,
				font:"bold 18px Arial",
				text:"0.0",
				textAlign:"center",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocity3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:719-230-2,
				y:753,
				font:"bold 18px Arial",
				text:"0.0",
				textAlign:"center",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityLeftExpo",
			type:"Text",
			namespace:"createjs",
			props:{
				x:359-230-2,
				y:753,
				font:"bold 18px Arial",
				text:"x 10",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityMiddleExpo",
			type:"Text",
			namespace:"createjs",
			props:{
				x:317-2,
				y:753,
				font:"bold 18px Arial",
				text:"x 10",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityRightExpo",
			type:"Text",
			namespace:"createjs",
			props:{
				x:507-2,
				y:753,
				font:"bold 18px Arial",
				text:"x 10",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityLeftExponent",
			type:"Text",
			namespace:"createjs",
			props:{
				x:166-2,
				y:748,
				font:"bold 13px Arial",
				text:"8",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityMiddleExponent",
			type:"Text",
			namespace:"createjs",
			props:{
				x:354-2,
				y:748,
				font:"bold 13px Arial",
				text:"8",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityRightExponent",
			type:"Text",
			namespace:"createjs",
			props:{
				x:544-2,
				y:748,
				font:"bold 13px Arial",
				text:"8",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityLeftUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:175-2,
				y:753,
				font:"bold 18px Arial",
				text:"m/s",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityMiddleUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:363-2,
				y:753,
				font:"bold 18px Arial",
				text:"m/s",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityRightUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:553-2,
				y:753,
				font:"bold 18px Arial",
				text:"m/s",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"instructionU1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:212,
				y:681,
				font:"bold 16px Arial",
				text:"You scored the most hits and defeated",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"instructionU2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:212,
				y:702,
				font:"bold 16px Arial",
				text:"the computer. Press       to try again.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name: "instructionU3",
			namespace: "lib",
			type: "Symbol7",
			props: {
				x: 233,
				y: 701,
				scaleX: 0.379,
				scaleY: 0.38,
				visible:false
			}
		},
		{
			name:"instructionC1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:212,
				y:681,
				font:"bold 16px Arial",
				text:"The computer scored the most hits and",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"instructionC2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:212,
				y:702,
				font:"bold 16px Arial",
				text:"defeated you. Press       to try again.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name: "instructionC3",
			namespace: "lib",
			type: "Symbol7",
			props: {
				x: 232,
				y: 700,
				scaleX: 0.379,
				scaleY: 0.38,
				visible:false
			}
		},
		{
			name: "blast",
			namespace: "lib",
			type: "mc_boom",
			props: {
				x: 949,
				y: 85.1,
				regX : 30.6,
				regY : 30.7,
				visible:false
			}
		},
	]
}
