import { ChartType, ChartData, ChartOptions } from "chart.js";

export interface ChartDatagroup {
    datasets: ChartData;
    options: ChartOptions;
    type: ChartType;
    title: string;
}