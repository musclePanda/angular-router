import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main'
const appRoutes: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' }
  // { path: 'main',  loadChildren: './main/main.module#AdminModule' },
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
