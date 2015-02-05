var int1, int2, int3, int4;

function incoming() {
	
	$('#connecting_line').velocity({ opacity: 1 }, 0);
	
	int1 = setInterval( function in1(){
  	$("#connecting_line").velocity({ x2: 1000 }, 2000, function(){
		$("#connecting_line").velocity({ x2: 0 }, 0)
	});
	return in1;
	}(), 2000);


	$("#telcocloud").velocity("transition.fadeIn", { drag: true }).delay(1000);
	
	console.log('incoming');
}

// remove incoming line, bring in connected line, bring in both clouds
function connected() {
	clearInterval(int1);
	//document.getElementById("connecting_line").style.opacity = "0";
	$("#connecting_line").velocity("transition.fadeOut", function(){
		$("#connect_line").velocity("transition.slideRightIn", 750, function(){
			$('#telcocloud').velocity({translateX: "-55px"}, 1000);
			$('#webcloud').velocity({translateX: "55px"}, 1000, function(){
				converge();		
			});
		});
	});
		
	document.getElementById("webcloud").style.opacity = "1";
	document.getElementById("tablet").style.opacity = "1";	

	console.log('connected');
}

/*
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
	frame.style.opacity = "0";
	$('#frame_pma').velocity({ opacity: 1 }, 1250);

	var line_1 = document.getElementById("pma_user1_line");
	line_1.style.width = 100+"%"; 
	line_1.style.height = 260+"px";

	var line_2 = document.getElementById("pma_user2_line");
	line_2.style.width = 100+"%"; 
	line_2.style.height = 260+"px"; 

	console.log('punos frame');
}
*/

function wake_tablet(){

	var remote = document.getElementById("pma_remote_area");
	remote.style.width = 100+"%"; 
	remote.style.height = 260+"px";
	remote.style.opacity = "1";

	var line_1 = document.getElementById("pma_user1_line");
	line_1.style.width = 100+"%"; 
	line_1.style.height = 260+"px";

	var line_2 = document.getElementById("pma_user2_line");
	line_2.style.width = 100+"%"; 
	line_2.style.height = 260+"px"; 

	$('#vertical_line_right').velocity({ opacity: 1 }, 0);
	$('#vertical_line_right').velocity({ y2: 135 }, 500, function(){
		$('#vertical_line_pma_remote').velocity({ opacity: 1 }, 0);
		$('#vertical_line_pma_remote').velocity({ y2: 50 }, 500, function(){
			$('#horizontal_line_pma_remote').velocity({ opacity: 1 }, 0);
			$('#horizontal_line_pma_remote').velocity({ x2: 105 }, 600, function(){
				$('#horizontal_line_user2').velocity({ opacity: 1 }, 0);
				$('#horizontal_line_user2').velocity({ x2: 70 }, 650, function(){
					$('#tablet').velocity("callout.pulse", function(){
						$('#pma_remote').velocity({ opacity: 1 }, 1250);
						//$('#pma_moderator').velocity({ opacity: 1 }, 1250);
						//$('#pma_moderator_title').velocity({ opacity: 1 }, 1250);
					});
				});

			});					
		});
	});
}


function translate_frame() {

	$('#vertical_line_center').velocity({ opacity: 1 }, 0);
	$('#vertical_line_center').velocity({ y2: 135 }, 500);
	
	var frame = document.getElementById("frame_translate");
	frame.src = "translate.html";
	frame.style.width = 100+"%"; 
	frame.style.height = 100+"%"; 
		
	console.log('translate');
}

function disconnected() {
	int3 = setTimeout(function in2() {
  	$("#connect_line").velocity("transition.fadeOut", 750)
	}, 1000);
		
	console.log('disconnected');
}

function converge() {
	
  	$("#webcloud").velocity({opacity:"0.3"}, 750);
	$("#telcocloud").velocity({opacity:"0.3"}, 750, function(){
		$("#convergedcloud").velocity("transition.fadeIn", 2000, function(){
		  	$("#webcloud").velocity({opacity: 0}, 250);
		  	$("#telcocloud").velocity({opacity: 0}, 250);
		});
	});
			
	console.log('converge');
}


function share_meeting(urllink) {
	
	var link = 'https://tabin1.punosmobile.com/pma-cloud/#/' + urllink.slice(3);

	var pma_remote_svg = document.getElementById('pma_remote');
	pma_remote_svg.setAttribute('xlink:href',"img/pma_remote_share.svg");

  	$("#sms_box").velocity({ x: "-=1000"}, 2000, function(){
		$('#vertical_line_left').velocity({ opacity: 1 }, 0);
		$('#vertical_line_left').velocity({ y2: 135 }, 500, function(){
			var frame = document.getElementById("frame_pma");
			frame.style.opacity = "0";
			frame.src = link;
			frame.style.height = 260+"px";
			frame.style.width = 100+"%"; 
		//	frame.style.border="medium double rgb(0,0,0)";
			$('#frame_pma').velocity({ opacity: 1 }, 1250, function(){
				$('#horizontal_line_user1').velocity({ opacity: 1 }, 0);
				$('#horizontal_line_user1').velocity({ x1: 30 }, 2000, function(){
					$('#vertical_line_user1').velocity({ opacity: 1 }, 0);			
					$('#vertical_line_user1').velocity({ y1: -5 }, 1250);
				});
			});
		});
	});
}

function announce_notes(){
	
	var pma_remote_svg = document.getElementById('pma_remote');
	pma_remote_svg.setAttribute('xlink:href',"img/pma_remote_announce.svg");

	$('#soundwave_user1').velocity({opacity: 1}, 0);
	$('#soundwave_user2').velocity({opacity: 1}, 0);
	
	//$('#soundwave_user1').velocity({translateX: "-200px"}, 1000, { loop: true });
	//$('#soundwave_user2').velocity({translateX: "200px"}, 1000, { loop: true });	
	
	var int1 = setInterval( function in1(){
	$("#soundwave_user1").velocity({translateX: "-400px"}, 1500, function(){
		$("#soundwave_user1").velocity({translateX: "0px"}, 0);
	});
	return in1;
	}(), 1500);
	
	var int2 = setInterval( function in2(){
	$("#soundwave_user2").velocity({translateX: "400px"}, 1500, function(){
		$("#soundwave_user2").velocity({translateX: "0px"}, 0);
	});
	return in2;
	}(), 1500);
	
	
	
}
