/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   let maxLen = Math.max(word1.length, word2.length);
    let res = ''
    for(let i=0;i<maxLen;i++){
        res += (word1[i] || '') + (word2[i] || '')
    }
    return res
};