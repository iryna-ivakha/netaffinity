import { 
  Inject, 
  PLATFORM_ID, 
  Component, 
  Input, 
  ViewChild, 
  ElementRef, 
  signal, 
  effect, 
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDatagroup } from '../models/data-models';
import { ChartType, ChartData, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-vidget',
  imports: [CommonModule],
  templateUrl: './vidget.component.html',
  styleUrls: ['./vidget.component.css']
})

export class VidgetComponent {  
  dataReady$ = signal('');
  canvasReady$ = signal('');
  type: ChartType = 'line';
  title: string = 'Vidget';
  options: ChartOptions = {};
  data: ChartData = {
    labels: [],
    datasets: []
  };
  chart!: Chart;
  chartCreated: boolean = false;
  @ViewChild('VidgetChart') vidgetChart!: ElementRef;
  isBrowser: boolean = true;

  @Input() set chartData(value: ChartDatagroup | undefined) {
    if (value && value.datasets && value.options && value.type && value.title) {
      this.data = value.datasets;
      this.options = value.options;
      this.type = value.type;
      this.title = value.title;
      this.dataReady$.set('dataReady');  
    }
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: unknown, 
    private cdr: ChangeDetectorRef) {
    effect(() => {
      if (this.dataReady$() && this.canvasReady$() && !this.chartCreated) {
        if (this.platformId && isPlatformBrowser(this.platformId)) {
          this.createChart();
          this.chartCreated = true;
        }
      }
    });
  }
  
  ngAfterViewInit() {
      if (this.vidgetChart) {
        this.canvasReady$.set('canvasReady');
      }
  }

  createChart(){
    const chartCanvas = this.vidgetChart.nativeElement;
    if (chartCanvas) {
      
      try { 
        this.chart = new Chart(chartCanvas, {
          type: this.type,
          data: this.data,
          options: this.options
        });
        chartCanvas.innerHTML = this.chart;
        this.cdr.detectChanges();
      } catch (error) {
        console.error('Error creating chart:', error);
      };
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}  
