var layout = {
	background:[
		
	],
	foreground:[{
			name:"bg",
			namespace:"lib",
			type:"mc_bg",
			transform:[569.3,417.8,1,1,0,0,0,971.3,628.4],
			cache:{x:0, y:0, width:5000, height:2000, scale:2}
		},{
			name:"patch",
			namespace:"lib",
			type:"Symbol8",
			transform:[512,758.8]
		},{
			name:"helicopter",
			namespace:"lib",
			type:"mc_Helicoptercopy",
			transform:[190,420,1.20,1.20,0,0,0,53.5,49.6],
		},{
			name:"helicopterBreak",
			namespace:"lib",
			type:"mc_Helicopter",
			transform:[190,420,1.20,1.20,0,0,0,53.5,49.6],
		},{
			name:"v_velocityUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:119,
				y:752,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"m/s",
				textAlign:"center"
			}
		},{
			name:"v_velocityText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:32,
				y:752,
				font:"bold italic 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"v",
				textAlign:"center"
			}
		},{
			name:"v_direction",
			namespace:"createjs",
			type:"Text",
			props:{
				x:93,
				y:730,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"Vertical",
				textAlign:"center"
			}
		},{
			name:"v_accelrationUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:119,
				y:783,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"m/s",
				textAlign:"center"
			},
		},{
			name:"v_accelrationUnitS",
			type:"Text",
			namespace:"createjs",
			props:{
				x:140,
				y:780,
				font:"bold 12px Arial",
				textBaseline : "middle",
				color:"white",
				text:"2",
				textAlign:"center"
			},
		},{
			name:"v_accelerationText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:32,
				y:783,
				font:"bold italic 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"a",
				textAlign:"center"
			}
		},{
			name:"h_velocityUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:238,
				y:752,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"m/s",
				textAlign:"center"
			}
		},{
			name:"h_direction",
			namespace:"createjs",
			type:"Text",
			props:{
				x:215,
				y:730,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"Horizontal",
				textAlign:"center"
			}
		},{
			name:"h_accelrationUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:238,
				y:783,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"m/s",
				textAlign:"center"
			},
		},{
			name:"h_accelrationUnitS",
			type:"Text",
			namespace:"createjs",
			props:{
				x:258,
				y:779,
				font:"bold 12px Arial",
				textBaseline : "middle",
				color:"white",
				text:"2",
				textAlign:"center"
			},
		},{
			name:"forceUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:784,
				y:759,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"N",
				textAlign:"center"
			}
		},{
			name:"forceText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:561,
				y:748,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"Thrust Force",
				textAlign:"center",
				lineWidth:6,
				lineHeight : 21
			}
		},{
			name:"liftForceUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:501,
				y:759,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"N",
				textAlign:"center"
			}
		},{
			name:"liftForceText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:312,
				y:748,
				font:"bold 18px Arial",
				textBaseline : "middle",
				color:"white",
				text:"Lift Force",
				textAlign:"center",
				lineWidth:6,
				lineHeight : 21
			}
		},{
			name:"v_velocity",
			namespace:"createjs",
			type:"Text",
			props:{
				x:74,
				y:754,
				font:"bold 16px Arial",
				color:"white",
				text:"0.00",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"v_acceleration",
			type:"Text",
			namespace:"createjs",
			props:{
				x:74,
				y:784,
				font:"bold 16px Arial",
				color:"white",
				text:"0.00",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"h_velocity",
			namespace:"createjs",
			type:"Text",
			props:{
				x:189,
				y:754,
				font:"bold 16px Arial",
				color:"white",
				text:"0.00",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"h_acceleration",
			type:"Text",
			namespace:"createjs",
			props:{
				x:189,
				y:784,
				font:"bold 16px Arial",
				color:"white",
				text:"0.00",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"force",
			namespace:"createjs",
			type:"Text",
			props:{
				x:724,
				y:760,
				font:"bold 18px Arial",
				color:"black",
				text:"0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"liftForce",
			namespace:"createjs",
			type:"Text",
			props:{
				x:442,
				y:760,
				font:"bold 18px Arial",
				color:"black",
				text:"0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"pauseButton",
			type:"Button",
			up:"pauseIconN",
			over:"pauseIconO",
			down:"pauseIconC",
			props:{
				x:870,
				y:724,
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
				y:724,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:943,
				y:724,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},{
			name:"stepperH",
			type:"NumericStepper",
			value:0,
			min:-5000,
			max:5000,
			step:250,
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
				x:639,
				y:737,
				scaleX:0.6,
				scaleY:0.6,
			}
		},{
			name:"stepperV",
			type:"NumericStepper",
			value:0,
			min:-200000,
			max:50000,
			step:250,
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
				x:349,
				y:721,
				scaleX:0.6,
				scaleY:0.6,
			}
		},
	]
}