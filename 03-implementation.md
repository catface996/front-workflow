# 阶段三：开发实现

> 实现阶段的核心原则：**可视化、可沟通、可验证**

## 开发顺序

```
搭建骨架 → 布局实现 → 样式填充 → 组件封装 → 交互实现
    ↓          ↓          ↓          ↓          ↓
  组件结构   Debug可视化  设计还原    一致性检查   状态完整
```

---

## 3.1 搭建骨架

> ⚠️ 根据阶段二确定的技术栈选择对应的实现方式

### 🎯 选择对应技术栈的骨架模板

根据项目技术规划，选择对应的骨架实现：

| 技术栈 | 骨架实现方式 |
|--------|-------------|
| React | 函数组件 + JSX |
| Vue 3 | 组合式 API + SFC |
| Next.js | App Router / Pages Router |
| Nuxt 3 | 约定式路由 + layouts |
| 原生 | 语义化 HTML |

---

### React 骨架模板

#### 布局组件 `src/layouts/MainLayout.tsx`

```tsx
// src/layouts/MainLayout.tsx
import { ReactNode } from 'react';
import styles from './MainLayout.module.css';

// Debug 工具 - 仅开发环境
const isDev = process.env.NODE_ENV === 'development';

interface DebugProps {
  name: string;
  layout?: string;
  responsive?: string;
  color: string;
  children: ReactNode;
}

// Debug 包装组件
const DebugBox = ({ name, layout, responsive, color, children }: DebugProps) => {
  if (!isDev) return <>{children}</>;

  return (
    <div
      data-debug={name}
      data-layout={layout}
      data-responsive={responsive}
      style={{ background: color, position: 'relative' }}
    >
      {children}
    </div>
  );
};

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout} data-debug={isDev ? 'layout' : undefined}>

      <DebugBox
        name="Header"
        layout="h:60px | fixed | top:0 | z:300"
        color="rgba(255, 107, 107, 0.3)"
      >
        <header className={styles.header}>
          {/* Header 内容 */}
        </header>
      </DebugBox>

      <DebugBox
        name="Sidebar"
        layout="w:240px | fixed | left:0"
        responsive="<1024px:w:60px | <768px:hidden"
        color="rgba(78, 205, 196, 0.3)"
      >
        <aside className={styles.sidebar}>
          {/* Sidebar 内容 */}
        </aside>
      </DebugBox>

      <DebugBox
        name="Main"
        layout="ml:240px | mt:60px | p:24px"
        responsive="<1024px:ml:60px | <768px:ml:0"
        color="rgba(69, 183, 209, 0.3)"
      >
        <main className={styles.main}>
          <div className={styles.container}>
            {children}
          </div>
        </main>
      </DebugBox>

      <DebugBox
        name="Footer"
        layout="ml:240px | p:24px"
        color="rgba(150, 206, 180, 0.3)"
      >
        <footer className={styles.footer}>
          {/* Footer 内容 */}
        </footer>
      </DebugBox>

    </div>
  );
}
```

#### 布局样式 `src/layouts/MainLayout.module.css`

```css
/* src/layouts/MainLayout.module.css */

.layout {
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height, 60px);
  z-index: var(--z-fixed, 300);
  display: flex;
  align-items: center;
  padding: 0 var(--space-6);
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
}

.sidebar {
  position: fixed;
  left: 0;
  top: var(--header-height, 60px);
  bottom: 0;
  width: var(--sidebar-width, 240px);
  background: var(--white);
  border-right: 1px solid var(--gray-200);
  overflow-y: auto;
}

.main {
  margin-left: var(--sidebar-width, 240px);
  margin-top: var(--header-height, 60px);
  min-height: calc(100vh - var(--header-height, 60px));
  padding: var(--space-6);
}

.container {
  max-width: var(--content-max-width, 1200px);
  margin: 0 auto;
}

.footer {
  margin-left: var(--sidebar-width, 240px);
  padding: var(--space-6);
  border-top: 1px solid var(--gray-200);
}

/* 响应式 */
@media (max-width: 1023px) {
  .sidebar {
    width: var(--sidebar-width-collapsed, 60px);
  }
  .main,
  .footer {
    margin-left: var(--sidebar-width-collapsed, 60px);
  }
}

@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
  .main,
  .footer {
    margin-left: 0;
  }
}
```

---

### Vue 3 骨架模板

#### 布局组件 `src/layouts/MainLayout.vue`

