import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './Modules/Auth/auth.module';
import { MainModule } from './Modules/Main/main.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
