import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule  // Ajoute cette ligne
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
