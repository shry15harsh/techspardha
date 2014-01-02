$(document).ready(function(){
	$(document).mousemove(function(e){
		Mx=Math.floor(e.clientX)-50;
		My=Math.floor(e.clientY)-20;
		//console.log(Mx+','+My);
	});
		setInterval(function(){
		//console.log(My+','+y);
		oldflag=flag;
		if(Mx>fx){
		xdec=1;
		flag=1;
		x=fx;
		y=fy;}
		else if(Mx<fx){
		xdec=-1;
		flag=-1;
		x=bx;
		y=by;
		}
		else xdec=0;
		if(My-y>10)
		ydec=1;
		else if(My-y<-10)
		ydec=-1;
		else{tempY=y;
		ydec=0;}
		if(ydec==0)
		{x+=10*xdec;
		y=9*(Math.sin(x))+tempY;
		}
		else
		y+=10*ydec;
		if(flag==1){
		move(30);
		}
		else{
		move(1);
		}
		},100);
});
//flag==1 means forward and -1 means backward
var x=0,y=0,totNum=30,c=1;
var Mx,My;
var flag,oldflag=1;
var ydec=0,xdec=0;
var tempY;
var fx=x,fy=y,bx,by;
var oldX=new Array(30);
var oldY=new Array(30);
function move(num){
	if((num==0&&flag==1)||(num==totNum+1&&flag==-1))
	return;
	var tX,tY;
	if((num==totNum&&flag==1)||(num==1&&flag==-1)){
		tX=x;
		tY=y;
	}
	else if(flag==1){
		tX=oldX[num];
		tY=oldY[num];
	}
	else if(flag==-1){
		tX=oldX[num-2];
		tY=oldY[num-2];
	}
	var elem='.worm li:nth-child('+num+')';
	$(elem).css('transform','translate('+tX+'px,'+tY+'px)');
	move(num-flag);
	if(num==totNum){
		fx=tX;
		fy=tY;
	}
	if(num==1){
		bx=tX;
		by=tY;
	}
	oldX[num-1]=tX;
	oldY[num-1]=tY;
}