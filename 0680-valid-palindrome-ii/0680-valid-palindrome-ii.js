/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    return findPalindrome(s, 0, s.length-1, false);
};


const findPalindrome = (s, start, end, flag) => {
    if(start>=end) return true;
    
    if(flag && s[start] != s[end]) return false;
    
    if(s[start] != s[end])
        return (findPalindrome(s, start+1, end, true) || findPalindrome(s, start, end-1, true))
    
    return findPalindrome(s, start+1, end-1, flag)
    
}