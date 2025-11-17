import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'Charts', icon: 'pi pi-chart-bar', route: '/dashboard' },
    { label: 'Tables', icon: 'pi pi-table', route: '/dashboard' },
    { label: 'UI Components', icon: 'pi pi-box', route: '/dashboard' }
  ];
}
