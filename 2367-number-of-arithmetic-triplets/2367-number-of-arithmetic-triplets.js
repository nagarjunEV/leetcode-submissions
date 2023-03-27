/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let map = {}
    let res = 0
    nums.forEach(x => map[x] = 1)
    
    for(let i=0;i<nums.length-2;i++){
        let temp = nums[i]
        if(map[temp+diff] && map[temp+2*diff])
            res += 1
    }
    return res
};