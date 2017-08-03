import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent }    from './heroes';


const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
