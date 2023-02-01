/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        if(isPalindrome(words[i]))
            return words[i]
    }
    return ""
};

const isPalindrome = str => {
    return (str == str.split('').reverse().join(''))
}