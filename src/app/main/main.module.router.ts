import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }    from './main';
import { AdminDashboardComponent } from './AdminDashboardComponent'
import { ManageCrisesComponent } from './ManageCrisesComponent'
const mainRoutes: Routes = [
  {
   path: 'main',
   component: MainComponent,
   children: [
     {
       path: '',
       children: [
         { path: 'crises', component: AdminDashboardComponent },
         { path: '', component: ManageCrisesComponent }
       ]
     }
   ]
 }
];
@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
