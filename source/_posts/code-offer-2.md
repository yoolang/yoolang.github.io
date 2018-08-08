---
title: 【剑指 Offer】 替换空格
date: 2018-08-08
categories: 剑指 Offer
tags:
    - String
comments: false
copyright: false
---
{% cq %}
请实现一个函数，将一个字符串中的空格替换成“%20”。 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
{% endcq %}
> We Are Happy
> We%20Are%20Happy

``` php
class Solution
{
	public function replaceSpace(string $str) : string
    {
        $count = 0;
        $len = ($length = strlen($str));
        for($i = 0; $i < $length; $i++)
        {
            if($str[$i] == ' ')
            {
                $count++;
            }
        }

        $len = $length + $count * 2;
        for($i = $length - 1, $j = $len - 1;
            $i >= 0 && $j >= 0;)
        {
            if($str[$i] == ' ')
            {
                $str[$j--] = '0';
                $str[$j--] = '2';
                $str[$j--] = '%';
                $i--;
            }
            else
            {
                $str[$j--]  = $str[$i--];
            }
        }
        
        return $str;
	}
};
```