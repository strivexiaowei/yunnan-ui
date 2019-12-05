import { HtmlToPdf } from './../../../assets/js/htmlToPdf';
import { Component, OnInit, AfterViewInit } from '@angular/core';

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

  }
}
