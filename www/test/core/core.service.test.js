'use strict';
  
describe('serviceTest', function($scope,require){

	require([ "friends" ], function( newFriends ) {

    	newFriends;
    	it('should have variable text = "Hello World!"', function(){
	        expect('Sup').toBe('Sup');
	    });
    });

});