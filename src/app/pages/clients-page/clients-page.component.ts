import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { toSignal } from '@angular/core/rxjs-interop';

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, InputTextModule, InputMaskModule, ButtonModule],
  templateUrl: './clients-page.component.html'
})
export class ClientsPageComponent {
  readonly registerTypes = signal<Option[]>([
    { label: 'Cliente', value: 'cliente' },
    { label: 'Agencia', value: 'agencia' },
    { label: 'Canje', value: 'canje' }
  ]);

  readonly provinces = signal<Option[]>([
    { label: 'Santa Fe', value: 'SF' },
    { label: 'Entre Ríos', value: 'ER' },
    { label: 'Córdoba', value: 'CB' },
    { label: 'Buenos Aires', value: 'BA' }
  ]);

  readonly clientForm = this.fb.group({
    registerType: this.fb.control(this.registerTypes()[0].value, Validators.required),
    businessName: this.fb.control('', Validators.required),
    tradeName: this.fb.control('', Validators.required),
    taxId: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    phone: this.fb.control('', Validators.required),
    address: this.fb.control('', Validators.required),
    city: this.fb.control('', Validators.required),
    province: this.fb.control(this.provinces()[0].value, Validators.required)
  });

  private readonly feedbackCopy = {
    success: 'Cliente listo para guardar en tu base institucional.',
    error: 'Revisa los campos destacados para continuar.'
  };

  readonly formStatus = toSignal(this.clientForm.statusChanges, {
    initialValue: this.clientForm.status
  });

  readonly formMessage = computed(() =>
    this.formStatus() === 'VALID' ? this.feedbackCopy.success : this.feedbackCopy.error
  );

  constructor(private readonly fb: FormBuilder) {}

  saveClient(): void {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return;
    }

    // Aquí podrías conectar con el backend.
    console.table(this.clientForm.getRawValue());
    this.resetForm();
  }

  resetForm(): void {
    this.clientForm.reset({
      registerType: this.registerTypes()[0].value,
      province: this.provinces()[0].value
    });
  }
}
