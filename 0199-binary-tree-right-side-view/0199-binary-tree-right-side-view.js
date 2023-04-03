const rightSideView = function(root) {
    if(!root) return []
    
    let res = [], q = [root];
    
    while(q.length>0){
        let currLen = q.length;
        let i =0;
        while(i < currLen - 1){
            let node = q.shift();
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
            i++;
        } 
        let nod = q.shift();
        res.push(nod.val)
        
        if(nod.left) q.push(nod.left)
        if(nod.right) q.push(nod.right)

    }
    return res
    
};