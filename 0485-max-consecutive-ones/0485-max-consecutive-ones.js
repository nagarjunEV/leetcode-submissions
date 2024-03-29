/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    for(let i=0;i<nums.length;i++){
        let count = 0;
        while(i<nums.length && nums[i] == 1) count++, i++;
        res = Math.max(res, count)
    }
    return res
};