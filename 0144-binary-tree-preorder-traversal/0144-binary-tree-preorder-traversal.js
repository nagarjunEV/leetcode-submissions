const preorder = (root, res) => {
    if(!root) return
    
    res.push(root.val)
    preorder(root.left, res)
    preorder(root.right, res)
    
    return res
}

var preorderTraversal = function(root) {
    if(!root) return []
    
    return preorder(root, [])
};