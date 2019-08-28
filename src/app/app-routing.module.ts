import { ViewModule } from './view/view.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ViewModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
