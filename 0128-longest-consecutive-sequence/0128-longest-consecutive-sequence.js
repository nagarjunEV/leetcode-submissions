var longestConsecutive = function(nums) {
    let map = {}
    for(let i=0;i<nums.length;i++){
        map[nums[i]] = 1
    }
    let res = 0;
    
    for(x of nums){
        let temp = x-1;
        if(!map[temp]){
            let y = x + 1;
            while(map[y]) y++
            res = Math.max(res, y-x)
        }
    }
    return res
};