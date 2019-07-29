import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {ContactoComponent} from './contact/contacto.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(appRoutes);
