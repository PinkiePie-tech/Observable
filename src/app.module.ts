import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompteurComponent } from './component/compteur.component';
import { MarionComponent } from './component/marion.component';

@NgModule({
  declarations: [AppComponent, CompteurComponent, MarionComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
