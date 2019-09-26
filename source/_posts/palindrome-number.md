---
title: 回文数
date: 2018-08-02
categories: LeetCode
tags:
  - 整数
copyright: false
---
{% cq %}
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
{% endcq %}
<!-- more -->
##### 示例 1:
```
输入: 121
输出: true
```
##### 示例 2:
```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```
##### 示例 3:
```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```
##### 进阶:
你能不将整数转为字符串来解决这个问题吗？

``` cpp
class Solution {
public:
    bool isPalindrome(int x) {
        // 排除小于0或能被10整除且不为0的数
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int revertedNumber = 0;
        while(x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }

        return x == revertedNumber || x == revertedNumber/10;
    }
};
```