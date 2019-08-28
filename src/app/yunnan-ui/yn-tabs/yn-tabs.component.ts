import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { log } from 'util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'yn-tabs',
  templateUrl: './yn-tabs.component.html',
  styleUrls: ['./yn-tabs.component.scss']
})

export class YnTabsComponent implements OnInit, AfterViewInit {
  tabsData = [
    { name: '松江公证处' },
    { name: '松江公证处' },
    { name: '松江公证松江公证处' },
    { name: '松江公证处松江公证处' },
    { name: '松江松江公证处证处' },
    { name: '松松江公证处江公证处' },
    { name: '松江松江公证处公处' },
    { name: '松江松江公公证处' },
    { name: '松江公证处' },
    { name: '松江公证处' },
    { name: '松江公证处' },
    { name: '松江公松江公证处证处' },
    { name: '松江公证处' },
    { name: '松江公证处' },
    { name: '松江公松江公证处证处' },
    { name: '松江松江公证处公证处' },
    { name: '松江公松江公证处证处' },
    { name: '松江公松江公证处证处' },
    { name: '松江公证松江公证处处' },
    { name: '松江公证松江公证处处' },
    { name: '松江公证松江公证处' }
  ];
  tabsJson = [];
  tabsWidth;
  dom;
  indexEnd;
  constructor(private el: ElementRef) {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.tabsWidth = this.el.nativeElement.querySelector('.yn-tabs-box').offsetWidth - 60;
    this.dom = this.el.nativeElement.querySelectorAll('.yn-tabs-item');
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // console.log(event.target.innerWidth);
    this.tabsWidth = this.el.nativeElement.querySelector('.yn-tabs-box').offsetWidth - 60;
    this.dom = this.el.nativeElement.querySelectorAll('.yn-tabs-item');
    this.setIndexEnd();
  }
  setIndexEnd() {
    const { tabsData } = this;
    tabsData.forEach((e, i) => {
      this.tabsData[i]['width'] = this.dom[i].offsetWidth;
    });
    tabsData.reduce((t, c, i) => {
      if (t > this.tabsWidth) {
        this.tabsData = tabsData.slice(0, i - 1);
      }
      return t + c['width'];
    }, 0);
  }
}
