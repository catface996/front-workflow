# 检测模块：布局骨架检测

> 检测或创建主布局组件

## 检测方式

检查以下位置：
- `src/layouts/` - 布局组件目录
- `src/components/Layout*` - 布局相关组件
- `src/app/layout.*` - Next.js 布局
- 包含 `<header>` / `<aside>` / `<main>` 标签的文件

## 情况一：已有骨架

展示检测到的布局文件和结构，与设计稿对比确认：
- 布局结构是否一致
- Header 高度、Sidebar 宽度是否正确
- 响应式断点是否符合需求

**确认选项：** 直接使用 / 需要调整 / 新增布局组件

## 情况二：无骨架 → 逐项询问用户

依次确认以下配置：

1. **页面结构**：标准后台 / 顶部导航 / 双侧边栏 / 简洁布局 / 其他
2. **Header**：高度 (56/60/64px)、定位 (fixed/static/sticky)、内容 (Logo/Nav/Search/User)
3. **Sidebar**：宽度 (200/240/256px)、收起宽度 (60/64/80px)、功能 (可折叠/响应式隐藏/抽屉)
4. **Main**：最大宽度、内边距、是否居中
5. **响应式断点**：使用默认 / 自定义
6. **其他布局**：AuthLayout / EmptyLayout / PrintLayout

## 骨架模板

确认配置后，根据技术栈选择模板，见 `layout-templates.md`

---

**检测完成**：返回 `setup.md` 生成报告
