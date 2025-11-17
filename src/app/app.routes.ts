import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardPageComponent, title: 'Gest-ON-AIR | Inicio' },
  { path: 'clientes', component: ClientsPageComponent, title: 'Gest-ON-AIR | Clientes' },
  { path: 'ordenes', component: OrdersPageComponent, title: 'Gest-ON-AIR | Órdenes' },
  { path: 'programacion', component: SchedulePageComponent, title: 'Gest-ON-AIR | Programación' },
  { path: '**', redirectTo: '' }
];
