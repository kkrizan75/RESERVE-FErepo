import { BookingRequestsComponent } from './../booking-requests/booking-requests.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Acommodation } from '../model/AcommodationModel';
import {MatTableDataSource} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateFreeTerminComponent } from '../add-update-free-termin/add-update-free-termin.component';
import { AddUpdatePriceComponent } from '../add-update-price/add-update-price.component';

const ELEMENT_DATA: Acommodation[] = [
  {id: '1', name: 'Vila Idila', location: 'Novi Sad', minNumGuest: 2, maxNumGuest: 8, photos : 'http//local:c/gitHub/Images/Ker.jpg', features : 'Klima, Wifi'},
  {id: '2', name: 'Vila Varga', location: 'Novi Sad', minNumGuest: 2, maxNumGuest: 8, photos : 'http//local:c/gitHub/Images/Ker.jpg', features : 'Klima, Wifi'},
  {id: '3', name: 'Novi Sad 2', location: 'Smederevo', minNumGuest: 1, maxNumGuest: 11, photos : 'http//local:c/gitHub/Images/Ker2.jpg', features : 'Terasa'},
  {id: '4', name: 'Telep Top', location: 'Banjica', minNumGuest: 1, maxNumGuest: 9, photos : 'http//local:c/gitHub/Images/Macka.jpg', features : 'Pusenje dozvoljeno'},
  {id: '5', name: 'BG palata', location: 'Beograd', minNumGuest: 1, maxNumGuest: 25, photos : 'http//local:c/gitHub/Images/Nesto.jpg', features : 'Klima, Parking'},
  {id: '6', name: 'Niska tvrdjava', location: 'Nis', minNumGuest: 5, maxNumGuest: 20, photos : 'http//local:c/gitHub/Images/Drugo.jpg', features : 'Klima'},
  
];


@Component({
  selector: 'app-acommodation-list',
  templateUrl: './acommodation-list.component.html',
  styleUrls: ['./acommodation-list.component.css']
})
export class AcommodationListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'location', 'minGuests', 'maxGuests', 'addTermin', 'cena', 'zahtevi'];

  public dataSource = ELEMENT_DATA;

  //public dataSource = new MatTableDataSource<Acommodation>();
  public acommodation: Acommodation = new Acommodation ;
  public acommodations: Acommodation[] = [];

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

  public addUpdateTermin(selectedAcommodation: Acommodation): void {
    this.dialog.open(AddUpdateFreeTerminComponent, {
      width: '50%',
      data: selectedAcommodation
    });
  }

  public addUpdatePrice(selectedAcommodation: Acommodation): void {
    this.dialog.open(AddUpdatePriceComponent, {
      width: '50%',
      data: selectedAcommodation
    });
  }

  public bookingRequests(selectedAcommodation: Acommodation): void {
    this.dialog.open(BookingRequestsComponent, {
      width: '70%',
      data: selectedAcommodation
    });
  }

}
