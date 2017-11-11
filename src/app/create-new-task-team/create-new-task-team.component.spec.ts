import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTaskTeamComponent } from './create-new-task-team.component';

describe('CreateNewTaskTeamComponent', () => {
  let component: CreateNewTaskTeamComponent;
  let fixture: ComponentFixture<CreateNewTaskTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTaskTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTaskTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
