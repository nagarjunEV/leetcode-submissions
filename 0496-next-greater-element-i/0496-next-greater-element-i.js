/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = nums1.map(x => -1);
    let map = {}
    
    for(let i=0;i<nums1.length;i++)
        map[nums1[i]] = i
    
    let stack = []
    for(let i=0;i<nums2.length;i++){
        let curr = nums2[i] 
        while(stack.length>0 && curr > stack[stack.length-1]){
            let temp = stack.pop();
            res[map[temp]] = curr
        }
        if(map[curr]!=undefined)
            stack.push(curr)
    }
    return res
};