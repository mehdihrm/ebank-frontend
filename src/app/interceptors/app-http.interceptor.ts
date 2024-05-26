import {Injectable} from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../service/auth.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     if(!req.url.includes("/auth/login")) {


       let newRequest = req.clone({
         headers: req.headers.set('Authorization', 'Bearer ' + this.authService.accessToken)
       })
       return next.handle(newRequest).pipe(
        catchError(err => {
          if(err.status == 401){
            this.authService.logout()
          }
          return throwError(err.message);
        })
       );
     }else{
       return next.handle(req);
     }
    }
}
