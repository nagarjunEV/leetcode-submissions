/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let map = {}
    for(let i=1;i<nums.length;i++){
        let sum = nums[i-1]+nums[i];
        if(map[sum] != undefined)
            return true
        map[sum] = i            
    }
    return false
};