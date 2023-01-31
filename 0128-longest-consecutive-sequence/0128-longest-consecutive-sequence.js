const longestConsecutive = function(nums) {
    let len = nums.length
    if(len<2) return len;
    
    let map = {}
    for(let i=0;i<nums.length;i++){
        map[nums[i]] = 1
    }
    let res = 0;
    for(let i=0;i<len;i++){
        if(!map[nums[i]-1]){
            let y = nums[i] + 1;
            while(map[y]) y++
            res = Math.max(res, y-nums[i]);
        }
    }
    return res
};