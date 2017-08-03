import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent }    from './heroes';
import { DetilheroComponent } from './DetilHero'

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroComponent },
  { path: 'hero/:id', component: DetilheroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
