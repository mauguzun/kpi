import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()


export class AuthInterceptor implements HttpInterceptor {


    constructor( private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<import('@angular/common/http').HttpEvent<any>> {
        // if lofing
   
        req = req.clone({
                setParams: {
                    auth: 'omg'
                }
        });
      
        return next.handle(req)
            .pipe(
                tap(()=>{console.log("int")}),
                catchError((error: HttpErrorResponse) => {
                    console.log("int errror");
                    if(error.status === 401){
                        
                    }
                    return throwError(error);
                })
        )
    }

}
