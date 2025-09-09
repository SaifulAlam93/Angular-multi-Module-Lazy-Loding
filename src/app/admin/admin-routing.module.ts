import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PipreExComponent } from './pipre-ex/pipre-ex.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent, // Sidebar/Top Nav here
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'layout', component: AdminLayoutComponent },
      { path: 'pipe', component: PipreExComponent },

      { path: '', redirectTo: 'users', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
