import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload' ;
// import { FileSelectDirective} from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FileUploadModule,
    // FileSelectDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
