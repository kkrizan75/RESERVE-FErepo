import { BookingRequest } from './../model/BookingRequestModel';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { AllReservationInfo } from '../model/AllReservationInfo';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationService } from '../service/reservation.service';
import { Reservation } from '../model/ReservationModel';
import { AdminService } from '../service/admin.service';



@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.component.html',
  styleUrls: ['./booking-requests.component.css']
})
export class BookingRequestsComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private reservationService: AdminService , public dialog: MatDialog, private dialogRef: MatDialogRef<BookingRequestsComponent>) {}

  displayedColumns: string[] = ['guestName', 'startDate', 'finishDate', 'numberOfGuests', 'approve'];
  
  public isChecked = false;

  public dataSource = new MatTableDataSource<Reservation>();

  
  ngOnInit(): void {
    this.showAllReservationsForSelectedAcommodation();
  }
  

  
  public acceptRes(id : string){
    this.reservationService.acceptReservation(id);
    alert(`You have successfully accepted reservation!`)
    this.dialogRef.close();
  }


  public showAllReservationsForSelectedAcommodation() {

    this.reservationService.reservationListFunction().subscribe(res => {
      const reservations: AllReservationInfo = {
        allAcco: []
      };
  
      res.forEach(accommodation => {
        accommodation.allAcco.forEach(reservation => {
          reservations.allAcco.push(reservation);
        });
      });
  
      this.dataSource.data = reservations.allAcco;
      console.log(reservations);
    });
  }



}
