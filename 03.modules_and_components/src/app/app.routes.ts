import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { AboutComponent } from './pages/About/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagesOneComponent } from './pages/pages1/pages1.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: 'pages1', component: PagesOneComponent },
  { path: '**', component: NotFoundComponent },
  
];
