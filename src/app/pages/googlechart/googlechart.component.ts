import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-googlechart",
  templateUrl: "./googlechart.component.html",
  styleUrls: ["./googlechart.component.css"],
})
export class GooglechartComponent implements OnInit {
  public title = "Browser market shares at a specific website, 2014";
  public type = "PieChart";
  public data = [
    ["Firefox", 45.0],
    ["IE", 26.8],
    ["Chrome", 12.8],
    ["Safari", 8.5],
    ["Opera", 6.2],
    ["Others", 0.7],
  ];
  public columnNames = ["Browser", "Percentage"];
  public options = {
    color: ["blue", "red", "green", "purple", "orange", "black"],
    slices: {
      1: { offset: 0.2 },
      3: { offset: 0.3 },
    },
    is3D: true,
  };
  public width = 1333;
  public height = 666;

  constructor() {}

  ngOnInit() {}
}
