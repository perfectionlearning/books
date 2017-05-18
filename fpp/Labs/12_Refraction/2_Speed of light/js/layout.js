var layout = {
	background: [
		{
			name: "bg",
			namespace: "lib",
			type: "Bg",
			props: {
				x: 603.8,
				y: 506.9,
			}
		},
	],
	foreground: [
		{
			name: "left",
			namespace: "lib",
			type: "Submarine_Small01",
			props: {
				x: 278.2,
				y: 657.7,
				scaleX:	0.84,
				scaleY: 0.84,
			}
		},
		{
			name: "middle",
			namespace: "lib",
			type: "Submarine_big01",
			props: {
				x: 600.9,
				y: 666.8,
				scaleX: 0.52,
				scaleY: 0.52,
			}
		},
		{
			name: "right",
			namespace: "lib",
			type: "Submarine_medium01",
			props: {
				x: 960.2,
				y: 630.7,
				scaleX:	0.58,
				scaleY: 0.58,
			}
		},
		{
			name: "helicopterLeft",
			namespace: "lib",
			type: "Helicopter",
			props: {
				x: 64.4,
				y: 72.6,
			}
		},
		{
			name: "helicopterMiddle",
			namespace: "lib",
			type: "Helicopter_Small",
			props: {
				x: 396.4,
				y: 66.1,
				rotation: -5
			}
		},
		{
			name: "helicopterRight",
			namespace: "lib",
			type: "Helicopter2",
			props: {
				x: 740.9,
				y: 73.1,
				rotation: 11.7
			}
		},
		{
			name:"arrowLeft",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:927,
				y:185,
				regX:7.5,
				regY:7.5,
				scaleX:1.4,
				scaleY:1.4,
			}
			
		},
		{
			name:"arrowLeftLine",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"arrowMiddle",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:927,
				y:185,
				regX:7.5,
				regY:7.5,
				scaleX:1.4,
				scaleY:1.4,
			}
			
		},
		{
			name:"arrowMiddleLine",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"arrowRight",
			type:"Bitmap",
			namespace:"createjs",
			img:"arrow1",
			props:{
				x:927,
				y:185,
				regX:7.5,
				regY:7.5,
				scaleX:1.4,
				scaleY:1.4,
			}
			
		},
		{
			name:"arrowRightLine",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"player_1",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name:"player_2",
			type:"Shape",
			namespace:"createjs",				
		},
		{
			name: "patch",
			namespace: "lib",
			type: "Button_Set_1",
			props: {
				x: -5,
				y: 723,
				scaleX: 1.25,
				scaleY: 1.25,
			}
		},
		{
			name: "fireButton",
			type: "Button",
			up: "fireIconN",
			over: "fireIconO",
			down: "fireIconC",
			props: {
				x: 871.5,
				y: 731,
				scaleX: 0.5*1.25,
				scaleY: 0.5*1.25,
			}
		}, {
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
			name:"velocityText1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:296,
				y:753,
				font:"bold italic 18px Arial",
				text:"V",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityText2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:485,
				y:753,
				font:"bold italic 18px Arial",
				text:"V",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityText3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:676,
				y:753,
				font:"bold italic 18px Arial",
				text:"V",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityTextN1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:309,
				y:758,
				font:"bold italic 13px Arial",
				text:"1",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityTextN2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:498,
				y:758,
				font:"bold italic 13px Arial",
				text:"2",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityTextN3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:688,
				y:758,
				font:"bold italic 13px Arial",
				text:"3",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocity1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:341,
				y:753,
				font:"bold 18px Arial",
				text:"0.0",
				textAlign:"center",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocity2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:529,
				y:753,
				font:"bold 18px Arial",
				text:"0.0",
				textAlign:"center",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocity3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:719,
				y:753,
				font:"bold 18px Arial",
				text:"0.0",
				textAlign:"center",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityLeftExpo",
			type:"Text",
			namespace:"createjs",
			props:{
				x:359,
				y:753,
				font:"bold 18px Arial",
				text:"x 10",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityMiddleExpo",
			type:"Text",
			namespace:"createjs",
			props:{
				x:547,
				y:753,
				font:"bold 18px Arial",
				text:"x 10",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityRightExpo",
			type:"Text",
			namespace:"createjs",
			props:{
				x:737,
				y:753,
				font:"bold 18px Arial",
				text:"x 10",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityLeftExponent",
			type:"Text",
			namespace:"createjs",
			props:{
				x:396,
				y:748,
				font:"bold 13px Arial",
				text:"8",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityMiddleExponent",
			type:"Text",
			namespace:"createjs",
			props:{
				x:584,
				y:748,
				font:"bold 13px Arial",
				text:"8",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityRightExponent",
			type:"Text",
			namespace:"createjs",
			props:{
				x:774,
				y:748,
				font:"bold 13px Arial",
				text:"8",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityLeftUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:405,
				y:753,
				font:"bold 18px Arial",
				text:"m/s",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityMiddleUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:593,
				y:753,
				font:"bold 18px Arial",
				text:"m/s",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"velocityRightUnit",
			type:"Text",
			namespace:"createjs",
			props:{
				x:783,
				y:753,
				font:"bold 18px Arial",
				text:"m/s",
				textAlign:"left",
				color:"#ffffff",
				
			}
		},
		{
			name:"instructionU1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:135,
				y:734,
				font:"bold 16px Arial",
				text:"You scored the most hits",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"instructionU2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:135,
				y:753,
				font:"bold 16px Arial",
				text:"and defeated the computer.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"instructionU3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:135,
				y:772,
				font:"bold 16px Arial",
				text:"Press RESET to try again.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"instructionC1",
			type:"Text",
			namespace:"createjs",
			props:{
				x:135,
				y:734,
				font:"bold 16px Arial",
				text:"The computer scored the",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"instructionC2",
			type:"Text",
			namespace:"createjs",
			props:{
				x:135,
				y:753,
				font:"bold 16px Arial",
				text:"most hits and defeated you.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name:"instructionC3",
			type:"Text",
			namespace:"createjs",
			props:{
				x:135,
				y:772,
				font:"bold 16px Arial",
				text:"Press RESET to try again.",
				textAlign:"center",
				color:"#000000",
				visible:false
			}
		},
		{
			name: "blast",
			namespace: "lib",
			type: "mc_boom",
			props: {
				x: 949,
				y: 85.1,
				regX : 30.6,
				regY : 30.7,
				visible:false
			}
		},
	]
}
