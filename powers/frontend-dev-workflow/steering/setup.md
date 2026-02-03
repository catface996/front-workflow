# Workspace Setup

> First-time entry: detect project status, complete initialization

## Entry Logic

```
if workspace-report.md exists and complete:
    → go to daily-iteration
else:
    → run setup modules 1-6
    → generate workspace-report.md
```

**Project Status Handling:**
- Empty project → Full init (tech stack → directory → skeleton)
- Existing project → Detect config, fill gaps
- Setup complete → Go to daily iteration

---

## Detection Modules

| # | Module | Steering File | Key Files to Check |
|---|--------|---------------|-------------------|
| 1 | Project Type | `setup-01-project-type` | `package.json`, `src/` |
| 2 | Tech Stack | `setup-02-tech-stack` | `vite.config.*`, `tsconfig.json` |
| 3 | Component Library | `setup-03-component-library` | `package.json` dependencies |
| 4 | Directory Structure | `setup-04-directory-structure` | `src/layouts/`, `src/components/` |
| 5 | Design System | `setup-05-design-system` | `src/styles/variables.css` |
| 6 | Layout Skeleton | `setup-06-layout-skeleton` | `src/layouts/`, `src/app/layout.*` |

**Usage:** This file provides overview. For detailed prompts and templates, load the corresponding `setup-0x-*` steering file when working on that module.

---

## Module 1: Project Type

| Type | Indicators | Action |
|------|------------|--------|
| Empty | No `package.json` | Full initialization |
| Existing | Has `package.json` + `src/` | Detect and fill gaps |

---

## Module 2: Tech Stack

**Detection:**
| Item | Check |
|------|-------|
| Framework | package.json: react/vue/angular |
| Build Tool | vite.config.* / webpack.config.* |
| Styling | tailwind.config.* / sass deps |
| TypeScript | tsconfig.json |
| Linting | .eslintrc / .prettierrc |

**If not detected, ask user:**
- Framework: React / Vue 3 / Next.js / Nuxt 3 / Vanilla
- Build Tool: Vite (recommended) / Webpack / Framework built-in
- Styling: Tailwind / CSS Modules / Sass / Styled-components
- TypeScript: Yes / No
- Linting: ESLint + Prettier (recommended) / ESLint only / None

---

## Module 3: Component Library

**Check package.json for:**
`antd`, `element-plus`, `@mui/material`, `@chakra-ui/react`, `naive-ui`, `@arco-design/*`

**If not detected, ask user to select:**
Ant Design / Element Plus / Material UI / Chakra UI / Naive UI / Arco Design / No library / Other

---

## Module 4: Directory Structure

**Required directories:**
```
src/
├── assets/icons/, images/, fonts/
├── styles/variables.css, reset.css, global.css
├── components/
├── layouts/
├── pages/
└── utils/
```

Create missing directories as needed.

---

## Module 5: Design System

**Check:** `src/styles/variables.css`, `tailwind.config.*`

**Required tokens:**
| Category | Variables |
|----------|-----------|
| Colors | --primary-*, --gray-*, --success/warning/error |
| Typography | --text-xs/sm/base/lg/xl, --font-normal/medium/bold |
| Spacing | --space-1/2/3/4/6/8 (4px grid) |
| Radius | --radius-sm/md/lg/full |
| Shadows | --shadow-sm/md/lg |
| Layout | --header-height, --sidebar-width |
| Breakpoints | --breakpoint-sm/md/lg/xl |
| Z-index | --z-dropdown/sticky/fixed/modal/tooltip |

If missing, create `variables.css` with design tokens. See `design-system.md` for full template.

---

## Module 6: Layout Skeleton

**Check:** `src/layouts/`, files with `Layout` keyword, `<header>/<aside>/<main>` tags

**If not detected, ask user:**

1. **Structure:** Standard admin / Top nav only / Dual sidebar / Minimal
2. **Header:** Height (56/60/64px), Position (fixed/static/sticky), Content (Logo/Nav/Search/User)
3. **Sidebar:** Width (200/240/256px), Collapsed width (60/64/80px), Features (Collapsible/Drawer)
4. **Main:** Max width, Padding, Centered
5. **Breakpoints:** Framework defaults or custom
6. **Other layouts:** AuthLayout / EmptyLayout / PrintLayout

See `layout-templates.md` for framework-specific code.

---

## Completion

All modules complete → Update `workspace-report.md` → Go to `daily-iteration.md`
