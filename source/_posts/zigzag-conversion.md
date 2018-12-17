---
title: Z字形变换
date: 2018-07-30
categories: LeetCode
tags:
  - String
  - C++
comments: false
copyright: false
---
将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：

```
P   A   H   N
A P L S I I G
Y   I   R
```
之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"

实现一个将字符串进行指定行数变换的函数:
`string convert(string s, int numRows);`
<!-- more -->
##### 示例 1:
```
输入: s = "PAYPALISHIRING", numRows = 3
输出: "PAHNAPLSIIGYIR"
```
##### 示例 2:
```
输入: s = "PAYPALISHIRING", numRows = 4
输出: "PINALSIGYAHRPI"
解释:
P     I    N
A   L S  I G
Y A   H R
P     I
```
``` cpp
class Solution {
public:
    string convert(string s, int numRows) {
        int len = s.size();
        
        if (len == 0 || numRows == 0 || numRows == 1) return s;
        
        string res;
        int cycleLen = 2 * numRows - 2;

        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j + i < len; j += cycleLen) {
                res += s[j + i];
                if (i != 0 && i != numRows - 1 && j + cycleLen - i < len)
                    res += s[j + cycleLen - i];
            }
        }
        
        return res;
    }
};
```
