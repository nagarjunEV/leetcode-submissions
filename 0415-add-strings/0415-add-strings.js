/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let m = num1.length-1, n = num2.length-1, res = "", carry = 0;
    while(m>=0 || n>=0){
        let sum = ((Number(num1[m--]) || 0) + Number((num2[n--]) || 0)) + carry;
        carry = (sum>9) ? 1 : 0;
        res = (sum%10) + res
    }
    if(carry) res = '1' + res; 
    return res
};