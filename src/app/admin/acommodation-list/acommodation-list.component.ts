import { BookingRequestsComponent } from './../booking-requests/booking-requests.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateFreeTerminComponent } from '../add-update-free-termin/add-update-free-termin.component';
import { AddUpdatePriceComponent } from '../add-update-price/add-update-price.component';
import { AcommodationService } from '../service/acommodation.service';
import { Acommodation } from '../../shared/model/Acommodation';
import { MatSort, Sort } from '@angular/material/sort';


@Component({
  selector: 'app-acommodation-list',
  templateUrl: './acommodation-list.component.html',
  styleUrls: ['./acommodation-list.component.css']
})

export class AcommodationListComponent implements OnInit, AfterViewInit  {

  constructor(private _liveAnnouncer: LiveAnnouncer, private acommodationService: AcommodationService, public dialog: MatDialog) {}

  public displayedColumns: string[] = ['name', 'location', 'minGuests', 'maxGuests'];

  public dataSource = new MatTableDataSource<Acommodation>();
  public acommodations: Acommodation[] = [];

  //public acommodation: Acommodation = { allAcco: [] };
  

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.showAllAcommodations();
  }

  public showAllAcommodations(): void {
    this.acommodationService.getAllAcommodations().subscribe(
      res => {
        this.acommodations = res;
        console.log(this.acommodations);
        this.dataSource.data = this.acommodations;
        console.log(this.dataSource.data);
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

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
