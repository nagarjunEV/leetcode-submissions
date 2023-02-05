var threeSumClosest = function(nums, target) {
    let len = nums.length;
    if(len == 3) return nums.reduce((a, b) => a+b);
    let res = Number.MAX_VALUE;
    nums = nums.sort((a, b) => a-b);
    for(let i=0;i<len-2;i++){
        let j = i+1, k = len-1;
        while(j<k){
            let sum = nums[i] + nums[j] + nums[k];
            if(Math.abs(sum-target)<Math.abs(res-target)) res = sum;
            if(sum>target)
                k--;
            else
                j++;
        }
    }
    return res
};