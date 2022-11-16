import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SparkLineComponent } from './spark-line/spark-line.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HighchartsChartModule ],
  declarations: [ AppComponent, SparkLineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
