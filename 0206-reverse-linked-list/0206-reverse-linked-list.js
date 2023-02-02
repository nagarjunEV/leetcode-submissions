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
var reverseList = function(head) {
    if(!head || head.next == null)
        return head
    let curr = head;
    let prev = null;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev
};