```vue
<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="layout" :data-debug="isDev ? 'layout' : undefined">

    <!-- Header -->
    <DebugBox
      name="Header"
      layout="h:60px | fixed | top:0 | z:300"
      color="rgba(255, 107, 107, 0.3)"
    >
      <header class="header">
        <!-- Header 内容 -->
        <slot name="header" />
      </header>
    </DebugBox>

    <!-- Sidebar -->
    <DebugBox
      name="Sidebar"
      layout="w:240px | fixed | left:0"
      responsive="<1024px:w:60px | <768px:hidden"
      color="rgba(78, 205, 196, 0.3)"
    >
      <aside class="sidebar">
        <!-- Sidebar 内容 -->
        <slot name="sidebar" />
      </aside>
    </DebugBox>

    <!-- Main -->
    <DebugBox
      name="Main"
      layout="ml:240px | mt:60px | p:24px"
      responsive="<1024px:ml:60px | <768px:ml:0"
      color="rgba(69, 183, 209, 0.3)"
    >
      <main class="main">
        <div class="container">
          <slot />
        </div>
      </main>
    </DebugBox>

    <!-- Footer -->
    <DebugBox
      name="Footer"
      layout="ml:240px | p:24px"
      color="rgba(150, 206, 180, 0.3)"
    >
      <footer class="footer">
        <slot name="footer" />
      </footer>
    </DebugBox>

  </div>
</template>

<script setup lang="ts">
import DebugBox from '@/components/debug/DebugBox.vue';

const isDev = import.meta.env.DEV;
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height, 60px);
  z-index: var(--z-fixed, 300);
  display: flex;
  align-items: center;
  padding: 0 var(--space-6);
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
}

.sidebar {
  position: fixed;
  left: 0;
  top: var(--header-height, 60px);
  bottom: 0;
  width: var(--sidebar-width, 240px);
  background: var(--white);
  border-right: 1px solid var(--gray-200);
  overflow-y: auto;
}

.main {
  margin-left: var(--sidebar-width, 240px);
  margin-top: var(--header-height, 60px);
  min-height: calc(100vh - var(--header-height, 60px));
  padding: var(--space-6);
}

.container {
  max-width: var(--content-max-width, 1200px);
  margin: 0 auto;
}

.footer {
  margin-left: var(--sidebar-width, 240px);
  padding: var(--space-6);
  border-top: 1px solid var(--gray-200);
}

/* 响应式 */
@media (max-width: 1023px) {
  .sidebar {
    width: var(--sidebar-width-collapsed, 60px);
  }
  .main,
  .footer {
    margin-left: var(--sidebar-width-collapsed, 60px);
  }
}

@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
  .main,
  .footer {
    margin-left: 0;
  }
}
</style>
```

#### Debug组件 `src/components/debug/DebugBox.vue`

```vue
<!-- src/components/debug/DebugBox.vue -->
<template>
  <div
    v-if="isDev"
    :data-debug="name"
    :data-layout="layout"
    :data-responsive="responsive"
    :style="{ background: color, position: 'relative' }"
  >
    <slot />
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  layout?: string;
  responsive?: string;
  color: string;
}>();

const isDev = import.meta.env.DEV;
</script>
```

---

### Next.js 骨架模板 (App Router)

#### 布局组件 `src/app/layout.tsx`

```tsx
// src/app/layout.tsx
import './globals.css';
import MainLayout from '@/layouts/MainLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
```

---

### 原生 HTML 骨架模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>项目名称</title>
  <link rel="stylesheet" href="styles/variables.css">
  <link rel="stylesheet" href="styles/global.css">
  <!-- 开发环境 -->
  <link rel="stylesheet" href="tools/debug.css">
</head>
<body data-debug="layout">
  <header data-debug="Header" data-layout="h:60px | fixed">
    <!-- Header -->
  </header>
  <aside data-debug="Sidebar" data-layout="w:240px | fixed">
    <!-- Sidebar -->
  </aside>
  <main data-debug="Main" data-layout="ml:240px | mt:60px">
    <!-- Main -->
  </main>
  <footer data-debug="Footer" data-layout="ml:240px">
    <!-- Footer -->
  </footer>
  <script src="tools/debug-mode.js"></script>
