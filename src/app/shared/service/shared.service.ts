import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedIn } from '../model/logged-in';
import jwt_decode from 'jwt-decode';
import { User } from '../model/User';
import { Acommodation } from '../model/Acommodation';

interface LoginResponse {
  token: string;
  status: HttpStatusCode;
}

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  getToken(): any {
    return localStorage.getItem("token");
    // console.log(token + "");
    // try {
    //   return jwt_decode(token ? token : "");
    // } catch(Error) {
    //   return null;
    // }
  }

apiHost: string = "http://localhost:8000/";
headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json','Authorization': "Bearer " + this.getToken()});
getDecodedAccessToken(token: string): any {
  
  try {
    return jwt_decode(token);
  } catch(Error) {
    return null;
  }
}



constructor(private http: HttpClient) { }



async login(logedin: LoggedIn): Promise<boolean> {
  const response = await this.http.post<LoginResponse>(this.apiHost + "loginInfo", logedin, { headers: this.headers }).toPromise();


  if (response && response.token) {
      localStorage.setItem("token", response.token);
      const tokenInfo = this.getDecodedAccessToken(response.token);
      localStorage.setItem("role", tokenInfo.role);

      // if (tokenInfo.role == 'Admin') {
      //   this.router.navigate(['/admin/flights']);
      // } else {
      //   this.router.navigate(['/flights']);
      // }

      // this.isLoggedInSubject.next(true);
      return true;
  } else {
      return false;
  }
}

  register(user: User) {
    this.http.post(this.apiHost + 'register', user, { headers:this.headers  }) .subscribe((data) => {
      console.log(data);
  });
  }

}
