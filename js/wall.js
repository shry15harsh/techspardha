$(document).ready(function(){
	$('.wall div').click(function(){
		$(this).css('z-index','20');
		$(this).css('border','0px');
		$(this).addClass('fallingBrick');
		$(this).css('transform','translateY(2000px)');
	})
	var count=0;
	var intervalId;
	var i=1;
	$('#destruct').click(function(){
		intervalId=setInterval(function(){
		var elemNo;
		var elem;
		//while(count!=100){
		if(count<150){
			elemNo=Math.floor(Math.random()*212)+1;
			console.log(elemNo);
			elem='.wall :nth-child('+elemNo+')';
			$(elem).addClass('fallingBrick');
			$(elem).css('transform','translateY(2000px)');
			count++;
		}
		//}
		else{
		//for(var i=1;i<=212;i++){
			if(i==213){
				clearInterval(intervalId);
			}
			elem='.wall :nth-child('+i+')';
			$(elem).addClass('fallingBrick');
			$(elem).css('transform','translateY(2000px)');
			i++;
		//}
		}
		},200);
	});
});