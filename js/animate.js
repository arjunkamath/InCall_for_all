function moveCircleA() {
	$("rect")
	.velocity({ x: "+=200", y: "25%" });
	
	console.log('moved circle');
}

function moveText() {
	$("statustext")
	.velocity({ x: "+=200", y: "25%" });
	
	console.log('moved text');
}