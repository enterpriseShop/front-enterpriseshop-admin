import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login-default/login-default.component').then(c => c.LoginDefaultComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/login/login-user/login-user.component').then(c => c.LoginUserComponent),
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./pages/login/login-forgot/login-forgot.component').then(c => c.LoginForgotComponent),
      }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dash-default/dash-default.component').then(c => c.DashDefaultComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/dashboard/dash-content/dash-content.component').then(c => c.DashContentComponent),
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products/product-default/product-default.component').then(c => c.ProductDefaultComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/products/components/product-list/product-list.component').then(c => c.ProductListComponent),
          },
          {
            path: 'edit',
            loadComponent: () => import('./pages/products/components/product-edit/product-edit.component').then(c => c.ProductEditComponent),
          }
        ]
      },
      {
        path: 'categories',
        loadComponent: () => import('./pages/categories/category-default/category-default.component').then(c => c.CategoryDefaultComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/categories/components/category-list/category-list.component').then(c => c.CategoryListComponent),
          },
          {
            path: 'edit',
            loadComponent: () => import('./pages/categories/components/category-edit/category-edit.component').then(c => c.CategoryEditComponent),
          }
        ]
      }
    ]
  },
];
