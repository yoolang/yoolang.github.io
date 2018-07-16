---
title: 两数之和
date: 2018-06-18
categories: LEETCODE
tags: 
  - Leetcode
  - Array
comments: false
copyright: false
---
{% cq %}
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

{% endcq %}
<!-- more -->

##### 示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

``` cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> mapping;
        vector<int> result;
        for (int i = 0; i < nums.size(); i++) {
            const int gap = target - nums[i];
            if (mapping.find(gap) != mapping.end()) {
                result.push_back(mapping[gap]);
                result.push_back(i);
                return result;
            }
            mapping[nums[i]] = i;
        }
    }
};
```
