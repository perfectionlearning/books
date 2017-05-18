var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "bg",
			transform:[512.8,404,1,1,0,0,0,0.8,0]
		},{
			name: "patch",
			namespace: "lib",
			type: "Symbol3",
			transform:[640.6,758.4,1.25,1.25,0,0,0,512.6,31.5],
		},{
			name: "Unit1",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 462,
				y: 595,
				font: "bold 18px Arial",
				text: "m/s",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "back4",
			namespace: "lib",
			type: "Symbol4copy",
			transform:[357.9,584.6,0.84,0.84],
		},{
			name: "back1",
			namespace: "lib",
			type: "Symbol4copy",
			transform:[554.7,613.4,0.84,0.84],
		},{
			name: "back2",
			namespace: "lib",
			type: "Symbol4copy",
			transform:[554.7,584.6,0.84,0.84],
		},{
			name: "back3",
			namespace: "lib",
			type: "Symbol4copy",
			transform:[357.9,613.4,0.84,0.84],
		},{
			name: "blueBall",
			namespace: "lib",
			type: "Blue_Ball",
			transform:[560.3,588.1,0.475,0.475],
		},{
			name: "blueBall2",
			namespace: "lib",
			type: "Blue_Ball",
			transform:[363.5,588.1,0.475,0.475],
		},{
			name: "redBall1",
			namespace: "lib",
			type: "Red_Ball",
			transform:[560.3,616.9,0.475,0.475],
		},{
			name: "redBall2",
			namespace: "lib",
			type: "Red_Ball",
			transform:[363.5,616.9,0.475,0.475],
		},{
			name: "Unit2",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 462,
				y: 625,
				font: "bold 18px Arial",
				text: "m/s",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "Unit3",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 671,
				y: 595,
				font: "bold 18px Arial",
				text: "kg m/s",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "Unit4",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 671,
				y: 625,
				font: "bold 18px Arial",
				text: "kg m/s",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "Unit3dot",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 666,
				y: 620,
				font: "bold 20px Arial",
				text: ".",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "Unit4dot",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 666,
				y: 590,
				font: "bold 20px Arial",
				text: ".",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "Unit5",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 397,
				y: 758,
				font: "bold 18px Arial",
				text: "m/s",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "Unit6",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 637,
				y: 758,
				font: "bold 18px Arial",
				text: "m/s",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "initVelocityText",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 108,
				y: 759,
				font: "bold 18px Arial",
				color:"white",
				text: "Initial velocity",
				textAlign: "center",
				textBaseline:"middle",
			}
		},{
			name: "velocityText",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 421,
				y: 570,
				font: "bold 18px Arial",
				text: "Velocity",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "momentumText",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 623,
				y: 570,
				font: "bold 18px Arial",
				text: "Momentum",
				textAlign: "center",
				textBaseline:"middle"
			}
		},
	],
	foreground: [{
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
			name: "redBall",
			namespace: "lib",
			type: "Redball2",
			transform:[884.1,283.8,1,1,0,0,0,0,0],
			cache:{x:0, y:0, width:100, height:100, scale:2}
		},{
			name: "blueBall",
			namespace: "lib",
			type: "Blueball2",
			transform:[362.6,294.7,1,1,0,0,0,0,0],
			cache:{x:0, y:0, width:50, height:50, scale:2}
		},{
			name: "blueInitVelocity",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 339,
				y: 760,
				font: "bold 18px Arial",
				text: "0.0",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "redInitVelocity",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 581,
				y: 760,
				font: "bold 18px Arial",
				text: "0.0",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "blueVelocity",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 423,
				y: 597,
				font: "bold 18px Arial",
				text: "0.0",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "redVelocity",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 423,
				y: 626,
				font: "bold 18px Arial",
				text: "0.0",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "blueMomentum",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 620,
				y: 597,
				font: "bold 18px Arial",
				text: "0.0",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "redMomentum",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 620,
				y: 626,
				font: "bold 18px Arial",
				text: "0.0",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name:"stepper2",
			type:"NumericStepper",
			value:0,
			min:-2,
			max:2,
			step:0.1,
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
				x:497,
				y:723,
				scaleX:0.6,
				scaleY:0.6,
			}
		},{
			name:"stepper1",
			type:"NumericStepper",
			value:0,
			min:-2,
			max:2,
			step:0.1,
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
				x:256,
				y:723,
				scaleX:0.6,
				scaleY:0.6,
			}
		},{
			name:"popup",
			namespace:"lib",
			type:"InstructionText",
			transform:[510,705]
		}
	]
}
