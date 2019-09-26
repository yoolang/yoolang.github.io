---
title: SOLID原则
date: 2017-12-01
categories: 学习笔记
tags:
  - 设计模式
copyright: false
---
{% cq %}
SOLID敏捷开发的五种原则。
{% endcq %}
<!-- more -->

#### 单一职责

> A Class should have only one reason to change.

单一职责(SRP),意思是一个类应该只有一个发生变化的原因，即一个类应该只为一项业务而定义。

#### 开闭原则

> Software entities (classes, modules, functions, etc) should be open for extension, but closed for modification.

开闭原则(OCP),意思是当我们在设计一个类（模块或函数，等）时，应该使其可扩展，而不应该在其上作修改。

#### 里氏代换原则

> Subtypes must be substitutable for their base types.

里氏替换原则(LSP),意思是子类必须可替换其基类。

#### 接口隔离原则

> The interface-segregation principle(ISP) states that no client should be forced to depend on methods it does not use.

接口隔离原则(ISP)代表着用户不需要依赖他不需要的接口。

#### 依赖倒转原则 

> A. High-level modules should not depend on low-level modules. Both should depend on abstractions.

  高级模块不应该依赖于低级模块； 它们都应该依赖于抽象。

> B. Abstractions should not depend upon details. Details should depend upon abstractions.

  抽象不应该取决于细节； 细节应该取决于抽象。
  
  
---
参考自[《The SOLID Principles》](https://code.tutsplus.com/series/the-solid-principles--cms-634)
