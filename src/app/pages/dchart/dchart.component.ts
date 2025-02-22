import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dchart",
  templateUrl: "./dchart.component.html",
  styleUrls: ["./dchart.component.css"],
})
export class DchartComponent implements OnInit {
  public doughnutChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = "doughnut";
  constructor() {}

  ngOnInit() {}
}
