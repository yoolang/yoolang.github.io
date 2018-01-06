---
title: 使用canvas绘制图形
date: 2017-12-24 11:31:40
tags:
  - 'canvas'
  - 'html5'
---

用canvas绘制图形，仅需三步
<!-- more -->
**绘制前提：** *在HTML页面添加`<canvas>`标签元素，`<canvas>`本身是不能绘制图形的，绘制的工作需交由Javascript来做*
``` html
<canvas id="canvas"></canvas>
```
#### 第一步，获取`<canvas>`元素
``` javascript
var canvas = document.getElementById('canvas');
```
#### 第二步，创建context对象
``` javascript
var context = canvas.getContext('2d');
```
#### 第三步，开始绘制图形
##### 一些绘制方法
``` javascript
context.fillRect(0, 0, 100, 50); // 在坐标（0，0）开始绘制宽100高50的实心矩形
context.strokeRect(0, 0, 100, 50); // 在坐标（0，0）开始绘制宽100高50的空心矩形

context.moveTo(0, 0); // 确定坐标（0，0）
context.lineTo(100, 50); // 确定（0，0）到（100，50）的路径
context.stroke(); // 绘制路径
context.fill(); // 填充路径

context.beginPath(); // 确定开始路径
context.arc(100, 100, 50, 0, 2 * Math.PI); // 确定圆心为（100，100）半径为50的圆形路径
context.stroke(); // 绘制空心圆
context.fill(); // 绘制实心圆

context.fillText('Canvas', 10, 10); // 在坐标（10，10）处绘制实心文本
context.stokeText('Canvas', 10, 10); // 在坐标（10，10）处绘制空心文本
```