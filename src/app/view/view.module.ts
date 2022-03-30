import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenComponent } from './screen/screen.component';
import { NavbarComponent } from './nav/navbar.component';
import { ViewRoutingModule } from './view-routing.module';

import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';


@NgModule({
  declarations: [
    ScreenComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SidebarModule,
    ButtonModule,
    ListboxModule,
    GalleriaModule,
    ImageModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ViewModule { }
