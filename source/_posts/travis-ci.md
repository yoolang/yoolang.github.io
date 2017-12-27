---
title: Travis-ci 持续部署 Hexo
date: 2017-12-21 21:47:56
tags:
  - '持续集成'
  - '学习笔记'
---

这是一次CI的尝试，一次装13的体验。
<!-- more -->

第一步， 在Github上新建一个仓库，用作存放博客；内设两个分支， 一个存放部署后即在网页中显示的内容， 另一个则存放部署前即Hexo源码内容。

第二步， 本地初始化Hexo项目，并将其初始化为git项目；在项目目录下新建`.travis.yml`文件，内容如下：
```
language: node_js

node_js: stable

install:
  - npm install

script:
  - hexo clean
  - hexo g

after_script:
  - cd ./public
  - git init
  - git config user.name "用户名"
  - git config user.email "邮箱"
  - git add .
  - git commit -m "update"
  - git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master

branches:
  only:
    - hexo源码分支
env:
 global:
   - GH_REF: 仓库地址

```

第三步， 将本地项目推送到github仓库存放hexo源码的分支下。

第四步，在travis-ci官网部署仓库access-token(在github中 `setting - Devloper settings - Personal access tokens` 下获取), 大功告成！