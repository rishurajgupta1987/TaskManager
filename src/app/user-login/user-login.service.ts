import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class UserLoginService {

    private loginServiceURL: string = "http://localhost:8080/taskmanager/getuserbyid/";
    
    //private loginServiceURL: string = "../../assets/apiData/loginServiceData.json";

    private loginServiceURLWithParam: string;

    constructor(private http: Http) { }

    getAllUsers(loginID) {
        //this.loginServiceURLWithParam = this.loginServiceURL + "?loginID=" + loginID;
        this.loginServiceURLWithParam = this.loginServiceURL + loginID; 
        return this.http.get(this.loginServiceURLWithParam)
            .map((response: Response) => response.json())
            .catch((error:any) => {
                return Observable.throw(error);
            });
    }
    
}




