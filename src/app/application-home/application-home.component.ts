import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-application-home',
  templateUrl: './application-home.component.html',
  styleUrls: ['./application-home.component.css']
})
export class ApplicationHomeComponent implements OnInit {


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.queryParams.subscribe(params => {
      console.log(params['firstName']); 
    }); 
  }

}
