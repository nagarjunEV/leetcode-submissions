# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBST(self, root, left, right):
        if not root:
            return True
        
        if root.val <= left or root.val >= right:
            return False
        
        return self.isBST(root.left, left, root.val) and self.isBST(root.right, root.val, right)
    
    
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        
        return self.isBST(root, float("-inf"), float("inf"))