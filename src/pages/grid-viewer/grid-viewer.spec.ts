import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewer } from './grid-viewer';

describe('GridViewer', () => {
  let component: GridViewer;
  let fixture: ComponentFixture<GridViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
