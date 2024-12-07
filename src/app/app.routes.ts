import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'products/:id', loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent) },
  { path: 'terms', loadComponent: () => import('./components/terms/terms.component').then(m => m.TermsComponent) },
  { path: '**', pathMatch: 'full', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) }
];
