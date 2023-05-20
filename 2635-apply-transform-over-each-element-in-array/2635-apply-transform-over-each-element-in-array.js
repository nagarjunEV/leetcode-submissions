/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let op = []
    for(let i=0;i<arr.length;i++){
        //arr[i] = fn(arr[i], i);
        op.push(fn(arr[i], i));
    }
    return op;
};