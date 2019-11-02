import { L7AntvComponent } from './l7-antv/l7-antv.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { ScratchCardComponent } from './scratch-card/scratch-card.component';
import { SearchSelectComponent } from './search-select/search-select.component';
import { DragScrollDirective } from './../shared/directives/drag-scroll.directive';
import { DragScrollComponent } from './drag-scroll/drag-scroll.component';
import { ButtonComponent } from './button/button.component';
import { ViewRoutes } from './view.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YunnanUiModule } from '../yunnan-ui/yunnan-ui.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const COMPONENT = [
  // 组件
  ButtonComponent,
  DragScrollComponent,
  SearchSelectComponent,
  ScratchCardComponent,
  HtmltopdfComponent,
  L7AntvComponent
];
const DIRECTIVE = [
  // 指令
  DragScrollDirective
];
@NgModule({
  imports: [
    CommonModule,
    ViewRoutes,
    YunnanUiModule,
    NgZorroAntdModule,
    MarkdownModule.forChild()
  ],
  declarations: [...COMPONENT, ...DIRECTIVE]
})
export class ViewModule {}
