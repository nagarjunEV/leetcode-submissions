const reverseLinkedList = curr => {
    let prev = null;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }
    return prev
}

var isPalindrome = function(head) {
    if(!head.next) return true
    
    let fast = head, slow = head;
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next;
    }
    slow = reverseLinkedList(slow);
    
    while(slow){
        if(head.val != slow.val)
            return false
        head = head.next;
        slow = slow.next
    }
    return true
};