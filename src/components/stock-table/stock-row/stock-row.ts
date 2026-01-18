import { Component, Input, ChangeDetectionStrategy, signal } from '@angular/core';
export interface StockRow {
  id: string;
  name:string;
  price: number;
  delta: number;
}

@Component({
  selector: 'stock-row',
  template: `
  <div>
  <span>{{ row().name }}</span>    
  <span>{{ row().price }}</span>
      <span [class.positive]="row().delta > 0"
            [class.negative]="row().delta < 0">
        {{ row().delta }}
      </span>
      <span>
        @if(row().delta > 0){
        <i class="fa fa-caret-up" style="color:green"></i>
      }
      @else{
        <i class="fa fa-caret-down" style="color:red"></i>
      }
      </span>
</div>
  `,
  styles:`
  .positive{
    color:green;
  }
  .negative{
    color:red;
  }
  div{
    width:100%;
    display:flex;
    justify-content: space-around;
    background-color:aliceblue;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockRowComponent {
  @Input({ required: true }) row!: ReturnType<typeof signal<StockRow>>;
}
