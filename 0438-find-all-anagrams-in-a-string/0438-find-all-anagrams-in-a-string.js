const compareMaps = (temp, map) => {
    let smap = {}
    for(let i=0;i<temp.length;i++){
        smap[temp[i]] = smap[temp[i]] ? smap[temp[i]] + 1 : 1
    }
    
    for(let ch in smap){
        if(smap[ch] != map[ch])
            return false
    }
    return true
}

var findAnagrams = function(s, p) {
    if(s.length < p.length) return []
    
    let map = {}, res = [], pp = p.split('').sort().join('');
    for(let i=0;i<p.length;i++)
        map[p[i]] = map[p[i]] ? map[p[i]] + 1 : 1
    
    
    for(let i=0;i<s.length - p.length + 1;i++){
        if(map[s[i]] != undefined){
            if(compareMaps(s.slice(i, i+p.length), map))
                res.push(i)
        }
    }
    return res
};