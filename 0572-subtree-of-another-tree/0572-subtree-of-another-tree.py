# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def is_same(t, s):
            if not t and not s:
                return True
            
            if not t or not s or t.val != s.val:
                return False
            
            return is_same(t.left, s.left) and is_same(t.right, s.right)
        
        if not subRoot:
            return True
        
        if not root:
            return False
        
        if root.val == subRoot.val:
            if is_same(root, subRoot):
                return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)