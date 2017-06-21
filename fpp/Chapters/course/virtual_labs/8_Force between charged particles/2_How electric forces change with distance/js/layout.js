var layout = {
	background : [
		{
			name : "bg",
			namespace : "lib",
			type : "Bg",
			transform: [512,404.1,1,1,0,0,0,512,403.9]
		},
		{
			name : "block",
			namespace : "lib",
			type : "Symbol3",
			transform : [640.6,758.4,1.25,1.25,0,0,0,512.6,31.5],
			
		},
		{
			name : "gridDim1",
			namespace : "createjs",
			type : "Text", 
			props : {
				x : 730,
				y : 690,
				font : "bold 18px Arial",
				color : "black",
				text:"1 small grid square = 5.0 × 10    m",
			}
		},
		{
			name : "gridDim2",
			namespace : "createjs",
			type : "Text", 
			props : {
				x : 982,
				y : 686,
				font : "bold 14px Arial",
				color : "black",
				text:"-8",
			}
		}
	],
	
	foreground : [
		{
			name : "firstText",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 23,
				y : 728,
				font : "bold 18px Arial",
				color : "white",
				text:"Distance",
				textAlign : "left",
			}
		},
		{
			name : "secText",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 23,
				y : 748,
				font : "bold 18px Arial",
				color : "white",
				text:"between",
				textAlign : "left",
			}
		},
		{
			name : "thirdText",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 23,
				y : 768,
				font : "bold 18px Arial",
				color : "white",
				text:"charges",
				textAlign : "left",
			}
		},
		{
			name : "unitM",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 215,
				y : 749,
				font : "18px Arial",
				color : "white",
				text: "m",
				textAlign : "center"
			}
		},
		{
			name : "chargeText1",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 325,
				y : 768,
				font : "bold 18px Arial",
				color : "white",
				text: "Charge",
				textAlign : "center"
			}
		},
		{
			name : "chargeText2",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 599,
				y : 768,
				font : "bold 18px Arial",
				color : "white",
				text: "Charge",
				textAlign : "center"
			}
		},
		{
			name : "chargeUnit1",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 491,
				y : 749,
				font: "bold 18px Arial",
				color : "white",
				text:"× 10",
				textAlign : "center"
			},
		},
		{
			name : "cunit121",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 520,
				y : 744,
				font: "bold 14px Arial",
				color : "white",
				text:"-12",
				textAlign : "center"
			}
		},
		{
			name : "chargeUnit2",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 766,
				y : 749,
				font: "bold 18px Arial",
				color : "white",
				text:"× 10",
				textAlign : "center"
			},
		},
		{
			name : "cunit122",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 795,
				y : 744,
				font: "bold 14px Arial",
				color : "white",
				text:"-12",
				textAlign : "center"
			}
		},
		{
			name : "unitC1",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 540,
				y : 749,
				font : "bold 18px Arial",
				color : "white",
				text: "C",
				textAlign : "center"
			}
		},
		{
			name : "unitC2",
			namespace : "createjs",
			type : "Text",
			props : {
				x : 815,
				y : 749,
				font : "bold 18px Arial",
				color : "white",
				text: "C",
				textAlign : "center"
			}
		},
		{
			name:"distanceop1",
			namespace : "createjs",
			type:"Text",
			props:{
				x:147,
				y:749,
				font:"bold 18px Arial",
				color:"white",
				text:"",
				textAlign:"center"
			},
		},
		{
			name:"distanceop2",
			namespace : "createjs",
			type:"Text",
			props:{
				x:193,
				y:744,
				font:"bold 14px Arial",
				color:"white",
				text:"",
				textAlign:"center"
			},
		},
		{
			name:"arrow1",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:80,
				y:195,
				regX:10,
				regY:8,
				scaleX:1.1,
				scaleY:1,
				visible:false
			}	
		},
		{
			name:"arrow2",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow2",
			props:{
				x:140,
				y:175,
				regX:10,
				regY:8,
				scaleX:1.1,
				scaleY:1,
				visible:false
			}	
		},
		{
			name:"stepper1",
			type:"NumericStepper",
			value:0,
			min: -5,
			max: 5,
			step: 1,
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
				x:365,
				y:723,
				scaleX:0.6,
				scaleY:0.6,
			}
		},
		{
			name:"stepper2",
			type:"NumericStepper",
			value:0,
			min: -5,
			max: 5,
			step: 1,
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
				x:639,
				y:723,
				scaleX:0.6,
				scaleY:0.6,
			}
		},
		{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:945,
				y:726,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"playButton",
			type:"Button",
			up:"playIconN",
			over:"playIconO",
			down:"playIconC",
			props:{
				x:872,
				y:726,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"pauseButton",
			type:"Button",
			up:"pauseIconN",
			over:"pauseIconO",
			down:"pauseIconC",
			props:{
				x:872,
				y:726,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			},
		},
		{
			name:"inputcharge1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:440,
				y:748,
				font:"bold 18px Arial",
				color:"black",
				text:"0",
				textAlign:"center"
			}
		},
		{
			name:"inputcharge2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:715,
				y:748,
				font:"bold 18px Arial",
				color:"black",
				text:"0",
				textAlign:"center"
			}
		},
		{
			name : "blueBall",
			namespace : "lib",
			type : "Blue_Ball",
			props : {
				regX : 18,
				regY : 18,
				x:255,
				y:738,
				cursor : "move",
			},
			hitBounds:{x:0, y:0, width:38, height:38}
		},
		{
			name : "brownBall",
			namespace : "lib",
			type : "Brown_Ball",
			props : {
				regX : 18,
				regY : 18,
				x:255,
				y:778,
				cursor : "move",
			},
			hitBounds:{x:0, y:0, width:38, height:38}
		},
		{
			name:"fdisplay1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:842,
				y:207,
				font:"italic bold 18px Arial",
				color:"purple",
				text:"F = ",
				textAlign:"center",
				backgroundcolor: "white"
			}
		},
		{
			name:"oForceValue1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:854,
				y:207,
				font:"bold 18px Arial",
				color:"purple",
				text:"",
				textAlign:"center"
			},
		},
		{
			name:"oForceValue12",
			namespace:"createjs",
			type:"Text",
			props:{
				x:884,
				y:203,
				font:"bold 14px Arial",
				color:"purple",
				text:"",
				textAlign:"center"
			},
		},
		{
			name:"neuton1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:950,
				y:207,
				font:"bold 18px Arial",
				color:"purple",
				text:"N",
				textAlign:"center"
			}
		},
		{
			name:"fdisplay2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:324,
				y:563,
				font:"italic bold 18px Arial",
				color:"purple",
				text:"F = ",
				textAlign:"center"
			}
		},
		{
			name:"oForceValue2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:336,
				y:563,
				font:"bold 18px Arial",
				color:"purple",
				text:"",
				textAlign:"center"
			},
		},
		{
			name:"oForceValue22",
			namespace:"createjs",
			type:"Text",
			props:{
				x:366,
				y:559,
				font:"bold 14px Arial",
				color:"purple",
				text:"",
				textAlign:"center"
			},
		},
		{
			name:"neuton2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:433,
				y:563,
				font:"bold 18px Arial",
				color:"purple",
				text:"N",
				textAlign:"center"
			}
		},
	]
}