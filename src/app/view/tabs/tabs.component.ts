import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs = [
    '齐来大厦',
    '漕河泾开发区',
    '宝山区',
    '新疆维吾尔自治州',
    '快乐',
    '淘宝打算买',
    '淘宝打算买',
    '淘宝打算买',
    '淘宝打算买',
    '淘宝打算买'
  ]
  constructor() { }

  ngOnInit() {
  }

}
