var nextGreaterElement = function(nums1, nums2) {
    let res = nums1.map(x=>-1)
    let map = {}
    for(let i=0;i<nums1.length;i++)
        map[nums1[i]] = i
    
    let stack = []
    
    for(let i=0;i<nums2.length;i++){
        while(stack.length>0 && nums2[i] > stack[stack.length-1]){
            let temp = stack.pop()
            res[map[temp]] = nums2[i]                
        }
        if(map[nums2[i]] !== undefined)
            stack.push(nums2[i])
    }
    return res
};