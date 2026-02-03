# 检测模块：技术栈检测

> 检测框架、构建工具、样式方案等配置

## 检测方式

| 检测项 | 检测文件 |
|--------|---------|
| 框架 | `package.json` (react/vue/angular) |
| 构建工具 | `vite.config.*` / `webpack.config.*` |
| 样式方案 | `tailwind.config.*` / sass 依赖 |
| TypeScript | `tsconfig.json` |
| 代码规范 | `.eslintrc` / `.prettierrc` |

## 情况一：已有技术栈

展示检测结果，检查是否缺失：
- CSS 变量 / 设计 Token
- 响应式断点配置
- 组件库主题配置
- 布局变量 (header/sidebar 尺寸)

**确认选项：** 无需修改 / 补充缺失配置 / 调整现有配置

## 情况二：无技术栈 → 逐项询问用户

依次确认以下配置（每项确认后再进入下一项）：

1. **框架**：React / Vue 3 / Next.js / Nuxt 3 / 原生 / 其他
2. **构建工具**：Vite (推荐) / Webpack / 框架自带 / 无需构建
3. **样式方案**：Tailwind / CSS Modules / Sass / Styled-components / 组件库自带
4. **TypeScript**：是 / 否
5. **代码规范**：ESLint + Prettier (推荐) / 仅 ESLint / 不使用

---

**下一步**：`setup-03-component-library` 组件库检测
