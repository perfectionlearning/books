var layout = {
	background:[
		{
			name:"bg",
			namespace:"lib",
			type:"bg",
			transform:[512.1,226.5,1,1,0,0,0,512.3,583]
		},
		{
			name:"patch",
			namespace:"lib",
			type:"mc_patch",
			transform:[512.1,744.5]
		}
	],
	foreground:[{
			name:"molecule1",
			namespace:"lib",
			type:"mc_blue",
			props:{
				x:100,
				y:100,
				scaleX:0.7,
				scaleY:0.7,
			
				
			},
			cache:{x:0, y:0, width:50, height:50}
		},
		{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:940,
				y:713,
				scaleX:0.6,
				scaleY:0.6,
			}
		},{
			name:"pauseButton",
			type:"Button",
			up:"pauseIconN",
			over:"pauseIconO",
			down:"pauseIconC",
			props:{
				x:866,
				y:713,
				scaleX:0.6,
				scaleY:0.6,
			}
		},{
			name:"playButton",
			type:"Button",
			up:"playIconN",
			over:"playIconO",
			down:"playIconC",
			props:{
				x:866,
				y:713,
				scaleX:0.6,
				scaleY:0.6,
				visible:false
			}
		},
		
		{
			name:"LablePressureText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:77,
				y:721,
				color:"white",
				font:"bold 18px Arial",
				text:"Pressure",
				textAlign:"center"
			}
		},
		{
			name:"pressureText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:76,
				y:749,
				color:"black",
				font:"bold 18px Arial",
				text:"342",
				color:"white",
				textAlign:"right"
			}
		},
		{
			name:"unitPressureText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:94,
				y:749,
				color:"white",
				font:"bold 18px Arial",
				text:"Pa",
				textAlign:"center"
			}
		},
		{
			name:"LableTempText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:742,
				y:721,
				color:"white",
				font:"bold 18px Arial",
				text:"Temperature",
				textAlign:"center"
			}
		},
		{
			name:"tempText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:731,
				y:749,
				color:"black",
				font:"bold 18px Arial",
				text:"100",
				color:"white",
				textAlign:"center"
			}
		},
	{
			name:"unitTempText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:761,
				y:749,
				color:"white",
				font:"bold 18px Arial",
				text:"K",
				textAlign:"center"
			}
		},
	
		
		
		
		
		
		{
			name:"LableVolumeText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:507,
				y:734,
				color:"white",
				font:"bold 18px Arial",
				text:"Volume",
				textAlign:"center"
			}
		},
		{
			name:"unitVolumeText1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:547,
				y:734,
				text:"3.2 × 10",
				font:"bold 18px Arial",
				color:"white",
			}
			
		},
		{
			name:"unitVolumeText11",
			namespace:"createjs",
			type:"Text",
			props:{
				x:615,
				y:728,
				text:"- 22",
				font:"11px Arial",
				color:"white",
			}
			
		},
		{
			name:"unitVolumeText2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:641,
				y:734,
				text:"m",
				font:"bold 18px Arial",
				color:"white",
			}
			
		},
		{
			name:"unitVolumeText22",
			namespace:"createjs",
			type:"Text",
			props:{
				x:655,
				y:728,
				text:"3",
				font:"11px Arial",
				color:"white",
			}
			
		},
		
		
		
		
		{
			name:"molText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:424,
				y:735,
				color:"black",
				font:"bold 18px Arial",
				text:"20",
				textAlign:"center"
			}
		},
		{
			name:"LableMolText1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:244,
				y:734,
				color:"white",
				font:"bold 18px Arial",
				text:"Number of molecules",
				textAlign:"center"
			}
		},
		{
			name:"stepper",
			type:"NumericStepper",
			min:10,
			max:40,
			step:1,
			value:20,
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
				x:346,
				y:708,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		}
	]
}