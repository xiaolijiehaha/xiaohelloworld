/**
 * 设置周期函数，循环执行StartToBling()
 */
var intResult = 0;
function ExcuteStratToBling(){
	intResult = setInterval(function(){StartToBling()},1000);
}
/**
 * 点击“开始闪”按钮触发的方法
 */
function StartToBling(){
	//周期函数执行之前先把背景色设置好
	var litter = document.getElementsByClassName("litter-box");
	for (var i = litter.length - 1; i >= 0; i--) {
		litter[i].style.backgroundColor = "#EEE704";
	}
	//开始闪
	var i = 0;
	var divs = [];//存放随机取出的3个小格子
	while(i++<3){
		var number = Math.floor(Math.random()*litter.length);
		divs.splice(divs[i],0,litter[number]);
	}	

	var j = 0;
	var colors = [];//存放随机颜色值的数组
	while(j++ <3){
		colors.splice(colors[j],0,getColor());
	}

	for(var i = 0;i<3;i++){
		var div = divs[i];
		if(div != null){
		div.style.backgroundColor = colors[i];
		}	
	}
}
//点击“结束闪”触发的方法
function StopBling(){
	clearInterval(intResult);
	location.reload();
}

/**
 * 随机获取3个16进制的颜色值的方法
 */
function getColor(){
	var colorValue = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F";
	var colorArr = colorValue.split(",");
	var color = "#";
	for(var i = 0;i<6;i++){
		color += colorArr[Math.floor(Math.random()*colorArr.length)];
	}
	return color;
	console.log(color);
}