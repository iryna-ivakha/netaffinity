import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, MenuComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'NetAffinity';
  data: unknown[] = [];
  
}
