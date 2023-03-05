const reverseLinkedList = head => {
    let prev = null;
    while(head){
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp
    }
    return prev;
}

var pairSum = function(head) {
    if(head.next.next == null) return head.val + head.next.val;

    let max = 0, fast = head, slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = reverseLinkedList(slow);
    
    while(slow){
        max = Math.max(head.val + slow.val, max);
        head = head.next;
        slow = slow.next
    }
    return max
};