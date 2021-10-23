/**
 * Get letter count.
 * 
 * @param {string} word 
 */
export const getLetterCount = word => {
    const letters = word.split('');
    return letters.reduce((acc, letter) => {
        return acc[letter] ? {
            ...acc,
            [letter]: acc[letter] += 1
        } : {
            ...acc,
            [letter]: 1
        }
    }, {});
}