import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordGeneratorRoutingModule } from './password-generator-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ PasswordGeneratorComponent ],
  imports: [
    CommonModule,
    PasswordGeneratorRoutingModule,
    SharedModule,
  ]
})
export class PasswordGeneratorModule { }
