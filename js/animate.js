function moveCircleA() {
	$("rect")
	.velocity({ x: "+=200"});
	
	$("acircle")
	.velocity({ r: "+=200"});
	
	console.log('moved rect');
}

function moveText() {
	$("h1")
	.velocity({ x: "+=200", y: "25%" });
	
	console.log('moved text');
}

function moveNow() {
	$("element1")
	.velocity({ x: "+=200"});

}