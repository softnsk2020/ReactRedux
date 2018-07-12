import { Injectable } from '@angular/core';
import { Http, HttpModule,Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {RegisterComponent} from '../demo/custom-pages/register/register.component';

import {User} from '../models/user.model';
import { State } from '../models/state.model';
import { ReturnModel } from '../models/return.model';


@Injectable()
export class UserService {

  //private rootUrl = "http://localhost:56258/";
  private rootUrl = "http://nwd4l2jwj2/MESService/";
  // private rootUrl = "http://medsmttest.mes.domain.local/MesService/";
  user :User;  
  resultantModel : ReturnModel
  constructor(private http : Http,private httpModule :HttpModule ) { }

  registerUser(userObj:User)  : Observable<ReturnModel>{       

    //var body = JSON.stringify(userObj);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});    
    return this.http.post(this.rootUrl+'api/User/RegisterMe',userObj,requestOptions).map((res:Response)=> res.json());                                       
  }

  getStates() : Observable<State[]>
  {
    return this.http.get(this.rootUrl+'api/Custom/State')
    .map((res: Response) => res.json());
    
 
       
   
            //  .catch(this.handleError));
  }

  getLoginDetails(userObj:User)
  {
    var body = JSON.stringify(userObj);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(this.rootUrl+'api/User/ValidateUser',userObj,requestOptions)    
              .map(response => response || {})
              .catch(this.handleError);
  }


  passwordecovery(userObj:User)
  {
    var body = JSON.stringify(userObj);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(this.rootUrl+'api/User/PasswordRecovery',userObj,requestOptions).map(x => x.json());
  }

  getIpAddress()
  {
    return this.http.get('http://freegeoip.net/json/?callback')
          .map(response => response || {})
          .catch(this.handleError);
  }

private handleError(error: HttpErrorResponse):
      Observable<any> {
        //Log error in the browser console
        console.error('observable error: ', error);
        return Observable.throw(error);
    }
}
