//=======================================================
//	create desktop for user interaction
//=======================================================

game.interaction = function(director, scene, banner){
	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);

	var amplitudeVal = 0.08;
	var frequencyVal = 200;
	var makeTimerDelay = 0;
	var waveStartTime = 0;
	var waveTimerInstance = null;
	var phi = 0;
	var oneMtInPx = 0.875e8;
	var ampFact = 1e-6;
	var continuePulse = false;
	var waveElapsedTimeInSec=0;
	
	var waveStartTime1=0, waveStartTime2=0, waveStartTime3=0, waveStartTime4=0, waveStartTime5=0, waveStartTime6=0;
	var waveStartTime7=0, waveStartTime8=0, waveStartTime9=0, waveStartTime10=0, waveStartTime11=0, waveStartTime12=0;
	var waveStartTime13=0,waveStartTime14=0, waveStartTime15=0, waveStartTime16=0, waveStartTime17=0, waveStartTime18=0;
	var waveStartTime19=0, waveStartTime20=0, waveStartTime21=0, waveStartTime22=0, waveStartTime23=0, waveStartTime24=0;
	var waveStartTime25=0, waveStartTime26=0, waveStartTime27=0 , waveStartTime28=0, waveStartTime0=0;;
	
	var airParticle0=true, airParticle=false, airParticle1=false, airParticle2=false, airParticle3=false, airParticle4=false;
	var airParticle6=false, airParticle5=false, airParticle7=false, airParticle8=false, airParticle9=false, airParticle10=false;
	var airParticle11=false, airParticle12=false, airParticle13=false, airParticle14=false, airParticle15=false, airParticle16=false;
	var airParticle17=false, airParticle18=false, airParticle19=false, airParticle20=false, airParticle21=false, airParticle22=false;
	var airParticle23=false, airParticle24=false, airParticle25=false, airParticle26=false, airParticle27=false, airParticle28=false;
	
	var isFrstTime = false,
		pauseFlg = false,
		isGameFinished = false;
	var isGameStart = false;
	var audioChanged = true;
	var frequencyUpdate=0;
	
	var totalPausedTime=0,totalPausedTime1=0,totalPausedTime2=0,totalPausedTime3=0,totalPausedTime4=0,totalPausedTime5=0;
	var totalPausedTime6=0,totalPausedTime7=0,totalPausedTime8=0,totalPausedTime9=0,totalPausedTime10=0,totalPausedTime11=0;
	var totalPausedTime12=0,totalPausedTime13=0,totalPausedTime14=0,totalPausedTime15=0,totalPausedTime16=0,totalPausedTime17=0;
	var totalPausedTime18=0,totalPausedTime19=0,totalPausedTime20=0,totalPausedTime21=0,totalPausedTime22=0,totalPausedTime23=0;
	var totalPausedTime24=0,totalPausedTime25=0,totalPausedTime26=0,totalPausedTime27=0,totalPausedTime28=0,totalPausedTime0=0;
	
	var startPauseTime=0;var displacement=0;
	var endPauseTime=0;
	var waveCurrentTime=0;
	var wavesCount=0;
	var presentTime=0;
	var presentTimeDelay=0;
	var waveLength=0;
	var bobVerticalPosition=0;
	function getActor(drag, x, y, id, imgname, row, column){
		return new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage(imgname), row, column), true).
											enableEvents(drag).
											setSpriteIndex(0).
											setDefaultPos(x, y).
											setId(id);
	}

