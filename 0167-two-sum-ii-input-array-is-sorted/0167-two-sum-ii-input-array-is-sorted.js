/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while(nums[i]+nums[j] != target){
        if(nums[i]+nums[j] > target)
            j--;
        else
            i++;
    }
    return [i+1, j+1];
};