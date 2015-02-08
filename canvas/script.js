var canvas = document.getElementById('canvas');
var x = canvas.getContext('2d');
x.fillStyle = "#5555ff";

var img = new Image();      // Новый объект
img.src = 'back.jpg';    // Путь к изображению
img.onload = function() { // Событие которое будет исполнено в момент когда изображение будет загружено
	//enterFrame();
}

var rect_x = 0;

function enterFrame () {
	if(rect_x<100) {
		moveRect(0,100);
	}
}

function draw () {
	x.drawImage(img, 0, 0);
	x.fillRect(0+rect_x, 0, 100, 100);
}

function moveRect (start, end) {
	start = start || 0;
	end = end || 100;

	rect_x = end - (end-start-rect_x)/1.02;
	draw(); 
}

// Если ничего нет - возвращаем обычный таймер
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame		||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function(callback){
		window.setTimeout(callback, 1000 / 60);
		};
})();


(function animloop(){
	enterFrame();
	requestAnimFrame(animloop);
})();