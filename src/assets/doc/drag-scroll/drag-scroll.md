# drag-scroll 拖拽

可以是元素拖动滚动放大的指令

# 如何使用

在当前模块中添加指令

```javascript
import { DragScrollDirective } from './../shared/directives/drag-scroll.directive';
const DIRECTIVE = [ // 指令
  DragScrollDirective
];
@NgModule({
  imports: [
    ...
  ],
  declarations: [...DIRECTIVE]
})
```
