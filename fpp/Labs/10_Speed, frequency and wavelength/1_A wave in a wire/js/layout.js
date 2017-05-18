var layout = {
	background:[
		{
			name:"Bg",
			type:"Bg",
			namespace:"lib",
			transform:[0.5,0.5]
		},
		{
			name:"patch",
			type:"Button_Set_1copy2",
			namespace:"lib",
			transform:[622.6,758.9,1.25,1.25,0,0,0,512.6,31.5]
		}
	],
	foreground:[{
			type:"Container",
			namespace:"createjs",
			name:"birdscontainer",
			props:{
				x:140,
				y:280
			},
			children:[
				{
					name:"parrot",
					type:"RedParrot",
					namespace:"lib",
					props:{
						_wirePos:0.25,
						_wingFlip:true,
						_wingFlipInterval:6,
						_wingFlipFrame:8,
						_wingFlipFrame2:10,
						_headAnimFrame:28
					}
				},
				{
					name:"bird1",
					type:"sparrow_blue",
					namespace:"lib",
					props:{
						_wirePos:1.5,
						_tilting:true,
						_defaultR:0,
						_thresholdA:0.65,
						_flyDir:-Math.PI / 4,
						ampVal:0.65
					},
					transform:[408,-19,1,1,0,0,0,35.6,51.4]
				},
				{
					name:"bird2",
					type:"sparrow_red",
					namespace:"lib",
					props:{
						_wirePos:2.5,
						_tilting:true,
						_defaultR:360,
						_thresholdA:0.25,
						_flyDir:-Math.PI / 6,
						ampVal:0.25
					},
					transform:[610.4,261.2,1,1,0,0,0,35.6,51.4]
				},
				{
					name:"bird3",
					type:"sparrow_orange",
					namespace:"lib",
					props:{
						_wirePos:2.75,
						_tilting:true,
						_defaultR:360,
						_thresholdA:0.4,
						_flyDir:-Math.PI / 6,
						ampVal:0.4
					},
					transform:[882.3,261.7,1,1,0,0,0,35.6,51.4]
				},
				{
					name:"bird4",
					type:"sparrow_yellow1",
					namespace:"lib",
					props:{
						_wirePos:3,
						_tilting:true,
						_defaultR:360,
						_thresholdA:0.15,
						_flyDir:-Math.PI / 6,
						ampVal:0.15
					},
					transform:[700.3,261.7,1,1,0,0,0,35.6,51.4]
				}
			]
		},
		{
			type:"Shape",
			namespace:"createjs",
			name:"waveshape",
			props:{
				x:140,
				y:280
			}
		},
		{
		name:"leftleg",
		type:"LeftLeg",
		namespace:"lib",
		props:{
			x:140,
			y:280,
		},
		transform:[140,280,1,1,0,0,0,0,0],
		},
		{
			name:"rightleg",
			type:"LeftLeg",
			namespace:"lib",
			props:{
				x:155,
				y:280,
				skewY:180
			},
			transform:[140,280,1,1,0,0,0,0,0],
		},		
		{
			type:"Text",
			namespace:"createjs",
			name:"statictText1",
			props:{
				x:39,
				y:749,
				text:"Grid = 0.25 m",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"statictText4",
			props:{
				x:184,
				y:750,
				text:"Amplitude",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"statictText6",
			props:{
				x:403,
				y:749,
				text:"m",
				font:"Bold 18px Arial",
				color:"white"
			}
		},
		{
			type:"Text",
			namespace:"createjs",
			name:"ampText",
			props:{
				x:348,
				y:749,
				text:"0.10",
				font:"Bold 18px Arial",
				color:"black"
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
				x:459,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
				visible:true
			}
		},
		{
			name:"resume",
			type:"Button",
			up:"playIconN",
			over:"playIconO",
			down:"playIconC",
			props:{
				x:459,
				y:727,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
				visible:false
			}
		}
		,{
			name:"playButton",
			type:"Button",
			up:"goBtnN",
			over:"goBtnO",
			down:"goBtnC",
			props:{
				x:864,
				y:727,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25
			}
		},{
			name:"ampStepper",
			type:"NumericStepper",
			gap:1,
			delay:10,
			min:0.10,
			max:0.75,
			step:0.05,
			value:0.10,
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
			props:{
				x:282,
				y:723,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		}
	]
}