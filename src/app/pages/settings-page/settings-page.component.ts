import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-page.component.html'
})
export class SettingsPageComponent {
  readonly dark = signal<boolean>(localStorage.getItem('theme') === 'dark');

  constructor() {
    // apply initial theme
    this.applyTheme(this.dark());
    effect(() => {
      this.applyTheme(this.dark());
    });
  }

  toggleTheme(): void {
    this.dark.set(!this.dark());
    localStorage.setItem('theme', this.dark() ? 'dark' : 'light');
  }

  private applyTheme(enable: boolean) {
    const root = document.documentElement;
    if (enable) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}
