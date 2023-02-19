/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    let res = 1
    for(let i=1;i<s.length;i++){
        let count = 1
        while(i<s.length && s.charCodeAt(i-1) + 1 == s.charCodeAt(i)){
            count++;
            i++
        }
        res = Math.max(res, count)
    }
    return res
};