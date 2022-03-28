import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenComponent } from './screen.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    ScreenComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ScreenModule { }
