/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = '', i=0, j=0, flag = true;
    
    while(i<word1.length && j<word2.length){
        if(flag)
            res += word1[i++]   
        else
            res += word2[j++] 
        flag = !flag
    }
    
    while(i<word1.length) res += word1[i++]
    while(j<word2.length) res += word2[j++]
    
    return res

};