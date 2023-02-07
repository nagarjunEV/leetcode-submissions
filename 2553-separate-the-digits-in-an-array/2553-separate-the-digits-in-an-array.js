/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let str = "", res = [];
    while(nums.length){
        str = nums.pop() + str;
    }
    for(let i=0;i<str.length;i++)
        res.push(str[i])
    return res
};