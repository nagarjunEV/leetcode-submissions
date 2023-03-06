/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = {};   
    let n = Math.floor(nums.length/3);
    let res = new Set()
    
    for(let i=0;i<=nums.length-1;i++){
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        if(map[nums[i]] > n) res.add(nums[i]);
    }
    return [...res]
};