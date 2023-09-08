import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTypeCardComponent } from './blog-type-card.component';

describe('BlogTypeCardComponent', () => {
  let component: BlogTypeCardComponent;
  let fixture: ComponentFixture<BlogTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTypeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
