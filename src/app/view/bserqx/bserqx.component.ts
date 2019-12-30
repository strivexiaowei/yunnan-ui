import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-bserqx',
  templateUrl: './bserqx.component.html',
  styleUrls: ['./bserqx.component.scss']
})
export class BserqxComponent implements OnInit {
  @ViewChild('bserqx') bserqxdom: ElementRef;
  @ViewChild('sybserqx') sybserqxdom: ElementRef;
  @ViewChild('chat') chatdom: ElementRef;

  constructor() { }
  ngOnInit() {
    this.getBserqx();
    this.getSybserqxdom();
    this.getChatdom();
  }

  getBserqx() {
    const c = this.bserqxdom.nativeElement;
    const content = c.getContext('2d');
    content.strokeStyle = '#FF5D43';
    content.beginPath();
    content.moveTo(0, 200);
    content.quadraticCurveTo(75, 50, 300, 200);
    content.stroke();
    content.globalCompositeOperation = 'source-over';    // 目标图像上显示源图像
    content.strokeStyle = '#f0f';
    content.beginPath();
    content.moveTo(75, 50);
    content.lineTo(0, 200);
    content.moveTo(75, 50);
    content.lineTo(300, 200);
    content.stroke();
  }

  getSybserqxdom() {
    const c = this.sybserqxdom.nativeElement;
    const content = c.getContext('2d');
    content.strokeStyle = '#FF5D43';
    content.beginPath();
    content.moveTo(25, 175);
    content.bezierCurveTo(60, 80, 150, 30, 170, 150);
    content.stroke();
    content.globalCompositeOperation = 'source-over';    // 目标图像上显示源图像
    // 绘制起点、控制点、终点
    content.strokeStyle = 'red';
    content.beginPath();
    content.moveTo(25, 175);
    content.lineTo(60, 80);
    content.lineTo(150, 30);
    content.lineTo(170, 150);
    content.stroke();
  }

  getChatdom() {
    const c = this.chatdom.nativeElement;
    const content = c.getContext('2d');
    content.beginPath();
    content.moveTo(75, 25);
    content.quadraticCurveTo(25, 25, 25, 62.5);
    content.quadraticCurveTo(25, 100, 50, 100);
    content.quadraticCurveTo(50, 120, 30, 125);
    content.quadraticCurveTo(60, 120, 65, 100)
    content.quadraticCurveTo(125, 100, 125, 62.5);
    content.quadraticCurveTo(125, 25, 75, 25);
    content.stroke();
  }
}
