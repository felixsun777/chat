import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload' ;
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FileUploadModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'friends/:username',
        component: FriendsComponent
      },
      {
        path: 'chat/:user_initiate/:user_finish',
        component: ChatComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
