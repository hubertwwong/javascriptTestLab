/**
 * qunit testing.
 * 
 * modules are used to organized. 
 */

// modules 
// are used to organize your test cases.
module("OK assertions");

// ok are the most basic assertion
// its pretty flexible but you do need an expression of some sort
// that evalutates to true or false.
test("test01", function() {
	ok("hello", "passing a truthy value passes this statement.");
	ok(1 == 1, "you can use it for expressinos");
	ok(false, "falsey values will cause this to fail.");
});
test("test02", function() {
	var a = { test : 'hello' };
	var b = { test : 'world' };
	var c = { test : 'hello' };
	
	ok(a == a, "checking for object refence equality");
	ok(a == c, "== does not check the internals, it just check"
				+ "if the reference is the same.");
});

// deep equals.
// this is what you should be using generally.
module("deep equals assertions");

test("test01", function() {
	var a = { test : 'hello' };
	var b = { test : 'world' };
	var c = { test : 'hello' };
	
	deepEqual(a, a, "deep equal checks if all of the substructure is equal");
	deepEqual(a, c, "remember that its checking the structure and not if its the same object");
	deepEqual(a, b, "if the structure is different, it should fail");
});
// deep equal works like equals for the basic stuff.
test("test02", function() {
	deepEqual(1, 1, "1 === 1");
	deepEqual(1, 2, "1 !== 2");
});

// asycn test..
// you might want to use this to wait a certain amount of time for things
// to load before you test things.
// useful for ajax stuff..

module("async assertions");

asyncTest("async test 1: 2 sec later!", function() {
	// number of asserts to expect.
  	expect( 1 );
 
 	// set a time out to test out the async.
	setTimeout(function() {
		// test base to try out.
		ok( true, "Passed and ready to resume!" );
		start();
	}, 2000);
	// timeout to wait. in this case 2 seconds.
});
// this is probably a perfered format.
asyncTest("async test 2: more common formatting",2, function() {
	// set a time out to test out the async.
	setTimeout(function() {
		// test base to try out.
		ok( true, "Passed and ready to resume!" );
		start();
	}, 2000);
	// timeout to wait. in this case 2 seconds.
});