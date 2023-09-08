import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyLiftOversizeCargoComponent } from './heavy-lift-oversize-cargo.component';

describe('HeavyLiftOversizeCargoComponent', () => {
  let component: HeavyLiftOversizeCargoComponent;
  let fixture: ComponentFixture<HeavyLiftOversizeCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeavyLiftOversizeCargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyLiftOversizeCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
