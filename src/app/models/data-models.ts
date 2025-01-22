import { ChartType, ChartData } from "chart.js";

export interface ChartDatagroup {
    datasets: ChartData[];
    options: unknown[];
    type: ChartType;
    title: string;
}