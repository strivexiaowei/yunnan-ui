import { HtmlToPdf } from './../../../assets/js/htmlToPdf';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit {
  canvasImg;
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
  onError(e) {}
  ngAfterViewInit() {}
  saveImgLocal() {
    new HtmlToPdf({
      title: '第一个pdf',
      template: document.querySelector('.table')
    }).getPdf();
  }
}
