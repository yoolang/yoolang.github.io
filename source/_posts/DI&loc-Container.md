---
title: 依赖注入&loc控制反转容器
date: 2018-07-17
categories: 学习笔记
tags:
  - 设计模式
comments: false
---
{% cq %}
Laravel框架的基 础是一个功能强大的控制反转容器（IoC container）。 为了真正理解本框架，需要好好掌握该容器。但我们要搞清楚，控制反转容器只是一种用于方便实现“依赖注入”的工具。要实现依赖注入并不一定需要控制反转容器，只是用容器会更方便和容易一点儿。 --「[从百草园到三味书屋 "From Apprentice To Artisan"](https://my.oschina.net/zgldh/blog/389246)」
{% endcq %}
<!-- more -->
`依赖注入` 方便控制器与逻辑层解耦
`loc容器` 使 `依赖注入` 便于管理