var int1, int2, int3, int4;

function incoming() {
	
	int1 = setInterval(function in1() {
  	$("#connecting_line")
		.delay(250)
      	.velocity("transition.slideLeftIn", 500)
      	.velocity({ opacity: 0.5 }, 450);

	return in1;
	}(), 500);
	
	$("#telcocloud").velocity("transition.fadeIn", { drag: true }).delay(1000);
	
	console.log('incoming');
}

// remove incoming line, bring in connected line, bring in both clouds
function connected() {
	clearInterval(int1);
	//document.getElementById("connecting_line").style.opacity = "0";
	$("#connecting_line").velocity("transition.fadeOut");
		
	setTimeout(function () {
	$("#connect_line").velocity("transition.slideRightIn", 750)
	}, 1000);
	
    $('#telcocloud').velocity({translateX: "55px"}, 2000);
	$('#webcloud').velocity({translateX: "-55px"}, 2000);
	document.getElementById("webcloud").style.opacity = "1";
	
	console.log('connected');
}

function punos_frame(urllink) {
	setTimeout(function () {
	$("#vertical_line")
		.velocity("transition.slideDownBigIn")
	}, 1000);
	
	var link = 'https://tabin1.punosmobile.com/pma-cloud/#/' + urllink.slice(3);
	console.log('link');
	
	$('#app_area_wrapper').velocity({borderColor: "#00285F"}, 2000);

	var frame = document.getElementById("frame_pma");
	frame.src = link;
	frame.style.width = 100+"%"; 
	frame.style.height = 260+"px"; 

	var remote = document.getElementById("pma_remote_area");
	remote.style.width = 100+"%"; 
	remote.style.height = 260+"px"; 

	var line_1 = document.getElementById("pma_user1_line");
	line_1.style.width = 100+"%"; 
	line_1.style.height = 200+"px"; 

	var line_2 = document.getElementById("pma_user2_line");
	line_2.style.width = 100+"%"; 
	line_2.style.height = 200+"px"; 

	console.log('punos frame');
}


function translate_frame() {
		setTimeout(function () {
	$("#vertical_line")
		.velocity("transition.slideDownBigIn")
	}, 1000);
	
	$('#app_area_wrapper').velocity({borderColor: "#00285F"}, 2000);

	var frame = document.getElementById("frame_translate");
	frame.src = "translate.html";
	frame.style.width = 100+"%"; 
	frame.style.height = 100+"%"; 
		
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
	$("#convergedcloud").velocity("transition.fadeIn", 2000);
			
	console.log('converge');
}


function send_sms() {
	
	int3 = setTimeout(function in2() {
  	$("#sms_box")
	.velocity({ x: "-=700"}, 2000)
	}, 10);
	
	console.log('disconnected');
}
