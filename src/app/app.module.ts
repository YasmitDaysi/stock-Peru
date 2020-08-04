import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import {MatButtonModule} from '@angular/material/button';


import 'hammerjs';
 





@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
