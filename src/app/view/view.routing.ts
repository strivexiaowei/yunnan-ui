import { L7AntvComponent } from './l7-antv/l7-antv.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { ScratchCardComponent } from './scratch-card/scratch-card.component'; // 刮刮卡
import { SearchSelectComponent } from './search-select/search-select.component';
import { DragScrollComponent } from './drag-scroll/drag-scroll.component';
import { ButtonComponent } from './button/button.component';
import { Routes, RouterModule } from '@angular/router';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';

const routes: Routes = [
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'drag-scroll',
    component: DragScrollComponent
  },
  {
    path: 'search-select',
    component: SearchSelectComponent
  },
  {
    path: 'scratch-card',
    component: ScratchCardComponent
  },
  {
    path: 'htmltopdf',
    component: HtmltopdfComponent
  },
  {
    path: 'l7-antv',
    component: L7AntvComponent
  },
  {
    path: 'rxjs-demo',
    component: RxjsDemoComponent
  }
];

export const ViewRoutes = RouterModule.forChild(routes);
