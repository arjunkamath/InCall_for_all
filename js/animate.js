var int1, int2, int3, int4;

function incoming() {
	
	int1 = setInterval(function in1() {
  	$("#statustext")
      	.velocity("transition.slideRightIn", 750)
      	.delay(150)
      	.velocity({ opacity: 0 }, 750);

	return in1;
	}(), 1500);

	
	int2 = setInterval(function in2() {
  	$("#rect_incoming")
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
	
	// Punos capability buttons
	
	$("#rect_sharing").velocity("transition.slideDownBigIn", { drag: true }).delay(750);
	$("#rect_announcing").velocity("transition.slideDownBigIn", { drag: true }).delay(750);
	$("#rect_recording").velocity("transition.slideDownBigIn", { drag: true }).delay(750);
	
	int3 = setTimeout(function in2() {
	$("#line1").velocity("transition.slideRightIn", 750)
	}, 1000);
	
	var frame = document.getElementById("frame");
	frame.src = "https://tabin1.punosmobile.com/pma-cloud/#/54ae393ce4b0fe65dc65ff1b";
	frame.style.width = 640+"px"; 
	frame.style.height = 600+"px";
	//frame.style.align = "center";
		
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
