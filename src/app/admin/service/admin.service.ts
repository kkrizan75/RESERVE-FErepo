import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/shared/model/User';
import { AllAccoInfo } from 'src/app/user/model/Accommodation';
import { AllReservationInfo } from '../model/AllReservationInfo';
import { switchMap, forkJoin } from 'rxjs';


interface AccommodationData {
  allAcco: Array<AllAccoInfo>;
}

interface AccpData {
    dlt: string;
  }

@Injectable({
  providedIn: 'root'

})
export class AdminService {

  apiHost: string = "http://localhost:8000/";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/*' });
constructor(private http: HttpClient) { }


getToken(): any {
  const token =  localStorage.getItem("token");
   try {
     return jwt_decode(token ? token : "");
   } catch(Error) {
     return null;
   }
}

reservationList: AllReservationInfo[] = [];
reservationListTwo: AllReservationInfo[] = [];

reservationListFunction(): Observable<AllReservationInfo[]> {
    return this.http.post<AccommodationData>(this.apiHost + 'allByCreator', "", { headers: this.headers }).pipe(
      switchMap((data) => {
        const observables = data.allAcco.map(element => this.http.post<AllReservationInfo>(this.apiHost + 'allReservations', JSON.stringify(element.id), { headers: this.headers }));
        return forkJoin(observables);
      })
    );
  }

 acceptReservation(id : string) {
    console.log("evo me u servisu")
    console.log("saljem: " + id)
    this.http.post<AccpData>(this.apiHost + 'acceptReservation', JSON.stringify(id) ,{ headers : this.headers}).subscribe((data) => {
        console.log(data.dlt)
    })
}
           

}

