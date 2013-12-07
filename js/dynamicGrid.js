	var leftSideBarExtended=false;	//left bar extended or not, initially not
	var colmd=8.3333333332;
	var color=["rgb(140,0,0)","rgb(150,0,0)","rgb(160,0,0)","rgb(170,0,0)","rgb(180,0,0)","rgb(190,0,0)","rgb(200,0,0)","rgb(210,0,0)","rgb(220,0,0)","rgb(230,0,0)","rgb(240,0,0)","rgb(250,0,0)"];
	var originalColor=["rgb(140,0,0)","rgb(150,0,0)","rgb(160,0,0)","rgb(170,0,0)","rgb(180,0,0)","rgb(190,0,0)","rgb(200,0,0)","rgb(210,0,0)","rgb(220,0,0)","rgb(230,0,0)","rgb(240,0,0)","rgb(250,0,0)"];
	var isFaded=[false,false,false,false,false,false,false,false,false,false,false,false];
	var percent=["8.3333333332%","16.666666666666664%","25%","33.33333333333333%","41.66666666666667%","50%","58.333333333333336%","66.66666666666666%","75%","83.33333333333334%","91.66666666666666%","100%"];
	var blockNo;		//Tells the current block number
	var blockCount=0;	//Tells the block hidden count during hiding process
	var totalBlocks=12;	//Tells total number of blocks
	var HidingId;		//Id of setInterval to stop it after all blocks are hidden
	var i=0;
	function makeHide(){
		if(blockCount==totalBlocks){
			clearInterval(HidingId);
			for(i=0;i<12;i++){
				color[i]=originalColor[i];	//Copying orginal colors back
				isFaded[i]=false;
			}
			i=0;
			changeBlockWidths(10);
			return;
		}
		if(blockCount<totalBlocks/2)
		blockNo=Math.floor(Math.random()*11)+1;		//Generate random number of blocks until half the blocks are hidden
		else
		blockNo=(i++)%12;						//Generate sequential number otherwise, It is done so that it takes no large time to hide all blocks
		if(!isFaded[blockNo]){
			isFaded[blockNo]=true;
			color[blockNo]="transparent";
			setBackground();
			blockCount++;
		}
	}
	function makeShow(){
		changeBlockWidths(2);
	}
	function changeBlockWidths(factor){
		var width=factor*colmd;
		width+='%';
		$("#leftSideBar").css("width",width);
		width=(11-factor)*colmd;
		width+="%";
		$("#centerBar").css("width",width);
	}
	function setBackground(){	//sets background gradient
		$("#centerBar").css("background-image","-moz-linear-gradient(left,"+color[0]+","+color[0]+" "+percent[0]+","+color[1]+" "+percent[0]+","+color[1]+" "+percent[1]+","+color[2]+" "+percent[1]+","+color[2]+" "+percent[2]+","+color[3]+" "+percent[2]+","+color[3]+" "+percent[3]+","+color[4]+" "+percent[3]+","+color[4]+" "+percent[4]+","+color[5]+" "+percent[4]+","+color[5]+" "+percent[5]+","+color[6]+" "+percent[5]+","+color[6]+" "+percent[6]+","+color[7]+" "+percent[6]+","+color[7]+" "+percent[7]+","+color[8]+" "+percent[7]+","+color[8]+" "+percent[8]+","+color[9]+" "+percent[8]+","+color[9]+" "+percent[9]+","+color[10]+" "+percent[9]+","+color[10]+" "+percent[10]+","+color[11]+" "+percent[10]+","+color[11]+" "+percent[11]+")");
	}
		$(document).ready(function(){
		setBackground();
		$("#flagship").click(function(){
			if(!leftSideBarExtended&&blockCount==0){
				$(this).attr("disabled", "disabled");
				$("#feeds").removeAttr("disabled");
				setBackground();
				$("#centerBar ul li").css("opacity","0");
				HidingId=setInterval(function(){makeHide();},100);		//The animation of hiding blocks
				leftSideBarExtended=true;
			}
		});
		$("#feeds").click(function(){
		if(blockCount==totalBlocks){
				$(this).attr("disabled", "disabled");
				$("#flagship").removeAttr("disabled");
				//$(this).toggleClass("active");
				blockCount=0;
				changeBlockWidths(2);
				$("#centerBar ul li").css("opacity","1");
				setBackground();
				leftSideBarExtended=false;
			}
			});
		});	