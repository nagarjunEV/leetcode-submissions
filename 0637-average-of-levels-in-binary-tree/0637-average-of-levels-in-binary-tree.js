/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(!root)
        return [0]
    
    let q = [root], res = []
    
    while(q.length>0){
        let currLen = q.length;
        if(currLen>0){
            let val = 0;
            for(let i=0;i<currLen;i++){
                let curr = q.shift();
                if(curr) {
                    val += curr.val;
                    if(curr.left) q.push(curr.left)
                    if(curr.right) q.push(curr.right)
                }
            }
            res.push(val/currLen)    
        }
    }
    return res
};