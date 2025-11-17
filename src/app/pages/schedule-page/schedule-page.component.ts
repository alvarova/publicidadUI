import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

interface BlockMaterial {
  title: string;
  type: 'APERTURA' | 'COMERCIAL' | 'CIERRE';
  duration: string;
  tag: 'TANDA FIJA' | 'COMERCIAL' | 'FINAL';
}

interface ScheduleBlock {
  hour: string;
  show: string;
  description: string;
  duration: string;
  total: string;
  items: BlockMaterial[];
}

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuModule],
  templateUrl: './schedule-page.component.html'
})
export class SchedulePageComponent {
  readonly menuItems = signal<MenuItem[]>([
    { label: 'Exportar CSV', icon: 'pi pi-upload' },
    { label: 'Exportar Dinesat', icon: 'pi pi-share-alt' },
    { label: 'Limpiar parrilla', icon: 'pi pi-refresh' },
    { label: 'Restaurar demo', icon: 'pi pi-sync' }
  ]);

  readonly blocks = signal<ScheduleBlock[]>([
    {
      hour: '08:00:00',
      show: 'Noticiero Central',
      description: 'Resumen informativo de la mañana',
      duration: '120 min',
      total: '00:47',
      items: [
        { title: 'Tanda Apertura', type: 'APERTURA', duration: '00:20', tag: 'TANDA FIJA' },
        { title: 'Comercial del Norte (Oferta)', type: 'COMERCIAL', duration: '00:15', tag: 'COMERCIAL' },
        { title: 'Final Tanda MP (Jingle)', type: 'CIERRE', duration: '00:12', tag: 'FINAL' }
      ]
    },
    {
      hour: '09:00:00',
      show: 'Magazine Deportivo',
      description: 'Agenda deportiva de la región',
      duration: '90 min',
      total: '00:44',
      items: [
        { title: 'Tanda Sponsors', type: 'APERTURA', duration: '00:22', tag: 'TANDA FIJA' },
        { title: 'Banco Litoral (Beneficio MP)', type: 'COMERCIAL', duration: '00:12', tag: 'COMERCIAL' },
        { title: 'Final Tanda MP (Jingle)', type: 'CIERRE', duration: '00:10', tag: 'FINAL' }
      ]
    }
  ]);
}
