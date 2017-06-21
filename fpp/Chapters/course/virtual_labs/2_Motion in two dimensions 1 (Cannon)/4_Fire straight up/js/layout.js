var layout = {
	background:[
		{
			name:"bg",
			namespace:"lib",
			type:"Bg",
		},
		{
			name:"patch",
			namespace:"lib",
			type:"Symbol8",
			props:{
				x:-1,
				y:720,
				scaleX:1.255,
				scaleY:1.255,
			}
		}
	],
	foreground:[
		{
			name:"insText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:124,
				y:754,
				font:"bold 18px Arial",
				text:"Vertical firing velocity",
				textAlign:"center",
				textBaseline:"middle",
				color:"#fff",
			}
		},
		{
			name:"speedUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:364,
				y:754,
				font:"bold 18px Arial",
				text:"m/s",
				textAlign:"center",
				textBaseline:"middle",
				color:"white"
			}
		},
		{
			name:"speedText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:307,
				y:756,
				font:"bold 18px Arial",
				text:"5.0",
				textBaseline:"middle",
				textAlign:"center"
			}
		},
		{
			name:"timeText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:442,
				y:754,
				font:"bold 18px Arial",
				text:"5.0",
				color:"#fff",
				textBaseline:"middle",
				textAlign:"center"
			}
		}/* ,
		{
			name:"timeUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:457,
				y:770,
				font:"18px CentraleSansBold",
				text:"sec",
				textBaseline:"middle",
				textAlign:"center"
			}
		} */,
		{
			name:"textcont",
			type:"Container",
			namespace:"createjs",
			props:{
				x:-3,
				y:5
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
			name:"stepper",
			type:"NumericStepper",
			min:0,
			max:50,
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
				x:227,
				y:719,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		}/* ,
		{
			name:"fireButton",
			type:"Button",
			up:"fireIconN",
			over:"fireIconO",
			down:"fireIconC",
			props:{
				x:702,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		} */,
		{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:941,
				y:724,
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
				x:868,
				y:724,
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
				x:868,
				y:724,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
				visible:false
			}
		},
		{
			name:"smoke2",
			type:"SmokeBlast",
			namespace:"lib",
			props:{
				x:297,
				y:45,
				visible:false
			},
			// cache:{x:-20,y:-20,width:170,height:150,scale:2}
		},
		{
			name:"towerman",
			type:"Canonwithfire",
			namespace:"lib",
			props:{
				x:101,
				y:73,
				// scaleX:1.24,
				// scaleY:1.24,
			},
			// cache:{x:0,y:0,width:134,height:476,scale:2}
		},
		{
			name:"enemyrun",
			type:"mc_soldierSideview",
			namespace:"lib",
			props:{
				x:920,
				y:538,
				scaleX:-0.13,
				scaleY:0.13,
			},
			// cache:{x:0,y:0,width:134,height:476,scale:2}
		},
		{
			name:"enemydie",
			type:"mc_soldierSideview2",
			namespace:"lib",
			props:{
				x:920,
				y:538,
				scaleX:-0.13,
				scaleY:0.13,
				visible:false
			},
			// cache:{x:0,y:0,width:134,height:476,scale:2}
		},
		{
			name:"canonBall2",
			type:"ClipGroupcopy3",
			namespace:"lib",
			props:{
				x:297,
				y:94,
				regX:47,
				regY:175,
				scaleX:0.3,
				scaleY:0.3,
			}
			
		},
		{
			name:"tower",
			type:"Canon1",
			namespace:"lib",
			props:{
				x:127,
				y:20,
				scaleX:1.24,
				scaleY:1.24,
			},
			cache:{x:0,y:0,width:134,height:476,scale:2}
		},
		{
			name:"windowAnim",
			type:"Windows",
			namespace:"lib",
			props:{
				x:171,
				y:200,
				// scaleX:1.24,
				// scaleY:1.24,
			},
			// cache:{x:0,y:0,width:134,height:476,scale:2}
		},
		{
			name:"door",
			type:"Door",
			namespace:"lib",
			props:{
				x:246,
				y:490,
				// scaleX:1.24,
				// scaleY:1.24,
			},
			// cache:{x:0,y:0,width:134,height:476,scale:2}
		},
		{
			name:"canonBall1",
			type:"ClipGroupcopy3",
			namespace:"lib",
			props:{
				x:97,
				y:185,
				regX:47,
				regY:175,
				scaleX:0.3,
				scaleY:0.3,
			}
			
		},
		{
			name:"arrow1Line",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"arrow1",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:98,
				y:185,
				regX:14,
				regY:14,
				scaleX:0.5 * 1.34,
				scaleY:0.5 * 1.34,
			}
			
		},
		{
			name:"smoke1",
			type:"SmokeBlast",
			namespace:"lib",
			props:{
				x:47,
				y:570,
				rotation:-90,
				visible:false
			},
			// cache:{x:-20,y:-20,width:170,height:150,scale:2}
		},
		{
			name:"cannon",
			type:"canon2",
			namespace:"lib",
			props:{
				x:38,
				y:582,
			},
			cache:{x:-20,y:-20,width:170,height:150,scale:2}
		},
		{
			name:"backupCannon1",
			type:"ClipGroupcopy3",
			namespace:"lib",
			props:{
				x:52,
				y:651,
				regX:47,
				regY:175,
				scaleX:0.3,
				scaleY:0.3,
			}
			
		},
		{
			name:"backupCannon2",
			type:"ClipGroupcopy3",
			namespace:"lib",
			props:{
				x:63,
				y:664,
				regX:47,
				regY:175,
				scaleX:0.3,
				scaleY:0.3,
			}
			
		},
		{
			name:"backupCannon3",
			type:"ClipGroupcopy3",
			namespace:"lib",
			props:{
				x:44,
				y:670,
				regX:47,
				regY:175,
				scaleX:0.3,
				scaleY:0.3,
			}
			
		}
	]
}