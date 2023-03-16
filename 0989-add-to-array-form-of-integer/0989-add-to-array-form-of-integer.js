/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let len = num.length - 1;
    
    while(k){
        if(len<0) num.unshift(k%10);
        else{
            k = k + num[len]
            num[len--] = k % 10;
        }
        k = Math.floor(k/10);
    }
    return num
};