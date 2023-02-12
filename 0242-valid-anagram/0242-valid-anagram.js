var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let freqArr = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        freqArr[index] += 1;
    }
    for(let i=0;i<t.length;i++){
        let index = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
        freqArr[index] -= 1;
    }
    if(freqArr.some(x => x!=0)) return false
    return true
};