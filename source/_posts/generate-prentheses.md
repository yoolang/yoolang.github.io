---
title: 括号生成
date: 2018-08-21
categories: LeetCode
tags:
  - Array
  - String
comments: false
copyright: false
---
{% cq %}
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
{% endcq %}
<!-- more -->
例如，给出 n = 3，生成结果为：
```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

``` cpp
class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> ans;
        if (n == 0) {
            ans.push_back("");
        } else {
            for (int c = 0; c < n; ++c)
                for (string right: generateParenthesis(c))
                    for (string left: generateParenthesis(n-1-c))
                        ans.push_back("(" + left + ")" + right);
        }
        return ans;
    }
};
```
