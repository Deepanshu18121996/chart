import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChartComponent } from "./pages/chart/chart.component";
import { DchartComponent } from "./pages/dchart/dchart.component";
import { RchartComponent } from "./pages/rchart/rchart.component";
import { PchartComponent } from "./pages/pchart/pchart.component";
import { GooglechartComponent } from "./pages/googlechart/googlechart.component";

const routes: Routes = [
  { path: "", component: ChartComponent },
  { path: "chart", component: ChartComponent },
  { path: "dchart", component: DchartComponent },
  { path: "rchart", component: RchartComponent },
  { path: "pchart", component: PchartComponent },
  { path: "gchart", component: GooglechartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
