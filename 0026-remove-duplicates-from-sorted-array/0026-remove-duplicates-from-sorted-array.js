/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = 0;
    for(let i=1;i<=nums.length;i++){
        if(nums[i] == nums[i-1])
            continue
        else{
            nums[unique] = nums[i-1];
            unique++;
        }
    }
    return unique
};