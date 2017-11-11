import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.css']
})
export class ApplicationHeaderComponent implements OnInit {

  
  userName: string;
  userObject: any;
  showModel:boolean= false;
  constructor() {
    this.userObject = JSON.parse(localStorage.getItem('userName'));
    this.userName = this.userObject.firstName+' '+this.userObject.lastName; 
  }

  ngOnInit() {
  }

  //Get User Profile Function
  getUserProfile() {
    this.showModel = true;
  }

  //logout function
  logout() {
    localStorage.removeItem("validateUser");
    localStorage.removeItem("userName");
    

  }



}
