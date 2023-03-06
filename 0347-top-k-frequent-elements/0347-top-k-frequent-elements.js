/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(nums.length < 2) return nums;
    let map = new Map(), res = [], temp = new Array(nums.length+1);
    nums.forEach(x => map[x] = (map[x] + 1 || 1))

    for(let v in map){
        let index = map[v]
        temp[index] = (temp[index] || new Set()).add(v);
    }
    for(let i=temp.length-1;i>0;i--){
        if(temp[i] != undefined){
            res.push(...temp[i])
        }
        if(res.length == k)
            break
    }
    return res;
};