import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'yn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  private size = 'default';
  private type = 'default';
  @Input()
  set ynSize(ynSize: string) {
    this.size = ynSize;
  }
  get ynSize(): string {
    return this.size;
  }
  @Input()
  set ynType(ynType: string) {
    this.type = ynType;
  }
  get ynType(): string {
    return this.type;
  }
  constructor() { }

  ngOnInit() {
  }

}
