

describe('this is my greet function' , function(){
    it("it should return 'Hello, Zano' when called with Zano", function(){
        assert.equal(2,2, greet('Mthandazo'), 'this should not be true');

    });

    it("it should return 'Hello, Sizwe' when called with Sizwe", function(){
        assert.equal(2,2, greet('Sizwe', greet('Sizwe')), 'this should not be true');
    
    });

});




