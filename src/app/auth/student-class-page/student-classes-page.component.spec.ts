import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassesPageComponent } from './student-classes-page.component';

describe('StudentClassesPageComponent', () => {
  let component: StudentClassesPageComponent;
  let fixture: ComponentFixture<StudentClassesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentClassesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentClassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
