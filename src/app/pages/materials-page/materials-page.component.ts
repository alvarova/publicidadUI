import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

interface Material {
  code: string;
  title: string;
  client: string;
  type: string;
  duration: string; // seconds as string
  file?: string;
  notes?: string;
}

@Component({
  selector: 'app-materials-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, Select],
  templateUrl: './materials-page.component.html'
})
export class MaterialsPageComponent {
  readonly materials = signal<Material[]>([
    {
      code: 'MAT001',
      type: 'AUDIO',
      title: 'Aviso Comercial del Norte - Verano',
      duration: '30',
      client: 'CL1001',
      file: 'comercial_norte_verano.mp3'
    }
  ]);

  showForm = signal(false);

  readonly clients = signal([
    { label: 'CL1001 - Comercial del Norte', value: 'CL1001' },
    { label: 'CL1002 - Otro Cliente', value: 'CL1002' }
  ]);

  readonly types = signal([
    { label: 'Audio', value: 'AUDIO' },
    { label: 'Video', value: 'VIDEO' }
  ]);

  materialForm = this.fb.group({
    title: ['', Validators.required],
    client: ['', Validators.required],
    type: ['AUDIO', Validators.required],
    duration: ['30', Validators.required],
    file: [''],
    notes: ['']
  });

  constructor(private readonly fb: FormBuilder) {}

  newMaterial(): void {
    this.showForm.set(true);
    this.materialForm.reset({ type: 'AUDIO', duration: '30' });
  }

  saveMaterial(): void {
    if (this.materialForm.invalid) {
      this.materialForm.markAllAsTouched();
      return;
    }
    const v = this.materialForm.getRawValue();
    const m: Material = {
      code: `MAT${Math.floor(Math.random() * 900 + 100)}`,
      title: v.title || 'Sin título',
      client: v.client || 'N/D',
      type: v.type || 'AUDIO',
      duration: String(v.duration ?? '0'),
      file: v.file || '',
      notes: v.notes || ''
    };
    this.materials.update(arr => [m, ...arr]);
    this.showForm.set(false);
  }

  cancel(): void {
    this.showForm.set(false);
  }

  exportJson(): void {
    const data = JSON.stringify(this.materials(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'materials.json';
    a.click();
    URL.revokeObjectURL(url);
  }
}

