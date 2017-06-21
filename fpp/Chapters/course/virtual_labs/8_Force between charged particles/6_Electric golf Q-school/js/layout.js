var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "Bg",
			transform:[546.5,407.1,1,1,0,0,0,546.4,418.6],
		},{
			name: "patch",
			namespace: "lib",
			type: "Button_Set_1",
			transform:[622.6,740.1,1.25,1.25,0,0,0,512.6,31.5],
		},{
			name: "m",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 787,
				y: 741.2,
				font: "bold 18px Arial",
				text: "m",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "chargeText1",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 63,
				y: 729,
				font: "bold 18px Arial",
				text: "Charge",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "onBall",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 62,
				y: 750,
				font: "bold 18px Arial",
				text: "on ball",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "chargeText2",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 270,
				y: 729,
				font: "bold 18px Arial",
				text: "Charge",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "onPutter",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 278,
				y: 750,
				font: "bold 18px Arial",
				text: "on putter",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "charge2",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 160,
				y: 741,
				font: "bold 18px Arial",
				text: "+1.60 × 10    C",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "charge2",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 496,
				y: 741,
				font: "bold 18px Arial",
				text: "× (1.60 × 10    C)",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "-191",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 197,
				y: 733,
				font: "bold 12px Arial",
				text: "-19",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "-192",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 535,
				y: 733,
				font: "bold 12px Arial",
				text: "-19",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "text1",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 610,
				y: 720.2,
				font: "bold 18px Arial",
				text: "Ball to",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "text2",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 608,
				y: 741,
				font: "bold 18px Arial",
				text: "putter",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "text3",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 619,
				y: 762.2,
				font: "bold 18px Arial",
				text: "distance",
				color:"white",
				textAlign: "center",
				textBaseline:"middle"
			}
		},
	],
	foreground: [{
			name: "charge",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 398,
				y: 741,
				font: "bold 18px Arial",
				text: "0",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name: "distance",
			namespace: "createjs",
			type: "Text",
			props: {
				x: 741,
				y: 741,
				font: "bold 18px Arial",
				text: "0.100",
				textAlign: "center",
				textBaseline:"middle"
			}
		},{
			name:"arrow",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow",
			props:{
				x:140,
				y:175,
				regX:10,
				regY:8,
				scaleX:1.1,
				scaleY:1,
				visible:true
			}	
		},{
			name:"arrowline",
			namespace:"createjs",
			type:"Shape",
			// props:{
				// x:755,
				// y:79,
			// }
		},{
			name:"putter",
			namespace:"createjs",
			type:"Container",
			props:{
				x:131.46,
				y:430.3,
				regX:24,
				regY:38,
				_charge:0,
			},
			children:[{
				name: "man",
				namespace: "lib",
				type: "man",
				transform:[0,0,1.193,1.192,0,0,0,31,49.1],
			},{
				name:"chargePutter",
				namespace:"createjs",
				type:"Text",
				props:{
					x:12,
					y:25,
					rotation:90,
					font: "bold 16px Arial",
					text: "0",
					textAlign: "left",
					textBaseline:"middle"
				}
			}],
		},{
			name: "ball",
			namespace: "lib",
			type: "Golf_Ball",
			transform:[150.7,430.3,1.6,1.6],
			props:{
				_charge:1,
			}
		},{
			name: "YouDidIt",
			namespace: "lib",
			type: "YouDidIt",
			transform:[487.4,413.9,1.487,1.487],
			props:{
				visible:false,
			}
		},{
			name: "wave",
			namespace: "lib",
			type: "mc_wave",
			transform:[911,423],
			props:{
				visible:false,
			}
		},{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:938,
				y:709,
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
				x:864,
				y:709,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25
			}
		},{
			name:"stepper1",
			type:"NumericStepper",
			value:0,
			min:-30,
			max:30,
			step:1,
			delay:1,
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
				x:324,
				y:705,
				scaleX:0.6,
				scaleY:0.6,
			}
		},{
			name:"stepper2",
			type:"NumericStepper",
			value:0,
			min:0.040,
			max:0.300,
			step:0.001,
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
				x:661,
				y:705,
				scaleX:0.6,
				scaleY:0.6,
			}
		},
	]
}
