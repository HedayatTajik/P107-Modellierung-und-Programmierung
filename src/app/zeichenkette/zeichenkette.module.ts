import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeichenketteRoutingModule } from './zeichenkette-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ZeichenketteRoutingModule,
    SharedModule
  ]
})
export class ZeichenketteModule { }
