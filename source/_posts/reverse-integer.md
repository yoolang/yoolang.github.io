---
title: 反转整数
date: 2018-08-01
categories: LeetCode
tags:
  - 整数
copyright: false
---
{% cq %}
给定一个 32 位有符号整数，将整数中的数字进行反转。
{% endcq %}
<!-- more -->
##### 示例 1:
```
输入: 123
输出: 321
```
##### 示例 2:
```
输入: -123
输出: -321
```
##### 示例 3:
```
输入: 120
输出: 21
```
__注意:__

假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。

``` cpp
class Solution {
public:
    int reverse(int x) {
        int res = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            if (res > INT_MAX/10 || (res == INT_MAX / 10 && pop > 7)) return 0;
            if (res < INT_MIN/10 || (res == INT_MIN / 10 && pop < -8)) return 0;
            res = pop + res * 10;
        }
        
        return res;
    }
};
```