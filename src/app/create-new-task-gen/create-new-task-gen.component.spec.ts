import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTaskGenComponent } from './create-new-task-gen.component';

describe('CreateNewTaskGenComponent', () => {
  let component: CreateNewTaskGenComponent;
  let fixture: ComponentFixture<CreateNewTaskGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTaskGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTaskGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
