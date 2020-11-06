let oSliderBox = document.querySelectorAll(".sliderBox")[0];
   let oSliderList = document.querySelectorAll(".sliderList")[0];
   let aList = oSliderList.children;
   let perWidth = aList[0].offsetWidth;
   oSliderList.style.width = perWidth * aList.length + "px";

   let aNums = document.querySelectorAll(".nums")[0].children;

   let i = 0;

   function move() {
   	i++;
   	//123123临界值的判断
   	if (i == aList.length) {
   		oSliderList.style.left = 0;
   		i = 1;
   	}
   	//321321临界值的判断
   	if (i == -1) {
   		oSliderList.style.left = -perWidth * (aList.length - 1) + "px";
   		i = aList.length - 2;
   	}

   	//控制小圆点的显示
   	for (let j = 0; j < aNums.length; j++) {
   		aNums[j].className = "";
   	}
   	if (i == aList.length - 1) { //当图片出来最后一张（补的那一张时）
   		aNums[0].className = "hover"; //第一个小圆点点亮
   	} else {
   		aNums[i].className = "hover";
   	}



   	startMove(oSliderList, {
   		"left": -perWidth * i
   	})
   }

   let timer = setInterval(function() {
   	move();
   }, 3000);


   //加按钮
   //左箭头 321321
   let oPrev = document.querySelectorAll(".btns")[0].children[0];
   //右箭头 123123
   let oNext = document.querySelectorAll(".btns")[0].children[1];

   oPrev.onclick = function() {
   	i -= 2; //抵消i++之后，再比原来小1
   	move();
   }
   oNext.onclick = function() {
   	move();
   }

   //鼠标移到小圆点上的操作
   for (let j = 0; j < aNums.length; j++) {
   	aNums[j].onmouseover = function() {
   		i = j - 1;
   		move();
   	}
   }

   //清除定时器和开始定时器
   oSliderBox.onmouseenter = function() {
   	clearInterval(timer);
   }
   oSliderBox.onmouseleave = function() {
   	timer = setInterval(function() {
   		move();
   	}, 3000);
   }
