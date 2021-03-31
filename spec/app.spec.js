

var add = require('../app');

describe("Add functionality",()=>{

    it("should add positive number", ()=>{
        const result = add(4,5);
        expect(result).toEqual(9);
    });
    
    it("should add negative number", ()=>{
        const result = add(-4,5);
        expect(result).toEqual(1);
    });
});