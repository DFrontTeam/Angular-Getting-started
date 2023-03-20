import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'directivas',
    loadChildren: () =>
      import('./directives/directives.module').then((m) => m.DirectivesModule),
    title: 'Directivas',
  },
  {
    path: 'componentes',
    loadChildren: () =>
      import('./components/components.module').then((m) => m.ComponentsModule),
    title: 'Componentes',
  },
  {
    path: 'formularios',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormsModule),
    title: 'Formularios',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
