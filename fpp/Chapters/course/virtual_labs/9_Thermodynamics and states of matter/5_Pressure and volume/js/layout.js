var layout = {
	background:[
		{
			name:"bg",
			namespace:"lib",
			type:"mc_bg",
			transform:[512.1,226.5,1,1,0,0,0,512.3,583]
		},
		{
			name:"patch",
			namespace:"lib",
			type:"mc_patch",
			transform:[512.1,744.5]
		}
	],
	foreground:[
	{
			name:"piston",
			namespace:"lib",
			type:"mc_chim",
			props:{
               	regY:639-31,	
			},
			cache:{x:0, y:0, width:1024, height:1000}
		},
	
	
	{
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
				x:79,
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
				x:65,
				y:749,
				color:"white",
				font:"bold 18px Arial",
				text:"342",
				textAlign:"center"
			}
		},
		{
			name:"unitPressureText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:104,
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
				x:521,
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
				x:511,
				y:749,
				color:"white",
				font:"bold 18px Arial",
				text:"100",
				textAlign:"center"
			}
		},
		{
			name:"unitTempText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:538,
				y:749,
				color:"white",
				font:"bold 18px Arial",
				text:"K",
				textAlign:"center"
			}
		},
	
		
		
		
			{
			name:"volumeText",
			type:"SSText",
			props:{
				x:299,
				y:735,
				text:"1.6",
				color:"black",
				textAlign:"center"
			},
			
			fonts:["bold 18px Arial", "bold 14px Arial"],
			hgap:8
		},
		
		{
			name:"LableVolumeText",
			namespace:"createjs",
			type:"Text",
			props:{
				x:196,
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
				x:344,
				y:734,
				text:"× 10",
				font:"bold 18px Arial",
				color:"white",
			}
			
		},
		{
			name:"unitVolumeText11",
			namespace:"createjs",
			type:"Text",
			props:{
				x:382,
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
				x:407,
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
				x:423,
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
				x:739,
				y:735,
				color:"white",
				font:"bold 18px Arial",
				text:"16",
				textAlign:"center"
			}
		},
		{
			name:"LableMolText1",
			namespace:"createjs",
			type:"Text",
			props:{
				x:659,
				y:724,
				color:"white",
				font:"bold 18px Arial",
				text:"Number of",
				textAlign:"center"
			}
		},
		{
			name:"LableMolText2",
			namespace:"createjs",
			type:"Text",
			props:{
				x:659,
				y:745,
				color:"white",
				font:"bold 18px Arial",
				text:"molecules",
				textAlign:"center"
			}
		},
		
		
		
		{
			name:"stepper",
			type:"NumericStepper",
			min:0.1,
			max:3.2,
			step:0.1,
			value:1.6,
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
				x:236,
				y:707,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		}
	]
}