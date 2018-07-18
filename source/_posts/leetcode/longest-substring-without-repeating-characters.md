---
title: 无重复字符的最长子串
date: 2018-07-16
categories: LeetCode
tags:
  - String
comments: false
copyright: false
---
{% cq %}
给定一个字符串，找出不含有重复字符的最长子串的长度。
{% endcq %}
<!-- more -->

##### 示例：
```
给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
```

``` cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> dict(256, -1);
        int maxLen = 0, start = -1;
        
        for (int i = 0; i < s.size(); i++) {
            start = max(dict[s[i]], start); // 有重复则重置起点
            dict[s[i]] = i;
            maxLen = max(maxLen, i - start);
        }
        
        return maxLen;
    }
};
```