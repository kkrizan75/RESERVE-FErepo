import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { CreateAcommodationComponent } from './create-acommodation/create-acommodation/create-acommodation.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select"
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Temp2Component } from './temp2/temp2.component';
import { MatButtonModule } from '@angular/material/button';
import { AcommodationListComponent } from './acommodation-list/acommodation-list.component';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AddUpdateFreeTerminComponent } from './add-update-free-termin/add-update-free-termin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddUpdatePriceComponent } from './add-update-price/add-update-price.component'
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BookingRequestsComponent } from './booking-requests/booking-requests.component'
import { MatIconModule } from '@angular/material/icon';
import { AcceptReservationComponent } from './accept-reservation/accept-reservation.component';

const routes: Routes = [
    {
        path: 'admin', 
        children: [
            {
              path: 'createAcommodation',
              component: CreateAcommodationComponent,
            },
            {
              path: 'acommodationList',
              component: AcommodationListComponent,
            },
            {
              path: 'acceptReservation',
              component: AcceptReservationComponent,
            },
        ],
        data: {roles:['Admin']}
        
    }]

@NgModule({
  declarations: [
    CreateAcommodationComponent,
    Temp2Component,
    AcommodationListComponent,
    AddUpdateFreeTerminComponent,
    AddUpdatePriceComponent,
    BookingRequestsComponent,
    AcceptReservationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
})
export class AdminModule { }