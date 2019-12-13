import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
@NgModule({
  declarations: [ButtonComponent, TabsComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ButtonComponent, TabsComponent]
})
export class YunnanUiModule {
  static forRoot() {
    return { ngModule: YunnanUiModule, providers: [] };
  }
}
