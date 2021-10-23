// assertion prove that our production meets our expectations.
import { expect } from 'chai';
import { isAnagram } from './anagrams';


describe('isAnagrams - basic functionality', () => {
    it('returns true when two known anagrams are passed in', () => {
        const expected = true;
        const actual = isAnagram('listen', 'silent');
        expect(actual).to.equal(expected);
    })
    // 'elbows' 'below' NOT anagrams.
    it('returns false when either of the string has extra letters', () => {
        // return false if the don't contain the exact match. 
        const expected = false;
        const actual = isAnagram('elbows', 'below');
        expect(actual).to.equal(expected);

        // reverse the order and chek if the second string 
        // contains the letters with second string.
        const actual2 = isAnagram('below', 'elbows');
        expect(actual2).to.equal(expected)
    })

    it('return false when string have the same letters but different quantities', () => {
        const expected = false;
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.equal(expected);
    })
});