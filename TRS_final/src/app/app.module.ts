import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComComponent } from './main.com/main.com.component';
import { Rou1Component } from './rou1/rou1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComComponent,
    Rou1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }