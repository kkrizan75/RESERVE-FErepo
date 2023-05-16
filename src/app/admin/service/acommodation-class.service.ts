import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acommodation } from '../model/AcommodationModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcommodationClassService {

  apiHost: string = "http://localhost:8000/" //host za AcommodationDB, za login i reservations je drugaciji
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createAcommodation(acommodation: Acommodation): Observable<Acommodation> {
    return this.http.post<Acommodation>(this.apiHost + 'createAcco', acommodation, {headers: this.headers});
  }

  
}
