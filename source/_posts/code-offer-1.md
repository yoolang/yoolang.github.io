---
title: 【剑指 Offer】 二维数组中的查找
date: 2018-08-07
categories: 剑指 Offer
tags:
    - Array
comments: false
copyright: false
---
{% cq %}
在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
{% endcq %}
<!-- more -->
##### 输入描述
array： 待查找的二维数组 target：查找的数字
##### 输出描述
查找到返回true，查找不到返回false

``` php
class Solution
{
    public function Find(array $arr,int $target) : boolean
    {
        $row = 0;
        $col = 0;
        $t = 0;
        $isFound = false;

        for($i = 0; $i < count($arr); ++$i)
        {
            for($j = 0; $j < count($arr[$i]); ++$j)
            {
                if(false === $isFound && $target === $arr[$i][$j])
                {
                    $isFound = true;
                }
            }
        }

        return $isFound;
    }
};
```