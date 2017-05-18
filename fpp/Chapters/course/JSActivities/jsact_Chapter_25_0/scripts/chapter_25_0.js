
(function(){

	 game.dist = function (xA, yA, xB, yB) {
        var distance = Math.sqrt(Math.pow((xB - xA), 2) + Math.pow((yB - yA), 2));
        var direction = Math.atan2(yB - yA, xB - xA);
        return [distance, direction];
    } 
	// 1 grid = 16px
	//175,   235
	game.onMoveTestCharge = function(){
	
		game.testChgImg.x =  game.testChgDrag.x;
		game.testChgImg.y =  game.testChgDrag.y;
		
		if(game.testChgDrag.x<0)
		{
			game.testChgImg.x=0;
		}
		if(game.testChgDrag.x>350)
		{
			game.testChgImg.x=350;
		}
		if(game.testChgDrag.y<0)
		{
			game.testChgImg.y=0;
		}
		if(game.testChgDrag.y>470)
		{
			game.testChgImg.y=470;
		}
		
		var px=game.testChgImg.x+game.testChgImg.width/2;
		var py=game.testChgImg.y+game.testChgImg.height/2;
		var distAng=game.dist(190,250,px,py);
		
		if(distAng[0]<30)
		{
			
			game.testChgImg.x=175+(30*Math.cos(distAng[1])); //x+d*cos
			game.testChgImg.y=235+(30*Math.sin(distAng[1]));
		}
		
		
		
		
		var rawDistance= Math.sqrt(Math.pow((game.redX-game.testChgImg.x),2)+Math.pow((game.redY-game.testChgImg.y),2));
		
		var k=8.99;
		var pe=k/(rawDistance/16);
		
		var r=Math.round((rawDistance/16) *100)/100;
		
		game.oDashTxtArr[4].setText('-3');
		
		game.drawingctx.moveTo(game.lastX, game.lastY);	
		
		//console.log([r]);
		var plotX=r*15;
		var plotY=250-(pe*57);
		
		//move red pt
		
		if(plotY>147.4)
		{
			if(plotY>=game.botBoxY)
			{
			game.mainPanel.removeChild(game.bottomBox);
			game.createBottomBox(plotX, plotY-2,90-Math.abs(plotY-147.4));//147.4
			game.botBoxY=plotY;
			}
		}
		if(plotY<147.4)
		{
			if(plotY<=game.botTopY)
			{
			game.mainPanel.removeChild(game.topBox);
			game.createTopBox(75,147.4-Math.abs(147.4-plotY));
			game.botTopY=plotY;
			}
			
		}
		game.mainPanel.removeChild(game.arcDot);
		game.__createMidLine(plotX, plotY);
		
		if(r>=10)
		{
			r=r/10;
			game.oDashTxtArr[4].setText('-2');
		}
		game.oDashTxtArr[1].setText(r.toFixed(2));
		game.oDashTxtArr[6].setText(pe.toFixed(2));
		
	}
	game.resetBtnMDownHandler = function(){
		
		game.mainPanel.removeChild(game.bottomBox);
		game.botBoxY=147.4;
		game.createBottomBox(75, 149.4,90);
		
		game.mainPanel.removeChild(game.topBox);
		game.botTopY=149.4;
		game.createTopBox(75, 147.4);
		
		game.mainPanel.removeChild(game.arcDot);
		game.__createMidLine(75, 250-102.6);
		
		game.testChgImg.setLocation(255, 235); 
		game.testChgDrag.setLocation(255, 235); 
		
		game.oDashTxtArr[1].setText('5.00');
		game.oDashTxtArr[6].setText('1.80');
		game.oDashTxtArr[4].setText('-3');
	}
	
	
})()