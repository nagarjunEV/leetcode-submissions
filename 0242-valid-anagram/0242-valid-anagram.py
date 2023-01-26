class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count = {}
        
        for x in s:
            if x not in count:
                count[x] = 1
            else:
                count[x] += 1
                
        for x in t:
            if x not in count:
                return False
            else:
                count[x] -= 1
                
        for x in count:
            if count[x] != 0:
                return False
        return True
        
        
        