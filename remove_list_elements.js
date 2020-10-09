/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head == null) {
        return null;
    }

    var preNode = new ListNode(-1);
    preNode.next = head;

    if (head.next == null && head.val == val) {
        return null;
    }

    var cur = preNode;

    while(cur.next != null) {
        if (cur.next.val == val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    head = preNode.next;

    return head;
};