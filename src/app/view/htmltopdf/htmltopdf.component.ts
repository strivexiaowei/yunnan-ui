import { HtmlToPdf } from './../../../assets/js/htmlToPdf';
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var L2Dwidget: any;
@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html'
})
export class HtmltopdfComponent implements OnInit, AfterViewInit  {
  constructor() {}

  ngOnInit() {}
  getPDF() {
    new HtmlToPdf({
      title: '第一个pdf',
      template: document.querySelector('.html-to-pdf')
    }).getPdf();
  }

  ngAfterViewInit() {
    L2Dwidget.init({
      pluginRootPath: 'assets/js/live2dw',
      pluginJsPath: 'lib/',
      pluginModelPath: 'live2d-widget-model-koharu/assets/',
      tagMode: false,
      debug: false,
      model: { jsonPath: 'assets/js/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
      display: { position: 'right', width: 150, height: 300 },
      mobile: { show: true },
      log: false
    })
  }
}
