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
			name: "small",
			namespace: "lib",
			type: "Submarine_Small01",
			props: {
				x: 100.2,
				y: 592.9,
				scaleX:	0.84,
				scaleY: 0.84,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "medium",
			namespace: "lib",
			type: "Submarine_medium01",
			props: {
				x: 390.4,
				y: 585.15,
				scaleX:	0.55,
				scaleY: 0.55,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "big",
			namespace: "lib",
			type: "Submarine_big01",
			props: {
				x: 632.5,
				y: 561,
				scaleX: 0.52,
				scaleY: 0.52,
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
			name: "angle_1",
			namespace: "lib",
			type: "mc_01",
			props: {
				x: 292.3,
				y: 522.2,
				visible:true
			}
		},
		{
			name: "angle_2",
			namespace: "lib",
			type: "mc_02",
			props: {
				x: 528.4,
				y: 522.3,
				visible:true
			}
		},
		{
			name: "angle_3",
			namespace: "lib",
			type: "mc_03",
			props: {
				x: 712.2,
				y: 522.4,
				visible:true
			}
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
				y: 730,
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
				y: 730.4,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		}, {
			name:"stepper",
			type:"NumericStepper",
			min:-3600,
			max:3600,
			step:0.1,
			value:90,
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
				x:611,
				y:726,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"angleValue",
			type:"Text",
			namespace:"createjs",
			props:{
				x:688,
				y:754,
				font:"bold 18px Arial",
				text:"0.0",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"angleText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:523,
				y:753,
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
				x:761,
				y:753,
				font:"bold 18px Arial",
				text:"degrees",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"instruction1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:224,
				y:734,
				font:"bold 16px Arial",
				text:"Use the angles of refraction given to determine",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"instruction2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:224,
				y:754,
				font:"bold 16px Arial",
				text:"angle of incidence for the helicopter laser to hit",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"instruction3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:224,
				y:774,
				font:"bold 16px Arial",
				text:"each sub. Set angle and press      .",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name: "instruction4",
			namespace: "lib",
			type: "mc_play01",
			props: {
				x: 337,
				y: 784,
				scaleX: 1,
				scaleY: 1,
			}
		},
		{
			name:"correct1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:224,
				y:743,
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
				x:224,
				y:767,
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
				x:224,
				y:743,
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
				x:224,
				y:767,
				font:"bold 16px Arial",
				text:"Press       to try again.",
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
				x: 191,
				y: 766,
				scaleX: 0.379,
				scaleY: 0.38,
				visible:false
			}
		},
		{
			name:"helAngle1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:380,
				y:245,
				font:"bold 18px Arial",
				text:"65.4",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"helAngle2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:605,
				y:245,
				font:"bold 18px Arial",
				text:"54",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"helAngle3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:785,
				y:245,
				font:"bold 18px Arial",
				text:"33.2",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"subAngle1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:295,
				y:470,
				font:"bold 18px Arial",
				text:"43.1",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"subAngle2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:525,
				y:470,
				font:"bold 18px Arial",
				text:"37.5",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"subAngle3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:725,
				y:470,
				font:"bold 18px Arial",
				text:"24.3",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name: "cross_h",
			namespace: "lib",
			type: "cross",
			props: {
				x: 949,
				y: 85.1,
				visible:false
				
			}
		},
		{
			name: "cross_s_1",
			namespace: "lib",
			type: "cross",
			props: {
				x: 949,
				y: 85.1,
				visible:false
				
			}
		},
		{
			name: "cross_s_2",
			namespace: "lib",
			type: "cross",
			props: {
				x: 949,
				y: 85.1,
				visible:false
			}
		},
		{
			name: "cross_s_3",
			namespace: "lib",
			type: "cross",
			props: {
				x: 949,
				y: 85.1,
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
