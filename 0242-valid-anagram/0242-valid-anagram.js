/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const lettersObj = {}
    
    if(s.length != t.length) return false;
    
   for(let x of s){
       lettersObj[x] = lettersObj[x] ? lettersObj[x] + 1 : 1;
    };
    
    for(let y of t){
        if(!lettersObj[y])
            return false;
        --lettersObj[y];
    }
    

    for(let key in lettersObj){        
        if(lettersObj[key] > 0){
            return false;
        }
    };
    return true;
    
};