import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQouteComponent } from './get-qoute.component';

describe('GetQouteComponent', () => {
  let component: GetQouteComponent;
  let fixture: ComponentFixture<GetQouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
