import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageIndicatorComponent } from './percentage-indicator.component';

describe('PercentageIndicatorComponent', () => {
  let component: PercentageIndicatorComponent;
  let fixture: ComponentFixture<PercentageIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
