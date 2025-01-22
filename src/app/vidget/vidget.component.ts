import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartDatagroup } from '../models/data-models';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-vidget',
  imports: [ChartModule],
  templateUrl: './vidget.component.html',
  styleUrl: './vidget.component.scss'
})

export class VidgetComponent {
  type: ChartType = 'line';
  title: string = 'Vidget';
  options: unknown[] = [];
  data: unknown[] = [];

  @Input() set chartData(value: ChartDatagroup | undefined) {
    if (value && value.datasets && value.options && value.type && value.title) {
      this.data = value.datasets;
      this.options = value.options;
      this.type = value.type;
      this.title = value.title;
    }
  };

  ngOnInit() {

  }
}

