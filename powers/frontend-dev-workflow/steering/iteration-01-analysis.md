# Step 1: Design Analysis

> Don't code first - understand first, then act

## 1.1 Overall Structure Review

**Identify page structure:**
- Header: fixed/sticky? height?
- Sidebar: fixed? width? collapsible?
- Main: responsive? max-width?
- Footer: follows content or fixed?

**Interaction checklist:**
- Clickable elements
- Expand/collapse
- Tab switching
- Modals/drawers
- Animations/transitions

## 1.2 Component Mapping

### Step 1: Identify design components

| Design Element | Component Type | Count | Variant |
|----------------|----------------|-------|---------|
| (fill in) | Button/Input/Card/... | | |

### Step 2: Map to library

| Design Component | Library Component | Status | Wrap? |
|------------------|-------------------|--------|-------|
| (fill in) | | ✅/⚠️/❌/❓ | Yes/No |

**Status:**
- ✅ Match - Use directly
- ⚠️ Customize - Extend/customize
- ❌ Custom - Build from scratch
- ❓ Unclear - **Must confirm with user**

### Step 3: Wrapper decision

**Wrap when:** Used 3+ times, fixed props, business semantics, significant overrides

**Don't wrap when:** Used 1-2 times, different config each time

### Step 4: Confirm with user

**⚠️ Must confirm:**
- ❓ Unclear components - present options, get selection
- ⚠️ Customization approach
- ❌ Custom build approach

## 1.3 Token Extraction

**Extract from design:**

| Category | Variables to extract |
|----------|---------------------|
| Colors | Primary, neutral, semantic colors |
| Typography | Sizes, weights, line heights |
| Spacing | Based on 8px grid |

Compare with existing design system, note new tokens needed.

## 1.4 Asset Export

| Type | Format | Naming |
|------|--------|--------|
| Logo | SVG | logo.svg |
| Icons | SVG | icon-{name}.svg |
| Illustrations | SVG/PNG | illustration-{name}.svg |
| Photos | WebP | photo-{name}.webp |

**Icon priority:** Library icons → Icon libraries (Lucide, Heroicons) → Export from design

## 1.5 Analysis Completion

| Item | Status |
|------|--------|
| Page structure understood | ⏳ |
| Component mapping complete | ⏳ |
| **Mapping confirmed with user** | ⏳ |
| Tokens extracted | ⏳ |
| Assets exported | ⏳ |

---

**Next:** `iteration-02-implementation` Implementation
