/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if(tokens.length === 1) return tokens[0];
    let map = {'+':1, '-':1, '*':1, '/':1}
    let stack = []
    for(let i=0; i<tokens.length; i++){
        if(map[tokens[i]] == undefined)
            stack.push(tokens[i])
        else{
            let a = Number(stack.pop());
            let b = Number(stack.pop())
            let op = tokens[i]
            if(op == '/'){
                (Math.floor(b/a)) >= 0 ? stack.push(Math.floor(b/a)) :  stack.push(Math.ceil(b/a))
            }
            else if(op == '*')
                stack.push(b * a)
            else if(op == '-')
                stack.push(b - a)
            else if(op == '+')
                stack.push(b + a)
        }
    }
    return stack.pop()
};