# Layout Templates

> Framework-specific layout skeleton templates

## Available Templates

| Framework | Use Case |
|-----------|----------|
| React | React with CSS Modules |
| Vue 3 | Vue 3 Composition API |
| Next.js | Next.js App Router |
| HTML | Vanilla HTML/CSS |

---

# React Layout Template

## MainLayout.tsx

```tsx
import { ReactNode } from 'react';
import styles from './MainLayout.module.css';

const isDev = process.env.NODE_ENV === 'development';

interface DebugProps {
  name: string;
  layout?: string;
  responsive?: string;
  color: string;
  children: ReactNode;
}

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
          {/* Header content */}
        </header>
      </DebugBox>

      <DebugBox
        name="Sidebar"
        layout="w:240px | fixed | left:0"
        responsive="<1024px:w:60px | <768px:hidden"
        color="rgba(78, 205, 196, 0.3)"
      >
        <aside className={styles.sidebar}>
          {/* Sidebar content */}
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
          {/* Footer content */}
        </footer>
      </DebugBox>

    </div>
  );
}
```

## MainLayout.module.css

```css
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
  background: var(--white, #fff);
  border-bottom: 1px solid var(--gray-200, #e5e7eb);
}

.sidebar {
  position: fixed;
  left: 0;
  top: var(--header-height, 60px);
  bottom: 0;
  width: var(--sidebar-width, 240px);
  background: var(--white, #fff);
  border-right: 1px solid var(--gray-200, #e5e7eb);
  overflow-y: auto;
}

.main {
  margin-left: var(--sidebar-width, 240px);
  margin-top: var(--header-height, 60px);
  min-height: calc(100vh - var(--header-height, 60px));
  padding: var(--space-6, 24px);
}

.container {
  max-width: var(--content-max-width, 1200px);
  margin: 0 auto;
}

.footer {
  margin-left: var(--sidebar-width, 240px);
  padding: var(--space-6, 24px);
  border-top: 1px solid var(--gray-200, #e5e7eb);
}

/* Tablet */
@media (max-width: 1023px) {
  .sidebar {
    width: var(--sidebar-width-collapsed, 60px);
  }
  .main,
  .footer {
    margin-left: var(--sidebar-width-collapsed, 60px);
  }
}

/* Mobile */
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

# Vue 3 Layout Template

## MainLayout.vue

```vue
<script setup lang="ts">
import { computed } from 'vue';

const isDev = computed(() => import.meta.env.DEV);
</script>

<template>
  <div class="layout" :data-debug="isDev ? 'layout' : undefined">

    <div
      v-if="isDev"
      data-debug="Header"
      data-layout="h:60px | fixed | top:0 | z:300"
      style="background: rgba(255, 107, 107, 0.3); position: relative;"
    >
      <header class="header">
        <!-- Header content -->
      </header>
    </div>
    <header v-else class="header">
      <!-- Header content -->
    </header>

    <div
      v-if="isDev"
      data-debug="Sidebar"
      data-layout="w:240px | fixed | left:0"
      data-responsive="<1024px:w:60px | <768px:hidden"
      style="background: rgba(78, 205, 196, 0.3); position: relative;"
    >
      <aside class="sidebar">
        <!-- Sidebar content -->
      </aside>
    </div>
    <aside v-else class="sidebar">
      <!-- Sidebar content -->
    </aside>

    <div
      v-if="isDev"
      data-debug="Main"
      data-layout="ml:240px | mt:60px | p:24px"
      data-responsive="<1024px:ml:60px | <768px:ml:0"
      style="background: rgba(69, 183, 209, 0.3); position: relative;"
    >
      <main class="main">
        <div class="container">
          <slot />
        </div>
      </main>
    </div>
    <main v-else class="main">
      <div class="container">
        <slot />
      </div>
    </main>

    <div
      v-if="isDev"
      data-debug="Footer"
      data-layout="ml:240px | p:24px"
      style="background: rgba(150, 206, 180, 0.3); position: relative;"
    >
      <footer class="footer">
        <!-- Footer content -->
      </footer>
    </div>
    <footer v-else class="footer">
      <!-- Footer content -->
    </footer>

  </div>