//	Function for air particles movement
	var soundWave = function(cActor){
		
		
		if(!isFrstTime){
			waveElapsedTimeInSec=0;
			waveStartTime = new Date().getTime();
		}
	
			if(pauseFlg){
			
				var endPauseTime = new Date().getTime();
				if(airParticle0){
				totalPausedTime0 = totalPausedTime0 + endPauseTime - startPauseTime;}
				if(airParticle){
				totalPausedTime = totalPausedTime + endPauseTime - startPauseTime;}
				if(airParticle1){
				totalPausedTime1 = totalPausedTime1 + endPauseTime - startPauseTime;}
				if(airParticle2){
				totalPausedTime2 = totalPausedTime2 + endPauseTime - startPauseTime;}
				if(airParticle3){
				totalPausedTime3 = totalPausedTime3 + endPauseTime - startPauseTime;}
				if(airParticle4){
				totalPausedTime4 = totalPausedTime4 + endPauseTime - startPauseTime;}
				if(airParticle5){
				totalPausedTime5 = totalPausedTime5 + endPauseTime - startPauseTime;}
				if(airParticle6){
				totalPausedTime6 = totalPausedTime6 + endPauseTime - startPauseTime;}
				if(airParticle7){
				totalPausedTime7 = totalPausedTime7 + endPauseTime - startPauseTime;}
				if(airParticle8){
				totalPausedTime8 = totalPausedTime8 + endPauseTime - startPauseTime;}
				if(airParticle9){
				totalPausedTime9 = totalPausedTime9 + endPauseTime - startPauseTime;}
				if(airParticle10){
				totalPausedTime10 = totalPausedTime10 + endPauseTime - startPauseTime;}
				if(airParticle11){
				totalPausedTime11 = totalPausedTime11 + endPauseTime - startPauseTime;}
				if(airParticle12){
				totalPausedTime12 = totalPausedTime12 + endPauseTime - startPauseTime;}
				if(airParticle13){
				totalPausedTime13 = totalPausedTime13 + endPauseTime - startPauseTime;}
				if(airParticle14){
				totalPausedTime14 = totalPausedTime14 + endPauseTime - startPauseTime;}
				if(airParticle15){
				totalPausedTime15 = totalPausedTime15 + endPauseTime - startPauseTime;}
				if(airParticle16){
				totalPausedTime16 = totalPausedTime16 + endPauseTime - startPauseTime;}
				if(airParticle17){
				totalPausedTime17 = totalPausedTime17 + endPauseTime - startPauseTime;}
				if(airParticle18){
				totalPausedTime18 = totalPausedTime18 + endPauseTime - startPauseTime;}
				if(airParticle19){
				totalPausedTime19 = totalPausedTime19 + endPauseTime - startPauseTime;}
				if(airParticle20){
				totalPausedTime20 = totalPausedTime20 + endPauseTime - startPauseTime;}
				if(airParticle21){
				totalPausedTime21 = totalPausedTime21 + endPauseTime - startPauseTime;}
				if(airParticle22){
				totalPausedTime22 = totalPausedTime22 + endPauseTime - startPauseTime;}
				if(airParticle23){
				totalPausedTime23 = totalPausedTime23 + endPauseTime - startPauseTime;}
				if(airParticle24){
				totalPausedTime24 = totalPausedTime24 + endPauseTime - startPauseTime;}
				if(airParticle25){
				totalPausedTime25 = totalPausedTime25 + endPauseTime - startPauseTime;}
				if(airParticle26){
				totalPausedTime26 = totalPausedTime26 + endPauseTime - startPauseTime;}
				if(airParticle27){
				totalPausedTime27 = totalPausedTime27 + endPauseTime - startPauseTime;}
				if(airParticle28){
				totalPausedTime28 = totalPausedTime28 + endPauseTime - startPauseTime;}
			}	
		
		waveTimerInstance = scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				
			 waveLength=344/frequencyVal;
			
			aLabelWaveLen.setText(waveLength.toFixed(2));
			frequencyUpdate = frequencyVal/29;
			
		//Magnet
				if(airParticle0){
					 waveCurrentTime = new Date().getTime();
					//if()
					 waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime0-waveStartTime)/1000;
					var displacement = amplitudeVal * ampFact * Math.sin ( (  frequencyUpdate* waveElapsedTimeInSec ) + phi );
					 bobVerticalPosition = 172 + (displacement * oneMtInPx);
					aActorMagnet.x = bobVerticalPosition.toFixed(0);
			
					if(!airParticle && Math.abs(displacement) > 0.7 * amplitudeVal * ampFact){
						airParticle=true;
						waveStartTime0 = new Date().getTime();
					}
						if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
							endSound();
							airParticle0=false;
							
					}
			}
				
				//Airparticle1
				if(airParticle){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					  waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime-waveStartTime0)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 235 + (displacement * oneMtInPx);
					
					aActorBlack.x = bobVerticalPosition.toFixed(0) ;
				
					if(!airParticle1 && displacement>0.7 * amplitudeVal * ampFact){
						airParticle1=true;
						waveStartTime1 = new Date().getTime();
					}
						if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle=false;
				}
				}
				//Airparticle2
				if(airParticle1){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					 waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime1-waveStartTime1)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 250 + (displacement * oneMtInPx);
					aActorBlack1.x = bobVerticalPosition.toFixed(0);
			
						if(!airParticle2 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle2=true;
							waveStartTime2 = new Date().getTime();
						}
						if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
								airParticle1=false;
							}
					}
				
				//Airparticle3
				if(airParticle2){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime2 - waveStartTime2)/1000;
					
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 265 + (displacement * oneMtInPx);
					aActorBlack2.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle3 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle3=true;
							waveStartTime3 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
								airParticle2=false;

							}
					}
				
				//Airparticle4
				if(airParticle3){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime3 - waveStartTime3)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 280 + (displacement * oneMtInPx);
					aActorBlack3.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle4 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle4=true;
							waveStartTime4 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
								airParticle3=false;

							}
					}
			
				
				//Airparticle5
				if(airParticle4){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime4 - waveStartTime4)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 295 + (displacement * oneMtInPx);
					aActorBlack4.x = bobVerticalPosition.toFixed(0);
			
						if(!airParticle5 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle5=true;
							waveStartTime5 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
								airParticle4=false;
								
							}
					}
				
				//Airparticle6
				if(airParticle5){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime5 - waveStartTime5)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 310 + (displacement * oneMtInPx);
					aActorBlack5.x = bobVerticalPosition.toFixed(0);
					
						if(!airParticle6 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle6=true;
							waveStartTime6 = new Date().getTime();
						}
								if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle5=false;
				
					}
					}
			
				//Airparticle7
				if(airParticle6){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime6 - waveStartTime6)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 325 + (displacement * oneMtInPx);
					aActorBlack6.x = bobVerticalPosition.toFixed(0);
			
						if(!airParticle7 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle7=true;
							waveStartTime7 = new Date().getTime();
						}
								if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle6=false;
						
					}
					}
				
				//Airparticle8
				if(airParticle7){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime7 - waveStartTime7)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 340 + (displacement * oneMtInPx);
					aActorBlack7.x = bobVerticalPosition.toFixed(0);
			
						if(!airParticle8 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle8=true;
							waveStartTime8 = new Date().getTime();
						}
								if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
							airParticle7=false;

					}
					}
				//Airparticle9
				if(airParticle8){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime8 - waveStartTime8)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 355 + (displacement * oneMtInPx);
					aActorBlack8.x = bobVerticalPosition.toFixed(0);				
					if(!airParticle9 && displacement>0.7 * amplitudeVal * ampFact){
						airParticle9=true;
						waveStartTime9 = new Date().getTime();
					}
					if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle8=false;
					}
				}
			
				//Airparticle10
				if(airParticle9){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime9 - waveStartTime9)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 370 + (displacement * oneMtInPx);
					aActorBlack9.x = bobVerticalPosition.toFixed(0);
			
						if(!airParticle10 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle10=true;
							waveStartTime10 = new Date().getTime();
						}
								if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle9=false;

					}
					}
			
				//Airparticle11
				if(airParticle10){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime10 - waveStartTime10)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 385 + (displacement * oneMtInPx);
					aActorBlack10.x = bobVerticalPosition.toFixed(0);
		
						if(!airParticle11 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle11=true;
							waveStartTime11 = new Date().getTime();
						}
								if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle10=false;
		
					}
					}
				
				//Airparticle12
				if(airParticle11){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime11 - waveStartTime11)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 400 + (displacement * oneMtInPx);
					aActorBlack11.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle12 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle12=true;
							waveStartTime12 = new Date().getTime();
						}
						if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle11=false;
						
					}
					}
				
				//Airparticle13
				if(airParticle12){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime12 - waveStartTime12)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 415 + (displacement * oneMtInPx);
					aActorBlack12.x = bobVerticalPosition.toFixed(0);
			
						if(!airParticle13 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle13=true;
							waveStartTime13 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle12=false;
						
					}
					}
				
				//Airparticle14
				if(airParticle13){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime13 - waveStartTime13)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 430 + (displacement * oneMtInPx);
					aActorBlack13.x = bobVerticalPosition.toFixed(0);
						if(!airParticle14 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle14=true;
							waveStartTime14 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle13=false;
						
					}
					}
				
				//Airparticle15 //red
				if(airParticle14){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime14 - waveStartTime14)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 445 + (displacement * oneMtInPx);
					aActorRed.x = bobVerticalPosition.toFixed(0);
						if(!airParticle15 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle15=true;
							waveStartTime15 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle14=false;
						
					}
					}
				
				//Airparticle16
				if(airParticle15){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime15 - waveStartTime15)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 460 + (displacement * oneMtInPx);
					aActorBlack14.x = bobVerticalPosition.toFixed(0);
						if(!airParticle16 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle16=true;
							waveStartTime16 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle15=false;
						
					}
					}
				
				//Airparticle17
				if(airParticle16){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime16 - waveStartTime16)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 475 + (displacement * oneMtInPx);
					aActorBlack15.x = bobVerticalPosition.toFixed(0);
			
						if(!airParticle17 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle17=true;
							waveStartTime17 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle16=false;
						
					}
					}
			
				//Airparticle18
				if(airParticle17){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime17 - waveStartTime17)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 490 + (displacement * oneMtInPx);
					aActorBlack16.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle18 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle18=true;
							waveStartTime18 = new Date().getTime();
							}
								if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
							airParticle17=false;
						
					}
					}
			
				//Airparticle19
				if(airParticle18){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime18 - waveStartTime18)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 505 + (displacement * oneMtInPx);
					aActorBlack17.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle19 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle19=true;
							waveStartTime19 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle18=false;
						
					}
					}
			
				//Airparticle20
				if(airParticle19){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime19 - waveStartTime19)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 520 + (displacement * oneMtInPx);
					aActorBlack18.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle20 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle20=true;
							waveStartTime20 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle19=false;
						
					}
					}
		
				//Airparticle21
				if(airParticle20){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime20 - waveStartTime20)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 535 + (displacement * oneMtInPx);
					aActorBlack19.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle21 && displacement>0.7* amplitudeVal * ampFact){
							airParticle21=true;
							waveStartTime21 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle20=false;
						
					}
					}
			
				//Airparticle22
				if(airParticle21){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime21 - waveStartTime21)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 550 + (displacement * oneMtInPx);
					aActorBlack20.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle22 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle22=true;
							waveStartTime22 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle21=false;
						
					}
					}
			
				//Airparticle23
				if(airParticle22){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime22 - waveStartTime22)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 565 + (displacement * oneMtInPx);
					aActorBlack21.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle23 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle23=true;
							waveStartTime23 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle22=false;
						
					}
					}
	
				//Airparticle24
				if(airParticle23){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime23 - waveStartTime23)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 580 + (displacement * oneMtInPx);
					aActorBlack22.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle24 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle24=true;
							waveStartTime24 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle23=false;
						
					}
					}
			
				//Airparticle25
				if(airParticle24){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime24 - waveStartTime24)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 595 + (displacement * oneMtInPx);
					aActorBlack23.x = bobVerticalPosition.toFixed(0);
						
						if(!airParticle25 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle25=true;
							waveStartTime25 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle24=false;
						
					}
					}
			
				//Airparticle26
				if(airParticle25){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime25 - waveStartTime25)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 610 + (displacement * oneMtInPx);
					aActorBlack24.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle26 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle26=true;
							waveStartTime26 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle25=false;
						
					}
					}
			
				//Airparticle27
				if(airParticle26){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime26 - waveStartTime26)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 625 + (displacement * oneMtInPx);
					aActorBlack25.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle27 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle27=true;
							waveStartTime27 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle26=false;
						}
					}
				
				//Airparticle28
				if(airParticle27){
					waveElapsedTimeInSec=0;
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime27 - waveStartTime27)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 640 + (displacement * oneMtInPx);
					aActorBlack26.x = bobVerticalPosition.toFixed(0);
				
						if(!airParticle28 && displacement>0.7 * amplitudeVal * ampFact){
							airParticle28=true;
							waveStartTime28 = new Date().getTime();
						}
							if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle27=false;
						
					}
					}
			
				//Airparticle29
				if(airParticle28){
					waveElapsedTimeInSec=0;
					
					var waveCurrentTime = new Date().getTime();
					waveElapsedTimeInSec = (waveCurrentTime - totalPausedTime28 - waveStartTime28)/1000;
					var displacement = amplitudeVal*ampFact * Math.sin ( ( frequencyUpdate * waveElapsedTimeInSec ) + phi );
					var bobVerticalPosition = 655 + (displacement * oneMtInPx);
					aActorBlack27.x = bobVerticalPosition.toFixed(0);
					if(continuePulse && waveElapsedTimeInSec>(180/frequencyVal)){
						airParticle28=false;
						endSound();
						if(waveTimerInstance != null){
							waveTimerInstance.cancel();
						}
						isGameStart = false;
						isFrstTime = false;
						pauseFlg = false;
						resetairParticles();

						resetStartTime();
						resetaActordot();
						resetTotalpauseTime();
						return;
						
					}
				}
			
				presentTimeDelay++;
				if(presentTimeDelay%15==0){
				  presentTime++;
				  aLabelSpeed.setText(addCommas(presentTime) + ' ms');
				  presentTimeDelay=0;
				  }
				
				/*
				if(audioChanged) {
					endSound();					
				  }
			
				  if(frequencyVal == 200){	
					if(audioChanged) {
						director.audioLoop('audio_200');
					
						audioChanged = false;
					}
				}else if(frequencyVal == 250){	
					if(audioChanged) {
						director.audioLoop('audio_250');
			
						audioChanged = false;
					}
					
				}else if(frequencyVal == 300){	
						if(audioChanged) {
							director.audioLoop('audio_300');
				
							audioChanged = false;
						}
					}else if(frequencyVal == 350){	
						if(audioChanged) {					
							director.audioLoop('audio_350');
					
							audioChanged = false;
						}
					}else if(frequencyVal == 400){
						if(audioChanged) {
							director.audioLoop('audio_400');
				
							audioChanged = false;
						}
					}else if(frequencyVal == 450){	
						if(audioChanged) {					
							director.audioLoop('audio_450');
					
							audioChanged = false;
						}
					}else if(frequencyVal == 500){	
						if(audioChanged) {
							director.audioLoop('audio_500');
				
							audioChanged = false;
						}
					}
				*/
			},
			function (scene_time, timer_time, timertask_instance) {
			} // cancel
)};
	
