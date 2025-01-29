import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    DialogComponent
  ],
})
export class HeaderComponent {
  showRequestDialog: boolean = false;

  constructor() {}

  showMenu() {
    const menuItem = document.getElementById('menu');
    if (menuItem) {
      menuItem.classList.toggle('active');
    }
  }

  showRequestForm() {
    console.log(this.showRequestDialog);
    this.showRequestDialog = true;
  }

  

}
