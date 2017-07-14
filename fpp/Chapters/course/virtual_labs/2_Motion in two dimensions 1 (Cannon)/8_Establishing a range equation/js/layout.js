var layout = {
	background:[
		{
			name:"bg",
			namespace:"lib",
			type:"Bg",
			transform:[512,404,1,1,0,0,0,512,404],
		},
		{
			name:"hole1",
			namespace:"lib",
			type:"khadda",
			props:{
				x:102,
				y:587,
				scaleX:-1
			}
		},
		{
			name:"patch",
			namespace:"lib",
			type:"Symbol8copy3",
			transform:[640.1,758.7,1.25,1.25,0,0,0,512.1,31.5]
		}
	],
	foreground:[{
			name:"insText1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:403,
				y:759,
				font:"bold 18px Arial",
				text:"Firing angle",
				color:"white",
				textBaseline:"middle",
			}
		},{
			name:"insText2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:403,
				y:679,
				font:"bold 18px Arial",
				text:"Firing speed",
				textBaseline:"middle",
				color:"white",
			}
		},{
			name:"angleUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:598 + 77,
				y:759,
				font:"bold 18px Arial",
				text:"degrees",
				textBaseline:"middle",
				textAlign:"center",
				color:"white",
			}
		},{
			name:"angleText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:528 + 77,
				y:759,
				font:"bold 18px Arial",
				text:"5.0",
				textBaseline:"middle",
				textAlign:"center"
			}
		},{
			name:"speedUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:579 + 77,
				y:679,
				font:"bold 18px Arial",
				text:"m/s",
				textBaseline:"middle",
				textAlign:"center",
				color:"white",
			}
		},{
			name:"speedText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:528 + 77,
				y:680,
				font:"bold 18px Arial",
				text:"5.0",
				textBaseline:"middle",
				textAlign:"center"
			}
		}/* ,{
			name:"fireButton",
			type:"Button",
			up:"fireIconN",
			over:"fireIconO",
			down:"fireIconC",
			props:{
				x:664,
				y:688,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		} */,{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:938,
				y:688,
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
				y:688,
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
				y:688,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
				visible:false
			}
		},
		{
			name:"speedStepper",
			type:"NumericStepper",
			min:20,
			max:65,
			step:0.1,
			value:5,
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
				x:521,
				y:643,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"angleStepper",
			type:"NumericStepper",
			min:30,
			max:90,
			step:1,
			value:5,
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
				x:521,
				y:723,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"arrow1",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:100,
				y:185,
				regX:14,
				regY:14,
				scaleX:0.5 * 1.34,
				scaleY:0.5 * 1.34,
			}
			
		},
		{
			name:"arrow1Line",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"canonBall1",
			type:"Bitmap",
			namespace:"createjs",
			img:"canonBall",
			props:{
				x:270,
				y:187,
				regY:11.5,
				regX:11.5,
				scaleX:0.5,
				scaleY:0.5
			}
		},
		{
			name:"cannon1",
			type:"Cannon_Iron",
			namespace:"lib",
			props:{
				x:90,
				y:583,
				scaleX:-1.9,
				scaleY:1.9,
				regX:-4,
				regY:-13,
				_defAngle:0
			}
		},
		{
			name:"line1",
			type:"Line1",
			namespace:"lib",
			transform:[490,580.7,1,1,0,0,0,445.7,29.9]
			
		},
		{
			name:"blast",
			type:"blast",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:15 * 0.5 * 1.34,
				scaleX:1.34,
				scaleY:1.34,
				visible:false,
				loop:false,
			}
		},
		{
			name:"textcont",
			type:"Container",
			namespace:"createjs",
			props:{
				x:-476,
				y:-31
			},
			children:[{
					name:"text1",
					namespace:"createjs",
					type:"Text",
					props:{
						x:588,
						y:724,
						font:"bold 18px Arial",
						text:"Vertical",
						color:"white",
						textBaseline:"middle",
						textAlign:"center",
					}
				},
				{
					name:"text4",
					namespace:"createjs",
					type:"Text",
					props:{
						x:608,
						y:750,
						font:"bold 18px Arial",
						text:"m/s",
						color:"white",
						textBaseline:"middle",
						textAlign:"center",
					}
				},
				{
					name:"text5",
					type:"SSText",
					props:{
						x:593,
						y:768,
						color:"white",
						text:"m/s^2",
					},
					fonts:["bold 18px Arial", "bold 12px Arial"],
					hgap:1
				},
				{
					name:"text6",
					namespace:"createjs",
					type:"Text",
					props:{
						x:715,
						y:750,
						font:"bold 18px Arial",
						text:"m/s",
						color:"white",
						textBaseline:"middle",
						textAlign:"center",
					}
				},
				{
					name:"text7",
					type:"SSText",
					props:{
						x:700,
						y:768,
						color:"white",
						text:"m/s^2",
					},
					fonts:["bold 18px Arial", "bold 12px Arial"],
					hgap:1
				},
				{
					name:"text3",
					namespace:"createjs",
					type:"Text",
					props:{
						x:522,
						y:751,
						font:"italic bold 18px Arial",
						text:"v a",
						lineWidth:10,
						lineHeight:27,
						color:"white",
						textBaseline:"middle",
						textAlign:"center",
					}
				},
				{
					name:"text2",
					namespace:"createjs",
					type:"Text",
					props:{
						x:697,
						y:724,
						font:"bold 18px Arial",
						text:"Horizontal",
						color:"white",
						textBaseline:"middle",
						textAlign:"center",
					}
				},
				{
					name:"txtVy",
					namespace:"createjs",
					type:"Text",
					props:{
						x:568,
						y:751,
						font:"bold 18px Arial",
						text:"15.2",
						textBaseline:"middle",
						color:"#fff",
						textAlign:"center",
					}
				},
				{
					name:"txtAy",
					namespace:"createjs",
					type:"Text",
					props:{
						x:568,
						y:778,
						font:"bold 18px Arial",
						text:"9.2",
						textBaseline:"middle",
						color:"#fff",
						textAlign:"center",
					}
				},
				{
					name:"txtVx",
					namespace:"createjs",
					type:"Text",
					props:{
						x:676,
						y:751,
						font:"bold 18px Arial",
						text:"---",
						textBaseline:"middle",
						color:"white",
						textAlign:"center",
					}
				},
				{
					name:"txtAx",
					namespace:"createjs",
					type:"Text",
					props:{
						x:676,
						y:778,
						font:"bold 18px Arial",
						text:"---",
						textBaseline:"middle",
						color:"white",
						textAlign:"center",
					}
				}
			]
		},
		{
			name:"timeText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:337,
				y:719,
				font:"bold 18px Arial",
				text:"5.0",
				color:"#fff",
				textBaseline:"middle",
				textAlign:"center"
			}
		},
		{
			name:"lake",
			namespace:"lib",
			type:"Lake",
			transform:[831.6,563,0.12,0.078,0,0,0,285.4,-93.5]
		},
		{
			name:"water",
			namespace:"lib",
			type:"water",
			transform:[828.3,556.5,0.2,0.2],
			props:{
				loop:false
			}
		} /* */
	]
}