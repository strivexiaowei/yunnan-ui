import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yunnan-ui';
  menu = [
    { name: '按钮', url: 'button' },
    { name: '滚动和拖拽', url: 'drag-scroll' },
    { name: '下拉搜索的使用', url: 'search-select' },
    { name: '刮刮卡', url: 'scratch-card' },
    { name: 'html转pdf', url: 'htmltopdf' },
    { name: 'L7-AntV的用法', url: 'l7-antv' }
  ];
  constructor() {}
}
