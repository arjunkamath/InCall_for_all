var int1, int2, int3;

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
	
	console.log('connected');
}

function disconnected() {
	int3 = setTimeout(function in2() {
  	$("#line1").velocity("transition.fadeOut", 750)
	}, 1000);
		
	console.log('disconnected');
}

function send_sms() {
	int3 = setTimeout(function in2() {
  	$("#sms_box")
	.velocity({ x: "-=1000"}, 2000)
	}, 10);
	
	console.log('disconnected');
}

