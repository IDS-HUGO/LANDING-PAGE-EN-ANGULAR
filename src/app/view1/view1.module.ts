import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Section2Component } from './section2/section2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    Section2Component,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    Section2Component
  ]
})
export class VIEW1Module {
  
 }
