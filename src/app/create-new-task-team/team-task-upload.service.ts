import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class TeamTaskUploadService {

    //Service URL Section
    private taskFileUploadServiceURL = "http://localhost:8081/taskmanager/uploadFile";
    private taskTaskUploadServiceURL = "http://localhost:8081/taskmanager/createTask";
    


    constructor(private http: Http) { }

    //Upload File Service
    upload(formData) {
        return this.http.post(this.taskFileUploadServiceURL, formData)
            .map((response: Response) => response.json())
            .catch((error:any) => {
                return Observable.throw(error);
            });
    }

    //Add New Task Service
    createTask(taskRequestData:any) {
        return this.http.post(this.taskTaskUploadServiceURL, taskRequestData)
            .map((response: Response) => response.json()) // ...and calling .json() on the response to return data
            .catch((error:any) => {
                return Observable.throw(error);
            });    
    }

}