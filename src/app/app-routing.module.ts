import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import { CreateNewTaskQuestionComponent } from './create-new-task/create-new-task-question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ApplicationHomeComponent } from './application-home/application-home.component';
import { CreateNewTaskTeamComponent } from './create-new-task-team/create-new-task-team.component';
import { CreateNewTaskGenComponent } from './create-new-task-gen/create-new-task-gen.component';
import { ApplicationSearchComponent } from './application-search/application-search.component';

import { AuthGuard } from './security/auth.guard';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: UserLoginComponent },
    { path: 'applicationHome', component: ApplicationHomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            {
                path: 'dashboard',
                component: ApplicationDashboardComponent
            },
            {
                path: 'createNewRequestQuestion',
                component: CreateNewTaskQuestionComponent
            },
             {
                path: 'createNewRequestTeam',
                component: CreateNewTaskTeamComponent
            },
             {
                path: 'createNewRequestGen',
                component: CreateNewTaskGenComponent
            },
            {
                path: 'applicationSearch',
                component: ApplicationSearchComponent
            }
        ]    
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }