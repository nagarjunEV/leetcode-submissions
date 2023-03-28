class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ms = nums[0]
        curr = 0
        
        for n in nums:
            if curr < 0:
                curr = 0
            curr += n
            ms = max(ms, curr)
        return ms