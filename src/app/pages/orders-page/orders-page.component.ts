import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, InputTextModule, CalendarModule, ButtonModule],
  templateUrl: './orders-page.component.html'
})
export class OrdersPageComponent {
  readonly frequencies = signal<Option[]>([
    { label: 'AM - Frecuencia AM', value: 'am' },
    { label: 'FM - Frecuencia FM', value: 'fm' },
    { label: 'Litus TV', value: 'tv' }
  ]);

  readonly skeletons = signal<Option[]>([
    { label: 'Comercial clásico', value: 'classic' },
    { label: 'Menos es más', value: 'minimal' }
  ]);

  readonly orderTypes = signal<Option[]>([
    { label: 'Normal', value: 'normal' },
    { label: 'Campaña especial', value: 'special' }
  ]);

  readonly bands = signal<Option[]>([
    { label: 'Noticiero Central', value: 'noticiero' },
    { label: 'Magazine Deportivo', value: 'magazine' }
  ]);

  readonly materials = signal<Option[]>([
    { label: 'MAT001 - Oferta', value: 'mat001' },
    { label: 'MAT002 - Jingle', value: 'mat002' }
  ]);

  readonly orderForm = this.fb.group({
    client: ['', Validators.required],
    announcer: ['', Validators.required],
    producer: ['', Validators.required],
    frequency: [this.frequencies()[0].value, Validators.required],
    skeleton: [this.skeletons()[0].value, Validators.required],
    orderType: [this.orderTypes()[0].value, Validators.required],
    dateFrom: [new Date(), Validators.required],
    dateTo: [new Date(), Validators.required],
    band: [this.bands()[0].value, Validators.required],
    startHour: ['', Validators.required],
    endHour: ['', Validators.required],
    material: [this.materials()[0].value, Validators.required],
    notes: ['']
  });

  constructor(private readonly fb: FormBuilder) {}

  createOrder(): void {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }
    console.table(this.orderForm.getRawValue());
  }
}
