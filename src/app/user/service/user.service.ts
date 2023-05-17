import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import jwt_decode from 'jwt-decode';
import { AllAccoInfo } from '../model/Accommodation';
import { ReserveInfo } from '../model/ReserveInfo';
import { switchMap, forkJoin } from 'rxjs';
import { AllReservationInfo } from 'src/app/admin/model/AllReservationInfo';

interface AccommodationData {
  allAcco: Array<AllAccoInfo>;
}
interface CheckData {
  greeting: string;
}

@Injectable({
  providedIn: 'root'

})
export class UserService {



  apiHost: string = "http://localhost:8000/";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
constructor(private http: HttpClient) { }

 getLoggedUser() :Observable<any> {
  return this.http.get<any>(this.apiHost + "getUser", { headers: this.headers});
 }

getToken(): any {
  const token =  localStorage.getItem("token");
   try {
     return jwt_decode(token ? token : "");
   } catch(Error) {
     return null;
   }
}

  updateUser(updateUser : User) {
    console.log(updateUser)
    this.http.post<any>(this.apiHost + 'updateUser', updateUser, {headers: this.headers}).subscribe({
    });
  }

  async deleteUser(): Promise<boolean> {
    let dele: boolean = true;
    if (this.getToken().role == "Host") {
      const data = await this.http.post<AccommodationData>(this.apiHost + 'allByCreator', "", { headers: this.headers }).toPromise();
      if (data && data.allAcco && data.allAcco.length != 0) {
        for (const element of data.allAcco ) {
          const reservationData = await this.http.post<CheckData>(this.apiHost + 'checkReservation', JSON.stringify(element.id), { headers: this.headers }).toPromise();
          console.log("usao u check reservation");
          console.log("Data value: " + reservationData?.greeting);
          if (reservationData?.greeting === "There are reservations") {
            console.log("usao u gret");
            dele = false;
          }
        }
        if (dele) {
          await this.http.post<any>(this.apiHost + 'delByCreator', JSON.stringify(this.getToken().username), { headers: this.headers }).toPromise();
          await this.http.post<any>(this.apiHost + 'deleteUser', "", { headers: this.headers }).toPromise();
        }
      }
    }
    else {
      const checkData = await this.http.post<CheckData>(this.apiHost + 'checkForGuests', "", { headers: this.headers }).toPromise();
      if (checkData?.greeting == "There are reservations") {
        dele = false;
      }
      if (dele == true) {
        await this.http.post<any>(this.apiHost + 'deleteUser', "", { headers: this.headers }).toPromise();
      }
    }
    return dele;
  }

  getAcceptionAcco(idAcco:string) {
    return this.http.post<any>(this.apiHost + "checkType",JSON.stringify(idAcco), {headers: this.headers});
  }

  getAllAcco() {
    return this.http.get<any>(this.apiHost + "allAcco", { headers: this.headers});
  }

  RequestReservation(reservation: ReserveInfo) {
    this.http.post<any>(this.apiHost + "makeReservation",reservation, {headers: this.headers}).subscribe((data) => {
      console.log(data)
    })
  }


  cancelRes(id : string) {
    return this.http.post<any>(this.apiHost + 'deleteReservation', JSON.stringify(id), {headers: this.headers});
  }

  
  resListFunction(): Observable<AllReservationInfo[]> {
    return this.http.get<AccommodationData>(this.apiHost + 'allAcco', { headers: this.headers }).pipe(
      switchMap((data) => {
        const observables = data.allAcco.map(element => this.http.post<AllReservationInfo>(this.apiHost + 'allReservations', JSON.stringify(element.id), { headers: this.headers }));
        return forkJoin(observables);
      })
    );
  }

 }
