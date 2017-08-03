import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './main/main.module'
import { HeroesModule } from './heroes/heroes.module'
import { ComposeMessageComponent } from './ComposeMessageComponent'
@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
