/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    if(x<10) return true
    let inp = x, temp = 0
    
    while(x > 1){
        temp = temp * 10 +  Math.floor(x%10)
        x /= 10
    }
    return inp == temp
};