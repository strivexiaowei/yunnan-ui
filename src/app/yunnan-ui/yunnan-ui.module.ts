import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ButtonComponent]
})
export class YunnanUiModule {
  static forRoot() {
    return { ngModule: YunnanUiModule, providers: [] };
  }
}
