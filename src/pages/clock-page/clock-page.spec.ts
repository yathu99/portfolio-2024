import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockPage } from './clock-page';

describe('ClockPage', () => {
  let component: ClockPage;
  let fixture: ComponentFixture<ClockPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
