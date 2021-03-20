<p align="center">
  <a href="https://github.com/DevCloudFE/ng-devui"><img src="https://img.shields.io/badge/%3C%2F%3E-vue-brightgreen" alt="Github Star"></a>
  <a href="https://github.com/nuxt/nuxt.js"><img src="https://img.shields.io/badge/ssr-nuxt-green"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/ng-devui.svg" alt="License"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/%E6%96%87%E6%A1%A3-%E4%B8%AD%E6%96%87-blue" alt="Document"></a>
</p>

## 介绍

本项目是一个展示md文件的简单系统，以nuxtjs为框架，使用nuxt-content插件读取md文件展示在页面上。

## 项目启动

```bash
# 安装依赖
$ npm install

# 启动本地开发模式热更新 localhost:3000
$ npm run dev

#  server构建生成模式，启动服务
$ npm run build
$ npm run start

# 生成静态项目
$ npm run generate
```

## 菜单维护

* **menu-config.json**

从根节点开始，依次为菜单的嵌套层级（children），在菜单节点中，title为菜单标题，name为md文件名，icon为该节点的图标。

## 更新文档文件

在content目录下，以菜单节点的name作为文件名，目前支持markdown格式，具体特殊写法详见 [**nuxt-content**](https://content.nuxtjs.org/writing#markdown)。


## LICENSE

[**MIT**](https://opensource.org/licenses/MIT)
