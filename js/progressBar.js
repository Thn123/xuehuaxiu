// JavaScript Document
$(function(){
	//a 底色，b 加载色 , w 展示宽度，h 展示高度
	var a="#A88000";
	var b="#D9CDA8 ";
	var w="3.5714285714285716rem ";
	var h="0.35714285714285715rem ";
	var div=$(".visit_progress");
	var divb=$('.visit_progress-big');//进度条要插入的地方
	var barb=function(){
		div.each(function(){
			var width=$(this).attr('w');
			var barbox='<dl class="barbox"><dd class="barline"><div w="'+width+'" class="charts" style="width:0px"></div></dd></dl>';
			$(this).append(barbox);
		});
		divb.each(function(){
			var width=$(this).attr('w');
			var barbox='<dl class="barbox"><dd class=" barline barlineb"><div w="'+width+'" class=" charts chartsb" style="width:0px"></div></dd></dl>';
			$(this).append(barbox);
			})
	};
	var amimeat=function(){
		$(".charts").each(function(i,item){
			var wi=parseInt($(this).attr("w"));
			$(item).animate({width: wi+"%"},1000,function(){
				//$(this).children('d').html(wi+"%");
			});
		});
	};
	var barbCss=function(a,b){
		$(".barbox>dd").css({
			"float":"left"
		});
		$(".barline").css({
			"width":w,
			"background":b,
			"height":h,
			"overflow":"hidden",
			"display":"inline",
			"position":"relative",
			"left":"-0.35714285714285715rem"
		});
		$(".mw_header-right .barline").css({
			"height":"0.35714285714285715rem",
			"width":"80%"
		});
		$(".mw_header-right .barlineb").css({
			"height":"0.7142857142857143rem ",
			"width":"80%",
			"border-radius":"7.142857142857143rem ",
			"left":"0px"
		});
		$(".charts").css({
			"background":a,
			"height":h,
			"margin":0,
			"width":"0px",
			"overflow":"hidden"
		});
		$(".mw_header-right .chartsb").css({
			"height":"7.142857142857143rem "
		});
	};
	barb();
	amimeat();
	barbCss(a,b);
});

