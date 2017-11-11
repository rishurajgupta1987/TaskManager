import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-task-question',
  templateUrl: './create-new-task-question.component.html',
  styleUrls: ['./create-new-task-question.component.css']
})
export class CreateNewTaskQuestionComponent implements OnInit {
  createRequestPage: Object = {};

  constructor(private router: Router) { }
  ngOnInit() {
    this.createRequestPage = "teamTask";
  }

  openCreateTaskWindow() {
    if (this.createRequestPage == "teamTask") {
      this.router.navigateByUrl('applicationHome/createNewRequestTeam');
    }
    else {
      this.router.navigateByUrl('applicationHome/createNewRequestGen');
    }
  }



}
