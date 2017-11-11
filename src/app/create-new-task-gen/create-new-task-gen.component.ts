import { Component, OnInit } from '@angular/core';
import { CalendarModule, MultiSelectModule } from 'primeng/primeng';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-new-task-gen',
  templateUrl: './create-new-task-gen.component.html',
  styleUrls: ['./create-new-task-gen.component.css']
})
export class CreateNewTaskGenComponent implements OnInit {

  users: SelectItem[];
  
    selectedCities: string[];
  
    constructor(private router: Router) {
      this.users = [];
      this.users.push({ label: 'Rishu Gupta', value: 'rishu.gupta' });
      this.users.push({ label: 'Paresh Rai', value: 'Paresh.rai' });
      this.users.push({ label: 'Deepika Gupta', value: 'deepika.gupta' });
      this.users.push({ label: 'CP Gupta', value: 'cp.gupta' });
    }
  
  
  
    ngOnInit() {
  
    }
  
    createTaskRequestForm = new FormGroup({
      taskType:new FormControl('geneticTask'),
      taskName: new FormControl('',[Validators.pattern('^[a-zA-Z]*$'), Validators.required, Validators.minLength(5)]),
      selectUsers: new FormControl(),
      targetDate: new FormControl(),
      priority: new FormControl('medium',Validators.required),
      taskStatus: new FormControl('open',Validators.required),
      aboutTask: new FormControl('',Validators.required),
      taskAttachments: new FormControl()
  
    });
  
    //Page Back to Question Page
    backToSelection(){
      this.router.navigateByUrl('applicationHome/createNewRequestQuestion');
    }

}
