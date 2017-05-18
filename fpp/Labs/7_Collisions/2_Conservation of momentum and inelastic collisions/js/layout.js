var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "bg",
			transform:[512.8,404,1,1,0,0,0,0.8,0],
		},{
			name: "back1",
			namespace: "lib",
			type: "Symbol4copy",
			transform:[357.9,598.9,0.84,0.84],
		},{
			name: "back2",
			namespace: "lib",
			type: "Symbol4copy",
			transform:[554.7,598.9,0.84,0.84],
		},{
			name: "greenBall",
			namespace: "lib",
			type: "Green_Ball",
			props: {
				x: 363.5,
				y: 602.45,
				scaleX: 0.47,
				scaleY: 0.47,
			}
		},{
			name: "brownBall",
			namespace: "lib",
			type: "Brown_Ball",
			props: {
				x: 560.3,
				y: 602.45,
				scaleX: 0.47,
				scaleY: 0.47,
			}
		},{
			name: "Unit1",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 663,
				y: 612,
				font: "bold 18px Arial",
				text: "m/s",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "Unit2",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 466,
				y: 612,
				font: "bold 18px Arial",
				text: "m/s",
				textAlign: "center",
				textBaseline:"middle"
			}
		},
	],
	foreground: [{
			name: "patch",
			namespace: "lib",
			type: "Symbol4",
			transform:[512,758.4,1.25,1.25],
			props:{
				shadow:new createjs.Shadow("rgba(0,0,0,1)",0,0,24),
			}
			
		},{
			name:"popup",
			namespace:"lib",
			type:"InstructionText",
		},{
			name: "greenBallV",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 423,
				y: 613,
				font: "bold 18px Arial",
				text: "0.00",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "brownBallV",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 619,
				y: 613,
				font: "bold 18px Arial",
				text: "0.00",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:944,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},{
			name:"pauseButton",
			type:"Button",
			up:"pauseIconN",
			over:"pauseIconO",
			down:"pauseIconC",
			props:{
				x:870,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},{
			name:"playButton",
			type:"Button",
			up:"playIconN",
			over:"playIconO",
			down:"playIconC",
			props:{
				x:870,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25
			}
		},{
			name: "greenBall",
			namespace: "lib",
			type: "Green_Ball",
			props:{
				x:90.5,
				y:233.8
			},
			cache:{x:0, y:0, width:60, height:60, scale:2}
		},{
			name: "brownBall",
			namespace: "lib",
			type: "Brown_Ball",
			props:{
				x:574.4,
				y:233.8
			},
			cache:{x:0, y:0, width:60, height:60, scale:2}
		},
	]
}
