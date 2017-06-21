var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "bg",
			props: {
				x: 544.2,
				y: 387.5,
			}
		},
	],
	foreground: [
		{
			name: "left",
			namespace: "lib",
			type: "Submarine_medium01",
			props: {
				x: 225.579,
				y: 357.25,
				scaleX :0.89,
				scaleY :0.89,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "right",
			namespace: "lib",
			type: "Submarine_big01",
			props: {
				x: 916.4,
				y: 455.35,
				scaleX : 0.66,
				scaleY : 0.66,
				regX : 65,
				regY : 16.5
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
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name:"arrow1Line",
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
			name: "playerWin",
			namespace: "lib",
			type: "InstructionText",
			props: {
				x: 306.55,
				y: 725,
				visible:false
			}
		},
		{
			name: "computerWin",
			namespace: "lib",
			type: "InstructionText4",
			props: {
				x: 306.55,
				y: 725,
				visible:false
			}
		},
		{
			name: "patch",
			namespace: "lib",
			type: "Button_Set_1",
			props: {
				x: -7,
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
				y: 730.4,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		},
		{
			name: "resetButton",
			type: "Button",
			up: "replayIconN",
			over: "replayIconO",
			down: "replayIconC",
			props: {
				x: 944.4,
				y: 731,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		}, 
		{
			name:"stepper",
			type:"NumericStepper",
			min:-3600,
			max:3600,
			step:-0.1,
			value:225,
			inc:{
				up:"incN",
				over:"incO",
				down:"incD",
			},
			dec:{
				up:"decN",
				over:"decO",
				down:"decD",
			},
			gap:1,
			props:{
				x:186,
				y:727,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"angleValue",
			type:"Text",
			namespace:"createjs",
			props:{
				x:270,
				y:754.4,
				font:"bold 18px Arial",
				text:"45.0",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"angleText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:98,
				y:754.4,
				font:"bold 18px Arial",
				text:"Angle of incidence",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"angleUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:346,
				y:754.4,
				font:"bold 18px Arial",
				text:"degrees",
				textAlign:"center",
				color:"#FFFFFF"
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
