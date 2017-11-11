import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarModule, MultiSelectModule } from 'primeng/primeng';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { TeamTaskUploadService } from './team-task-upload.service';
import { FileUploadModule } from 'primeng/primeng';
import { Headers, RequestOptions } from '@angular/http';
import { attachment } from './task-attachment-model';

declare var $: any;

@Component({
  selector: 'app-create-new-task-team',
  templateUrl: './create-new-task-team.component.html',
  styleUrls: ['./create-new-task-team.component.css'],
  providers: [TeamTaskUploadService]
})
export class CreateNewTaskTeamComponent implements OnInit {

  users: SelectItem[];
  uploadedFiles = [];
  attachmentObject = new attachment();
  //prepareAttachments = [];
  showSuccess: boolean = false;
  //@ViewChild("taskAttachments") task_Attachments: any;


  constructor(private router: Router, private teamTaskUploadService: TeamTaskUploadService) {
    this.users = [];
    this.users.push({ label: 'Rishu Gupta', value: 'rishu.gupta' });
    this.users.push({ label: 'Paresh Rai', value: 'Paresh.rai' });
    this.users.push({ label: 'Deepika Gupta', value: 'deepika.gupta' });
    this.users.push({ label: 'CP Gupta', value: 'cp.gupta' });
    this.users.push({ label: 'Amresh Mishra', value: 'amresh.mishra' });

  }

  ngOnInit() {
    $(function () {
      $("button[ng-reflect-label='Upload']").css("display", "none");
    });
  }

  createTaskRequestForm = new FormGroup({
    taskType: new FormControl('teamTask'),
    taskName: new FormControl('', [Validators.pattern('^[a-z A-Z]*$'), Validators.required, Validators.minLength(5)]),
    assignedTo: new FormControl([], Validators.required),
    targetDate: new FormControl('', Validators.required),
    taskAttachments: new FormControl(),
    priority: new FormControl('medium', Validators.required),
    taskStatus: new FormControl('open', Validators.required),
    aboutTask: new FormControl(''),
    createdBy: new FormControl('')
  });

  //Page Back to Question Page
  backToSelection() {
    this.router.navigateByUrl('applicationHome/createNewRequestQuestion');
  }

  //Attach File Function
  attachFile(event) {
    let fileList: any = event.files;

    fileList.forEach(element => {
      if (fileList.length > 0) {
        this.attachmentObject.file = element;
        this.uploadedFiles.push(this.attachmentObject);
        let formData: FormData = new FormData();
        formData.append('file', element, element.name);
        try {
          this.showSuccess = true;
          $("button[ng-reflect-label='Cancel']").click();
          setTimeout(() => {
            this.showSuccess = false;
          }, 3000);
          this.teamTaskUploadService.upload(formData)
            .subscribe(responseData => { }, error => { });
        }
        catch (e) { }
      }
    });

  }

  //Create Team Task Function
  createTask(RequestData) {
    //Upload the Task Assignments too
    $("button[ng-reflect-label='Upload']").click();
    setTimeout(() => {
      RequestData.createdBy = localStorage.getItem("userName");
      RequestData.taskAttachments = this.uploadedFiles;
      this.teamTaskUploadService.createTask(RequestData)
        .subscribe(response => { }, error => { });
    }, 1000);
    console.log(RequestData);
  }

}
