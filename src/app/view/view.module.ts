import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';
import { ViewRoutes } from './view.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YunnanUiModule } from '../yunnan-ui/yunnan-ui.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
@NgModule({
  imports: [
    CommonModule,
    ViewRoutes,
    YunnanUiModule,
    MarkdownModule.forChild()
  ],
  declarations: [ButtonComponent, TabsComponent]
})
export class ViewModule { }
