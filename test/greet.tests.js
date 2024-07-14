//console.log(greet("Zano"));
//console.log(greet("Sizwe"));

describe('this is my greet function' , function(){
    it("it should return 'Hello, Zano' when called with Zano", function(){
        assert.equal("Hello, Zano",greet("Zano"), "this should not be true");

    });

    it("it should return 'Hello, Sizwe' when called with Sizwe", function(){
        assert.equal("Hello, Sizwe",greet("Sizwe"), "this should not be true");
    
    });

    it("it should return 'Hello, Lindiwe' when called with Lindiwe", function(){
        assert.equal("Hello, Lindiwe",greet("Lindiwe"), "this should not be true");
});

});




