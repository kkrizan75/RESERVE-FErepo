import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-request',
  templateUrl: './reservation-request.component.html',
  styleUrls: ['./reservation-request.component.css']
})


export class ReservationRequestComponent {

  constructor(private router: Router) {}



  reservationApartments = [
    { id:2, xd: "lol"},
    { id:3, xd: "waw"}
  ];

  registerForm = new FormGroup({
    idHotel: new FormControl('', [
    ]),
    startDate: new FormControl(new Date, [
    ]),
    endDate: new FormControl( new Date, [
    ]),
    numberOfPeople: new FormControl(0, [
    ]),
  });

  RequestReservation(){

  }

  redirectToLogin(){
    this.router.navigate(['/user/myProfile']);
  }
}
