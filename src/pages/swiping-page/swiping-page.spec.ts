import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipingPage } from './swiping-page';

describe('SwipingPage', () => {
  let component: SwipingPage;
  let fixture: ComponentFixture<SwipingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
