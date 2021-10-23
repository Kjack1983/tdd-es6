// assertion prove that our production meets our expectations.
import { expect } from 'chai';
import { getLetterCount } from './letter-count';

/**
 * the actual result should be the same as the expected.
 * deep is placed here because we are comparing objects.
 */
describe('getLetterCount - basic functionaluity', ()=> {
    it('returns an empty string when passed empty string', () => {
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);
    })

    it('return the correct letter count for a word with only one of each letter', () => {
        const expected  = {c: 1, a: 1, t: 1};
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);
    })

    it('return the correct letter count for words with more that one certain letters', () => {
        const expected = { m: 1, i: 4, s: 4, p: 2 };
        const actual =  getLetterCount('mississippi');
        expect(actual).to.deep.equal(expected);
    });
    
});