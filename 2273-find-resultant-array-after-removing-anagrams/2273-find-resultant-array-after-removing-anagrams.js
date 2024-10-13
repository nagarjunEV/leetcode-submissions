/**
 * @param {string[]} words
 * @return {string[]}
 */

const areAnagrams = (str1, str2) => {
   return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const isAnagram = (str1, str2) => {
    let anagramObj = {}
    str1.split("").forEach(x => {
        anagramObj[x] = anagramObj[x] ? ++anagramObj[x] : 1
    })
    
    str2.split("").forEach(y => {
        anagramObj[y] = anagramObj[y] ? --anagramObj[y] : 1
    })
        
    Object.keys(anagramObj).map(z => {
        if(anagramObj[z] > 0)
            return false;   
    })
    return true;
}

var removeAnagrams = function(words) {
    let i = 1;
    while(i<words.length){
            if(areAnagrams(words[i], words[i-1])){
                words.splice(i, 1);
            }else{
                i++;
        }
    }
    return words;
};