//Addcommas in Timer
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}	

//For increment and decrement frequency values
var FreqIncDecArrow = function(action,btn){
	function process(){	
		if(isSVGShow){
			audioChanged = true;
		}
		else{
			audioChanged = false;
		}
		if(action=='+'){
			if(frequencyVal<=450){
				frequencyVal+=50;
				aLabelFreq.setText(frequencyVal.toFixed(0));
				phi = ( amplitudeVal * waveElapsedTimeInSec ) + phi;
				playSound();
			}
		}else if(action=='-'){
			if(frequencyVal>200){
				frequencyVal-=50;
				aLabelFreq.setText(frequencyVal.toFixed(0));
				phi = ( amplitudeVal * waveElapsedTimeInSec ) + phi;
				playSound();
			}
		}
	}
		var incDecTimer = null;
		btn.mouseUp = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();}
		};
		btn.mouseExit = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();}
		};
		btn.mouseDown = function(mouseEvent){
			process();
		};
		
		btn.mouseDown = function(mouseEvent){
		
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
				incDecTimer=scene.createTimer(0, Number.MAX_VALUE,
					function (scene_time, timer_time, timertask_instance) {   // timeout
					},
					function (scene_time, timer_time, timertask_instance) {
						makeTimerDelay++;
						if(makeTimerDelay%6==0)
						{
							process();
							makeTimerDelay=0;
						}
					},
					function (scene_time, timer_time, timertask_instance) {   // cancel
					}
			   );
		};
		
};

