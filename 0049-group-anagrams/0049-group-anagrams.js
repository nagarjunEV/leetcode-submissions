const isPrime = n => {
    let i = 2;
    while(i<=n/2){
        if(n%i==0)
            return false
        i++
    }
    return true
}

var groupAnagrams = function(strs) {
    let primeArr = [];
    let n = 2;
    while(primeArr.length<26){
        if(isPrime(n))
            primeArr.push(n)
        n++;
    }
    
    let map = {}, sumArr = []
    for(let i=0;i<strs.length;i++){
        let j=0, key = 1;
        let str = strs[i]
        while(j<str.length){
            key *= primeArr[str[j].charCodeAt(0) - 97]
            j++;
        }
        if(map[key] != undefined)
            map[key].push(strs[i])
        else
            map[key] = [strs[i]]
    }
    
    return Object.values(map);
};
