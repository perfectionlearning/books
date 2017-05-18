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
			}
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
			}
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
			}
		},
		{
			name: "helicopterLeft",
			namespace: "lib",
			type: "Helicopter",
			props: {
				x: 94.4,
				y: 53.1,
			}
		},
		{
			name: "helicopterMiddle",
			namespace: "lib",
			type: "Helicopter_Small",
			props: {
				x: 427.9,
				y: 108.1,
				rotation: -5
			}
		},
		{
			name: "helicopterRight",
			namespace: "lib",
			type: "Helicopter2",
			props: {
				x: 836.4,
				y: 55.65,
			}
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
				scaleX:1.1,
				scaleY:1.1,
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
				scaleX:1.1,
				scaleY:1.1,
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
				scaleX:1.1,
				scaleY:1.1,
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
			name: "fireButton",
			type: "Button",
			up: "fireIconN",
			over: "fireIconO",
			down: "fireIconC",
			props: {
				x: 871,
				y: 731,
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
				x: 945,
				y: 731,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		},
		{
			name:"instruction1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:245,
				y:732,
				font:"bold 18px Arial",
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
				x:245,
				y:752,
				font:"bold 18px Arial",
				text:"press FIRE. Keep firing until you miss,",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"instruction3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:245,
				y:772,
				font:"bold 18px Arial",
				text:"then ths computer gets a turn.",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"correct1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:245,
				y:737,
				font:"bold 18px Arial",
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
				x:245,
				y:764,
				font:"bold 18px Arial",
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
				x:245,
				y:737,
				font:"bold 18px Arial",
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
				x:245,
				y:764,
				font:"bold 18px Arial",
				text:"Press RESET to try again.",
				textAlign:"center",
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
	]
}
