var test = require('unit.js');
describe('Learning by the example', function(){
  it('example variable', function(){
    // just for example of tested value
    var example = 'hello world';
    test
      .string(example)
        .startsWith('hello')
        .match(/[a-z]/)
      .given(example = 'you are welcome')
        .string(example)
          .endsWith('welcome')
          .contains('you')
      .when('"example" becomes an object', function(){
        example = {
          message: 'hello world',
          name: 'Nico',
          job: 'developper',
          from: 'France'
        };
      })
      .then('test the "example" object', function(){
        test
          .object(example)
            .hasValue('developper')
            .hasProperty('name')
            .hasProperty('from', 'France')
            .contains({message: 'hello world'})
        ;
      })
      .if(example = 'bad value')
        .error(function(){
          example.badMethod();
        })
    ;
  });
  it('other test case', function(){
    // other tests ...
  });
});


var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
});

 

var request = require('request');
var url = 'http://10.127.4.69:3000/profiles?columns[]=spf_id_pk&columns[]=spf_shop_url';
var api_response_rows_count = 0 ;

request(url, function (error, response , body) {
		 
  if (!error &&  response.statusCode == 200) {
    var response = JSON.parse(body);
    api_response_rows_count = response.data.length;
    console.log("Got a response: ", response.data.length);
    
    describe('Array', function(){
  	  describe('#indexOf()', function(){
  	    it('should return -1 when the value is not present', function(){
  	      assert.equal(-1, response.indexOf(5)); 
  	    })
  	  })
  });    
  } else {
    console.log("Got an error: ", error, ", status code: ", response);
  }
});



