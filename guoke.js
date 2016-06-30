var n=0;
	$(".lunbo img").hide().eq(0).show();
		$("li").mouseover(function(){
		n=$(this).index();//获取鼠标指向的下标值
		$(".lunbo img").hide().eq(n).show();
		$("li").removeClass("current").eq(n).addClass("current");//先移除类，在鼠标指向的位置添加类
		
	});
	/*$(".rightBtn").click(function (){
		if(n<$(".lunbo img").length-1){
			n=n+1;
		}else{
			n=0;
		}
		$("img").hide().eq(n).show();
		$("li").removeClass("current").eq(n).addClass("current");
	});
	$(".leftBtn").click(function(){
		if(n){
		n=n-1;
		}else{
			n=$("img").length-1;
		}
		$("img").hide().eq(n).show();
		$("li").removeClass("current").eq(n).addClass("current");
	});*/
