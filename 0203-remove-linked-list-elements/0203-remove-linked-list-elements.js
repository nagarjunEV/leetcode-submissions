/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var removeElements = function(head, val) {
    if(!head) return head;
    let curr = head, ptr = head.next;
    
    while(ptr){
        if(ptr.val == val){
            curr.next = ptr.next
        }else{
            curr = curr.next
        }
        ptr = ptr.next;
    }
    if(head.val == val) return head.next 
    else return head
};