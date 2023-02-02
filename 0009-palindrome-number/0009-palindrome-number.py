class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if x < 10:
            return True
        
        
        temp, y = x, 0
        while x > 0:
            y = y * 10 + x % 10
            x = x // 10
            
        return y == temp
        