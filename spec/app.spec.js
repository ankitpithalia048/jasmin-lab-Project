
// Imports

const calc = require('../app');


// Calculator Function Specs

describe("Calculator Functions", function() {

  // add

  describe("add", function() {

    it("should add two positive numbers", function() {
      let value = calc.add(3, 2);
      expect(value).toEqual(5);
    });
  
    it("should add a positive and a negative number", function() {
      let value = calc.add(3, -2);
      expect(value).toEqual(1);
    });
  
    it("should give the same value when adding zero", function() {
      let value = calc.add(3, 0);
      expect(value).toEqual(3);
    });
  
  });


  // subtract

  describe("subtract", function() {

    it("should subtract two numbers", function() {
      let value = calc.subtract(3, 2);
      expect(value).toEqual(1);
    });
  
    it("should subtract two numbers for a negative result", function() {
      let value = calc.subtract(2, 3);
      expect(value).toEqual(-1);
    });
  
    it("should give the same value when subtracting zero", function() {
      let value = calc.subtract(3, 0);
      expect(value).toEqual(3);
    });
  
  });
  

  // multiply

  describe("multiply", function() {

    it("should multiply two positive numbers", function() {
      let value = calc.multiply(3, 2);
      expect(value).toEqual(6);
    });
  
    it("should multiply two negative numbers", function() {
      let value = calc.multiply(-3, -2);
      expect(value).toEqual(6);
    });
  
    it("should multiply a positive and a negative", function() {
      let value = calc.multiply(3, -2);
      expect(value).toEqual(-6);
    });
  
    it("should give the same value when multiplying by one", function() {
      let value = calc.multiply(5, 1);
      expect(value).toEqual(5);
    });
  
    it("should give zero when multiplying by zero", function() {
      let value = calc.multiply(5, 0);
      expect(value).toEqual(0);
    });
  
  });
  

  // divide

  describe("divide", function() {

    it("should divide two positive numbers", function() {
      let value = calc.divide(10, 2);
      expect(value).toEqual(5);
    });
  
    it("should divide two negative numbers", function() {
      let value = calc.divide(-10, -2);
      expect(value).toEqual(5);
    });
  
    it("should divide a positive and a negative", function() {
      let value = calc.divide(-10, 2);
      expect(value).toEqual(-5);
    });
  
    it("should divide two positive numbers with a decimal result", function() {
      let value = calc.divide(3, 2);
      expect(value).toEqual(1.5);
    });
  
    it("should give the same value when dividing by one", function() {
      let value = calc.divide(5, 1);
      expect(value).toEqual(5);
    });
  
    it("should throw an exception when dividing by zero", function() {
      let divideByZero = function() { calc.divide(3, 0); };
      expect(divideByZero).toThrowError(RangeError, 'Divide-by-zero');
    });
  
  });


  

});