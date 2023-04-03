const postorder = (root, res) => {
    if(!root) return
    
    postorder(root.left, res)
    postorder(root.right, res)
    res.push(root.val)
    
    return res
}

var postorderTraversal = function(root) {
    if(!root) return []
    
    return postorder(root, []);
};