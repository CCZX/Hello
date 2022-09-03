# Hello

<p align="center">

  ![license](https://img.shields.io/badge/license-MIT-89b601) ![node](https://img.shields.io/badge/node-12.22.0-green) ![pnpm](https://img.shields.io/badge/pnpm-6.32.21-f69220) ![mysql](https://img.shields.io/badge/mysql-8.0.22-3e6e93) ![react](https://img.shields.io/badge/-react-61dafb) ![nest](https://img.shields.io/badge/-nest-ed2945) ![vite](https://img.shields.io/badge/-vite-747bff)

</p>

一个即时聊天 WebApp。

## 功能列表
 

## 本地开发
如果你想在本地开发请阅读下面内容👇🏻。

### 环境准备
首先确保你本地安装了如下环境🏭，如果没有安装请自行安装，并保证版本正确。

- [node](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/zh/)
- [mysql](https://www.mysql.com/cn/)

### 项目启动

确保你本地安装了 `pnpm`。

**安装依赖：**

由于本项目使用的是 `pnpm` 进行 `monorepo` 管理的，所以只需要在项目的根目录安装依赖即可，运行如下命令：

```bash
cd /your/hello/project/path
pnpm install
```

**前端：**

前端项目启动比较简单，只需要运行下面命令即可：

```bash
cd /your/hello/project/path
pnpm run dev:client
```

**后端：**

启动数据库：

```sql
mysql -u youusername -p
```

启动后端服务：

```bash
cd /your/hello/project/path
pnpm run dev:server
```

## 部署

## 代码贡献

PR

## 文档、资源

- [技术文档](./docs/tech.md)
- [开发所查阅的文档](./docs/study.md)
- [设计稿](./docs/design.md)

## 使用许可

基于 [MIT](LICENSE) 许可的开源项目.
