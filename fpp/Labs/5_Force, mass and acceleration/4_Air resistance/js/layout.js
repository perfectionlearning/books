var layout = {
	background:[
		
	],
	foreground:[{
			name:"bg",
			namespace:"createjs",
			type:"Bitmap",
			img:"bg",
			props:{
				// regX:971.3
			}
			// transform:[569.3,417.8,1,1,0,0,0,971.3,628.4]
		},{
			name:"patch",
			namespace:"lib",
			type:"Symbol8",
			transform:[512,758.8]
		},{
			name:"helicopter",
			namespace:"lib",
			type:"mc_Helicoptercopy",
			transform:[310.8,370.5,1.736,1.736,0,0,0,53.5,49.6],
		},{
			name:"helicopterBreak",
			namespace:"lib",
			type:"mc_Helicopter",
			transform:[589.5,373.2,1.736,1.736,0,0,0,53.5,49.6],
		},{
			name:"h_velocity",
			namespace:"createjs",
			type:"Text",
			props:{
				x:415,
				y:733,
				font:"bold 16px Arial",
				color:"white",
				text:"0.00",
				textAlign:"center"
			}
		},{
			name:"h_accleration",
			type:"Text",
			namespace:"createjs",
			props:{
				x:415,
				y:768,
				font:"bold 16px Arial",
				color:"white",
				text:"0.00",
				textAlign:"center"
			}
		},{
			name:"v_velocity",
			namespace:"createjs",
			type:"Text",
			props:{
				x:163,
				y:733,
				font:"bold 16px Arial",
				color:"white",
				text:"0.00",
				textAlign:"center"
			}
		},{
			name:"v_accleration",
			type:"Text",
			namespace:"createjs",
			props:{
				x:163,
				y:768,
				font:"bold 16px Arial",
				color:"white",
				text:"0.00",
				textAlign:"center"
			}
		},{
			name:"force",
			namespace:"createjs",
			type:"Text",
			props:{
				x:739,
				y:750,
				font:"bold 18px Arial",
				color:"black",
				text:"0",
				textAlign:"center"
			}
		},{
			name:"pauseButton",
			type:"Button",
			up:"pauseIconN",
			over:"pauseIconO",
			down:"pauseIconC",
			props:{
				x:865,
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
				x:865,
				y:728,
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
				x:938,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},{
			name:"stepper",
			type:"NumericStepper",
			value:0,
			min:-5000,
			max:5000,
			step:250,
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
				x:645,
				y:739,
				scaleX:0.73,
				scaleY:0.6,
			}
		},
	]
}