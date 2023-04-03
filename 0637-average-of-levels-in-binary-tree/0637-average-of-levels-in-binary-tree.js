const averageOfLevels = function(root) {
    if(!root)
        return [0]
    
    let q = [root]
    let res = []
    
    while(q.length>0){
        let currLen = q.length
        let currVal = 0
        for(let i=0;i<currLen;i++){
            const curr = q.shift();
            currVal += curr.val
            if(curr.left) q.push(curr.left)
            if(curr.right) q.push(curr.right)
        }
        res.push(currVal/currLen)
    }
    return res
};