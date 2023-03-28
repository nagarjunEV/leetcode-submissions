/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0
    
    for(let i=0;i<strs.length;i++){
        let temp = Number(strs[i]);
        if(isNaN(temp)){
            temp = strs[i].length
        }
        max = Math.max(temp, max);
    }
    return max
};