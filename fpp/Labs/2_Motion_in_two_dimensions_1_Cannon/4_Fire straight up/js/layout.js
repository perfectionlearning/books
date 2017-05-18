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
				x:146,
				y:750,
				font:"bold 19px CentraleSansBold",
				text:"Vertical Firing Velocity",
				textAlign:"center"
			}
		},
		{
			name:"speedUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:319,
				y:766,
				font:"bold 25px CentraleSansBold",
				text:"m/s",
				textAlign:"center",
				color:"white"
			}
		},
		{
			name:"speedText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:319,
				y:734,
				font:"bold 22px CentraleSansMedium",
				text:"5.0",
				textAlign:"center"
			}
		},
		{
			name:"timeText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:457,
				y:732,
				font:"bold 27px CentraleSansMedium",
				text:"5.0",
				textAlign:"center"
			}
		},
		{
			name:"timeUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:457,
				y:765,
				font:"18px CentraleSansBold",
				text:"sec",
				textAlign:"center"
			}
		},
		{
			name:"text1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:560,
				y:725,
				font:"bold 14px CentraleSansBold",
				text:"VERTICAL",
				color:"white",
				textAlign:"center",
			}
		},
		{
			name:"text4",
			namespace:"createjs",
			type:"Text",
			props:{
				x:600,
				y:745,
				font:"16px CentraleSansBold",
				text:"m/s",
				lineWidth:10,
				lineHeight:27,
				color:"white",
				textAlign:"center",
			}
		},
		{
			name:"text5",
			// namespace:"createjs",
			type:"SSText",
			props:{
				x:585,
				y:772,
				// font:"16px CentraleSansBold",
				color:"white",
				text:"m/s^2",
			},
			fonts:["16px CentraleSansBold", "10px CentraleSansBold"],
			hgap:8
		},
		{
			name:"text3",
			namespace:"createjs",
			type:"Text",
			props:{
				x:520,
				y:746,
				font:"italic 16px CentraleSansBold",
				text:"v a",
				lineWidth:10,
				lineHeight:27,
				color:"white",
				textAlign:"center",
			}
		},
		{
			name:"text2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:650,
				y:725,
				font:"bold 14px CentraleSansBold",
				text:"HORIZONTAL",
				color:"white",
				textAlign:"center",
			}
		},
		{
			name:"txtVy",
			namespace:"createjs",
			type:"Text",
			props:{
				x:558,
				y:746,
				font:"bold 15px CentraleSansMedium",
				text:"15.2",
				textAlign:"center",
			}
		},
		{
			name:"txtAy",
			namespace:"createjs",
			type:"Text",
			props:{
				x:558,
				y:773,
				font:"bold 15px CentraleSansMedium",
				text:"9.2",
				textAlign:"center",
			}
		},
		{
			name:"txtVx",
			namespace:"createjs",
			type:"Text",
			props:{
				x:653,
				y:746,
				font:"bold 15px CentraleSansMedium",
				text:"---",
				textAlign:"center",
			}
		},
		{
			name:"txtAx",
			namespace:"createjs",
			type:"Text",
			props:{
				x:653,
				y:773,
				font:"bold 15px CentraleSansMedium",
				text:"---",
				textAlign:"center",
			}
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
				x:360,
				y:723,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"fireButton",
			type:"Button",
			up:"fireIconN",
			over:"fireIconO",
			down:"fireIconC",
			props:{
				x:727,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:941,
				y:728,
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
				y:728,
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
				y:728,
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