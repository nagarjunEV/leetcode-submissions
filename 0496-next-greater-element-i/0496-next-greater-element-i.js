var nextGreaterElement = function(nums1, nums2) {
    let res = nums1.map(x=>-1)
    let map = {}
    for(let i=0;i<nums1.length;i++)
        map[nums1[i]] = i
    
    for(let i=0;i<nums2.length;i++){
        if(map[nums2[i]]!== undefined){
            // console.log(map[nums2[i]])
            
            for(let j=i+1; j<nums2.length; j++){
                if(nums2[j]>nums2[i]){
                    res[map[nums2[i]]] = nums2[j]
                    break
                }
            }
        }
    }
    return res
};