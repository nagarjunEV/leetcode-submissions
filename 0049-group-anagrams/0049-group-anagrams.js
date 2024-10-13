/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const resObj = {}
    const res = []
    const customStrs = strs.map(str => str.split("").sort().join(""))

    
    for(let i=0; i<customStrs.length; i++){
        if(!resObj[customStrs[i]]){
            resObj[customStrs[i]] = [strs[i]]
        }else {
            resObj[customStrs[i]].push(strs[i])
        }
    }
    Object.keys(resObj).map(key =>{
      res.push(resObj[key])  
    })
   return res
};