var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "Bg",
			props: {
				x: 515.55,
				y: 452.05,
			}
		},
		{
			name: "patch",
			namespace: "lib",
			type: "Button_Set_1",
			props: {
				x: -4.9,
				y: 719.35,
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
				y: 727,
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
				x: 945.4,
				y: 727,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		}, 
		{
			name:"frequencyValue",
			type:"Text",
			namespace:"createjs",
			props:{
				x:890,
				y:474.4,
				font:"bold 18px Arial",
				text:"--",
				textAlign:"left",
				color:"#FFFFFF"
			}
		},
		{
			name:"frequencyText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:835,
				y:474.4,
				font:"bold 18px Arial",
				text:"Frequency:",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"lengthText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:132,
				y:434.4,
				font:"bold 18px Arial",
				text:"Length 16/16",
				textAlign:"left",
				color:"#FFFFFF"
			}
		},
		{
			name:"additional",
			type:"Text",
			namespace:"createjs",
			props:{
				x:522,
				y:569,
				font:"bold 18px Arial",
				text:"Additional instruments to play:",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"bass",
			type:"Text",
			namespace:"createjs",
			props:{
				x:397,
				y:650,
				font:"18px Arial",
				text:"Bass",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"guitar",
			type:"Text",
			namespace:"createjs",
			props:{
				x:520,
				y:650,
				font:"18px Arial",
				text:"Guitar",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"piano",
			type:"Text",
			namespace:"createjs",
			props:{
				x:643,
				y:650,
				font:"18px Arial",
				text:"Piano",
				textAlign:"center",
				color:"#FFFFFF"
			}
		},
		{
			name:"stepper",
			type:"NumericStepper",
			min:1,
			max:11,
			step:1,
			value:1,
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
			gap:2,
			props:{
				x:841,
				y:253,
				scaleX:0.5*0.9,
				scaleY:0.5,
			}
		},
		{
			name:"index",
			type:"Text",
			namespace:"createjs",
			props:{
				x:913,
				y:261,
				font:"bold 36px Arial",
				text:"1",
				textAlign:"center",
				color:"#000000"
			}
		},
		{
			name:"whiteHand",
			namespace:"lib",
			type:"Whitehand",
			props:{
				x:475.1,
				y:217,
			}
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
			name: "leftBridge",
			namespace: "lib",
			type: "Symbol12",
			props: {
				x: 83.7,
				y: 329.05,
				scaleX:1.73,
				scaleY:1.73
			},
		},
		{
			name: "bassCheck",
			namespace: "lib",
			type: "mc_01",
			props: {
				x: 383.8,
				y: 605,
				shadow: {
					color:"rgba(0,0,0,1)",
					offsetX:0,
					offsetY:0,
					blur:24
				}
			},
			hitBounds:{x:0,y:0,width:26.95, height:25.4}
		},
		{
			name: "guitarCheck",
			namespace: "lib",
			type: "mc_02",
			props: {
				x: 507,
				y: 605,
				shadow: {
					color:"rgba(0,0,0,1)",
					offsetX:0,
					offsetY:0,
					blur:24
				}
			},
			hitBounds:{x:0,y:0,width:26.95, height:25.4}
		},
		{
			name: "pianoCheck",
			namespace: "lib",
			type: "mc_02",
			props: {
				x: 630.2,
				y: 605,
				shadow: {
					color:"rgba(0,0,0,1)",
					offsetX:0,
					offsetY:0,
					blur:24
				}
			},
			hitBounds:{x:0,y:0,width:26.95, height:25.4}
		},
		{
			name: "bassTick",
			namespace: "lib",
			type: "cross",
			props: {
				x: 397.8,
				y: 618,
				visible: true
			},
		},
		{
			name: "guitarTick",
			namespace: "lib",
			type: "cross",
			props: {
				x: 521,
				y: 618,
				visible: false
			},
		},
		{
			name: "pianoTick",
			namespace: "lib",
			type: "cross",
			props: {
				x: 644.2,
				y: 618,
				visible: false
			}
		},
		{
			name: "bridge",
			namespace: "lib",
			type: "StringRod",
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
			name:"bass",
			namespace:"lib",
			type:"BassView",
			props:{
				x:69.9,
				y:757.3,
				visible:false
			},
			hitBounds:{x:-69.25,y:-30.95,width:138.5,height:61.9}
		},
		{
			name:"guitar",
			namespace:"lib",
			type:"GuitarView",
			props:{
				x:210.3,
				y:757.3,
			},
			hitBounds:{x:-69.25,y:-30.95,width:138.5,height:61.9}
		},
		{
			name:"piano",
			namespace:"lib",
			type:"Pianoview",
			props:{
				x:350.9,
				y:757.3,
			},
			hitBounds:{x:-69.25,y:-30.95,width:138.5,height:61.9}
		},
		{
			name:"bassClick",
			namespace:"lib",
			type:"BassClick",
			props:{
				x:210.2,
				y:767.2,
			}
		},
		{
			name:"guitarClick",
			namespace:"lib",
			type:"Guitarclick",
			props:{
				x:210.2,
				y:767.2,
				visible:false
			}
		},
		{
			name:"pianoClick",
			namespace:"lib",
			type:"PianoClick",
			props:{
				x:210.2,
				y:767.2,
				visible:false
			}
		},
		{
			name:"lineO",
			namespace:"lib",
			type:"LineOrange",
			props:{
				x:210.2,
				y:799.2,
			}
		},
		
		{
			name:"bassText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:49,
				y:737.3,
				font:"bold 18px Arial",
				text:"Bass",
				textAlign:"Center",
				color:"#FFFFFF",
				visible:true,
			}
		},
		{
			name:"bassText2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:53,
				y:761.3,
				font:"bold 16px Arial",
				text:"view",
				textAlign:"Center",
				color:"#FFFFFF",
				visible:true,
			}
		},
		
		{
			name:"guitarText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:183,
				y:737.3,
				font:"bold 18px Arial",
				text:"Guitar",
				textAlign:"Center",
				color:"#FFFFFF",
				visible:true,
			}
		},
		{
			name:"guitarText2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:192,
				y:761.3,
				font:"bold 16px Arial",
				text:"view",
				textAlign:"Center",
				color:"#FFFFFF",
				visible:true,
			}
		},
		
		{
			name:"pianoText",
			type:"Text",
			namespace:"createjs",
			props:{
				x:327,
				y:737.3,
				font:"bold 18px Arial",
				text:"Piano",
				textAlign:"Center",
				color:"#FFFFFF",
				visible:true,
			}
		},
		{
			name:"pianoText2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:333,
				y:761.3,
				font:"bold 16px Arial",
				text:"view",
				textAlign:"Center",
				color:"#FFFFFF",
				visible:true,
			}
		},
	]
}
