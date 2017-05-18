var layout = {
	background:[
		{
			name:"bg",
			namespace:"lib",
			type:"Bg_1",
		},
		{
			name:"patch",
			namespace:"lib",
			type:"Symbol8555",
			props:{
				x:-5,
				y:720,
				scaleX:1.25,
				scaleY:1.25
			}
		} /* */
	],
	foreground:[{
			name:"insText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:121,
				y:760,
				font:"bold 16px Arial",
				text:"Horizontal firing velocity",
				textAlign:"center",
				color:"#fff",
				textBaseline:"middle"
			}
		},{
			name:"speedUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:351,
				y:760,
				font:"bold 16px Arial",
				text:"m/s",
				textAlign:"center",
				color:"white",
				textBaseline:"middle"
			}
		},{
			name:"speedText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:304,
				y:759,
				font:"bold 18px Arial",
				text:"5.0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"fireButton",
			type:"Button",
			up:"fireIconN",
			over:"fireIconO",
			down:"fireIconC",
			props:{
				x:394,
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
				visible:false
			}
		},{
			name:"stepper",
			type:"NumericStepper",
			min:0,
			max:62.5,
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
				x:225,
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
				y:225,
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
			name:"arrow2",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow2",
			props:{
				x:100,
				y:225,
				regX:14,
				regY:14,
				scaleX:0.5 * 1.34,
				scaleY:0.5 * 1.34,
			}
			
		},
		{
			name:"arrow2Line",
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
				scaleX:0.5 * 1.34,
				scaleY:0.5 * 1.34
			}
		},
		{
			name:"canonBall2",
			type:"Bitmap",
			namespace:"createjs",
			img:"canonBall",
			props:{
				x:1250,
				y:187,
				regY:11.5,
				regX:11.5,
				scaleX:0.5 * 1.34,
				scaleY:0.5 * 1.34
			}		
		},
		{
			name:"tower_1",
			type:"Canon1",
			namespace:"lib",
			transform:[94,357.2,1,1,0,0,0,72.4,234.1],
			cache:{x:-20, y:-20, width:200, height:800, scale:2}
			
		},
		{
			name:"tower_blast_1",
			type:"Lefttowerblas",
			namespace:"lib",
			transform:[166,431.8,1.337,1.337,0,0,0,51,39],
			// cache:{x:0, y:0, width:500, height:500}
		},
		{
			name:"tower_2",
			type:"Canon2",
			namespace:"lib",
			transform:[930,362.9,1,1,0,0,0,96.9,239.8],
			cache:{x:-20, y:-20, width:200, height:800, scale:2}
			
		},
		{
			name:"tower_blast_2",
			type:"Righttowerblas",
			namespace:"lib",
			transform:[981,428.7,1.411,1.411,0,0,0,40.8,40.7],
			// cache:{x:0, y:0, width:500, height:500}
		},
		{
			name:"line1",
			type:"Line1",
			namespace:"lib",
			props:{
				x:66,
				y:616,
				visible:false
			}
			
		},
		{
			name:"line2",
			type:"Line2",
			namespace:"lib",
			props:{
				x:66,
				y:616,
				visible:false
			}
			
		},
		{
			name:"p1thumb",
			type:"Player1",
			namespace:"lib",
			props:{
				x:627 * 0.5 * 1.34,
				y:15 * 0.5 * 1.34
			}
			
		},
		{
			name:"p2thumb",
			type:"Player2",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:15 * 0.5 * 1.34
			}
			
		},
		{
			name:"flag1",
			type:"Flageperple",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:591,
				regX:-10,
				scaleX:1.34,
				scaleY:1.34,
			}
			
		},
		{
			name:"flag2",
			type:"FlagRed",
			namespace:"lib",
			props:{
				x:790 * 0.5 * 1.34,
				y:591,
				regX:-7,
				scaleX:1.34,
				scaleY:1.34,
			}
			
		} /* */,
		{
			name:"point1_1",
			type:"Marker1",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:678,
				regX:17
			}
			
		},
		{
			name:"point1_2",
			type:"Marker1",
			namespace:"lib",
			props:{
				x:790 * 0.5 * 1.34,
				y:678,
				regX:17
			}
			
		},
		{
			name:"point2_1",
			type:"Marker2",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:678,
				regX:12
			}
			
		},
		{
			name:"point2_2",
			type:"Marker2",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:678,
				regX:12
			}
			
		},
		{
			name:"blast",
			type:"WallBlast",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:15 * 0.5 * 1.34,
				// regX:16/*  * 0.5 * 1.34 */,
				// regY:18/*  * 0.5 * 1.34 */,
				scaleX:1.34,
				scaleY:1.34,
				visible:false
			}
		},
		{
			name:"smoke1",
			type:"SmokeBlast",
			namespace:"lib",
			transform:[228.6,174.8,1,1,0,0,0,-283.7,-229.3],
			props:{
				visible:false
			}
		},
		{
			name:"smoke2",
			type:"SmokeBlast",
			namespace:"lib",
			transform:[799,174.8,-1,1,0,0,0,-283.7,-229.3],
			props:{
				visible:false
			}
		},
		{
			name:"playerSelection",
			namespace:"createjs",
			type:"Container",
			children:[
				{
					name:"blur_bg",
					type:"Bitmap",
					namespace:"createjs",
					img:"blur_bg",
					props:{
						scaleX:0.5 * 1.348,
						scaleY:0.5 * 1.348,
					}
				},
				{
					name:"text1",
					type:"Text",
					namespace:"createjs",
					props:{
						x:410,
						y:140,
						font:"28px Arial",
						text:"Select a"
					}
				},
				{
					name:"text2",
					type:"Text",
					namespace:"createjs",
					props:{
						x:519,
						y:140,
						font:"bold 28px Arial",
						text:"mode"
					}
				},
				{
					name:"compBtn",
					type:"Button",
					up:"computerBtn",
					over:"computerBtn",
					down:"computerBtn",
					props:{
						x:290 * 1.34,
						y:210 * 1.34,
						scaleX:0.5 * 1.34,
						scaleY:0.5 * 1.34,
					}
				},
				{
					name:"playerBtn",
					type:"Button",
					up:"classmateBtn",
					over:"classmateBtn",
					down:"classmateBtn",
					props:{
						x:380 * 1.34,
						y:210 * 1.34,
						scaleX:0.5 * 1.34,
						scaleY:0.5 * 1.34,
					}
				},
				{
					name:"shield",
					type:"Bitmap",
					namespace:"createjs",
					img:"wsBackgroundLogo",
					props:{
						x:272 * 1.34,
						y:195 * 1.34,
						scaleX:0.5 * 1.34,
						scaleY:0.5 * 1.34,
					}
				}
			]
		},
		{
			name:"playAgainScreen",
			namespace:"createjs",
			type:"Container",
			props:{
				visible:false
			},
			children:[
				{
					name:"blur_bg1",
					type:"Bitmap",
					namespace:"createjs",
					img:"blur_bg",
					props:{
						scaleX:0.5 * 1.348,
						scaleY:0.5 * 1.348,
					}
				},
				{
					name:"playAgainBtn",
					type:"Playagain",
					namespace:"lib",
					props:{
						x:410,
						y:610,
					},
					hitBounds:{x:0, y:0, width:203, height:62}
				},
				{
					name:"trophy",
					type:"Ending",
					namespace:"lib",
					props:{
						x:213,
						y:137,
					},
					cache:{x:0, y:0, width:600, height:450}
				},
				{
					name:"winText",
					type:"Text",
					namespace:"createjs",
					props:{
						x:518,
						y:400,
						font:"35px Arial",
						text:"You win!",
						textAlign:"center",
						color:"white"
					}
				}
			]
		}
	]
}