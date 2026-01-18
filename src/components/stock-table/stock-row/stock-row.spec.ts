import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRow } from './stock-row';

describe('StockRow', () => {
  let component: StockRow;
  let fixture: ComponentFixture<StockRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
