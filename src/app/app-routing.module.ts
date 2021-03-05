import { PasswordGeneratorComponent } from './password-generator/password-generator/password-generator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'passwordGenerator',
    loadChildren: () =>
      import('./password-generator/password-generator.module').then(
        (m) => m.PasswordGeneratorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
