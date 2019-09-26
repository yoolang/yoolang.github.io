---
title: 长度最小的子数组
date: 2018-08-28
categories: LeetCode
tags:
  - 数组
copyright: false
---
{% cq %}
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
{% endcq %}
<!-- more -->
##### 示例: 
```
输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
```

``` cpp
class Solution {
public:
    int minSubArrayLen(int s, vector<int>& nums) {
        if (nums.size() == 0) return 0;
        int i = 0, j = 0, sum = 0, min = INT_MAX;
        while (j < nums.size()) {
            sum += nums[j++];
            while (sum >= s) {
                min = (min < j - i) ? min : (j - i);
                sum -= nums[i++];
            }
        }
        
        return min == INT_MAX ? 0 : min;
    }
};
```