//For increment and decrement amplitude values
var AmpIncDecArrow = function(action,btn){
	function process(){
		
		if(action=='+'){
			if(amplitudeVal<=0.07){
				amplitudeVal+=0.01;
				aLabelAmp.setText(amplitudeVal.toFixed(2));
				phi = ( amplitudeVal * waveElapsedTimeInSec ) + phi;
				setVolume();
		   }
	   }else if(action=='-'){
			if(amplitudeVal>0.01){
				amplitudeVal-=0.01;
				aLabelAmp.setText(amplitudeVal.toFixed(2));
				phi = ( amplitudeVal * waveElapsedTimeInSec ) + phi; 
				setVolume();
			} 
		}
	}
		var incDecTimer = null;
		btn.mouseUp = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
		};
		btn.mouseExit = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
		};
		btn.mouseDown = function(mouseEvent){
		if(incDecTimer != null){
				incDecTimer.cancel();
			}
					incDecTimer=scene.createTimer(0, Number.MAX_VALUE,
					function (scene_time, timer_time, timertask_instance) {   // timeout
					},
					function (scene_time, timer_time, timertask_instance) {
						makeTimerDelay++;
						if(makeTimerDelay%6==0)
						{
							process();
							makeTimerDelay=0;
						}
					},
					function (scene_time, timer_time, timertask_instance) {   // cancel
					}
			   );
		};
};

