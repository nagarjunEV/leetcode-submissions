/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = {}
    nums.forEach(x => map[x] = 1);
    
    let res = 0
    for(let i=0;i<nums.length;i++){
        const x = nums[i]-1
        if(!map[x]){
            let j = x+1;
            while(map[j]) j++
            res = Math.max(res, j - x - 1);
        }
    }
    return res
};