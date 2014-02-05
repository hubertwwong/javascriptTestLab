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



// functions...
//////////////////////////////////////////////////////////////////////////////

// remember that functions are objects...
var add2 = function(a) {
	return a+2;
};
// remember that this is annon. and you are getting scoping...

console.log(add2(4));
console.log(add2(5));

// curious on global..
function sub2(a) {
	var private_in_func = "private_in_func";
	global_in_func = "global_in_func_str";
	return a-2;
};

// seeing if the function is global.
// yup..
console.log(sub2(100));
console.log(global_in_func);
//console.log(private_in_func);

// using the apply function...
add2_apply = add2.apply(null, [2,3,4]);
console.log(add2_apply.toString());
// seems to only use the last var..

// note if you donn't define a param list, js has its on for functions
var my_avg = function () {
	var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
};

console.log(my_avg(1,2,3,4));
console.log(my_avg.apply(null, [1,2,5,6]));
