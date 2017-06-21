var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "Bg",
			props: {
				x: 458.7,
				y: 470.5,
			}
		},
	],
	foreground: [
		{
			name: "left",
			namespace: "lib",
			type: "Submarine_Small01",
			props: {
				x: 223.5,
				y: 686.8,
				scaleX:	0.84,
				scaleY: 0.84,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "middle",
			namespace: "lib",
			type: "Submarine_medium01",
			props: {
				x: 604.05,
				y: 627.8,
				scaleX:	0.58,
				scaleY: 0.58,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "right",
			namespace: "lib",
			type: "Submarine_big01",
			props: {
				x: 889.9,
				y: 574.35,
				scaleX: 0.52,
				scaleY: 0.52,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "helicopterLeft",
			namespace: "lib",
			type: "Helicopter",
			props: {
				x: 94.4,
				y: 53.1,
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "helicopterMiddle",
			namespace: "lib",
			type: "Helicopter_Small",
			props: {
				x: 427.9,
				y: 108.1,
				rotation: -5
			},
			cache: {x: -100, y: -30, width: 220, height: 100, scale: 2}
		},
		{
			name: "helicopterRight",
			namespace: "lib",
			type: "Helicopter2",
			props: {
				x: 921.4,
				y: 55.65,
				rotation: -11
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
				x: 873,
				y: 730,
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
				x: 946,
				y: 730,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		},
		{
			name: "instruction4",
			namespace: "lib",
			type: "mc_play01",
			props: {
				x: 120,
				y: 761,
				scaleX: 1,
				scaleY: 1,
			}
		},
		{
			name:"instruction1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:207,
				y:732,
				font:"bold 17px Arial",
				text:"Drag an arrow to aim laser at subs and",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"instruction2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:207,
				y:752,
				font:"bold 17px Arial",
				text:"press      . Keep firing until you miss,",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"instruction3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:207,
				y:772,
				font:"bold 17px Arial",
				text:"then the computer gets a turn.",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"correct1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:207,
				y:742,
				font:"bold 17px Arial",
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
				x:207,
				y:765,
				font:"bold 17px Arial",
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
				x:207,
				y:742,
				font:"bold 17px Arial",
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
				x:207,
				y:765,
				font:"bold 17px Arial",
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
				x: 166,
				y: 765,
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
