import { ScratchCardComponent } from './scratch-card/scratch-card.component'; // 刮刮卡
import { SearchSelectComponent } from './search-select/search-select.component';
import { DragScrollComponent } from './drag-scroll/drag-scroll.component';
import { ButtonComponent } from './button/button.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'button', component: ButtonComponent
  },
  {
    path: 'drag-scroll', component: DragScrollComponent
  },
  {
    path: 'search-select', component: SearchSelectComponent
  },
  {
    path: 'scratch-card', component: ScratchCardComponent
  }
];

export const ViewRoutes = RouterModule.forChild(routes);
