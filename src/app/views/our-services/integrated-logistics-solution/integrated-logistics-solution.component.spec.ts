import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedLogisticsSolutionComponent } from './integrated-logistics-solution.component';

describe('IntegratedLogisticsSolutionComponent', () => {
  let component: IntegratedLogisticsSolutionComponent;
  let fixture: ComponentFixture<IntegratedLogisticsSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedLogisticsSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedLogisticsSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
