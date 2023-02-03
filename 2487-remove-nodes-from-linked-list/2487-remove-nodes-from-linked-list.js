var removeNodes = function(head) {
    if(head.next == null) return head;
    
    let res = null;
    let stack = []
    
    while(head){
        while(stack.length>0 && head.val > stack[stack.length-1]){
            stack.pop();
        }
        stack.push(head.val);
        head = head.next;
    }
    while(stack.length>0){
        res = new ListNode(stack.pop(), res);
    }
    return res;
};
