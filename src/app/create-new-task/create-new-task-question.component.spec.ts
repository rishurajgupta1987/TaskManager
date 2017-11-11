import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTaskQuestionComponent } from './create-new-task-question.component';

describe('CreateNewTaskComponentQuestion', () => {
  let component: CreateNewTaskQuestionComponent;
  let fixture: ComponentFixture<CreateNewTaskQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTaskQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTaskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
