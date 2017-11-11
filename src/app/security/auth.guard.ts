
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'


@Injectable()
export class AuthGuard implements CanActivate {
    isloggedin: string;
    
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        this.isloggedin = localStorage.getItem("validateUser");        
        if (this.isloggedin === "false" || !this.isloggedin){
            this.router.navigateByUrl("/login");
        }
        return true;
    }
}