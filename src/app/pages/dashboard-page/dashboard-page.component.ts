import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

interface ModuleCard {
  title: string;
  description: string;
  route: string;
  icon: string;
  tone: string;
}

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {
  readonly modules = signal<ModuleCard[]>([
    {
      title: 'Programación diaria',
      description: 'Diseña la parrilla y valida reglas en tiempo real',
      route: '/programacion',
      icon: 'pi pi-broadcast-tower',
      tone: 'from-brand/30 to-brand/5'
    },
    {
      title: 'Clientes',
      description: 'Gestiona la información institucional y comercial',
      route: '/clientes',
      icon: 'pi pi-users',
      tone: 'from-orange-500/30 to-orange-500/5'
    },
    {
      title: 'Órdenes',
      description: 'Crea y administra órdenes de publicidad',
      route: '/ordenes',
      icon: 'pi pi-briefcase',
      tone: 'from-emerald-500/30 to-emerald-500/5'
    },
    {
      title: 'Materiales',
      description: 'Administra materiales y tandas multimediales',
      route: '/ordenes',
      icon: 'pi pi-box',
      tone: 'from-accent/30 to-accent/5'
    }
  ]);

  readonly todaySummary = signal({
    active: 0,
    activeMessage: 'No hay órdenes activas para la fecha actual.',
    due: 0,
    dueMessage: 'No hay vencimientos dentro de los próximos 3 días.'
  });

  readonly dueLabel = computed(() =>
    this.todaySummary().due > 0 ? 'Atención' : 'Sin vencimientos'
  );
}
