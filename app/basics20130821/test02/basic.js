/*  
 * wrapping everything in name space.
 * using the () at the end to execute this...
 * if you dont' have it, you ahve to do something like foo.run(); 	
 **/
var foo = (function () {
	
	var myPrivateVar, myPrivateMethod;
	 
	// A private counter variable
	myPrivateVar = 0;
 
	// A private function which logs any arguments
	var myPrivateMethod = function( foo ) {
      console.log( foo );
	};
	
	return {
	    // A public variable
	    myPublicVar: "foo",
	 
	    // A public function utilizing privates
	    myPublicFunction: function( bar ) {
	      // Increment our private counter
	      myPrivateVar++;	 
	      // Call our private method using bar
	      myPrivateMethod( bar ); 
	    },
	    
	    // testing public....
	    testAdditon : function() {
	    	var result = 3 + 2 + 'a';
	    	console.log(result);
	    },
	    
	    // runner function
	    run : function() {
	    	// need to call class name.
	    	foo.testAdditon();
	    }
	};
	
})();

// running public method.
foo.run();