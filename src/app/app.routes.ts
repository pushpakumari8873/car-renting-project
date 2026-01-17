import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { LayoutComponent } from './pages/layout/layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { VehiclesComponent } from './pages/vehicles/vehicles';
import { BookingsComponent } from './pages/bookings/bookings';
import { CustomerComponent } from './pages/customer/customer';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'vehicles',
        component: VehiclesComponent
      },
      {
        path: 'bookings',
        component: BookingsComponent
      },
      {
        path: 'customers',
        component: CustomerComponent
      }
    ]
  }
];
