import { HtmlToPdf } from './../../../assets/js/htmlToPdf';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html'
})
export class HtmltopdfComponent implements OnInit, AfterViewInit  {

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
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
