import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Acommodation } from '../../shared/model/Acommodation';

interface AcommodationResponse {
  allAcco: Acommodation[];
}

@Injectable({
  providedIn: 'root'
})
export class AcommodationService {

  apiHost: string = "http://localhost:8000/" //host za AcommodationDB, za login i reservations je drugaciji
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // getAllAcommodations(): Observable<Acommodation[]> {
  //   return this.http.get<Acommodation>(this.apiHost + 'allAcco', { headers: this.headers }).pipe(
  //     switchMap((data) => {
  //       const observables = data.allAcco.map(element => this.http.post<Acommodation>(this.apiHost + 'allByCreator', JSON.stringify(element.id), { headers: this.headers }));
  //       return forkJoin(observables);
  //     })
  //   );
  // }

  public getAllAcommodations(): Observable<Acommodation[]> {
    return this.http.get<AcommodationResponse>(this.apiHost + 'allAcco').pipe(
      map(response => response.allAcco)
    );
  }

  public searchAccommodations(location: string, dateFrom: string, dateTo: string, guestNumber: number) {
    const requestBody = {
      location: location,
      dateFrom: dateFrom,
      dateTo: dateTo,
      guestNumber: guestNumber,
    };

    return this.http.post<any>(this.apiHost + "searchAcco", requestBody);
  }


  


}
