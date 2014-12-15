function incoming() {
	
	setInterval(function in1() {
  	$("#statustext")
      	.velocity("transition.slideRightIn", 750)
      	.delay(150)
      	.velocity({ opacity: 0 }, 750);

	return in1;
	}(), 1500);

	
	setInterval(function in2() {
  	$("#rect1")
      	.velocity("transition.slideRightIn", 750)
      	.delay(150)
      	.velocity({ opacity: 0 }, 750);

	return in2;
	}(), 1500);
	
	console.log('incoming');
}


function connected() {
	$("#rect1")
	.velocity({ x: "+=200"});
	
	$("#circle1")
	.velocity({ cx: "+=200"});
	
	$("#statustext")
	.velocity({ x: "+=200"});
	
	console.log('connected');
}


function ongoing() {
	$("#rect1")
	.velocity({ x: "+=200"});
	
	$("#circle1")
	.velocity({ cx: "+=200"});
	
	$("#statustext")
	.velocity({ x: "+=200"});
	
	console.log('ongoing');
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
