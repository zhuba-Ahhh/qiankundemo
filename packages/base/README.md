# Base 基石项目所遇问题记录

## 样式

### 子应用容器样式

```css
div[id^='__qiankun_microapp_wrapper_'] {
  height: 100%;
}
```

## 交互

### 路由

使用 [use-navigate](https://reactrouter.com/en/6.15.0/hooks/use-navigate) 时需要在外包裹一层Router内才能使用
