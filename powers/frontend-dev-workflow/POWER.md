---
name: "frontend-dev-workflow"
displayName: "Frontend Dev Workflow"
description: "AI-guided workflow for converting design mockups into high-fidelity frontend pages. Includes workspace setup, daily iteration process, component mapping, and pixel-perfect validation."
keywords: ["frontend", "design-to-code", "mockup", "ui-implementation", "design-system", "layout", "responsive"]
author: "Frontend Workflow Team"
---

# Frontend Dev Workflow

## Overview

A comprehensive workflow guiding AI Agents to convert design mockups into high-fidelity frontend pages. This power provides:

**⚠️ Language Requirement: 使用中文与用户交流**

- **Workspace Setup** - One-time project initialization with tech stack detection, component library setup, and layout skeleton creation
- **Daily Iteration** - Structured process for design analysis, implementation, and validation

## Core Philosophy

```
Don't jump into coding - understand first, then act

Core Logic:
    current = analyze(currentProject)
    target = analyze(designMockup)
    diff = compare(current, target)
    implement(diff)
```

**Key Principles:**
- Big picture first, details later
- Static first, dynamic later
- Communicate with design team for uncertainties
- Keep workspace stable - don't change tech stack lightly
- Each iteration focuses on specific pages/components

## Available Steering Files

This power has multiple steering files for different workflows:

| Steering File | Purpose |
|---------------|---------|
| **setup** | Initial project setup and configuration detection |
| **setup-01-project-type** | Project type detection (empty vs existing) |
| **setup-02-tech-stack** | Framework, build tool, styling detection |
| **setup-03-component-library** | UI component library detection |
| **setup-04-directory-structure** | Standard folder structure setup |
| **setup-05-design-system** | CSS variables and design tokens |
| **setup-06-layout-skeleton** | Main layout component creation |
| **daily-iteration** | Daily iteration overview and flow |
| **iteration-01-analysis** | Design analysis: structure, component mapping, tokens |
| **iteration-02-implementation** | Implementation: layout, styles, components, interactions |
| **iteration-03-validation** | Validation: pixel comparison, multi-device, pre-launch |
| **workspace-report** | Workspace configuration report template |
| **iteration-report** | Iteration analysis report template |
| **design-system** | Complete CSS variables template and usage |
| **layout-templates** | Framework-specific layout skeleton templates |
| **debug-tools** | Visual debugging utilities for development |

Call `readSteering` with the appropriate file to access detailed workflow guidance.

## Workflow Overview

```
function startWorkflow():
    if not (exists(workspace-report.md) and setupComplete):
        run(workspaceSetup)    // → setup.md
    run(dailyIteration)        // → daily-iteration.md
```

## Two Main Processes

### 1. Workspace Setup (One-time)

Initial entry point for new projects:

| Detection Module | Description |
|-----------------|-------------|
| Project Type | Empty project vs existing project |
| Tech Stack | Framework, build tool, styling solution |
| Component Library | UI library detection and confirmation |
| Directory Structure | Standard folder structure setup |
| Design System | CSS variables and design tokens |
| Layout Skeleton | Main layout component creation |

### 2. Daily Iteration (Recurring)

Each iteration follows three steps:

```
Step 1: Design Analysis
├── Overall structure review
├── Component identification & mapping
├── Design token extraction
└── Asset export

Step 2: Implementation
├── Layout with debug visualization
├── Style application
├── Component development
└── Interaction implementation

Step 3: Validation
├── Pixel-perfect comparison
├── Multi-device testing
├── Designer alignment
└── Pre-launch checklist
```

## Debug Mode Features

The workflow includes visual debugging tools:

- **Colored backgrounds** for layout regions (Header=red, Sidebar=cyan, Main=blue, Footer=green)
- **Data attributes** showing layout info (`data-debug`, `data-layout`, `data-responsive`)
- **Breakpoint indicator** showing current viewport size
- **Keyboard shortcut** `Ctrl+Shift+D` to toggle debug mode

## Best Practices

1. **Always analyze before coding** - Understand the full design before implementation
2. **Use design system variables** - Never hardcode colors, spacing, or typography
3. **Map components first** - Identify all UI components and their library equivalents
4. **Confirm uncertainties** - Always ask when component mapping is unclear
5. **Test responsively** - Verify all breakpoints during development
6. **Clean up before launch** - Remove all debug attributes and styles

## Quick Start

1. **New Project**: Read `setup.md` steering file to initialize
2. **Existing Project**: Read `daily-iteration.md` to start implementing designs
3. **Need Templates**: Read `layout-templates.md` for framework-specific code
4. **Debug Issues**: Read `debug-tools.md` for visual debugging utilities
