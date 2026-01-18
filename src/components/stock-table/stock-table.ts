import { Injectable, signal, computed } from '@angular/core';

interface StockRow {
  id: string;
  name:string;
  price: number;
  delta: number;
}


@Injectable({ providedIn: 'root' })
export class StockStore {
  // Map of rowId -> row signal
  private rowsMap = new Map<string, ReturnType<typeof signal<StockRow>>>();

  // Signal holding sorted row IDs (NOT row data)
  private sortedIds = signal<string[]>([]);

  // Public computed signal for template
  rows = computed(() =>
    this.sortedIds().map(id => this.rowsMap.get(id)!)
  );

  /** Initialize table once */
  init(initialData: StockRow[]) {
    console.log("indi",initialData.length)
    initialData?.forEach(row => {
      this.rowsMap.set(row.id, signal(row));
    });
    this.sortedIds.set(initialData.map(r => r.id));
  }

  /** WebSocket batch update */
  applyBatchUpdates(updates: StockRow[]) {
    requestAnimationFrame(() => {
      for (const update of updates) {
        const rowSignal = this.rowsMap.get(update.id);
        if (!rowSignal) continue;

        // Immutable update → signal triggers row re-render
        rowSignal.update((data) => ({...data,
          price: update.price,
          delta: update.delta
        }));
      }
    
    });
  }

  /** Sorting without touching row signals */
  sortByPrice(direction: 'asc' | 'desc') {
    const ids = [...this.sortedIds()];

    ids.sort((a, b) => {
      const aPrice = this.rowsMap.get(a)!().price;
      const bPrice = this.rowsMap.get(b)!().price;
      return direction === 'asc'
        ? aPrice - bPrice
        : bPrice - aPrice;
    });

    this.sortedIds.set(ids);
  }
}
