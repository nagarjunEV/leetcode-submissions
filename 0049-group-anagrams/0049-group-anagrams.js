/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    for(let str of strs){
        const s = str.split("").sort().join("");
        if(!obj[s])
            obj[s] = []
        obj[s].push(str)
    }
    return Object.values(obj);
};