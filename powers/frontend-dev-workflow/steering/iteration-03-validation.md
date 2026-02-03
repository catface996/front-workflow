# Step 3: Validation

> Final check: pixel-perfect, multi-device, designer alignment

## 3.1 Pixel-Perfect Comparison

**Methods:**
- Browser plugin overlay (PerfectPixel)
- Screenshot diff tools (pixelmatch, resemble.js)
- Design tool overlay (Figma/Sketch)

**Tolerance:**

| Type | Acceptable |
|------|------------|
| Spacing | ±2px |
| Font size | 0px (exact) |
| Colors | 0 (exact) |
| Border radius | ±1px |
| Alignment | 0px (exact) |

## 3.2 Multi-Device Testing

**Browsers:**
- Chrome, Firefox, Safari, Edge (Latest)

**Mobile:**
- iPhone iOS 16+ (Safari, Chrome)
- Android 12+ (Chrome)
- iPad (Safari)

## 3.3 Validation Checklists

**Layout:**
- [ ] Main regions match design
- [ ] Spacing within tolerance
- [ ] Alignment correct
- [ ] Z-index layers correct
- [ ] Fixed/sticky elements work

**Visual:**
- [ ] Colors accurate (design tokens)
- [ ] Font/size/weight/line-height correct
- [ ] Border radius, shadows, borders correct
- [ ] Icons and images correct

**Responsive:**
- [ ] All breakpoints layout correct
- [ ] Mobile touch targets ≥44px
- [ ] No horizontal scroll on mobile
- [ ] Text readable on all devices

**Accessibility:**
- [ ] Images have alt attributes
- [ ] Form elements have labels
- [ ] Color contrast WCAG AA (4.5:1)
- [ ] Keyboard navigable
- [ ] Focus states visible

**Code Quality:**
- [ ] Debug code removed (css, js, data-attributes)
- [ ] Console statements removed
- [ ] No unused CSS
- [ ] Class names semantic

## 3.4 Pre-Launch Checklist

**Security:**
- [ ] No hardcoded sensitive info
- [ ] API URLs configured correctly
- [ ] No test data remaining

**Cleanup:**
- [ ] debug.css removed
- [ ] debug-mode.js removed
- [ ] data-debug attributes removed
- [ ] TODO comments resolved

**Build:**
- [ ] Build succeeds without errors
- [ ] Bundle size reasonable
- [ ] Asset paths correct

**Compatibility:**
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓
- [ ] iOS Safari ✓
- [ ] Android Chrome ✓

---

**Complete:** Update `iteration-report.md` → Archive → Next iteration
