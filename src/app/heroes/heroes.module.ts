import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './heroes';
import { HeroRoutingModule } from './heroes.module.router'
import { HeroService } from './heroes.service'
import { DetilheroComponent } from './DetilHero'
import { FormsModule }    from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [
    HeroComponent,
    DetilheroComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}
