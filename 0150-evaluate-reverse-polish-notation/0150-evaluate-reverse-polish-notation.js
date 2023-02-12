/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let map = {
        '+': (a,b) => a+b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
        '/': (a,b) => a/b >= 0 ? Math.floor(a/b) : Math.ceil(a/b)
    }
    
    let stack = []
    for(let i=0; i<tokens.length; i++){
        if(map[tokens[i]] == undefined)
            stack.push(tokens[i])
        else{
            let a = Number(stack.pop());
            let b = Number(stack.pop())
            let op = tokens[i]
            stack.push(map[op](b, a))
        }
    }
    return stack.pop()
};