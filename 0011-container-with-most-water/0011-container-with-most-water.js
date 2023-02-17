/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let left = 0, right = height.length - 1;
    
    while(left<right){
        const h = Math.min(height[left], height[right]);
        const area =  h * (right-left);
        res = Math.max(area, res);
        (height[left] > height[right]) ? right-- : left++;
    }
    return res
};