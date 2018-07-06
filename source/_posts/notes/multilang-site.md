---
title: Laravel 多语言站点
date: 2018-06-22
categories: NOTES
tags:
  - Laravel
---
{% cq %}
Laravel 开发多语言站点
{% endcq %}
<!-- more -->

### 目的
实现多语言站点的开发，用户根据访问 `/en`、`/zh-CN` 等浏览不同语言的站点。

### 开发工具
* `Laravel` 5.5.* [URL](https://laravel.com/docs/5.5)
* `dimsav/laravel-translatable` 8.* [URL](https://github.com/dimsav/laravel-translatable)

安装完成上述工具后，进行开发。
### 步骤
#### 修改 `translatable.php` 配置文件
在 `translatable.php` 文件 `locales` 中修改站点语言：
``` php
'locales' => [
    'en',
    'zh-CN',
],
```

#### 修改 `RouteServiceProvider.php` 文件
``` php
public function map(Request $request)
{
    $locale = $request->segment(1);
    $this->app->setLocale($locale);
    
    $this->mapApiRoutes();
    
    $this->mapWebRoutes($locale);
    
}

protected function mapWebRoutes($locale)
{
    if (in_array($locale, $this->app->config->get('translatable.locales'))) {
        Route::group([
            'middleware' => 'web',
            'prefix' => $locale,
            'namespace' => $this->namespace,
        ], function ($router) {
            require base_path('routes/web.php');
        });
    } else {
        Route::group([
            'middleware' => 'web',
            'namespace' => $this->namespace,
        ], function ($router) {
            require base_path('routes/web.php');
        });
    }
}
```

#### 添加语言翻译包
对于我们站点里的静态内容，我们可以通过在 `resources/lang` 下面添加指定语言包，使用 `trans('指定名称')` 来进行翻译，详情请见 [文档](https://laravel.com/docs/5.5/localization)

至此，我们可以通过访问 `/en`、`/zh-CN` 浏览指定语言的站点了。但是，我们应该发现，对于我们在数据库里读取的数据并没有发生改变

#### 创建模型及迁移
现在是 `dimsav/laravel-translatable` 包大展身手的时候了
##### 模型
``` php
// Article 模型
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class Article extends Model
{
    use Translatable; // 引入 Translatable Trait(前提安装dimsav/laravel-translatable)

    public $translatedAttributes = ['name', 'text'];
    
    protected $guarded = ['id'];
}

// ArticleTranslation 模型
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ArticleTranslation extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];
}
```
_NOTE:_ 其中 `$translatedAttributes` 设置要翻译的字段
##### 迁移
``` php
Schema::create('articles', function (Blueprint $table) {
    $table->increments('id');
    $table->boolean('online');
    $table->timestamps();
});

Schema::create('article_translations', function (Blueprint $table) {
    $table->increments('id');
    $table->integer('article_id')->unsigned();
    $table->string('locale')->index();
    $table->string('name');
    $table->text('text');
    $table->unique(['article_id','locale']);
    $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
});
```
_NOTE:_ 其中 `*_translations` 表中必须包含对应表的关联 ID `*_id`、区域标识 `locale`及要翻译的字段等

#### 其他
在每次创建模型记录时，使用模型的 `translateOrNew()` 方法添加翻译内容，如：
``` php
$article->translateOrNew('zh-CN')->name = "中文";
```
在每次读取模型数据时，直接读取就可以了，其他工作 `dimsav/laravel-translatable` 包已经做了。

---
#### 参考文献
* [Laravel5.5 官方文档](https://laravel.com/docs/5.5/)
* [5.3 关于多语言站点的配置](https://laravel-china.org/topics/5109/53-configuration-for-multilingual-sites)
* [如何为 Eloquent 添加多语言支持](https://laravel-china.org/articles/4194/how-to-add-multi-language-support-for-eloquent)
