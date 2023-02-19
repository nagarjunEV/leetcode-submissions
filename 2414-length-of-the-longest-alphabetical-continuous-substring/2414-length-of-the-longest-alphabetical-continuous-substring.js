const getCharCode = n => (n.charCodeAt('0') - 97);

var longestContinuousSubstring = function(s) {
    let map = {}, res = 1;
    for(let i=0;i<s.length;i++){
        let key = getCharCode(s[i])
        map[key] = map[key] ? map[key].add(i) : new Set().add(i);
    }
    
    for(let i=0;i<s.length;i++){
        let chKey = getCharCode(s[i]);
        j = i+1;
        while(map[chKey+1] && map[chKey+1].has(j)){
            chKey++;
            j++;
        }
        res = Math.max(res, j-i);
    }
    return res
};