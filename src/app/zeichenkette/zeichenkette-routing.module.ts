import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZeichenketteComponent } from './zeichenkette/zeichenkette.component';

const routes: Routes = [
  { path: '', component: ZeichenketteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZeichenketteRoutingModule {}
