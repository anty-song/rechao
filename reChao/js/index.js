
;(function() {
	var banners = document.getElementById("banner").children;
	var btns = document.getElementsByClassName("_btn");
		console.log(banners[2]);
	var num = null;
	
	btns[0].onclick = function() {
		for (var j = 0; j < banners.length; j++) {
			if (banners[j].getAttribute("class")) {
				num = j;
			}
			for (var i = 0; i < banners.length; i++) {
				banners[i].setAttribute("class", "");
			}
		}
		if (num == 0) {
			num = 2;
			banners[2].setAttribute("class", "show");
		} else {
			num = num - 1;
			banners[num].setAttribute("class", "show");
		}
	};
	btns[1].onclick = function() {
		for (var j = 0; j < banners.length; j++) {
			if (banners[j].getAttribute("class")) {
				num = j;
			}
			for (var i = 0; i < banners.length; i++) {
				banners[i].setAttribute("class", "");
			}
		}
		if (num == 2) {
			num = 0;
			banners[0].setAttribute("class", "show");
		} else {
			num = num + 1;
			banners[num].setAttribute("class", "show");
		}
	}
	console.log(num);

})()