var int1, int2, int3, int4;

function incoming() {
	
	int1 = setInterval(function in1() {
  	$("#connecting_line")
      	.velocity("transition.slideRightIn", 750)
      	.delay(150)
      	.velocity({ opacity: 0 }, 750);

	return in1;
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
	$("#connect_line").velocity("transition.slideRightIn", 750)
	}, 1000);
	
	$('#app_area_wrapper').css({
		'border-style': 'solid',
		'border-width': '30px',
		'border-color': '#4169E1',
		'border-radius': '25px'
	});

	//$('#app_area_wrapper').velocity({
	//	"transition.slideRightIn": 67
	//}, 600);


	var frame = document.getElementById("frame");
	frame.src = "https://tabin1.punosmobile.com/pma-cloud/#/54ae393ce4b0fe65dc65ff1b";
	frame.style.width = 640+"px"; 
	frame.style.height = 600+"px";
		
	console.log('connected');
}

function disconnected() {
	int3 = setTimeout(function in2() {
  	$("#connect_line").velocity("transition.fadeOut", 750)
	}, 1000);
		
	console.log('disconnected');
}

function send_sms() {
	
	int3 = setTimeout(function in2() {
  	$("#sms_box")
	.velocity({ x: "-=700"}, 2000)
	}, 10);
	
	console.log('disconnected');
}
