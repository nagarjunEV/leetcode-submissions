/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i=a.length-1, j=b.length-1, carry = 0;
    let sum = 0, reslen = Math.max(i, j);
    let res = new Array(reslen);
    
    while(i>=0 || j>=0){
        sum = ((i >=0 && Number(a[i--])) || 0) + ((j>=0 && Number(b[j--])) || 0) + carry;
        carry = 0;
        if(sum == 2)
            carry = 1, sum = 0
        else if(sum == 3)
            carry = 1, sum = 1
        res[reslen--] = sum 
    }
    res = res.join('');
    if(carry) res = '1' + res;
    return res
};