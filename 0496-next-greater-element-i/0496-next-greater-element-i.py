class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = [-1] * len(nums1)
        map = {n:i for i,n in enumerate(nums1)}
        
        for i in range(len(nums2)):
            if nums2[i] in map:
                for j in range(i+1, len(nums2)):
                    if nums2[j] > nums2[i]:
                        res[map[nums2[i]]] = nums2[j]
                        break
        return res
        