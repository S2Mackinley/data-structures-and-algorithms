/* eslint-disable indent */
'use strict';

//===============IMPORTS===========\\
const multiBracketValidation = require('../multi-bracket-validation');


//================TESTS============\\
describe(`multiBracketValidation`, () => {

    it(`returns true if there are balanced brackets` , () => {
        let test = multiBracketValidation('{}');
        expect(test).toEqual(true);
      });
    it(`returns true if there are perens inside curlys` , () => {
        let test = multiBracketValidation('{}(){}');
        expect(test).toEqual(true);
      });
    it(`returns true if if there are extra characters` , () => {
      let test = multiBracketValidation('()[[Extra Characters]]');
      expect(test).toEqual(true);
    });
    it(`returns true if you have a balance of brackets` , () => {
      let test = multiBracketValidation('(){}[[]]');
      expect(test).toEqual(true);
    });
    it(`returns true if you add code fellows in the middle` , () => {
      let test = multiBracketValidation('{}{Code}[Fellows](())');
      expect(test).toEqual(true);
    });
    it(`returns false if its input's brackets are not balanced` , () => {
      let test = multiBracketValidation('[({}]');
      expect(test).toEqual(false);
    });
    it(`returns false if its input's brackets are not balanced` , () => {
      let test = multiBracketValidation('(](');
      expect(test).toEqual(false);
    });
    it(`returns false if its input's brackets are not balanced` , () => {
      let test = multiBracketValidation('{(})');
      expect(test).toEqual(false);
    });
    it(`returns false if we cant go back and forth forever ))<>((` , () => {
      let test = multiBracketValidation('))<>((');
      expect(test).toEqual(false);
    });
});
