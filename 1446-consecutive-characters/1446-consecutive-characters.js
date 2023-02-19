/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    if(s.length==1) return 1;
    
    let res = 0, count = 1;
    for(let i=1;i<s.length;i++){
        count = 1;
        while(i<s.length && s.charCodeAt(i-1) == s.charCodeAt(i)){
            count++
            i++
        }
        res = Math.max(res, count)
    }
    return res
};