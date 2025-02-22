import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pchart",
  templateUrl: "./pchart.component.html",
  styleUrls: ["./pchart.component.css"],
})
export class PchartComponent implements OnInit {
  public pieChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = "pie";
  constructor() {}

  ngOnInit() {}
}
