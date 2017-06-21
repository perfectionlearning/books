var layout = {
	background:[
		{
			name:"Bg",
			type:"Bg",
			namespace:"lib",
			transform:[598,404]
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
				x:0,
				y:341
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"timerTxt",
			props:{
				x:48,
				y:750,
				text:"0.0 ms",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"timeStepTxt",
			props:{
				x:153,
				y:748,
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
			max:100000,
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
				x:247,
				y:736,
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
				x:871,
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
				x:871,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25
			}
		}
	]
}


