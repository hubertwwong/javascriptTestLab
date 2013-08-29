var foo = function() {
	var i = 0;
	return {
		baz: function(j) {
			i = i + j;
			console.log("baz -- " + i);
		},
		docElementTest: function() {
			console.log(document.getElementById("div_num_2").valueOf());
		},
		docElementChangeDiv: function() {
			document.getElementById("div_num_2").className = "bazzzzz";
		}
	}
};

// some object
var zzz = new foo();
zzz.baz(2);
zzz.baz(1);

// calling some other funcs.
zzz.docElementTest();
zzz.docElementChangeDiv();

// seperate object.
var yyy = new foo();
yyy.baz(3);
yyy.baz(4);
