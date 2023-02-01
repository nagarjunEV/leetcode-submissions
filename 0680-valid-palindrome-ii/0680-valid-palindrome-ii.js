var validPalindrome = function(s) {
    return checkIfPalindrome(s, 0, s.length-1, false);
};

const checkIfPalindrome = (s, start, end, flag) => {
    if(start>=end) return true;
    if(flag && s[start] != s[end]) return false;
    if(s[start] != s[end])
        return (checkIfPalindrome(s, start+1, end, true) || checkIfPalindrome(s, start, end-1, true));
    return checkIfPalindrome(s, start+1, end-1, flag);    
}