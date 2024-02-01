# rollup-libdev-template
基于 Rollup 的库开发初始模板   
`Rollup`: 打包利器 📦  
`TypeScript`: 类型友好 🥇  
`pnpm`: 最佳快速包管理工具 🚀
## Rollup 官方插件 🧰
该模板只提供`Rollup`基础插件，不同库可按需从[官方插件集散地](https://github.com/rollup/plugins)添加
### 常用插件及作用
|插件名|插件作用|插件使用|
| --- | --- | --- |
|@rollup/plugin-node-resolve|Locate and bundle third-party dependencies in node_modules|https://github.com/rollup/plugins/tree/master/packages/node-resolve|
|@rollup/plugin-terser|Generate a minified output bundle with terser|https://github.com/rollup/plugins/tree/master/packages/terser|
|@rollup/plugin-typescript|Integration between Rollup and Typescript|https://github.com/rollup/plugins/tree/master/packages/typescript|
|@rollup/plugin-commonjs|Convert CommonJS modules to ES6|https://github.com/rollup/plugins/tree/master/packages/commonjs|
|rollup-plugin-visualizer|Visuallize your bundle|https://github.com/btd/rollup-plugin-visualizer|
|@rollup/plugin-xxx|xxx|xxx|
## 测包流程 🚧
包项目中，`pnpm link --global`   
使用包项目中，`pnpm link --global pkg-name`
## 其他 🔌
`ESLint`: 代码语法检查与暴露问题 🔍  
`Prettier`：统一代码风格 🎨  
`husky + lint-staged`: 代码提交自动化监测 📝  