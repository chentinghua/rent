var request = require('request');
var expect = require('chai').expect;

describe('API Unit Test : shop profile ', function() {
	
	var url = 'http://10.127.4.69:3000/shop/profiles';
	var len = 0;
	
    before(function(done){
    	request(url, function (error, response , body) {
			
			 if (!error &&  response.statusCode == 200) {
				var response = JSON.parse(body);
				len = response.data.length; 
			  } 
			 
			 
			 done();
			 
		});
    });
	 
     
     it('API response count should be equals 1000', function(done) {
    	 expect(len).to.be.above(1000);
	     done();
     });	
		   
});

