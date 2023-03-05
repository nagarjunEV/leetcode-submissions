/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x>=0 && x <= 9) return true
    if(x<0) return false
    if(x%10 == 0) return false
    
    let temp = 0, curr = x;
    while(x){
        temp = temp * 10 + x % 10;
        x = Math.floor(x/10);
    }
    return curr == temp;
};