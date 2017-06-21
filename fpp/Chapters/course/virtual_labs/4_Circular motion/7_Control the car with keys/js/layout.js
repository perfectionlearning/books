var layout = {
	background:[
		{
			name:"bg",
			namespace:"lib",
			type:"Bg",
			transform:[512.2,404.9,1,1,0,0,0,0,1]
		},
		{
			name:"patch",
			namespace:"lib",
			type:"mc_patch",
			transform:[511.6,758.1,1.25,1.25,0,0,0,512.6,31.5]
		},{
			name:"timer0",
			namespace:"createjs",
			type:"Text",
			props:{
				x:407,
				y:715,
				font:"13px Arial",
				text:"0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"timer10",
			namespace:"createjs",
			type:"Text",
			props:{
				x:433,
				y:742,
				font:"13px Arial",
				text:"10",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"timer30",
			namespace:"createjs",
			type:"Text",
			props:{
				x:381,
				y:742,
				font:"13px Arial",
				text:"30",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"ms",
			namespace:"createjs",
			type:"Text",
			props:{
				x:407,
				y:767,
				font:"bold 15px Arial",
				text:"m/s",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"speed",
			namespace:"createjs",
			type:"Text",
			props:{
				x:407,
				y:680,
				font:"14px Arial",
				color:"white",
				text:"SPEED",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"x",
			namespace:"createjs",
			type:"Text",
			props:{
				x:510,
				y:680,
				font:"italic 14px Arial",
				color:"white",
				text:"X",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"y",
			namespace:"createjs",
			type:"Text",
			props:{
				x:660,
				y:679,
				font:"italic 14px Arial",
				color:"white",
				text:"Y",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"xVelocityText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:560,
				y:680,
				font:"14px Arial",
				color:"white",
				text:"VELOCITY",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"yVelocityText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:710,
				y:679,
				font:"14px Arial",
				color:"white",
				text:"VELOCITY",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"40x",
			namespace:"createjs",
			type:"Text",
			props:{
				x:588,
				y:750,
				font:"14px Arial",
				color:"white",
				text:"40",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"0x",
			namespace:"createjs",
			type:"Text",
			props:{
				x:550,
				y:750,
				font:"14px Arial",
				color:"white",
				text:"0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"-40x",
			namespace:"createjs",
			type:"Text",
			props:{
				x:509,
				x:509,
				y:750,
				font:"14px Arial",
				color:"white",
				text:"-40",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"40y",
			namespace:"createjs",
			type:"Text",
			props:{
				x:745,
				y:698,
				font:"14px Arial",
				color:"white",
				text:"40",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"0y",
			namespace:"createjs",
			type:"Text",
			props:{
				x:741,
				y:736.5,
				font:"14px Arial",
				color:"white",
				text:"0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"-40y",
			namespace:"createjs",
			type:"Text",
			props:{
				x:747,
				y:774,
				font:"14px Arial",
				color:"white",
				text:"-40",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"m/s1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:573,
				y:773,
				font:"bold 18px Arial",
				color:"white",
				text:"m/s",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"m/s2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:657,
				y:742,
				font:"bold 18px Arial",
				color:"white",
				text:"m/s",
				textAlign:"center",
				textBaseline:"middle"
			}
		}
	],
	foreground:[
		
		{
			name:"line1",
			namespace:"createjs",
			type:"Shape",
			props:{
				x:708,
				y:736,
			}
		},{
			name:"line3",
			namespace:"createjs",
			type:"Shape",
			props:{
				x:685,
				y:736,
			}
		},{
			name:"line2",
			namespace:"createjs",
			type:"Shape",
			props:{
				x:550,
				y:716,
			}
		},{
			name:"line4",
			namespace:"createjs",
			type:"Shape",
			props:{
				x:550,
				y:694,
			}
		},{
			name:"timerText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:54,
				y:758,
				font:"bold 18px Arial",
				color:"white",
				text:"0.0 s",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"xVelocity",
			namespace:"createjs",
			type:"Text",
			props:{
				x:535,
				y:773,
				font:"bold 18px Arial",
				color:"white",
				text:"0.0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"yVelocity",
			namespace:"createjs",
			type:"Text",
			props:{
				x:657,
				y:720,
				font:"bold 18px Arial",
				color:"white",
				text:"0.0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"carImg",
			namespace:"lib",
			type:"mc_redCar",
			props:{
				x:510,
				y:570,
				regX:18.9,
				regY:9.6,
				scaleX:1.584,
				scaleY:1.584,
			},
			cache:{x:0, y:0, width:50, height:26, scale:2}
		},{
			name:"carCrash",
			namespace:"lib",
			type:"mc_redCarcras",
			transform:[280.5,571.3,1.441,1.445,0,0,0,18.8,9.6],
		},
		{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:938,
				y:727,
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
				x:865,
				y:727,
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
				x:865,
				y:727,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
				visible:false
			}
		},{
			name:"speedometer1",
			type:"SpeedoMeter",
			minAngle:0,
			maxAngle:360,
			minValue:0,
			maxValue:40,
			value:0,
			children:[
				{
					name:"needle1",
					namespace:"lib",
					type:"mc_nidle1",
					// props:{
						// x:306,
						// y:86,
						// width:3,
						// height:24,
						// regX:0,
						// regY:46
					// }
					transform:[406.7,743,1,1,0,0,0,1,48]
				},
				{
					name:"text1",
					namespace:"createjs",
					type:"Text",
					props:{
						x:406.5,
						y:752,
						font:"bold 15px Arial",
						text:"0.0",
						textAlign:"center",
						textBaseline:"middle"
					}
				}
			]
		},{
			name:"stepperH",
			type:"NumericStepper",
			value:0,
			min:-40,
			max:40,
			step:0.1,
			inc:{
				up:"incNH",
				over:"incOH",
				down:"incDH",
			},
			dec:{
				up:"decNH",
				over:"decOH",
				down:"decDH",
			},
			gap:1,
			props:{
				x:180,
				y:737,
				scaleX:0.6,
				scaleY:0.6,
			}
		},{
			name:"stepperV",
			type:"NumericStepper",
			value:0,
			min:-40,
			max:40,
			step:0.1,
			inc:{
				up:"incNV",
				over:"incOV",
				down:"incDV",
			},
			dec:{
				up:"decNV",
				over:"decOV",
				down:"decDV",
			},
			gap:1,
			props:{
				x:132,
				y:723,
				scaleX:0.6,
				scaleY:0.6,
			}
		}
	]
}