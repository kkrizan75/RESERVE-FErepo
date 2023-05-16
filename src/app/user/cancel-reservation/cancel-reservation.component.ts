import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllReservationInfo } from 'src/app/admin/model/AllReservationInfo';
import { UserService } from '../service/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.css']
})
export class CancelReservationComponent {

  constructor(private router: Router,private userService: UserService) {}
  public reservationList: AllReservationInfo[] = [];
  public reservationListTwo: AllReservationInfo[] = [];
  
  getToken(): any {
    const token =  localStorage.getItem("token");
     try {
       return jwt_decode(token ? token : "");
     } catch(Error) {
       return null;
     }
  }
  public ngOnInit() {
    this.reservationListFunction();
  }

  public reservationListFunction(){
    this.userService.resListFunction().subscribe((result) => {
      console.log(result.length)
      result.forEach(element=>{
        this.reservationList.push(element)
      })
      this.reservationList.forEach(element=>{
        this.reservationListTwo.push(element)
      })
    });
  }

  public cancel(id : string){
    console.log(id)
    this.userService.cancelRes(id).subscribe(el =>{
      console.log(el)
    })
  }

}
