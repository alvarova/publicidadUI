import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly navItems = signal<NavItem[]>([
    { icon: 'pi pi-broadcast-tower', label: 'Programación diaria', route: '' },
    { icon: 'pi pi-users', label: 'Clientes', route: '/clientes' },
    { icon: 'pi pi-briefcase', label: 'Órdenes', route: '/ordenes' },
    { icon: 'pi pi-calendar', label: 'Programación', route: '/programacion' }
  ]);

  readonly user = signal({
    name: 'Coordinación Comercial',
    role: 'LT10 Sistema Multimedial'
  });
}
