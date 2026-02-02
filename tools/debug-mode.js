/**
 * Debug模式控制脚本
 *
 * 功能：
 * - Ctrl+Shift+D 切换Debug模式
 * - 显示/隐藏布局区块的debug信息
 * - 在控制台输出当前页面的布局结构
 *
 * 使用方式：<script src="tools/debug-mode.js"></script>
 * 上线前务必移除此文件引用
 */

(function() {
  'use strict';

  // 配置
  const CONFIG = {
    hotkey: { ctrl: true, shift: true, key: 'D' },
    className: 'debug-mode',
    storageKey: 'frontend-debug-mode'
  };

  /**
   * 切换Debug模式
   */
  function toggleDebugMode() {
    document.body.classList.toggle(CONFIG.className);

    const isDebug = document.body.classList.contains(CONFIG.className);

    // 保存状态到localStorage
    try {
      localStorage.setItem(CONFIG.storageKey, isDebug ? '1' : '0');
    } catch (e) {
      // localStorage不可用时忽略
    }

    // 控制台输出
    console.clear();
    console.log(`%c🔧 Debug模式: ${isDebug ? '开启' : '关闭'}`,
      'font-size: 14px; font-weight: bold; color: ' + (isDebug ? '#27ae60' : '#e74c3c'));

    if (isDebug) {
      printLayoutStructure();
    }

    return isDebug;
  }

  /**
   * 打印布局结构到控制台
   */
  function printLayoutStructure() {
    const debugElements = document.querySelectorAll('[data-debug]');

    if (debugElements.length === 0) {
      console.log('%c⚠️ 未找到带有 data-debug 属性的元素', 'color: #f39c12');
      return;
    }

    console.log('%c📐 页面布局结构:', 'font-size: 12px; font-weight: bold; color: #3498db');
    console.log('');

    const structureData = [];

    debugElements.forEach((el, index) => {
      const data = {
        '#': index + 1,
        '元素': el.dataset.debug || '-',
        '布局': el.dataset.layout || '-',
        '响应式': el.dataset.responsive || '-',
        '标签': el.tagName.toLowerCase()
      };
      structureData.push(data);
    });

    console.table(structureData);

    // 打印组件信息
    const componentElements = document.querySelectorAll('[data-component]');
    if (componentElements.length > 0) {
      console.log('');
      console.log('%c🧩 组件列表:', 'font-size: 12px; font-weight: bold; color: #9b59b6');
      console.log('');

      const componentData = [];
      componentElements.forEach((el, index) => {
        componentData.push({
          '#': index + 1,
          '组件': el.dataset.component || '-',
          '变体': el.dataset.variant || '-',
          '尺寸': el.dataset.size || '-',
          '样式': el.dataset.styles || '-'
        });
      });

      console.table(componentData);
    }
  }

  /**
   * 获取当前断点
   */
  function getCurrentBreakpoint() {
    const width = window.innerWidth;

    if (width >= 1536) return { name: '2XL', min: 1536, color: '#9b59b6' };
    if (width >= 1280) return { name: 'XL', min: 1280, color: '#3498db' };
    if (width >= 1024) return { name: 'LG', min: 1024, color: '#27ae60' };
    if (width >= 768) return { name: 'MD', min: 768, color: '#f39c12' };
    if (width >= 640) return { name: 'SM', min: 640, color: '#e67e22' };
    return { name: 'XS', min: 0, color: '#e74c3c' };
  }

  /**
   * 打印当前视口信息
   */
  function printViewportInfo() {
    const bp = getCurrentBreakpoint();
    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(
      `%c📱 视口: ${width}x${height}px | 断点: ${bp.name}`,
      `font-size: 11px; color: ${bp.color}; font-weight: bold`
    );
  }

  /**
   * 初始化
   */
  function init() {
    // 恢复之前的debug状态
    try {
      const savedState = localStorage.getItem(CONFIG.storageKey);
      if (savedState === '1') {
        document.body.classList.add(CONFIG.className);
        console.log('%c🔧 Debug模式已恢复', 'color: #27ae60');
        printLayoutStructure();
      }
    } catch (e) {
      // localStorage不可用时忽略
    }

    // 绑定快捷键
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey === CONFIG.hotkey.ctrl &&
          e.shiftKey === CONFIG.hotkey.shift &&
          e.key.toUpperCase() === CONFIG.hotkey.key) {
        e.preventDefault();
        toggleDebugMode();
      }
    });

    // 监听窗口大小变化
    let resizeTimeout;
    window.addEventListener('resize', function() {
      if (document.body.classList.contains(CONFIG.className)) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(printViewportInfo, 200);
      }
    });

    // 输出使用说明
    console.log('%c🛠️ Debug工具已加载', 'font-size: 12px; font-weight: bold; color: #3498db');
    console.log('%c快捷键: Ctrl+Shift+D 切换Debug模式', 'font-size: 11px; color: #7f8c8d');
    console.log('');
  }

  // 导出到全局
  window.DebugMode = {
    toggle: toggleDebugMode,
    printLayout: printLayoutStructure,
    printViewport: printViewportInfo,
    getBreakpoint: getCurrentBreakpoint
  };

  // DOM加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
