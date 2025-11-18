import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { MaterialsPageComponent } from './pages/materials-page/materials-page.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardPageComponent, title: 'Gest-ON-AIR | Inicio' },
  { path: 'clientes', component: ClientsPageComponent, title: 'Gest-ON-AIR | Clientes' },
  { path: 'ordenes', component: OrdersPageComponent, title: 'Gest-ON-AIR | Órdenes' },
  { path: 'programacion', component: SchedulePageComponent, title: 'Gest-ON-AIR | Programación' },
  { path: 'programacion-diaria', component: SchedulePageComponent, title: 'Gest-ON-AIR | Programación diaria' },
  { path: 'materiales', component: MaterialsPageComponent, title: 'Gest-ON-AIR | Materiales' },
  { path: 'configuracion', component: SettingsPageComponent, title: 'Gest-ON-AIR | Configuración' },
  { path: '**', redirectTo: '' }
];
