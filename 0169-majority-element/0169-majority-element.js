/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0], count = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] == candidate){
            count++;
        }else{
            count--;
            if(count == 0) candidate = nums[i], count++;
        }
    }
    return candidate
};