/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let zero = 0, one = 0;
    for(let i=0;i<s.length;i++){
        let count = 0;
        while(s[i] == 1){
            i++
            count++
        }
        one = Math.max(one, count)
    }
    for(let i=0;i<s.length;i++){
        let count = 0;
        while(s[i] == 0){
            i++
            count++
        }
        zero = Math.max(zero, count)
    }
    return one > zero;
};