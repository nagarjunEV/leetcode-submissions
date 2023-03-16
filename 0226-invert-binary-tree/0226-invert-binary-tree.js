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
 * @return {TreeNode}
 */

var invert = function(root){
    if(root == null) return;
    invert(root.left)
    invert(root.right)
    
    let temp = root.left
    root.left = root.right
    root.right = temp
}

var invertTree = function(root) {
    invert(root);
    return root
};