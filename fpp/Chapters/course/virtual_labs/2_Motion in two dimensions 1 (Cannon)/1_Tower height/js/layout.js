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
			type:"Symbol8copy3",
			transform:[640.1,758.7,1.25,1.25,0,0,0,512.1,31.5]
		} /* */
	],
	foreground:[
		{
			name:"timeText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:336,
				y:756,
				font:"bold 18px Arial",
				text:"5.0",
				color:"#fff",
				textBaseline:"middle",
				textAlign:"center"
			}
		},
		{
			name:"textcont",
			type:"Container",
			namespace:"createjs",
			props:{
				x:-476,
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
		}/* ,
		{
			name:"fireButton",
			type:"Button",
			up:"fireIconN",
			over:"fireIconO",
			down:"fireIconC",
			props:{
				x:326,
				y:727,
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
				y:723,
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
				y:723,
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
				y:723,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
				visible:false
			}
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
				scaleX:0.8,
				scaleY:0.8
			}
		},
		{
			name:"tower_1",
			type:"Canon1",
			namespace:"lib",
			transform:[439,315.2,1,1,0,0,0,72.4,234.1],
			cache:{x:-20, y:-20, width:200, height:800, scale:2}
			
		},
		{
			name:"mudBall",
			type:"Ballanimation",
			namespace:"lib",
			props:{
				loop:false,
				scaleX:1.6,
				scaleY:1.6,
			}
		}
	]
}