import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTableComponent } from '../../components/stock-table/stock-table/stock-table';
const routes:Routes = [
    {path:"",component:StockTableComponent}
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { 
  

}
