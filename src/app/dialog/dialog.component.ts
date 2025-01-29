import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @ViewChild('dialog') dialog!: ElementRef;
  @ViewChild('dialogForm') dialogForm!: NgForm;
  @Output() visibleChange = new EventEmitter<boolean>();
  name = new FormControl('');
  category = new FormControl('');
  request = new FormControl('');
  categories: any[] = [
    { name: 'Technical Support', code: 'tech' },
    { name: 'Billing', code: 'bill' },
    { name: 'Feature Request', code: 'feature' },
    { name: 'Other', code: 'other' }
  ];
  private _visible: boolean = false;

  @Input() set visible(value: boolean) { 
    
    if (value && value !== this._visible) {
      this.dialog.nativeElement.showModal();
    }
    if (!value && value !== this._visible) {
      this.dialog.nativeElement.close();
    }
    this._visible = value; 
  };

  get visible() { return this._visible; }

  constructor() {   }

  onSubmitRequest() { 
    
    // if (this.category.value && this.name.value && this.request.value) {
      this.visible = false;
      this.visibleChange.emit(this.visible);
    // }
  }
}
