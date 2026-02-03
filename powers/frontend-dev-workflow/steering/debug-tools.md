# Debug Tools Guide

> Visual debugging utilities for development

## Overview

The debug tools provide visual feedback during development:

- **Colored backgrounds** for layout regions
- **Data attributes** showing layout info
- **Breakpoint indicator** showing current viewport
- **Console commands** for debugging
- **Keyboard shortcuts** for quick toggling

---

## Debug CSS

### debug.css

Include this file during development only:

```css
/**
 * Debug styles for layout visualization
 * REMOVE before production!
 */

/* Debug mode toggle */
:root {
  --debug-mode: 1; /* 1=on, 0=off */
}

/* Layout region colors */
[data-debug="layout"],
body.debug-mode {
  --header-bg: rgba(255, 107, 107, 0.3);    /* 🔴 Red - Header */
  --sidebar-bg: rgba(78, 205, 196, 0.3);    /* 🟢 Cyan - Sidebar */
  --main-bg: rgba(69, 183, 209, 0.3);       /* 🔵 Blue - Main */
  --footer-bg: rgba(150, 206, 180, 0.3);    /* 🟢 Green - Footer */
  --component-bg: rgba(255, 238, 173, 0.3); /* 🟡 Yellow - Component */
  --nested-bg: rgba(200, 150, 255, 0.3);    /* 🟣 Purple - Nested */
}

/* Debug info labels */
[data-debug] {
  position: relative;
}

/* Main label (top-left) */
[data-debug]::before {
  content: attr(data-debug) " | " attr(data-layout);
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 3px 8px;
  border-radius: 0 0 4px 0;
  z-index: 9999;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  white-space: nowrap;
  pointer-events: none;
}

/* Responsive label (bottom-left) */
[data-responsive]::after {
  content: "📱 " attr(data-responsive);
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 10px;
  background: rgba(230, 126, 34, 0.95);
  color: #fff;
  padding: 3px 8px;
  border-radius: 0 4px 0 0;
  z-index: 9999;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  white-space: nowrap;
  pointer-events: none;
}

/* Component label */
[data-component]::before {
  content: "🧩 " attr(data-component) " | " attr(data-variant, "") " | " attr(data-size, "");
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 10px;
  background: rgba(52, 73, 94, 0.95);
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  z-index: 9999;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  white-space: nowrap;
  pointer-events: none;
}

/* Breakpoint indicator */
body.debug-mode::after,
[data-debug="layout"]::after {
  content: "📱 XS (<640px)";
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  padding: 8px 14px;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  border-radius: 6px;
  z-index: 99999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

@media (min-width: 640px) {
  body.debug-mode::after,
  [data-debug="layout"]::after {
    content: "📱 SM (640-767px)";
    background: #e67e22;
  }
}

@media (min-width: 768px) {
  body.debug-mode::after,
  [data-debug="layout"]::after {
    content: "📱 MD (768-1023px)";
    background: #f39c12;
  }
}

@media (min-width: 1024px) {
  body.debug-mode::after,
  [data-debug="layout"]::after {
    content: "💻 LG (1024-1279px)";
    background: #27ae60;
  }
}

@media (min-width: 1280px) {
  body.debug-mode::after,
  [data-debug="layout"]::after {
    content: "🖥️ XL (1280-1535px)";
    background: #3498db;
  }
}

@media (min-width: 1536px) {
  body.debug-mode::after,
  [data-debug="layout"]::after {
    content: "🖥️ 2XL (≥1536px)";
    background: #9b59b6;
  }
}

/* Grid helpers */
.debug-grid {
  background-image:
    linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 8px 8px;
}

.debug-grid-16 {
  background-image:
    linear-gradient(rgba(0, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 255, 0.1) 1px, transparent 1px);
  background-size: 16px 16px;
}

/* Element outline */
.debug-outline * {
  outline: 1px solid rgba(255, 0, 0, 0.3);
}

.debug-outline *:hover {
  outline: 2px solid rgba(255, 0, 0, 0.8);
}
```

---

## Debug JavaScript

### debug-mode.js

Include this file during development only:

