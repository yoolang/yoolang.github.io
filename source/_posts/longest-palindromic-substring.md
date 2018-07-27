---
title: 最长回文子串
date: 2018-07-26
categories: LeetCode
tags:
  - String
comments: false
copyright: false
---
{% cq %}
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
{% endcq %}
<!-- more -->
##### 示例 1：
```
输入: "babad"
输出: "bab"
注意: "aba"也是一个有效答案。
```
##### 示例 2：
```
输入: "cbbd"
输出: "bb"
```
``` cpp
class Solution {
public:
    string longestPalindrome(string s) {
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substr(start, end - start + 1);
    }

private:
    int expandAroundCenter(string s, int left, int right) {
        int L = left, R = right;
        while (L >= 0 && R < s.length() && s[L] == s[R]) {
            L--;
            R++;
        }
        return R - L - 1;
    }
};
```
