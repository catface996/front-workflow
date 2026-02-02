# 阶段二：技术规划

> 磨刀不误砍柴工，好的规划让实现事半功倍

## 2.1 技术栈选择

### 框架选型决策

| 考虑因素 | React | Vue | 原生 |
|---------|-------|-----|------|
| 团队熟悉度 | ? | ? | ? |
| 项目复杂度 | 适合中大型 | 适合中小型 | 适合小型 |
| 生态系统 | 丰富 | 丰富 | 有限 |
| 上手成本 | 中等 | 较低 | 最低 |

### 样式方案选择

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|---------|
| CSS Modules | 作用域隔离、原生CSS | 需要构建工具 | React/Vue项目 |
| Tailwind CSS | 快速开发、一致性好 | 类名较长 | 快速迭代项目 |
| Styled-components | JS中写CSS、动态样式 | 运行时开销 | React项目 |
| Sass/Less | 变量、嵌套、复用 | 需要编译 | 各类项目 |
| 原生CSS变量 | 无需编译、运行时修改 | 兼容性要求 | 现代浏览器项目 |

### 技术选型记录

```markdown
## 项目技术选型

- 框架: [ ] React / [ ] Vue / [ ] 原生
- 样式: [ ] CSS Modules / [ ] Tailwind / [ ] Sass
- 构建: [ ] Vite / [ ] Webpack / [ ] 无
- 包管理: [ ] npm / [ ] pnpm / [ ] yarn

选型理由:
_________________________
```

---

## 2.2 目录结构设计

### 推荐目录结构

```
project/
├── public/                 # 静态资源（不经过构建）
│   └── favicon.ico
│
├── src/
│   ├── assets/            # 需要构建的资源
│   │   ├── icons/         # SVG图标
│   │   ├── images/        # 图片
│   │   └── fonts/         # 字体
│   │
│   ├── styles/            # 全局样式
│   │   ├── variables.css  # CSS变量/设计Token
│   │   ├── reset.css      # 样式重置
│   │   ├── global.css     # 全局样式
│   │   └── debug.css      # Debug样式（开发用）
│   │
│   ├── components/        # 通用组件
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   └── index.js
│   │   ├── Card/
│   │   └── ...
│   │
│   ├── layouts/           # 布局组件
│   │   ├── MainLayout/
│   │   ├── AuthLayout/
│   │   └── ...
│   │
│   ├── pages/             # 页面组件
│   │   ├── Home/
│   │   ├── Dashboard/
│   │   └── ...
│   │
│   └── utils/             # 工具函数
│       └── debug.js       # Debug工具（开发用）
│
├── tools/                  # 开发工具（不打包）
│   ├── debug.css
│   └── debug-mode.js
│
└── package.json
```

### 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件文件夹 | PascalCase | `Button/`, `UserCard/` |
| 组件文件 | PascalCase | `Button.jsx`, `Button.module.css` |
| 样式类名 | camelCase或kebab-case | `.buttonPrimary` 或 `.button-primary` |
| CSS变量 | kebab-case | `--primary-500`, `--space-4` |
| 工具函数 | camelCase | `formatDate.js` |
| 常量 | UPPER_SNAKE_CASE | `MAX_WIDTH`, `API_URL` |

---

## 2.3 设计系统映射

### CSS变量定义

将分析阶段提取的设计规范转化为CSS变量：

```css
/* styles/variables.css */

:root {
  /* ==================
     颜色系统
     ================== */

  /* 主色 */
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  /* 中性色 */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;

  /* 语义色 */
  --success: #10b981;
  --success-light: #d1fae5;
  --warning: #f59e0b;
  --warning-light: #fef3c7;
  --error: #ef4444;
  --error-light: #fee2e2;
  --info: #3b82f6;
  --info-light: #dbeafe;

  /* ==================
     字体系统
     ================== */

  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'Monaco', 'Menlo', 'Consolas', monospace;

  /* 字号 */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;

  /* 行高 */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* 字重 */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* ==================
     间距系统 (8px网格)
     ================== */

  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* ==================
     圆角系统
     ================== */

  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* ==================
     阴影系统
     ================== */

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* ==================
     布局变量
     ================== */

  --header-height: 60px;
  --sidebar-width: 240px;
  --sidebar-width-collapsed: 60px;
  --content-max-width: 1200px;

  /* ==================
     过渡动画
     ================== */

  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;

  /* ==================
     层级系统
     ================== */

  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}
```

---

## 2.4 响应式策略

### 断点定义

```css
/* 断点定义 - Mobile First */
:root {
  --breakpoint-sm: 640px;   /* 小屏手机 */
  --breakpoint-md: 768px;   /* 平板 */
  --breakpoint-lg: 1024px;  /* 小笔记本 */
  --breakpoint-xl: 1280px;  /* 桌面 */
  --breakpoint-2xl: 1536px; /* 大屏 */
}

/*
  媒体查询使用方式:

  @media (min-width: 640px)  { sm及以上 }
  @media (min-width: 768px)  { md及以上 }
  @media (min-width: 1024px) { lg及以上 }
  @media (min-width: 1280px) { xl及以上 }
  @media (min-width: 1536px) { 2xl及以上 }
*/
```

### 响应式规划表

| 元素 | 移动端 (<768px) | 平板 (768-1023px) | 桌面 (≥1024px) |
|------|----------------|-------------------|----------------|
| Header高度 | 56px | 60px | 60px |
| Sidebar | 隐藏/抽屉 | 图标模式 60px | 完整 240px |
| 主内容边距 | 16px | 20px | 24px |
| 卡片列数 | 1列 | 2列 | 3-4列 |
| 基准字号 | 14px | 15px | 16px |

---

## 2.5 规划阶段确认清单

| 确认项 | 状态 |
|--------|------|
| 技术栈已确定 | ⏳ |
| 目录结构已创建 | ⏳ |
| CSS变量已定义 | ⏳ |
| 断点策略已明确 | ⏳ |
| 响应式规划已完成 | ⏳ |

---

**下一步**：进入 [阶段三：开发实现](./03-implementation.md)
