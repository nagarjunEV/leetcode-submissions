/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while(left<right){
        if(nums[left]+nums[right] == target)
            break;
        if(nums[left]+nums[right]>target)
            right--
        else
            left++
    }
    return [left+1, right+1]
};