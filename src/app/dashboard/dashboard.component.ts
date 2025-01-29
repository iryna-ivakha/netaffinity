import { Component } from '@angular/core';
import { VidgetComponent } from "../vidget/vidget.component";
import { BookingListComponent } from "../booking-list/booking-list.component";
import { CommonModule } from '@angular/common';
import { ChartDatagroup} from "../models/data-models";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [VidgetComponent, BookingListComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: Array<ChartDatagroup> | undefined = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadChartData();
  }

  async loadChartData() {
    try {
      this.data = await this.http.get<Array<ChartDatagroup>>('./assets/chart-data.json').toPromise();
    } catch (error) {
      console.error('Error loading chart data:', error);
    }
  }
}
