import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Acommodation } from '../model/Acommodation';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AcommodationService } from '../../admin/service/acommodation.service';


@Component({
  selector: 'app-search-acommodations',
  templateUrl: './search-acommodations.component.html',
  styleUrls: ['./search-acommodations.component.css']
})
export class SearchAcommodationsComponent implements AfterViewInit , OnInit {
  
  displayedColumns: string[] = ['name', 'location', 'minGuests', 'maxGuests']; 

  isSearchClicked : boolean = false;
  isResetClicked : boolean = false;

  dataSource = new MatTableDataSource<Acommodation>();
  acommodations: Acommodation[] = [];
  searchAcommodation: Acommodation = new Acommodation;

  constructor(private _liveAnnouncer: LiveAnnouncer, private acommodationService: AcommodationService) {}

  ngOnInit(): void {
    this.showAllAcommodations();
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


  public searchAcommodations(): void{
    console.log(this.searchAcommodation);
    this.isSearchClicked = true;
    this.isResetClicked = false;
    this.acommodationService.searchAccommodations(this.searchAcommodation.location, this.searchAcommodation.availableFrom, this.searchAcommodation.availableTo, this.searchAcommodation.maxGuests).subscribe(res => {
      this.acommodations = res;
      this.dataSource.data = this.acommodations;
      console.log(this.acommodations);
    })
  }

  public resetTable(): void {
    this.isResetClicked = true;
    this.isSearchClicked = false;
    this.searchAcommodation.location = '';
    this.searchAcommodation.maxGuests = 0;
    this.searchAcommodation.availableFrom = '';
    this.searchAcommodation.availableTo = '';
    this.showAllAcommodations();
  }
  
}
