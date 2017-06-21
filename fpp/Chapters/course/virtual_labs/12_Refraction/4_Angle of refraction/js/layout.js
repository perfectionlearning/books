var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "bg",
			props: {
				x: 387,
				y: 421.3,
			}
		},
	],
	foreground: [
		{
			name: "medium",
			namespace: "lib",
			type: "Submarine_Medium",
			props: {
				x: 427.6,
				y: 585.15,
				scaleX:	0.58,
				scaleY: 0.58,
				regX: 21.054,
				regY:5.365,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "helicopter",
			namespace: "lib",
			type: "Helicopter",
			props: {
				x: 949,
				y: 85.1,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name:"arrow1",
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
			name:"arrow1Line",
			type:"Shape",
			namespace:"createjs",				
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
				x: 872,
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
			name:"helAngle",
			type:"Text",
			namespace:"createjs",
			props:{
				x:605,
				y:275,
				font:"bold 18px Arial",
				text:"Angle 1",
				textAlign:"left",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"subAngle",
			type:"Text",
			namespace:"createjs",
			props:{
				x:525,
				y:470,
				font:"bold 18px Arial",
				text:"Angle 2",
				textAlign:"right",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"helAngle1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:605,
				y:275,
				font:"bold 18px Arial",
				text:"Angle 2",
				textAlign:"left",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"subAngle1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:525,
				y:470,
				font:"bold 18px Arial",
				text:"Angle 1",
				textAlign:"right",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"verticalLine",
			type:"Text",
			namespace:"createjs",
			props:{
				x:605,
				y:275,
				font:"bold 18px Arial",
				text:"Line 1",
				textAlign:"left",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"horizontalLine",
			type:"Text",
			namespace:"createjs",
			props:{
				x:525,
				y:470,
				font:"bold 18px Arial",
				text:"Line 2",
				textAlign:"right",
				color:"#000000",
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
		{
			name: "correct",
			namespace: "lib",
			type: "InstructionText",
			props: {
				x: 193.25,
				y: 772.6,
				visible:false
			}
		},
		{
			name: "incorrect",
			namespace: "lib",
			type: "InstructionTextcopy",
			props: {
				x: 189.65,
				y: 772.6,
				visible:false
			}
		},
		{
			name:"correct1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:235,
				y:745,
				font:"bold 16px Arial",
				text:"Nice shot!",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"correct2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:235,
				y:764,
				font:"bold 16px Arial",
				text:"You defeated the computer.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"incorrect1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:225,
				y:745,
				font:"bold 16px Arial",
				text:"The computer defeated you.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"incorrect2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:225,
				y:764,
				font:"bold 16px Arial",
				text:"Press       to play again.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},		
		{
			name: "incorrect3",
			namespace: "lib",
			type: "Symbol7",
			props: {
				x: 186,
				y: 763,
				scaleX: 0.379,
				scaleY: 0.38,
				visible:false
			}
		},
	]
}
