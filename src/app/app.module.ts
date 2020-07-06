import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { GoogleChartsModule } from "angular-google-charts";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AtmGeneratorComponent } from "./pages/atm-generator/atm-generator.component";
import { ChartComponent } from "./pages/chart/chart.component";
import { DchartComponent } from "./pages/dchart/dchart.component";
import { RchartComponent } from "./pages/rchart/rchart.component";
import { PchartComponent } from "./pages/pchart/pchart.component";
import { GooglechartComponent } from './pages/googlechart/googlechart.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmGeneratorComponent,
    ChartComponent,
    DchartComponent,
    RchartComponent,
    PchartComponent,
    GooglechartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, GoogleChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
