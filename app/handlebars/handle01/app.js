/*
 * handle bars test.
 * 
 * a simple handle bars template engine.
 * a good thing with handle bars is that there is no Javascript logic that needs
 * to be introduced into the page.
 * */

// jquery dom ready function.
$(function(){

	// handle bars test.
	// ===========================================================================
	
	// json data.
	var data = { "name": "Alan", "hometown": "Somewhere, TX",
	         "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
	// fetch the handle bars template.
	var src = $('#header1').html();
	
	// compile the template.
	// basically converts the handle bar directives and json into html.
	var template = Handlebars.compile(src);
	var result = template(data);
	
	// paste data back into the html page. using jquery.
	$('body').append(result);	
});
//
// ========
