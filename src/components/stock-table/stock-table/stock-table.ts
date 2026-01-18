import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { StockStore } from '../stock-table';
import { StockRowComponent } from '../stock-row/stock-row';
import { HttpClient} from '@angular/common/http';
interface StockRow {
  id: string;
  name:string;
  price: number;
  delta: number;
}
@Component({
  imports: [StockRowComponent],
  selector: 'stock-table',
  styles:`
  .table{
    height:60vh;
    border:solid 1px red;
    overflow:scroll;
    width:30vw;
  }
  `,

  template: `
  <br>

  <br>
  <br>
  <br>
    <button (click)="sortAsc()">Sort ↑</button>
    <button (click)="sortDesc()">Sort ↓</button>

    <div class="table">
      <table>
        <tr>
        <th> price</th>
        <th> delta</th>
</tr>
        <tr>
      @for (rowSignal of store.rows(); track trackById($index,rowSignal)) {
        <stock-row [row]="rowSignal" />
      }
    </tr>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockTableComponent implements OnInit{
  constructor(public store: StockStore, private http:HttpClient) {
    this.http.get('../../../assets/images/data_files/MOCK_DATA(5).json').subscribe((data:any)=>{
      
    this.store.init(data)
    })
  }

  ngOnInit(): void {
      setInterval(() => {
  const updates: StockRow[] = [];

  for (let i = 0; i < 100; i++) {
    const id = Math.floor(Math.random() * 10000).toString();
    updates.push({
      id,
      name:"",
      price: Number(Number(Math.random() * 1000).toPrecision(2) ),
      delta: Math.random() * 10 - 5
    });
  }

  this.store.applyBatchUpdates(updates);
}, 100);
  }
  sortAsc() {
    this.store.sortByPrice('asc');
  }

  sortDesc() {
    this.store.sortByPrice('desc');
  }

  trackById = (_: number, rowSignal: any) => rowSignal().id;
}
