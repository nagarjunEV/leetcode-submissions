class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        mp = 0
        mc = prices[0]
        for i in range(1, len(prices)):
            curr = prices[i]
            
            mc = min(curr, mc)
            mp = max(mp, curr - mc)
            
        return mp