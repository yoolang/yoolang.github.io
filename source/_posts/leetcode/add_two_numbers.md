---
title: 两数相加
date: 2018-06-25
categories: LeetCode
tags:
  - LeetCode
  - Linked-List
comments: false
copyright: false
---
{% cq %}
给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。
{% endcq %}
<!-- more -->

##### 示例：

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
说明：342 + 465 = 807
```

``` cpp
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *dummyHead = new ListNode(0);
        ListNode *p = l1, *q = l2, *curr = dummyHead;
        int carry = 0;
        while (p || q || carry) {
            if (p) {
                carry += p->val;
                p = p->next;
            }
            
            if (q) {
                carry += q->val;
                q = q->next;
            }
            
            curr->next = new ListNode(carry % 10);
            carry /= 10;
            curr = curr->next;
        }
        return dummyHead->next;
    }
};
```