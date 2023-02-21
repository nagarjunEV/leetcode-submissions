/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = Number.MAX_VALUE;
    nums = nums.sort((a, b) => a-b);
    for(let i=0;i<nums.length-2;i++){
        let j = i+1, k = nums.length - 1;
        while(j<k){
            const sum = nums[i] + nums[j] + nums[k];
            if(Math.abs(sum-target) < Math.abs(res-target))
                res = sum
            if(sum>target)
                k--;
            else
                j++;
        }
    }
    return res
};