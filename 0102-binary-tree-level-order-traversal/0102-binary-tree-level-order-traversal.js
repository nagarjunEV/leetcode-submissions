const levelOrder = function(root) {
    if(!root)
        return []
    
    let q = [root], res = []
    
    while(q.length>0){
        const currLen = q.length
        let currLevel = []
        for(let i=0;i<currLen;i++){
            let curr = q.shift();
            currLevel.push(curr.val);
            if(curr.left) q.push(curr.left)
            if(curr.right) q.push(curr.right)
        }
        res.push(currLevel)
    }
    return res
};