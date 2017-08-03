import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './heroes';
import { HeroRoutingModule } from './heroes.module.router'
@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroComponent,
  ]
})
export class HeroesModule {}
