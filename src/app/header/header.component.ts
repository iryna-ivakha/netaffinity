import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

interface RequestForm {
  name: string;
  category: string;
  request: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    TextareaModule,
    ButtonModule,
    FloatLabel,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
})
export class HeaderComponent {
  items: Array<{label: string, icon: string, url: string}> = [];
  home: {label: string, icon: string, url: string} = {label: 'home', icon: '', url: './'};
  
  showRequestDialog: boolean = false;
  requestFormGroup: FormGroup;
  
  categories: any[] = [
    { name: 'Technical Support', code: 'tech' },
    { name: 'Billing', code: 'bill' },
    { name: 'Feature Request', code: 'feature' },
    { name: 'Other', code: 'other' }
  ];

  constructor(private fb: FormBuilder) {
    this.requestFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      category: ['', Validators.required],
      request: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  showMenu() {
    const menuItem = document.getElementById('menu');
    if (menuItem) {
      menuItem.classList.toggle('active');
    }
  }

  showRequestForm() {
    this.showRequestDialog = true;
  }

  onSubmitRequest() {
    if (this.requestFormGroup.valid) {
      console.log('Form submitted:', this.requestFormGroup.value);
      this.showRequestDialog = false;
      this.requestFormGroup.reset();
    } else {
      Object.keys(this.requestFormGroup.controls).forEach(key => {
        const control = this.requestFormGroup.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.requestFormGroup.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return 'This field is required';
      }
      if (control.errors['minlength']) {
        return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
      }
      if (control.errors['maxlength']) {
        return `Maximum length is ${control.errors['maxlength'].requiredLength} characters`;
      }
    }
    return '';
  }
}
