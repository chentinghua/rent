var request = require('request');

var shop_file_api = require('./shop_file_api');
var expect = require('chai').expect;

describe('API Unit Test : shop profile ', function() {
	
		var url = 'http://10.127.4.69:3000/profiles?columns[]=spf_id_pk&columns[]=spf_shop_url';
		var len = 0;
		
	    before(function(done){
	    	request(url, function (error, response , body) {
				
				 if (!error &&  response.statusCode == 200) {
					var response = JSON.parse(body);
					len = response.data.length;
					//len = 100;
					console.warn("shop profile API response length="+len);
				  } else {
					  console.log("Got an error: ", error, ", status code: ", response);
				  }
				 
				 done();
				 
			});
	    });
		 
	     
	     it('API response count  should be equals 100', function(done) {
	    	 expect(len).to.be.equal(100);
		     done();
	     });	
		   
});

