import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApplicationDashboardService {
    //private AssignedByYouServiceUrl: string = "../../assets/apiData/dashboardAssignedByYou.json";
    //private AssignedToYouServiceUrl: string = "../../assets/apiData/dashboardAssignedToYou.json";
    //private GetTaskServiceUrl: string = "../../assets/apiData/getTask.json";

    private AssignedToYouServiceUrl: string = "http://localhost:8081/taskmanager/getAssignedToYou/rishu.gupta";
    private AssignedByYouServiceUrl: string = "http://localhost:8081/taskmanager/getAssignedByYou/rishu.gupta";
    private GetTaskServiceUrl: string = "http://localhost:8081/taskmanager/getTask/test123"


    constructor(private http: Http) { }

    getAllAssignedByYou(enterpriseID: String) {
        return this.http.get(this.AssignedByYouServiceUrl)
            .map((response: Response) => response.json());
    }

    getAllAssignedToYou(enterpriseID: String) {
        return this.http.get(this.AssignedToYouServiceUrl)
            .map((response: Response) => response.json());
    }

    getTask(taskID: String) {
        return this.http.get(this.GetTaskServiceUrl)
            .map((response: Response) => response.json());
    }
}