</body>
</html>
```

---

## 3.2 布局实现（可视化）

### 🎯 核心：用不同背景色区分布局区块

无论使用哪种技术栈，都通过 Debug 组件实现彩色背景可视化：

| 区块 | 颜色 | RGBA |
|------|------|------|
| Header | 🔴 红色 | rgba(255, 107, 107, 0.3) |
| Sidebar | 🟢 青色 | rgba(78, 205, 196, 0.3) |
| Main | 🔵 蓝色 | rgba(69, 183, 209, 0.3) |
| Container | 🟣 紫色 | rgba(200, 150, 255, 0.3) |
| Component | 🟡 黄色 | rgba(255, 238, 173, 0.3) |
| Footer | 🟢 绿色 | rgba(150, 206, 180, 0.3) |

### 可视化效果示意

```
┌──────────────────────────────────────────────────────────────────┐
│ [Header | h:60px | fixed | z:300]                    🔴 红色     │
├────────────┬─────────────────────────────────────────────────────┤
│ [Sidebar]  │  [Main | ml:240px | p:24px]             🔵 蓝色     │
│ w:240px    │  ┌───────────────────────────────────────────────┐ │
│ 🟢 青色    │  │ [Container | max-w:1200px]           🟣 紫色  │ │
│            │  │  ┌─────────────────────────────────────────┐ │ │
│ 📱响应式:  │  │  │ [Cards | grid:3 | gap:24px]    🟡 黄色  │ │ │
│ <1024:60px │  │  │  ┌────┐  ┌────┐  ┌────┐              │ │ │
│ <768:隐藏  │  │  │  │    │  │    │  │    │              │ │ │
│            │  │  │  └────┘  └────┘  └────┘              │ │ │
│            │  │  └─────────────────────────────────────────┘ │ │
│            │  └───────────────────────────────────────────────┘ │
├────────────┴─────────────────────────────────────────────────────┤
│ [Footer | ml:240px]                                  🟢 绿色     │
└──────────────────────────────────────────────────────────────────┘
```

### Debug 属性说明

| 属性 | 用途 | 示例 |
|------|------|------|
| `data-debug` | 区块名称 | `"Header"`, `"Sidebar"` |
| `data-layout` | 布局信息 | `"h:60px \| fixed \| z:300"` |
| `data-responsive` | 响应式行为 | `"<1024px:w:60px \| <768px:hidden"` |

### 可视化效果

```
┌──────────────────────────────────────────────────────────────────┐
│ [Header | h:60px | fixed | z:300]                    🔴 红色     │
├────────────┬─────────────────────────────────────────────────────┤
│ [Sidebar]  │  [Main | ml:240px | p:24px]             🔵 蓝色     │
│ w:240px    │  ┌───────────────────────────────────────────────┐ │
│ 🟢 青色    │  │ [Container | max-w:1200px]           🟣 紫色  │ │
│            │  │  ┌─────────────────────────────────────────┐ │ │
│ 📱响应式:  │  │  │ [Cards | grid:3 | gap:24px]    🟡 黄色  │ │ │
│ <1024:60px │  │  │  ┌────┐  ┌────┐  ┌────┐              │ │ │
│ <768:隐藏  │  │  │  │    │  │    │  │    │              │ │ │
│            │  │  │  └────┘  └────┘  └────┘              │ │ │
│            │  │  └─────────────────────────────────────────┘ │ │
│            │  └───────────────────────────────────────────────┘ │
├────────────┴─────────────────────────────────────────────────────┤
│ [Footer | ml:240px]                                  🟢 绿色     │
└──────────────────────────────────────────────────────────────────┘
```

### 颜色映射表

| 区块 | 颜色 | RGBA |
|------|------|------|
| Header | 🔴 红色 | rgba(255, 107, 107, 0.3) |
| Sidebar | 🟢 青色 | rgba(78, 205, 196, 0.3) |
| Main | 🔵 蓝色 | rgba(69, 183, 209, 0.3) |
| Container | 🟣 紫色 | rgba(200, 150, 255, 0.3) |
| Component | 🟡 黄色 | rgba(255, 238, 173, 0.3) |
| Footer | 🟢 绿色 | rgba(150, 206, 180, 0.3) |

---

## 3.3 样式填充

### 开发顺序：从外到内，从大到小

```
1. 页面级布局 (Header, Sidebar, Main, Footer)
     ↓
2. 区块级容器 (Container, Section)
     ↓
3. 组件级元素 (Card, Button, Input)
     ↓
