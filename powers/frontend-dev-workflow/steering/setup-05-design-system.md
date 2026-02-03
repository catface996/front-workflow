# 检测模块：设计系统检测

> 检测 CSS 变量、设计 Token 配置

## 检测方式

检查以下文件：
- `src/styles/variables.css`
- `src/styles/theme.css`
- `tailwind.config.*`

## 检测内容

| 检测项 | CSS 变量 |
|--------|---------|
| 颜色系统 | --primary-*, --gray-*, --success/warning/error |
| 字体系统 | --text-*, --font-* |
| 间距系统 | --space-* |
| 圆角系统 | --radius-* |
| 阴影系统 | --shadow-* |
| 布局变量 | --header-height, --sidebar-width |
| 响应式断点 | --breakpoint-* |

## 情况一：已有设计系统

展示各项检测结果（✅ 已定义 / ⚠️ 未定义），询问用户：
- 补充所有缺失项
- 保持现有配置
- 选择性补充

## 情况二：无设计系统 → 创建配置

询问用户：
- 创建完整设计系统
- 创建基础配置
- 稍后手动创建

完整 CSS 变量模板见 `design-system.md`

---

**下一步**：`setup-06-layout-skeleton` 布局骨架检测
