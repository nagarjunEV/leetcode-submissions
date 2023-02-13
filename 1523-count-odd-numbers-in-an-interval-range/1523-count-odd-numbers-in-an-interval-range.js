/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let res = 0
    if(low%2!=0) {
        res++
        low++
    }
    if(high%2!=0){
        res++  
        high--
    }  
    res += Math.floor((high-low)/2)
    return res
};