import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLayoutComponent,
    UsersComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
