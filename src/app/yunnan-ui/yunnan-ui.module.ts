import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YnTabsComponent } from './yn-tabs/yn-tabs.component';
@NgModule({
  declarations: [ButtonComponent, YnTabsComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ButtonComponent, YnTabsComponent]
})
export class YunnanUiModule {
  static forRoot() {
    return { ngModule: YunnanUiModule, providers: [] };
  }
}
