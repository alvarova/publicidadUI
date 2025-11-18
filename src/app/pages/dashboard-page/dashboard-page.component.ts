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
      title: 'Clientes',
      description: 'Gestiona la información institucional y comercial',
      route: '/clientes',
      icon: 'pi pi-users',
      tone: 'from-brand/20 to-brand/0'
    },
    {
      title: 'Órdenes',
      description: 'Crea y administra órdenes de publicidad',
      route: '/ordenes',
      icon: 'pi pi-clipboard',
      tone: 'from-[#0088AA]/20 to-[#0088AA]/0'
    },
    {
      title: 'Materiales',
      description: 'Administra materiales, jingles y assets multimedia',
      route: '/ordenes',
      icon: 'pi pi-cloud-upload',
      tone: 'from-accent/20 to-accent/0'
    },
    {
      title: 'Programación diaria',
      description: 'Diseña la parrilla y valida reglas en tiempo real',
      route: '/programacion',
      icon: 'pi pi-calendar',
      tone: 'from-ink/10 to-ink/0'
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
