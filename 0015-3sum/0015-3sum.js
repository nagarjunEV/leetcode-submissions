var threeSum = function(nums) {
    let res = []
    nums = nums.sort((a, b) => a-b)
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] > 0)
            break;
        let j = i+1;
        let k = nums.length-1;
        while(j<k){
            const sum = nums[i] + nums[j] + nums[k];
            if(sum == 0){
                res.push([nums[i], nums[j], nums[k]]);
                while(j<k && nums[j+1] == nums[j])
                    j++;
                while(k>j && nums[k] == nums[k-1])
                    k--; 
                j++;
                k--;
            }
            else if(sum>0)
                k--;
            else
                j++;
        }
        while(i<nums.length-1 && nums[i] == nums[i+1])
            i++;
    }           
    return res;
}