```javascript
/**
 * Debug Mode Controller
 * Keyboard: Ctrl+Shift+D to toggle
 * REMOVE before production!
 */

(function() {
  'use strict';

  const CONFIG = {
    hotkey: { ctrl: true, shift: true, key: 'D' },
    className: 'debug-mode',
    storageKey: 'frontend-debug-mode'
  };

  function toggleDebugMode() {
    document.body.classList.toggle(CONFIG.className);
    const isDebug = document.body.classList.contains(CONFIG.className);

    try {
      localStorage.setItem(CONFIG.storageKey, isDebug ? '1' : '0');
    } catch (e) {}

    console.clear();
    console.log(`%c🔧 Debug Mode: ${isDebug ? 'ON' : 'OFF'}`,
      'font-size: 14px; font-weight: bold; color: ' + (isDebug ? '#27ae60' : '#e74c3c'));

    if (isDebug) {
      printLayoutStructure();
    }

    return isDebug;
  }

  function printLayoutStructure() {
    const debugElements = document.querySelectorAll('[data-debug]');

    if (debugElements.length === 0) {
      console.log('%c⚠️ No elements with data-debug attribute found', 'color: #f39c12');
      return;
    }

    console.log('%c📐 Page Layout Structure:', 'font-size: 12px; font-weight: bold; color: #3498db');
    console.log('');

    const structureData = [];
    debugElements.forEach((el, index) => {
      structureData.push({
        '#': index + 1,
        'Element': el.dataset.debug || '-',
        'Layout': el.dataset.layout || '-',
        'Responsive': el.dataset.responsive || '-',
        'Tag': el.tagName.toLowerCase()
      });
    });

    console.table(structureData);

    const componentElements = document.querySelectorAll('[data-component]');
    if (componentElements.length > 0) {
      console.log('');
      console.log('%c🧩 Components:', 'font-size: 12px; font-weight: bold; color: #9b59b6');
      console.log('');

      const componentData = [];
      componentElements.forEach((el, index) => {
        componentData.push({
          '#': index + 1,
          'Component': el.dataset.component || '-',
          'Variant': el.dataset.variant || '-',
          'Size': el.dataset.size || '-'
        });
      });

      console.table(componentData);
    }
  }

  function getCurrentBreakpoint() {
    const width = window.innerWidth;

    if (width >= 1536) return { name: '2XL', min: 1536, color: '#9b59b6' };
    if (width >= 1280) return { name: 'XL', min: 1280, color: '#3498db' };
    if (width >= 1024) return { name: 'LG', min: 1024, color: '#27ae60' };
    if (width >= 768) return { name: 'MD', min: 768, color: '#f39c12' };
    if (width >= 640) return { name: 'SM', min: 640, color: '#e67e22' };
    return { name: 'XS', min: 0, color: '#e74c3c' };
  }

  function printViewportInfo() {
    const bp = getCurrentBreakpoint();
    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(
      `%c📱 Viewport: ${width}x${height}px | Breakpoint: ${bp.name}`,
      `font-size: 11px; color: ${bp.color}; font-weight: bold`
    );
  }

  function init() {
    try {
      const savedState = localStorage.getItem(CONFIG.storageKey);
      if (savedState === '1') {
        document.body.classList.add(CONFIG.className);
        console.log('%c🔧 Debug Mode restored', 'color: #27ae60');
        printLayoutStructure();
      }
    } catch (e) {}

    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey === CONFIG.hotkey.ctrl &&
          e.shiftKey === CONFIG.hotkey.shift &&
          e.key.toUpperCase() === CONFIG.hotkey.key) {
        e.preventDefault();
        toggleDebugMode();
      }
    });

    let resizeTimeout;
    window.addEventListener('resize', function() {
      if (document.body.classList.contains(CONFIG.className)) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(printViewportInfo, 200);
      }
    });

    console.log('%c🛠️ Debug Tools Loaded', 'font-size: 12px; font-weight: bold; color: #3498db');
    console.log('%cShortcut: Ctrl+Shift+D to toggle', 'font-size: 11px; color: #7f8c8d');
  }

  // Export to global
  window.DebugMode = {
    toggle: toggleDebugMode,
    printLayout: printLayoutStructure,
    printViewport: printViewportInfo,
    getBreakpoint: getCurrentBreakpoint
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
```

---

## Usage

### HTML

```html
<!-- Development only -->
<link rel="stylesheet" href="tools/debug.css">
<script src="tools/debug-mode.js"></script>
```

### React/Vue

```tsx
// main.tsx or main.ts
if (process.env.NODE_ENV === 'development') {
  import('./styles/debug.css');
}
```

---

## Data Attributes

### Layout Regions

```html
<header
  data-debug="Header"
  data-layout="h:60px | fixed | top:0 | z:300"
>
```

### Responsive Info

```html
<aside
  data-debug="Sidebar"
  data-layout="w:240px | fixed | left:0"
  data-responsive="<1024px:w:60px | <768px:hidden"
>
```

### Components

```html
<button
  data-component="Button"
  data-variant="primary"
  data-size="md"
>
```

---

## Console Commands

| Command | Description |
|---------|-------------|
| `DebugMode.toggle()` | Toggle debug mode |
| `DebugMode.printLayout()` | Print layout structure |
| `DebugMode.printViewport()` | Print viewport info |
| `DebugMode.getBreakpoint()` | Get current breakpoint |

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+D` | Toggle Debug Mode |

---

## Pre-Launch Cleanup

**MUST remove before production:**

```
[ ] Remove debug.css link/import
[ ] Remove debug-mode.js script/import
[ ] Remove all data-debug attributes
[ ] Remove all data-layout attributes
[ ] Remove all data-responsive attributes
[ ] Remove all data-component attributes
[ ] Remove debug-mode class from body
```

---

**Back to**: POWER.md for workflow overview
