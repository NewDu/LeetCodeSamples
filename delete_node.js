/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //方法一
    // node.val = node.next.val;
    // node.next = node.next.next;

    // 方法二
    Object.assign(node,node.next);
};