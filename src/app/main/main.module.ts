import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main';
import { MainRoutingModule } from './main.module.router'
import { ManageCrisesComponent } from './ManageCrisesComponent'
import { AdminDashboardComponent } from './AdminDashboardComponent'
@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    ManageCrisesComponent,
    AdminDashboardComponent
  ]
})
export class AdminModule {}
