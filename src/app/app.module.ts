import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './Modules/Auth/auth.module';
import { MainModule } from './Modules/Main/main.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
>>>>>>> 772b4145b70838af49e5ee5823a4f26f3ebde4ae

import { AppComponent } from './app.component';

@NgModule({
<<<<<<< HEAD
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
=======
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AuthModule,
    MainModule
>>>>>>> 772b4145b70838af49e5ee5823a4f26f3ebde4ae
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule {}
>>>>>>> 772b4145b70838af49e5ee5823a4f26f3ebde4ae
