/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let res = 0, map = {};
    nums.forEach(x => map[x] = 1);
    
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]-1] == undefined){
            let j = nums[i]+1;
            while(map[j] == 1){
                j++;
            }
            res = Math.max(res, j-nums[i]);
        }
    }
    return res
};