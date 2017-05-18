var layout = {
	background:[
		{
			name:"skyBG",
			namespace:"lib",
			type:"mc_bg",
			transform:[512,404]
		},
		{
			name:"earthBG",
			namespace:"lib",
			type:"mc_earth",
			transform:[511.9,354.5,1.215,1.215,0,0,0,-0.1,0]
		},
		{
			name:"patchBG",
			namespace:"lib",
			type:"mc_patch",
			transform:[511.6,758.1,1.25,1.25,0,0,0,512.6,31.5]
		},
	],
	foreground:[
		{
			name:"moonImg",
			img:"moon",
			namespace:"createjs",
			type:"Bitmap",
			props:{
				x:894,
				y:353.2,
				scaleX:0.5,
				scaleY:0.5,
				regX:60,
				regY:60,
			},
			//hitBounds:{x:-50,y:-20,width:40,height:48}
			// transform:[511.6,758.1,1.25,1.25,0,0,0,512.6,31.5]
		},
		
		{
			name:"arrow1Line",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"massText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:50,
				y:725,
				lineWidth:65,
				font:"16px CentraleSans",
				text:"Mass of test object",
				textAlign:"left",
				color:"#FFFFFF"
			}
		},
		{
			name:"massValue",
			namespace:"createjs",
			type:"Text",
			props:{
				x:220,
				y:730,
				font:"16px CentraleSans",
				text:10.0,
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"massUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:220,
				y:760,
				font:"16px CentraleSans",
				text:"kg",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"massStepper",
			type:"NumericStepper",
			min:0,
			max:50,
			step:0.1,
			value:10.0,
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
				x:112,
				y:712,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		{
			name:"distanceText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:318,
				y:725,
				lineWidth:70,
				font:"16px CentraleSans",
				text:"Distance between centers",
				textAlign:"left",
				color:"#FFFFFF"
			}
		},
		{
			name:"distanceValue",
			namespace:"createjs",
			type:"Text",
			props:{
				x:450,
				y:730,
				font:"16px CentraleSans",
				lineWidth:70,
				text:9.00,
				textAlign:"left",
				border:"1px solid black",
				color:"#000000"
			}
		},
		{
			name:"tensValue",
			namespace:"createjs",
			type:"Text",
			props:{
				x:500,
				y:730,
				font:"16px CentraleSans",
				text:" x 10^6",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"distanceUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:480,
				y:760,
				font:"16px CentraleSans",
				text:"m",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"distanceStepper",
			type:"NumericStepper",
			min:6.38,
			max:10,
			step:0.01,
			value:9.00,
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
				x:385,
				y:712,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},
		
		{
			name:"gravityText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:580,
				y:725,
				lineWidth:150,
				font:"16px CentraleSans",
				text:"Force of Gravity",
				textAlign:"left",
				color:"#FFFFFF"
			}
		},
		{
			name:"gravityValue",
			namespace:"createjs",
			type:"Text",
			props:{
				x:620,
				y:760,
				font:"16px CentraleSans",
				text:49.16,
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"gravityUnit",
			namespace:"createjs",
			type:"Text",
			props:{
				x:650,
				y:760,
				font:"16px CentraleSans",
				text:"N",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
	]
}