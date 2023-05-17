import { BookingRequest } from './../model/BookingRequestModel';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { AllReservationInfo } from '../model/AllReservationInfo';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../service/admin.service';



@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.component.html',
  styleUrls: ['./booking-requests.component.css']
})
export class BookingRequestsComponent implements OnInit{

  constructor(private reservationService: AdminService , private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}

  displayedColumns: string[] = ['id', 'startDate', 'finishDate', 'numberOfGuests', 'approve', 'reject'];
  
  public isChecked = false;

  public dataSource = new MatTableDataSource<AllReservationInfo>();
  public allReservations : AllReservationInfo[] = []
  public reservation : AllReservationInfo = new AllReservationInfo();

  
  ngOnInit(): void {
    this.showAllReservationsForHost();
  }
  

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

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


  public showAllReservationsForHost() {
    this.reservatin
  }


}
