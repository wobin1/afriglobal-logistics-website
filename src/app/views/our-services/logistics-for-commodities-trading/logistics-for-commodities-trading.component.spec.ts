import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsForCommoditiesTradingComponent } from './logistics-for-commodities-trading.component';

describe('LogisticsForCommoditiesTradingComponent', () => {
  let component: LogisticsForCommoditiesTradingComponent;
  let fixture: ComponentFixture<LogisticsForCommoditiesTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsForCommoditiesTradingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsForCommoditiesTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
