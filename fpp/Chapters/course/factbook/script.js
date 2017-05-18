function resize(){
	var frame = document.getElementById("fwrapper");
	var shellWidth = parseInt(frame.style.width);//parseInt($('#fwrapper').css("width"));//1024;
	var shellHeight = parseInt(frame.style.height);//parseInt($('#fwrapper').css("height"));//680;
	var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		scale, left, top, width, height;

		top = 0;
	if(windowWidth > windowHeight){
		height = windowHeight;
		width = height * shellWidth / shellHeight;
		left = (windowWidth - width) / 2;
	}
	if(windowWidth <= windowHeight || left < 0){
		width = windowWidth;
		height = width * shellHeight / shellWidth;
		left = 0;
	}
	scale = height / shellHeight;

	if(scale >= 1){
		scale = 1;
		width = shellWidth;
		left = (windowWidth - width) / 2;
	}
	
	if(scale <= 0.7125890736342043){
		scale = 0.7125890736342043;
		width = 600;
		left = 0;
	}
	
	frame.style.left = left + "px";
	frame.style.top = top + "px";
	sTransFormValue = "scale(" + (scale) + "," + (scale) + ")";
	frame.style.transform = sTransFormValue;
	frame.style.msTransform = sTransFormValue;
	frame.style.WebkitTransform = sTransFormValue;
}

function bindEvents(){
	$(".tabs").on("mouseover", function(){
		$(this).addClass("pHover");
		$(this).find("ul").show();
		$(this).find(".tabborder").show();
	}).on("mouseout", function(){
		$(this).removeClass("pHover");
		$(this).find("ul").hide();
		$(this).find(".tabborder").hide();
	}).find("li").on("mouseover", function(){
		$(this).addClass("pHover");
	}).on("mouseout", function(){
		$(this).removeClass("pHover");
	}).on("click", showPage);
}

function showPage(){
	var j = $(this).index(), i = $(this).parent().parent().index();
}

$(document).ready(function(){
	$(window).on("resize", resize);
	resize();
	bindEvents();
	$('#fwrapper').css("opacity", 1);
	
	$(".content").mCustomScrollbar({
		theme: "dark-3",
		axis: "y",
		scrollButtons: {enable: false}
	});
});