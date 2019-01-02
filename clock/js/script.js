window.onload = function(){
	getTime(new Date());
}

function getTime(date) {
	var timeDiv = document.getElementById('time');
	
	var hours   = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	if (hours < 10) {
		hours = '0' + hours;
	}
	
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	
	var time = hours + ':' + minutes + ':' + seconds;
	
	timeDiv.innerHTML = time;
}

function updateTime(date) {
	var secHand = document.getElementById('sec-hand').style;
	var minHand = document.getElementById('min-hand').style;
	var hrHand  = document.getElementById('hr-hand').style;
	
	secHand.transform = 'rotate(' + date.getSeconds() * 6 + 'deg)';
	minHand.transform = 'rotate(' + date.getMinutes() * 6 + 'deg)';
	hrHand.transform  = 'rotate(' + (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';
}

setInterval(function(){
	var date = new Date();
	getTime(date);
	updateTime(date);
}, 1000);
