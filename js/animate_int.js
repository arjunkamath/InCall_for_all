var int1, int2, int3, int4;

function incoming() {
	connecting();
	telco_cloud_appear();
}

function connecting() {
	
	$("#connecting_line").velocity({ x1: 400 }, {duration: 3000, loop:true, easing: "easeOutCirc"});
	//$("#user1").velocity({ rotateY:"15deg"}, {delay: 2700, duration: 300, easing:"swing", loop:true});

	console.log('incoming');
}

function telco_cloud_appear(){
	$("#circle_a").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_b").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_c").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_d").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_e").velocity({ r: 25 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_f").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	
	//animate telco cloud
	$("#circle_a").velocity({ r: 35 }, { delay: 3000, duration: 7500, loop:true});
	$("#circle_b").velocity({ r: 45 }, { delay: 5000, duration: 6500, loop:true});
	$("#circle_c").velocity({ r: 45 }, { delay: 1000, duration: 8500, loop:true});
	$("#circle_d").velocity({ r: 35 }, { delay: 1500, duration: 6000, loop:true});
	$("#circle_e").velocity({ r: 30 }, { delay: 1000, duration: 6500, loop:true});
	$("#circle_f").velocity({ r: 25 }, { delay: 1000, duration: 6500, loop:true});
	
}

function it_cloud_appear(){
	$("#circle_g").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_h").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_i").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_j").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_k").velocity({ r: 25 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_l").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	
	//animate IT cloud
	$("#circle_g").velocity({ r: 35 }, { delay: 3000, duration: 8000, loop:true});
	$("#circle_h").velocity({ r: 45 }, { delay: 5000, duration: 6500, loop:true});
	$("#circle_i").velocity({ r: 45 }, { delay: 1000, duration: 4500, loop:true});
	$("#circle_j").velocity({ r: 35 }, { delay: 1000, duration: 6500, loop:true});
	$("#circle_k").velocity({ r: 30 }, { delay: 1000, duration: 7000, loop:true});
	$("#circle_l").velocity({ r: 25 }, { delay: 1000, duration: 6500, loop:true});
}

function pma_frame_appear(){
	$("#frame_pma")
	.velocity({ opacity: 1 }, { duration: 100 })
	.velocity({ width: 300 }, { duration: 500 })
	.velocity({ height: 350 }, { duration: 3000 });
	
}

function converge_now(){
	
	console.log('converge_now');

	$("#circle_e").velocity("stop");
	$("#circle_k").velocity("stop");
	
	$("#circle_g").velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	$("#circle_h").velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	$("#circle_i").velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	$("#circle_j").velocity({ translateY: -30 }, { queue: false, duration: 2000 });
	$("#circle_k").velocity({ translateY: -25 }, { queue: false, duration: 2000 });
	$("#circle_l").velocity({ translateY: -30 }, { queue: false, duration: 2000 });
	
	$("#circle_e")
	.velocity({ r: 40 }, { queue: false, duration: 2000 })
	.velocity({ translateY: 20 }, { queue: false, duration: 2000 });

	$("#circle_k")
	.velocity({ r: 40 }, { queue: false, duration: 2000 })
	.velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	
	$("#circle_a").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_b").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_c").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_d").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_e").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_f").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_g").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_h").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_i").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_j").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_k").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_l").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	
}

function connected() {
	
	$("#connecting_line").velocity("transition.fadeOut", function(){
		$("#connecting_line").velocity("stop");
		//$("#user1").velocity("stop");
		$("#connect_line").velocity({ x2: 400 }, {duration: 750, easing: "easeOutCirc"});
	});
	
	console.log('connected');
}

function pma_app_appear(){
	$("#folder_pma_back").velocity({opacity:1}, { duration: 0 });
	$("#folder_pma").velocity({opacity:1}, { duration: 0 });
	$("#pma_left_line").velocity({opacity:1}, { duration: 0 });
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
					$('#tablet').velocity("callout.tada", function(){
						$('#pma_moderator').velocity({ opacity: 1 }, 1250);
						$('#pma_moderator_title').velocity({ opacity: 1 }, 1250);
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


