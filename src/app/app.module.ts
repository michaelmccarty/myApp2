import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MewComponent } from './mew/mew.component';
import { Mew2Component } from './mew2/mew2.component';

@NgModule({
  declarations: [
    AppComponent,
    MewComponent,
    Mew2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
