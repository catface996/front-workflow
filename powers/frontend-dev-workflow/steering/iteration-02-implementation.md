# Step 2: Implementation

> Core principle: Visualize → Communicate → Verify

## Development Order

```
Layout → Styles → Components → Interactions
```

## 2.1 Layout Implementation (Visualize)

**Debug colors for regions:**

| Region | Color |
|--------|-------|
| Header | Red rgba(255,107,107,0.3) |
| Sidebar | Cyan rgba(78,205,196,0.3) |
| Main | Blue rgba(69,183,209,0.3) |
| Container | Purple rgba(200,150,255,0.3) |
| Component | Yellow rgba(255,238,173,0.3) |
| Footer | Green rgba(150,206,180,0.3) |

**Debug attributes:**
- `data-debug` - Region name
- `data-layout` - Layout info (e.g., "h:60px | fixed")
- `data-responsive` - Responsive behavior

## 2.2 Style Application

**Order:** Outside-in, large-to-small
1. Page layout (Header, Sidebar, Main, Footer)
2. Section containers
3. Component elements
4. Details (icons, dividers, shadows)

**Use design system variables:**
```css
/* ✅ Correct */
padding: var(--space-6);
border-radius: var(--radius-md);

/* ❌ Wrong - hardcoded */
padding: 24px;
border-radius: 8px;
```

## 2.3 Component Development (Communicate)

**Consistency checklist:**
- Design specs: radius, font, colors, spacing
- Variants: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- States: hover, active, focus, disabled, loading

## 2.4 Interaction Implementation

| Type | Implementation |
|------|----------------|
| hover/active/focus | CSS pseudo-classes |
| transitions | CSS transition variables |
| expand/collapse | JS + CSS |
| modals/drawers | JS component |

**Animation standards:**
- Fast (buttons): `var(--transition-fast)`
- Normal: `var(--transition-normal)`
- Slow (modals): `var(--transition-slow)`

## 2.5 Responsive Development (Verify)

**Test viewports:**
- Mobile: 375px, 390px
- Tablet: 768px, 1024px
- Desktop: 1366px, 1920px

**Responsive matrix:**

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Header | h:56px hamburger | h:60px hamburger | h:60px full |
| Sidebar | drawer | w:60px icons | w:240px |
| Main padding | 16px | 20px | 24px |

## 2.6 Debug Tools

**Keyboard:** `Ctrl+Shift+D` Toggle debug mode

**Console:**
```javascript
DebugMode.toggle()
DebugMode.printLayout()
DebugMode.getBreakpoint()
```

---

**Next:** `iteration-03-validation` Validation
