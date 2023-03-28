class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        mv = nums[0]
        res = -1
        for i in range(1, len(nums)):
            mv = min(nums[i], mv)
            res = max(res, nums[i] - mv)
            
        if res == 0:
            res = -1
        return res