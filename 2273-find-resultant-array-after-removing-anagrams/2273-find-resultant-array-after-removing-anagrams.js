const checkIfAnagrams = (w1, w2)=> {
    if(w1.length != w2.length) return false
    
    w1 = w1.split('').sort().join('');
    w2 = w2.split('').sort().join('')
    return w1 == w2
}

var removeAnagrams = function(words) {
    
    for(let i=1;i<words.length;){
        let res = checkIfAnagrams(words[i-1], words[i])
        if(res)
            words.splice(i, 1)
        else
            i++
    }
    return words
};