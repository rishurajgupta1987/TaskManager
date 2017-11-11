import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { CreateNewTaskQuestionComponent } from './create-new-task/create-new-task-question.component';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import { ApplicationFooterComponent } from './application-footer/application-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateNewTaskTeamComponent } from './create-new-task-team/create-new-task-team.component';
import { CreateNewTaskGenComponent } from './create-new-task-gen/create-new-task-gen.component';
import { ApplicationHomeComponent } from './application-home/application-home.component';

//Import Custom Services
import { UserLoginService } from './user-login/user-login.service';
import { ApplicationDashboardService } from './application-dashboard/application-dashboard.service';
import { AuthGuard } from './security/auth.guard';
import { TeamTaskUploadService } from './create-new-task-team/team-task-upload.service'


import { InputTextModule, DataTableModule, ButtonModule, DialogModule, CalendarModule, MultiSelectModule } from 'primeng/primeng';

import { FileUploadModule } from 'primeng/primeng';
import { ApplicationSearchComponent } from './application-search/application-search.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateNewTaskQuestionComponent,
    ApplicationDashboardComponent,
    ApplicationHeaderComponent,
    ApplicationFooterComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    ApplicationHomeComponent,
    CreateNewTaskTeamComponent,
    CreateNewTaskGenComponent,
    ApplicationSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    MultiSelectModule,
    FileUploadModule 
  ],
  providers: [UserLoginService, ApplicationDashboardService, AuthGuard, TeamTaskUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
