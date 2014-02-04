console.log("test1");

// variables..
var a="aaaa";
console.log(a);

// operators..
var op_1 = 1;
var op_2 = 2;
var op_3 = op_1 + op_2;
console.log(op_3);

// conditionals...
if (op_1 > op_2) {
	console.log("op1 > op2");
}
else {
	console.log("op2 > op1");
}

// loops. for.
for (var i=0 ; i<5 ; i++) {
	console.log("loop " + i);
}

// objects ...
//////////////////////////////////////////////////////////////////////////////
var obj1 = {};

// object new format...
var obj2 = new Object();

// always prefix by var..
// otherwise its global..

// object literal notation..
var obj3 = {
	aaa: "aaaa",
	bbb: "bbbb"
};

// assigning objects..
var foo = obj3;
console.log(foo.aaa);
console.log(foo["aaa"]);
// note that the array notation allows you to use reserve keyword.



// arrays ...
//////////////////////////////////////////////////////////////////////////////

// init
var array_1 = [];
var array_2 = new Array();

array_1.push("111");
console.log(array_1[0] + " | length " + array_1.length);

