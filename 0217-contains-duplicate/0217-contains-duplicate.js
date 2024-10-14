/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const resObj = {}
    for(let num of nums){
        if(resObj[num])
            return true
        resObj[num] = 1
    }
    return false
};