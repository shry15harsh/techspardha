var opened
$(document).ready(function(){
		setTimeout(function(){$("#hint").css("display","none");},9999);
		opened=false;
		$(".header #year").click(function(){
			$("#hint").css("display","none");
			toggleTranslate();
	})
	});
function toggleTranslate(){
	if(opened){
		$(".hole").css('-webkit-transform','scale(0)');
		$(".header").css('-webkit-transform','translateY(0%)');
		$(".down").css('-webkit-transform','translateY(0%)')
		$(".hole").css('transform','scale(0)');
		$(".header").css('transform','translateY(0%)');
		$(".down").css('transform','translateY(0%)');;
		opened=false;
	}
	else{
		$(".hole").css('-webkit-transform','scale(1)');
		$(".header").css('-webkit-transform','translateY(-15%)');
		$(".down").css('-webkit-transform','translateY(50%)');
		$(".hole").css('transform','scale(1)');
		$(".header").css('transform','translateY(-15%)');
		$(".down").css('transform','translateY(50%)');
		opened=true;
	}
}
	