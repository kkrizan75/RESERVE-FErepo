import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { ReservationRequestComponent } from './reservation-request/reservation-request.component';

const routes: Routes = [
  {
    path: 'user',
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'myProfile', 
        component: MyProfileComponent,
      },
      {
        path: 'reservationReq',
        component: ReservationRequestComponent
      }
    ],
    //data: {roles:['']}
    
  }]

@NgModule({
  declarations: [
    MyProfileComponent,
    ReservationRequestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