//Checkbox button
	var isSVGShow = true;
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('checkonoff'), 1, 2);
	var checkBtn = new CAAT.exemplarr()
					.setAsButton(btnImg.getRef(), 0, 0, 0, 0, 
						function(button){
							if(isSVGShow)
							{
								//mute
								checkBtn.setButtonImageIndex(1,0,0,1);
								endSound();					
								audioChanged=false;				
							}					
							else
							{
								//play
								checkBtn.setButtonImageIndex(0,0,0,1);
								audioChanged = true;
							}
							isSVGShow = !isSVGShow;
							playSound();
						}
					).setLocation(660, 480);
	
	 var aLabelWaveLen =  game.textActor(director, '--', 'Bold 14px Arial', 'left', '#ffffff').setLocation(150, 540);
	 var aLabelSpeed =  game.textActor(director, '0 ms', 'Bold 14px Arial', 'left', '#000000').setLocation(280, 542);
	 var aLabelMute =  game.textActor(director, 'Mute', 'Bold 14px Arial', 'left', '#000000').setLocation(620, 480);
	 var aLabelAmp =  game.textActor(director, '0.08', 'Bold 14px Arial', 'left', '#ffffff').setLocation(497, 542);
	 var aLabelFreq =  game.textActor(director, '200', 'Bold 14px Arial', 'left', '#ffffff').setLocation(497, 562);
	 var aLabelWave =  game.textActor(director, 'Continuous wave', 'Bold 14px Arial', 'left', '#ffffff').setLocation(496, 562);
	 
 	 var aActorClock = getActor(false, 255, 518, 'clock', 'clock', 1, 1);
	 var aActorMagnet = getActor(false, 172, 197, 'magnet', 'magnet', 1, 1);
	 var aActorSpkr = getActor(false, 55, 175, 'spkrbase', 'spkrbase', 1, 1);
	 var aActorHLine = getActor(false, 235, 175, 'horizline', 'horizline', 1, 1);
	 var aActorHoLine = getActor(false, 235, 320, 'horizline', 'horizline', 1, 1);
	 //Balck
	 var aActorBlack = getActor(false, 235, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack1 = getActor(false, 250, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack2 = getActor(false, 265, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack3 = getActor(false, 280, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack4 = getActor(false, 295, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack5 = getActor(false, 310, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack6 = getActor(false, 325, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack7 = getActor(false, 340, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack8 = getActor(false, 355, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack9 = getActor(false, 370, 205, 'blackpoint', 'blackpoint', 1, 1);	 
	 var aActorBlack10 = getActor(false, 385, 205, 'blackpoint', 'blackpoint', 1, 1);	 
	 var aActorBlack11 = getActor(false, 400, 205, 'blackpoint', 'blackpoint', 1, 1);	 	
	 var aActorBlack12 = getActor(false, 415, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack13 = getActor(false, 430, 205, 'blackpoint', 'blackpoint', 1, 1);
	 //Red
	 var aActorRed = getActor(false, 445, 205, 'redpoint', 'redpoint', 1, 1);
	 var aActorBlack14 = getActor(false, 460, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack15 = getActor(false, 475, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack16 = getActor(false, 490, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack17 = getActor(false, 505, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack18 = getActor(false, 520, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack19 = getActor(false, 535, 205, 'blackpoint', 'blackpoint', 1, 1);
     var aActorBlack20 = getActor(false, 550, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorPatch = getActor(false, 565, 205, 'patchwhite', 'patchwhite', 1, 1);
	 var aActorBlack21 = getActor(false, 565, 205, 'blackpoint', 'blackpoint', 1, 1);
     var aActorBlack22 = getActor(false, 580, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack23 = getActor(false, 595, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack24 = getActor(false, 610, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack25 = getActor(false, 625, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack26 = getActor(false, 640, 205, 'blackpoint', 'blackpoint', 1, 1);
	 var aActorBlack27 = getActor(false, 655, 205, 'blackpoint', 'blackpoint', 1, 1);
	 
	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4, 
						function(button){
						isGameStart = false;
						isFrstTime = false;
						pauseFlg = false;
						resetairParticles();
						if(waveTimerInstance != null){
							waveTimerInstance.cancel();
						}
						presentTime=0;
						resetStartTime();
						aLabelSpeed.setText(presentTime+' ms');
						waveLength=0;
						aLabelWaveLen.setText('--');
						resetaActordot();
						endSound();	
											
						resetTotalpauseTime();
					
						banner.visible=true;
						banner.childrenList[0].setSpriteIndex(0);
						banner.childrenList[1].setText("Press GO to send a sound wave through the ");
						banner.childrenList[2].setText("air particles. Vary the amplitude and frequency");
						banner.childrenList[3].setText("and observe the different sound waves.");
						banner.childrenList[1].setLocation(((banner.width  -  banner.childrenList[1].width)/2)+10, 12);
						banner.childrenList[2].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 28);
						banner.childrenList[3].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 44);
						
						var pathBehaviour = new CAAT.PathBehavior().
										setValues(new CAAT.Path().
										setLinear(-3, 0, -3, -70).
										setInteractive(false)).
										setDelayTime(0, 300);
						banner.addBehavior(pathBehaviour);
						
						}).setLocation(613, 535);
	
	/*Go Button*/
	var aActorGo = new CAAT.exemplarr()
						.setAsButton(btnImg.getRef(), 0, 0, 1, 0, 
							function(button){
								if(!isGameStart){							   
								   if(isSVGShow){
										audioChanged = true;
									}
									else{
										audioChanged = false;
									}
									isGameStart = true;
									soundWave();
									banner.visible=false;
									playSound();
								}
							}
						).setLocation(613, 510);	
	/*Pause Button*/
	var aActorPause = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 2, 2, 3, 2, 
						function(button){
							game.pauseActivity();	
							
							
						}).setLocation(613, 560);
		game.pauseActivity = function() {
		if(!isGameStart){		
								return;		
							}else{
								endSound();	
								pauseFlg = true;
								isFrstTime=true;
								isGameStart = false;
								if(waveTimerInstance != null){
									waveTimerInstance.cancel();
								}
								startPauseTime = new Date().getTime();		
							}
		}
		
	/*Frequency Increment*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 2, 1)
	var btnAmpInc = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0, 
						function(button){
							
						}).setLocation(470, 540);
	/*Frequency Decrement*/
	var btnAmpDec = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 1, 1, 1, 1, 
						function(button){
						
						}).setLocation(470, 549).setSpriteIndex(1);
	
	/*Amplitude Increment*/
	var btnFreqInc = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0, 
						function(button){
						
						}).setLocation(470, 560);
	
	/*Amplitude Decrement*/
	var btnFreqDec = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 1, 1, 1, 1, 
						function(button){
						
						}).setLocation(470, 569).setSpriteIndex(1);
						
	FreqIncDecArrow("-",btnFreqDec);
	FreqIncDecArrow("+",btnFreqInc);
	AmpIncDecArrow("-",btnAmpDec);
	AmpIncDecArrow("+",btnAmpInc);
		

//Reset all the dot position	
function resetaActordot()
{
	aActorMagnet.reSetPosition(),aActorRed.reSetPosition(),	aActorBlack.reSetPosition();
	aActorBlack1.reSetPosition(),aActorBlack2.reSetPosition(),aActorBlack3.reSetPosition();
	aActorBlack4.reSetPosition(),aActorBlack5.reSetPosition(),aActorBlack6.reSetPosition();
	aActorBlack7.reSetPosition(),aActorBlack8.reSetPosition(),aActorBlack9.reSetPosition();
	aActorBlack10.reSetPosition(),aActorBlack11.reSetPosition(),aActorBlack12.reSetPosition();
	aActorBlack13.reSetPosition(),aActorBlack14.reSetPosition(),aActorBlack15.reSetPosition();
	aActorBlack16.reSetPosition(),aActorBlack17.reSetPosition(),aActorBlack18.reSetPosition();
	aActorBlack19.reSetPosition(),aActorBlack20.reSetPosition(),aActorBlack21.reSetPosition();
	aActorBlack22.reSetPosition(),aActorBlack23.reSetPosition(),aActorBlack24.reSetPosition();
	aActorBlack25.reSetPosition(),aActorBlack26.reSetPosition(),aActorBlack27.reSetPosition();
}

//Reset all the startTime	
function resetStartTime()
{
	waveStartTime1=0,  waveStartTime2=0, waveStartTime3=0,  waveStartTime4=0;
	waveStartTime5=0,  waveStartTime6=0, waveStartTime7=0,  waveStartTime8=0;
	waveStartTime9=0,  waveStartTime10=0, waveStartTime11=0,waveStartTime12=0;
	waveStartTime13=0,  waveStartTime14=0,waveStartTime15=0,waveStartTime16=0;
	waveStartTime17=0,	 waveStartTime18=0,waveStartTime19=0,waveStartTime20=0;
	waveStartTime21=0,	 waveStartTime22=0,waveStartTime23=0,waveStartTime24=0;
	waveStartTime25=0,	 waveStartTime26=0,waveStartTime27=0,waveStartTime=0,waveStartTime0=0;
	waveCurrentTime = 0, waveElapsedTimeInSec = 0;
	if(waveTimerInstance != null){
		waveTimerInstance.cancel();
	}
	waveTimerInstance = null;
	phi = 0, bobVerticalPosition= 0,displacement=0;
}
//===================================================
// Volume control
//===================================================
function setVolume() {
	var audioId = 'audio_'+frequencyVal;
	var vol = parseFloat(amplitudeVal * 10).toFixed(1);
	var loopingChannelsObj = director.setVolume(audioId, parseFloat(vol)).loopingChannels;	
	for (i = 0; i < loopingChannelsObj.length; i++) {
		loopingChannelsObj[i].volume = vol;
	}
}
//===================================================
// Pause any playing sounds
//===================================================
function endSound() {
	director.endSound();
}

game.endSound_dir = function() {
	endSound();
}

//===================================================
// Play sound when the game has started and audio was changed
//===================================================
function playSound() {
	endSound();
	if(audioChanged && isGameStart) {
		director.audioLoop('audio_'+frequencyVal);
	}
	setVolume();
}
	
//Reset all the Flag variables
function resetairParticles()
{
	 airParticle0=true,	airParticle=false, airParticle1=false,airParticle2=false,airParticle3=false,airParticle4=false; 
	 airParticle6=false, airParticle5=false, airParticle7=false, airParticle8=false, airParticle9=false; 
	 airParticle10=false,airParticle11=false,  airParticle12=false, airParticle13=false,  airParticle14=false;
	 airParticle15=false, airParticle16=false, airParticle17=false,  airParticle18=false,airParticle19=false;
	 airParticle20=false, airParticle21=false,  airParticle22=false; airParticle23=false,  airParticle24=false; 
	 airParticle25=false,  airParticle26=false;
	 airParticle27=false,  airParticle28=false;
	 }
//Reset all the totalPausedTime
function resetTotalpauseTime()
{
	totalPausedTime=0,totalPausedTime1=0,totalPausedTime2=0,totalPausedTime3=0,totalPausedTime4=0,totalPausedTime5=0;
	totalPausedTime6=0,totalPausedTime7=0,totalPausedTime8=0,totalPausedTime9=0,totalPausedTime10=0,totalPausedTime11=0;
	totalPausedTime12=0,totalPausedTime13=0,totalPausedTime14=0,totalPausedTime15=0,totalPausedTime16=0,totalPausedTime17=0;
	totalPausedTime18=0,totalPausedTime19=0,totalPausedTime20=0,totalPausedTime21=0,totalPausedTime22=0,totalPausedTime23=0;
	totalPausedTime24=0,totalPausedTime25=0,totalPausedTime26=0,totalPausedTime27=0,totalPausedTime28=0;totalPausedTime0=0;
}
	   desktop.addChild(checkBtn);	
	   desktop.addChild(aActorMagnet);
	   desktop.addChild(btnFreqDec);
	   desktop.addChild(btnFreqInc);
	   desktop.addChild(btnAmpDec);
	   desktop.addChild(btnAmpInc);
	   desktop.addChild(aActorReset);
	   desktop.addChild(aActorGo);
	   desktop.addChild(aActorPause);
	   desktop.addChild(aActorClock);
	   desktop.addChild(aLabelAmp);
	   desktop.addChild(aLabelMute);
	   desktop.addChild(aLabelFreq);
	   desktop.addChild(aActorSpkr);
	   desktop.addChild(aActorHLine);
	   desktop.addChild(aActorHoLine);
	   desktop.addChild(aLabelWaveLen);
	   desktop.addChild(aLabelSpeed);
	   
	   
	   desktop.addChild(aActorBlack);
	   desktop.addChild(aActorBlack1);
	   desktop.addChild(aActorBlack2);
	   desktop.addChild(aActorBlack3);
	   desktop.addChild(aActorBlack4);
	   desktop.addChild(aActorBlack5);
	   desktop.addChild(aActorBlack6);
	   desktop.addChild(aActorBlack7);
	   desktop.addChild(aActorBlack8);
	   desktop.addChild(aActorBlack9);
	   desktop.addChild(aActorBlack10);
	   
	   desktop.addChild(aActorBlack11);
	   desktop.addChild(aActorBlack12);
	   desktop.addChild(aActorBlack13);
	   desktop.addChild(aActorBlack14);
	   desktop.addChild(aActorBlack15);
	   desktop.addChild(aActorBlack16);
	   desktop.addChild(aActorBlack17);
	   desktop.addChild(aActorBlack18);
	   desktop.addChild(aActorBlack19);
		
	   desktop.addChild(aActorBlack20);
	   desktop.addChild(aActorBlack21);
	   desktop.addChild(aActorBlack22);
	   desktop.addChild(aActorBlack23);
	   desktop.addChild(aActorBlack24);
	   desktop.addChild(aActorBlack25);
	   desktop.addChild(aActorBlack26);
	   desktop.addChild(aActorBlack27);
	   desktop.addChild(aActorRed);
	   desktop.addChild(aActorPatch);
	
//Combo box button	
	(function(){
	
		desktop.mouseClick = function(mouseEvent){
			popUpCon.visible = false;
		};
	
		var popUpCon = new CAAT.Foundation.ActorContainer().setBounds(375, 532, 125, 43).setFillStyle('#ffffff');
		popUpCon.visible = false;
		
		var cboActorTx =  game.textActor(director, 'Continuous wave', 'Bold 14px Arial', 'left', '#000000').setLocation(385, 513);
		var cboActorImg = getActor(false, 375, 512, 'Popupmed', 'Popupmed', 1, 1);
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('b1'), 2, 1)
		var popBtn1 = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 1, 0, 0, 
			function(button){
						cboActorTx.setText('Continuous wave');
						popUpCon.visible = false;
						isGameStart = false;
						isFrstTime = false;
						pauseFlg = false;
						resetairParticles();
						if(waveTimerInstance != null){
							waveTimerInstance.cancel();
						}
						endSound();
						resetStartTime();
						resetaActordot();
						resetTotalpauseTime();
						continuePulse = false;
				
			}).setLocation(1, 1);
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('b2'), 2, 1)
		var popBtn2 = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 1, 0, 0, 
			function(button){
				
				cboActorTx.setText('Wave pulse');
				popUpCon.visible = false;
				continuePulse = true;
				
						isGameStart = false;
						isFrstTime = false;
						pauseFlg = false;
						endSound();
						resetairParticles();
						if(waveTimerInstance != null){
							waveTimerInstance.cancel();
						}
						resetStartTime();
						resetaActordot();
						resetTotalpauseTime();
						banner.visible=true;
						banner.childrenList[0].setSpriteIndex(0);
						banner.childrenList[1].setText("Press GO to send a sound wave through the ");
						banner.childrenList[2].setText("air particles. Vary the amplitude and frequency");
						banner.childrenList[3].setText("and observe the different sound waves.");
						banner.childrenList[1].setLocation(((banner.width  -  banner.childrenList[1].width)/2)+10, 12);
						banner.childrenList[2].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 28);
						banner.childrenList[3].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 44);
						
						var pathBehaviour = new CAAT.PathBehavior().
										setValues(new CAAT.Path().
										setLinear(-3, 0, -3, -70).
										setInteractive(false)).
										setDelayTime(0, 300);
						banner.addBehavior(pathBehaviour);
				
			}).setLocation(1, 22);
			
		var cboActor = new CAAT.exemplarr().setBounds(375, 512, 201, 20);
		cboActor.mouseClick = function(mouseEvent){
			popUpCon.visible = true;
		};
		
		desktop.addChild(cboActorImg);
		desktop.addChild(cboActorTx);
		popUpCon.addChild(popBtn1);
		popUpCon.addChild(popBtn2);
		desktop.addChild(cboActor);
		desktop.addChild(popUpCon);
		
	})();
//===================================================
// Find the appropriate audio format that can be played 
// and also remove the source tags( which contains fall back formats) 
// and add src attribute to the audio tag. This is what CAAT requires
//===================================================	
	var audioExt = ['mp3', 'mp4', 'ogg'];
	var audioTypes_1 = {               
		'mp3':'audio/mpeg;',
		'ogg':'audio/ogg; codecs="vorbis"',
		'mp4':'audio/mp4; codecs="mp4a.40.2"'
	};
	var audioEle = ['audio_200','audio_250','audio_300','audio_350','audio_400','audio_450','audio_500'];
	for( var i= 0; i < audioEle.length; i++) {
		var audioElemObj = document.getElementById(audioEle[i]);
		for(var j = 0; j<audioExt.length; j++) {
			if(audioElemObj.canPlayType(audioTypes_1[audioExt[j]])) {
				
				audioElemObj.setAttribute('src', audioElemObj.childNodes[j].src);
				audioElemObj.innerHTML = '';
				break;
			} 
		}		
	}
	//add sound to director for caching
	director.addAudio('audio_200', document.getElementById('audio_200'));	
	director.addAudio('audio_250', document.getElementById('audio_250'));	
	director.addAudio('audio_300', document.getElementById('audio_300'));	
	director.addAudio('audio_350', document.getElementById('audio_350'));	
	director.addAudio('audio_400', document.getElementById('audio_400'));	
	director.addAudio('audio_450', document.getElementById('audio_450'));	
	director.addAudio('audio_500', document.getElementById('audio_500'));
	
	scene.addChild(desktop, 'desktop');
}