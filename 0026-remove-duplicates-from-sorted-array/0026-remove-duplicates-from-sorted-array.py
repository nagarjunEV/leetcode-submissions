class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        k = 0
        
        while i < len(nums):
            if nums[k] != nums[i]:
                k += 1
                nums[k] = nums[i]
            i += 1
        
        return k + 1