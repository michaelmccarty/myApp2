import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './Modules/Auth/auth.module';
import { MainModule } from './Modules/Main/main.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { StoreModule } from "@ngrx/store";
import { chatReducer} from "./store/chat/chat.reducer";

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AuthModule,
    MainModule,
    StoreModule.forRoot({chat: chatReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
