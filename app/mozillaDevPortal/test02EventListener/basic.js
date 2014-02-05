console.log("test2.js");

// basic dom pull
var foo_a = document.getElementById("foo_a");
//console.log(foo_a.innerHTML);

// event lisetner..
//foo_a.onclick = function() {
//	alert("foo_a clicked");
//	console.log("got here");
//};
// few things of note...
// probalby the best way to do it...
// 1. call the dom element.
// 2. use a onsomething.
//

// a more generic version...
// last one is the bubble thing.
foo_a.addEventListener('click', 
	function() {
		alert("click..");
	}, false);


// shoots out aa to the console on change of the text box.
// need to change the focus.
var foo_b = document.getElementById("foo_b");
foo_b.addEventListener('change', 
	function() {
		console.log("aa");
	}, false);
	
// hover test..
var foo_c = document.getElementById("hover");

foo_c.addEventListener('mouseover', 
	function() {
		foo_c.className = "blue";
	}, false);
foo_c.addEventListener('mouseout', 
	function() {
		foo_c.className = "red";
	}, false);