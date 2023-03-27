class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums = sorted(nums)

        res = float('inf')
        
        for i in range(len(nums)):
            j, k = i+1, len(nums) - 1
            
            while j < k:
                sum = nums[i] + nums[j] + nums[k]
                if abs(sum - target) < abs(res - target):
                    res = sum
                    
                if sum > target:
                    k -= 1
                else:
                    j += 1
            
        return res
                        
        