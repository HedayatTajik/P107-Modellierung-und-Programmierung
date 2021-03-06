import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordGeneratorRoutingModule } from './password-generator-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [ PasswordGeneratorComponent ],
  imports: [
    CommonModule,
    PasswordGeneratorRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ]
})
export class PasswordGeneratorModule { }
