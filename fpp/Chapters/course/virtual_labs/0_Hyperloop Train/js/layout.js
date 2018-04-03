var layout = {
	background:[
		{
			name:"BG",
			namespace:"lib",
			type:"Bg",
			transform:[503.4,460.7]
		},{
			name:"patch",
			namespace:"lib",
			type:"mc_patch",
			transform:[511.6,758.1,1.25,1.25,0,0,0,512.6,31.5]
		},{
			name:"r75",
			namespace:"lib",
			type:"r75m",
			transform:[269.6,588.1,1,1,0,0,0,-0.3,-0.3]
		},{
			name:"r15m",
			namespace:"lib",
			type:"r15m",
			transform:[746.5,349.6,1,1,0,0,0,0.3,-0.3]
		},{
			name:"speedUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:233,
				y:748,
				font:"bold 18px Arial",
				text:"m/s",
				textAlign:"center",
				color:"white"
			}
		},{
			name:"speedText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:56,
				y:748,
				font:"bold 18px Arial",
				text:"Speed",
				textAlign:"center",
				color:"white"
			}
		},{
			name:"timer0",
			namespace:"createjs",
			type:"Text",
			props:{
				x:307,
				y:58,
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
				x:329,
				y:85,
				font:"13px Arial",
				text:"62",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"timer30",
			namespace:"createjs",
			type:"Text",
			props:{
				x:285,
				y:85,
				font:"13px Arial",
				text:"187",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"timer20",
			namespace:"createjs",
			type:"Text",
			props:{
				x:454,
				y:58,
				font:"13px Arial",
				text:"0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"timer29",
			namespace:"createjs",
			type:"Text",
			props:{
				x:476,
				y:85,
				font:"13px Arial",
				text:"56",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"timer227",
			namespace:"createjs",
			type:"Text",
			props:{
				x:432,
				y:85,
				font:"13px Arial",
				text:"168",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"ms",
			namespace:"createjs",
			type:"Text",
			props:{
				x:307,
				y:110,
				font:"bold 15px Arial",
				text:"m/s",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"ms2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:454,
				y:110,
				font:"bold 15px Arial",
				text:"m/s",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:470,
				y:107,
				font:"bold 12px Arial",
				color:"black",
				text:"2",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"speedText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:302,
				y:23,
				font:"14px Arial",
				color:"white",
				text:"SPEED",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"accelerationText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:453,
				y:23,
				font:"14px Arial",
				color:"white",
				text:"ACCELERATION",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"x",
			namespace:"createjs",
			type:"Text",
			props:{
				x:557,
				y:23,
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
				x:707,
				y:24,
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
				x:607,
				y:23,
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
				x:757,
				y:24,
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
				x:638,
				y:93,
				font:"14px Arial",
				color:"white",
				text:"250",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"0x",
			namespace:"createjs",
			type:"Text",
			props:{
				x:599,
				y:93,
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
				x:558,
				y:93,
				font:"14px Arial",
				color:"white",
				text:"-250",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"40y",
			namespace:"createjs",
			type:"Text",
			props:{
				x:798,
				y:42,
				font:"14px Arial",
				color:"white",
				text:"250",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"0y",
			namespace:"createjs",
			type:"Text",
			props:{
				x:791,
				y:79.5,
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
				x:802,
				y:118,
				font:"14px Arial",
				color:"white",
				text:"-250",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"m/s1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:620,
				y:116,
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
				x:704,
				y:85,
				font:"bold 18px Arial",
				color:"white",
				text:"m/s",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"r1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:651,
				y:354,
				font:"bold italic 18px Arial",
				color:"white",
				text:"r",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"r2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:244,
				y:592,
				font:"bold italic 18px Arial",
				color:"white",
				text:"r",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"rad1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:698,
				y:355,
				font:"bold 18px Arial",
				color:"white",
				text:"= 2000 m",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"rad2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:292,
				y:593,
				font:"bold 18px Arial",
				color:"white",
				text:"= 1000 m",
				textAlign:"center",
				textBaseline:"middle"
			}
		},
	],
	foreground:[
		{
			name:"line1",
			namespace:"createjs",
			type:"Shape",
			props:{
				x:757,
				y:81,
			}
		},{
			name:"line3",
			namespace:"createjs",
			type:"Shape",
			props:{
				x:733,
				y:81,
			}
		},{
			name:"line2",
			namespace:"createjs",
			type:"Shape",
			props:{
				x:598,
				y:58,
			}
		},{
			name:"line4",
			namespace:"createjs",
			type:"Shape",
			props:{
				x:599,
				y:39,
			}
		},{
			name:"xVelocity",
			namespace:"createjs",
			type:"Text",
			props:{
				x:582,
				y:116,
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
				x:704,
				y:63,
				font:"bold 18px Arial",
				color:"white",
				text:"0.0",
				textAlign:"center",
				textBaseline:"middle"
			}
		},{
			name:"engine",
			namespace:"lib",
			type:"mc_01",
			// props:{
				// x:428,
				// y:297.9,
				// scaleX:1.3,
				// scaleY:1.3,
				// rotation:270,
				// regX:20,
				// regY:20
			// },
			// hitBounds:{x:-50,y:-20,width:40,height:48}
			transform:[243.2,192.6,1,0.882,0,0,0,56,21.6],
			// cache:{x:0, y:0, width:160, height:50, scale:2}
		},
		{
			name:"coach1",
			namespace:"lib",
			type:"mc_02",
			// props:{
				// x:59,
				// y:325.9,
				// scaleX:0.099,
				// scaleY:0.099,
				// regX:20,
				// regY:20
			// },
			// hitBounds:{x:-50,y:-20,width:40,height:48}
			transform:[158.1,190,1,0.882,0,0,0,43.5,21.4],
			// cache:{x:0, y:0, width:130, height:50, scale:2}
		},{
			name:"coach2",
			namespace:"lib",
			type:"mc_03",
			// props:{
				// x:59,
				// y:325.9,
				// scaleX:0.099,
				// scaleY:0.099,
				// regX:20,
				// regY:20
			// },
			// hitBounds:{x:-50,y:-20,width:40,height:48}
			transform:[83.2,190,1,0.882,0,0,0,44.4,21.4],
			// cache:{x:0, y:0, width:130, height:50, scale:2}
		},
		// {
			// name:"coach2_crash",
			// namespace:"lib",
			// type:"Symbol8",
			// transform:[438.6,409.9,1,1,0,0,0,44.1,31.6],
		// },{
			// name:"coach1_crash",
			// namespace:"lib",
			// type:"Symbol7",
			// transform:[525.4,400.9,1,1,0,0,0,50.5,25.3],
		// },{
			// name:"engine_crash",
			// namespace:"lib",
			// type:"Symbol6",
			// transform:[525.4,400.9,1,1,0,0,0,50.5,25.3],
		// },
		{
			name:"hyperloop",
			namespace:"lib",
			type:"_01",
			// props:{
				// x:59,
				// y:325.9,
				// scaleX:0.099,
				// scaleY:0.099,
				// regX:20,
				// regY:20
			// },
			// hitBounds:{x:-50,y:-20,width:40,height:48}
			transform:[0,162]
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
		},
		{
			name:"stepper",
			type:"NumericStepper",
			min:0,
			max:250,
			step:5,
			value:0.0,
			delay:1,
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
				x:95,
				y:721,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"speed",
			namespace:"createjs",
			type:"Text",
			props:{
				x:178,
				y:759,
				font:"bold 18px Arial",
				text:"0.0",
				textAlign:"center",
				color:"black",
				textBaseline:"middle"
			}
		},
		{
			name:"speedometer1",
			type:"SpeedoMeter",
			minAngle:0,
			maxAngle:360,
			minValue:0,
			maxValue:250,
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
					transform:[307.5,87,1,1,0,0,0,1,48]
				},
				{
					name:"text1",
					namespace:"createjs",
					type:"Text",
					props:{
						x:307,
						y:97,
						font:"bold 13px Arial",
						text:"0.0",
						textBaseline:"middle",
						textAlign:"center"
					}
				}
			]
		},
		{
			name:"speedometer2",
			type:"SpeedoMeter",
			minAngle:0,
			maxAngle:360,
			minValue:0,
			maxValue:225,
			value:0,
			children:[
				{
					name:"needle2",
					namespace:"lib",
					type:"mc_nidle2",
					// props:{
						// x:453,
						// y:86,
						// width:4,
						// height:24,
						// regX:0,
						// regY:46
					// }
					transform:[454,87,1,1,0,0,0,1,48]
				},
				{
					name:"text2",
					namespace:"createjs",
					type:"Text",
					props:{
						x:454,
						y:97,
						font:"bold 13px Arial",
						text:"0.0",
						textBaseline:"middle",
						textAlign:"center",
					}
				}
			]
		}
	]
}