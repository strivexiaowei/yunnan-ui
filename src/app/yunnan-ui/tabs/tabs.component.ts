import { Component, OnInit, Input, ElementRef, AfterViewInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { observable, from, Observable } from 'rxjs';
import { reduce, map } from 'rxjs/operators';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'yn-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
  @Input() tabs: string[];
  viewDomWidth: number;
  boxDomWidth: number;
  showArrow: boolean;
  boxDomLeft = 0;
  constructor(private el: ElementRef, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('hehe');
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    const doms: ElementRef = this.el.nativeElement.querySelectorAll('.yn-tab');
    this.viewDomWidth = this.el.nativeElement.querySelector('.yn-tabs-wrap').offsetWidth;
    console.log(doms);
    this.getDomsTotal(doms).subscribe((total: number) => {
      this.boxDomWidth = total;
      this.el.nativeElement.querySelector('.yn-tabs-box').style.width = total + 'px';
      this.showArrow = total + 64 > this.viewDomWidth;
      console.log(this.showArrow);
      this.cd.detectChanges();
    });
  }

  getDomsTotal(doms): Observable<number> {
    return from(doms).pipe(
      map((p: any) => p.offsetWidth + 4),
      reduce((total: number, current: number) => total + current, 0)
    )
  }

  clickArrow(arrowType: string) {
    console.log(arrowType);
    const { boxDomLeft } = this;
    if (arrowType === 'left') {
      if (Math.abs(boxDomLeft) < 100) {
        this.boxDomLeft = 0;
      } else {
        this.boxDomLeft = boxDomLeft + 100;
      }
    } else {
      console.log(this.boxDomWidth - this.viewDomWidth - 64 - 100);
      const numFlag = Math.abs(boxDomLeft) > this.boxDomWidth - this.viewDomWidth + 64 - 100;
      if (numFlag) {
        this.boxDomLeft = -(this.boxDomWidth - this.viewDomWidth + 64);
      } else {
        this.boxDomLeft = boxDomLeft - 100;
      }
      console.log(this.boxDomLeft);
    }
    this.cd.detectChanges();
  }
}
