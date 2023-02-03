/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length
    if(len%2 != 0) return false
    let stack = []
    for(let i=0;i<len;i++){
        if(s[i] == '(')
            stack.push(')')
        else if(s[i] == '[')
            stack.push(']')
        else if(s[i] == '{')
            stack.push('}')
        else if(s[i] !== stack.pop())
            return false
    }
    return stack.length == 0
};