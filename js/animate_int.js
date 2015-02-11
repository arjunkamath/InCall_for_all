var int1, int2, int3, int4;

function incoming() {
	connecting();
	telco_cloud_appear();
}

function connecting() {
	
	function connecting_line(){
		$("#connecting_line")
			.velocity({ x2: 400 }, {duration: 3000})
			.velocity({ x2: 0 }, { duration: 0 });	
	}
	
	connecting_line();
	
	setInterval(function () {
		connecting_line();
	}, 3000);
	
	

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
	
	$("#pma_right_line").velocity({ x1: 45 }, 1000);
	
	$("#frame_pma")
	.velocity({ opacity: 1 }, { duration: 100 })
	.velocity({ height: 350 }, { duration: 3000, queue: false})
	.velocity({ width: 300 }, { duration: 500 });
	
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
		$("#connect_line").velocity({ x2: 400 }, 1000, function(){
			$("#circle_share").velocity({ r: 3 }, { queue: false, delay: 0, duration: 250 });
			$("#circle_share").velocity({ r: 1.5 }, { queue: false, delay: 250, duration: 250 });
			$("#circle_announce").velocity({ r: 3 }, { queue: false, delay: 500, duration: 250 });
			$("#circle_announce").velocity({ r: 1.5 }, { queue: false, delay: 750, duration: 250 });
			$("#circle_record").velocity({ r: 3 }, { queue: false, delay: 1000, duration: 250 });
			$("#circle_record").velocity({ r: 1.5}, { queue: false, delay: 1250, duration: 250 });
			$("#circle_play").velocity({ r: 3 }, { queue: false, delay: 1500, duration: 250 });
			$("#circle_play").velocity({ r: 1.5 }, { queue: false, delay: 1750, duration: 250 });
		});
	});
	
	console.log('connected');
}

function pma_app_appear(){
	//$("#folder_pma_back").velocity({opacity:1}, { duration: 0 });
	$("#folder_pma").velocity({opacity:1}, { duration: 0 });
	$("#pma_app_drop").velocity({opacity:1}, { duration: 0 });
	
	$("#pma_drop")
	.velocity({ opacity:1 }, { duration: 0 })
	.velocity({translateY : 100}, 1500, function(){
		var logo_img = "img/folder_pma_logo.svg";
		$("#folder_pma").attr('xlink:href',logo_img);
		$("#pma_right_line").velocity({ x2: 400 }, 1000, function(){
			$("#tablet").attr('xlink:href',"img/tablet_pma_logo.svg");
			//$("#circle_announce").velocity({ r: 3 }, { queue: false, duration: 1000 });
		});
	});
}

function audio_announce(){
	
	$("#audio_line_left_1").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_left_2").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_left_3").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_left_4").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_left_5").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_1").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_2").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_3").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_4").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_5").velocity({opacity:1}, { duration: 0 });
	
	/*
	$("#audio_line_left_1").velocity({y2:-160}, { duration: 500, loop:true, queue: false});
	$("#audio_line_left_2").velocity({y2:-150}, { duration: 900, loop:true });
	$("#audio_line_left_3").velocity({y2:-155}, { duration: 200, loop:true });
	$("#audio_line_left_4").velocity({y2:-150}, { duration: 400, loop:true });
	$("#audio_line_right_1").velocity({y2:-160}, { duration: 500, loop:true });
	$("#audio_line_right_2").velocity({y2:-150}, { duration: 900, loop:true });
	$("#audio_line_right_3").velocity({y2:-155}, { duration: 200, loop:true });
	$("#audio_line_right_4").velocity({y2:-150}, { duration: 400, loop:true }); */
	
		
	function al1(){
	$("#audio_line_left_1")
	.velocity({y2:-150}, { duration: 1000, loop:2})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function al2(){
	$("#audio_line_left_2")
	.velocity({y2:-145}, { duration: 2000, loop:1})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function al3(){
	$("#audio_line_left_3")
	.velocity({y2:-145}, { duration: 666, loop:3})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function al4(){
	$("#audio_line_left_4")
	.velocity({y2:-150}, { duration: 1000, loop:2})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function al5(){
	$("#audio_line_left_5")
	.velocity({y2:-145}, { duration: 2000, loop:1})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar1(){
	$("#audio_line_right_1")
	.velocity({y2:-145}, { duration: 1000, loop:2})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar2(){
	$("#audio_line_right_2")
	.velocity({y2:-150}, { duration: 2000, loop:1})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar3(){
	$("#audio_line_right_3")
	.velocity({y2:-150}, { duration: 666, loop:3})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar4(){
	$("#audio_line_right_4")
	.velocity({y2:-150}, { duration: 1000, loop:2})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar5(){
	$("#audio_line_right_5")
	.velocity({y2:-145}, { duration: 2000, loop:1})
	.velocity({translateX:144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	al1();
	al2();
	al3();
	al4();
	al5();
	ar1();
	ar2();
	ar3();
	ar4();
	ar5();
	
	setInterval(al1, 4030);
	setInterval(al2, 4030);
	setInterval(al3, 4030);
	setInterval(al4, 4030);
	setInterval(al5, 4030);
	setInterval(ar1, 4030);
	setInterval(ar2, 4030);
	setInterval(ar3, 4030);
	setInterval(ar4, 4030);
	setInterval(ar5, 4030);
	
	/* $("#audio_line_left_2").velocity({translateX:-260}, { duration: 2000, queue: false, loop:true});
	$("#audio_line_left_3").velocity({translateX:-260}, { duration: 2000, queue: false, loop:true});
	$("#audio_line_left_4").velocity({translateX:-260}, { duration: 2000, queue: false, loop:true});
	
	$("#audio_line_right_1").velocity({translateX:260}, { delay: 500, duration: 2000, queue: false });
	$("#audio_line_right_2").velocity({translateX:260}, { delay: 500, duration: 2000, queue: false });
	$("#audio_line_right_3").velocity({translateX:260}, { delay: 500, duration: 2000, queue: false });
	$("#audio_line_right_4").velocity({translateX:260}, { delay: 500, duration: 2000, queue: false }); */
	
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


function translate_boxes() {

	$('#trans_rect_lt').velocity({ opacity: 1 }, 0);
	$('#trans_rect_lt_text').velocity({ opacity: 1 }, 0);
	$('#trans_rect_lb').velocity({ opacity: 1 }, 0);
	$('#trans_rect_lb_text').velocity({ opacity: 1 }, 0);
	
	$('#trans_rect_rt').velocity({ opacity: 1 }, 0);
	$('#trans_rect_rt_text').velocity({ opacity: 1 }, 0);
	$('#trans_rect_rb').velocity({ opacity: 1 }, 0);
	$('#trans_rect_rb_text').velocity({ opacity: 1 }, 0);
	
	
	
	//$('#trans_rect_lt_text').setValue("lalalal");
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


