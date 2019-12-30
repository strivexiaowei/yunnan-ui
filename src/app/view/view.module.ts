import { HttpClientModule } from '@angular/common/http';
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
import { BrowserModule } from '@angular/platform-browser';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { HttpRestClientComponent } from './http-rest-client/http-rest-client.component';
import { TabsComponent } from './tabs/tabs.component';
import { BserqxComponent } from './bserqx/bserqx.component';
import { TypescriptComponent } from './typescript/typescript.component';
const COMPONENT = [
  // 组件
  TabsComponent,
  ButtonComponent,
  DragScrollComponent,
  SearchSelectComponent,
  ScratchCardComponent,
  HtmltopdfComponent,
  L7AntvComponent,
  RxjsDemoComponent,
  HttpRestClientComponent,
  BserqxComponent,
  TypescriptComponent
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
    HttpClientModule,
    BrowserModule,
    MarkdownModule.forChild()
  ],
  declarations: [...COMPONENT, ...DIRECTIVE]
})
export class ViewModule { }
