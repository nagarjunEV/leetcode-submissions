/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length == 1) return nums[0]
    
    let i = 0, j = nums.length - 1;
    while(i<j){
        let mid = Math.floor(i + (j-i)/2);
        if(nums[mid]>nums[j])
            i = mid+1;
        else
            j = mid
    }
    return nums[i]
};