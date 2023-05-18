import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Reservation } from "../model/ReservationModel";
import { map } from "rxjs";

interface AllReservationsResponse {
    allAcco: Reservation[];
}

@Injectable({
    providedIn: 'root'
  })
  export class ReservationService {
  
    apiHost: string = "http://localhost:8000/" 
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    constructor(private http: HttpClient) { }

    public getAllReservations() {
        const requestBody: string = '' ;
    
        return this.http.post<AllReservationsResponse>(this.apiHost + "allReservations", requestBody).pipe(
          map(response => response.allAcco)
        );
      }
      

  }