# Daily Iteration

> Recurring entry point - focus on page implementation and modifications

## Prerequisites

- workspace-report.md exists and marked complete
- Tech stack, component library, layout skeleton confirmed

## Iteration Types

| Type | Description | Process |
|------|-------------|---------|
| New Page | Implement new pages from scratch | Full process |
| Page Redesign | Major changes to existing pages | Full process |
| Minor Updates | Small changes across pages | Simplified analysis |

## Iteration Flow

```
if workspace setup complete:
    → Step 1: Design Analysis    // iteration-01-analysis
    → Step 2: Implementation     // iteration-02-implementation
    → Step 3: Validation         // iteration-03-validation
    → Update iteration-report.md
```

## Iteration Modules

| # | Step | Steering File | Description |
|---|------|---------------|-------------|
| 1 | Design Analysis | `iteration-01-analysis` | Structure, component mapping, token extraction |
| 2 | Implementation | `iteration-02-implementation` | Layout, styles, components, interactions |
| 3 | Validation | `iteration-03-validation` | Pixel comparison, multi-device, pre-launch |

**Usage:** This file provides overview. For detailed guidance, load the corresponding `iteration-0x-*` steering file.

## Core Principle

```
Don't code first - understand first, then act

Analysis → Implementation → Validation
    ↓           ↓              ↓
 Understand   Visualize      Verify
```

---

**Complete:** Update `iteration-report.md` → Archive → Next iteration
