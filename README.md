# `Nest.js` Demo

## 介绍

> 本项目是用`Nest.js`写的一个 增删改查的小Demo 没有用到数据库

## 准备

```bash
# 安装nest.js
npm i -g @nestjs/cli
# 创建一个项目
nest new next-demo
```

## 起飞

### 开始目录结构

```bash
SRC
	app.controller.ts 具有单一路线的基本控制器样本。
	app.module.ts     应用程序的根模块。
	main.ts			应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。
```

### 完成后目录结构

![目录](https://i.loli.net/2019/09/03/8lVEbvdux79OCIs.png)



```bash
src
	-products  我们创建的product目录
	生成的文件
```

### 运行hello world

```bash
npm run start
```

`http://localhost:3000/`。 你应该看到 `Hello world!` 信息。

## 具体文件

```bash
git clone  项目地址
npm run start
http://localhost:3000/
```

### `restful api` 规范

```bash
查询所有products
Get: http://localhost:3000/products/

添加一个products
Post: http://localhost:3000/products/
body 传入 title  desc  price

删除一个product
Delete: http://localhost:3000/products/id

修改一个product
Patch: http://localhost:3000/products/id
```

