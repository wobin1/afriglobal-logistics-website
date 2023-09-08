import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTransportBargingComponent } from './water-transport-barging.component';

describe('WaterTransportBargingComponent', () => {
  let component: WaterTransportBargingComponent;
  let fixture: ComponentFixture<WaterTransportBargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterTransportBargingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterTransportBargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
