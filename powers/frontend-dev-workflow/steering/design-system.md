# Design System Guide

> CSS variables, design tokens, and theme configuration

## Overview

A design system provides consistent visual language through:

- **Colors** - Primary, neutral, semantic colors
- **Typography** - Font sizes, weights, line heights
- **Spacing** - Based on 8px grid system
- **Border Radius** - Consistent corner rounding
- **Shadows** - Elevation levels
- **Layout** - Header, sidebar, content dimensions
- **Breakpoints** - Responsive design points
- **Transitions** - Animation timing
- **Z-index** - Layer management

---

## Complete CSS Variables Template

### variables.css

```css
:root {
  /* ==================
     COLOR SYSTEM
     ================== */

  /* Primary Colors */
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;  /* Main */
  --primary-600: #2563eb;  /* Hover */
  --primary-700: #1d4ed8;  /* Active */
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  /* Neutral Colors */
  --gray-50: #f9fafb;   /* Background */
  --gray-100: #f3f4f6;  /* Divider bg */
  --gray-200: #e5e7eb;  /* Border */
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;  /* Secondary text */
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;  /* Primary text */

  /* Semantic Colors */
  --success-50: #ecfdf5;
  --success-500: #10b981;
  --success-600: #059669;

  --warning-50: #fffbeb;
  --warning-500: #f59e0b;
  --warning-600: #d97706;

  --error-50: #fef2f2;
  --error-500: #ef4444;
  --error-600: #dc2626;

  --info-50: #eff6ff;
  --info-500: #3b82f6;
  --info-600: #2563eb;

  /* Common */
  --white: #ffffff;
  --black: #000000;

  /* ==================
     TYPOGRAPHY
     ================== */

  /* Font Family */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  --font-family-mono: 'Monaco', 'Menlo', 'Consolas', monospace;

  /* Font Sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Font Weights */
  --font-thin: 100;
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;

  /* ==================
     SPACING (8px grid)
     ================== */

  --space-0: 0;
  --space-px: 1px;
  --space-0-5: 2px;
  --space-1: 4px;
  --space-1-5: 6px;
  --space-2: 8px;
  --space-2-5: 10px;
  --space-3: 12px;
  --space-3-5: 14px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-9: 36px;
  --space-10: 40px;
  --space-11: 44px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* ==================
     BORDER RADIUS
     ================== */

  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 9999px;

  /* ==================
     SHADOWS
     ================== */

  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
               0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
               0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
               0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
               0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  --shadow-none: 0 0 #0000;

  /* ==================
     LAYOUT
     ================== */

  --header-height: 60px;
  --header-height-mobile: 56px;

  --sidebar-width: 240px;
  --sidebar-width-collapsed: 64px;

  --content-max-width: 1200px;
  --content-padding: 24px;
  --content-padding-mobile: 16px;

  /* ==================
     BREAKPOINTS
     ================== */

  --breakpoint-xs: 0;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  /* ==================
     TRANSITIONS
     ================== */

  --transition-none: none;
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-slower: 500ms ease;

  /* Specific transitions */
  --transition-colors: color 150ms ease,
                       background-color 150ms ease,
                       border-color 150ms ease;
  --transition-opacity: opacity 150ms ease;
  --transition-shadow: box-shadow 150ms ease;
  --transition-transform: transform 200ms ease;

  /* ==================
     Z-INDEX
     ================== */

  --z-auto: auto;
  --z-0: 0;
  --z-10: 10;
  --z-20: 20;
  --z-30: 30;
  --z-40: 40;
  --z-50: 50;

  /* Semantic z-index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
  --z-toast: 800;

  /* ==================
     BORDERS
     ================== */

  --border-width: 1px;
  --border-width-2: 2px;
  --border-color: var(--gray-200);
  --border-color-hover: var(--gray-300);
  --border-color-focus: var(--primary-500);

  /* ==================
     FOCUS RING
     ================== */

  --ring-width: 2px;
  --ring-offset: 2px;
  --ring-color: var(--primary-500);
  --ring-opacity: 0.5;
}
```

---

## Usage Examples

### Colors

```css
.button-primary {
  background: var(--primary-500);
  color: var(--white);
}

.button-primary:hover {
  background: var(--primary-600);
}

.text-secondary {
  color: var(--gray-500);
}

.alert-error {
  background: var(--error-50);
  border-color: var(--error-500);
  color: var(--error-600);
}
```

### Typography

```css
.heading-1 {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

.body-text {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}

.caption {
  font-size: var(--text-sm);
  color: var(--gray-500);
}
```

### Spacing

```css
.card {
  padding: var(--space-6);
  margin-bottom: var(--space-4);
}

.button {
  padding: var(--space-2) var(--space-4);
}

.section {
  margin-top: var(--space-12);
}
```

### Shadows & Radius

```css
.card {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.avatar {
  border-radius: var(--radius-full);
}
```

### Transitions

```css
.button {
  transition: var(--transition-colors);
}

.modal {
  transition: var(--transition-slow);
}

.card {
  transition: var(--transition-shadow);
}
```

---

## Responsive Design

### Media Query Pattern

```css
/* Mobile first approach */
.container {
  padding: var(--content-padding-mobile);
}

@media (min-width: 768px) {
  .container {
    padding: var(--content-padding);
  }
}

/* Layout adjustments */
.sidebar {
  width: var(--sidebar-width);
}

@media (max-width: 1023px) {
  .sidebar {
    width: var(--sidebar-width-collapsed);
  }
}

@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
}
```

### Common Breakpoint Usage

| Breakpoint | Width | Typical Use |
|------------|-------|-------------|
| XS | <640px | Mobile phones |
| SM | 640-767px | Large phones |
| MD | 768-1023px | Tablets |
| LG | 1024-1279px | Small laptops |
| XL | 1280-1535px | Desktops |
| 2XL | ≥1536px | Large screens |

---

## Dark Mode Support

```css
/* Light mode (default) */
:root {
  --bg-primary: var(--white);
  --bg-secondary: var(--gray-50);
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-500);
  --border-default: var(--gray-200);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--gray-900);
    --bg-secondary: var(--gray-800);
    --text-primary: var(--gray-50);
    --text-secondary: var(--gray-400);
    --border-default: var(--gray-700);
  }
}

/* Manual dark mode class */
.dark {
  --bg-primary: var(--gray-900);
  --bg-secondary: var(--gray-800);
  --text-primary: var(--gray-50);
  --text-secondary: var(--gray-400);
  --border-default: var(--gray-700);
}
```

---

## Component Library Integration

### Ant Design Theme

```tsx
// theme.ts
const theme = {
  token: {
    colorPrimary: '#3b82f6',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    borderRadius: 8,
    fontSize: 14,
  },
};
```

### Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      spacing: {
        'header': '60px',
        'sidebar': '240px',
        'sidebar-collapsed': '64px',
      },
    },
  },
};
```

---

## Best Practices

1. **Always use variables** - Never hardcode colors, spacing, or typography
2. **Follow the grid** - Use 8px spacing increments
3. **Semantic naming** - Use purpose-based names (--text-primary vs --gray-900)
4. **Consistent scale** - Follow established size progressions
5. **Document changes** - Track any modifications to the design system

---

**Back to**: POWER.md for workflow overview
