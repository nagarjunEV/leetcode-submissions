/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length == 1) return nums;
    
    let zero = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            let temp = nums[zero];
            nums[zero] = nums[i]
            nums[i] = temp;
            zero++
        }
    }
};