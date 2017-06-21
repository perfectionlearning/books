var layout = {
	background:[
		{
			name:"bg",
			namespace:"lib",
			type:"bg",
			transform:[537.2,404,1,1,0,0,0,551,404],
			cache:{x:0, y:0, width:1050, height:808, scale:2}
		},
		{
			name:"t1",
			namespace:"lib",
			type:"caslered",
			props:{
				x:72,
				y:287
			}
		},
		{
			name:"t2",
			namespace:"lib",
			type:"casleyellow",
			props:{
				x:933,
				y:299
			}
		},
		{
			name:"hole1",
			namespace:"lib",
			type:"hole1",
			props:{
				x:201,
				y:579,
				scaleX:0.8,
			}
		},
		{
			name:"hole2",
			namespace:"lib",
			type:"hole2",
			props:{
				x:812,
				y:580,
				scaleX:0.8,
			}
		},
		{
			name:"patch",
			namespace:"lib",
			type:"mc_patch",
			transform:[511,759,1.25,1.25,0,0,0,512.6,31.5]
		}
	],
	foreground:[{
			name:"insText1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:27,
				y:755,
				font:"bold 18px Arial",
				text:"Horizontal firing velocity",
				color:"white",
				textBaseline:"middle",
			}
		},{
			name:"insText2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:417,
				y:755,
				font:"bold 18px Arial",
				text:"Vertical firing velocity",
				textBaseline:"middle",
				color:"white",
			}
		},{
			name:"hSpeedUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:375,
				y:755,
				font:"bold 18px Arial",
				text:"m/s",
				textBaseline:"middle",
				textAlign:"center",
				color:"white",
			}
		},{
			name:"hSpeedText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:325,
				y:756,
				font:"bold 18px Arial",
				text:"5.0",
				textBaseline:"middle",
				textAlign:"center"
			}
		},{
			name:"vSpeedUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:748,
				y:755,
				font:"bold 18px Arial",
				text:"m/s",
				textBaseline:"middle",
				textAlign:"center",
				color:"white",
			}
		},{
			name:"vSpeedText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:697,
				y:756,
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
				x:688,
				y:728,
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
				y:724,
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
				x:864,
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
				x:864,
				y:724,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
				visible:false
			}
		},
		{
			name:"vSpeedStepper",
			type:"NumericStepper",
			min:35,
			max:60,
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
				x:615,
				y:719,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"hSpeedStepper",
			type:"NumericStepper",
			min:0,
			max:60,
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
				x:245,
				y:719,
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
			name:"arrow2",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow2",
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
				scaleX:0.4,
				scaleY:0.4
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
				scaleX:0.4,
				scaleY:0.4
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
			name:"tower_blast_1",
			type:"Lefttowerblas",
			namespace:"lib",
			transform:[196,396,1.337,1.337,0,0,0,50.9,39],
			props:{
				loop:false
			}
		},
		{
			name:"tower_blast_2",
			type:"Righttowerblas",
			namespace:"lib",
			transform:[944,386,1.411,1.411,0,0,0,40.9,40.7],
			props:{
				loop:false
			}
		},
		{
			name:"cannon1",
			type:"Cannon_Iron",
			namespace:"lib",
			props:{
				x:199,
				y:573,
				scaleX:-1.319,
				scaleY:1.319,
				regX:-4,
				regY:-13,
				_defAngle:0
			}
		},
		{
			name:"cannon2",
			type:"Cannon_Iron",
			namespace:"lib",
			// transform:[824,573,1.319,1.319,0],
			props:{
				x:812,
				y:573,
				scaleX:1.319,
				scaleY:1.319,
				regX:-4,
				regY:-13,
				_defAngle:180,
				rotation:425
			}
		},
		{
			name:"line1",
			type:"Line1",
			namespace:"lib",
			props:{
				x:44,
				y:550,
				visible:false
			}
			
		},
		{
			name:"line2",
			type:"Line2",
			namespace:"lib",
			props:{
				x:44,
				y:550,
				visible:false
			}
			
		},
		{
			name:"point1_1",
			type:"Marker1",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:633,
				regX:15
			}
			
		},
		{
			name:"point1_2",
			type:"Marker1",
			namespace:"lib",
			props:{
				x:790 * 0.5 * 1.34,
				y:633,
				regX:15
			}
			
		},
		{
			name:"point2_1",
			type:"Marker2",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:633,
				regX:12
			}
			
		},
		{
			name:"point2_2",
			type:"Marker2",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:633,
				regX:12
			}
			
		},
		{
			name:"flag1",
			type:"Flageperple",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:533,
				regX:-9,
				scaleX:1.34,
				scaleY:1.34,
				loop:false
			}
			
		},
		{
			name:"flag2",
			type:"FlagRed",
			namespace:"lib",
			props:{
				x:790 * 0.5 * 1.34,
				y:533,
				regX:-8,
				scaleX:1.34,
				scaleY:1.34,
				loop:false
			}
			
		}/* ,
		{
			name:"peopleRun2",
			type:"mc_soldierSideview4",
			namespace:"lib",
			props:{
				x:0,
				y:526,
				regX:318,
				scaleX:-0.08,
				scaleY:0.08,
			}
			
		},
		{
			name:"peopleDie2",
			type:"mc_soldierSideview2copy3",
			namespace:"lib",
			props:{
				x:0,
				y:526,
				regX:318,
				scaleX:-0.08,
				scaleY:0.08,
				loop:false
			}
			
		},
		{
			name:"peopleWin2",
			type:"mc_soldierSideview2copy",
			namespace:"lib",
			props:{
				x:0,
				y:526,
				regX:318,
				scaleX:-0.08,
				scaleY:0.08,
				loop:false
			}
			
		},
		{
			name:"peopleRun1",
			type:"mc_soldierSideview1",
			namespace:"lib",
			props:{
				x:0,
				y:526,
				regX:428,
				scaleX:0.08,
				scaleY:0.08,
			}
			
		},
		{
			name:"peopleDie1",
			type:"mc_soldierSideview2copy2",
			namespace:"lib",
			props:{
				x:0,
				y:526,
				regX:428,
				scaleX:0.08,
				scaleY:0.08,
				loop:false
			}
			
		},
		{
			name:"peopleWin1",
			type:"mc_soldierSideview2",
			namespace:"lib",
			props:{
				x:0,
				y:526,
				regX:428,
				scaleX:0.08,
				scaleY:0.08,
				loop:false
			}
			
		} */,
		{
			name:"blast",
			type:"blast",
			namespace:"lib",
			props:{
				x:760 * 0.5 * 1.34,
				y:15 * 0.5 * 1.34,
				// regX:16,
				// regY:18,
				scaleX:1.34,
				scaleY:1.34,
				visible:false,
				loop:false
			}
		},
		{
			name:"smoke1",
			type:"SmokeBlast",
			namespace:"lib",
			transform:[255.6,526,1,1,-38.7,0,0,-283.7,-229.3],
			props:{
				visible:false
			}
		},
		{
			name:"smoke2",
			type:"SmokeBlast",
			namespace:"lib",
			transform:[787.6,526,1,1,0,38.7,-141.3,-283.7,-229.3],
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
		} /* */
	]
}