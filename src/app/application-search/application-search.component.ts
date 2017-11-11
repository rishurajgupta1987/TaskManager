import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/primeng';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-application-search',
  templateUrl: './application-search.component.html',
  styleUrls: ['./application-search.component.css']
})
export class ApplicationSearchComponent implements OnInit {
  advanceSearchEnabled: boolean = false;
  constructor() {
    
  }

  ngOnInit() {
  }

  searchRequestForm = new FormGroup({
    taskName: new FormControl('',[Validators.pattern('^[a-zA-Z]*$'), Validators.required, Validators.minLength(3)]),
    enterpriseID: new FormControl(),
    taskStatus: new FormControl('completed'),
    assignedStatus: new FormControl('assignTo'),
    startDate: new FormControl('',Validators.required),
    endDate: new FormControl('',Validators.required)
  });

  //Advance Search Enabled Function
  callAdvanceFilters() {
    (this.advanceSearchEnabled == false) ? this.advanceSearchEnabled = true : this.advanceSearchEnabled = false;
  }

  //Get Search Results Function
  getSearchData(){
    
  }

}
