import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';

export const isAnagram = (stringA, stringB) => {
	const string1LetterCount = getLetterCount(stringA);
	const string2LetterCount = getLetterCount(stringB);

	return 	isEqual(string1LetterCount, string2LetterCount);
}