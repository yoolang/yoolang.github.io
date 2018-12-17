---
title: 盛最多水的容器
date: 2018-08-13
categories: LeetCode
tags:
  - Array
comments: false
copyright: false
mathjax: true
---
{% cq %}
给定 n 个非负整数 $a_{1}, a_{2}, ..., a_{n}$，每个数代表坐标中的一个点 (i, $a_{i}$) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, $a_{i}$) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
{% endcq %}
<!-- more -->
__说明__：你不能倾斜容器，且 n 的值至少为 2。
![enter image description here](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)
图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

##### 示例:
```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```

``` cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int maxarea = 0, l = 0, r = height.size() - 1;
        while (l < r) {
            maxarea = max(maxarea, min(height[l], height[r]) * (r - l));
            if (height[l] < height[r])
                l++;
            else
                r--;
        }
        return maxarea;
    }
};
```
