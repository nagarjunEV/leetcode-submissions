/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const resObj = {}
    const positions = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]

    for(let str of strs){
        const key = str.split('').reduce((total, character) => total * positions[character.charCodeAt() - 97], 1);
       if(!resObj[key]){
           resObj[key] = [str]
       }else{
           resObj[key].push(str)
       }
    }
    return Object.values(resObj);
};