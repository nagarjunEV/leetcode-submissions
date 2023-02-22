function reverse(prev, curr){
    if(!curr) return prev;
    let temp = curr.next;
    curr.next = prev;
    return reverse(curr, temp); 
}

var reverseList = function(head) {
    let curr = head, prev = null;
    return reverse(prev, curr);
};