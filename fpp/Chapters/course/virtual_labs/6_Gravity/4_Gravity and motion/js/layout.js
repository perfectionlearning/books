var layout = {
	background:[
		{
			name:"graphBG",
			namespace:"lib",
			type:"Bg",
			transform:[512,403.9,1,1,0,0,0,0,-0.1]
		},
		{
			name:"patchBG",
			namespace:"lib",
			type:"Button_Set_1",
			transform:[640.8,758.9,1.25,1.25,0,0,0,512.6,31.5]
		},
	],
	foreground:[ 
		{
			name:"forceLabelC1",
			type:"Container",
			namespace:"createjs",
			props:{
				x:10,
				y:100,
			},
			children:[ 
				{
					name:"shapeBg1",
					namespace:"createjs",
					type:"Shape"
				},
				{
					name:"t1",
					namespace:"createjs",
					type:"Text",
					props:{
						textBaseline:"middle",
						textAlign:"center",
						text:"F",
						font:"italic bold 18px Arial"
					}
				},
				{
					name:"t2",
					namespace:"createjs",
					type:"Text",
					props:{
						textBaseline:"middle",
						textAlign:"center",
						text:"= 4.03 × 10",
						font:"bold 18px Arial",
						x:55
					}
				},
				{
					name:"t3",
					namespace:"createjs",
					type:"Text",
					props:{
						textBaseline:"middle",
						textAlign:"center",
						text:"22",
						font:"bold 14px Arial",
						x:110,
						y:-5
					}
				},
				{
					name:"t4",
					namespace:"createjs",
					type:"Text",
					props:{
						textBaseline:"middle",
						textAlign:"center",
						text:"N",
						font:"bold 18px Arial",
						x:130,
					}
				}
			]
		},
		{
			name:"shape1",
			type:"Shape",
			namespace:"createjs",
		},{
			name:"shape2",
			type:"Shape",
			namespace:"createjs",
		},{
			name:"shape3",
			type:"Shape",
			namespace:"createjs",
		},{
			name:"shape4",
			type:"Shape",
			namespace:"createjs",
		},{
			name:"shape5",
			type:"Shape",
			namespace:"createjs",
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
			},
			
		},
		{
			name:"arrow2",
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
			},
			
		},
		{
			name:"arrow3",
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
			},
			
		},
		{
			name:"arrow4",
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
			},
			
		},
		{
			name:"arrow5",
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
			},
			
		},
		{
			name:"mass1",
			namespace:"lib",
			type:"Redball",
			props:{
				x:429,
				y:759,
				regX:14,
				regY:14,
				scaleX:1.05,
				scaleY:1.05,
				_mass:1,
				_radius:14.39
			},
			hitBounds:{x:0,y:1,width:27,height:27},
			cache:{x:0, y:0, width:60, height:60, scale:2}
		},
		{
			name:"mass2",
			namespace:"lib",
			type:"Redball",
			props:{
				x:480,
				y:760,
				regX:14,
				regY:14,
				scaleX:1.05,
				scaleY:1.05,
				_mass:1,
				_radius:14.39
			},
			hitBounds:{x:0,y:1,width:27,height:27},
			cache:{x:0, y:0, width:60, height:60, scale:2}
		},
		{
			name:"mass3",
			namespace:"lib",
			type:"Redball",
			props:{
				x:532,
				y:760,
				regX:15,
				regY:15,
				scaleX:1.05,
				scaleY:1.05,
				_mass:1,
				_radius:14.39
			},
			hitBounds:{x:0,y:1,width:27,height:27},
			cache:{x:0, y:0, width:60, height:60, scale:2}
		},
		{
			name:"mass4",
			namespace:"lib",
			type:"Blueball",
			props:{
				x:592,
				y:757,
				regX:25,
				regY:25,
				scaleX:0.95,
				scaleY:0.95,
				_mass:4,
				_radius:24.85
			},
			hitBounds:{x:0,y:1,width:55,height:55},
			cache:{x:0, y:0, width:60, height:60, scale:2}
		},
		{
			name:"mass5",
			namespace:"lib",
			type:"Greenball",
			props:{
				x:664,
				y:760,
				regX:20,
				regY:20,
				scaleX:1.05,
				scaleY:1.05,
				_mass:2,
				_radius:18.25
			},
			hitBounds:{x:0,y:1,width:38,height:38},
			cache:{x:0, y:0, width:60, height:60, scale:2}
		},
		{
			name:"instructionText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:50,
				y:730,
				lineWidth:300,
				font:"17px Arial",
				text:"Drag the masses from the right onto the",
				textAlign:"left",
				color:"#000000"
			}
		},
		{
			name:"instructionText2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:50,
				y:749,
				lineWidth:300,
				font:"17px Arial",
				text:"area above and view the gravitational",
				textAlign:"left",
				color:"#000000"
			}
		},
		{
			name:"instructionText3",
			namespace:"createjs",
			type:"Text",
			props:{
				x:50,
				y:769,
				lineWidth:300,
				font:"17px Arial",
				text:"forces.Press",
				textAlign:"left",
				color:"#000000"
			}
		},
		{
			name:"instructionIcon",
			// img:"playIcon",
			namespace:"lib",
			type:"mc_play01",
			props:{
				x:160,
				y:778,
				// scaleX:0.2,
				// scaleY:0.2
			},
		},
		{
			name:"instructionText4",
			namespace:"createjs",
			type:"Text",
			props:{
				x:178,
				y:769,
				lineWidth:300,
				font:"17px Arial",
				text:"to see them move.",
				textAlign:"left",
				color:"#000000"
			}
		},
		{
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
			}
		},
	]
}