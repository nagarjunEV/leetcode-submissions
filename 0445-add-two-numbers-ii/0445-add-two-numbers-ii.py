class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode(-1)
        curr = res
        s1 = []
        s2 = []
        s3 = []
        carry = 0
        
        while l1:
            s1.append(l1.val)
            l1 = l1.next
        while l2:
            s2.append(l2.val)
            l2 = l2.next
      
        while s1 or s2 or carry:
            v1 = s1.pop() if s1 else 0
            v2 = s2.pop() if s2 else 0 
            sum = v1 + v2 + carry
            carry = 0
            if sum>9:
                carry = 1
            sum %= 10
            s3.append(sum)

        while s3:
            curr.next = ListNode(s3.pop())
            curr = curr.next
            
        return res.next
            
            