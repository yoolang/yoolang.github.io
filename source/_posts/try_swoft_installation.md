---
title: 初探 Swoft —— 安装
date: 2018-03-14
categories: 学习笔记
tags:
  - PHP
  - Swoole
  - Swoft
  - Docker
---

> Swoft 是首个基于 Swoole 原生协程的新时代 PHP 高性能协程全栈框架，内置协程网络服务器及常用的协程客户端，常驻内存，不依赖传统的 PHP-FPM，全异步非阻塞 IO 实现，以类似于同步客户端的写法实现异步客户端的使用，没有复杂的异步回调，没有繁琐的 yield, 有类似 Go 语言的协程、灵活的注解、强大的全局依赖注入容器、完善的服务治理、灵活强大的 AOP、标准的 PSR 规范实现等等，可以用于构建高性能的Web系统、API、中间件、基础服务等等。 —— [Swoft 官方文档](https://doc.swoft.org/)

<!-- more -->
最近看到这个新框架，尝试安装玩儿一下，发现这个框架是我见过的安装最简易的框架了（请恕我见识短浅）。当然，这要感谢 Swoft 贡献者大牛们的付出。下面我来说一下 Swoft 的安装步骤吧。
#### 安装前提
在安装之前，请在电脑上安装上 Docker，因为我在这里讲的是 Docker 安装方式，具体安装方法请查阅 [Docker官方文档](https://docs.docker.com/)。其次，你的电脑上必须安装了 composer，  具体安装方法请查阅 [composer 入门指南](http://docs.phpcomposer.com/00-intro.html)
#### 开始安装
下面我讲两种安装方式， 一种是 composer 安装，另一种是手动安装。
##### Composer 方式
在终端执行以下命令：
``` bash
composer create-project swoft/swoft swoft
```
#### 手动安装方式
首先，你要获取项目包。在这里只写 git clone 方式获取包。
``` bash
git clone https://github.com/swoft-cloud/swoft.git
```
然后，复制 .env.example 为 .env 编辑参数。
``` bash
cp .env.example .env
```
最后， 安装依赖。
``` bash
composer install
```
#### 部署开发环境
Swoft 开发者们已经为我们准备好了 swoft 的 Docker 镜像，以及在项目包里 Dockerfile 和 docker-compose.yml 文件。
##### Docker 方式
###### 使用官方镜像
如果官方镜像已经满足了你的开发需求，直接使用官方镜像是个不错的选择。
``` bash
docker run -d -p 80:80 -name swoft swoft/swoft
```
###### 自定义镜像
如果你感觉官方镜像不能满足你的需求，可以根据自己的需求通过修改 Dockerfile 文件来自定义镜像。修改完 Dockerfile 文件后，执行以下命令：
``` bash
docker build -t swoft/swoft .
docker run -d -p 80:80 --name swoft swoft/swoft
```
###### 其他命令
前面已经使用 `--name` 选项将容器命名为 `swoft` 了
``` bash
// 进入工作台
docker exec -it swoft bash

// 停止容器运行
docker stop swoft
```
##### Docker-Compose 方式
* 运行 `docker-compose up -d swoft` 即可运行容器；
* 运行 `docker-compose exec swoft` 进入工作台；
* 运行 `docker-compose stop swoft` 停止容器；

更多 Docker 相关命令请查阅 [Docker官方文档](https://docs.docker.com/)
#### 运行 Swoft
 安装完成后，我们就要检查一下 Swoft 是否能够成功运行。 Docker 镜像中已经包含执行了 `php bin/swoft start` 命令，因此我们无需操作。
 如果你采用其他方式部署安装，请记得执行此命令。
 在这里，我们直接访问 http://localhost ，出现 Swoft 字样的页面即代表我们安装成功！
