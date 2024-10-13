/**
 * @param {string[]} words
 * @return {string[]}
 */

const areAnagrams = (str1, str2) => {
   return str1.split("").sort().join("") === str2.split("").sort().join("");
}


var removeAnagrams = function(words) {
    let i = 1;
    while(i<words.length){
            if(words[i].length != words[i-1].length)
                i++;
            else if(areAnagrams(words[i], words[i-1])){
                words.splice(i, 1);
            }else{
                i++;
        }
    }
    return words;
};