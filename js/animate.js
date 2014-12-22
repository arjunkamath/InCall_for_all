var int1, int2, int3;
var id_count = 0;

var container = document.getElementById('timeline');
var options = {'showCurrentTime':'true', 'zoomMax' : 180000, 'orientation':'top'};
var items = new vis.DataSet(options);

var timeline = new vis.Timeline(container, items, options);
timeline.moveTo(timeline.getCurrentTime());

function incoming() {
	
	int1 = setInterval(function in1() {
  	$("#statustext")
      	.velocity("transition.slideRightIn", 750)
      	.delay(150)
      	.velocity({ opacity: 0 }, 750);

	return in1;
	}(), 1500);

	
	int2 = setInterval(function in2() {
  	$("#rect1")
      	.velocity("transition.slideRightIn", 750)
      	.delay(150)
      	.velocity({ opacity: 0 }, 750);

	return in2;
	}(), 1500);
	
	console.log('incoming');
}


function connected() {
	clearInterval(int1);
	clearInterval(int2);
	
	int3 = setTimeout(function in2() {
  	$("#line1").velocity("transition.slideRightIn", 750)
	}, 1000);
		
	id_count = id_count + 1 ;
	items.add([{id: id_count, content: 'connected', start: timeline.getCurrentTime()}]);
	adjust_time();
	
	console.log('connected');
}

function disconnected() {
	int3 = setTimeout(function in2() {
  	$("#line1").velocity("transition.fadeOut", 750)
	}, 1000);
	
	id_count = id_count + 1 ;
	items.add([{id: id_count, content: 'disconnected', start: timeline.getCurrentTime()}]);
	adjust_time();
	
	console.log('disconnected');
}

function send_sms() {
	int3 = setTimeout(function in2() {
  	$("#sms_box")
	.velocity({ x: "-=1000"}, 2000)
	}, 10);
	
	id_count = id_count + 1 ;
	items.add([{id: id_count, content: 'shared meeting', start: timeline.getCurrentTime()}]);
	adjust_time();
	
	console.log('disconnected');
}

function adjust_time() {
	timeline.fit();
	timeline.moveTo(timeline.getCurrentTime());
}