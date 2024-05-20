/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const obj = {}
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]] && nums[i] > 0)
            obj[nums[i]] = 1
    }
    return Object.keys(obj).length;
};