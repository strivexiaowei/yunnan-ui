import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ynDragScroll]'
})
export class DragScrollDirective implements OnInit, OnChanges {
  @Input()
  hasClose: boolean;
  public isDown = false;

  public disX; // 记录鼠标点击事件的位置 X

  public disY; // 记录鼠标点击事件的位置 Y

  private totalOffsetX = 0; // 记录总偏移量 X轴
  private totalOffsetY = 0; // 记录总偏移量 Y轴
  private scaleNum = 1; // 记录放大缩小的倍数
  constructor(public el: ElementRef) { }
  // 点击事件
  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    this.isDown = true;
    this.disX = event.clientX;
    this.disY = event.clientY;
  }

  // 监听document移动事件事件
  @HostListener('document:mousemove', ['$event'])
  onMousemove(event) {
    // 判断该元素是否被点击了。
    if (this.isDown) {
      this.el.nativeElement.style.left =
        this.totalOffsetX + event.clientX - this.disX + 'px';
      this.el.nativeElement.style.top =
        this.totalOffsetY + event.clientY - this.disY + 'px';
    }
  }

  // 监听document离开事件
  @HostListener('document:mouseup', ['$event'])
  onMouseup(event) {
    // 只用当元素移动过了，离开函数体才会触发。
    if (this.isDown) {
      this.totalOffsetX += event.clientX - this.disX;
      this.totalOffsetY += event.clientY - this.disY;
      this.isDown = false;
    }
  }

  ngOnInit() {
    this.el.nativeElement.style.position = 'relative';
  }
  ngOnChanges(changes: SimpleChanges) {
    if (!this.hasClose) {
      this.totalOffsetX = 0;
      this.totalOffsetY = 0;
      this.el.nativeElement.style.left = 0;
      this.el.nativeElement.style.top = 0;
    }
  }
  // 鼠标滚动时间
  @HostListener('mousewheel', ['$event'])
  onMousewheel($event) {
    const { deltaY } = $event;
    if (deltaY === -100) {
      this.scaleImg();
    } else {
      this.shrinkImg();
    }
  }
  // 放大
  scaleImg() {
    let { scaleNum } = this;
    scaleNum += 0.2;
    if (scaleNum < 4) {
      this.scaleNum = scaleNum;
      this.el.nativeElement.style.transform = 'scale(' + scaleNum + ')';
    }
  }
  // 缩小
  shrinkImg() {
    let { scaleNum } = this;
    scaleNum -= 0.2;
    if (scaleNum > 1) {
      this.scaleNum = scaleNum;
      this.el.nativeElement.style.transform = 'scale(' + scaleNum + ')';
    }
  }
}