4. 细节装饰 (图标, 分割线, 阴影)
```

### 使用设计系统变量

```css
/* ❌ 错误：硬编码值 */
.card {
  padding: 24px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* ✅ 正确：使用CSS变量 */
.card {
  padding: var(--space-6);
  border-radius: var(--radius-md);
  background: var(--gray-50);
  box-shadow: var(--shadow-md);
}
```

---

## 3.4 组件封装（可沟通）

### 🎯 核心：Debug标注让组件信息可见

```jsx
// React示例
const Button = ({ variant = 'primary', size = 'md', children }) => {
  // 开发环境添加debug标注
  const debugAttrs = process.env.NODE_ENV === 'development'
    ? {
        'data-component': 'Button',
        'data-variant': variant,
        'data-size': size,
        'data-styles': `padding:${SIZES[size]} | radius:8px | font:${FONTS[size]}`
      }
    : {};

  return (
    <button className={`btn btn--${variant} btn--${size}`} {...debugAttrs}>
      {children}
    </button>
  );
};
```

### 组件一致性检查表

每个组件开发完成后，填写检查表：

```
┌─────────────────────────────────────────────────────────────┐
│  组件: Button                                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ✅ 设计规范                                                 │
│  ├── [x] 圆角使用 var(--radius-md)                          │
│  ├── [x] 字体使用 var(--text-sm/base)                       │
│  ├── [x] 颜色使用 var(--primary-*)                          │
│  └── [x] 间距遵循 8px 网格                                   │
│                                                             │
│  ✅ 变体完整性                                               │
│  ├── [x] primary                                            │
│  ├── [x] secondary                                          │
│  ├── [x] outline                                            │
│  └── [x] ghost                                              │
│                                                             │
│  ✅ 尺寸规格                                                 │
│  ├── [x] sm: h:32px, p:8px 16px                             │
│  ├── [x] md: h:40px, p:12px 24px                            │
│  └── [x] lg: h:48px, p:16px 32px                            │
│                                                             │
│  ✅ 状态覆盖                                                 │
│  ├── [x] hover                                              │
│  ├── [x] active                                             │
│  ├── [x] focus                                              │
│  ├── [x] disabled                                           │
│  └── [x] loading                                            │
│                                                             │
│  ⚠️ 待确认                                                   │
│  └── [ ] focus样式是否需自定义？                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 组件样式规范

```css
/* 状态样式按以下顺序组织 */
.button {
  /* 1. 基础样式 */
}

.button:hover {
  /* 2. 悬停 */
}

.button:active {
  /* 3. 按下 */
}

.button:focus-visible {
  /* 4. 键盘聚焦 */
}

.button:disabled {
  /* 5. 禁用 */
}

.button[data-loading="true"] {
  /* 6. 加载中 */
}
```

---

## 3.5 交互实现

### 交互清单

| 交互类型 | 实现方式 | 状态 |
|---------|---------|------|
| hover效果 | CSS :hover | ⏳ |
| active效果 | CSS :active | ⏳ |
| focus效果 | CSS :focus-visible | ⏳ |
| 过渡动画 | CSS transition | ⏳ |
| 展开/折叠 | JS + CSS | ⏳ |
| 弹窗 | JS组件 | ⏳ |

### 动画规范

```css
/* 统一使用设计系统的过渡变量 */
.element {
  transition: all var(--transition-normal);
}

/* 快速反馈（按钮、链接） */
.button {
  transition: all var(--transition-fast);
}

/* 较慢过渡（弹窗、抽屉） */
.modal {
  transition: all var(--transition-slow);
}
```

---

## 3.6 响应式开发（可验证）

### 🎯 核心：断点指示器实时显示当前断点

Debug样式会在页面右下角显示当前断点：

```
┌─────────────────────────────────────────┐
│                                         │
│            页面内容                      │
│                                         │
│                        ┌──────────────┐ │
│                        │ 💻 LG (1024+)│ │
│                        └──────────────┘ │
└─────────────────────────────────────────┘
```

### 响应式确认矩阵

开发时填写，与人类工程师确认：

| 元素 | XS <640 | SM 640-767 | MD 768-1023 | LG ≥1024 | 确认 |
|------|---------|------------|-------------|----------|------|
| Header | h:56px 汉堡 | h:56px 汉堡 | h:60px 汉堡 | h:60px 完整 | ⏳ |
| Sidebar | 抽屉 | 抽屉 | w:60px图标 | w:240px | ⏳ |
| Main边距 | 16px | 16px | 20px | 24px | ⏳ |
| 卡片列数 | 1 | 2 | 2 | 3 | ⏳ |

### 关键断点测试

```javascript
// 常用测试设备
const TEST_VIEWPORTS = [
  { name: 'iPhone SE', width: 375 },
  { name: 'iPhone 14', width: 390 },
  { name: 'iPad Mini', width: 768 },
  { name: 'iPad Pro', width: 1024 },
  { name: 'Laptop', width: 1366 },
  { name: 'Desktop', width: 1920 },
];
```

---

## 3.7 Debug工具使用

### 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+Shift+D` | 切换Debug模式 |

### 控制台命令

```javascript
// 切换Debug模式
DebugMode.toggle()

// 打印布局结构
DebugMode.printLayout()

// 打印当前视口信息
DebugMode.printViewport()

// 获取当前断点
DebugMode.getBreakpoint()
```

---

## 3.8 实现阶段沟通检查点

### 布局完成时

- [ ] 彩色背景区分是否清晰？
- [ ] data-layout标注是否准确？
- [ ] data-responsive标注是否完整？
- [ ] 需要调整的布局方式？

### 组件完成时

- [ ] 组件样式是否与其他同类组件一致？
- [ ] 是否使用了设计系统变量？
- [ ] 状态覆盖是否完整？
- [ ] 需要新增的变体？

### 响应式完成时

- [ ] 各断点表现是否符合预期？
- [ ] 断点切换是否自然？
- [ ] 移动端触摸目标是否足够大？
- [ ] 是否有遗漏的断点处理？

---

**下一步**：进入 [阶段四：还原校验](./04-validation.md)
