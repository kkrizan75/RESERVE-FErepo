import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AllAccoInfo } from '../model/Accommodation';
import { ReserveInfo } from '../model/ReserveInfo';

interface Accep {
  greeting: string;
  // add other properties here if needed
}

@Component({
  selector: 'app-reservation-request',
  templateUrl: './reservation-request.component.html',
  styleUrls: ['./reservation-request.component.css']
})


export class ReservationRequestComponent {

  constructor(private router: Router,private userService: UserService) {}

  accoList: AllAccoInfo[] = [];
  selectedAccoId: string = this.accoList.length > 0 ? this.accoList[0].id : '';
  acception?: string;

  registerForm = new FormGroup({
    startDate: new FormControl('', [
    ]),
    endDate: new FormControl( '', [
    ]),
    numberOfPeople: new FormControl(0, [
    ]),
    selectedAccoId:new FormControl( '', [
    ])
  });

  ngOnInit() {
    this.userService.getAllAcco().subscribe((data) => {
      if(data.allAcco)
      data.allAcco.forEach((element :any) => {
        this.accoList.push(element)
      });
    })
  }

  RequestReservation(){
    this.userService.getAcceptionAcco("" + this.registerForm?.get('selectedAccoId')?.value).subscribe((res) => {
      this.acception = res.greeting
      const reserveInfo:ReserveInfo = 
      {
      fromDate : "" + this.registerForm.get('startDate')?.value + "T15:04:05Z",
      toDate :"" + this.registerForm.get('endDate')?.value + "T15:04:05Z",
      guestNumber : parseInt("" + this.registerForm?.get('numberOfPeople')?.value,10),
      accommodation :""+this.registerForm?.get('selectedAccoId')?.value,
      accepted :"",
      acception : this.acception ? this.acception : '', 
    } 
    console.log(reserveInfo)
    this.userService.RequestReservation(reserveInfo);
    })
    
    
  }

  redirectToLogin(){
    this.router.navigate(['/user/myProfile']);
  }
}
