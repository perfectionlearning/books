var layout = {
	background: [{
			name: "bg",
			namespace: "lib",
			type: "Bg",
		},
		{
			name: "patch",
			namespace: "lib",
			type: "Symbol3555",
			props: {
				x: 0,
				y: 723,
				scaleX: 1.25,
				scaleY: 1.25,
			}
		},
	],
	foreground: [
		{
			name: "info",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 150,
				y: 741,
				font: "bold 18px Arial",
				text: "Data gathering only.",
				textAlign: "center"
			}
		},{
			name: "info1",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 150,
				y: 765,
				font: "bold 18px Arial",
				text: "Slots do not open.",
				textAlign: "center"
			}
		}, {
			name: "scoreText",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 327,
				y: 732,
				font: "16px Arial",
				text: "SCORE",
				textAlign: "center",
				color: "#FFFFFF"
			}
		},  {
			name: "scoreText",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 327,
				y: 732,
				font: "16px Arial",
				text: "SCORE",
				textAlign: "center",
				color: "#FFFFFF"
			}
		},  {
			name: "scoreValue",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 329,
				y: 760,
				font: "22px Arial",
				text: "---",
				textAlign: "center",
				color: "#000000"
			}
		}, {
			name: "shotsText",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 523,
				y: 732,
				font: "16px Arial",
				text: "SHOTS",
				textAlign: "center",
				color: "#FFFFFF"
			}
		}, {
			name: "shotsValue",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 523,
				y: 760,
				font: "22px Arial",
				text: "---",
				textAlign: "center",
				color: "#000000"
			}
		}, {
			name: "time",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 418,
				y: 751,
				font: "bold 22px Arial",
				text: "0.00",
				textAlign: "center",
				color: "#000000"
			}
		}, {
			name: "timeUnit",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 467,
				y: 749,
				font: "bold 22px Arial",
				text: "s",
				textAlign: "center",
				color: "#FFFFFF"
			}
		}, {
			name: "fireButton",
			type: "Button",
			up: "fireIconN",
			over: "fireIconO",
			down: "fireIconC",
			props: {
				x: 580.5,
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
				x: 938,
				y: 730,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		}, {
			name: "pauseButton",
			type: "Button",
			up: "pauseIconN",
			over: "pauseIconO",
			down: "pauseIconC",
			props: {
				x: 864,
				y: 730,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		}, {
			name: "playButton",
			type: "Button",
			up: "playIconN",
			over: "playIconO",
			down: "playIconC",
			props: {
				x: 864,
				y: 730,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
				visible: false
			}
		}, {
			name: "circle10",
			namespace: "lib",
			type: "mc_HoleBorder",
			props: {
				x: 513.5,
				y: 402.5,
				regX:51.5,
				regY:51.5,
			}
		}, {
			name: "circle10Text",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 513.5,
				y: 392,
				font: "bold 20px Arial",
				text: "10",
				textAlign: "center",
				color: "#FFCC00"
			}
		}, {
			name: "circle20",
			namespace: "lib",
			type: "mc_HoleBorder",
			props: {
				x: 647,
				y: 402.5,
				regX:51.5,
				regY:51.5,
			}
		}, {
			name: "circle20Text",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 648,
				y: 392,
				font: "bold 20px Arial",
				text: "20",
				textAlign: "center",
				color: "#FFCC00"
			}
		}, {
			name: "circle30",
			namespace: "lib",
			type: "mc_HoleBorder",
			props: {
				x: 782.5,
				y: 402.5,
				regX:51.5,
				regY:51.5,
			}
		}, {
			name: "circle30Text",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 782.5,
				y: 392,
				font: "bold 20px Arial",
				text: "30",
				textAlign: "center",
				color: "#FFCC00"
			}
		}, {
			name: "circle50",
			namespace: "lib",
			type: "mc_HoleBorder",
			props: {
				x: 917,
				y: 402.5,
				regX:51.5,
				regY:51.5,
			}
		}, {
			name: "circle50Text",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 918,
				y: 392,
				font: "bold 20px Arial",
				text: "50",
				textAlign: "center",
				color: "#FFCC00"
			}
		}, {
			name: "cornerText_1",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 37,
				y: 256.5,
				font: "bold 18px Arial",
				text: "-10",
				textAlign: "center",
				color: "#FFFFFF"
			}
		}, {
			name: "cornerText_2",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 985,
				y: 256.5,
				font: "bold 18px Arial",
				text: "-10",
				textAlign: "center",
				color: "#FFFFFF"
			}
		}, {
			name: "cornerText_3",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 37,
				y: 518,
				font: "bold 18px Arial",
				text: "-10",
				textAlign: "center",
				color: "#FFFFFF"
			}
		}, {
			name: "cornerText_4",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 985,
				y: 518,
				font: "bold 18px Arial",
				text: "-10",
				textAlign: "center",
				color: "#FFFFFF"
			}
		}, {
			name: "numberLine",
			namespace: "lib",
			type: "Line1",
			props: {
				x: 109.15,
				y: 456.95,
			}
		}, {
			name: "hitrod",
			namespace: "lib",
			type: "Hitroad",
			props: {
				x: -3.05,
				y: 392.15,
				regY:10.5,	
				scaleX : 1.421,
			},
			hitBounds:{x:0, y:0, width:98, height:27}
		}, {
			name: "hitbutton",
			namespace: "lib",
			type: "HitButton",
			props: {
				x: 96.1,
				y: 393,
				scaleX : 1.421,
			},
			hitBounds:{x:0, y:0, width:10, height:31}
		}, {
			name: "ball",
			namespace: "lib",
			type: "Ball",
			props: {
				x: 127.15,
				y: 396.6,
				regX:18,
				regY:18.5,			
			},
			hitBounds:{x:0, y:0, width:36, height:37}
		}, {
			name: "Text",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 80,
				y: 340,
				font: "bold italic 20px Arial",
				text: "V  =",
				textAlign: "center"
			}
		}, {
			name: "Text2",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 80,
				y: 348,
				font: "bold 18px Arial",
				text: "i",
				textAlign: "center"
			}
		}, {
			name: "speedText",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 108,
				y: 340,
				font: "bold 20px Arial",
				text: "0.00 m/s",
				textAlign: "left"
			}
		}, {
			name: "Unit",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 180,
				y: 340,
				font: "bold 20px Arial",
				text: "",
				textAlign: "center"
			}
		}, {
			name: "meterUnit",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 512.15,
				y: 501.95,
				font: "bold 25px Arial",
				text: "m",
				color: "#7F7F7F",
				textAlign: "center"
			}
		}, {
			name: "stopper",
			namespace: "lib",
			type: "Box",
			props: {
				x: -1,
				y: 298.85,
				scaleX : 0,	
			},
			hitBounds:{x:0, y:0, width:46.85, height:200.6}
		},{
			name: "Position",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 70,
				y: 430,
				font: "bold italic 20px Arial",
				text: "V",
				textAlign: "center"
			}
		},{
			name: "Position1",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 90,
				y: 430,
				font: "bold 20px Arial",
				text: "=",
				textAlign: "center"
			}
		},{
			name: "PositionValue",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 105,
				y: 430,
				font: "bold 20px Arial",
				text: "0.00 m/s",
				textAlign: "left"
			}
		},{
			name: "PositionUnit",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 190,
				y: 430,
				font: "bold 20px Arial",
				text: "",
				textAlign: "center"
			}
		}
	]
}
