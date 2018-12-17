---
title: 公平的糖果交换
date: 2018-08-29
categories: LeetCode
tags:
  - Array
comments: false
copyright: false
---
```
爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 块糖的大小，B[j] 是鲍勃拥有的第 j 块糖的大小。

因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。

如果有多个答案，你可以返回其中任何一个。保证答案存在。
```
<!-- more -->
##### 示例 1：
```
输入：A = [1,1], B = [2,2]
输出：[1,2]
```
##### 示例 2：
```
输入：A = [1,2], B = [2,3]
输出：[1,2]
```
##### 示例 3：
```
输入：A = [2], B = [1,3]
输出：[2,3]
```
##### 示例 4：
```
输入：A = [1,2,5], B = [2,4]
输出：[5,4]
```

``` cpp
class Solution {
public:
    vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {
        vector<int> result;
        int sumA = 0, sumB = 0;
        
        // 计算各自糖果数量
        for (int a: A) sumA += a;
        for (int b: B) sumB += b;
        
        // 交换
        for (int i = 0; i < A.size(); i++) {
            int x = A[i];
            for (int j = 0; j < B.size(); j++) {
                int y = B[j];
                
                int tmpA = sumA - x + y;
                int tmpB = sumB - y + x;
                if (tmpA == tmpB) {
                    result.emplace_back(x);
                    result.emplace_back(y);
                    return result;

                }
            }
        }
        
        return result;
    }
};
```
