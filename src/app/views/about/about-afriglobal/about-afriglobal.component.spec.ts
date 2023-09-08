import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAfriglobalComponent } from './about-afriglobal.component';

describe('AboutAfriglobalComponent', () => {
  let component: AboutAfriglobalComponent;
  let fixture: ComponentFixture<AboutAfriglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAfriglobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAfriglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
