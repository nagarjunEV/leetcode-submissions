/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<2)
        return s.length
    
    let charSet = new Set();
    let res = 0;
    let l = 0;
    for(let r=0;r<s.length;r++){
        while(charSet.has(s[r])){
            charSet.delete(s[l]);
            l += 1;
        }
        charSet.add(s[r]);
        res = Math.max(res, r - l + 1);
    }
    return res
};