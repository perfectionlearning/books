var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "Bg",
			props: {
				x: 515.55,
				y: 452.25,
			}
		},
		{
			name: "patch",
			namespace: "lib",
			type: "Button_Set_1",
			props: {
				x: -7,
				y: 723,
				scaleX: 1.25,
				scaleY: 1.25,
			}
		},
	],
	foreground: [
		{
			name: "playButton",
			type: "Button",
			up: "playIconN",
			over: "playIconO",
			down: "playIconC",
			props: {
				x: 871.5,
				y: 730.5,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		},
		{
			name: "resetButton",
			type: "Button",
			up: "replayIconN",
			over: "replayIconO",
			down: "replayIconC",
			props: {
				x: 945.5,
				y: 731,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		}, 
		{
			name:"frequencyValue",
			type:"Text",
			namespace:"createjs",
			props:{
				x:148,
				y:754.4,
				font:"bold 18px Arial",
				text:"--",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"frequencyUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:197,
				y:754.4,
				font:"bold 18px Arial",
				text:"Hz",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"frequencyText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:70,
				y:754.4,
				font:"bold 18px Arial",
				text:"Frequency",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"frequencyText1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:863,
				y:474.4,
				font:"bold 18px Arial",
				text:"Note:",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"lengthText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:132,
				y:435.4,
				font:"bold 18px Arial",
				text:"Length 16/16",
				textAlign:"left",
				color:"#000000"
			}
		},
		{
			name:"whiteHand",
			namespace:"lib",
			type:"Whitehand",
			props:{
				x:475.1,
				y:217.55,
			}
		},
		{
			name: "bridge",
			namespace: "lib",
			type: "mc_01",
			props: {
				x: 862.65,
				y: 329.9,
			},
			hitBounds:{x:0, y:0, width:16.2, height:90.35},
			cache: {x: 0, y: 0, width: 16.2, height: 90.35}
		},
		{
			name:"wave",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"redHand",
			namespace:"lib",
			type:"Hand_Red",
			props:{
				x:90.95,
				y:153.35,
				regX:-10.325,
				regY:55.7
			},
			hitBounds:{x:-33.325, y:-55.7, width:66.65, height:111.4}
		},
		{
			name:"positionText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:90,
				y:754.4,
				font:"bold 18px Arial",
				text:"---",
				textAlign:"left",
				color:"#000000",
				visible:false,
			}
		},
		{
			name:"note",
			type:"Text",
			namespace:"createjs",
			props:{
				x:890,
				y:474.4,
				font:"bold 18px Arial",
				text:"--",
				textAlign:"left",
				color:"#000000"
			}
		},
	]
}
