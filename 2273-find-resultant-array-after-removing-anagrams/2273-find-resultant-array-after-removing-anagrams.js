/**
 * @param {string[]} words
 * @return {string[]}
 */

const isAnagram = (str1, str2) => {
    const anagramObj = {}
    str1.split("").forEach(x => {
        anagramObj[x] = anagramObj[x] ? ++anagramObj[x] : 1
    })
    
    for(let y of str2){
        if(!anagramObj[y])
            return false;
        --anagramObj[y];
    }
    
    Object.keys(anagramObj).map(z => {
        if(anagramObj[z] > 0)
            return false;   
    })
    return true;
}

var removeAnagrams = function(words) {
    let i = 1;
    while(i<words.length){
            if(words[i].length != words[i-1].length)
                i++;
            else if(isAnagram(words[i], words[i-1])){
                words.splice(i, 1);
            }else{
                i++;
        }
    }
    return words;
};