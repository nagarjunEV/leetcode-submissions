
const inorder = (root, res) => {
    if(!root) return root
    
    inorder(root.left, res)
    res.push(root.val);
    inorder(root.right, res)
    
    return res
}


var inorderTraversal = function(root) {
    if(!root) return []
    return inorder(root, []) 
};