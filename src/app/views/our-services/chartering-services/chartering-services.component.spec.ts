import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharteringServicesComponent } from './chartering-services.component';

describe('CharteringServicesComponent', () => {
  let component: CharteringServicesComponent;
  let fixture: ComponentFixture<CharteringServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharteringServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharteringServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
