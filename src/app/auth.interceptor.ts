import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()


export class AuthInterceptor implements HttpInterceptor {


    constructor( private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<import('@angular/common/http').HttpEvent<any>> {
        req = req.clone({
                setParams: {
                    token: localStorage.getItem('token')
              //      token: '493eb9248f8145a77f5adf324d1c4933'
                }
        });
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log("int errror" + error);
                    if(error.status === 401){
                        this.router.navigate(['/pls-login'])
                    } 
                    return throwError(error);
                })
        )
    }

}
