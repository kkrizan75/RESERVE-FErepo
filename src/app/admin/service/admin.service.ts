import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/shared/model/User';
import { AllAccoInfo } from 'src/app/user/model/Accommodation';
import { AllReservationInfo } from '../model/AllReservationInfo';
import { switchMap, forkJoin } from 'rxjs';


interface AccommodationData {
  allAcco: Array<AllAccoInfo>;
}

interface AllAcco {
  accepted: string;
  acception: string;
  accommodation: string;
  fromDate: string;
  guestNumber: number;
  id: string;
  toDate: string;
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

// reservationListFunction(): Observable<AllReservationInfo[]> {
//     return this.http.post<AccommodationData>(this.apiHost + 'allByCreator', "", { headers: this.headers }).pipe(
//       switchMap((data) => {
//         const observables = data.allAcco.map(element => this.http.post<AllReservationInfo>(this.apiHost + 'allReservations', JSON.stringify(element.id), { headers: this.headers }));
//         return forkJoin(observables);
//       })
//     );
//   }

reservationListFunction(): Observable<AllReservationInfo[]> {
  return this.http.post<AccommodationData>(this.apiHost + 'allByCreator', "", { headers: this.headers }).pipe(
    switchMap((data) => {
      const observables = data.allAcco.map(element => {
        return this.http.post<AllReservationInfo[]>(this.apiHost + 'allReservations', JSON.stringify(element.id), { headers: this.headers });
      });
      return forkJoin(observables).pipe(
        map(reservations => reservations.flatMap(reservation => reservation)) // Flatten the array of arrays into a single array
      );
    })
  );
  }


 acceptReservation(id : string) {
    console.log("saljem: " + id)
    this.http.post<AccpData>(this.apiHost + 'acceptReservation', JSON.stringify(id) ,{ headers : this.headers}).subscribe((data) => {
        console.log(data.dlt)
    })
}


cancelRes(id : string) {
  return this.http.post<any>(this.apiHost + 'deleteReservation', JSON.stringify(id), {headers: this.headers});
}



        

}

