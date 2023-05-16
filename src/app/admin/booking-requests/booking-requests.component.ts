import { BookingRequest } from './../model/BookingRequestModel';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

const ELEMENT_DATA: BookingRequest[] = [
  {id: '1', acommodationName: 'Vila Idila', numberOfGuests: 5, startDate: '2007-01-15T15:00:00Z', finishDate: '2007-02-02T15:00:00Z'},
  {id: '2', acommodationName: 'Vila Varga', numberOfGuests: 4, startDate: '2022-03-02T00:00:00Z', finishDate: '2022-03-02T15:00:00Z'},
  {id: '3', acommodationName: 'Novi Sad 2', numberOfGuests: 2, startDate: '2019-11-01T00:00:00Z', finishDate: '2019-11-03T15:00:00Z'},
  {id: '4', acommodationName: 'Novi Sad 2', numberOfGuests: 100, startDate: '2018-11-19T00:00:00Z', finishDate: '2018-12-22T15:00:00Z'},
  {id: '5', acommodationName: 'BG palata',  numberOfGuests: 25, startDate: '2008-06-25T00:00:00Z', finishDate: '2008-06-30T15:00:00Z'},
  {id: '6', acommodationName: 'BG palata', numberOfGuests: 15, startDate: '2023-05-20T00:00:00Z', finishDate: '2023-05-25T15:00:00Z'},
  
];

@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.component.html',
  styleUrls: ['./booking-requests.component.css']
})
export class BookingRequestsComponent implements OnInit{

  displayedColumns: string[] = ['startDate', 'finishDate', 'numberOfGuests', 'approve', 'reject'];
  public dataSource = ELEMENT_DATA;
  public isChecked = false;
  
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}

  ngOnInit(): void {
    //this.showAllAcommodations();
  }

  @ViewChild(MatSort) sort!: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  announceSortChange(sortState: Sort) { //za sortiranje
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  public approveRequest(): void{

  }

  public rejectRequest(): void{

  }
}
