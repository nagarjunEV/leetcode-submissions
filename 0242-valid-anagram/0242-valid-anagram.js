/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if(s.length != t.length)
        return false
    const stObj = {}
    for(let st of s){
        stObj[st] = stObj[st] ? ++stObj[st] : 1;
    }
    
    for(let ts of t){
        if(!stObj[ts])
            return false
        --stObj[ts];
    }
    
    Object.values(stObj).some(x => {
        if(x)
            return false
    })
    return true
};