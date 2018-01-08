---
title: Laravel-admin 项目实战（一）
date: 2017-12-25 18:52:49
tags:
  - 'laravel'
  - '学习笔记'
---
Laravel-admin是一个非常棒的，敏捷的后台开发扩展，本文主要进行安装Laravel及Laravel-admin扩展，配置数据库等，初始化项目
<!-- more -->
#### 安装Laravel
Laravel项目所需的开发环境及其相关配置在这里不再赘述，新手请参考[Laravel官方文档](https://laravel.com/docs/5.5)，这里用的版本为laravel5.5，终端窗口下输入`composer create-project --prefer-dist laravel/laravel laravel55`，直接安装。
#### 配置数据库
在.env文件中配置数据库参数
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```
#### 安装Laravel-admin扩展
终端窗口下，
* 执行`composer require encore/laravel-admin "1.5.*"`安装laravel-admin扩展
* 执行`php artisan vendor:publish --provider="Encore\Admin\AdminServiceProvider"`发布laravel-admin资源
* 执行`php artisan admin:install`完成安装（*务必在此之前完成数据库配置*）
#### 修改admin.php配置文件
Laravel-admin安装完成后，会在`config`目录下生成`admin.php`文件，编辑该文件完成项目初始化配置。

---
参考文档：
* [Laravel官方文档](https://laravel.com/docs/5.5)
* [Laravel-admin中文文档](http://laravel-admin.org/docs/#/zh/)