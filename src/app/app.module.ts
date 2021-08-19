import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng9RutModule } from 'ng9-rut';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng9RutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
