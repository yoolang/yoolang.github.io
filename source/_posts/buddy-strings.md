---
title: 亲密字符串
date: 2018-08-27
categories: LeetCode
tags:
  - String
  - C++
comments: false
copyright: false
---
{% cq %}
给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。
{% endcq %}
<!-- more -->
##### 示例 1：
``` 
输入： A = "ab", B = "ba"
输出： true
```
##### 示例 2：
```
输入： A = "ab", B = "ab"
输出： false
```
##### 示例 3:
```
输入： A = "aa", B = "aa"
输出： true
```
##### 示例 4：
```
输入： A = "aaaaaaabc", B = "aaaaaaacb"
输出： true
```
##### 示例 5：
```
输入： A = "", B = "aa"
输出： false
```

``` cpp
class Solution {
public:
    bool buddyStrings(string A, string B) {
        if (A.size() != B.size()) return false;
        if (A == B) {
            vector<int> count(26, 0);
            for (int i = 0; i < A.size(); ++i)
                count[A[i] - 'a']++;

            for (int c: count)
                if (c > 1) return true;
            return false;
        } else {
            int first = -1, second = -1;
            for (int i = 0; i < A.size(); ++i) {
                if (A[i] != B[i]) {
                    if (first == -1)
                        first = i;
                    else if (second == -1)
                        second = i;
                    else
                        return false;
                }
            }

            return (second != -1 && A[first] == B[second] &&
                    A[second] == B[first]);
        }
    }
};
```
