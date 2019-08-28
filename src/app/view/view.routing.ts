import { ButtonComponent } from './button/button.component';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
const routes: Routes = [
  {
    path: 'button', component: ButtonComponent
  },
  {
    path: 'tabs', component: TabsComponent
  }
];

export const ViewRoutes = RouterModule.forChild(routes);
