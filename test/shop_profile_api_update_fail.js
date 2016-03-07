var request = require('request');
var expect = require('chai').expect;

describe('API Unit Test : shop profile ', function() {
	 
	var code = 0;
	
    before(function(done){
	   var options = {
		        uri : 'http://10.127.4.69:3000/shop/profile/5',
		        method : 'PUT'
	   }; 
	   
	   request(url, function (error, response , body) {
			
		   if (!error &&  response.statusCode == 200) {
			   var response = JSON.parse(body);
			   code = response.status.code; 
		   } 
			 
			 
			 done();
			 
		});
    });
	 
     
     it('API response status code should be equals 400', function(done) {
    	 expect(code).to.be.equal(400);
	     done();
     });	
		   
});

