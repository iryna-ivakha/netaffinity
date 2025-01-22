import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @ViewChild('dialog') dialog!: ElementRef;
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

  ngAfterViewInit() {
    console.log(this.dialog.nativeElement);
  }

  onSubmitRequest() {
    console.log('Submit Request');
    this.visible = false;
  }
}
