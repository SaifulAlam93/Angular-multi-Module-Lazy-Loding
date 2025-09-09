import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { PipreExComponent } from './pipre-ex/pipre-ex.component';
import { TruncatePipe } from '../pipes/truncate.pipe';

import localeBn from '@angular/common/locales/bn';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeBn, 'bn-BD');

@NgModule({
  declarations: [
    AdminComponent,
    AdminLayoutComponent,
    UsersComponent,
    ReportsComponent,
    PipreExComponent,
    TruncatePipe
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'bn-BD' } // set app locale
  ],


  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
