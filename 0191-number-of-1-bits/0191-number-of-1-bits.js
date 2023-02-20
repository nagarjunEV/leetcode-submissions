/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    
    while(n){
        if(n)
            res++
        n = n & (n - 1);
    }
    return res
};