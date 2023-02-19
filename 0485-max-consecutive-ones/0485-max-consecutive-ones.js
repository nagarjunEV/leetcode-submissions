/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    for(let i=0;i<nums.length;i++){
        count = 0;
        while(nums[i] == 1) count++, i++;
        res = Math.max(res, count)
    }
    return res
};