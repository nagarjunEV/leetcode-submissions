/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let target = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            let temp = nums[target];
            nums[target] = nums[i];
            nums[i] = temp;
            target++;
        }
    }
    return target
};