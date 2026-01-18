import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing-module';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { StockTableComponent } from '../../components/stock-table/stock-table/stock-table';
import { StockRowComponent } from '../../components/stock-table/stock-row/stock-row';


@NgModule({
  declarations: [
    
  ],
  imports: [StockTableComponent,
    StockRowComponent,
    CommonModule,
    StocksRoutingModule
  ],
  providers:[provideHttpClient()]
})
export class StocksModule { }
