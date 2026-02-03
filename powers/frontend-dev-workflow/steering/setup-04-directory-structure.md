# 检测模块：目录结构检测

> 检测并创建标准目录结构

## 检测方式

检查以下目录是否存在：

| 目录 | 用途 |
|------|------|
| `src/layouts/` | 布局组件 |
| `src/components/` | 通用组件 |
| `src/pages/` | 页面组件 |
| `src/styles/` | 全局样式 |
| `src/assets/` | 静态资源 (icons/, images/, fonts/) |
| `src/utils/` | 工具函数 |

## 检测结果处理

1. 展示已存在 / 缺失的目录
2. 询问用户：创建所有缺失目录 / 保持现有结构 / 选择性创建

## 推荐目录结构

```
src/
├── assets/icons/, images/, fonts/
├── styles/variables.css, reset.css, global.css
├── components/
├── layouts/
├── pages/
└── utils/
```

---

**下一步**：`setup-05-design-system` 设计系统检测
