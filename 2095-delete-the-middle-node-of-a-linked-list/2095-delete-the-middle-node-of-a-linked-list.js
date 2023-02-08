/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head){
    if(!head || head.next == null) return null;
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let ptr = head;
    while(ptr.next!=slow)
        ptr = ptr.next;
    ptr.next = slow.next;
    return head
};