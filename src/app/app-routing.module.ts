import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'passwordGenerator',
    loadChildren: () =>
      import('./password-generator/password-generator.module').then(
        (m) => m.PasswordGeneratorModule
      ),
  },
  {
    path: 'kundenNummer',
    loadChildren: () =>
      import('./kundennummer/kundennummer.module').then(
        (m) => m.KundennummerModule
      ),
  },
  {
    path: 'zeichenkette',
    loadChildren: () =>
      import('./zeichenkette/zeichenkette.module').then(
        (m) => m.ZeichenketteModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
