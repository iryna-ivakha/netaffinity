import { Component, Input, ViewChild, ElementRef, signal, Signal, effect } from '@angular/core';
import { ChartDatagroup } from '../models/data-models';
import { ChartType, ChartData, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-vidget',
  templateUrl: './vidget.component.html',
  styleUrls: ['./vidget.component.scss']
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
  chart: any;
  @ViewChild('VidgetChart') vidgetChart!: ElementRef;

  @Input() set chartData(value: ChartDatagroup | undefined) {
    if (value && value.datasets && value.options && value.type && value.title) {
      this.data = value.datasets;
      this.options = value.options;
      this.type = value.type;
      this.title = value.title;
      this.dataReady$.set('dataReady');  
    }
  }

  constructor() {
    effect(() => {
      if (this.dataReady$() && this.canvasReady$()) {
        this.createChart();
      }
    });
  }

  ngAfterViewInit() {
    this.canvasReady$.set('canvasReady');
  }
  
  ngAfterViewChecked() {
    if (this.dataReady$() && this.canvasReady$()) {
      this.createChart();
    }
  }


  createChart(){
    const chartCanvas = this.vidgetChart.nativeElement;
    try { 
      this.chart = new Chart(chartCanvas, {
        type: this.type,
        data: this.data,
        options: this.options
      });
    } catch (error) {
      console.error('Error creating chart:', error);
    };
  }
}  
