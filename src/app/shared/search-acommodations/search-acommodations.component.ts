import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Acommodation } from '../../admin/model/AcommodationModel';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

const ELEMENT_DATA: Acommodation[] = [
  {id: '1', name: 'Vila Idila', location: 'Novi Sad', minNumGuest: 2, maxNumGuest: 8, photos : 'http//local:c/gitHub/Images/Ker.jpg', features : 'Klima, Wifi'},
  {id: '2', name: 'Vila Varga', location: 'Novi Sad', minNumGuest: 2, maxNumGuest: 8, photos : 'http//local:c/gitHub/Images/Ker.jpg', features : 'Klima, Wifi'},
  {id: '3', name: 'Novi Sad 2', location: 'Smederevo', minNumGuest: 1, maxNumGuest: 11, photos : 'http//local:c/gitHub/Images/Ker2.jpg', features : 'Terasa'},
  {id: '4', name: 'Telep Top', location: 'Banjica', minNumGuest: 1, maxNumGuest: 9, photos : 'http//local:c/gitHub/Images/Macka.jpg', features : 'Pusenje dozvoljeno'},
  {id: '5', name: 'BG palata', location: 'Beograd', minNumGuest: 1, maxNumGuest: 25, photos : 'http//local:c/gitHub/Images/Nesto.jpg', features : 'Klima, Parking'},
  {id: '6', name: 'Niska tvrdjava', location: 'Nis', minNumGuest: 5, maxNumGuest: 20, photos : 'http//local:c/gitHub/Images/Drugo.jpg', features : 'Klima'},
  
];


@Component({
  selector: 'app-search-acommodations',
  templateUrl: './search-acommodations.component.html',
  styleUrls: ['./search-acommodations.component.css']
})
export class SearchAcommodationsComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'location', 'minGuests', 'maxGuests', 'totalPrice', 'dailyPrice']; 

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

  public searchAcommodations(): void{

  }
  
}
