# 检测模块：组件库检测

> 检测并确认项目使用的组件库

## 检测方式

检查 `package.json` dependencies：

| 组件库 | 包名 | 框架 |
|--------|------|------|
| Ant Design | `antd` | React |
| Ant Design Vue | `ant-design-vue` | Vue |
| Element Plus | `element-plus` | Vue 3 |
| Material UI | `@mui/material` | React |
| Chakra UI | `@chakra-ui/react` | React |
| Naive UI | `naive-ui` | Vue 3 |
| Arco Design | `@arco-design/web-react` / `web-vue` | React/Vue |

## 情况一：已有组件库

展示检测结果（名称、版本、图标库、文档地址），询问用户：
- 确认使用
- 更换为其他组件库
- 同时引入其他组件库

## 情况二：未检测到 → 询问用户

选项：Ant Design / Element Plus / Material UI / Chakra UI / Naive UI / Arco Design / 不使用组件库 / 其他

---

**下一步**：`setup-04-directory-structure` 目录结构检测
