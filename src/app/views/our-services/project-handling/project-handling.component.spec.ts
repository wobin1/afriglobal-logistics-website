import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHandlingComponent } from './project-handling.component';

describe('ProjectHandlingComponent', () => {
  let component: ProjectHandlingComponent;
  let fixture: ComponentFixture<ProjectHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHandlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
