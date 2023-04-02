const levelOrder = function(root) {
    let res = []
    let q = []
    q.push(root);
    
    while(q.length != 0){
        const currLen = q.length;
        let currLevel = []
        for(let i=0;i<currLen;i++){
            let curr = q.shift();
            if(curr){
                currLevel.push(curr.val);
                q.push(curr.left)
                q.push(curr.right)
            }
        }
        if(currLevel.length > 0) res.push(currLevel)
    }
    return res
};