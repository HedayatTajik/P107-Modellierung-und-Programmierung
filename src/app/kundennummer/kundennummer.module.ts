import { KundennummerComponent } from './kundennummer/kundennummer.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KundennummerRoutingModule } from './kundennummer-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [KundennummerComponent],
  imports: [CommonModule, KundennummerRoutingModule, SharedModule],
})
export class KundennummerModule {}
