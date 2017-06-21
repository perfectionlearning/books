var layout = {
	background:[
		{
			name:"Bg",
			type:"Bg",
			namespace:"lib",
			// transform:[598,404]
		},
		{
			name:"patch",
			type:"Button_Set_1",
			namespace:"lib",
			transform:[-5,758,1.25,1.25,0,0,0,0,31.5]
		}
		
	],
	foreground:[
		{
			type:"Shape",
			namespace:"createjs",
			name:"waveshape",
			props:{
				x:2,
				y:340
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"timerTxt",
			props:{
				x:540,
				y:749,
				text:"0.0 ms",
				font:"Bold 18px Arial",
				color:"White"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"timeStepTxt",
			props:{
				x:634,
				y:749,
				text:"Time step",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			name:"timeStepper",
			type:"NumericStepper",
			gap:1,
			delay:1,
			min:0,
			max:1000,
			step:0.1,
			value:0,
			horizontal:true,
			dec:{
				up:"decN_h",
				over:"decO_h",
				down:"decD_h",
			},
			inc:{
				up:"incN_h",
				over:"incO_h",
				down:"incD_h",
			},
			
			props:{
				x:726,
				y:737,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"rightTxt",
			props:{
				x:28,
				y:733,
				lineWidth:170,
				lineHeight:26,
				text:"Right moving pulse Amplitude",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"ampText1",
			props:{
				x:138,
				y:760,
				text:"1.5",
				font:"Bold 18px Arial",
				color:"black"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"ampM1",
			props:{
				x:185,
				y:760,
				text:"m",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			name:"ampStepper1",
			type:"NumericStepper",
			gap:1,
			delay:2,
			min:-2,
			max:2,
			step:0.1,
			value:1.5,
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
			props:{
				x:208,
				y:721,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"leftTxt",
			props:{
				x:277,
				y:733,
				lineWidth:170,
				lineHeight:26,
				text:"Left moving pulse Amplitude",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"ampText2",
			props:{
				x:385,
				y:760,
				text:"1.5",
				font:"Bold 18px Arial",
				color:"black"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"ampM2",
			props:{
				x:432,
				y:760,
				text:"m",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			name:"ampStepper2",
			type:"NumericStepper",
			gap:1,
			delay:2,
			min:-2,
			max:2,
			step:0.1,
			value:1.5,
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
			props:{
				x:455,
				y:721,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
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
				x:872,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
				visible:false
			}
		},{
			name:"playButton",
			type:"Button",
			up:"playIconN",
			over:"playIconO",
			down:"playIconC",
			props:{
				x:872,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25
			}
		}
	]
}


