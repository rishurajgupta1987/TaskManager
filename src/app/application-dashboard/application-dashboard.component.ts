import { Component, OnInit } from '@angular/core';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule, CalendarModule, MultiSelectModule } from 'primeng/primeng';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { ApplicationDashboardService } from './application-dashboard.service';



@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.css'],
  providers: [ApplicationDashboardService]
})

export class ApplicationDashboardComponent implements OnInit {

  assignedToYouData = [];
  assignedByYouData = [];
  getTaskData: any;
  toYouActive = true;
  byYouActive = false;
  showModel: boolean = false;
  users: SelectItem[];

  constructor(private applicationdashboardservice: ApplicationDashboardService) {

    //UI MultiSelect Code/Input
    this.users = [];
    this.users.push({ label: 'Rishu Gupta', value: 'rishu.gupta' });
    this.users.push({ label: 'Paresh Rai', value: 'paresh.rai' });
    this.users.push({ label: 'Deepika Gupta', value: 'deepika.gupta' });
    this.users.push({ label: 'CP Gupta', value: 'cp.gupta' });

  }

  ngOnInit() {
    this.applicationdashboardservice.getAllAssignedToYou("TO YOU")
      .subscribe(responseData => this.assignedToYouData = responseData);
  }


  //View Dashboard Function
  viewDashboard(userSelection) {

    //Tabs Highlings based on user selection
    if (userSelection == "TO YOU") {
      this.toYouActive = true;
      this.byYouActive = false;

      //Load the tasks those assigned to you
      this.applicationdashboardservice.getAllAssignedToYou("rishu.gupta")
        .subscribe(responseData => this.assignedToYouData = responseData);

    }
    else {
      this.toYouActive = false;
      this.byYouActive = true;
      //Load the tasks those assigned to you
      this.applicationdashboardservice.getAllAssignedByYou("rishu.gupta")
        .subscribe(responseData => this.assignedByYouData = responseData);

    }
  }

  //View Task Data Members
  uploadedFiles: any[];
  subtasks: any[];

  viewEditTaskForm = new FormGroup({

    taskName: new FormControl(),
    selectUsers: new FormControl(),
    targetDate: new FormControl(),
    taskAttachments: new FormControl(),
    priority: new FormControl(),
    taskStatus: new FormControl(),
    aboutTask: new FormControl()
  });

  //openTaskModel function
  openTaskModel(taskID) {
    //Task Model Opening Code
    //Load the tasks those assigned to you

    this.viewEditTaskForm.controls['taskName'].disable();
    this.viewEditTaskForm.controls['selectUsers'].disable();
    this.viewEditTaskForm.controls['targetDate'].disable();
    this.viewEditTaskForm.controls['taskAttachments'].disable();
    this.viewEditTaskForm.controls['priority'].disable();
    this.viewEditTaskForm.controls['taskStatus'].disable();
    this.viewEditTaskForm.controls['aboutTask'].disable();


    this.showModel = true;
    this.applicationdashboardservice.getTask(taskID)
      .subscribe(responseData => {

        this.getTaskData = responseData;
        this.viewEditTaskForm.controls['taskName'].setValue(this.getTaskData.taskTitle);
        this.viewEditTaskForm.controls['selectUsers'].setValue(this.getTaskData.assignTo);
        this.viewEditTaskForm.controls['targetDate'].setValue(this.getTaskData.targetCompletionDate);
        this.viewEditTaskForm.controls['priority'].setValue(this.getTaskData.priority);
        this.viewEditTaskForm.controls['taskStatus'].setValue(this.getTaskData.status);
        this.viewEditTaskForm.controls['aboutTask'].setValue(this.getTaskData.description);
        this.uploadedFiles = this.getTaskData.attachments;
        this.subtasks = this.getTaskData.subTasks;
      });


    //console.log(this.getTaskData);
    //this.viewEditTaskForm.controls['taskName'].setValue();


  }

  //Download Attachment Function
  downloadAttachment(attachmentID) {
    alert("downloading" + attachmentID);
  }

  //Edit Task Function
  editTask(){
    
    this.viewEditTaskForm.controls['taskName'].enable();
    this.viewEditTaskForm.controls['selectUsers'].enable();
    this.viewEditTaskForm.controls['targetDate'].enable();
    this.viewEditTaskForm.controls['taskAttachments'].enable();
    this.viewEditTaskForm.controls['priority'].enable();
    this.viewEditTaskForm.controls['taskStatus'].enable();
    this.viewEditTaskForm.controls['aboutTask'].enable();
  
  }

  //Update Task Function
  updateTask(){
    alert("Calling updating Task");
  }




}
