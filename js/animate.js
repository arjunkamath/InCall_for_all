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
	
	int3 = setInterval(function in2() {
  	$("#line1")
      	.velocity("transition.slideRightIn", 750)
      	.delay(250)
      	.velocity({ opacity: 0.5 }, 1000);
	}, 1500);
	
	console.log('connected');
}

function disconnected() {
	$("#rect1")
	.velocity({ x: "+=200"});
	
	$("#circle1")
	.velocity({ cx: "+=200"});
	
	$("#statustext")
	.velocity({ x: "+=200"});
	
	console.log('disconnected');
}