</template>

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
  background: var(--white, #fff);
  border-bottom: 1px solid var(--gray-200, #e5e7eb);
}

.sidebar {
  position: fixed;
  left: 0;
  top: var(--header-height, 60px);
  bottom: 0;
  width: var(--sidebar-width, 240px);
  background: var(--white, #fff);
  border-right: 1px solid var(--gray-200, #e5e7eb);
  overflow-y: auto;
}

.main {
  margin-left: var(--sidebar-width, 240px);
  margin-top: var(--header-height, 60px);
  min-height: calc(100vh - var(--header-height, 60px));
  padding: var(--space-6, 24px);
}

.container {
  max-width: var(--content-max-width, 1200px);
  margin: 0 auto;
}

.footer {
  margin-left: var(--sidebar-width, 240px);
  padding: var(--space-6, 24px);
  border-top: 1px solid var(--gray-200, #e5e7eb);
}

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

---

# Next.js Layout Template

## app/layout.tsx

```tsx
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## components/MainLayout.tsx

```tsx
'use client';

import { ReactNode } from 'react';
import styles from './MainLayout.module.css';

const isDev = process.env.NODE_ENV === 'development';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>

      <header
        className={styles.header}
        {...(isDev && {
          'data-debug': 'Header',
          'data-layout': 'h:60px | fixed | top:0 | z:300',
          style: { background: 'rgba(255, 107, 107, 0.3)' }
        })}
      >
        {/* Header content */}
      </header>

      <aside
        className={styles.sidebar}
        {...(isDev && {
          'data-debug': 'Sidebar',
          'data-layout': 'w:240px | fixed | left:0',
          'data-responsive': '<1024px:w:60px | <768px:hidden',
          style: { background: 'rgba(78, 205, 196, 0.3)' }
        })}
      >
        {/* Sidebar content */}
      </aside>

      <main
        className={styles.main}
        {...(isDev && {
          'data-debug': 'Main',
          'data-layout': 'ml:240px | mt:60px | p:24px',
          style: { background: 'rgba(69, 183, 209, 0.3)' }
        })}
      >
        <div className={styles.container}>
          {children}
        </div>
      </main>

      <footer
        className={styles.footer}
        {...(isDev && {
          'data-debug': 'Footer',
          'data-layout': 'ml:240px | p:24px',
          style: { background: 'rgba(150, 206, 180, 0.3)' }
        })}
      >
        {/* Footer content */}
      </footer>

    </div>
  );
}
```

---

# HTML Layout Template

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles/variables.css">
  <link rel="stylesheet" href="styles/layout.css">
  <!-- Dev only -->
  <link rel="stylesheet" href="tools/debug.css">
</head>
<body class="debug-mode">

  <div class="layout" data-debug="layout">

    <header
      class="header"
      data-debug="Header"
      data-layout="h:60px | fixed | top:0 | z:300"
    >
      <!-- Header content -->
    </header>

    <aside
      class="sidebar"
      data-debug="Sidebar"
      data-layout="w:240px | fixed | left:0"
      data-responsive="<1024px:w:60px | <768px:hidden"
    >
      <!-- Sidebar content -->
    </aside>

    <main
      class="main"
      data-debug="Main"
      data-layout="ml:240px | mt:60px | p:24px"
      data-responsive="<1024px:ml:60px | <768px:ml:0"
    >
      <div class="container">
        <!-- Page content -->
      </div>
    </main>

    <footer
      class="footer"
      data-debug="Footer"
      data-layout="ml:240px | p:24px"
    >
      <!-- Footer content -->
    </footer>

  </div>

  <!-- Dev only -->
  <script src="tools/debug-mode.js"></script>
</body>
</html>
```

## styles/layout.css

```css
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
  background: var(--white, #fff);
  border-bottom: 1px solid var(--gray-200, #e5e7eb);
}

.sidebar {
  position: fixed;
  left: 0;
  top: var(--header-height, 60px);
  bottom: 0;
  width: var(--sidebar-width, 240px);
  background: var(--white, #fff);
  border-right: 1px solid var(--gray-200, #e5e7eb);
  overflow-y: auto;
}

.main {
  margin-left: var(--sidebar-width, 240px);
  margin-top: var(--header-height, 60px);
  min-height: calc(100vh - var(--header-height, 60px));
  padding: var(--space-6, 24px);
}

.container {
  max-width: var(--content-max-width, 1200px);
  margin: 0 auto;
}

.footer {
  margin-left: var(--sidebar-width, 240px);
  padding: var(--space-6, 24px);
  border-top: 1px solid var(--gray-200, #e5e7eb);
}

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

# Auth Layout Template (All Frameworks)

## React/Next.js

```tsx
import { ReactNode } from 'react';
import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}
```

```css
/* AuthLayout.module.css */
.layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-50, #f9fafb);
}

.container {
  width: 100%;
  max-width: 400px;
  padding: var(--space-8, 32px);
  background: var(--white, #fff);
  border-radius: var(--radius-lg, 12px);
  box-shadow: var(--shadow-lg);
}
```

---

**Back to**: POWER.md for workflow overview
