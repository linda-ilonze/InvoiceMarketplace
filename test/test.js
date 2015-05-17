var assert = require("assert");
var calculations = require('../server/platform/calculations');

var epsilon = 0.0000000000001

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should calculate return of 11.4% on APR of 11.4% over a year', function(){
        expected = 11.4;
        assert(calculations.annualizeReturn(new Date(2015,1,1), new Date(2016,1,1), 11.4) - expected < epsilon);
    })
  })
})
