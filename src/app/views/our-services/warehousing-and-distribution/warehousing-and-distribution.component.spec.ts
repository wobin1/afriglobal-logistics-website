import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousingAndDistributionComponent } from './warehousing-and-distribution.component';

describe('WarehousingAndDistributionComponent', () => {
  let component: WarehousingAndDistributionComponent;
  let fixture: ComponentFixture<WarehousingAndDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousingAndDistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehousingAndDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
