import { Component, OnInit } from '@angular/core';

declare var L2Dwidget: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yunnan-ui';
  menu = [
    { name: '按钮', url: 'button' },
    { name: '滚动和拖拽', url: 'drag-scroll' },
    { name: '下拉搜索的使用', url: 'search-select' },
    { name: '刮刮卡', url: 'scratch-card' },
    { name: 'html转pdf', url: 'htmltopdf' },
    { name: 'L7-AntV的用法', url: 'l7-antv' },
    { name: 'rxjs的使用', url: 'rxjs-demo' },
    { name: 'http服务在封装', url: 'http-rest-client' },
    { name: 'tabs导航', url: 'tabs' }
  ];
  constructor() {}
  ngOnInit () {
    L2Dwidget.init({
      pluginRootPath: 'assets/js/live2dw',
      pluginJsPath: 'lib/',
      pluginModelPath: 'live2d-widget-model-koharu/assets/',
      tagMode: false,
      debug: false,
      model: { jsonPath: 'assets/js/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
      display: { position: 'right', width: 200, height: 400 },
      mobile: { show: true },
      log: false
    })
  }
}
