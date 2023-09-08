import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomClearanceComponent } from './custom-clearance.component';

describe('CustomClearanceComponent', () => {
  let component: CustomClearanceComponent;
  let fixture: ComponentFixture<CustomClearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomClearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
