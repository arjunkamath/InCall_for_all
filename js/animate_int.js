var int1, int2, int3, int4;

function incoming() {
	
	int1 = setInterval(function in1() {
  	$("#connecting_line")
		.delay(250)
      	.velocity("transition.slideLeftIn", 750)
      	.velocity({ opacity: 0.5 }, 450);

	return in1;
	}(), 1000);
	
	$("#telcocloud").velocity("transition.fadeIn", { drag: true }).delay(1000);
	
	console.log('incoming');
}

function connected(urllink) {
	clearInterval(int1);
	document.getElementById("connecting_line").style.opacity = "0";
	$("#connecting_line").velocity("transition.fadeOut");
		
	// Punos capability buttons
	
	//$("#rect_sharing").velocity("transition.slideDownBigIn", { drag: true }).delay(1000);
	//$("#rect_announcing").velocity("transition.slideDownBigIn", { drag: true }).delay(1000);
	//$("#rect_recording").velocity("transition.slideDownBigIn", { drag: true }).delay(1000);
	
	setTimeout(function () {
	$("#connect_line").velocity("transition.slideRightIn", 750)
	}, 1000);
	
	setTimeout(function () {
	$("#vertical_line")
		.velocity("transition.slideDownBigIn")
	}, 1000);
	
    $('#telcocloud').velocity({translateX: "55px"}, 2000);
	$('#webcloud').velocity({translateX: "-55px"}, 2000);
	document.getElementById("webcloud").style.opacity = "1";
	
	$('#app_area_wrapper').velocity({borderColor: "#00285F"}, 2000);

	var frame = document.getElementById("frame");
	frame.src = "https://tabin1.punosmobile.com/pma-cloud/#/54ae393ce4b0fe65dc65ff1b";
	frame.style.width = 2000+"px"; 
	frame.style.height = 2000+"px";
		
	console.log('connected');
}

function connected_translate() {
	clearInterval(int1);
		
	// Punos capability buttons
	
	setTimeout(function () {
	$("#connect_line").velocity("transition.slideRightIn", 750)
	}, 1000);
	
	setTimeout(function () {
	$("#vertical_line")
		.velocity("transition.slideDownBigIn")
	}, 1000);
	
	$('#telcocloud').velocity({translateX: "55px"}, 2000);
	$('#webcloud').velocity({translateX: "-55px"}, 2000);
	document.getElementById("webcloud").style.opacity = "1";
	
	$('#app_area_wrapper').velocity({borderColor: "#00285F"}, 2000);

	var frame = document.getElementById("frame");
	frame.src = "translate.html";
	frame.style.width = 2000+"px"; 
	frame.style.height = 2000+"px";
		
	console.log('connected');
}

function disconnected() {
	int3 = setTimeout(function in2() {
  	$("#connect_line").velocity("transition.fadeOut", 750)
	}, 1000);
		
	console.log('disconnected');
}

function converge() {
	
  	$("#webcloud").velocity("transition.fadeOut", 750);
	$("#telcocloud").velocity("transition.fadeOut", 750);
	$("#convergedcloud").velocity("transition.fadeIn", 1000);
			
	console.log('converge');
}


function send_sms() {
	
	int3 = setTimeout(function in2() {
  	$("#sms_box")
	.velocity({ x: "-=700"}, 2000)
	}, 10);
	
	console.log('disconnected');
}
