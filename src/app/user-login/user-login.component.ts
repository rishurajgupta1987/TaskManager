import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserLoginService]
})
export class UserLoginComponent implements OnInit {

  //adminUserList: any;
  showMsg: boolean = false;
  loggedUserID: string;
  //validateFlag: boolean = false;
  showServiceNotWokring: boolean = false;
  userInfo: any;


  constructor(private router: Router, private userloginservice: UserLoginService) {

  }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    enterpriseID: new FormControl('', [Validators.pattern('^[a-zA-Z.]*$'), Validators.required, Validators.minLength(2)])
  });

  //validate UserLogin
  validateUser() {

    this.loggedUserID = this.loginForm.value.enterpriseID;
    this.userloginservice.getAllUsers(this.loggedUserID)
      .subscribe(responseData => {
        this.userInfo = responseData;
        localStorage.setItem("userName", JSON.stringify(responseData));
        localStorage.setItem("validateUser", "true");
        //this.router.navigateByUrl('applicationHome');
        this.router.navigate(['applicationHome'], { queryParams: this.userInfo, skipLocationChange: true });

        /*this.adminUserList = responseData;
        if (this.adminUserList.loginID == this.loggedUserID) {
          this.validateFlag = true;
          localStorage.setItem("userName", JSON.stringify(this.adminUserList));
        }
        localStorage.setItem("validateUser", this.validateFlag.toString());

        if (this.validateFlag) {
          this.router.navigateByUrl('applicationHome');
        }
        else {
          //show error messgae if user does not exist!
          this.showMsg = true;
          setTimeout(() => {
            this.showMsg = false;
          }, 2000);
        }*/

      },
      error => {
        if (error == "Response with status: 0  for URL: null") {
          this.showServiceNotWokring = true;
          setTimeout(() => {
            this.showServiceNotWokring = false;
          }, 4000);
        }
        else {
          this.showMsg = true;
          setTimeout(() => {
            this.showMsg = false;
          }, 4000);
        }
      }
      );

  }//validate Userlogin closed here



}
