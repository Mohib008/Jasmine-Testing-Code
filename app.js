// Jasmine Matchers

describe("Jasmine Matchers", function() {
      it("allows for === and deep equality", function() {
        expect(1+1).toBe(2);
        expect([1,2,3]).toEqual([1,2,3]);
      });
      it("allows for easy precision checking", function() {
        expect(3.1415).toBeCloseTo(3.14,2);
      });
      it("allows for easy truthy / falsey checking", function() {
        expect(0).toBeFalsy();
        expect([]).toBeTruthy();
      });
      it("allows for easy type checking", function() {
        expect([]).toEqual(jasmine.any(Array));
        expect(function(){}).toEqual(jasmine.any(Function));
      });
      it("allows for checking contents of an object", function() {
        expect([1,2,3]).toContain(1);
        expect({name:'Ali', job:'Test'}).toEqual(jasmine.objectContaining({name:'Ali'}));
      });
    });

function abc(a,b,c ){
    return a+b+c;
}



// Jasmine Spies

describe("Spies", function(){
    var addspy, result;
    beforeEach(function(){
        addspy = spyOn(window, "abc").and.callThrough();
        result = addspy(1,2,3);
    });
    it("lets parameters to be tested", function(){
        expect(addspy).toHaveBeenCalled();
        expect(addspy).toHaveBeenCalledWith(1,2,3);
    })
    it("can have a return value tested", function(){
        expect(result).toEqual(6);
    })
    it("can have 3 calls", function(){
        expect(addspy.calls.count()).toBe(1)
    })
})


// Jasmine Clock
describe("Clock: A simple Timeout", function(){
    var sample;
    beforeEach(function(){
        sample = jasmine.createSpy("sampleFunction");
        jasmine.clock().install();
    });
    afterEach(function(){
        jasmine.clock().uninstall();
    });
    it("is only invoked after 1000 ms", function(){
        setInterval(function(){
            sample();
        }, 1000);
        jasmine.clock().tick(999);
        expect(sample).not.toHaveBeenCalled();
        jasmine.clock().tick(1);
        expect(sample).toHaveBeenCalled();
        jasmine.clock().tick(1000);
        expect(sample.calls.count()).toBe(2);
    });
});
/*
// Jasmine Testing Async Code
function getUserInfo (username){
    return $.getJSON("https://api.github.com/users/" + username);
}

describe("getUserInfo", function(){
   it("returns the correct name for the user", function(done){
       getUserInfo("elie").then(function(data){
           expect(data.name).toBe("Elie Schoppik");
       });
       done();
   }) ;
});

*/