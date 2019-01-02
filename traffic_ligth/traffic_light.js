var value = 0; // Это значение для того, чтобы невозможно было повторными нажатиями на кнопку "Включить светофор" увеличить Timeout.
var count = 4; // Это значение для того, чтобы невозможно было повторными нажатиями на кнопку "Включить светофор" (когда в цикле горит жёлтый цвет во-второй раз) увеличить Timeout. Функция count_timer() для этого же.

function count_timer(){
	if(count > 0){
		count--;
		setTimeout('count_timer()', 1000);
	}
	else{
		value = 0;
		count = 4;
	}
}

function trafficLighтOn(){
	value++;
	if(value == 1){
		var red = document.getElementById('red');
		var yellow = document.getElementById('yellow');
		var green = document.getElementById('green');
		
		setTimeout("red.style.background = 'red'; red.style.backgroundImage = 'radial-gradient(brown, transparent)'; yellow.style.background = 'none'; yellow.style.backgroundImage = 'none'; green.style.background = 'none'; green.style.backgroundImage = 'none'; red_timer()", 0);
		setTimeout("yellow.style.background = 'yellow'; yellow.style.backgroundImage = 'radial-gradient(orange, transparent)'; red.style.background = 'none'; red.style.backgroundImage = 'none'; green.style.background = 'none'; green.style.backgroundImage = 'none'; yellow_timer()", 20000);
		setTimeout("green.style.background = 'green'; green.style.backgroundImage = 'radial-gradient(lime, transparent)'; yellow.style.background = 'none'; yellow.style.backgroundImage = 'none'; red.style.background = 'none'; red.style.backgroundImage = 'none'; green_timer()", 25000);
		setTimeout("yellow.style.background = 'yellow'; yellow.style.backgroundImage = 'radial-gradient(orange, transparent)'; red.style.background = 'none'; red.style.backgroundImage = 'none'; green.style.background = 'none'; green.style.backgroundImage = 'none'; yellow_timer(); count_timer();", 45000);
		setTimeout('trafficLighтOn()',50000);
	}
}

function trafficLighтOff(){
	location.reload();
}

var timer_for_red = 20;
function red_timer(){
	var red = document.getElementById('red');
	red.className = 'timer color_red';
	
	if(timer_for_red > 0){
		if(timer_for_red < 10){
			var str = '0' + timer_for_red--;
		}
		else{
			var str = timer_for_red--;
		}
		red.innerHTML = str;
		setTimeout('red_timer()', 1000);
	} else{
		timer_for_red = 20;
		red.innerHTML = '';
	}
}

var timer_for_yellow = 5;
function yellow_timer(){
	var yellow = document.getElementById('yellow');
	yellow.className = 'timer color_yellow';
	
	if(timer_for_yellow > 0){
		if(timer_for_yellow < 10){
		var str = '0' + timer_for_yellow--;
		} else{
			var str = timer_for_yellow--;
		}
		yellow.innerHTML = str;
		setTimeout('yellow_timer()', 1000);
	} else{
		timer_for_yellow = 5;
		yellow.innerHTML = '';
	}
}

var timer_for_green = 20;
function green_timer(){
	var green = document.getElementById('green');
	green.className = 'timer color_green';
	
	if(timer_for_green > 0){
		if(timer_for_green < 10){
			var str = '0' + timer_for_green--;
		} else{
			var str = timer_for_green--;
		}
		green.innerHTML = str;
		setTimeout('green_timer()', 1000);
	} else{
		timer_for_green = 20;
		green.innerHTML = '';
	}
}